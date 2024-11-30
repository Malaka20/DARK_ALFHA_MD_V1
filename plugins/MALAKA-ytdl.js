const { cmd, commands } = require("../command");
const yts = require("yt-search");
const fg = require("api-dylux");
const axios = require('axios');

// Function to download YouTube audio using a specific API
async function dlyta(url) {
  try {
    for (let i = 0; i < 10; i++) {
      const response = await fetch("https://api-pink-venom.vercel.app/api/ytdl?url=" + url);
      const data = await response.json();
      if (data.result.download_url) {
        return {
          status: true,
          dl_link: data.result.download_url
        };
      }
    }
    await new Promise(resolve => setTimeout(resolve, 4000));
    return {
      status: false,
      msg: "error"
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      msg: error.message
    };
  }
}

// Function to download YouTube video in a specified format
async function ytmp4(url, format) {
  try {
    if (!url || !format) {
      throw new Error("url and format parameters are required.");
    }
    const formatInt = parseInt(format.replace('p', ''), 10);
    const params = {
      button: 1,
      start: 1,
      end: 1,
      format: formatInt,
      url: url
    };
    const headers = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      Origin: 'https://loader.to',
      Referer: "https://loader.to",
      "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      "Sec-Ch-Ua-Mobile": '?1',
      "Sec-Ch-Ua-Platform": "\"Android\"",
      "Sec-Fetch-Dest": 'empty',
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": 'cross-site',
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const response = await axios.get("https://ab.cococococ.com/ajax/download.php", { params, headers });
    const id = response.data.id;

    const checkProgress = async () => {
      try {
        const progressResponse = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          params: { id },
          headers
        });
        const { progress, download_url, text } = progressResponse.data;
        return text === 'Finished' ? download_url : (await new Promise(resolve => setTimeout(resolve, 1000)), checkProgress());
      } catch (error) {
        throw new Error("Error in progress check: " + error.message);
      }
    };

    return await checkProgress();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  dlyta,
  ytmp4
};

function extractYouTubeId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function convertYouTubeLink(url) {
  const id = extractYouTubeId(url);
  return id ? "https://www.youtube.com/watch?v=" + id : url;
}

