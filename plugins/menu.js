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
}, async (context, args, user, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    const menuMessage = `
╒✦•··············•••••••••··············•··•✦
│ *ᴄʀᴇᴀᴛᴏʀ* : *Sadeesha Tharumin*
│ *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
│ *ᴜᴘᴛɪᴍᴇ*  :  ${runtime(process.uptime())}
│ *ʀᴀᴍ ᴜꜱᴀɢᴇ*  : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
│ *ʜᴏꜱᴛ ɴᴀᴍᴇ* : ${os.hostname()}
╘✦•·············•••••••••··················•✦
────────────────
*⫷ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ⫸*
────────────────
╭──────────────
│ *1* _(DOWNLOAD COMMANDS)_
│ *2* _(SEARCH COMMANDS)_
│ *3* _(ANIME COMMANDS)_
│ *4* _(FUN COMMANDS)_
│ *5* _(CONVERTED COMMANDS)_
│ *6* _(AI COMMANDS)_
│ *7* _(GROUP COMMANDS)_
│ *8* _(OWNER COMMANDS)_
│ *9* _(SYSTEM COMMANDS)_
╰─────────────
*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
> Aʅҽxα 👧🏻 
`;

    const message = await sendMessage(from, {
      image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
      caption: menuMessage
    }, { quoted });

    const menuMessageId = message.key.id;
    
    // Event listener for new messages
    sendMessage.ev.on("messages.upsert", async msg => {
      const newMessage = msg.messages[0];
      if (!newMessage.message) return;

      const text = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const senderId = newMessage.key.remoteJid;
      const isReplyToMenu = newMessage.message.extendedTextMessage?.contextInfo.stanzaId === menuMessageId;

      if (isReplyToMenu) {
        if (text === '1') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            
            caption: "【 _*ALEXA DOWNLOAD COMMANDS 📥*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '2') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*🔎ALEXA SEARCH COMMANDS🔎*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '3') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*👯🏻ALEXA ANIME COMMANDS👯🏻*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '4') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*🧙🏻ALEXA FUN COMMANDS🧙🏻*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '5') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*🪄ALEXA CONVERT COMMANDS🪄*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '6') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*👾ALEXA AI COMMANDS👾*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '7') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*🧣ALEXA GROUP COMMANDS🧣*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '8') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*🧑🏻‍💻ALEXA OWNER COMMANDS🧑🏻‍💻*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        } else if (text === '9') {
          await sendMessage(senderId, {
            image: { url: "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg" },
            caption: "【 _*⚙️ALEXA SYSTEM COMMANDS⚙️*_】\n\n<Commands here>\n"
          }, { quoted: newMessage });
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply(`${error}`);
  }
});
