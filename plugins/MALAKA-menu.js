const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
  pattern: "menu",
  desc: "Commands panel",
  react: '📜',
  filename: __filename
}, async (bot, message, args, options) => {
  const { from, quoted, body, reply } = options;

  try {
    // Menu Text
    const menuText = `
╒✦•··············•••••••••··············•✦
│ *Creator* : Sadeesha Tharumin
│ *Version* : v2.0.0
│ *Uptime*  : ${runtime(process.uptime())}
│ *RAM Usage* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
│ *Host Name* : ${require('os').hostname()}
╘✦•··············•••••••••··············•✦
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
╭────────────●●►
│⛵ *LIST MENU*
│   ───────
│ _1_ *❂ᴅᴏᴡɴʟᴏᴀᴅ menu❂*
│ _2_ *❂ᴍᴀɪɴ menu❂*
│ _3_ *AI menu*
│ _4_ *❂ᴍᴀɪɴ menu❂*
│ _5_ *❂ᴏᴡɴᴇʀ menu❂*
│ _6_ *❂ᴄᴏɴᴠᴇʀᴛ menu❂*
│ _7_ *❂sᴇᴀʀᴄʜ menu❂*
╰─────────────●●►
*🌟 Reply the Number you want to select*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ 👧🏻
`;

    // Send Menu Message
    const sentMenuMessage = await bot.sendMessage(from, {
      image: { url: "https://i.ibb.co/QNwLWTN/20241201-230018.jpg" },
      caption: menuText
    }, { quoted: message });

    const menuMessageId = sentMenuMessage.key.id;

    // Listen for replies to the menu message
    bot.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToMenu = newMessage.message.extendedTextMessage?.contextInfo.stanzaId === menuMessageId;

      if (isReplyToMenu) {
        let responseText = '';
        switch (userReply) {
          case '1':
            responseText = `
 ♡︎*❂ ᴅᴏᴡɴʟᴏᴀᴅ menu ❂ 📥*♡︎

╭┈───────────────•
│  ✑ *.song*
│  
│ ♡︎_Download YouTube song_♡︎
╰┈───────────────●●►

╭┈───────────────•
│  ✑ *.video*
│       
│ ♡︎_Download YouTube video_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.fb*
│  
│ ♡︎_Download Facebook video_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.tiktok*
│  
│ ♡︎_Download TikTok video without watermark and audio_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.apk*
│  
│ ♡︎_Download APK_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.mfire*
│  
│ ♡︎_Download Mediafire link_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.gdrive*
│
│ ♡︎_Downloading google drive file_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.tg*    
│       
│ ♡︎_Downloading instagrm_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.movie*
│   
│ ♡︎_Downloading sinhala sub movie_♡︎
╰┈───────────────•

╭┈───────────────•
│   ✑ *.xvdl*    
│       
│ ♡︎_Downloading xvideos videos_♡︎
╰┈───────────────•
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ 👧🏻
`;
            break;
          case '2':
            responseText = `
【 *🔎 ALEXA SEARCH COMMANDS 🔎* 】
- .img <query> : Search Google Images
- .githubstalk <username> : Search GitHub profile
- .movie <title> : Search movie details
- .yts <query> : Search YouTube links
`;
            break;
          case '3':
            responseText = `
【 *👯🏻 ALEXA ANIME COMMANDS 👯🏻* 】
- .loli : Random loli image
- .waifu : Random waifu image
- .neko : Random neko image
- .megumin : Random megumin image
- .maid : Random maid image
- .awoo : Random awoo image
`;
            break;
          case '4':
            responseText = `
【 *🧙🏻 ALEXA FUN COMMANDS 🧙🏻* 】
- .hack : Simulate a fun hacking animation
`;
            break;
          case '5':
            responseText = `
【 *🪄 ALEXA CONVERT COMMANDS 🪄* 】
- .sticker / .s : Convert photo to sticker
- .tts <text> : Text-to-speech conversion
`;
            break;
          case '6':
            responseText = `
【 *👾 ALEXA AI COMMANDS 👾* 】
- .ai <query> : Chat with AI
- .gpt <query> : ChatGPT-powered responses
`;
            break;
          case '7':
            responseText = `
【 *🧣 ALEXA GROUP COMMANDS 🧣* 】
- .mute : Close the group
- .unmute : Open the group
- .tagall <text> : Tag all group members
`;
            break;
          case '8':
            responseText = `
【 *🧑🏻‍💻 ALEXA OWNER COMMANDS 🧑🏻‍💻* 】
- .block : Block a user
- .unblock : Unblock a user
- .jid : Get chat JID
- .gjid : Get group JID
- .restart : Restart the bot
`;
            break;
          case '9':
            responseText = `
【 *⚙️ ALEXA SYSTEM COMMANDS ⚙️* 】
- .ping : Test bot speed
- .system : Check bot status
- .owner : Contact bot developer
- .repo : Bot GitHub repository
`;
            break;
          default:
            responseText = "Invalid option! Please reply with a number from 1 to 9.";
        }

        // Send the appropriate response
        await bot.sendMessage(from, { text: responseText }, { quoted: newMessage });
      }
    });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});

cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
───────────────────
_*⚙️ 𝙼𝙰𝙻𝙰𝙺𝙰 𝙱𝚈 𝙳𝙰𝚁𝙺-𝙰𝙻𝙵𝙷𝙰-𝙱𝙾𝚃 ⚙️*_
───────────────────

┌────────────────
│❖ *Uptime:*  ${runtime(process.uptime())}
│❖ *Ram usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│❖ *HostName:* ${os.hostname()}
│❖ *Owner:* 𝘔𝘢𝘭𝘢𝘬𝘢 & 𝘋𝘈𝘙𝘒-𝘈𝘓𝘍𝘏𝘈-𝘔𝘋
└────────────────

> 𝘔𝘢𝘭𝘢𝘬𝘢 ʙʏ 𝘋𝘈𝘙𝘒-𝘈𝘓𝘍𝘏𝘈-𝘔𝘋  
`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd(
  {
    pattern: "restart",
    desc: "Restart the bot",
    category: "owner",
    react: "💢",
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
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
      reply,
    }
  ) => {
    try {
      const { exec } = require("child_process");
      reply("Restarting...");
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Sleep function
      exec("pm2 restart all", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          reply(`Stderr: ${stderr}`);
          return;
        }
        console.log(`Stdout: ${stdout}`);
        reply("Bot restarted successfully.");
      });
    } catch (e) {
      console.error(e);
      reply(`An error occurred: ${e.message}`);
    }
  }
);

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "❤️‍🩹",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : ${ping}ms` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

cmd({
  pattern: "alive",
  desc: 'about',
  react: '🌸',
  filename: __filename
}, async (client, message, options, context) => {
  try {
    const { from, quoted } = context;
    let aliveMessage = `
      ◉┏━┫*⚬Lααɾα-ᴍᴅ-ᴀʟɪᴠᴇ⚬*┣━✾
      ◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
      ┏┻━━━━━━━━━
      ┃*ʜɪ Lααɾα-ᴍᴅ ᴀʟɪᴠᴇ ✻*
      ┗┳━━━━━━━━━
      ◉┃*ɪᴍ ʟᴀʀᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
      ◉┃*ꜱɪᴍᴘᴀʟᴇ ᴊᴀᴠᴀ ꜱᴄʀɪᴘᴛ ʙᴏᴛ*
      ◉┃*ꜱᴀᴅᴇᴇꜱʜᴀ ɪꜱ ᴍʏ ᴄʀᴇᴀᴛᴏʀ*
      ◉┃*ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴛᴏ ᴜꜱᴇ*
      ◉┃             *.ᴍᴇɴᴜ*
      ◉┗━━━━━━━━━━━━━━
      ━━┬┬┬┬┬┬┬┬┬┬┬━━
             *Lααɾα-ᴍᴅ ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏ*
      ━━┴┴┴┴┴┴┴┴┴┴┴━━
      ┏━━━━━━━━━━━━━━
      ❍*ʀᴜɴ ᴛɪᴍᴇ :* ${runtime(process.uptime())}
      ❍*ʀᴀᴍ ᴜꜱᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
      ❍*ᴘʟᴀᴛꜰᴏʀᴍ :* ${os.hostname()}
      ❍*ᴏᴡɴᴇʀ :* ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ
      ┗━━━━━━━━━━━━━━
      
      *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*
      
      *1*  ┃    *ᴍᴇɴᴜ*
      *2*  ┃    *ʟᴀʀᴀ-ᴍᴅ ɢɪᴛ ʀᴇᴘᴏ*
      
      > Lααɾα-ᴍᴅ ✻
    `;

    const sentMessage = await client.sendMessage(from, {
      image: {
        url: "https://i.ibb.co/7rzBcxq/20241127-140559.jpg"
      },
      caption: aliveMessage
    }, { quoted });

    const messageId = sentMessage.key.id;
    
    client.ev.on("messages.upsert", async msgEvent => {
      const newMessage = msgEvent.messages[0];
      if (!newMessage.message) return;

      const messageText = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const remoteJid = newMessage.key.remoteJid;
      const isContextMessage = newMessage.message.extendedTextMessage?.contextInfo.stanzaId === messageId;
      
      if (isContextMessage) {
        if (messageText === '1') {
          await client.sendMessage(remoteJid, {
            image: {
              url: 'https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg'
            },
            caption: "Your menu details here..."
          }, { quoted: newMessage });
        } else if (messageText === '2') {
          await client.sendMessage(remoteJid, {
            image: {
              url: "https://i.ibb.co/GQ6JdpF/20241127-133421.jpg"
            },
            caption: "Your repo details here..."
          }, { quoted: newMessage });
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
});
