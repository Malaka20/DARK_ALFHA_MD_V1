const {
  fetchJson
} = require("../lib/functions");
const {
  downloadTiktok
} = require('@mrnima/tiktok-downloader');
const {
  facebook
} = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");

cmd({
  'pattern': 'fb2',
  'alias': ["facebook2"],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (client, message, args, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {  // Check if the provided URL is valid
      return client.sendMessage(from, { 'text': "*`Need URL`*" }, { 'quoted': quoted });
    }
    await client.sendMessage(from, { 'react': { 'text': '⏳', 'key': quoted.key } });  // Send a reaction to indicate the process has started
    const videoData = await facebook(q);  // Fetch video details using the facebook function
    const videoInfo = `
      ┏━┫*⚬Lααɾα-ᴍᴅ-ꜰʙ⚬*┣━✾
      ┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
      ┻
      *⌛ᴅᴜʀᴀᴛɪᴏɴ* : ${videoData.result.duration}

      *🔢 ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*

      *ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎬*

      *1.1*     ┃  *ꜱᴅ Qᴜᴀʟɪᴛʏ*
      *1.2*     ┃  *ʜᴅ Qᴜᴀʟɪᴛʏ*

      *ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅ 🎧*

      *2.1*     ┃  *ᴀᴜᴅɪᴏ*
      *2.2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*
      *2.3*     ┃  *ᴠᴏɪᴄᴇ*

      > Lααɾα-ᴍᴅ ✻
    `;
    const sentMessage = await client.sendMessage(from, { 'image': { 'url': videoData.result.thumbnail }, 'caption': videoInfo }, { 'quoted': quoted });
    const messageId = sentMessage.key.id;
    client.ev.on("messages.upsert", async newMessage => {
      const messageContent = newMessage.messages[0];
      if (!messageContent.message) return;

      const userResponse = messageContent.message.conversation || messageContent.message.extendedTextMessage?.["text"];
      const userJid = messageContent.key.remoteJid;
      const isResponseToBotMessage = messageContent.message.extendedTextMessage && messageContent.message.extendedTextMessage.contextInfo.stanzaId === messageId;
      
      if (isResponseToBotMessage) {
        await client.sendMessage(userJid, { 'react': { 'text': '⬇️', 'key': messageContent.key } });
        let videoLinks = videoData.result.links;
        await client.sendMessage(userJid, { 'react': { 'text': '⬆️', 'key': messageContent.key } });
        
        if (userResponse === "1.1") {
          await client.sendMessage(userJid, { 'video': { 'url': videoLinks.SD }, 'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*" }, { 'quoted': messageContent });
        } else if (userResponse === "1.2") {
          await client.sendMessage(userJid, { 'video': { 'url': videoLinks.HD }, 'caption': "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*" }, { 'quoted': messageContent });
        } else if (userResponse === "2.1") {
          await client.sendMessage(userJid, { 'audio': { 'url': videoLinks.SD }, 'mimetype': "audio/mpeg" }, { 'quoted': messageContent });
        } else if (userResponse === '2.2') {
          await client.sendMessage(userJid, { 'document': { 'url': videoLinks.SD }, 'mimetype': "audio/mpeg", 'fileName': "Lara-MD/FBDL.mp3", 'caption': "**© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·**" }, { 'quoted': messageContent });
        } else if (userResponse === "2.3") {
          await client.sendMessage(userJid, { 'audio': { 'url': videoLinks.SD }, 'mimetype': 'audio/mp4', 'ptt': true }, { 'quoted': messageContent });
        }
      }
    });
  } catch (error) {
    console.error(error);
    await reply("*An error occurred while scraping the data.*");
  }
});






