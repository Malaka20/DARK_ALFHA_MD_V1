// TIKTOK DOWNLOAD COMMAND

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app' // API LINK ( DO NOT CHANGE THIS!! )


cmd({
    pattern: "tiktok",
    alias: ["tt","ttdown"],
    react: "🍧",
    desc: "",
    category: "download",
    use: '.tiktok < url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('tiktok.com')) return await reply("This url is invalid");
  
const tiktok = await fetchJson(`${apilink}/download/tiktok?url=${q}`);
  
const msg = `
           🍧 *TIKTOK DOWNLOADER* 🍧


• *Title* - ${tiktok.result.title}

• *Author* - ${tiktok.result.author}

• *Duration* - ${tiktok.result.duration}

• *Views* - ${tiktok.result.views}   
`
    let sections = [
       {
	title: "",
	rows: [
    {title: "1", rowId: `${prefix}dvideo ${l.nowm}`, description: 'video without Watermark'},
    {title: "2", rowId: `${prefix}dvideo ${l.watermark}`, description: 'Video with Watermark'},
    {title: "3", rowId: `${prefix}dau ${l.audio}`, description: 'Download audio'},
	]
    } 
]
const listMessage = {
  image: { url: l.thumbnail },
  caption: dat,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
contextInfo: {
				
				
}
  
// SEND DETAILS
await conn.sendMessage( from, { image: { url: tiktok.result.cover || '' }, caption: msg }, { quoted: mek });

// SEND WATER MARK VIDEO
await conn.sendMessage(from, { video: { url: tiktok.result.wmVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nWATERMARK VIDEO ✅` }, { quoted: mek });
  
// SEND HD VIDEO
await conn.sendMessage(from, { video: { url: tiktok.result.hdVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nNO-WATERMARK VIDEO ✅` }, { quoted: mek });
  
// SEND AUDIO
await conn.sendMessage(from, { audio: { url: tiktok.result.sound }, mimetype: "audio/mpeg" }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply(e)
}
})

// https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27
