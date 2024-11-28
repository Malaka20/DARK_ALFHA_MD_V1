const {
  fetchJson
} = require("../lib/functions");
const {
  downloadTiktok
} = require('@mrnima/tiktok-downloader');
const {
  facebook
} = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");

cmd({
  'pattern': 'fb2',
  'alias': ["facebook2"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (client, message, args, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {  // Check if the provided URL is valid
      return client.sendMessage(from, { 'text': "*`Need URL`*" }, { 'quoted': quoted });
    }
    await client.sendMessage(from, { 'react': { 'text': '⏳', 'key': quoted.key } });  // Send a reaction to indicate the process has started
    const videoData = await facebook(q);  // Fetch video details using the facebook function
    const videoInfo = `
      ┏━┫*⚬Lααɾα-ᴍᴅ-ꜰʙ⚬*┣━✾
      ┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
      ┻
      *⌛ᴅᴜʀᴀᴛɪᴏɴ* : ${videoData.result.duration}

      *🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*

      *ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*

      *1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*
      *1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*

      *ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*

      *2.1*     ┃  *ᴀᴜᴅɪᴏ*
      *2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*
      *2.3*     ┃  *ᴠᴏɪᴄᴇ*

      > Lααɾα-ᴍᴅ ✻
    `;
    const sentMessage = await client.sendMessage(from, { 'image': { 'url': videoData.result.thumbnail }, 'caption': videoInfo }, { 'quoted': quoted });
    const messageId = sentMessage.key.id;
    client.ev.on("messages.upsert", async newMessage => {
      const messageContent = newMessage.messages[0];
      if (!messageContent.message) return;

      const userResponse = messageContent.message.conversation || messageContent.message.extendedTextMessage?.["text"];
      const userJid = messageContent.key.remoteJid;
      const isResponseToBotMessage = messageContent.message.extendedTextMessage && messageContent.message.extendedTextMessage.contextInfo.stanzaId === messageId;
      
      if (isResponseToBotMessage) {
        await client.sendMessage(userJid, { 'react': { 'text': '⬇️', 'key': messageContent.key } });
        let videoLinks = videoData.result.links;
        await client.sendMessage(userJid, { 'react': { 'text': '⬆️', 'key': messageContent.key } });
        
        if (userResponse === "1.1") {
          await client.sendMessage(userJid, { 'video': { 'url': videoLinks.SD }, 'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*" }, { 'quoted': messageContent });
        } else if (userResponse === "1.2") {
          await client.sendMessage(userJid, { 'video': { 'url': videoLinks.HD }, 'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*" }, { 'quoted': messageContent });
        } else if (userResponse === "2.1") {
          await client.sendMessage(userJid, { 'audio': { 'url': videoLinks.SD }, 'mimetype': "audio/mpeg" }, { 'quoted': messageContent });
        } else if (userResponse === '2.2') {
          await client.sendMessage(userJid, { 'document': { 'url': videoLinks.SD }, 'mimetype': "audio/mpeg", 'fileName': "Lara-MD/FBDL.mp3", 'caption': "**© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·**" }, { 'quoted': messageContent });
        } else if (userResponse === "2.3") {
          await client.sendMessage(userJid, { 'audio': { 'url': videoLinks.SD }, 'mimetype': 'audio/mp4', 'ptt': true }, { 'quoted': messageContent });
        }
      }
    });
  } catch (error) {
    console.error(error);
    await reply("*An error occurred while scraping the data.*");
  }
});

const fs = require('fs');
const path = require("path");

cmd({
  pattern: "baiscope",
  alias: ["movie2"],
  react: '📑',
  category: "download",
  desc: 'baiscope.lk',
  filename: __filename
}, async (bot, msg, args, options) => {
  const { from, q, reply } = options;

  try {
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Avatar)*");
    }

    const searchUrl = `https://www.baiscope.lk/?s=${encodeURIComponent(q)}`;
    const { data } = await axios.get(searchUrl);
    const $ = cheerio.load(data);
    let results = [];

    $('article.elementor-post').each((i, element) => {
      const title = $(element).find("h5.elementor-post__title > a").text().trim();
      const episodeLink = $(element).find("h5.elementor-post__title > a").attr("href");
      const imgUrl = $(element).find(".elementor-post__thumbnail img").attr("src");

      if (title && episodeLink && imgUrl) {
        results.push({ title, episodeLink, imgUrl });
      }
    });

    if (results.length === 0) {
      return await reply(`No results found for: ${q}`);
    }

    let responseText = `📺 Search Results for *${q}:*\n\n`;
    results.forEach((result, index) => {
      responseText += `*${index + 1}.* ${result.title}\n🔗 Link: ${result.episodeLink}\n\n`;
    });

    const responseMsg = await bot.sendMessage(from, { text: responseText }, { quoted: msg });
    const responseMsgId = responseMsg.key.id;

    bot.ev.on("messages.upsert", async (chatUpdate) => {
      const newMsg = chatUpdate.messages[0];
      if (!newMsg.message) return;

      const text = newMsg.message.conversation || newMsg.message.extendedTextMessage?.text;
      const chatId = newMsg.key.remoteJid;
      const isReplyToBot = newMsg.message.extendedTextMessage && newMsg.message.extendedTextMessage.contextInfo.stanzaId === responseMsgId;

      if (isReplyToBot) {
        const selectedIndex = parseInt(text.trim());
        if (!isNaN(selectedIndex) && selectedIndex > 0 && selectedIndex <= results.length) {
          const selectedResult = results[selectedIndex - 1];
          const { data: episodeData } = await axios.get(selectedResult.episodeLink);
          const $$ = cheerio.load(episodeData);
          const downloadLink = $$("a.dlm-buttons-button").attr('href');

          if (downloadLink) {
            await bot.sendMessage(chatId, {
              image: { url: selectedResult.imgUrl },
              caption: `🎬 *${selectedResult.title}*\n🔗 Link: ${selectedResult.episodeLink}\n⬇️ Download will follow.`,
            }, { quoted: newMsg });

            const downloadPath = path.join(__dirname, 'downloaded_episode.zip');
            const writer = fs.createWriteStream(downloadPath);
            const response = await axios({ url: downloadLink, method: 'GET', responseType: 'stream' });

            response.data.pipe(writer);
            writer.on('finish', async () => {
              await bot.sendMessage(chatId, {
                document: { url: downloadPath },
                mimetype: "application/zip",
                fileName: `${selectedResult.title}.zip`,
                caption: `*${selectedResult.title}*\n\n> Lααɾα-ᴍᴅ ✻`
              }, { quoted: newMsg });

              fs.unlinkSync(downloadPath);
            });

            writer.on('error', (err) => {
              console.error("Error downloading ZIP file:", err);
              reply("*Error downloading the episode ZIP file.*");
            });

          } else {
            await reply("*Download link not found for the selected episode.*");
          }

        } else {
          await reply("*Invalid selection. Please choose a valid number.*");
        }
      }
    });

  } catch (error) {
    console.error(error);
    await reply("*An error occurred while scraping the data.*");
  }
});



cmd({
  pattern: 'ginisisila',
  react: '📑',
  category: 'download',
  desc: "ginisisilacartoon.net",
  filename: __filename
}, async (bot, msg, args, options) => {
  const { from, q, reply } = options;

  try {
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Garfield)*");
    }

    const searchUrl = `https://ginisisilacartoon.net/search.php?q=${encodeURIComponent(q)}`;
    const response = await axios.get(searchUrl);
    const $ = cheerio.load(response.data);

    let results = [];
    $("div.inner-video-cell").each((index, element) => {
      const title = $(element).find("div.video-title > a").attr('title');
      const postedTime = $(element).find("div.posted-time").text().trim();
      const episodeLink = $(element).find("div.video-title > a").attr('href');
      const imageUrl = $(element).find("div.inner-video-thumb-wrapper img").attr("src");

      if (title && episodeLink) {
        results.push({
          title,
          postedTime,
          episodeLink: `https://ginisisilacartoon.net/${episodeLink}`,
          imageUrl
        });
      }
    });

    if (results.length === 0) {
      return await reply(`No results found for: ${q}`);
    }

    let message = `📺 Search Results for *${q}:*\n\n`;
    results.forEach((result, index) => {
      message += `*${index + 1}.* ${result.title}\n🗓️ Posted: ${result.postedTime}\n🔗 Link: ${result.episodeLink}\n\n`;
    });

    const sentMessage = await bot.sendMessage(from, { text: message }, { quoted: msg });
    const messageId = sentMessage.key.id;

    bot.ev.on("messages.upsert", async upsert => {
      const receivedMsg = upsert.messages[0];
      if (!receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
      const remoteJid = receivedMsg.key.remoteJid;
      const isReplyToSearchMessage = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;

      if (isReplyToSearchMessage) {
        const selectedIndex = parseInt(receivedText.trim());

        if (!isNaN(selectedIndex) && selectedIndex > 0 && selectedIndex <= results.length) {
          const selectedEpisode = results[selectedIndex - 1];

          const episodeInfo = `*🪄 NAME:-* ${selectedEpisode.title}\n⏳ *DATE:-* ${selectedEpisode.postedTime}\n📎 *EPISODE LINK*:- ${selectedEpisode.episodeLink}\n\n☘ *We are uploading the Movie/Episode you requested.*`;
          const episodeMessage = {
            image: { url: selectedEpisode.imageUrl },
            caption: episodeInfo
          };

          await bot.sendMessage(remoteJid, episodeMessage, { quoted: receivedMsg });

          const episodePage = await axios.get(selectedEpisode.episodeLink);
          const $$ = cheerio.load(episodePage.data);
          const iframeSrc = $$("div#player-holder iframe").attr('src');

          if (iframeSrc) {
            const downloadUrlApi = `https://api.fgmods.xyz/api/downloader/gdrive?url=${iframeSrc}&apikey=mnp3grlZ`;

            try {
              const downloadResponse = await axios.get(downloadUrlApi);
              const downloadUrl = downloadResponse.data.result.downloadUrl;

              if (downloadUrl) {
                await bot.sendMessage(remoteJid, {
                  document: { url: downloadUrl },
                  mimetype: "video/mp4",
                  fileName: `MR JANIYA | ${selectedEpisode.title}.mp4`,
                  caption: `${selectedEpisode.title} |  *SADEESHA CODER*\n\n> Laara-MD`
                }, { quoted: receivedMsg });
              } else {
                await reply("Failed to retrieve the download link for this episode.");
              }
            } catch (error) {
              console.error("Error fetching the download link:", error);
              await reply("An error occurred while trying to fetch the download link.");
            }
          } else {
            await reply("No downloadable link found for this episode.");
          }
        } else {
          await reply("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (error) {
    await reply("*Error occurred while scraping!*");
    console.error(error);
  }
});

const {
  sinhalaSub
} = require("mrnima-moviedl");

cmd({
  pattern: "sinhalasub",
  alias: ["movie"],
  react: '📑',
  category: "download",
  desc: "Search movies on sinhalasub and get download links",
  filename: __filename
}, async (bot, msg, args, options) => {
  const { from, q, reply } = options;

  try {
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Deadpool)*");
    }

    const sinhalaSub = await getSinhalaSubInstance(); // Placeholder for sinhalaSub instance
    const searchResults = await sinhalaSub.search(q);
    const movies = searchResults.result.slice(0, 10);

    if (!movies || movies.length === 0) {
      return await reply(`No results found for: ${q}`);
    }

    let message = `📽️ *Search Results for* "${q}":\n\n`;
    movies.forEach((movie, index) => {
      message += `*${index + 1}.* ${movie.title}\n🔗 Link: ${movie.link}\n\n`;
    });

    const sentMessage = await bot.sendMessage(from, { text: message }, { quoted: msg });
    const messageId = sentMessage.key.id;

    bot.ev.on("messages.upsert", async upsert => {
      const receivedMsg = upsert.messages[0];
      if (!receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
      const isReplyToSearchMessage = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;

      if (isReplyToSearchMessage) {
        const selectedIndex = parseInt(receivedText.trim());

        if (!isNaN(selectedIndex) && selectedIndex > 0 && selectedIndex <= movies.length) {
          const selectedMovie = movies[selectedIndex - 1];
          const movieApiUrl = `https://api-site-2.vercel.app/api/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;

          try {
            const movieResponse = await axios.get(movieApiUrl);
            const movieDetails = movieResponse.data.result;
            const downloadLinks = movieDetails.dl_links || [];

            if (downloadLinks.length === 0) {
              return await reply("No PixelDrain links found.");
            }

            let downloadMessage = `🎥 *${movieDetails.title}*\n\n`;
            downloadMessage += "*Available PixelDrain Download Links:*\n";
            downloadLinks.forEach((link, index) => {
              downloadMessage += `*${index + 1}.* ${link.quality} - ${link.size}\n🔗 Link: ${link.link}\n\n`;
            });

            const sentDownloadMessage = await bot.sendMessage(from, { text: downloadMessage }, { quoted: receivedMsg });
            const downloadMessageId = sentDownloadMessage.key.id;

            bot.ev.on('messages.upsert', async downloadUpsert => {
              const downloadReplyMsg = downloadUpsert.messages[0];
              if (!downloadReplyMsg.message) return;

              const downloadReplyText = downloadReplyMsg.message.conversation || downloadReplyMsg.message.extendedTextMessage?.text;
              const isReplyToDownloadMessage = downloadReplyMsg.message.extendedTextMessage?.contextInfo?.stanzaId === downloadMessageId;

              if (isReplyToDownloadMessage) {
                const linkIndex = parseInt(downloadReplyText.trim());

                if (!isNaN(linkIndex) && linkIndex > 0 && linkIndex <= downloadLinks.length) {
                  const selectedLink = downloadLinks[linkIndex - 1];
                  const fileId = selectedLink.link.split('/').pop();
                  const fileUrl = `https://pixeldrain.com/api/file/${fileId}`;

                  await bot.sendMessage(from, { react: { text: '⬇️', key: msg.key } });
                  await bot.sendMessage(from, {
                    document: { url: fileUrl },
                    mimetype: "video/mp4",
                    fileName: `${movieDetails.title} - ${selectedLink.quality}.mp4`,
                    caption: `${movieDetails.title}\nQuality: ${selectedLink.quality}\nPowered by SinhalaSub`,
                    contextInfo: {
                      mentionedJid: [],
                      externalAdReply: {
                        title: movieDetails.title,
                        body: "Download powered by SinhalaSub",
                        mediaType: 1,
                        sourceUrl: selectedMovie.link,
                        thumbnailUrl: movieDetails.image
                      }
                    }
                  }, { quoted: downloadReplyMsg });

                  await bot.sendMessage(from, { react: { text: '✅', key: msg.key } });
                } else {
                  await reply("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (error) {
            console.error("Error fetching movie details:", error);
            await reply("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await reply("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (error) {
    console.error("Error during search:", error);
    await reply("*An error occurred while searching!*");
  }
});
