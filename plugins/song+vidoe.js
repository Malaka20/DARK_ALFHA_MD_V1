const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download songs",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
⭐ *DARKALFHAMD SONG DOWNLOADER* ⭐

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY DARKALFHAMD ✅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY MALAKA"},{quoted:mek})


  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===========video-dl============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download songs",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
📽️ *_DARK_ALFHA_MD VIDEO DOWNLOADER_* 📽️

┌───────────────────
├ ℹ️ *Title:* ${deta.title}
├ 👤 *Author:* ${deta.author.name}
├ 👁️‍🗨️ *Views:* ${deta.views}
├ 🕘 *Duration:* ${deta.timestamp}
├ 📌 *Ago:* ${deta.ago}
└───────────────────

💻 Github: https://github.com/Navinofc44/QUEEN-CHOOTY-NELUMI-MD-V2

*🔢 Choose Your Download Format*

*1 Video File* 🎶
*2 Document File* 📁

> *DARK_ALFHA_MD😉*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+ document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY MALAKA 💗"},{quoted:mek})


  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

  
