const { fetchJson } = require("../lib/functions");
const { downloadTiktok } = require('@mrnima/tiktok-downloader');
const { facebook } = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require('axios');
const { cmd, commands } = require("../command");

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
