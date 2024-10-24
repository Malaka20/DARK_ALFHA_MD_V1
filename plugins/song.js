const {cmd , commands} = require('../command')
const yts = require('yt-search')
const fg = require('api-dylux')

cmd({
    pattern: 'song',
    desc: 'download songs',
    category: 'download',
    react: "🎧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*Please enter a query or a url !*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `🎶 *_QUEEN-CHOOTY-NELUMI-MD AUDIO DOWNLOADER_* 🎶

┌───────────────────
├ ℹ️ *Title:* ${deta.title}
├ 👤 *Author:* ${deta.author.name}
├ 👁️‍🗨️ *Views:* ${deta.views}
├ 🕘 *Duration:* ${deta.timestamp}
├ 📌 *Ago:* ${deta.ago}
└───────────────────

💻 https://github.com/Navinofc44/QUEEN-CHOOTY-NELUMI-MD-V2

*Choose Your Download Format*

*1 Audio File🎶*
*2 Document File📁*

> *QUEEN-CHOOTY-CHOOTY-MD*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '*ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '*ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        })

    }catch(e){
console.log(e)
reply(`${e}`)
}
})
