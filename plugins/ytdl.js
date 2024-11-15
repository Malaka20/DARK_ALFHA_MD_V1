// YT MP3 DOWNLOAD COMMAND 

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')
const yts = require('yt-search')

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
_*🎶 SONG DＯＷＮＬＯＤＥＲ 🎶*_
*──────────────────*

 🎵 ‎Title: ${data.title}
 ⏱ Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
  📎 Url: ${data.url}
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

//video by 𝘔𝘈𝘓𝘈𝘒𝘈𝘉𝘖𝘛𝘔𝘋 🙋

//------ YT VIDEO DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ YT VIDEO DL --------

case prefix  + 'ytmp4': {
  if (!text) return m.reply('*Enter Your Url*')
  try {
    m.reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video panjang!*')
    let proces = await (await fetch(`https://endpoint.web.id/downloader/ytmp4?key=${global.key}&url=${text}`)).json()
    let video4 = proces.result; 
    supunfernando.sendMessage(m.chat,{video:{url: video4.media }, caption: video4.title }, { quoted: m })
  } catch (e) {
      m.reply('*error*');
    }
}
break

//------ YT SONG DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ YT SONG DL --------

case prefix + 'ytmp31': {
  if (!text) return m.reply(`*Enter Your Url*`)
  try {
    let load = await (await fetch(`https://endpoint.web.id/downloader/ytmp3?key=${global.key}&url=${text}`)).json();
    let shannz = load.result
 
    await supunfernando.sendMessage(m.chat, { audio: { url: supunfernando.media }, mimetype: 'audio/mp4', 
    contextInfo: {
      externalAdReply: {
        title: supunfernando.title,
        body: `Type : Mp3 (128kbps)`,
        thumbnailUrl: supunfernando.image,
        mediaType: 1,
        showAdAttribution: false,
        renderLargerThumbnail: true,
      },
    }, 
    }, { quoted: m });
  } catch (error) {
      m.reply(`shannz api sedang error, segera repot ke owner!`);
    }
}
break
