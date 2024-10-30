// YT MP3 DOWNLOAD COMMAND 

const { cmd } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me song name or url !')
    
const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${apilink}/download/ytmp3?url=${data.url}`)
    
let message = `‎‎
*──────────────────*
_*🪀 SONG DＯＷＮＬＯＤＥＲ 🪀*_
*──────────────────*

 🎵 ‎Title: ${data.title}
 ⏱ Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
  📎 Url: ${data.url}
  
  🪀 DARK-ALFHA-MD 🪀
`
  
await conn.sendMessage(from, { image: { url : data.thumbnail }, caption: message }, { quoted : mek })
  
// SEND AUDIO NORMAL TYPE and DOCUMENT TYPE
await conn.sendMessage(from, { audio: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek })
await conn.sendMessage(from, { document: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: `${data.title}`}, { quoted: mek })
  
} catch(e){
console.log(e)
reply(e)
}
})

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
_*📽️ VIDEO DＯＷＮＬＯＤＥＲ 📽️*_
*──────────────────*

📜 *Title :* ${search.all[0].title}

📜 *Description :* ${search.all[0].description}

📜 *Duration :* ${search.all[0].timestamp}

📜 *Ago :* ${search.all[0].ago}

📜 *Views :* ${search.all[0].views}

📜 *URL :* ${search.all[0].url}

> MALAKA-MD
`

await conn.sendMessage(from,{image:{url: search.all[0].thumbnail},caption:desc},{quoted:mek})


        let data = await fetchJson (`https://api.dreaded.site/api/ytdl/video?url=${link}`)

await conn.sendMessage(from, {
  video: {url: data.result.downloadLink},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`,caption: `*©ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ · · ·* 👩‍💻`}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})


// FOLLOW US : https://github.com/Malaka-KG/DARK_ALFHA_MD_V1
