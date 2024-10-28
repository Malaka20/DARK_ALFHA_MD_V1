const config = require('../config')
const dl = require('@bochilteam/scraper') 
const fs = require('fs')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
const {
    cmd,
    commands
} = require('../command')
var sizetoo =  "_This file size is too big_"
const yts = require("ytsearch-venom")

let wm = config.FOOTER
let newsize = config.MAX_SIZE * 1024 * 1024

cmd({
    pattern: "song",
    alias: ["ytmp3","play"],
    use: '.song lelena',
    react: "🎧",
    desc: 'Download audios from youtube',
    category: "download",
    filename: __filename

},

    async (conn, m, mek, { from, q, reply }) => {
        try {
            if (!q) return await reply('*Please enter a query or a url!*')
            const url = q.replace(/\?si=[^&]*/, '');
            var results = await yts(url);
            var result = results.videos[0]
         let caption = ` 🪔 *Y T - S O N G*\n\n`
         caption += `	•  *Title* : ${result.title}\n`
         caption += `	•  *Views* : ${result.views}\n`
         caption += `	•  *Duration* : ${result.duration}\n`
         caption += `	◦  *URL* : ${result.url}\n\n`

            let buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Audio",
                    id: `.ytaa ${result.url}`
                }),
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Document",
                    id: `.ytad ${result.url}±${result.title}`
                }),
            }
            ]
            let message = {
                image: result.thumbnail,
                header: '',
                footer: wm,
                body: caption

            }
            return await conn.sendButtonMessage(from, buttons, m, message)
        } catch (e) {
            console.log(e)
            reply('*Error !!*')
        }
    })

cmd({
    pattern: "ytaa",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
           const prog = await fetchJson(`https://api-pink-venom.vercel.app/api/ytmp3?url=${q}`)
           await conn.sendMessage(from, { audio:{ url: prog.result.download_url }, mimetype: 'audio/mpeg' }, { quoted: mek })
         } catch (e) {
	       console.log(e)
        }
    })
    
    
    cmd({
    pattern: "ytad",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { from, q, reply }) => {
try {
           if (!q) return await reply('*Need a youtube url!*')
           const link = q.split("|")[0]
           const title = q.split("|")[1]  || 'null'
           const prog = await fetchJson(`https://api-pink-venom.vercel.app/api/ytmp3?url=${link}`)
           await conn.sendMessage(from, { document:{ url: prog.result.download_url }, mimetype: 'audio/mpeg' , caption: wm, fileName: `${title}.mp3` }, { quoted: mek });
         } catch (e) {
	       console.log(e)
        }
    })
