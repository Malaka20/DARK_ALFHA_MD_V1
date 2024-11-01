const { cmd, commands } = require('../command'); // Using actual paths and variables

cmd({
  pattern: 'fb',
  react: '🔃',
  desc: 'download facebook video',
  category: 'download',
  filename: __filename
}, async (context, reply, msg, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins }) => {
  try {
    if (!q) return reply('please give me a valid URL ❗');
    if (!q.includes('facebook.com')) return reply("That's not a Facebook URL ❕");

    const response = await fetch(`https://api.apify.com/v2/acts/pocesar~download-youtube-video/runs?token=$API_TOKEN`);
    const data = await response.json();
    const sdVideo = data.data.sd;
    const hdVideo = data.data.hd;

    await reply('*🌸DOWNLOADING· · ·🌸*\n> ALEXA-MD');
    await context.sendMessage(from, { video: { url: sdVideo }, caption: '🌸 SD QUALITY 🌸\n > ALEXA-MD', mimetype: 'video/mp4' }, { quoted });
    await context.sendMessage(from, { video: { url: hdVideo }, caption: '🌸 HD QUALITY 🌸\n > ALEXA-MD', mimetype: 'video/mp4' }, { quoted });
}catch(e){
console.log(e)
reply(`${e}`)
}
})

