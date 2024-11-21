 const { cmd, commands } = require("../command");
const yts = require("yt-search");
const axios = require("axios");
const fg = require("api-dylux");

async function ytmp3(url) {
  try {
    if (!url) throw new Error("URL parameter is required");

    const { title, dl_url } = await fg.yta(url);
    return {
      status: true,
      Created_by: "Janith Rashmika",
      title,
      dl_link: dl_url
    };
  } catch (error) {
    return { status: false, error: error.message };
  }
}

async function ytmp4(url, format) {
  try {
    if (!url || !format) throw new Error("Both URL and format parameters are required.");

    const formatInt = parseInt(format.replace('p', ''), 10);
    const requestConfig = {
      params: { button: 1, start: 1, end: 1, format: formatInt, url },
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        Origin: "https://loader.to",
        Referer: "https://loader.to",
        "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
        "Sec-Ch-Ua-Mobile": '?1',
        "Sec-Ch-Ua-Platform": "\"Android\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
      }
    };

    const { data: initialResponse } = await axios.get("https://ab.cococococ.com/ajax/download.php", requestConfig);
    const id = initialResponse.id;

    async function checkProgress() {
      try {
        const { data: progressResponse } = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          params: { id },
          headers: requestConfig.headers
        });
        const { progress, download_url, text } = progressResponse;

        if (text === "Finished") return download_url;
        await new Promise(resolve => setTimeout(resolve, 1000));
        return checkProgress();
      } catch (error) {
        throw new Error("Error in progress check: " + error.message);
      }
    }

    return await checkProgress();
  } catch (error) {
    return { status: false, error: error.message };
  }
}

const utils = { ytmp3, ytmp4 };
module.exports = utils;

