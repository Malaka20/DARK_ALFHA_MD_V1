const { fetchJson } = require("../lib/functions");
const { downloadTiktok } = require('@mrnima/tiktok-downloader');
const { facebook } = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require('axios');
const { cmd, commands } = require("../command");


cmd({
  pattern: "tiktok1",
  alias: ['tt1'],
  react: '🎥',
  desc: "download TikTok videos",
  category: "download",
  filename: __filename
}, async (botInstance, msgEvent, msgOptions, {
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
  reply
}) => {
  try {
    // Validate the provided URL
    if (!q || !q.startsWith("https://")) {
      return reply("*`Need a valid URL`*");
    }

    // React to the message indicating download in progress
    msgOptions.react('⬇️');

    // Download TikTok video
    let tiktokData = await downloadTiktok(q);

    // Prepare response message with options for the user to choose download quality
    let responseMessage = `
┏━┫*⚬Lααɾα-ᴍᴅ-ᴛɪᴋᴛᴏᴋ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
*ᴛɪᴛʟᴇ*:  ${tiktokData.result.title}

*🔢 Reply with the number below*

*VIDEO FILE* 🎬
*1*     ┃  *SD Quality*
*2*     ┃  *HD Quality*

*AUDIO FILE* 🎧
*3*     ┃  *Audio*

> Lααɾα-ᴍᴅ ✻
`;

    // Send response message with the video thumbnail
    const sentMessage = await botInstance.sendMessage(from, {
      image: { url: tiktokData.result.image },
      caption: responseMessage
    });

    const messageID = sentMessage.key.id;

    // Listen for the user's reply to choose the download quality
    botInstance.ev.on("messages.upsert", async (messageEvent) => {
      const newMessage = messageEvent.messages[0];
      if (!newMessage.message) return;

      const userReply = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const chatID = newMessage.key.remoteJid;
      const isReplyToOriginal = newMessage.message.extendedTextMessage && newMessage.message.extendedTextMessage.contextInfo.stanzaId === messageID;

      if (isReplyToOriginal) {
        // React to the user's reply
        await botInstance.sendMessage(chatID, {
          react: { text: '⬇️', key: newMessage.key }
        });

        let downloadLinks = tiktokData.result;

        // Send the appropriate file based on user's reply
        if (userReply === '1') {
          await botInstance.sendMessage(chatID, {
            video: { url: downloadLinks.dl_link.download_mp4_1 },
            caption: "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*"
          }, { quoted: newMessage });
        } else if (userReply === '2') {
          await botInstance.sendMessage(chatID, {
            video: { url: downloadLinks.dl_link.download_mp4_2 },
            caption: "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*"
          }, { quoted: newMessage });
        } else if (userReply === '3') {
          await botInstance.sendMessage(chatID, {
            audio: { url: downloadLinks.dl_link.download_mp3 },
            mimetype: "audio/mpeg"
          }, { quoted: newMessage });
        }

        // React to indicate the file has been sent
        await botInstance.sendMessage(chatID, {
          react: { text: '⬆️', key: newMessage.key }
        });
      }
    });
  } catch (error) {
    console.log(error);
    reply('' + error);
  }
});
