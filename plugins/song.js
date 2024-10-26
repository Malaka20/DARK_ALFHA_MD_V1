const {cmd , commands} = require('../command')
const fg = require('api-dylux');
const yts = require('yt-search');
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor');
const fs = require('fs-extra');


cmd({
    pattern: "song",
    desc: "download songs",
    react: "🎧",
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
⭐ *𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝙈𝘿 SONG DOWNLOADER* ⭐

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY 𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝙈𝘿 ✅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//===================download audio=======================

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//==============send audio + document message===============
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek});
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY MALAKA"},{quoted:mek});


  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===========video-dl============

cmd({
    pattern: "video",
    desc: "download videos",
    react: "🎬",
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
⭐ *𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝙈𝘿 VIDEO DOWNLOADER* ⭐

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY 𝘿𝘼𝙍𝙆-𝘼𝙇𝙁𝙃𝘼-𝙈𝘿 ✅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//============download video============

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//============send video+ document message================
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek});
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY MALAKA 💗"},{quoted:mek});


  
}catch(e){
console.log(e)
reply(`${e}`)
}
})



//---------------------------------------------------------------------------
     cmd({
        pattern: "yts",
        desc: "Gives descriptive info of query from youtube..",
        category: "downloader",
        filename: __filename,
        use: '<yt search text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        if (!text) return citel.reply(`Example : ${prefix}yts ${tlang().title} WhatsApp Bot`);
        let search = await yts(text);
        let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\n🙈Views : ${i.views}\n⌛Duration : ${
      i.timestamp
    }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
        }
        return Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)

  


