const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
  pattern: "menu",
  desc: "commands panel",
  react: "🌸",
  filename: __filename
}, async (client, message, args, extras) => {
  const { from, quoted, body, isCmd, command, args: arguments, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply } = extras;

  try {
    const menuMessage = `
╒✦•··············•••••••••··············•··•✦
│ *CREATOR* : *Sadeesha Tharumin*
│ *VERSION* : *v2.0.0*
│ *UPTIME*  : ${runtime(process.uptime())}
│ *RAM USAGE*  : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem() / 1024 / 1024)}MB
│ *HOST NAME* : ${require("os").hostname()}
╘✦•·············•••••••••··················•✦
────────────────
*⫷REPLY BELOW THE NUMBER⫸*
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
*© CREATED BY SADEESHA CODER · · ·*
> Alexa 👧🏻`;

    const imageUrl = "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg";
    const sentMessage = await client.sendMessage(from, { image: { url: imageUrl }, caption: menuMessage }, { quoted });

    const messageId = sentMessage.key.id;

    client.ev.on("messages.upsert", async (event) => {
      const receivedMessage = event.messages[0];
      if (!receivedMessage.message) return;

      const userMessage = receivedMessage.message.conversation || receivedMessage.message.extendedTextMessage?.text;
      const senderId = receivedMessage.key.remoteJid;
      const isReplyToMenu = receivedMessage.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;

      if (isReplyToMenu) {
        const responses = {
          "1": "【 ALEXA DOWNLOAD COMMANDS 】 ...",
          "2": "【 ALEXA SEARCH COMMANDS 】 ...",
          "3": "【 ALEXA ANIME COMMANDS 】 ...",
          "4": "【 ALEXA FUN COMMANDS 】 ...",
          "5": "【 ALEXA CONVERT COMMANDS 】 ...",
          "6": "【 ALEXA AI COMMANDS 】 ...",
          "7": "【 ALEXA GROUP COMMANDS 】 ...",
          "8": "【 ALEXA OWNER COMMANDS 】 ...",
          "9": "【 ALEXA SYSTEM COMMANDS 】 ..."
        };

        const response = responses[userMessage];
        if (response) {
          await client.sendMessage(senderId, { image: { url: imageUrl }, caption: response }, { quoted: receivedMessage });
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});
