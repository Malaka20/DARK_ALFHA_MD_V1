const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

// Command for downloading song
cmd({
  'pattern': 'song',
  'react': '🎵',
  'desc': 'Search and get details from youtube.',
  'category': 'all',
  'filename': __filename
}, async (bot, message, args) => {
  try {
    if (!args.q) return args.reply('❌Please give me URL or title');

    const searchResults = await yts(args.q);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    let details = '*•.¸♡ 💃QUEEN KENZI MD 🤍 AUDIO-DOWNLOADER🎶 ♡¸.•*\n|__________________________\n| 🛸title : ' +
      video.title + '\n| 🎠description : ' + video.description + '\n| 🦄time : ' + video.timestamp + '\n| 🔮views : ' +
      video.views + '\n| thumbnail : ' + video.thumbnail + '\n|__________________________\n';

    // Send thumbnail
    await bot.sendMessage(args.from, {
      image: { url: video.thumbnail },
      caption: details
    }, { quoted: message });

    // Download audio
    const audioData = await fg.yta(videoUrl);
    const audioUrl = audioData.dl_url;
    await bot.sendMessage(args.from, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      caption: 'Download song'
    }, { quoted: message });

    // Send as document
    await bot.sendMessage(args.from, {
      document: { url: audioUrl },
      mimetype: 'audio/mpeg',
      fileName: video.title + '.mp3',
      caption: '*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋɴᴇᴏɴᴄʏʙᴇʀꜱ*'
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    args.reply('' + error);
  }
});

// Command for downloading video
cmd({
  'pattern': 'video',
  'react': '🎬',
  'desc': 'Download YouTube video',
  'category': 'downlod',
  'filename': __filename
}, async (bot, message, args) => {
  try {
    if (!args.q) return args.reply('❌Please give me URL or title');

    const searchResults = await yts(args.q);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    let details = '\n*•.¸♡ 💃QUEEN KENZI MD 🤍 VIDEO-DOWNLOADER📽️ ♡¸.•*\n|__________________________\n| 🛸title : ' +
      video.title + '\n| 🎠description : ' + video.description + '\n| 🎠time : ' + video.timestamp + '\n| 🔮views : ' +
      video.views + '\n| thumbnail : ' + video.thumbnail + '\n|__________________________\n';

    // Send thumbnail
    await bot.sendMessage(args.from, {
      image: { url: video.thumbnail },
      caption: details
    }, { quoted: message });

    // Download video
    const videoData = await fg.ytv(videoUrl);
    const videoDownloadUrl = videoData.dl_url;
    await bot.sendMessage(args.from, {
      video: { url: videoDownloadUrl },
      mimetype: 'video/mp4',
      caption: 'Download video'
    }, { quoted: message });

    // Send as document
    await bot.sendMessage(args.from, {
      document: { url: videoDownloadUrl },
      mimetype: 'video/mp4',
      fileName: video.title + '.mp4',
      caption: 'Download video'
    }, { quoted: message });
  } catch (error) {
    console.log(error);
    args.reply('' + error);
  }
});

// Command for YouTube search
cmd({
  'pattern': 'yts',
  'alias': ['ytsearch'],
  'use': '.yts <search terms>',
  'react': '🔎',
  'desc': 'Search for YouTube videos',
  'category': 'search',
  'filename': __filename
}, async (bot, message, args) => {
  try {
    if (!args.q) return args.reply('*Please give me words to search*');

    const searchResults = await yts(args.q);
    let resultText = '';
    searchResults.videos.map(video => {
      resultText += ` *💃${video.title}*\n🔗 ${video.url}\n\n`;
    });

    await bot.sendMessage(args.from, { text: resultText }, { quoted: message });
  } catch (error) {
    console.log(error);
    args.reply('*Error !!*');
  }
});
