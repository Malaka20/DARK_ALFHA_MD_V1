//Malaka  by DARKALFHAMD 🙋

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const { fetchJson } = require("../lib/functions")

cmd({
    pattern: "video",
    desc: "downlode videos",
    category: "downlode",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a title*")
let search = await yts(q)
let link = search.all[0].url
let desc = `
*──────────────────*
_*🪀 VIDEO DＯＷＮＬＯＤＥＲ 🪀*_
*──────────────────*

 🪀*Title :* ${search.all[0].title}

 🪀*Description :* ${search.all[0].description}

 🪀*Duration :* ${search.all[0].timestamp}

 🪀*Ago :* ${search.all[0].ago}

 🪀*Views :* ${search.all[0].views}

 🪀*URL :* ${search.all[0].url}

    🪀 ᴍᴀʟᴀᴋᴀ-ᴍᴅ-ꜰɪʟʟ 🪀

> 🪀 MADE BY 𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝙈𝘿 🪀
`

await conn.sendMessage(from,{image:{url: search.all[0].thumbnail},caption:desc},{quoted:mek})


        let data = await fetchJson (`https://api.dreaded.site/api/ytdl/video?url=${link}`)

await conn.sendMessage(from, {
  video: {url: data.result.downloadLink},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`,caption: `*© ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ ...👩‍💻`}, { quoted: mek })
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

