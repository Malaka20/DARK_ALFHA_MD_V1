const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const axios = require('axios');
async function dlyta(_0x465252) {
  try {
    for (let _0x17c02 = 0x0; _0x17c02 < 0xa; _0x17c02++) {
      const _0x3d3a92 = await fetch("https://api-pink-venom.vercel.app/api/ytdl?url=" + _0x465252);
      const _0x18f84d = await _0x3d3a92.json();
      if (_0x18f84d.result.download_url) {
        return {
          'status': true,
          'dl_link': _0x18f84d.result.download_url
        };
      }
      ;
    }
    await new Promise(_0x1f796d => setTimeout(_0x1f796d, 0xfa0));
    return {
      'status': false,
      'msg': "error"
    };
  } catch (_0x2d99bf) {
    console.error(_0x2d99bf);
    return {
      'status': false,
      'msg': _0x2d99bf.message
    };
  }
}
async function ytmp4(_0x38f2d0, _0x37febb) {
  try {
    if (!_0x38f2d0 || !_0x37febb) {
      throw new Error("url and format parameters are required.");
    }
    const _0xddc26c = parseInt(_0x37febb.replace('p', ''), 0xa);
    const _0x465a10 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0xddc26c,
      'url': _0x38f2d0
    };
    const _0x22c766 = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': 'https://loader.to',
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x517a10 = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0x465a10,
      'headers': _0x22c766
    });
    const _0x81a9c7 = _0x517a10.data.id;
    const _0x52e7d4 = async () => {
      const _0x2d9332 = {
        'id': _0x81a9c7
      };
      try {
        const _0x58fe8c = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x2d9332,
          'headers': _0x22c766
        });
        const {
          progress: _0x2f50d4,
          download_url: _0x5baf10,
          text: _0x388032
        } = _0x58fe8c.data;
        return _0x388032 === 'Finished' ? _0x5baf10 : (await new Promise(_0x15ef8b => setTimeout(_0x15ef8b, 0x3e8)), _0x52e7d4());
      } catch (_0x1afa0e) {
        throw new Error("Error in progress check: " + _0x1afa0e.message);
      }
    };
    return await _0x52e7d4();
  } catch (_0x174ca8) {}
}
module.exports = {
  'dlyta': dlyta,
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x28fee7) {
  const _0x2a3ebb = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x275f6e = _0x28fee7.match(_0x2a3ebb);
  return _0x275f6e ? _0x275f6e[0x1] : null;
}
function convertYouTubeLink(_0x24246c) {
  const _0x3d7feb = extractYouTubeId(_0x24246c);
  if (_0x3d7feb) {
    return "https://www.youtube.com/watch?v=" + _0x3d7feb;
  }
  return _0x24246c;
}
cmd({
  'pattern': "song",
  'alias': "play",
  'desc': "To download songs.",
  'react': '🎵',
  'category': 'download',
  'filename': __filename
}, async (_0x59dad9, _0x51ee69, _0x43ab1a, {
  from: _0x53b0a3,
  quoted: _0x46e221,
  body: _0x14ecd4,
  isCmd: _0x411b52,
  command: _0x4c4082,
  args: _0x5767b4,
  q: _0x1c806a,
  isGroup: _0x131bca,
  sender: _0x3e4d24,
  senderNumber: _0xd4a342,
  botNumber2: _0x7db29f,
  botNumber: _0x2903be,
  pushname: _0x9097e4,
  isMe: _0x504171,
  isOwner: _0x1b3bda,
  groupMetadata: _0x516921,
  groupName: _0x304995,
  participants: _0x118f30,
  groupAdmins: _0x7ef745,
  isBotAdmins: _0x36cff5,
  isAdmins: _0x37bef4,
  reply: _0xc6cd15
}) => {
  try {
    if (!_0x1c806a) {
      return _0xc6cd15("Please give me a URL or title.");
    }
    _0x1c806a = convertYouTubeLink(_0x1c806a);
    const _0x5bc20f = await yts(_0x1c806a);
    const _0x7a5448 = _0x5bc20f.videos[0x0];
    const _0x22edaa = _0x7a5448.url;
    let _0x14110d = "\n*╭─────────────────*\n│*⇩Aʅҽxα SONG DOWNLOADING⇩*\n*⁠⁠⁠⁠╰─────────────────*\n*──────────────────*\n❍ *Title:* " + _0x7a5448.title + " \n❍ *Duration:* " + _0x7a5448.timestamp + " \n❍ *Views:* " + _0x7a5448.views + " \n❍ *Uploaded On:* " + _0x7a5448.ago + " \n❍ *Link:* " + _0x7a5448.url + "\n*──────────────────*\n╭──────────────────\n│ *⫷ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ⫸*\n│\n│ *1*    _(ᴀᴜᴅɪᴏ)_\n│ *2*    _(ᴅᴏᴄᴜᴍᴇɴᴛ)_\n⁠⁠⁠⁠╰──────────────────\n\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n> Aʅҽxα 👧🏻    \n";
    const _0x135377 = await _0x59dad9.sendMessage(_0x53b0a3, {
      'image': {
        'url': _0x7a5448.thumbnail
      },
      'caption': _0x14110d
    });
    const _0x116257 = _0x135377.key.id;
    _0x59dad9.ev.on("messages.upsert", async _0x1d2659 => {
      const _0x56d9f6 = _0x1d2659.messages[0x0];
      if (!_0x56d9f6.message) {
        return;
      }
      const _0x205ed2 = _0x56d9f6.message.conversation || _0x56d9f6.message.extendedTextMessage?.["text"];
      const _0x3a9fe1 = _0x56d9f6.key.remoteJid;
      const _0x4a5d34 = _0x56d9f6.message.extendedTextMessage && _0x56d9f6.message.extendedTextMessage.contextInfo.stanzaId === _0x116257;
      if (_0x4a5d34) {
        await _0x59dad9.sendMessage(_0x3a9fe1, {
          'react': {
            'text': '⬇️',
            'key': _0x56d9f6.key
          }
        });
        const _0x4954a2 = await dlyta('' + _0x22edaa);
        const _0x30eba2 = _0x4954a2.dl_link;
        await _0x59dad9.sendMessage(_0x3a9fe1, {
          'react': {
            'text': '⬆️',
            'key': _0x56d9f6.key
          }
        });
        if (_0x205ed2 === '1') {
          await _0x59dad9.sendMessage(_0x3a9fe1, {
            'audio': {
              'url': _0x30eba2
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': _0x7a5448.title,
                'body': _0x7a5448.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0x7a5448.url,
                'thumbnailUrl': _0x7a5448.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x56d9f6
          });
          await _0x59dad9.sendMessage(_0x3a9fe1, {
            'react': {
              'text': '✅',
              'key': _0x56d9f6.key
            }
          });
        } else if (_0x205ed2 === '2') {
          await _0x59dad9.sendMessage(_0x3a9fe1, {
            'document': {
              'url': _0x30eba2
            },
            'mimetype': 'audio/mp3',
            'fileName': _0x7a5448.title + ".mp3",
            'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n "
          }, {
            'quoted': _0x56d9f6
          });
          await _0x59dad9.sendMessage(_0x3a9fe1, {
            'react': {
              'text': '✅',
              'key': _0x56d9f6.key
            }
          });
        }
      }
    });
  } catch (_0xada7b2) {
    console.log(_0xada7b2);
    _0xc6cd15('' + _0xada7b2);
  }
});
cmd({
  'pattern': 'video',
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x500f25, _0x1dd8fb, _0x31a051, {
  from: _0x300abc,
  quoted: _0x496bb2,
  body: _0x4039f4,
  isCmd: _0x54c2a2,
  command: _0x531b69,
  args: _0x38f4f1,
  q: _0x4396fc,
  isGroup: _0x3b2170,
  sender: _0x5ca060,
  senderNumber: _0x314ed3,
  botNumber2: _0x44e180,
  botNumber: _0x2b99ac,
  pushname: _0x21ed0b,
  isMe: _0x5c2f13,
  isOwner: _0x5efc83,
  groupMetadata: _0xe58a90,
  groupName: _0x3987ca,
  participants: _0x1d9be5,
  groupAdmins: _0x2ac763,
  isBotAdmins: _0x47ccc3,
  isAdmins: _0x58ede4,
  reply: _0xd9dc6f
}) => {
  try {
    if (!_0x4396fc) {
      return _0xd9dc6f("Please give me a URL or title.");
    }
    _0x4396fc = convertYouTubeLink(_0x4396fc);
    const _0x31277c = await yts(_0x4396fc);
    const _0x393b6e = _0x31277c.videos[0x0];
    const _0x3074df = _0x393b6e.url;
    let _0x5a576a = "\n*╭─────────────────*\n│*⟱Aʅҽxα VIDEO DOWNLOADING⟱*\n*⁠⁠⁠⁠╰─────────────────*\n*──────────────────*\n❍ *Title:* " + _0x393b6e.title + " \n❍ *Duration:* " + _0x393b6e.timestamp + " \n❍ *Views:* " + _0x393b6e.views + " \n❍ *Uploaded On:* " + _0x393b6e.ago + " \n❍ *Link:* " + _0x393b6e.url + "\n*──────────────────*\n╭──────────────────\n│ *⫷ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ⫸*\n│\n│ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴠɪᴅᴇᴏ ꜰɪʟᴇ ❃\n│ _1.1 (360ᴘ)_\n│ _1.2 (480ᴘ)_\n│ _1.3 (720ᴘ)_\n│ _1.4 (1080ᴘ)_\n│ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴅᴏᴄᴜᴍᴇɴᴛ ❃\n│ _2.1 (360ᴘ)_\n│ _2.2 (480ᴘ)_\n│ _2.3 (720ᴘ)_\n│ _2.4 (1080ᴘ)_\n⁠⁠⁠⁠╰──────────────────\n\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n> Aʅҽxα 👧🏻\n";
    const _0x4d2591 = await _0x500f25.sendMessage(_0x300abc, {
      'image': {
        'url': _0x393b6e.thumbnail
      },
      'caption': _0x5a576a
    });
    const _0x55586c = _0x4d2591.key.id;
    _0x500f25.ev.on("messages.upsert", async _0x3354b6 => {
      const _0x4693cd = _0x3354b6.messages[0x0];
      if (!_0x4693cd.message) {
        return;
      }
      const _0x10401d = _0x4693cd.message.conversation || _0x4693cd.message.extendedTextMessage?.["text"];
      const _0x3667d1 = _0x4693cd.key.remoteJid;
      const _0x56dcf7 = _0x4693cd.message.extendedTextMessage && _0x4693cd.message.extendedTextMessage.contextInfo.stanzaId === _0x55586c;
      if (_0x56dcf7) {
        await _0x500f25.sendMessage(_0x3667d1, {
          'react': {
            'text': '⬇️',
            'key': _0x4693cd.key
          }
        });
        if (_0x10401d === "1.1") {
          const _0x544a4e = await ytmp4('' + _0x3074df, "360p");
          await _0x500f25.sendMessage(_0x3667d1, {
            'react': {
              'text': '⬆️',
              'key': _0x4693cd.key
            }
          });
          await _0x500f25.sendMessage(_0x3667d1, {
            'video': {
              'url': _0x544a4e
            },
            'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
          }, {
            'quoted': _0x4693cd
          });
          await _0x500f25.sendMessage(_0x3667d1, {
            'react': {
              'text': '✅',
              'key': _0x4693cd.key
            }
          });
        } else {
          if (_0x10401d === "1.2") {
            const _0x2bf024 = await ytmp4('' + _0x3074df, "480");
            await _0x500f25.sendMessage(_0x3667d1, {
              'react': {
                'text': '⬆️',
                'key': _0x4693cd.key
              }
            });
            await _0x500f25.sendMessage(_0x3667d1, {
              'video': {
                'url': _0x2bf024
              },
              'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
            }, {
              'quoted': _0x4693cd
            });
            await _0x500f25.sendMessage(_0x3667d1, {
              'react': {
                'text': '✅',
                'key': _0x4693cd.key
              }
            });
          } else {
            if (_0x10401d === "1.3") {
              const _0xe07896 = await ytmp4('' + _0x3074df, "720");
              await _0x500f25.sendMessage(_0x3667d1, {
                'react': {
                  'text': '⬆️',
                  'key': _0x4693cd.key
                }
              });
              await _0x500f25.sendMessage(_0x3667d1, {
                'video': {
                  'url': _0xe07896
                },
                'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
              }, {
                'quoted': _0x4693cd
              });
              await _0x500f25.sendMessage(_0x3667d1, {
                'react': {
                  'text': '✅',
                  'key': _0x4693cd.key
                }
              });
            } else {
              if (_0x10401d === "1.4") {
                const _0x1fa6ce = await ytmp4('' + _0x3074df, '1080');
                await _0x500f25.sendMessage(_0x3667d1, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x4693cd.key
                  }
                });
                await _0x500f25.sendMessage(_0x3667d1, {
                  'video': {
                    'url': _0x1fa6ce
                  },
                  'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
                }, {
                  'quoted': _0x4693cd
                });
                await _0x500f25.sendMessage(_0x3667d1, {
                  'react': {
                    'text': '✅',
                    'key': _0x4693cd.key
                  }
                });
              } else {
                if (_0x10401d === "2.1") {
                  const _0x22038e = await ytmp4('' + _0x3074df, "360");
                  await _0x500f25.sendMessage(_0x3667d1, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x4693cd.key
                    }
                  });
                  await _0x500f25.sendMessage(_0x3667d1, {
                    'document': {
                      'url': _0x22038e
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x393b6e.title + ".mp4",
                    'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
                  }, {
                    'quoted': _0x4693cd
                  });
                  await _0x500f25.sendMessage(_0x3667d1, {
                    'react': {
                      'text': '✅',
                      'key': _0x4693cd.key
                    }
                  });
                } else {
                  if (_0x10401d === "2.2") {
                    const _0x4a60a1 = await ytmp4('' + _0x3074df, "480");
                    await _0x500f25.sendMessage(_0x3667d1, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x4693cd.key
                      }
                    });
                    await _0x500f25.sendMessage(_0x3667d1, {
                      'document': {
                        'url': _0x4a60a1
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x393b6e.title + ".mp4",
                      'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
                    }, {
                      'quoted': _0x4693cd
                    });
                    await _0x500f25.sendMessage(_0x3667d1, {
                      'react': {
                        'text': '✅',
                        'key': _0x4693cd.key
                      }
                    });
                  } else {
                    if (_0x10401d === "2.3") {
                      const _0x58ba4f = await ytmp4('' + _0x3074df, '720');
                      await _0x500f25.sendMessage(_0x3667d1, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x4693cd.key
                        }
                      });
                      await _0x500f25.sendMessage(_0x3667d1, {
                        'document': {
                          'url': _0x58ba4f
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0x393b6e.title + '.mp4',
                        'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
                      }, {
                        'quoted': _0x4693cd
                      });
                      await _0x500f25.sendMessage(_0x3667d1, {
                        'react': {
                          'text': '✅',
                          'key': _0x4693cd.key
                        }
                      });
                    } else {
                      if (_0x10401d === "2.4") {
                        const _0x4effbb = await ytmp4('' + _0x3074df, "1080");
                        await _0x500f25.sendMessage(_0x3667d1, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x4693cd.key
                          }
                        });
                        await _0x500f25.sendMessage(_0x3667d1, {
                          'document': {
                            'url': _0x4effbb
                          },
                          'mimetype': "video/mp4",
                          'fileName': _0x393b6e.title + ".mp4",
                          'caption': "\n*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*\n"
                        }, {
                          'quoted': _0x4693cd
                        });
                        await _0x500f25.sendMessage(_0x3667d1, {
                          'react': {
                            'text': '✅',
                            'key': _0x4693cd.key
                          }
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
  } catch (_0x2c27dd) {
    console.log(_0x2c27dd);
    _0xd9dc6f('' + _0x2c27dd);
  }
});
cmd({
  'pattern': "yta",
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x266399, _0x599584, _0xe4f2c5, {
  from: _0xf08ebd,
  q: _0x1442b5,
  reply: _0x337a1e
}) => {
  try {
    if (!_0x1442b5) {
      return await _0x337a1e("*Need a YouTube URL!*");
    }
    const _0x533188 = await dlyta(_0x1442b5);
    await _0x266399.sendMessage(_0xf08ebd, {
      'audio': {
        'url': _0x533188.dl_link
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x599584
    });
  } catch (_0x1d9362) {
    console.log("First attempt failed:", _0x1d9362);
    try {
      const _0x2d1d44 = await dlyta(_0x1442b5);
      await _0x266399.sendMessage(_0xf08ebd, {
        'audio': {
          'url': _0x2d1d44.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x599584
      });
    } catch (_0x197465) {
      console.log("Second attempt failed:", _0x197465);
      await _0x337a1e("*Failed to process the request. Please try again later!*");
    }
  }
});
