const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
  pattern: "alive",
  desc: "about",
  react: "🌸",
  filename: __filename
}, async (message, context, args, options) => {
  try {
    let replyMessage = `
◉┏━┫*⚬Lααɾα-ᴍᴅ-ᴀʟɪᴠᴇ⚬*┣━✾
◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┏┻━━━━━━━━━
┃*ʜɪ Lααɾα-ᴍᴅ ᴀʟɪᴠᴇ ✻*
┗┳━━━━━━━━━
◉┃*ɪᴍ ʟᴀʀᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
◉┃*ꜱɪᴍᴘʟᴇ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ʙᴏᴛ*
◉┃*ꜱᴀᴅᴇᴇꜱʜᴀ ɪꜱ ᴍʏ ᴄʀᴇᴀᴛᴏʀ*
◉┃*ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴛᴏ ᴜꜱᴇ*
◉┃             *.ᴍᴇɴᴜ*
◉┗━━━━━━━━━━━━━━
━━┬┬┬┬┬┬┬┬┬┬┬━━
       *Lααɾα-ᴍᴅ ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏ*
━━┴┴┴┴┴┴┴┴┴┴┴━━
┏━━━━━━━━━━━━━━
❍*ʀᴜɴ ᴛɪᴍᴇ :* ${runtime(process.uptime())}
❍*ʀᴀᴍ ᴜꜱᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem() / 1024 / 1024)}MB
❍*ᴘʟᴀᴛꜰᴏʀᴍ :* ${os.hostname()}
❍*ᴏᴡɴᴇʀ :* ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ
┗━━━━━━━━━━━━━━

*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ*

 *1*  ┃    *ᴍᴇɴᴜ*
 *2*  ┃    *ʟᴀʀᴀ-ᴍᴅ ɢɪᴛ ʀᴇᴘᴏ*

> Lααɾα-ᴍᴅ ✻
`;
    const sentMessage = await message.sendMessage(context.from, {
      image: { url: "https://i.ibb.co/7rzBcxq/20241127-140559.jpg" },
      caption: replyMessage
    }, { quoted: context });

    const responseMessageId = sentMessage.key.id;

    message.ev.on("messages.upsert", async (newMessages) => {
      const newMessage = newMessages.messages[0];
      if (!newMessage.message) return;

      const content = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const chatId = newMessage.key.remoteJid;
      const isReplyToBotMessage = newMessage.message.extendedTextMessage?.contextInfo.stanzaId === responseMessageId;

      if (isReplyToBotMessage) {
        if (content === "1") {
          await message.sendMessage(chatId, {
            image: { url: "https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg" },
            caption: `
┏━┫*⚬Lααɾα-ᴍᴅ-ᴅᴏᴡɴ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.song*
 (_Download YouTube songs_)
- _🌸 Ex: .song example_
╰━━━━━━━━━━━━━━━
...
            `
          }, { quoted: newMessage });
        } else if (content === "2") {
          await message.sendMessage(chatId, {
            image: { url: "https://i.ibb.co/GQ6JdpF/20241127-133421.jpg" },
            caption: `
┏━┫*⚬Lααɾα-ᴍᴅ-ʀᴇᴘᴏ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
*Git Repo:* https://github.com/sadiyamin/Lara-MD
...
            `
          });
        }
      }
    });
  } catch (error) {
    console.error("Error in alive command:", error);
  }
});
