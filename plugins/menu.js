const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
  pattern: "menu",
  desc: "commands panel",
  react: '🌸',
  filename: __filename
}, async (client, message, args, {
  from,
  quoted,
  body,
  isCmd,
  command,
  argsArray,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const menuText = `
╒✦•··············•••••••••··············•··•✦
│ *Creator* : *Sadeesha Tharumin*
│ *Version* : *v.2.0.0*
│ *Uptime*  :  ${runtime(process.uptime())}
│ *RAM Usage*  : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem() / 1024 / 1024)}MB
│ *Host Name* : ${os.hostname()}
╘✦•·············•••••••••··················•✦
────────────────
*⫷ Reply below the number ⫸*
────────────────
╭──────────────
│ *1* _(DOWNLOAD COMMANDS)_
│ *2* _(SEARCH COMMANDS)_
│ *3* _(ANIME COMMANDS)_
│ *4* _(FUN COMMANDS)_
│ *5* _(CONVERT COMMANDS)_
│ *6* _(AI COMMANDS)_
│ *7* _(GROUP COMMANDS)_
│ *8* _(OWNER COMMANDS)_
│ *9* _(SYSTEM COMMANDS)_
╰─────────────
*© Created by Sadeesha Coder*
> Alexa 👧🏻 
`;

    const imageUrl = "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg";

    const menuMessage = await client.sendMessage(from, {
      image: { url: imageUrl },
      caption: menuText
    }, { quoted });

    const menuMessageId = menuMessage.key.id;

    client.ev.on("messages.upsert", async event => {
      const receivedMessage = event.messages[0];
      if (!receivedMessage.message) return;

      const userReply = receivedMessage.message.conversation || receivedMessage.message.extendedTextMessage?.text;
      const chatId = receivedMessage.key.remoteJid;
      const isReplyToMenu = receivedMessage.message.extendedTextMessage && receivedMessage.message.extendedTextMessage.contextInfo.stanzaId === menuMessageId;

      if (isReplyToMenu) {
        if (userReply === '1') {
          await client.sendMessage(chatId, {
            image: { url: imageUrl },
            caption: `
【 _*ALEXA DOWNLOAD COMMANDS 📥*_】

╭━━━━━━━━━━━━━━━
         *.song*
 (_Download YouTube song_) 

- _🌸 Ex: .song lelena_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.video*
 (_Download YouTube video_) 

- _🌸 Ex: .video lelena_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.fb*
 (_Download Facebook video_) 

- _🌸 Ex: .fb <url>_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.tiktok*
 (_Download TikTok video without watermark and audio_) 

- _🌸 Ex: .tiktok <url>_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.apk*
 (_Download APK_) 

- _🌸 Ex: .apk whatsapp_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.mfire*
 (_Download Mediafire link_) 

- _🌸 Ex: .mfire <url>_
╰━━━━━━━━━━━━━━━
`
          }, { quoted: receivedMessage });
        } else if (userReply === '2') {
          await client.sendMessage(chatId, {
            image: { url: imageUrl },
            caption: `
【 _*🔎ALEXA SEARCH COMMANDS🔎*_】

╭━━━━━━━━━━━━━━━
         *.img*
 (_Google image search_) 

- _🌸 Ex: .img cars_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.movie*
 (_Search movie details_) 

- _🌸 Ex: .movie spider man_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.yts*
 (_Search YouTube links_) 

- _🌸 Ex: .yts alexa whatsapp bot_
╰━━━━━━━━━━━━━━━
`
          }, { quoted: receivedMessage });
        }
        // More else-if branches for options 3, 4, etc. can be added similarly
      }
    });
  } catch (error) {
    console.log(error);
    reply('Error: ' + error);
  }
});
