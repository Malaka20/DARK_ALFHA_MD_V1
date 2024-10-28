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
const fg = require('api-dylux')



let wm = config.FOOTER
let newsize = config.MAX_SIZE * 1024 * 1024




cmd({
    pattern: "mp3",
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
    pattern: "ytmp3",
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
