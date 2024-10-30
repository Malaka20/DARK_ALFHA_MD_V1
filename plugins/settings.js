const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "setting",
    desc: "settings",
    category: "owner",
    react: "⚙",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃     🔧 *OPTIONS MENU* 🔧
┃━━━━━━━━━━━━━━━━━━━━━━━┃

┣━ *_WORK MODE_* ⤵️
┃   ┣ 1.1 🔹 *Public Work*
┃   ┣ 1.2 🔹 *Private Work*
┃   ┣ 1.3 🔹 *Group Only*
┃   ┗ 1.4 🔹 *Inbox Only*

┣━ *_AUTO VOICE_* ⤵️
┃   ┣ 2.1 🔊 *Auto Voice On*
┃   ┗ 2.2 🔕 *Auto Voice Off*

┣━ *_AUTO STATUS SEEN_* ⤵️
┃   ┣ 3.1 👁️‍🗨️ *Auto Read Status On*
┃   ┗ 3.2 👁️❌ *Auto Read Status Off*
`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