// Command to download songs
cmd({
  pattern: "song",
  alias: "play",
  desc: "To download songs.",
  react: "🎵",
  category: "download",
  filename: __filename,
}, async (bot, message, args, context) => {
  try {
    const {
      from,
      quoted,
      body,
      q: query,
      reply,
    } = context;

    if (!query) {
      return reply("Please provide a URL or song title.");
    }

    // Convert query to a valid YouTube link or search query
    const searchQuery = convertYouTubeLink(query);

    // Perform YouTube search
    const searchResults = await yts(searchQuery);
    const video = searchResults.videos[0];
    if (!video) {
      return reply("No results found.");
    }

    const videoUrl = video.url;

    // Send initial message with options
    const initialMessage = await bot.sendMessage(from, {
      image: { url: video.thumbnail },
      caption: `
*◉ SILENT-SOBX-MD ◉*

┏━━━━━━━━━━━━━
┃ SILENT-SOBX-MD SONG DOWNLOAD ✻
┗━━━━━━━━━━━━━

🔢 *Reply with a number to download format:*

1. 🎧 *Audio*
2. 📁 *Document*

> Silent-SOBX-MD Bot ✻
      `,
    }, { quoted });

    const initialMessageId = initialMessage.key.id;

    // Listen for user response
    bot.ev.on("messages.upsert", async (update) => {
      const userMessage = update.messages[0];
      if (!userMessage.message) return;

      const userResponse = userMessage.message.conversation || userMessage.message.extendedTextMessage?.text;
      const userJid = userMessage.key.remoteJid;

      // Check if the user's reply is to the bot's initial message
      const isReplyToBot = userMessage.message.extendedTextMessage?.contextInfo?.stanzaId === initialMessageId;
      if (!isReplyToBot) return;

      // React to indicate processing
      await bot.sendMessage(userJid, {
        react: { text: "⬇️", key: userMessage.key },
      });

      // Fetch the download link
      const downloadResponse = await fetchJson(`https://api.giftedtech.my.id/api/download/ytmp3?apikey=gifted&url=${videoUrl}`);
      const downloadUrl = downloadResponse.result.download_url;

      // Delete the initial message
      await bot.sendMessage(userJid, { delete: initialMessage.key });

      // Send the requested format
      if (userResponse === "1") {
        // Send audio
        await bot.sendMessage(userJid, {
          audio: { url: downloadUrl },
          mimetype: "audio/mpeg",
          contextInfo: {
            externalAdReply: {
              title: video.title,
              body: video.videoId,
              mediaType: 1,
              sourceUrl: video.url,
              thumbnailUrl: video.thumbnail,
              renderLargerThumbnail: true,
              showAdAttribution: true,
            },
          },
        }, { quoted: userMessage });

      } else if (userResponse === "2") {
        // Send document
        await bot.sendMessage(userJid, {
          document: { url: downloadUrl },
          mimetype: "audio/mp3",
          fileName: `${video.title}.mp3`,
          caption: "© Created by Silent Lover · · · 432",
        }, { quoted: userMessage });
      }

      // React to indicate success
      await bot.sendMessage(userJid, {
        react: { text: "✅", key: userMessage.key },
      });
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});

//==========video download============================
cmd({
  pattern: 'video',
  desc: "To download videos.",
  react: '🎥',
  category: "download",
  filename: __filename
}, async (client, message, _, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    // Check if URL or title is provided
    if (!q) {
      return reply("Please give me a URL or title.");
    }

    // Convert input to YouTube link format
    q = convertYouTubeLink(q);

    // Search for the YouTube video
    const searchResults = await yts(q);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    // Construct the details message
    let detailsMessage = `
      ╭─────────────────❖
      │𝘔𝘈𝘓𝘈𝘒𝘈 VIDEO DOWNLOADING
      ╰─────────────────❖
       ──────────────────❖
      ╭────────────────❖
      │ ℹ️ *DARK_ALFHA_MD* 
      │
      │☍ ⦁ *Title:* ${video.title}
      │☍ ⦁ *Duration:* ${video.timestamp}
      │☍ ⦁ *Views:* ${video.views}
      │☍ ⦁ *Uploaded On:* ${video.ago}
      ╰────────────────❖  
       ──────────────────❖
      ╭──────────────────
      │ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢
      │
      │ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ 📽️
      │ _➀.➀ 360ᴘ
      │ _➀.➁ 480ᴘ
      │ _➀.➂ 720ᴘ
      │ _➀.➃ 1080ᴘ
      │ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ 📂
      │ _➁.➀ 360ᴘ
      │ _➁.➁ 480ᴘ
      │ _➁.➂ 720ᴘ
      │ _➁.➃ 1080ᴘ
      ╰──────────────────❖
     > © ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ . . . 👩‍💻
    `;

    // Send the image with the details message
    const sentMessage = await client.sendMessage(from, {
      image: { url: video.thumbnail },
      caption: detailsMessage
    });

    const messageId = sentMessage.key.id;

    // Listen for further messages in the conversation
    client.ev.on("messages.upsert", async upsert => {
      const receivedMessage = upsert.messages[0];
      if (!receivedMessage.message) {
        return;
      }

      const text = receivedMessage.message.conversation || receivedMessage.message.extendedTextMessage?.text;
      const chatId = receivedMessage.key.remoteJid;
      const isReply = receivedMessage.message.extendedTextMessage && receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === messageId;

      if (isReply) {
        // React to the message
        await client.sendMessage(chatId, {
          react: {
            text: '⬇️',
            key: receivedMessage.key
          }
        });

        // Download and send the video based on the user's choice
        let resolution = '';
        switch (text) {
          case "1.1":
            resolution = "360p";
            break;
          case "1.2":
            resolution = "480p";
            break;
          case "1.3":
            resolution = "720p";
            break;
          case "1.4":
            resolution = "1080p";
            break;
          case "2.1":
            resolution = "360";
            break;
          case "2.2":
            resolution = "480";
            break;
          case "2.3":
            resolution = "720";
            break;
          case "2.4":
            resolution = "1080";
            break;
          default:
            return;
        }

        const videoUrlWithResolution = await ytmp4(videoUrl, resolution);

        await client.sendMessage(chatId, {
          react: {
            text: '⬆️',
            key: receivedMessage.key
          }
        });

        if (text.startsWith("1.")) {
          await client.sendMessage(chatId, {
            video: { url: videoUrlWithResolution },
            caption: "\n* © ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ . . . 👩‍💻*\n"
          }, {
            quoted: receivedMessage
          });
        } else {
          await client.sendMessage(chatId, {
            document: { url: videoUrlWithResolution },
            mimetype: "video/mp4",
            fileName: `${video.title}.mp4`,
            caption: "\n* © ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ . . . 👩‍💻 *\n"
          }, {
            quoted: receivedMessage
          });
        }

        await client.sendMessage(chatId, {
          react: {
            text: '✅',
            key: receivedMessage.key
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
