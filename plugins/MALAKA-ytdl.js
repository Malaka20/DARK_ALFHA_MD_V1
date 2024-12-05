const { cmd, commands } = require("../command");
const yts = require("yt-search");
const { fetchJson } = require("../lib/functions");
const axios = require("axios");

// Function to download YouTube video in MP4 format
async function ytmp4(url, format) {
  try {
    if (!url || !format) {
      throw new Error("URL and format parameters are required.");
    }

    const formatNumber = parseInt(format.replace('p', ''), 10);
    const params = {
      button: 1,
      start: 1,
      end: 1,
      format: formatNumber,
      url: url,
    };

    const headers = {
      Accept: '*/*',
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      Origin: "https://loader.to",
      Referer: "https://loader.to",
      'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': '"Android"',
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36",
    };

    // Fetch download ID
    const response = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      params,
      headers,
    });
    const downloadId = response.data.id;

    // Function to check progress and get download URL
    const checkProgress = async () => {
      try {
        const progressResponse = await axios.get('https://p.oceansaver.in/ajax/progress.php', {
          params: { id: downloadId },
          headers,
        });
        const { progress, download_url: downloadUrl, text } = progressResponse.data;

        return text === 'Finished' 
          ? downloadUrl 
          : (await new Promise(resolve => setTimeout(resolve, 1000)), checkProgress());
      } catch (error) {
        throw new Error("Error in progress check: " + error.message);
      }
    };

    return await checkProgress();
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message };
  }
}

module.exports = { ytmp4 };

// Utility function to extract YouTube video ID
function extractYouTubeId(link) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(regex);
  return match ? match[1] : null;
}

// Utility function to convert shortened YouTube links to full URLs
function convertYouTubeLink(link) {
  const videoId = extractYouTubeId(link);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : link;
}

// Register the "song" command
cmd({
  pattern: "song",
  alias: 'play',
  desc: "To download songs.",
  react: '🎵',
  category: "download",
  filename: __filename
}, async (bot, message, options, context) => {
  try {
    const { from, quoted, q, reply } = context;

    if (!q) {
      return reply("Please provide a URL or title.");
    }

    const searchQuery = convertYouTubeLink(q);
    const searchResult = await yts(searchQuery);
    const video = searchResult.videos[0];

    if (!video) {
      return reply("No results found.");
    }

    const videoUrl = video.url;
    const caption = `
◉ *Lααɾα-ꜱᴏɴɢ* ⚬
━━━━━━━━━━━━━━
🎵 *Title:* ${video.title}
⏱ *Duration:* ${video.timestamp}
👀 *Views:* ${video.views}
📅 *Uploaded On:* ${video.ago}
━━━━━━━━━━━━━━

🔢 Reply with the number to select a format:

1️⃣ Download as *Audio 🎧*
2️⃣ Download as *Document 📁*
    `;

    const messageId = (await bot.sendMessage(from, { image: { url: video.thumbnail }, caption }, { quoted })).key.id;

    bot.ev.on("messages.upsert", async event => {
      const incomingMessage = event.messages[0];

      if (!incomingMessage.message) return;

      const userResponse = incomingMessage.message.conversation;
      const isReplyToMessage = incomingMessage.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;

      if (isReplyToMessage) {
        const audioDownload = await fetchJson(`https://www.dark-yasiya-api.site/download/ytmp3?url=${videoUrl}`);
        const downloadLink = audioDownload.result.dl_link;

        if (userResponse === '1') {
          await bot.sendMessage(from, {
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
          }, { quoted: incomingMessage });
        } else if (userResponse === '2') {
          await bot.sendMessage(from, {
            document: { url: downloadLink },
            mimetype: "audio/mp3",
            fileName: `${video.title}.mp3`,
            caption: "© Created by Sadeesha Coder"
          }, { quoted: incomingMessage });
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply(String(error));
  }
});
