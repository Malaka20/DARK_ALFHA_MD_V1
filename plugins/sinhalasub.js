const { cmd } = require("../command");
const { SinhalaSub } = require("@sl-code-lords/movie-api");
const { PixaldrainDL } = require("pixaldrain-sinhalasub");

cmd({
  pattern: "sinhalasub",
  desc: "Search for a movie and get details and download options.",
  category: "movie",
  react: "💕",
  filename: __filename
}, async (client, message, args, { from, q: query, reply }) => {
  try {
    const searchQuery = query.trim();
    if (!searchQuery) {
      return reply("Please provide a movie or TV show name to search.");
    }

    const searchResults = await SinhalaSub.get_list.by_search(searchQuery);
    if (!searchResults.status || searchResults.results.length === 0) {
      return reply("No results found.");
    }

    let resultMessage = "*🧚‍♂️SUHAS-MD Search Results:*\n\n";
    searchResults.results.forEach((result, index) => {
      resultMessage += `${index + 1}. ${result.title}\nType: ${result.type}\nLink: ${result.link}\n\n`;
    });

    const handleSelection = async (response) => {
      const selectedMessage = response.messages[0];
      if (!selectedMessage.message || !selectedMessage.message.extendedTextMessage) {
        return;
      }

      const selectedIndex = parseInt(selectedMessage.message.extendedTextMessage.text.trim()) - 1;
      if (selectedIndex < 0 || selectedIndex >= searchResults.results.length) {
        await client.sendMessage(from, { react: { text: "❌", key: message.key } });
        return reply("❗ Invalid selection. Please choose a valid number from the search results.");
      }

      const selectedResult = searchResults.results[selectedIndex];
      const movieDetails = await SinhalaSub.movie(selectedResult.link);
      if (!movieDetails || !movieDetails.status || !movieDetails.result) {
        return reply("❗ Movie details not found.");
      }

      const movie = movieDetails.result;
      let detailsMessage = `*${movie.title}*\n\n`;
      detailsMessage += `📅 Release Date: ${movie.release_date}\n`;
      detailsMessage += `🌎 Country: ${movie.country}\n`;
      detailsMessage += `🎰 Duration: ${movie.duration}\n`;
      detailsMessage += `🧚‍♂️ Genres: ${Array.isArray(movie.genres) ? movie.genres.join(", ") : movie.genres}\n`;
      detailsMessage += `⭐ IMDb Rating: ${movie.IMDb_Rating}\n`;
      detailsMessage += `🧛‍♂️ Director: ${movie.director.name}\n\n`;
      detailsMessage += "🔢 Reply with the number of the quality you want:\n\n";
      detailsMessage += "*1. ➠ SD 480p*\n";
      detailsMessage += "*2. ➠ HD 720p*\n";
      detailsMessage += "*3. ➠ HHD 1080p*\n\n";
      detailsMessage += "> *© Powered By 🧚‍♂️⃝SUHAS-MD V8 💕⃟*";

      const movieImage = movie.images && movie.images.length > 0 ? movie.images[0] : null;
      const sentMessage = await client.sendMessage(from, {
        image: { url: movieImage },
        caption: detailsMessage,
        contextInfo: { forwardingScore: 999, isForwarded: true }
      }, { quoted: message });

      const handleDownloadSelection = async (downloadResponse) => {
        const downloadMessage = downloadResponse.messages[0];
        if (!downloadMessage.message || !downloadMessage.message.extendedTextMessage) {
          return;
        }

        const selectedQuality = downloadMessage.message.extendedTextMessage.text.trim();
        if (downloadMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
          let qualityLabel;
          switch (selectedQuality) {
            case "1":
              qualityLabel = "SD 480p";
              break;
            case "2":
              qualityLabel = "HD 720p";
              break;
            case "3":
              qualityLabel = "HHD 1080p";
              break;
            default:
              await client.sendMessage(from, { react: { text: "❌", key: message.key } });
              return reply("❗ Invalid option. Please select from 1, 2, or 3.");
          }

          try {
            const downloadLink = await PixaldrainDL(selectedResult.link, qualityLabel, "direct");
            if (downloadLink) {
              await client.sendMessage(from, {
                document: { url: downloadLink },
                mimetype: "video/mp4",
                fileName: `${movie.title}.mp4`,
                caption: `${movie.title}\n\n> *© Powered By 🧚‍♂️⃝SUHAS-MD V8 💕⃟*`
              }, { quoted: message });

              await client.sendMessage(from, { react: { text: "✅", key: message.key } });
            } else {
              await client.sendMessage(from, { react: { text: "❌", key: message.key } });
              return reply(`❗ Could not find the ${qualityLabel} download link. Please check the URL or try another quality.`);
            }
          } catch (error) {
            console.error("Error in PixaldrainDL function:", error);
            await client.sendMessage(from, { react: { text: "❌", key: message.key } });
            return reply("❗ An error occurred while processing your download request.");
          }
        }
      };

      client.ev.on("messages.upsert", handleDownloadSelection);
      setTimeout(() => {
        client.ev.off("messages.upsert", handleDownloadSelection);
      }, 60000);
    };

    client.ev.on("messages.upsert", handleSelection);
    setTimeout(() => {
      client.ev.off("messages.upsert", handleSelection);
    }, 60000);
  } catch (error) {
    console.error(error);
    await client.sendMessage(from, { react: { text: "❌", key: message.key } });
    return reply(`❗ Error: ${error.message}`);
  }
});
