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
 ╭─────────────────────❖
 │𝘔𝘈𝘓𝘈𝘒𝘈 SONG DOWNLOADING 
 ╰─────────────────────❖
 ──────────────────❖
╭────────────────❖
│ ℹ️ *DARK_ALFHA_MD* 
│
│☍ ⦁ *Title:* ${video.title} 
│☍ ⦁ *Duration:* ${video.timestamp}
│☍ ⦁ *Views:* ${video.views} 
│☍ ⦁ *Uploaded On:* ${video.ago} 
╰────────────────❖
❖──────────────────❖
╭──────────────────❖
│ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢
│
│ *➀*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶
│──────────────────❖
│ *➁*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂
⁠⁠⁠⁠╰──────────────────❖
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
  }catch(e){
console.log(e)
reply(`${e}`)
}
})
