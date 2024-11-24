const axios = require('axios');
const fs = require('fs').promises;
const {
  tiktokdl
} = require('tiktokdl');
const path = require("path");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  fetchJson,
  runtime,
  sleep
} = require("../lib/functions");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require('wa-sticker-formatter');
const {
  checkAccess,
  isPremiumUser,
  blacklistedJIDs,
  premiumJIDs,
  dataLoaded
} = require("../DATABASE/accessControl");
const {
  cmd,
  commands
} = require("../command");
const fg = require("api-dylux");
const yts = require("yt-search");
function extractYouTubeId(_0x235ab8) {
  const _0x284b2c = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x336058 = _0x235ab8.match(_0x284b2c);
  return _0x336058 ? _0x336058[0x1] : null;
}
function convertYouTubeLink(_0x50dac1) {
  const _0x30bbf8 = extractYouTubeId(_0x50dac1);
  if (_0x30bbf8) {
    return "https://www.youtube.com/watch?v=${videoId}";
  }
  return _0x50dac1;
}
cmd({
  'pattern': "song2",
  'desc': "To download songs.",
  'react': '🎧',
  'category': 'download',
  'filename': __filename
}, async (_0x371341, _0x1ae007, _0x3f2955, {
  from: _0x2388d7,
  quoted: _0x2aaf17,
  body: _0x2a7879,
  isCmd: _0x2eeb8e,
  command: _0x5ef9bf,
  args: _0x6f113,
  q: _0x2040a3,
  isGroup: _0x502026,
  sender: _0x5ee5e3,
  senderNumber: _0x1ba375,
  botNumber2: _0x5a1370,
  botNumber: _0x3cf4ca,
  pushname: _0xa3eddf,
  isMe: _0x59d991,
  isOwner: _0x1eade9,
  groupMetadata: _0x37e6f7,
  groupName: _0x456b17,
  participants: _0x21a2bd,
  groupAdmins: _0x3bafee,
  isBotAdmins: _0x22b3c,
  isAdmins: _0x18638e,
  reply: _0x46352a
}) => {
  try {
    if (!_0x2040a3) {
      return _0x46352a("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖲𝗈𝗇𝗀 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");
    }
    _0x2040a3 = _0x2040a3;
    const _0x5a941c = await yts(_0x2040a3);
    const _0x662868 = _0x5a941c.videos[0x0];
    const _0x1cecea = _0x662868.url;
    let _0x2027ef = "*乂 SAHAS-MD SONG DOWNLOADER*\n\n*⚙️ 𝖳𝗂𝗍𝗅𝖾* : " + _0x662868.title + "\n*📃 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇* : " + _0x662868.description + "\n*🚀 𝖵𝗂𝖾𝗐𝗌* : " + _0x662868.views + "\n*⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇* : " + _0x662868.timestamp + "\n*📆 𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝖽 𝖮𝗇* : " + _0x662868.ago + "\n*🎬 𝖢𝗁𝖺𝗇𝗇𝖾𝗅* : " + _0x662868.author.name + "\n*🖇️ 𝖴𝗋𝗅* : " + _0x662868.url + "\n\n*乂 REPLY THE DOWNLOAD OPTION*  \n\n*1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾*\n*2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾*\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*";
    const _0x3cf331 = await _0x371341.sendMessage(_0x2388d7, {
      'text': _0x2027ef,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ",
          'newsletterJid': "120363296605464049@newsletter"
        },
        'externalAdReply': {
          'title': "SAHAS-MD Song Downloader",
          'body': _0x662868.title + " : Powerd By SAHAS-MD Song Information Search Engine",
          'thumbnailUrl': _0x662868.thumbnail,
          'sourceUrl': '',
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x1ae007
    });
    const _0x4d06cc = _0x3cf331.key.id;
    _0x371341.ev.on("messages.upsert", async _0x141649 => {
      const _0x3b552d = _0x141649.messages[0x0];
      if (!_0x3b552d.message) {
        return;
      }
      const _0x538481 = _0x3b552d.message.conversation || _0x3b552d.message.extendedTextMessage?.["text"];
      const _0x4cd45d = _0x3b552d.key.remoteJid;
      const _0x3f8cb9 = _0x3b552d.message.extendedTextMessage && _0x3b552d.message.extendedTextMessage.contextInfo.stanzaId === _0x4d06cc;
      if (_0x3f8cb9) {
        await _0x371341.sendMessage(_0x4cd45d, {
          'react': {
            'text': '',
            'key': _0x3b552d.key
          }
        });
        if (_0x538481 === '1' || _0x538481 === '2') {
          const _0x193d0c = await fg.yta(_0x1cecea);
          const _0x32e52a = _0x193d0c.dl_url;
          await _0x371341.sendMessage(_0x4cd45d, {
            'react': {
              'text': '',
              'key': _0x3b552d.key
            }
          });
          if (_0x538481 === '1') {
            await _0x371341.sendMessage(_0x4cd45d, {
              'audio': {
                'url': _0x32e52a
              },
              'mimetype': "audio/mpeg",
              'caption': "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
            }, {
              'quoted': _0x3b552d
            });
          } else if (_0x538481 === '2') {
            await _0x371341.sendMessage(_0x4cd45d, {
              'document': {
                'url': _0x32e52a
              },
              'mimetype': 'audio/mpeg',
              'fileName': "ꜱᴀʜᴀꜱ-ᴍᴅ v1.0.0 | " + _0x662868.title + ".mp3",
              'caption': "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
            }, {
              'quoted': _0x3b552d
            });
          }
          await _0x371341.sendMessage(_0x4cd45d, {
            'react': {
              'text': '',
              'key': _0x3b552d.key
            }
          });
          console.log("Response sent successfully");
        } else {
          await _0x371341.sendMessage(_0x4cd45d, {
            'react': {
              'text': '❓',
              'key': _0x3b552d.key
            }
          });
          _0x46352a("𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 `𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 1 𝖮𝗋 2` ❗");
        }
      }
    });
  } catch (_0x42c753) {
    console.log(_0x42c753);
    _0x46352a("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖲𝗈𝗇𝗀 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");
  }
});
cmd({
  'pattern': 'video',
  'desc': "To download songs.",
  'react': '🎬',
  'category': "download",
  'filename': __filename
}, async (_0x4e1e8f, _0x19d669, _0x2cd333, {
  from: _0x2d442e,
  quoted: _0x403963,
  body: _0x3de9cc,
  isCmd: _0x411703,
  command: _0xa1755f,
  args: _0x257cde,
  q: _0x2dfaff,
  isGroup: _0x34278a,
  sender: _0x51d8e8,
  senderNumber: _0x2c60e7,
  botNumber2: _0x24d6ab,
  botNumber: _0x2167c5,
  pushname: _0x39dfa4,
  isMe: _0x3d432c,
  isOwner: _0x14f375,
  groupMetadata: _0x305b5d,
  groupName: _0x5dcd5c,
  participants: _0x3d5e81,
  groupAdmins: _0x11322e,
  isBotAdmins: _0x43414c,
  isAdmins: _0x19f0fb,
  reply: _0x993a61
}) => {
  try {
    if (!_0x2dfaff) {
      return _0x993a61("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖵𝗂𝖽𝖾𝗈 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");
    }
    _0x2dfaff = _0x2dfaff;
    const _0x46da50 = await yts(_0x2dfaff);
    const _0x19ac83 = _0x46da50.videos[0x0];
    const _0x55031c = _0x19ac83.url;
    let _0x1fd5d0 = "*乂 SAHAS-MD VIDEO DOWNLOADER*\n\n*⚙️ 𝖳𝗂𝗍𝗅𝖾* : " + _0x19ac83.title + "\n*📃 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇* : " + _0x19ac83.description + "\n*🚀 𝖵𝗂𝖾𝗐𝗌* : " + _0x19ac83.views + "\n*⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇* : " + _0x19ac83.timestamp + "\n*📆 𝖴𝗉𝗅𝗈𝖺𝖽𝖾𝖽 𝖮𝗇* : " + _0x19ac83.ago + "\n*🎬 𝖢𝗁𝖺𝗇𝗇𝖾𝗅* : " + _0x19ac83.author.name + "\n*🖇️ 𝖴𝗋𝗅* : " + _0x19ac83.url + "\n\n*乂 REPLY THE DOWNLOAD OPTION*  \n\n*1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾*\n*2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾*\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*";
    const _0x33011b = await _0x4e1e8f.sendMessage(_0x2d442e, {
      'text': _0x1fd5d0,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ",
          'newsletterJid': "120363296605464049@newsletter"
        },
        'externalAdReply': {
          'title': "SAHAS-MD Video Downloader",
          'body': _0x19ac83.title + " : Powerd By SAHAS-MD Song Information Search Engine",
          'thumbnailUrl': _0x19ac83.thumbnail,
          'sourceUrl': '',
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x19d669
    });
    const _0x25d28d = _0x33011b.key.id;
    _0x4e1e8f.ev.on("messages.upsert", async _0x330505 => {
      const _0x382691 = _0x330505.messages[0x0];
      if (!_0x382691.message) {
        return;
      }
      const _0x40b102 = _0x382691.message.conversation || _0x382691.message.extendedTextMessage?.["text"];
      const _0x495156 = _0x382691.key.remoteJid;
      const _0x5d6b85 = _0x382691.message.extendedTextMessage && _0x382691.message.extendedTextMessage.contextInfo.stanzaId === _0x25d28d;
      if (_0x5d6b85) {
        await _0x4e1e8f.sendMessage(_0x495156, {
          'react': {
            'text': '',
            'key': _0x382691.key
          }
        });
        if (_0x40b102 === '1' || _0x40b102 === '2') {
          const _0x515204 = await fg.ytv(_0x55031c);
          const _0x136dba = _0x515204.dl_url;
          await _0x4e1e8f.sendMessage(_0x495156, {
            'react': {
              'text': '',
              'key': _0x382691.key
            }
          });
          if (_0x40b102 === '1') {
            await _0x4e1e8f.sendMessage(_0x495156, {
              'video': {
                'url': _0x136dba
              },
              'mimetype': 'video/mp4',
              'caption': "‎ ‎𝖸 𝖳  𝖲 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 4 8 0 𝗉  )\n                            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
            }, {
              'quoted': _0x382691
            });
          } else if (_0x40b102 === '2') {
            await _0x4e1e8f.sendMessage(_0x495156, {
              'document': {
                'url': _0x136dba
              },
              'mimetype': "video/mp4",
              'fileName': "ꜱᴀʜᴀꜱ-ᴍᴅ V1.0.0 | " + _0x19ac83.title + '.mp4',
              'caption': "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*\n"
            }, {
              'quoted': _0x382691
            });
          }
          await _0x4e1e8f.sendMessage(_0x495156, {
            'react': {
              'text': '',
              'key': _0x382691.key
            }
          });
          console.log("Response sent successfully");
        } else {
          await _0x4e1e8f.sendMessage(_0x495156, {
            'react': {
              'text': '❓',
              'key': _0x382691.key
            }
          });
          _0x993a61("𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 `𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 1 𝖮𝗋 2` ❗");
        }
      }
    });
  } catch (_0x127bed) {
    console.log(_0x127bed);
    _0x993a61("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖵𝗂𝖽𝖾𝗈 𝖳𝖺𝗍𝗂𝗅𝖾 𝖮𝗋 𝖴𝗋𝗅` ❗");
  }
});
async function socialMediaDownload(_0x7781bc) {
  let _0x2a166a;
  if (_0x7781bc.includes('facebook.com') || _0x7781bc.includes("fb.watch")) {
    _0x2a166a = "https://prabath-md-api.up.railway.app/api/fdown?url=" + encodeURIComponent(_0x7781bc);
  } else {
    if (_0x7781bc.includes("mediafire.com")) {
      _0x2a166a = "https://prabath-md-api.up.railway.app/api/mediafiredl?url=" + encodeURIComponent(_0x7781bc);
    } else {
      if (_0x7781bc.includes('twitter.com')) {
        _0x2a166a = "https://prabath-md-api.up.railway.app/api/twitter/dl?url=" + encodeURIComponent(_0x7781bc);
      } else {
        throw new Error("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");
      }
    }
  }
  const _0x1b8e76 = await axios.get(_0x2a166a);
  return _0x1b8e76.data;
}
cmd({
  'pattern': 'fb',
  'alias': ["facebook"],
  'react': '🔎',
  'desc': "Download Facebook videos",
  'category': "download",
  'use': ".fb <facebook link>",
  'filename': __filename
}, async (_0x562dc5, _0x2ce641, _0x123fb7, {
  from: _0x6aac1a,
  quoted: _0xe88898,
  args: _0x4e4fdf,
  q: _0x1672ae,
  isGroup: _0x4f6c2f,
  sender: _0x2e327a,
  pushname: _0x1efbe1,
  reply: _0x36bec0
}) => {
  try {
    const _0x57f5b5 = _0x123fb7.sender;
    const _0x50a720 = _0x123fb7.isGroup || false;
    if (!checkAccess(_0x57f5b5, _0x50a720)) {
      return blacklistedJIDs.includes(_0x57f5b5) ? _0x36bec0("*🚫 You are blacklisted. Access denied.*") : _0x36bec0("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
    }
    if (!_0x1672ae) {
      return await _0x36bec0("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");
    }
    const _0x1eff3a = await socialMediaDownload(_0x1672ae);
    if (_0x1eff3a.status === "success ✅" && _0x1eff3a.data) {
      const {
        hd: _0xe0b7b3,
        sd: _0x31be39,
        audio: _0x36d0cd
      } = _0x1eff3a.data;
      if (_0xe0b7b3 || _0x31be39) {
        const _0x2838f6 = await _0x562dc5.sendMessage(_0x6aac1a, {
          'text': "*乂 SAHAS-MD FB DOWNLOADER*\n\n🎬 𝖳𝖺𝗍𝗂𝗅𝖾 : Undifended\n🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.facebook.com\n\n\n*乂 REPLY THE DOWNLOAD OPTION*\n\n1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖧𝖣 𝖳𝗒𝗉𝖾.\n2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖲𝖣 𝖳𝗒𝗉𝖾.\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*",
          'contextInfo': {
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterName': "👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ",
              'newsletterJid': "120363296605464049@newsletter"
            },
            'externalAdReply': {
              'title': "SAHAS-MD FB Downloader",
              'body': "Undifended : Powerd By SAHAS-MD FB Information Search Engine",
              'thumbnailUrl': "https://pomf2.lain.la/f/9ggi67rj.jpg",
              'sourceUrl': '',
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0x2ce641
        });
        _0x562dc5.ev.on("messages.upsert", async _0x3f6674 => {
          const _0x494748 = _0x3f6674.messages[0x0];
          if (!_0x494748.message || !_0x494748.message.extendedTextMessage) {
            return;
          }
          const _0x1d3157 = _0x494748.message.extendedTextMessage.text.trim();
          const _0x310ca0 = _0x494748.message.extendedTextMessage.contextInfo;
          if (_0x310ca0 && _0x310ca0.stanzaId === _0x2838f6.key.id) {
            if (_0x1d3157 === '1' && _0xe0b7b3) {
              await _0x562dc5.sendMessage(_0x6aac1a, {
                'video': {
                  'url': _0xe0b7b3
                },
                'caption': "‎ ‎𝖥 𝖡  𝖧 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 7 2 0 𝗉 )\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
              }, {
                'quoted': _0x2ce641
              });
            } else if (_0x1d3157 === '2' && _0x31be39) {
              await _0x562dc5.sendMessage(_0x6aac1a, {
                'video': {
                  'url': _0x31be39
                },
                'caption': "‎ ‎𝖥 𝖡  𝖲 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 4 8 0 𝗉 )\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
              }, {
                'quoted': _0x2ce641
              });
            } else {
              _0x36bec0("𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 `1 𝖮𝗋 2` ❗");
            }
          }
        });
      } else {
        _0x36bec0("No Video URL Found in the Response.");
      }
    } else {
      _0x36bec0("Failed to Fetch Video Data.");
    }
  } catch (_0xef41fc) {
    console.error("Detailed Error:", _0xef41fc);
    _0x36bec0("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");
  }
});
cmd({
  'pattern': 'tt',
  'alias': ["tiktok"],
  'react': '🎵',
  'desc': "Download TikTok videos",
  'category': "download",
  'use': ".tt <tiktok link>",
  'filename': __filename
}, async (_0x339116, _0x430ddc, _0xad3106, {
  from: _0x2325c7,
  args: _0x2041aa,
  reply: _0x243d06,
  pushname: _0x1d3b10
}) => {
  try {
    const _0x57d192 = _0xad3106.sender;
    const _0x13770f = _0xad3106.isGroup || false;
    if (!checkAccess(_0x57d192, _0x13770f)) {
      return blacklistedJIDs.includes(_0x57d192) ? _0x243d06("*🚫 You are blacklisted. Access denied.*") : _0x243d06("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
    }
    const _0x15eac1 = _0x2041aa.join(" ");
    if (!_0x15eac1) {
      return await _0x243d06("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖳𝗂𝗄𝗍𝗈𝗄 𝖴𝗋𝗅` ❗");
    }
    const _0x53f0b5 = await _0x339116.sendMessage(_0x2325c7, {
      'text': "*乂 SAHAS-MD TIK TOK DOWNLOADER*\n\n🎬 𝖳𝖺𝗍𝗂𝗅𝖾 : Undifended\n🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.tiktok.com\n\n\n*乂 REPLY THE DOWNLOAD OPTION*\n\n1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖧𝖣 𝖳𝗒𝗉𝖾. ( 𝖶𝗂𝗍𝗁𝗈𝗎𝗍 𝖶𝖺𝗍𝖾𝗋𝗆𝖺𝗋𝗄 )\n2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ",
          'newsletterJid': '120363296605464049@newsletter'
        },
        'externalAdReply': {
          'title': "SAHAS-MD Tik Tok Downloader",
          'body': "Undifended : Powerd By SAHAS-MD Tiktok Information Search Engine",
          'thumbnailUrl': "https://pomf2.lain.la/f/eo16q3mu.png",
          'sourceUrl': '',
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x430ddc
    });
    let _0x25f114 = await tiktokdl(_0x15eac1);
    let {
      video: _0x467b43,
      music: _0x3a43fc
    } = _0x25f114;
    _0x339116.ev.on("messages.upsert", async _0x420ed3 => {
      const _0x176c1d = _0x420ed3.messages[0x0];
      if (!_0x176c1d.message || !_0x176c1d.message.extendedTextMessage) {
        return;
      }
      const _0x480a73 = _0x176c1d.message.extendedTextMessage.text.trim();
      const _0x24bb9f = _0x176c1d.message.extendedTextMessage.contextInfo;
      if (_0x24bb9f && _0x24bb9f.stanzaId === _0x53f0b5.key.id) {
        if (_0x480a73 === '1') {
          await _0x339116.sendMessage(_0x2325c7, {
            'video': {
              'url': _0x467b43
            },
            'caption': "‎ ‎𝖳 𝖨 𝖪 𝖳 𝖮 𝖪  𝖧 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 7 2 0 𝗉  )\n                            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
          }, {
            'quoted': _0x176c1d
          });
        } else if (_0x480a73 === '2') {
          await _0x339116.sendMessage(_0x2325c7, {
            'audio': {
              'url': _0x3a43fc
            },
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0x176c1d
          });
        } else {
          await _0x339116.sendMessage(_0x2325c7, {
            'text': "𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 `1 𝖮𝗋 2` ❗"
          }, {
            'quoted': _0x176c1d
          });
        }
      }
    });
  } catch (_0x550ef9) {
    console.error("Error", _0x550ef9);
    _0x243d06("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖳𝗂𝗄𝗍𝗈𝗄 𝖴𝗋𝗅` ❗");
  }
});
function formatFileSize(_0x437e9c) {
  if (_0x437e9c === 0x0) {
    return "0 Bytes";
  }
  const _0x2b78b5 = ["Bytes", 'KB', 'MB', 'GB', 'TB'];
  const _0x109d21 = Math.floor(Math.log(_0x437e9c) / Math.log(0x400));
  return parseFloat((_0x437e9c / Math.pow(0x400, _0x109d21)).toFixed(0x2)) + " " + _0x2b78b5[_0x109d21];
}
cmd({
  'pattern': "gdrive",
  'alias': ["googledrive"],
  'react': "🎗️",
  'desc': "Download Google Drive files",
  'category': "download",
  'filename': __filename
}, async (_0x3b91d6, _0x2c5b54, _0x7cd7bc, {
  from: _0x144c4e,
  q: _0x5d3ff3,
  pushname: _0x21b85a
}) => {
  if (!_0x5d3ff3 || !_0x5d3ff3.startsWith("https://")) {
    return _0x3b91d6.sendMessage(_0x144c4e, {
      'text': "𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖦𝖽𝗋𝗂𝗏𝖾 𝖴𝗋𝗅` ❗"
    }, {
      'quoted': _0x2c5b54
    });
  }
  try {
    const _0x4af431 = _0x7cd7bc.sender;
    const _0x3c6849 = _0x7cd7bc.isGroup || false;
    if (!checkAccess(_0x4af431, _0x3c6849)) {
      return blacklistedJIDs.includes(_0x4af431) ? reply("*🚫 You are blacklisted. Access denied.*") : reply("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
    }
    const _0x10b818 = await fetchJson("https://prabath-md-api.up.railway.app/api/gdrivedl?url=" + encodeURIComponent(_0x5d3ff3));
    const _0x5bf792 = _0x10b818.data || _0x10b818;
    const _0x479fd5 = _0x5bf792.fileSize || 0x0;
    if (_0x479fd5 > 524288000) {
      await _0x3b91d6.sendMessage(_0x144c4e, {
        'text': "⚠️ The file size is too large. Maximum allowed size is 500 MB. The provided file is " + formatFileSize(_0x479fd5) + '.'
      }, {
        'quoted': _0x2c5b54
      });
      return await _0x3b91d6.sendMessage(_0x144c4e, {
        'react': {
          'text': '⚠️',
          'key': _0x2c5b54.key
        }
      });
    }
    await _0x3b91d6.sendMessage(_0x144c4e, {
      'document': {
        'url': _0x5bf792.download || _0x5bf792.link || _0x5bf792.url
      },
      'fileName': _0x5bf792.fileName || _0x5bf792.title,
      'mimetype': _0x5bf792.mimeType || _0x5bf792.file_type,
      'caption': "> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
    }, {
      'quoted': _0x2c5b54
    });
    await _0x3b91d6.sendMessage(_0x144c4e, {
      'react': {
        'text': '✅',
        'key': _0x2c5b54.key
      }
    });
  } catch (_0x5d3707) {
    console.error("❌ Error in Google Drive downloader:", _0x5d3707);
    const _0x309e85 = _0x5d3707.response && _0x5d3707.response.status === 0x194 ? "❌ Error: The requested file could not be found. Please check the URL and try again." : "❌ An error occurred: " + _0x5d3707.message;
    await _0x3b91d6.sendMessage(_0x144c4e, {
      'text': _0x309e85
    }, {
      'quoted': _0x2c5b54
    });
    await _0x3b91d6.sendMessage(_0x144c4e, {
      'react': {
        'text': '❌',
        'key': _0x2c5b54.key
      }
    });
  }
});
cmd({
  'pattern': 'apkdl',
  'desc': "Fetch APK details and send APK file.",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0x1ad0b1, _0x1d1e64, _0x34b17e, {
  from: _0x11ecd8,
  reply: _0x4c33ff,
  q: _0x55c4fb,
  pushname: _0x24364e
}) => {
  try {
    const _0x38c4e8 = _0x34b17e.sender;
    const _0x523ccd = _0x34b17e.isGroup || false;
    if (!checkAccess(_0x38c4e8, _0x523ccd)) {
      return blacklistedJIDs.includes(_0x38c4e8) ? _0x4c33ff("*🚫 You are blacklisted. Access denied.*") : _0x4c33ff("*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*");
    }
    if (!_0x55c4fb) {
      return _0x4c33ff("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖠𝗉𝗉𝗅𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖭𝖺𝗆𝖾` ❗");
    }
    const _0x12d666 = "https://prabath-md-api.up.railway.app/api/apkdl?q=" + _0x55c4fb + '&apikey=' + "6467ad0b29";
    const _0x59caea = await axios.get(_0x12d666);
    const _0x58258a = _0x59caea.data;
    if (!_0x58258a || !_0x58258a.data) {
      return _0x4c33ff("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖠𝗉𝗉𝗅𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝖭𝖺𝗆𝖾` ❗");
    }
    const _0x38478c = _0x58258a.data;
    const _0x1e4d9b = _0x38478c.icon;
    const _0x17614e = _0x38478c.name;
    const _0x44dcdc = _0x38478c["package"];
    const _0x589239 = _0x38478c.lastup;
    const _0x12a66c = _0x38478c.size;
    const _0x45eaa5 = _0x38478c.dllink;
    await _0x1ad0b1.sendMessage(_0x11ecd8, {
      'image': {
        'url': _0x1e4d9b
      },
      'text': "*乂 SAHAS-MD APK DOWNLOADER*\n\n📁 𝖭𝖺𝗆𝖾 : " + _0x17614e + "\n📻 𝖥𝗂𝗅𝖾 𝖲𝗂𝗓𝖾 : " + _0x12a66c + " MB\n📆 𝖫𝖺𝗌𝗍 𝖴𝗉𝖽𝖺𝗍𝖾 : " + _0x589239 + "\n🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.playstore.com\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*",
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterName': "👾 ＳＡＨＡＳ  |   𝚃𝙴𝙲𝙷 ジ",
          'newsletterJid': '120363296605464049@newsletter'
        },
        'externalAdReply': {
          'title': "SAHAS-MD Application Downloader",
          'body': _0x17614e + " : Powerd By SAHAS-MD Apk Information Search Engine",
          'thumbnailUrl': _0x38478c.icon,
          'sourceUrl': '',
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x1d1e64
    });
    const _0x24f7ad = path.join(__dirname, _0x44dcdc + '.apk');
    const _0x234ae8 = await axios({
      'url': _0x45eaa5,
      'method': "GET",
      'responseType': "stream"
    });
    const _0x1f6519 = fs.createWriteStream(_0x24f7ad);
    _0x234ae8.data.pipe(_0x1f6519);
    _0x1f6519.on('error', _0x472ad8 => {
      console.error("File write error: " + _0x472ad8.message);
      _0x4c33ff("Error: " + _0x472ad8.message);
    });
    await new Promise((_0x10aa91, _0x189f05) => {
      _0x1f6519.on("finish", _0x10aa91);
      _0x1f6519.on("error", _0x189f05);
    });
    await _0x1ad0b1.sendMessage(_0x11ecd8, {
      'document': {
        'url': _0x24f7ad
      },
      'mimetype': 'application/vnd.android.package-archive',
      'fileName': _0x17614e + ".apk",
      'caption': "ꜱᴀʜᴀꜱ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛",
      'footer': "ꜱᴀʜᴀꜱ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛"
    }, {
      'quoted': _0x1d1e64
    });
    fs.unlinkSync(_0x24f7ad);
  } catch (_0x57186a) {
    console.error(_0x57186a);
    _0x4c33ff("Error: " + _0x57186a.message);
  }
});
cmd({
  'pattern': 'twitter',
  'alias': ["twdl"],
  'desc': "download tw videos",
  'category': 'download',
  'react': '🔎',
  'filename': __filename
}, async (_0x364816, _0x45e186, _0x48c8d7, {
  from: _0x4a2289,
  quoted: _0x4c923d,
  body: _0x5b6c20,
  isCmd: _0x4b08fe,
  command: _0x239563,
  args: _0x41aea0,
  q: _0x68062a,
  isGroup: _0x2a286c,
  sender: _0x4639f2,
  senderNumber: _0x19370f,
  botNumber2: _0x52162c,
  botNumber: _0x1ed461,
  pushname: _0x1f9341,
  isMe: _0x53aff1,
  isOwner: _0x14b2d6,
  groupMetadata: _0x2b1e9f,
  groupName: _0x1af4a0,
  participants: _0x4031bb,
  groupAdmins: _0xc67a45,
  isBotAdmins: _0x289af1,
  isAdmins: _0x454953,
  reply: _0x2638d8
}) => {
  try {
    if (!_0x68062a && !_0x68062a.startsWith('https://')) {
      return _0x2638d8("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖳𝗐𝗂𝗍𝗍𝖾𝗋 𝖴𝗋𝗅");
    }
    let _0x36c700 = await fetchJson("https://prabath-md-api.up.railway.app/api/twitterdl?url=" + _0x68062a);
    _0x2638d8("*𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗂𝗇𝗀...*");
    await _0x364816.sendMessage(_0x4a2289, {
      'video': {
        'url': _0x36c700.data.data.HD
      },
      'mimetype': 'video/mp4',
      'caption': "- HD \n\n > *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
    }, {
      'quoted': _0x45e186
    });
    await _0x364816.sendMessage(_0x4a2289, {
      'video': {
        'url': _0x36c700.data.data.SD
      },
      'mimetype': 'video/mp4',
      'caption': "- SD \n\n > *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*"
    }, {
      'quoted': _0x45e186
    });
    await _0x364816.sendMessage(_0x4a2289, {
      'audio': {
        'url': _0x36c700.data.data.audio
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x45e186
    });
  } catch (_0x3d9201) {
    console.log(_0x3d9201);
    _0x2638d8('' + _0x3d9201);
  }
});
