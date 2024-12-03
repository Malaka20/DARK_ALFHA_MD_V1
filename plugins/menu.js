const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
  pattern: "menu",
  desc: "commands panel",
  react: '🌸',
  filename: __filename
}, async (client, message, args, options) => {
  try {
    const { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply } = options;
    const os = require('os');
    
    // Build menu message
    const runtime = (uptime) => {
      let seconds = parseInt(uptime, 10);
      let hours = Math.floor(seconds / 3600);
      seconds = seconds % 3600;
      let minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      return `${hours}h ${minutes}m ${seconds}s`;
    };

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
│ *5* _(CONVERT COMMANDS)_
│ *6* _(AI COMMANDS)_
│ *7* _(GROUP COMMANDS)_
│ *8* _(OWNER COMMANDS)_
│ *9* _(SYSTEM COMMANDS)_
╰─────────────
*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
> Aʅҽxα 👧🏻 
`;

    const menuImage = 'https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg';

    // Send the menu message
    const menuMsg = await client.sendMessage(from, { image: { url: menuImage }, caption: menuMessage }, { quoted });

    // Capture the menu message ID
    const menuMsgId = menuMsg.key.id;

    // Listen for user responses
    client.ev.on('messages.upsert', async (upsert) => {
      const msg = upsert.messages[0];
      if (!msg.message) return;

      const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
      const isReplyToMenu = msg.message.extendedTextMessage?.contextInfo.stanzaId === menuMsgId;
      const chatId = msg.key.remoteJid;

      if (isReplyToMenu) {
        let responseMessage;

        switch (text) {
          case '1':
            responseMessage = `
【 _*ALEXA DOWNLOAD COMMANDS 📥*_】
╭━━━━━━━━━━━━━━━
         *.song*
 (_Downloading YouTube song)_
 - _🌸 Ex: .song lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.video*
 (_Downloading YouTube video)_
 - _🌸 Ex: .video lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.fb*
 (_Downloading Facebook video)_
 - _🌸 Ex: .fb <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tiktok*
 (_Downloading TikTok no-watermark and audio)_
 - _🌸 Ex: .tiktok <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.apk*
 (_Downloading APK)_
 - _🌸 Ex: .apk WhatsApp_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.mfire*
 (_Downloading MediaFire)_
 - _🌸 Ex: .mfire <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xvdl*
 (_Downloading xvideos.com video)_
 - _🌸 Ex: .xvdl Mia Khalifa_
╰━━━━━━━━━━━━━━━
> ALEXA-MD
`;
            break;
          case '2':
            responseMessage = `
【 _*🔎ALEXA SEARCH COMMANDS🔎*_】
╭━━━━━━━━━━━━━━━
         *.img*
 (_Searching Google Images)_
 - _🌸 Ex: .img cars_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.githubstalk*
 (_Searching GitHub profile)_
 - _🌸 Ex: .githubstalk sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movie*
 (_Searching movie details)_
 - _🌸 Ex: .movie Spider-Man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.yts*
 (_Searching YouTube links)_
 - _🌸 Ex: .yts alexa WhatsApp bot_
╰━━━━━━━━━━━━━━━
> ALEXA
`;
      console.log("Response sent successfully");
            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
