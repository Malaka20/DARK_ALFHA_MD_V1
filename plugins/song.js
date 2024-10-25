const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*";



//fb downloader
cmd({
    pattern: "song",
    alias: ["yt"],
    desc: "download songs",
    category: "download",
    react: "⬇️",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me yt url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/ytadown?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY MALAKA"},{quoted:mek})


        
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

