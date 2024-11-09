//Created by Sadeesha Coder 🙋

const {cmd , commands} = require('../command')
const yts = require('yt-search')
const dl = require('@bochilteam/scraper')  
const ytdl = require('youtubedl-core');
const api = require("caliph-api");
const fs = require('fs-extra')
const { fetchJson } = require("../lib/functions")

cmd({
    pattern: "video",
    alias: ["ytvideo"],
    use: '.video lelena',
    react: "📽️",
    desc: descv,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `┌───[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

  *SELECT TYPE*`

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
const listMessage = {
  text: dat,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek }) 				      
}
if(ytreg(q)){let dat = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

*SELECT SONG TYPE*`
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
           {title: "7", rowId: prefix + '2160p' + q , description: '2160p Quality Video'},
	   {title: "8", rowId: prefix + 'ytdocv ' + q , description: 'Document type Video'} ,

	]
    } 
]
const listMessage = {
  text: dat,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections }	

	     
return await conn.replyList(from, listMessage ,{ quoted : mek }) 

}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `[🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚]

   *YT DOWNLOADER*

╏🎀 *Title:* ${anu.title}
⦁
╏🌐 *Duration:* ${anu.timestamp}
⦁
╏👀 *Viewers:* ${anu.views}
⦁
╏⬆️ *Uploaded:* ${anu.ago}
⦁
╏👽 *Author:* ${anu.author.name}
⦁
╏📡 *Url* : ${anu.url}`

const sections = [
    {
	title: "",
	rows: [
	   {title: "1", rowId: prefix + '240p ' + anu.url , description: '240p Quality Video'},
	   {title: "2", rowId: prefix + '360p ' + anu.url , description: '360p Quality Video'} ,
           {title: "3", rowId: prefix + '480p ' + anu.url , description: '480p Quality Video'},
	   {title: "4", rowId: prefix + '720p ' + anu.url , description: '720p Quality Video'} ,
           {title: "5", rowId: prefix + '1080p ' + anu.url , description: '1080p Quality Video'},
	   {title: "6", rowId: prefix + '1440p ' + anu.url , description: '1440p Quality Video'} ,
           {title: "7", rowId: prefix + '2160p ' + anu.url , description: '2160p Quality Video'},
	   {title: "8", rowId: prefix + 'ytdocv ' + anu.url , description: 'Document type Video'} ,
	]
    } 
]
const listMessage = {
  image: {url: anu.thumbnail},
  caption: cap,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '🧚 ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ 🧚',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

await conn.replyList(from, listMessage ,{ quoted : mek }) 

} catch (e) {
  reply(N_FOUND)
  l(e)
}
})
