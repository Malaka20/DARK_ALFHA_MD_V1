const { cmd, commands } = require("../command");
const yts = require("yt-search");
const { fetchJson } = require("../lib/functions");
const axios = require("axios");

// YouTube MP4 download function
async function ytmp4(url, format) {
  try {
    if (!url || !format) {
      throw new Error("URL and format parameters are required.");
    }

    const resolution = parseInt(format.replace('p', ''), 10); // Convert format (e.g. '720p') to an integer (720)
    const requestParams = {
      button: 1,
      start: 1,
      end: 1,
      format: resolution,
      url: url
    };

    const requestHeaders = {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      Origin: 'https://loader.to',
      Referer: 'https://loader.to',
      'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': '"Android"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
    };

    const downloadResponse = await axios.get('https://ab.cococococ.com/ajax/download.php', {
      params: requestParams,
      headers: requestHeaders
    });

    const downloadId = downloadResponse.data.id;

    // Check download progress
    const checkProgress = async () => {
      const progressParams = { id: downloadId };
      try {
        const progressResponse = await axios.get('https://p.oceansaver.in/ajax/progress.php', {
          params: progressParams,
          headers: requestHeaders
        });
        const { progress, download_url, text } = progressResponse.data;

        // If download is finished, return the download URL, otherwise retry after 1 second
        return text === 'Finished' ? download_url : (await new Promise(resolve => setTimeout(resolve, 1000)), checkProgress());
      } catch (error) {
        throw new Error('Error in progress check: ' + error.message);
      }
    };

    return await checkProgress();
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}

module.exports = { ytmp4 };

// Function to extract YouTube video ID from URL
function extractYouTubeId(link) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(regex);
  return match ? match[1] : null;
}

// Function to convert partial YouTube links to full URL
function convertYouTubeLink(link) {
  const videoId = extractYouTubeId(link);
  if (videoId) {
    return 'https://www.youtube.com/watch?v=' + videoId;
  }
  return link;
}

// Command handler for downloading songs
cmd({
  pattern: 'song',
  alias: 'play',
  desc: 'To download songs.',
  react: '🎵',
  category: 'download',
  filename: __filename
}, async (bot, message, args, context) => {
  const {
    from, quoted, body, isCmd, command, args: commandArgs, q, isGroup, sender, senderNumber, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
  } = context;

  try {
    if (!q) {
      return reply('Please provide a URL or title.');
    }

    // Convert partial link to full YouTube link if necessary
    const searchQuery = convertYouTubeLink(q);
    const searchResults = await yts(searchQuery);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    let messageText = `\n◉┏━┫*⚬Lααɾα-ꜱᴏɴɢ⚬*┣━✾\n◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*\n┏┻━━━━━━━━━━━━━\n┃*Lααɾα-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ ✻*\n┗━━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━\n❍*Title :* ${video.title}\n❍*Duration :* ${video.timestamp}\n❍*Views :* ${video.views}\n❍*Uploaded on :* ${video.ago}\n┗━━━━━━━━━━━━━━━\n╭──┬┬┬┬┬┬┬┬┬┬┬──\n│        *Created by Sadeesha*\n╰──┴┴┴┴┴┴┴┴┴┴┴──\n\n🔢 *Reply with the number below to*\n*download in format*\n\n*Download Audio 🎧*\n\n*1*     ┃  *Audio*\n\n*Download Document 📁*\n\n*2*     ┃  *Document*\n\n> Lααɾα-ᴍᴅ ✻\n`;

    // Send initial message with video details and options
    const sentMessage = await bot.sendMessage(from, {
      image: { url: video.thumbnail },
      caption: messageText
    }, { quoted: message });

    const sentMessageId = sentMessage.key.id;

    bot.ev.on('messages.upsert', async (newMessage) => {
      const userResponse = newMessage.messages[0];
      if (!userResponse.message) return;

      const userText = userResponse.message.conversation || userResponse.message.extendedTextMessage?.text;
      const userChatId = userResponse.key.remoteJid;

      const isReplyToOriginal = userResponse.message.extendedTextMessage && userResponse.message.extendedTextMessage.contextInfo.stanzaId === sentMessageId;
      if (isReplyToOriginal) {
        await bot.sendMessage(userChatId, { react: { text: '⬇️', key: userResponse.key } });

        const downloadResponse = await fetchJson(`https://www.dark-yasiya-api.site/download/ytmp3?url=${videoUrl}`);
        const downloadUrl = downloadResponse.result.dl_link;

        // Delete the original message
        await bot.sendMessage(userChatId, { delete: sentMessage.key });
        await bot.sendMessage(userChatId, { react: { text: '⬆️', key: userResponse.key } });

        // Handle user response to download either audio or document
        if (userText === '1') {
          await bot.sendMessage(userChatId, {
            audio: { url: downloadUrl },
            mimetype: 'audio/mpeg',
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
          }, { quoted: userResponse });
          await bot.sendMessage(userChatId, { react: { text: '✅', key: userResponse.key } });
        } else if (userText === '2') {
          await bot.sendMessage(userChatId, {
            document: { url: downloadUrl },
            mimetype: 'audio/mp3',
            fileName: `${video.title}.mp3`,
            caption: "\n*© Created by Sadeesha Coder · · ·*\n "
          }, { quoted: userResponse });
          await bot.sendMessage(userChatId, { react: { text: '✅', key: userResponse.key } });
        }
      }
    });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
