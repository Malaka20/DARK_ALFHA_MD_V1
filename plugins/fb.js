// Deobfuscated version of the JavaScript

const { cmd, commands } = require('../command');

// Define Facebook downloader command
cmd({
    pattern: 'fb',
    react: '🔃',
    desc: 'Download Facebook video',
    category: 'download',
    filename: __filename
}, async (message, chat, context, options) => {
    const { from, quoted, body, q, reply } = options;
    if (!q) return reply("Please provide a valid URL.");
    if (!q.includes("facebook.com")) return reply("Invalid Facebook URL.");
    try {
        const response = await fetch(`https://api.example.com/api/fdown?url=${q}`);
        const data = await response.json();
        await message.sendMessage(from, { video: { url: data.sd }, caption: "SD Quality" }, { quoted: chat });
        await message.sendMessage(from, { video: { url: data.hd }, caption: "HD Quality" }, { quoted: chat });
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the request.");
    }
});

// Define TikTok downloader command
cmd({
    pattern: 'tiktok',
    react: '⬇',
    desc: 'Download TikTok video',
    category: 'download',
    filename: __filename
}, async (message, chat, context, options) => {
    const { from, quoted, body, q, reply } = options;
    if (!q) return reply("Please provide a valid URL.");
    if (!q.includes("tiktok.com")) return reply("Invalid TikTok URL.");
    try {
        const response = await fetch(`https://api.example.com/api/tiktokdl?url=${q}`);
        const data = await response.json();
        await message.sendMessage(from, { video: { url: data.no_wm }, caption: "No Watermark" }, { quoted: chat });
        await message.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mpeg' }, { quoted: chat });
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the request.");
    }
});