function extractYouTubeId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function convertYouTubeLink(url) {
  const id = extractYouTubeId(url);
  return id ? `https://www.youtube.com/watch?v=${id}` : url;
}
// Command to download songs
cmd({
  pattern: "song",
  alias: "play",
  desc: "To download songs.",
  react: '🎵',
  category: 'download',
  filename: __filename
}, async (bot, message, args, context) => {
  try {
    const { from, q, reply } = context;
    if (!q) {
      return reply("Please give me a URL or title.");
    }
    const searchQuery = convertYouTubeLink(q);
    const searchResult = await yts(searchQuery);
    const video = searchResult.videos[0];
    const videoUrl = video.url;

    const caption = `
 ╭─────────────────✩
 │𝘔𝘈𝘓𝘈𝘒𝘈 SONG DOWNLOADING 🎧
 ╰─────────────────✩
 ──────────────────✩
✯ *Title:* ${video.title} 
✯ *Duration:* ${video.timestamp} 
✯ *Views:* ${video.views} 
✯ *Uploaded On:* ${video.ago} 
✯ *Link:* ${video.url}
✩──────────────────✩
╭──────────────────✩
│ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: ⬇️
│
│ *➀*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶
│ *➁*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂
⁠⁠⁠⁠╰──────────────────✩
> ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ . . . 👩‍💻
`;

    const messageResponse = await bot.sendMessage(from, {
      image: { url: video.thumbnail },
      caption
    });

    const messageId = messageResponse.key.id;

    bot.ev.on("messages.upsert", async msg => {
      const newMessage = msg.messages[0];
      if (!newMessage.message) return;

      const { conversation, extendedTextMessage } = newMessage.message;
      const userReply = conversation || extendedTextMessage?.text;
      const remoteJid = newMessage.key.remoteJid;

      if (extendedTextMessage?.contextInfo?.stanzaId === messageId) {
        await bot.sendMessage(remoteJid, {
          react: { text: '⬇️', key: newMessage.key }
        });

        const downloadResponse = await dlyta(videoUrl);
        const downloadLink = downloadResponse.dl_link;

        await bot.sendMessage(remoteJid, {
          react: { text: '⬆️', key: newMessage.key }
        });

        if (userReply === '1') {
          await bot.sendMessage(remoteJid, {
            audio: { url: downloadLink },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: video.title,
                body: video.videoId,
                mediaType: 1,
                sourceUrl: video.url,
                thumbnailUrl: video.thumbnail,
                renderLargerThumbnail: true,
                showAdAttribution: true
              }
            }
          }, { quoted: newMessage });

          await bot.sendMessage(remoteJid, {
            react: { text: '✅', key: newMessage.key }
          });

        } else if (userReply === '2') {
          await bot.sendMessage(remoteJid, {
            document: { url: downloadLink },
            mimetype: 'audio/mp3',
            fileName: video.title + ".mp3",
            caption: "\n*© ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ · · ·*\n "
          }, { quoted: newMessage });

          await bot.sendMessage(remoteJid, {
            react: { text: '✅', key: newMessage.key }
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply('' + error);
  }
});

cmd({
  pattern: 'video',
  desc: "To download videos.",
  react: '🎥',
  category: "download",
  filename: __filename
}, async (bot, message, args) => {
  try {
    const { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply } = message;
    
    if (!q) {
      return reply("Please give me a URL or title.");
    }

    const videoLink = convertYouTubeLink(q);
    const searchResults = await yts(videoLink);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const responseMessage = `
      *Title:* ${video.title}
      *Duration:* ${video.timestamp}
      *Views:* ${video.views}
      *Uploaded On:* ${video.ago}
      *Link:* ${video.url}
      
      Reply with the number to download:
      1.1 (360p)
      1.2 (480p)
      1.3 (720p)
      1.4 (1080p)
      
      Created by Sadeesha Coder
    `;

    const sentMessage = await bot.sendMessage(from, { image: { url: video.thumbnail }, caption: responseMessage });
    const messageId = sentMessage.key.id;

    bot.ev.on("messages.upsert", async (upsertedMessages) => {
      const incomingMessage = upsertedMessages.messages[0];
      if (!incomingMessage.message) return;

      const text = incomingMessage.message.conversation || incomingMessage.message.extendedTextMessage?.text;
      const isResponseToBot = incomingMessage.message.extendedTextMessage && incomingMessage.message.extendedTextMessage.contextInfo.stanzaId === messageId;

      if (isResponseToBot) {
        await bot.sendMessage(incomingMessage.key.remoteJid, { react: { text: '⬇️', key: incomingMessage.key } });

        let videoResolution;
        switch (text) {
          case "1.1": videoResolution = "360p"; break;
          case "1.2": videoResolution = "480p"; break;
          case "1.3": videoResolution = "720p"; break;
          case "1.4": videoResolution = "1080p"; break;
          default: return;
        }

        const videoFileUrl = await ytmp4(videoUrl, videoResolution);
        await bot.sendMessage(incomingMessage.key.remoteJid, { react: { text: '⬆️', key: incomingMessage.key } });

        await bot.sendMessage(incomingMessage.key.remoteJid, {
          video: { url: videoFileUrl },
          caption: "Created by Sadeesha Coder"
        }, { quoted: incomingMessage });

        await bot.sendMessage(incomingMessage.key.remoteJid, { react: { text: '✅', key: incomingMessage.key } });
      }
    });
  } catch (error) {
    console.error(error);
    reply(error.message);
  }
});

cmd({
  pattern: 'video',
  desc: "To download videos.",
  react: '🎥',
  category: "download",
  filename: __filename
}, async (client, message, args, context) => {
  const { from, quoted, body, command, args: cmdArgs, q, reply } = context;
  
  try {
    if (!q) return reply("Please give me a URL or title.");

    const searchQuery = convertYouTubeLink(q);
    const searchResults = await yts(searchQuery);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const responseMessage = `
      *╭─────────────────*
      │*⟱Aʅҽxα VIDEO DOWNLOADING⟱*
      *╰─────────────────*
      *──────────────────*
      ❍ *Title:* ${video.title}
      ❍ *Duration:* ${video.timestamp}
      ❍ *Views:* ${video.views}
      ❍ *Uploaded On:* ${video.ago}
      ❍ *Link:* ${video.url}
      *──────────────────*
      ╭──────────────────
      │ *⫷ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ⫸*
      │
      │ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ ❃
      │ _1.1 (360ᴘ)_
      │ _1.2 (480ᴘ)_
      │ _1.3 (720ᴘ)_
      │ _1.4 (1080ᴘ)_
      │ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ ❃
      │ _2.1 (360ᴘ)_
      │ _2.2 (480ᴘ)_
      │ _2.3 (720ᴘ)_
      │ _2.4 (1080ᴘ)_
      *╰──────────────────*
      *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
      > Aʅҽxα 👧🏻
    `;

    const sentMessage = await client.sendMessage(from, { image: { url: video.thumbnail }, caption: responseMessage });
    const originalMessageId = sentMessage.key.id;

    client.ev.on("messages.upsert", async (messageUpdate) => {
      const replyMessage = messageUpdate.messages[0];
      if (!replyMessage.message) return;

      const replyText = replyMessage.message.conversation || replyMessage.message.extendedTextMessage?.text;
      const replyContext = replyMessage.message.extendedTextMessage?.contextInfo?.stanzaId === originalMessageId;

      if (replyContext) {
        await client.sendMessage(replyMessage.key.remoteJid, { react: { text: '⬇️', key: replyMessage.key } });

        let quality;
        switch (replyText) {
          case "1.1":
          case "2.1":
            quality = "360p";
            break;
          case "1.2":
          case "2.2":
            quality = "480p";
            break;
          case "1.3":
          case "2.3":
            quality = "720p";
            break;
          case "1.4":
          case "2.4":
            quality = "1080p";
            break;
          default:
            return;
        }

        const videoLink = await ytmp4(videoUrl, quality);
        const messageType = replyText.startsWith("1") ? 'video' : 'document';
        const mimeType = messageType === 'video' ? null : "video/mp4";
        const fileName = messageType === 'document' ? `${video.title}.mp4` : null;

        await client.sendMessage(replyMessage.key.remoteJid, {
          [messageType]: { url: videoLink },
          mimetype: mimeType,
          fileName: fileName,
          caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
        }, { quoted: replyMessage });

        await client.sendMessage(replyMessage.key.remoteJid, { react: { text: '✅', key: replyMessage.key } });
      }
    });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
