const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');
const apiLink = 'https://dark-yasiya-api-new.vercel.app';

cmd({
  'pattern': 'song',
  'desc': 'Download songs',
  'category': 'audio',
  'react': '🎧',
  'filename': __filename
}, async (_0xeaf511, _0x573124, _0x2c135b, { from: _0x5e067c, reply: _0x51b22b, q: _0x28e446 }) => {
  try {
    if (!_0x28e446) return _0x51b22b('Give me song name or URL!');
    
    const searchResult = await fetchJson(apiLink + '/search/yt?q=' + _0x28e446);
    const songData = searchResult.result.data[0];
    const downloadData = await fetchJson(apiLink + '/download/ytmp3?url=' + songData.url);
    
    let message = `‎‎*乂 DARK_ALFHA_MD SONG DOWNLOADER*\n\n`;
    message += `*⚙️ Title* : ${songData.title}\n`;
    message += `*📃 Description* : ${songData.description}\n`;
    message += `*⏰ Duration* : ${songData.duration}\n`;
    message += `*🚀 Views* : ${songData.views}\n`;
    message += `*📆 Uploaded On* : ${songData.timestamp}\n`;
    message += `*🖇️ Url* : ${songData.url}\n\n`;
    message += `*乂 REPLY THE DOWNLOAD OPTION*\n\n`;
    message += `*1️⃣ Download: Audio Type*\n`;
    message += `*2️⃣ Download: Document Type*\n\n`;
    message += `> *©powered by sahas tech*`;

    const msgId = await _0xeaf511.sendMessage(_0x5e067c, { 'text': message }, { 'quoted': _0x573124 });

    _0xeaf511.ev.on('messages.upsert', async event => {
      const message = event.messages[0];
      const messageText = message.message.text.trim();
      
      if (message.key.id === msgId.key.id) {
        switch (messageText) {
          case '1':
            await _0xeaf511.sendMessage(_0x5e067c, {
              'audio': { 'url': downloadData.result.dl_link },
              'mimetype': 'audio/mpeg'
            }, { 'quoted': _0x573124 });
            break;
          case '2':
            await _0xeaf511.sendMessage(_0x5e067c, {
              'document': { 'url': downloadData.result.dl_link },
              'mimetype': 'audio/mpeg',
              'fileName': songData.title + '.mp3',
              'caption': `${songData.title}\n\n> ©powered by sahas tech`
            }, { 'quoted': _0x573124 });
            break;
          default:
            _0x51b22b('Invalid option. Please select a valid option🔴');
        }
      }
    });
  } catch (error) {
    console.error(error);
    await _0xeaf511.sendMessage(_0x5e067c, { 'react': { 'text': '❌', 'key': _0x573124.key } });
    _0x51b22b('An error occurred while processing your request.');
  }
});
