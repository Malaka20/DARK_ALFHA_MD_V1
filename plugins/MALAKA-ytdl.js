const { cmd, commands } = require("../command");
const yts = require("yt-search");
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
  filename: __filename
}, async (bot, message, context, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // Check if a query is provided
    if (!q) {
      return reply("Please give me a URL or title.");
    }

    // Convert query to YouTube link and search for the video
    q = convertYouTubeLink(q);
    const searchResult = await yts(q);
    const video = searchResult.videos[0];
    const videoUrl = video.url;

    // Prepare the message with video details
    let messageCaption = `
◉┏━┫*⚬Lααɾα-ꜱᴏɴɢ⚬*┣━✾
◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┏┻━━━━━━━━━━━━━
┃*Lααɾα-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ ✻*
┗━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━
❍*ᴛɪᴛʟᴇ :* ${video.title}
❍*ᴅᴜʀᴀᴛɪᴏɴ :* ${video.timestamp}
❍*ᴠɪᴇᴡꜱ :* ${video.views}
❍*ᴜᴘʟᴏᴀᴅ ᴏɴ :* ${video.ago}
┗━━━━━━━━━━━━━━━
╭──┬┬┬┬┬┬┬┬┬┬┬──
│        *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀͨᴅͦᴇͩᴇͤꜱͬʜᴀ*
╰──┴┴┴┴┴┴┴┴┴┴┴──

🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*
*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*

*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧*

*1*     ┃  *ᴀᴜᴅɪᴏ*

*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*

*2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*

> Lααɾα-ᴍᴅ ✻
`;

    // Send the initial message with video details
    const sentMessage = await bot.sendMessage(from, {
      image: { url: video.thumbnail },
      caption: messageCaption
    }, { quoted });

    // Store the message ID for reference
    const sentMessageId = sentMessage.key.id;

    // Listen for replies to the sent message
    bot.ev.on("messages.upsert", async (upsert) => {
      const newMessage = upsert.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const replyJid = newMessage.key.remoteJid;
      const isReplyToSentMessage = newMessage.message.extendedTextMessage && newMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessageId;

      if (isReplyToSentMessage) {
        // React with a down arrow emoji
        await bot.sendMessage(replyJid, {
          react: { text: '⬇️', key: newMessage.key }
        });

        // Fetch the download link for the audio
        const downloadData = await fetchJson(`https://www.dark-yasiya-api.site/download/ytmp3?url=${videoUrl}`);
        const downloadLink = downloadData.result.dl_link;

        // Delete the initial message and react with an up arrow emoji
        await bot.sendMessage(replyJid, { delete: sentMessage.key });
        await bot.sendMessage(replyJid, {
          react: { text: '⬆️', key: newMessage.key }
        });

        // Send the audio or document based on the user's reply
        if (userReply === '1') {
          await bot.sendMessage(replyJid, {
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

          // React with a checkmark emoji
          await bot.sendMessage(replyJid, {
            react: { text: '✅', key: newMessage.key }
          });
        } else if (userReply === '2') {
          await bot.sendMessage(replyJid, {
            document: { url: downloadLink },
            mimetype: "audio/mp3",
            fileName: `${video.title}.mp3`,
            caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n "
          }, { quoted: newMessage });

          // React with a checkmark emoji
          await bot.sendMessage(replyJid, {
            react: { text: '✅', key: newMessage.key }
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    reply(`${error}`);
  }
});
      
            
