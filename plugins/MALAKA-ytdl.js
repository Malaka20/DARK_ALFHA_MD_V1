
const { cmd, commands } = require("../command");
const yts = require("yt-search");
const axios = require("axios");
const { fetchJson } = require("../lib/functions");
const fs = require('fs');

function extractYouTubeId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function convertYouTubeLink(link) {
  const id = extractYouTubeId(link);
  if (id) {
    return "https://www.youtube.com/watch?v=" + id;
  }
  return link;
}

// Song command
const songCommand = {
  pattern: "song",
  desc: "To download songs.",
  react: '🎵',
  use: ".song <Text or Link>",
  category: "download",
  filename: __filename
};

cmd(songCommand, async (msg, text, args) => {
  const reply = msg.reply;
  try {
    const replyMsg = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    if (!text) {
      return reply(replyMsg.giveme);
    }

    text = convertYouTubeLink(text);
    const results = await yts(text);
    const video = results.videos[0];
    const url = video.url;
    const details = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    const footer = details.footer;

    const sections = [{
      'title': '',
      'rows': [
        { 'title': '1', 'rowId': ".ytmp3 " + url, 'description': "Audio File 🎶" },
        { 'title': '2', 'rowId': ".ytdoc " + url, 'description': "Document File 📂" }
      ]
    }];

    const caption = `*🎶ASITHA-MD AUDIO-DOWNLOADER🎶*  
|__________________________
|-ℹ️ 𝗧𝗶𝘁𝗹𝗲 : ${video.title}
|-🕘 𝗧𝗶𝗺𝗲 : ${video.timestamp}
|-📌 𝗔𝗴𝗼 : ${video.ago}
|-📉 𝗩𝗶𝗲𝘄𝘀 : ${video.views}
|-🔗 𝗟𝗶𝗻𝗸 : ${video.url} 
|__________________________`;

    const message = {
      caption,
      image: { url: video.thumbnail },
      footer,
      buttonText: "*🔢 Reply below number*",
      sections
    };

    return await msg.replyList(msg.from, message, { quoted: msg.quoted });
  } catch (err) {
    reply("*ERROR !!*");
    console.error(err);
  }
});

// Video command
const videoCommand = {
  pattern: "video",
  desc: "To download videos.",
  react: '🎥',
  use: ".video <Text or Link>",
  category: "download",
  filename: __filename
};

cmd(videoCommand, async (msg, text, args) => {
  const reply = msg.reply;
  try {
    const replyMsg = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    if (!text) {
      return reply(replyMsg.giveme);
    }

    text = convertYouTubeLink(text);
    const results = await yts(text);
    const video = results.videos[0];
    const url = video.url;
    const details = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    const footer = details.footer;

    const sections = [
      {
        'title': "*`[1] Video File`* 🎶",
        'rows': [
          { 'title': "   1.1", 'rowId': ".ytmp4 " + url + " & 360p", 'description': "Video `360` File 🎶" },
          { 'title': "   1.2", 'rowId': ".ytmp4 " + url + " & 480p", 'description': "Video `480` File 🎶" },
          { 'title': "   1.3", 'rowId': ".ytmp4 " + url + " & 720p", 'description': "Video `720` File 🎶" },
          { 'title': "   1.4", 'rowId': ".ytmp4 " + url + " & 1080p", 'description': "Video `1080` File 🎶" }
        ]
      },
      {
        'title': "*`[2] Document File`* 📂",
        'rows': [
          { 'title': "   2.1", 'rowId': ".ytvdoc " + url + " & 360p", 'description': "Document `360` File 📂" },
          { 'title': "   2.2", 'rowId': ".ytvdoc " + url + " & 480p", 'description': "Document `480` File 📂" },
          { 'title': "   2.3", 'rowId': ".ytvdoc " + url + " & 720p", 'description': "Document `720` File 📂" },
          { 'title': "   2.4", 'rowId': ".ytvdoc " + url + " & 1080p", 'description': "Document `1080` File 📂" }
        ]
      }
    ];

    const caption = `*📽️ASITHA-MD VIDEO-DOWNLOADER📽️*  
|__________________________
|-ℹ️ 𝗧𝗶𝘁𝗹𝗲 : ${video.title}
|-🕘 𝗧𝗶𝗺𝗲 : ${video.timestamp}
|-📌 𝗔𝗴𝗼 : ${video.ago}
|-📉 𝗩𝗶𝗲𝘄𝘀 : ${video.views}
|-🔗 𝗟𝗶𝗻𝗸 : ${video.url}
|__________________________`;

    const message = {
      caption,
      image: { url: video.thumbnail },
      footer,
      buttonText: "*🔢 Reply below number*",
      sections
    };

    return await msg.replyList(msg.from, message, { quoted: msg.quoted });
  } catch (err) {
    reply("*ERROR !!*");
    console.error(err);
  }
}); 
