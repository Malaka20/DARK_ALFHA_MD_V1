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
            break;
          case '3':
            responseMessage = `
【 _*👯🏻ALEXA ANIME COMMANDS👯🏻*_】
╭━━━━━━━━━━━━━━━
         *.loli*
 (_Random loli image)_
 - _🌸 Ex: .loli_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.waifu*
 (_Random waifu image)_
 - _🌸 Ex: .waifu_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.neko*
 (_Random neko image)_
 - _🌸 Ex: .neko_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.megumin*
 (_Random megumin image)_
 - _🌸 Ex: .megumin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.maid*
 (_Random maid image)_
 - _🌸 Ex: .maid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.awoo*
 (_Random awoo image)_
 - _🌸 Ex: .awoo_
╰━━━━━━━━━━━━━━━
> ALEXA
`;
            break;
          case '4':
            responseMessage = `
【 _*🧙🏻ALEXA FUN COMMANDS🧙🏻*_】
╭━━━━━━━━━━━━━━━
         *.hack*
 (_Hack Frank)_
 - _🌸 Ex: .hack_
╰━━━━━━━━━━━━━━━
> ALEXA
`;
            break;
          case '5':
            responseMessage = `
【 _*🪄ALEXA CONVERT COMMANDS🪄*_】
╭━━━━━━━━━━━━━━━
         *.sticker*
         *.s*
 (_Photo to convert sticker)_
 - _🌸 Ex: .sticker <reply to photo or short video>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tts*
 (_Generated AI voice)_
 - _🌸 Ex: .tts Hello World_
╰━━━━━━━━━━━━━━━
> ALEXA
`;
            break;
          case '6':
            responseMessage = `
【 _*🧑🏻‍💻ALEXA OWNER COMMANDS🧑🏻‍💻*_】

╭━━━━━━━━━━━━━━━
         *.block*

 _(Block user)_

- _🌸 Ex :  .block_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ublock*

 _(Unblock user)_

- _🌸 Ex :  .unblock_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.jid*

 _(Send to chat jid)_

- _🌸 Ex :  .jid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gjid*

 _(Send to group jid)_

- _🌸 Ex :  .gjid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting the bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━

> ALEXA
`;
         
         try {
  // Function to send a message based on command
  async function handleCommand(command, message, context) {
    let url = "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg";
    let caption = "";

    switch (command) {
      case '7':
        caption = `
【 _*🧣ALEXA GROUP COMMANDS🧣*_】

╭━━━━━━━━━━━━━━━
         *.mute*

 _(Group close)_

- _🌸 Ex :  .mute
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.unmute*

 _(Group open)_

- _🌸 Ex :  .unmute_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.tagall*

 _(Group tag to all members)_

- _🌸 Ex :  .tagall Hi_
╰━━━━━━━━━━━━━━━

> ALEXA
`;
        break;

      case '8':
        caption = `
【 _*🧑🏻‍💻ALEXA OWNER COMMANDS🧑🏻‍💻*_】

╭━━━━━━━━━━━━━━━
         *.block*

 _(Block user)_

- _🌸 Ex :  .block_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ublock*

 _(Unblock user)_

- _🌸 Ex :  .unblock_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.jid*

 _(Send to chat jid)_

- _🌸 Ex :  .jid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gjid*

 _(Send to group jid)_

- _🌸 Ex :  .gjid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting the bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━

> ALEXA
`;
        break;

      case '9':
        caption = `
【 _*⚙️ALEXA SYSTEM COMMANDS⚙️*_】

╭━━━━━━━━━━━━━━━
         *.ping*

 _(Test bot speed)_

- _🌸 Ex :  .ping
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.system*

 _(Check bot status)_

- _🌸 Ex :  .system_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting alxa bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.owner*

 _(Alexa developer team)_

- _🌸 Ex :  .owner_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.repo*
         *.src*
 _(Alexa bot github repo)_

- _🌸 Ex :  .repo_
╰━━━━━━━━━━━━━━━

> ALEXA
`;
        break;

      default:
        console.log("Unknown command");
        return;
    }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
