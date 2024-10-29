//Created by Sadeesha Coder 🙋

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
const { fetchJson } = require("../lib/functions")

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me video name or url !')
    
const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${apilink}/download/ytvurl=${data.url}`)
    
let message = `‎‎
*──────────────────*
_*🪀 VIDEO DＯＷＮＬＯＤＥＲ 🪀*_
*──────────────────*

 📽️ ‎Title: ${data.title}
 ⏱ Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
  📎 Url: ${data.url}
  
  🪀 DARK-ALFHA-MD 🪀
`
  
await conn.sendMessage(from, { image: { url : data.thumbnail }, caption: message }, { quoted : mek })
  
// SEND AUDIO NORMAL TYPE and DOCUMENT TYPE
await conn.sendMessage(from, { video: { url: ytdl.result.dl_link }, mimetype: "video/mp4" }, { quoted: mek })

  
} catch(e){
console.log(e)
reply(e)
}
})
