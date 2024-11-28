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
