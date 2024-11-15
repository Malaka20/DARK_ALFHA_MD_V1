const fetch = require('node-fetch');
const { getBuffer, getGroupAdmins, getRandom, getsize, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('../lib/functions');
const { cmd, commands } = require('../command');
const fg = require('../lib/functions');
const yts = require('yt-search');

async function dlyta(url) {
    try {
        const attempts = 10;
        for (let i = 0; i < attempts; i++) {
            const response = await fetch(`https://api-pink-venom.vercel.app/api/ytdl?url=${url}`);
            const data = await response.json();
            if (data.result.download_url) {
                return { 'status': true, 'dl_link': data.result.download_url };
            }
        }
        await new Promise(resolve => setTimeout(resolve, 4000));
        return { 'status': false, 'msg': 'Failed to process the request.' };
    } catch (error) {
        console.error(error);
        return { 'status': false, 'msg': error.message };
    }
}

cmd({
    'pattern': 'yta',
    'alias': ['ytdown'],
    'react': '🎧',
    'dontAddCommandList': true,
    'filename': __filename
}, async (message, match, options) => {
    try {
        const url = options.q;
        if (!url) {
            return await options.reply('*Need a YouTube URL!*');
        }
        options.reply('*🌸DOWNLOADING···*\n> ALEXA-MD');
        const result = await dlyta(url);
        await message.sendMessage(options.from, {
            'audio': { 'url': result.dl_link },
            'mimetype': 'audio/mpeg'
        }, { 'quoted': match });
    } catch (error) {
        console.error('First attempt failed:', error);
        try {
            const result = await dlyta(url);
            await message.sendMessage(options.from, {
                'audio': { 'url': result.dl_link },
                'mimetype': 'audio/mpeg'
            }, { 'quoted': match });
        } catch (error) {
            console.log('Second attempt failed:', error);
            await options.reply('*Failed to process the request. Please try again later!*');
        }
    }
});

cmd({
    'pattern': 'song1',
    'alias': ['yts'],
    'react': '🎧',
    'dontAddCommandList': true,
    'filename': __filename
}, async (message, match, options) => {
    try {
        const query = options.q;
        if (!query) {
            return await options.reply('*Need a Title!*');
        }
        const results = await yts(query);
        const video = results.videos[0];
        let caption = `\n╭──────────────⊷❒\n_*🌸 SONG DOWNLOADER 🌸*_\n╰──────────────⊷❒\n🌸 *Title :* ${video.title}\n🌸 *Description :* ${video.description}\n\n🌸 *Duration :* ${video.timestamp}\n🌸 *Views :* ${video.views}\n🌸 *URL :* ${video.url}\n*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ..🧑🏻‍💻*`;
        const thumbnailMessage = await message.sendMessage(options.from, {
            'image': { 'url': video.thumbnail },
            'caption': caption
        }, { 'quoted': match });
        const result = await dlyta(video.url);
        await message.sendMessage(options.from, {
            'audio': { 'url': result.dl_link },
            'mimetype': 'audio/mpeg'
        }, { 'quoted': match });
        await message.sendMessage(options.from, { 'delete': thumbnailMessage.key });
    } catch (error) {
        console.log('First attempt failed:', error);
        try {
            const result = await dlyta(url);
            await message.sendMessage(options.from, {
                'audio': { 'url': result.dl_link },
                'mimetype': 'audio/mpeg'
            }, { 'quoted': match });
            await message.sendMessage(options.from, { 'delete': thumbnailMessage.key });
        } catch (error) {
            console.log('Second attempt failed:', error);
            await options.reply('*Failed to process the request. Please try again later!*');
        }
    }
});

cmd({
    'pattern': 'downlode',
    'desc': 'downlode videos',
    'category': 'video',
    'react': '🎬',
    'filename': __filename
}, async (message, match, options) => {
    try {
        const query = options.q;
        if (!query) {
            return options.reply('*Please give me a YT url or Title*');
        }
        const results = await yts(query);
        const video = results.videos[0];
        let caption = `\n*──────────────────*\n_*🌸 ALEXA VIDEO DOWNLODER 🌸*_\n*──────────────────*\n\n🌸 *Title :* ${video.title}\n🌸 *Description :* ${video.description}\n\n🌸 *Duration :* ${video.timestamp}\n🌸 *Views :* ${video.views}\n🌸 *URL :* ${video.url}`;
        await message.sendMessage(options.from, {
            'image': { 'url': video.thumbnail },
            'caption': caption
        }, { 'quoted': match });
        let videoResult = await fg.ytv(video.url);
        let videoUrl = videoResult.dl_url;
        let videoMessage = await message.sendMessage(options.from, {
            'video': { 'url': videoUrl },
            'mimetype': 'video/mp4',
            'caption': 'Enjoy your video!'
        }, { 'quoted': match });
        await message.sendMessage(options.from, { 'react': { 'text': '✅', 'key': videoMessage.key } });
    } catch (error) {
        console.log(error);
        options.reply('' + error);
    }
});
