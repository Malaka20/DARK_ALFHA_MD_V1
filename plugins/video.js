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
_*🌸 VIDEO DＯＷＮＬＯＤＥＲ 🌸*_
*──────────────────*

🌸 *Title :* ${search.all[0].title}

🌸 *Description :* ${search.all[0].description}

🌸 *Duration :* ${search.all[0].timestamp}

🌸 *Ago :* ${search.all[0].ago}

🌸 *Views :* ${search.all[0].views}

🌸 *URL :* ${search.all[0].url}

_📤ᴜᴘʟᴏᴅɪɴɢ ʏᴏᴜʀ ᴀᴜᴅɪᴏ ꜰɪʟʟ📤_


> ALEXA-MD
`

	const sections = [
    {
	title: "",
	rows: [
	   {title: "1", rowId: prefix + '240p ' + q , description: '240p Quality Video'},
	   {title: "2", rowId: prefix + '360p ' + q , description: '360p Quality Video'} ,
           {title: "3", rowId: prefix + '480p ' + q , description: '480p Quality Video'},
	   {title: "4", rowId: prefix + '720p ' + q , description: '720p Quality Video'} ,
           {title: "5", rowId: prefix + '1080p ' + q , description: '1080p Quality Video'},
	   {title: "6", rowId: prefix + '1440p ' + q , description: '1440p Quality Video'} ,
           {title: "7", rowId: prefix + '2160p ' + q , description: '2160p Quality Video'},
	   {title: "8", rowId: prefix + 'ytdocv ' + q , description: 'Document type Video'} ,
	]
    } 
]

await conn.sendMessage(from,{image:{url: search.all[0].thumbnail},caption:desc},{quoted:mek})


        let data = await fetchJson (`https://api.dreaded.site/api/ytdl/video?url=${link}`)

await conn.sendMessage(from, {
  video: {url: data.result.downloadLink},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`,caption: `*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·* 🧑🏻‍💻`}, { quoted: mek })

}catch(e){
    console.log(e)
    reply(`${e}`)
}
}
)
