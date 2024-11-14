const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

// Extracts YouTube video ID from a URL
function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Converts YouTube link to a standard format
function convertYouTubeLink(link) {
    const videoId = extractYouTubeId(link);
    return videoId ? `https://www.youtube.com/watch?v=${videoId}` : link;
}

// Song download command
cmd({
    pattern: 'song1',
    desc: 'To download songs.',
    react: '🎵',
    category: 'music',
    filename: __filename
}, async (msg, replyData, options) => {
    const { q } = options;
    try {
        if (!q) return replyData.reply('Please give me a URL or title.');
        const searchLink = convertYouTubeLink(q);
        const searchResult = await yts(searchLink);
        const videoInfo = searchResult.videos[0];
        const downloadLink = videoInfo.url;
        
        // Compose the message for the found song
        let messageText = `🎵 *Song Found!*\n\n➥ *Title:* ${videoInfo.title}\n➥ *Duration:* ${videoInfo.timestamp}\n➥ *Views:* ${videoInfo.views}\n➥ *Uploaded On:* ${videoInfo.ago}\n➥ *Link:* ${videoInfo.url}\n`;
        
        // Send image, audio, and document for download
        await msg.sendMessage(replyData.from, { image: { url: videoInfo.thumbnail }, caption: messageText }, { quoted: replyData });
        let audioDownload = await fg.yta(downloadLink);
        await msg.sendMessage(replyData.from, { audio: { url: audioDownload.dl_url }, mimetype: 'audio/mpeg' }, { quoted: replyData });
        await msg.sendMessage(replyData.from, { document: { url: audioDownload.dl_url }, mimetype: 'audio/mpeg', fileName: `${videoInfo.title}.mp3`, caption: '*Enjoy the audio!*' }, { quoted: replyData });
    } catch (error) {
        console.log(error);
        replyData.reply('Error: ' + error);
    }
});

// Video download command
cmd({
    pattern: 'video',
    desc: 'Download YouTube videos as MP4.',
    react: '🎥',
    category: 'video',
    filename: __filename
}, async (msg, replyData, options) => {
    const { q } = options;
    try {
        if (!q) return replyData.reply('Please provide a YouTube URL or title.');
        const searchLink = convertYouTubeLink(q);
        const searchResult = await yts(searchLink);
        const videoInfo = searchResult.videos[0];
        const downloadLink = videoInfo.url;
        
        // Compose the message for the found video
        let messageText = `🎥 *Video Found!*\n\n➥ *Title:* ${videoInfo.title}\n➥ *Duration:* ${videoInfo.timestamp}\n➥ *Views:* ${videoInfo.views}\n➥ *Uploaded On:* ${videoInfo.ago}\n➥ *Link:* ${videoInfo.url}\n`;
        
        // Send image, video, and document for download
        await msg.sendMessage(replyData.from, { image: { url: videoInfo.thumbnail }, caption: messageText }, { quoted: replyData });
        let videoDownload = await fg.ytv(downloadLink);
        await msg.sendMessage(replyData.from, { video: { url: videoDownload.dl_url }, mimetype: 'video/mp4' }, { quoted: replyData });
        await msg.sendMessage(replyData.from, { document: { url: videoDownload.dl_url }, mimetype: 'video/mp4', fileName: `${videoInfo.title}.mp4`, caption: '*Enjoy the video!*' }, { quoted: replyData });
    } catch (error) {
        console.log(error);
        replyData.reply('Error: ' + error);
    }
});
