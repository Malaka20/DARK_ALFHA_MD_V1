const { fetchJson } = require("../lib/functions");
const { downloadTiktok } = require('@mrnima/tiktok-downloader');
const { facebook } = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require('axios');
const { cmd, commands } = require("../command");
const { sinhalaSub } = require("mrnima-moviedl");

cmd({
  pattern: "sinhalasub",
  alias: ["movie"],
  react: '📑',
  category: "download",
  desc: "Search movies on sinhalasub and get download links",
  filename: __filename
}, async (client, message, msgInfo, { from, q, reply }) => {
  try {
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Deadpool)*");
    }
    
    const sinhalasubInstance = await sinhalaSub();
    const searchResults = await sinhalasubInstance.search(q);
    const limitedResults = searchResults.result.slice(0, 10);

    if (!limitedResults.length) {
      return await reply("No results found for: " + q);
    }

    let responseText = `📽️ *Search Results for* "${q}":\n\n`;
    limitedResults.forEach((result, index) => {
      responseText += `*${index + 1}.* ${result.title}\n🔗 Link: ${result.link}\n\n`;
    });

    const sentMessage = await client.sendMessage(from, { text: responseText }, { quoted: msgInfo });
    const sentMessageId = sentMessage.key.id;

    client.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userMessage = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToSearch = newMessage.message.extendedTextMessage && newMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessageId;

      if (isReplyToSearch) {
        const selectedNumber = parseInt(userMessage.trim());
        if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= limitedResults.length) {
          const selectedMovie = limitedResults[selectedNumber - 1];
          const apiUrl = `https://api-site-2.vercel.app/api/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;

          try {
            const movieDetails = await axios.get(apiUrl);
            const downloadLinks = movieDetails.data.result.dl_links || [];

            if (!downloadLinks.length) {
              return await reply("No PixelDrain links found.");
            }

            let downloadText = `🎥 *${movieDetails.data.result.title}*\n\n*Available PixelDrain Download Links:*\n`;
            downloadLinks.forEach((link, index) => {
              downloadText += `*${index + 1}.* ${link.quality} - ${link.size}\n🔗 Link: ${link.link}\n\n`;
            });

            const downloadMessage = await client.sendMessage(from, { text: downloadText }, { quoted: newMessage });
            const downloadMessageId = downloadMessage.key.id;

            client.ev.on('messages.upsert', async event => {
              const downloadReply = event.messages[0];
              if (!downloadReply.message) return;

              const downloadReplyText = downloadReply.message.conversation || downloadReply.message.extendedTextMessage?.text;
              const isReplyToDownload = downloadReply.message.extendedTextMessage && downloadReply.message.extendedTextMessage.contextInfo.stanzaId === downloadMessageId;

              if (isReplyToDownload) {
                const downloadNumber = parseInt(downloadReplyText.trim());
                if (!isNaN(downloadNumber) && downloadNumber > 0 && downloadNumber <= downloadLinks.length) {
                  const selectedLink = downloadLinks[downloadNumber - 1];
                  const fileId = selectedLink.link.split('/').pop();
                  const fileUrl = `https://pixeldrain.com/api/file/${fileId}`;

                  await client.sendMessage(from, { react: { text: '⬇️', key: msgInfo.key } });
                  await client.sendMessage(from, {
                    document: { url: fileUrl },
                    mimetype: "video/mp4",
                    fileName: `${movieDetails.data.result.title} - ${selectedLink.quality}.mp4`,
                    caption: `${movieDetails.data.result.title}\nQuality: ${selectedLink.quality}\nPowered by SinhalaSub`,
                    contextInfo: {
                      mentionedJid: [],
                      externalAdReply: {
                        title: movieDetails.data.result.title,
                        body: "Download powered by SinhalaSub",
                        mediaType: 1,
                        sourceUrl: selectedMovie.link,
                        thumbnailUrl: movieDetails.data.result.image
                      }
                    }
                  }, { quoted: downloadReply });

                  await client.sendMessage(from, { react: { text: '✅', key: msgInfo.key } });
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

cmd({
  pattern: 'fb',
  alias: ["facebook"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
}, async (bot, message, chat, options) => {
  try {
    const { from, q: url, reply } = options;

    // Validate URL
    if (!url || !url.startsWith("https://")) {
      return reply("Please provide a valid Facebook video URL.");
    }

    // React to the command
    await bot.sendMessage(from, { react: { text: '⏳', key: message.key } });

    // Fetch Facebook video details
    const videoData = await facebook(url);
    if (!videoData || !videoData.result) {
      return reply("Failed to fetch Facebook video details. Please try again.");
    }

    // Build options menu
    const caption = `
    *ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ ꜰʙ⚬*⌛ᴅᴜʀᴀᴛɪᴏɴ*
    *Duration*: ${videoData.result.duration}
    ╭──────────────────❖
    │ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢
    │
    │ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ 🎬      
    │
    │ _➀ *ꜱᴅ ᴍᴀʟᴀᴋᴀ-ᴍᴅ*
    │ _➁ *ʜᴅ ᴍᴀʟᴀᴋᴀ-ᴍᴅ*
    │ 
    │ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ 🎧
    │
    │ _➂ *ᴀᴜᴅɪᴏ*
    │ _➃ *ᴅᴏᴄᴜᴍᴇɴᴛ*
    │ _➄ *ᴠᴏɪᴄᴇ*
    ╰──────────────────❖
    > ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ . . . 👩‍💻
    `;

    const menuMessage = await bot.sendMessage(from, {
      image: { url: videoData.result.thumbnail },
      caption,
    }, { quoted: message });

    // Listen for user response
    bot.ev.on("messages.upsert", async (update) => {
      const response = update.messages[0];
      if (!response.message) return;

      const userChoice = response.message.conversation || response.message.extendedTextMessage?.text;
      const isReply = response.message.extendedTextMessage?.contextInfo.stanzaId === menuMessage.key.id;

      if (isReply) {
        await bot.sendMessage(from, { react: { text: '⬇️', key: response.key } });

        const { links } = videoData.result;

        switch (userChoice) {
          case "1":
            await bot.sendMessage(from, { video: { url: links.SD }, caption: ">*ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ SD video." });
            break;
          case "2":
            await bot.sendMessage(from, { video: { url: links.HD }, caption: ">*ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ HD video." });
            break;
          case "3":
            await bot.sendMessage(from, { audio: { url: links.SD }, mimetype: "audio/mpeg" });
            break;
          case "4":
            await bot.sendMessage(from, {
              document: { url: links.SD },
              mimetype: "audio/mpeg",
              fileName: "Facebook_Audio.mp3",
              caption: "Here is your audio as a document.",
            });
            break;
          case "5":
            await bot.sendMessage(from, { audio: { url: links.SD }, mimetype: "audio/mp4", ptt: true });
            break;
          default:
            reply("Invalid choice. Please reply with a valid number.");
        }

        await bot.sendMessage(from, { react: { text: '⬆️', key: response.key } });
      }
    });

  } catch (error) {
    console.error(error);
    reply("An error occurred while processing your request. Please try again.");
  }
});

cmd({
  pattern: "tiktok",
  alias: ['tt'],
  react: '🎥',
  desc: "Download TikTok videos",
  category: "download",
  filename: __filename
}, async (bot, message, chat, options) => {
  try {
    const { from, q: url, reply } = options;

    // Validate URL
    if (!url || !url.startsWith("https://")) {
      return reply("Please provide a valid TikTok URL.");
    }

    // React to command
    chat.react('⬇️');

    // Fetch download links
    const videoData = await downloadTiktok(url);
    if (!videoData || !videoData.result) {
      return reply("Failed to fetch TikTok video details. Please try again.");
    }

    // Send options to user
    const caption = `
    *ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ ᴛɪᴋᴛᴏᴋ⚬*⌛ᴛɪᴛʟᴇ*
    *Title*: ${videoData.result.title}
    ╭──────────────────❖
    │ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢
    │
    │ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ 🎬      
    │
    │ _➀ *ꜱᴅ* ᴍᴀʟᴀᴋᴀ-ᴍᴅ*
    │ _➁ *ʜᴅ* ᴍᴀʟᴀᴋᴀ-ᴍᴅ*
    │ 
    │ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ 🎧
    │
    │ _➂ *ᴀᴜᴅɪᴏ* ᴍᴀʟᴀᴋᴀ-ᴍᴅ*
    │ 
    ╰──────────────────❖
    > ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ . . . 👩‍💻
    `;
    const menuMessage = await bot.sendMessage(from, {
      image: { url: videoData.result.image },
      caption,
    });

    // Wait for user selection
    bot.ev.on("messages.upsert", async (update) => {
      const response = update.messages[0];
      if (!response.message) return;

      const userChoice = response.message.conversation || response.message.extendedTextMessage?.text;
      const isReply = response.message.extendedTextMessage?.contextInfo.stanzaId === menuMessage.key.id;

      if (isReply) {
        // Process user selection
        chat.react('⬇️');
        const { dl_link } = videoData.result;

        if (userChoice === '1') {
          await bot.sendMessage(from, { video: { url: dl_link.download_mp4_1 }, caption: "> ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ SD video!" });
        } else if (userChoice === '2') {
          await bot.sendMessage(from, { video: { url: dl_link.download_mp4_2 }, caption: "> ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ HD video!" });
        } else if (userChoice === '3') {
          await bot.sendMessage(from, { audio: { url: dl_link.download_mp3 }, mimetype: "audio/mpeg" });
        } else {
          reply("Invalid choice. Please reply with 1, 2, or 3.");
        }
        chat.react('⬆️');
      }
    });

  } catch (error) {
    console.error(error);
    reply("An error occurred. Please try again.");
  }
});

cmd({
  pattern: 'ig2',
  alias: ["insta"],
  desc: "To download Instagram videos.",
  react: '🎥',
  category: "download",
  filename: __filename
}, async (message, response, _, context) => {
  try {
    const { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply } = context;

    if (!q) {
      return response.reply("Please provide a valid link...");
    }

    response.react('⬇️');

    const videoData = await igdl(q);
    const videos = videoData.data;

    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      const videoUrl = video.url;

      response.react('⬆️');
      await message.sendMessage(from, {
        video: { url: videoUrl },
        mimetype: "video/mp4",
        caption: "*© ᴍᴀʟᴀᴋᴀ-ᴍᴅ*"
      }, { quoted });

      response.react('✅');
    }
  } catch (error) {
    console.log(error);
  }
});

async function igdl(url) {
  return new Promise((resolve, reject) => {
    fetch(url, { method: "get" })
      .then(response => response.text())
      .then(html => {
        const $ = cheerio.load(html);
        const title = $("meta[property=\"og:title\"]").attr('content');
        const duration = $("meta[property=\"og:duration\"]").attr("content");
        const image = $("meta[property=\"og:image\"]").attr("content");
        const videoType = $("meta[property=\"og:video:type\"]").attr("content");
        const videoWidth = $("meta[property=\"og:video:width\"]").attr("content");
        const videoHeight = $("meta[property=\"og:video:height\"]").attr('content');
        const info = $("span.metadata").text();
        const scriptContent = $("#video-player-bg > script:nth-child(6)").html();

        const files = {
          low: (scriptContent.match(/html5player\.setVideoUrlLow'(.*?)';/) || [])[1],
          high: (scriptContent.match(/html5player\.setVideoUrlHigh'(.*?)';/) || [])[1],
          HLS: (scriptContent.match(/html5player\.setVideoHLS'(.*?)';/) || [])[1],
          thumb: (scriptContent.match(/html5player\.setThumbUrl'(.*?)';/) || [])[1],
          thumb69: (scriptContent.match(/html5player\.setThumbUrl169'(.*?)';/) || [])[1],
          thumbSlide: (scriptContent.match(/html5player\.setThumbSlide'(.*?)';/) || [])[1],
          thumbSlideBig: (scriptContent.match(/html5player\.setThumbSlideBig'(.*?)';/) || [])[1]
        };

        resolve({
          status: true,
          result: {
            title,
            URL: url,
            duration,
            image,
            videoType,
            videoWidth,
            videoHeight,
            info,
            files
          }
        });
      })
      .catch(error => reject({ status: false, result: error }));
  });
}

cmd({
  pattern: "baiscope",
  alias: ["movie2"],
  react: '📑',
  category: "download",
  desc: 'baiscope.lk',
  filename: __filename
}, async (message, response, context) => {
  const { from, q, reply } = context;

  try {
    // Ensure a search query is provided
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Avatar)*");
    }

    // Fetch search results from baiscope.lk
    const searchUrl = `https://www.baiscope.lk/?s=${encodeURIComponent(q)}`;
    const searchResponse = await axios.get(searchUrl);
    const $ = cheerio.load(searchResponse.data);

    let results = [];

    $('article.elementor-post').each((index, element) => {
      const title = $(element).find("h5.elementor-post__title > a").text().trim();
      const episodeLink = $(element).find("h5.elementor-post__title > a").attr("href");
      const imgUrl = $(element).find(".elementor-post__thumbnail img").attr("src");

      if (title && episodeLink && imgUrl) {
        results.push({
          title: title,
          episodeLink: episodeLink,
          imgUrl: imgUrl
        });
      }
    });

    if (results.length === 0) {
      return await reply(`No results found for: ${q}`);
    }

    // Send search results to user
    let responseText = `📺 Search Results for *${q}:*\n\n`;
    results.forEach((result, index) => {
      responseText += `*${index + 1}.* ${result.title}\n🔗 Link: ${result.episodeLink}\n\n`;
    });

    const sentMessage = await message.sendMessage(from, { text: responseText }, { quoted: context });
    const messageId = sentMessage.key.id;

    // Listen for user's selection
    message.ev.on("messages.upsert", async (upsert) => {
      const incomingMessage = upsert.messages[0];
      if (!incomingMessage.message) return;

      const userResponse = incomingMessage.message.conversation || incomingMessage.message.extendedTextMessage?.text;
      const senderId = incomingMessage.key.remoteJid;
      const isReplyToBot = incomingMessage.message.extendedTextMessage && incomingMessage.message.extendedTextMessage.contextInfo.stanzaId === messageId;

      if (isReplyToBot) {
        const selectedIndex = parseInt(userResponse.trim());

        if (!isNaN(selectedIndex) && selectedIndex > 0 && selectedIndex <= results.length) {
          const selectedEpisode = results[selectedIndex - 1];
          const episodeResponse = await axios.get(selectedEpisode.episodeLink);
          const $episodePage = cheerio.load(episodeResponse.data);
          const downloadLink = $episodePage("a.dlm-buttons-button").attr('href');

          if (downloadLink) {
            await message.sendMessage(senderId, {
              image: { url: selectedEpisode.imgUrl },
              caption: `🎬 *${selectedEpisode.title}*\n🔗 Link: ${selectedEpisode.episodeLink}\n⬇️ Download will follow.`
            }, { quoted: incomingMessage });

            const filePath = path.join(__dirname, 'downloaded_episode.zip');
            const fileStream = fs.createWriteStream(filePath);
            const downloadResponse = await axios({
              url: downloadLink,
              method: "GET",
              responseType: "stream"
            });

            downloadResponse.data.pipe(fileStream);

            fileStream.on("finish", async () => {
              await message.sendMessage(senderId, {
                document: { url: filePath },
                mimetype: "application/zip",
                fileName: `${selectedEpisode.title}.zip`,
                caption: `*${selectedEpisode.title}*\n\n> ᴍᴀʟᴀᴋᴀ-ᴍᴅ ✻`
              }, { quoted: incomingMessage });
              fs.unlinkSync(filePath);
            });

            fileStream.on("error", async (error) => {
              console.error("Error downloading ZIP file:", error);
              await reply("*Error downloading the episode ZIP file.*");
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
}, async (message, response, context) => {
  const { from, q, reply } = context;

  try {
    // Ensure a search query is provided
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Garfield)*");
    }

    // Fetch search results from ginisisilacartoon.net
    const searchUrl = `https://ginisisilacartoon.net/search.php?q=${encodeURIComponent(q)}`;
    const searchResponse = await axios.get(searchUrl);
    const $ = cheerio.load(searchResponse.data);

    let results = [];

    $("div.inner-video-cell").each((index, element) => {
      const title = $(element).find("div.video-title > a").attr('title');
      const postedTime = $(element).find("div.posted-time").text().trim();
      const episodeLink = $(element).find("div.video-title > a").attr('href');
      const imageUrl = $(element).find("div.inner-video-thumb-wrapper img").attr("src");

      if (title && episodeLink) {
        results.push({
          title: title,
          postedTime: postedTime,
          episodeLink: `https://ginisisilacartoon.net/${episodeLink}`,
          imageUrl: imageUrl
        });
      }
    });

    if (results.length === 0) {
      return await reply(`No results found for: ${q}`);
    }

    // Send search results to user
    let responseText = `📺 Search Results for *${q}:*\n\n`;
    results.forEach((result, index) => {
      responseText += `*${index + 1}.* ${result.title}\n🗓️ Posted: ${result.postedTime}\n🔗 Link: ${result.episodeLink}\n\n`;
    });

    const sentMessage = await message.sendMessage(from, { text: responseText }, { quoted: context });
    const messageId = sentMessage.key.id;

    // Listen for user's selection
    message.ev.on("messages.upsert", async (upsert) => {
      const incomingMessage = upsert.messages[0];
      if (!incomingMessage.message) return;

      const userResponse = incomingMessage.message.conversation || incomingMessage.message.extendedTextMessage?.text;
      const senderId = incomingMessage.key.remoteJid;
      const isReplyToBot = incomingMessage.message.extendedTextMessage && incomingMessage.message.extendedTextMessage.contextInfo.stanzaId === messageId;

      if (isReplyToBot) {
        const selectedIndex = parseInt(userResponse.trim());

        if (!isNaN(selectedIndex) && selectedIndex > 0 && selectedIndex <= results.length) {
          const selectedEpisode = results[selectedIndex - 1];
          const episodeInfo = `*🪄 Name:* ${selectedEpisode.title}\n⏳ *Date:* ${selectedEpisode.postedTime}\n📎 *Episode Link:* ${selectedEpisode.episodeLink}\n\n☘ *We are uploading the Movie/Episode you requested.*`;
          const episodeMessage = {
            image: { url: selectedEpisode.imageUrl },
            caption: episodeInfo
          };

          await message.sendMessage(senderId, episodeMessage, { quoted: incomingMessage });

          const episodeResponse = await axios.get(selectedEpisode.episodeLink);
          const $episodePage = cheerio.load(episodeResponse.data);
          const iframeSrc = $episodePage("div#player-holder iframe").attr('src');

          if (iframeSrc) {
            const downloadApiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${iframeSrc}&apikey=mnp3grlZ`;

            try {
              const downloadResponse = await axios.get(downloadApiUrl);
              const downloadUrl = downloadResponse.data.result.downloadUrl;

              if (downloadUrl) {
                await message.sendMessage(senderId, {
                  document: { url: downloadUrl },
                  mimetype: "video/mp4",
                  fileName: `MR JANIYA | ${selectedEpisode.title}.mp4`,
                  caption: `${selectedEpisode.title} | *ᴍᴀʟᴀᴋᴀ-ᴍᴅ*\n\n> ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ`
                }, { quoted: incomingMessage });
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


cmd({
  pattern: 'gdrive',
  desc: "To download Gdrive files.",
  react: '🌐',
  category: "download",
  filename: __filename
}, async (message, response, context) => {
  const { from, quoted, body, q: query, reply } = context;

  try {
    // React to the message indicating the process has started
    await message.sendMessage(from, {
      react: {
        text: '⬇️',
        key: response.key
      }
    });

    // Check if a valid link is provided
    if (!query) {
      return reply("Please provide a valid link.");
    }

    // Fetch download URL from the API
    const apiUrl = `https://api.fgmods.xyz/api/downloader/gdrive?url=${query}&apikey=mnp3grlZ`;
    const apiResponse = await axios.get(apiUrl);
    const downloadUrl = apiResponse.data.result.downloadUrl;
    const mimeType = apiResponse.data.result.mimetype;
    const fileName = apiResponse.data.result.fileName;

    if (downloadUrl) {
      // React to the message indicating the process is uploading
      await message.sendMessage(from, {
        react: {
          text: '⬆️',
          key: response.key
        }
      });

      // Send the file to the user
      await message.sendMessage(from, {
        document: {
          url: downloadUrl
        },
        mimetype: mimeType,
        fileName: fileName,
        caption: "*© ᴍᴀʟᴀᴋᴀ-ᴍᴅ*\n\n> ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ ✻"
      }, {
        quoted: response
      });

      // React to the message indicating the process is complete
      await message.sendMessage(from, {
        react: {
          text: '✅',
          key: response.key
        }
      });
    } else {
      // React to the message indicating an error occurred
      await message.sendMessage(from, {
        react: {
          text: '❌',
          key: response.key
        }
      });

      reply("Failed to retrieve the download link.");
    }
  } catch (error) {
    console.error(error);
    reply("An error occurred while processing your request.");
  }
});

cmd({
  pattern: 'apk2',
  desc: "Download APK.",
  category: "download",
  filename: __filename,
}, async (client, message, chatData, options) => {
  const { from, quoted, q: query, reply } = options;

  if (!query) {
    return reply("Please provide the name of the APK you want to download.");
  }

  try {
    await chatData.react('⬇'); // Indicate processing started

    // Aptoide API URL with the user-provided query
    const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${query}/limit=1`;

    // Fetch data from Aptoide API
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Ensure the data contains the necessary information
    if (!data || !data.datalist || !data.datalist.list || data.datalist.list.length === 0) {
      return reply("No results found for your query.");
    }

    const app = data.datalist.list[0];
    const appSizeMB = (app.size / (1024 * 1024)).toFixed(2); // Convert bytes to MB

    // Format the APK details
    const apkDetails = `
*⚬ DARK_ALFHA_MD APK ⚬*
*🏷️ Name:* ${app.name}
*📦 Size:* ${appSizeMB} MB
*🔖 Package:* ${app.package}
*📆 Last Update:* ${app.updated}
*👤 Developer:* ${app.developer.name}

> DARK_ALFHA_MD ✻
`;

    await chatData.react('⬆'); // Indicate processing finished

    // Send the APK as a document with the formatted details
    await client.sendMessage(from, {
      document: { url: app.file.path_alt },
      fileName: app.name + ".apk",
      mimetype: "application/vnd.android.package-archive",
      caption: apkDetails,
    }, { quoted });

    await chatData.react('✅'); // Indicate success
  } catch (error) {
    console.error(error);
    reply("An error occurred while processing your request.");
  }
});

