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
  react: '🎵',
  category: "download",
  filename: __filename
}, async (context) => {
  const { from, quoted, body, reply } = context;
  
  try {
    let query = body;
    if (!query) {
      return reply("Please give me a URL or title.");
    }
    query = convertYouTubeLink(query);
    const searchResults = await yts(query);
    const video = searchResults.videos[0];
    const videoUrl = video.url;
    
    const sentMessage = await context.sendMessage(from, {
      image: { url: video.thumbnail },
      caption: `
*◉NETHU-MD◉* 

┏━━━━━━━━━━━━━
┃sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ ✻
┗━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━

🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*
*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*

*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧*

*1* ┃ *ᴀᴜᴅɪᴏ*

*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*

*2* ┃ *ᴅᴏᴄᴜᴍᴇɴᴛ*

> NETHU-MD ✻
`,
    }, { quoted });

    const messageId = sentMessage.key.id;
    
    context.ev.on("messages.upsert", async (messageUpdate) => {
      const newMessage = messageUpdate.messages[0];
      if (!newMessage.message) return;

      const messageText = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const remoteJid = newMessage.key.remoteJid;
      const isReplyToBotMessage = newMessage.message.extendedTextMessage?.contextInfo.stanzaId === messageId;

      if (isReplyToBotMessage) {
        await context.sendMessage(remoteJid, { react: { text: '⬇️', key: newMessage.key } });
        
        const downloadData = await fetchJson(`https://api.giftedtech.my.id/api/download/ytmp3?apikey=gifted&url=${videoUrl}`);
        const downloadUrl = downloadData.result.download_url;

        await context.sendMessage(remoteJid, { delete: sentMessage.key });
        await context.sendMessage(remoteJid, { react: { text: '⬆️', key: newMessage.key } });

        if (messageText === '1') {
          await context.sendMessage(remoteJid, {
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
                showAdAttribution: true
              }
            }
          }, { quoted: newMessage });

          await context.sendMessage(remoteJid, { react: { text: '✅', key: newMessage.key } });
        } else if (messageText === '2') {
          await context.sendMessage(remoteJid, {
            document: { url: downloadUrl },
            mimetype: "audio/mp3",
            fileName: `${video.title}.mp3`,
            caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*\n "
          }, { quoted: newMessage });

          await context.sendMessage(remoteJid, { react: { text: '✅', key: newMessage.key } });
        }
      }
    });
  } catch (error) {
    console.log(error);
    reply(`${error}`);
  }
});
          

//==========video download============================
cmd({
  pattern: 'video',
  desc: "To download videos.",
  react: '🎥',
  category: "download",
  filename: __filename
}, async (client, message, args, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q) {
      return reply("Please give me a URL or title.");
    }
    q = convertYouTubeLink(q);
    const searchResults = await yts(q);
    const videoDetails = searchResults.videos[0];
    const videoUrl = videoDetails.url;
    const sentMessage = await client.sendMessage(from, {
      image: { url: videoDetails.thumbnail },
      caption: `
*◉SILENT-SOBX-MD◉* 

┏━━━━━━━━━━━━━
┃sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ✻
┗━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━

🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*
*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*

*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*

*1.1*     ┃  *360ᴘ*
*1.2*     ┃  *480ᴘ*
*1.3*     ┃  *720ᴘ*
*1.4*     ┃  *1080ᴘ*

*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*

*2.1*     ┃  *360ᴘ*
*2.2*     ┃  *480ᴘ*
*2.3*     ┃  *720ᴘ*
*2.4*     ┃  *1080ᴘ*

> sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ-ʙᴏᴛ ✻
      `
    }, { quoted });

    const sentMessageId = sentMessage.key.id;

    client.ev.on('messages.upsert', async upsert => {
      const receivedMessage = upsert.messages[0];
      if (!receivedMessage.message) return;
      const receivedText = receivedMessage.message.conversation || receivedMessage.message.extendedTextMessage?.text;
      const remoteJid = receivedMessage.key.remoteJid;
      const isReplyToBot = receivedMessage.message.extendedTextMessage && receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessageId;

      if (isReplyToBot) {
        await client.sendMessage(remoteJid, { react: { text: '⬇️', key: receivedMessage.key } });

        let videoDownloadUrl;
        switch (receivedText) {
          case "1.1":
            videoDownloadUrl = await ytmp4(videoUrl, "360p");
            break;
          case "1.2":
            videoDownloadUrl = await ytmp4(videoUrl, "480");
            break;
          case "1.3":
            videoDownloadUrl = await ytmp4(videoUrl, '720');
            break;
          case "1.4":
            videoDownloadUrl = await ytmp4(videoUrl, "1080");
            break;
          case "2.1":
          case "2.2":
          case "2.3":
          case "2.4":
            const quality = receivedText.split('.')[1] === "1" ? "360" : receivedText.split('.')[1] === "2" ? "480" : receivedText.split('.')[1] === "3" ? "720" : "1080";
            videoDownloadUrl = await ytmp4(videoUrl, quality);
            await client.sendMessage(remoteJid, { document: { url: videoDownloadUrl }, mimetype: "video/mp4", fileName: videoDetails.title + ".mp4", caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*\n" }, { quoted: receivedMessage });
            await client.sendMessage(remoteJid, { react: { text: '✅', key: receivedMessage.key } });
            return;
        }

        await client.sendMessage(remoteJid, { delete: sentMessage.key });
        await client.sendMessage(remoteJid, { react: { text: '⬆️', key: receivedMessage.key } });
        await client.sendMessage(remoteJid, { video: { url: videoDownloadUrl }, caption: "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛ ʟᴏᴠᴇʀ · · ·⁴³²*\n" }, { quoted: receivedMessage });
        await client.sendMessage(remoteJid, { react: { text: '✅', key: receivedMessage.key } });
      }
    });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
