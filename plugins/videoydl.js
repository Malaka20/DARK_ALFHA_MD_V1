const config = require("../config");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require("../command");
const yts = require("ytsearch-venom");

// Function to check if the URL is a valid YouTube link
function isYouTubeURL(url) {
  const youtubeRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return youtubeRegex.test(url);
}

// Define the command
cmd({
  pattern: "yts",
  alias: ["ytsearch"],
  use: ".yts <query>",
  react: '🔎',
  desc: "Search songs",
  category: "search",
  filename: __filename
}, async (client, message, args, {
  from,
  quoted,
  body,
  isCmd,
  command,
  argsText,
  query,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // If no query is provided
    if (!query) {
      return await reply("Please provide a search query.");
    }

    // If the input is a URL but not a valid YouTube URL
    if (isUrl(query) && !isYouTubeURL(query)) {
      return await reply("Invalid YouTube URL.");
    }

    try {
      const searchResults = await yts(query);
      let responseMessage = '';

      // Format the search results
      searchResults.all.map(video => {
        responseMessage += `*🎵 ${video.title}*\n🔗 ${video.url}\n\n`;
      });

      // Send the search results
      await client.sendMessage(from, { text: responseMessage }, { quoted: message });

    } catch (error) {
      console.error(error);
      return await client.sendMessage(from, { text: "*Error !!*" }, { quoted: message });
    }

  } catch (error) {
    console.error(error);
    reply("*Error !!*");
  }
});

cmd({
  pattern: "video2",
  alias: ["ytvideo2"],
  use: ".song lelena",
  react: "📽️",
  desc: "Download videos",
  category: "download",
  filename: __filename
}, async (botInstance, eventData, userData, {
  from,
  prefix,
  quoted,
  body,
  isCmd,
  command,
  args,
  query,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // Check if a query or URL is provided
    if (!query) {
      return await reply("*Please enter a query or a URL!*");
    }

    // Clean the query
    const cleanQuery = query.replace(/\?si=[^&]*/, '');

    // Search for the video using the yts library
    const searchResults = await yts(cleanQuery);
    const footerText = config.FOOTER;

    // Get the first video result
    const video = searchResults.videos[0];
    const videoDetails = 
      `*📽️ DARK SHUTER VIDEO DOWNLOADER 📽️*\n\n` +
      `*📃 Title:* ${video.title}\n\n` +
      `*📺 Views:* ${video.views}\n\n` +
      `*🕹️ Duration:* ${video.duration}\n\n` +
      `*🔗 Url:* ${video.url}`;

    // Define buttons for user options
    const buttons = [
      {
        buttonId: `${prefix}360pv ${video.url}`,
        buttonText: { displayText: "VIDEO TYPE" },
        type: 1
      },
      {
        buttonId: `${prefix}720pv ${video.url}±${video.title}`,
        buttonText: { displayText: "DOCUMENT TYPE" },
        type: 1
      }
    ];

    // Define the message with thumbnail and buttons
    const message = {
      image: { url: video.thumbnail },
      caption: videoDetails,
      footer: footerText,
      buttons: buttons,
      headerType: 4
    };

    // Send the button message
    await botInstance.buttonMessage(from, message, eventData);
  } catch (error) {
    reply("Video not found!");
    console.log(error);
  }
});
