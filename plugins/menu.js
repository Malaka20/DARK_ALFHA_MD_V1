const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
  'pattern': "menu",
  'desc': "commands panel",
  'react': '🌸',
  'filename': __filename
}, async (_0x252237, _0x1661fb, _0x3d35aa, {
  from: _0x2be991,
  quoted: _0x194dfd,
  body: _0x327299,
  isCmd: _0xc7fce1,
  command: _0x23a898,
  args: _0x5e8115,
  q: _0x25535b,
  isGroup: _0x2e2124,
  sender: _0x3cf8ca,
  senderNumber: _0x27263c,
  botNumber2: _0x2ac29f,
  botNumber: _0x9a1ae8,
  pushname: _0x1110f8,
  isMe: _0x96b546,
  isOwner: _0x54ee29,
  groupMetadata: _0x2b80f8,
  groupName: _0x5ec77c,
  participants: _0x35bde8,
  groupAdmins: _0x57c6c1,
  isBotAdmins: _0x11b9e7,
  isAdmins: _0x46f803,
  reply: _0x1945bc
}) => {
  try {
    const _0x45b7d3 = "\n╒✦•··············•••••••••··············•··•✦\n│ *ᴄʀᴇᴀᴛᴏʀ* : *Sadeesha Tharumin*\n│ *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*\n│ *ᴜᴘᴛɪᴍᴇ*  :  " + runtime(process.uptime()) + "\n│ *ʀᴀᴍ ᴜꜱᴀɢᴇ*  : " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB\n│ *ʜᴏꜱᴛ ɴᴀᴍᴇ* : " + os.hostname() + "\n╘✦•·············•••••••••··················•✦\n────────────────\n*⫷ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ⫸*\n────────────────\n╭──────────────\n│ *1* _(DOWNLOAD COMMANDS)_\n│ *2* _(SEARCH COMMANDS)_\n│ *3* _(ANIME COMMANDS)_\n│ *4* _(FUN COMMANDS)_\n│ *5* _(CONVERTED COMMANDS)_\n│ *6* _(AI COMMANDS)_\n│ *7* _(GROUP COMMANDS)_\n│ *8* _(OWNER COMMANDS)_\n│ *9* _(SYSTEM COMMANDS)_\n⁠⁠⁠⁠╰─────────────\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n> Aʅҽxα 👧🏻 \n";
    const _0x349ce3 = await _0x252237.sendMessage(_0x2be991, {
      'image': {
        'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
      },
      'caption': _0x45b7d3
    }, {
      'quoted': _0x1661fb
    });
    const _0x601451 = _0x349ce3.key.id;
    _0x252237.ev.on("messages.upsert", async _0x28689d => {
      const _0x386f4e = _0x28689d.messages[0x0];
      if (!_0x386f4e.message) {
        return;
      }
      const _0x5f3725 = _0x386f4e.message.conversation || _0x386f4e.message.extendedTextMessage?.["text"];
      const _0x43e0cb = _0x386f4e.key.remoteJid;
      const _0x5404c7 = _0x386f4e.message.extendedTextMessage && _0x386f4e.message.extendedTextMessage.contextInfo.stanzaId === _0x601451;
      if (_0x5404c7) {
        if (_0x5f3725 === '1') {
          await _0x252237.sendMessage(_0x43e0cb, {
            'image': {
              'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
            },
            'caption': "\n【 _*ALEXA DOWNLOAD COMMANDS 📥*_】\n\n╭━━━━━━━━━━━━━━━\n         *.song*\n (_Downloading you tube song )_\n\n- _🌸 Ex :  .song lelena_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.video*\n (_Downloading you tube video )_\n\n- _🌸 Ex :  .video lelena_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.fb*\n (_Downloading facebook video )_\n\n- _🌸 Ex :  .fb <url>_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.tiktok*\n (_Downloading tiktok no-watermark and audio )_\n\n- _🌸 Ex :  .tiktok <url>_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.apk*\n (_Downloading apk )_\n\n- _🌸 Ex :  .apk whatsapp_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.mfire*\n (_Downloading mediafire )_\n\n- _🌸 Ex :  .mfire <url>_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.xvdl*\n\n (_Downloading xvideos.com video )_\n\n- _🌸 Ex :  .xvdl mia khalifa_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA-MD\n"
          }, {
            'quoted': _0x386f4e
          });
        } else {
          if (_0x5f3725 === '2') {
            await _0x252237.sendMessage(_0x43e0cb, {
              'image': {
                'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
              },
              'caption': "\n【 _*🔎ALEXA SEARCH COMMANDS🔎*_】\n\n╭━━━━━━━━━━━━━━━\n         *.song*\n\n (_Searching to google image)_\n\n- _🌸 Ex :  .img cars_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.githubstalk*\n\n (_Searching to github profile)_\n\n- _🌸 Ex :  .githubstalk sadiyamin_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.song*\n\n (_Searching to google image)_\n\n- _🌸 Ex :  .img cars_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.movie*\n\n (_Searching to movie details)_\n\n- _🌸 Ex :  .movie spider man_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.yts*\n\n (_Searching to you tube links)_\n\n- _🌸 Ex :  .yts alexa whatsapp bot_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
            }, {
              'quoted': _0x386f4e
            });
          } else {
            if (_0x5f3725 === '3') {
              await _0x252237.sendMessage(_0x43e0cb, {
                'image': {
                  'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
                },
                'caption': "\n【 _*👯🏻ALEXA ANIME COMMANDS👯🏻*_】\n\n╭━━━━━━━━━━━━━━━\n         *.loli*\n\n (_Random loli image_)\n\n- _🌸 Ex :  .loli_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.waifu*\n\n (_Random waifu image_)\n\n- _🌸 Ex :  .waifu_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.neko*\n\n (_Random neko image_)\n\n- _🌸 Ex :  .neko_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.megumin*\n\n (_Random megumin image_)\n\n- _🌸 Ex :  .megumin_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.maid*\n\n (_Random maid image_)\n\n- _🌸 Ex :  .maid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.awoo*\n\n (_Random awoo image_)\n\n- _🌸 Ex :  .awoo_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
              }, {
                'quoted': _0x386f4e
              });
            } else {
              if (_0x5f3725 === '4') {
                await _0x252237.sendMessage(_0x43e0cb, {
                  'image': {
                    'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
                  },
                  'caption': "\n【 _*🧙🏻ALEXA FUN COMMANDS🧙🏻*_】\n\n╭━━━━━━━━━━━━━━━\n         *.hack*\n\n _(Hack Frank)_\n\n- _🌸 Ex :  .hack_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
                }, {
                  'quoted': _0x386f4e
                });
              } else {
                if (_0x5f3725 === '5') {
                  await _0x252237.sendMessage(_0x43e0cb, {
                    'image': {
                      'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
                    },
                    'caption': "\n【 _*🪄ALEXA CONVERT COMMANDS🪄*_】\n\n╭━━━━━━━━━━━━━━━\n         *.sticker*\n         *.s*\n\n _(Photo to convert sticker)_\n\n- _🌸 Ex :  .sticker <reply to photo or short video_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.tts*\n\n _(Generated ai voice)_\n\n- _🌸 Ex :  .tts Hello World_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
                  }, {
                    'quoted': _0x386f4e
                  });
                } else {
                  if (_0x5f3725 === '6') {
                    await _0x252237.sendMessage(_0x43e0cb, {
                      'image': {
                        'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
                      },
                      'caption': "\n【 _*👾ALEXA AI COMMANDS👾*_】\n\n╭━━━━━━━━━━━━━━━\n         *.ai*\n\n _(Chat with ai)_\n\n- _🌸 Ex :  .ai how are you_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gpt*\n\n _(Chat gpt)_\n\n- _🌸 Ex :  .gpt what's node.js_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
                    }, {
                      'quoted': _0x386f4e
                    });
                  } else {
                    if (_0x5f3725 === '7') {
                      await _0x252237.sendMessage(_0x43e0cb, {
                        'image': {
                          'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
                        },
                        'caption': "\n【 _*🧣ALEXA GROUP COMMANDS🧣*_】\n\n╭━━━━━━━━━━━━━━━\n         *.mute*\n\n _(Group close)_\n\n- _🌸 Ex :  .mute\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.unmute*\n\n _(Group open)_\n\n- _🌸 Ex :  .unmute_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.tagall*\n\n _(Group tag to all members)_\n\n- _🌸 Ex :  .tagall Hi_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
                      }, {
                        'quoted': _0x386f4e
                      });
                    } else {
                      if (_0x5f3725 === '8') {
                        await _0x252237.sendMessage(_0x43e0cb, {
                          'image': {
                            'url': 'https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg'
                          },
                          'caption': "\n【 _*🧑🏻‍💻ALEXA OWNER COMMANDS🧑🏻‍💻*_】\n\n╭━━━━━━━━━━━━━━━\n         *.block*\n\n _(Block user)_\n\n- _🌸 Ex :  .block_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.ublock*\n\n _(Unblock user)_\n\n- _🌸 Ex :  .unblock_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.jid*\n\n _(Send to chat jid)_\n\n- _🌸 Ex :  .jid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.gjid*\n\n _(Send to group jid)_\n\n- _🌸 Ex :  .gjid_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.restart*\n\n _(Restarting the bot)_\n\n- _🌸 Ex :  .restart_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
                        }, {
                          'quoted': _0x386f4e
                        });
                      } else if (_0x5f3725 === '9') {
                        await _0x252237.sendMessage(_0x43e0cb, {
                          'image': {
                            'url': "https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg"
                          },
                          'caption': "\n【 _*⚙️ALEXA SYSTEM COMMANDS⚙️*_】\n\n╭━━━━━━━━━━━━━━━\n         *.ping*\n\n _(Test bot speed)_\n\n- _🌸 Ex :  .ping\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.system*\n\n _(Check bot status)_\n\n- _🌸 Ex :  .system_\n╰━━━━━━━━━━━━━━━\n\n╭━━━━━━━━━━━━━━━\n         *.restart*\n\n _(Restarting alxa bot)_\n\n- _🌸 Ex :  .restart_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.owner*\n\n _(Alexa developer team)_\n\n- _🌸 Ex :  .owner_\n╰━━━━━━━━━━━━━━━\n╭━━━━━━━━━━━━━━━\n         *.repo*\n         *.src*\n _(Alexa bot github repo)_\n\n- _🌸 Ex :  .repo_\n╰━━━━━━━━━━━━━━━\n\n> ALEXA\n"
                        }, {
                          'quoted': _0x386f4e
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x44904d) {
    console.log(_0x44904d);
    _0x1945bc('' + _0x44904d);
  }
});
