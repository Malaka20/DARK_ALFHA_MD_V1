const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');
const apilink = 'https://dark-yasiya-api-new.vercel.app';

cmd({
    pattern: 'song',
    desc: 'download songs.',
    category: 'downloads',
    react: '🎧',
    filename: __filename
}, async (bot, msg, args, { from, reply, q }) => {
    try {
        if (!q) return reply('Give me song name or URL!');

        const searchUrl = `${apilink}/search/yt?q=${q}`;
        const searchResult = await fetchJson(searchUrl);
        const songData = searchResult.result.song[0];
        const downloadUrl = `${apilink}/download/ytmp3?url=${songData.url}`;
        const downloadData = await fetchJson(downloadUrl);

        const message = 
            `‎‎*乂 SAHAS-MD SONG DOWNLOADER*\n\n` +
            `*⚙️ Title* : ${songData.title}\n` +
            `*📃 Description* : ${songData.description}\n` +
            `*📆 Uploaded On* : ${songData.ago}\n` +
            `*🚀 Views* : ${songData.views}\n` +
            `*⏰ Duration* : ${songData.timestamp}\n` +
            `*🎬 Channel* : ${songData.author.name}\n` +
            `*🖇️ Url* : ${songData.url}\n\n` +
            `*乂 REPLY THE DOWNLOAD OPTION*\n\n` +
            `*1️⃣  Download : Audio Type*\n` +
            `*2️⃣  Download : Document Type*\n\n` +
            `> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`;

        const sentMessage = await bot.sendMessage(from, { 
            text: message, 
            contextInfo: { 
                forwardingScore: 999, 
                isForwarded: true, 
                externalAdReply: { 
                    title: 'SAHAS-MD Song Downloader', 
                    body: `${songData.title} : Powered By SAHAS-MD Song Information Search Engine`, 
                    thumbnailUrl: songData.thumbnail, 
                    sourceUrl: '', 
                    mediaType: 1, 
                    renderLargerThumbnail: true 
                }
            }
        }, { quoted: msg });

        bot.ev.on('messages.upsert', async (messageEvent) => {
            const newMessage = messageEvent.messages[0];
            if (!newMessage.message || !newMessage.message.text) return;
            const userResponse = newMessage.message.text.trim();

            if (newMessage.message.extendedTextMessage && newMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
                switch (userResponse) {
                    case '1':
                        await bot.sendMessage(from, { audio: { url: downloadData.result.dl_link }, mimetype: 'audio/mpeg' }, { quoted: msg });
                        break;
                    case '2':
                        await bot.sendMessage(from, { document: { url: downloadData.result.dl_link }, mimetype: 'audio/mpeg', fileName: `${songData.title}.mp3`, caption: `${songData.title}\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*` }, { quoted: msg });
                        await bot.sendMessage(from, { react: { text: '✅', key: msg.key } });
                        break;
                    default:
                        reply('Invalid option. Please select a valid option🔴');
                }
            }
        });
    } catch (error) {
        console.error(error);
        await bot.sendMessage(from, { react: { text: '❌', key: msg.key } });
        reply('An error occurred while processing your request.');
    }
});
