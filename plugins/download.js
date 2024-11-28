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
*Facebook Downloader* 📹
*Duration*: ${videoData.result.duration}

Choose an option:
1️⃣ SD Video
2️⃣ HD Video
3️⃣ Audio
4️⃣ Audio (as Document)
5️⃣ Voice Note
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
            await bot.sendMessage(from, { video: { url: links.SD }, caption: "Here is your SD video." });
            break;
          case "2":
            await bot.sendMessage(from, { video: { url: links.HD }, caption: "Here is your HD video." });
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
