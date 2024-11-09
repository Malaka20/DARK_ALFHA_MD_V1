//Created by Sadeesha Coder 🙋

const {cmd , commands} = require('../command')
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
_*💗 VIDEO DＯＷＮＬＯＤＥＲ 💗*_
*──────────────────*

 *Title :* ${search.all[0].title}

 *Description :* ${search.all[0].description}

 *Duration :* ${search.all[0].timestamp}

 *Ago :* ${search.all[0].ago}

 *Views :* ${search.all[0].views}

 *URL :* ${search.all[0].url}




> DARK_ALFHA_MD
`

await conn.sendMessage(from,{image:{url: search.all[0].thumbnail},caption:desc},{quoted:mek})


        let data = await fetchJson (`https://www.dark-yasiya-api.site/download/ytmp4?url=${link}`)

await conn.sendMessage(from, {
  video: {url: data.result.downloadLink},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`,caption: `*© ᴍᴀʟᴀᴋᴀ-ᴍᴅ · · ·* 👩‍💻`}, { quoted: mek })

}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)
