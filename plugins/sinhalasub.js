const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
const axios = require("axios");
cmd({
  'pattern': "movie2",
  'react': '🔎',
  'category': "movie",
  'desc': "Moive downloader",
  'filename': __filename
}, async (_0xbab43e, _0x14a5c7, _0x50de12, {
  from: _0x226f42,
  q: _0x5a8ba0,
  prefix: _0x4911e8,
  isMe: _0x3f3496,
  reply: _0x1ce75c
}) => {
  try {
    if (!_0x5a8ba0) {
      return await _0x1ce75c("*please give me text !..*");
    }
    let _0x5554a5 = await fetchJson("https://rest-api-dark-shan.vercel.app/download/cinesubz-search?q=" + _0x5a8ba0);
    if (_0x5554a5.length < 0x1) {
      return await _0xbab43e.sendMessage(_0x226f42, {
        'text': "erro !"
      }, {
        'quoted': _0x50de12
      });
    }
    var _0x248ede = [];
    _0x5554a5.data.map(_0x377ecf => {
      _0x248ede.push({
        'buttonId': _0x4911e8 + ("cinedl " + _0x377ecf.link),
        'buttonText': {
          'displayText': '' + _0x377ecf.title
        },
        'type': 0x1
      });
    });
    const _0x2c7c29 = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*🎥 DARK SHUTER MOVIE SEARCH 🎥*",
      'footer': config.FOOTER,
      'buttons': _0x248ede,
      'headerType': 0x4
    };
    return await _0xbab43e.buttonMessage(_0x226f42, _0x2c7c29, _0x50de12);
  } catch (_0x488530) {
    console.log(_0x488530);
    await _0xbab43e.sendMessage(_0x226f42, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x50de12
    });
  }
});
cmd({
  'pattern': "cinedl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x4023e4, _0x581b73, _0x4a8bdd, {
  from: _0x4159f1,
  q: _0xb96c6a,
  isMe: _0x5697b5,
  prefix: _0x47f53d,
  reply: _0x52c457
}) => {
  try {
    if (!_0xb96c6a) {
      return await _0x52c457("*please give me text !..*");
    }
    let _0x188cc8 = await fetchJson("https://rest-api-dark-shan.vercel.app/download/cinesubz-dl?q=" + _0xb96c6a);
    let _0x3a4723 = await fetchJson("https://rest-api-dark-shan.vercel.app/download/cinesubz-dl-2?q=" + _0xb96c6a);
    let _0xa05650 = '☘️' + _0x188cc8.data.title + "\n\n📅 𝚁𝚎𝚕𝚎𝚊𝚜𝚎 : " + _0x188cc8.data.date + "\n🌎 𝙲𝚘𝚞𝚗𝚝𝚛𝚢 : " + _0x188cc8.data.country + "\n🕰 𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗 : " + _0x188cc8.data.duration + "\n🏆 IMDB Rating : " + _0x188cc8.data.rating + "\n";
    if (_0x3a4723.length < 0x1) {
      return await _0x4023e4.sendMessage(_0x4159f1, {
        'text': "erro !"
      }, {
        'quoted': _0x4a8bdd
      });
    }
    var _0x10b1ca = [];
    _0x3a4723.data.map(_0x2053ca => {
      _0x10b1ca.push({
        'buttonId': _0x47f53d + ("cdl " + _0x2053ca.alternativeLinks + '&' + _0x188cc8.data.title),
        'buttonText': {
          'displayText': _0x2053ca.size + " - " + _0x2053ca.quality
        },
        'type': 0x1
      }, {
        'buttonId': _0x47f53d + "cdetails " + _0xb96c6a,
        'buttonText': {
          'displayText': "Details send"
        },
        'type': 0x1
      });
    });
    const _0x554f31 = {
      'image': {
        'url': _0x188cc8.data.image
      },
      'caption': _0xa05650,
      'footer': config.FOOTER,
      'buttons': _0x10b1ca,
      'headerType': 0x4
    };
    return await _0x4023e4.buttonMessage(_0x4159f1, _0x554f31, _0x4a8bdd);
  } catch (_0x4d355b) {
    console.log(_0x4d355b);
    await _0x4023e4.sendMessage(_0x4159f1, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x4a8bdd
    });
  }
});
cmd({
  'pattern': "cdl",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4a5096, _0x2aedf2, _0xadcb91, {
  from: _0x3ece3c,
  q: _0x23cb77,
  isMe: _0xcd1b34,
  reply: _0x158a06
}) => {
  if (!_0x23cb77) {
    return await _0x158a06("*Please provide a direct URL!*");
  }
  try {
    const _0x234028 = _0x23cb77.split('&')[0x0];
    const _0xbfa764 = _0x23cb77.split('&')[0x1];
    let _0x5db1cc = await fetchJson('https://rest-api-dark-shan.vercel.app/download/cinesubz-dl-3?q=' + _0x234028);
    const _0x1c76de = '' + _0x5db1cc.data.DIRECT_LINK;
    const _0x5a902a = _0x1c76de.trim();
    const _0x443c22 = await axios.get(_0x5a902a, {
      'responseType': "arraybuffer"
    });
    const _0x2909dd = Buffer.from(_0x443c22.data, "binary");
    const _0x6549a0 = {
      'document': _0x2909dd,
      'caption': "*🎞️ Name :* " + _0xbfa764 + "\n\n*🎥 Size :* " + _0x5db1cc.data.FILE.SIZE + "\n\n*ＤＡＲＫ ＳＨＵＴＥＲ ＭＤ Ｖ2*",
      'mimetype': "video/mp4",
      'fileName': _0xbfa764 + ".mp4"
    };
    await _0x4a5096.sendMessage(config.JID, _0x6549a0);
    await _0x4a5096.sendMessage(_0x3ece3c, {
      'react': {
        'text': '✔️',
        'key': _0x2aedf2.key
      }
    });
  } catch (_0xa61cf1) {
    console.error("Error fetching or sending", _0xa61cf1);
    await _0x4a5096.sendMessage(_0x3ece3c, "*Error fetching or sending *", {
      'quoted': _0x2aedf2
    });
  }
});
cmd({
  'pattern': "cdetails",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0xb874ba, _0x311b31, _0x4dcd84, {
  from: _0x38e667,
  q: _0x522f06,
  isMe: _0x5621d5,
  reply: _0xa1682e
}) => {
  try {
    if (!_0x522f06) {
      return await _0xa1682e("*please give me text !..*");
    }
    let _0x23a219 = await fetchJson("https://rest-api-dark-shan.vercel.app/download/cinesubz-dl?q=" + _0x522f06);
    let _0x5b5099 = "*⦁⦂⦁*━┉┉┉┉┉━━┉━━━┉━⦁⦂⦁*\n\n*☘️ Title :* *" + _0x23a219.data.title + "*\n\n*📅 Release :* *" + _0x23a219.data.date + "*\n\n*🌍 Country :* *" + _0x23a219.data.country + "*\n\n*🕰️ Duration :* *" + _0x23a219.data.duration + "*\n\n*🏆 IMDD Rating :* *" + _0x23a219.data.rating + "*\n\n*🎪 Description :* *" + _0x23a219.data.description + "*\n";
    await _0xb874ba.sendMessage(config.JID, {
      'image': {
        'url': _0x23a219.data.image
      },
      'caption': _0x5b5099
    });
    await _0xb874ba.sendMessage(_0x38e667, {
      'react': {
        'text': '✔️',
        'key': _0x4dcd84.key
      }
    });
  } catch (_0x73d4c7) {
    console.error("Error fetching or sending", _0x73d4c7);
    await _0xb874ba.sendMessage(_0x38e667, "*Error fetching or sending *", {
      'quoted': _0x4dcd84
    });
  }
});
cmd({
  'pattern': "forward2",
  'desc': "forward msgs",
  'alias': ['fo'],
  'category': "owner",
  'use': ".forward2 < Jid address 1, Jid address 2, ...>",
  'filename': __filename
}, async (_0x27c0ac, _0x13cbd5, _0x58f93b, {
  from: _0x36e6ec,
  l: _0x412faa,
  quoted: _0x18fee5,
  body: _0x505c8a,
  isCmd: _0x1196c1,
  command: _0x5cfb9b,
  args: _0x331a27,
  q: _0x5e1b7b,
  isGroup: _0x5e1277,
  sender: _0x55bfca,
  senderNumber: _0xa6ef43,
  botNumber2: _0x4f5076,
  botNumber: _0x107522,
  pushname: _0x46e64e,
  isMe: _0x556496,
  isOwner: _0x458692,
  groupMetadata: _0x555683,
  groupName: _0x1962d6,
  participants: _0x3d239a,
  groupAdmins: _0x3c3df8,
  isBotAdmins: _0x3e2b3d,
  isAdmins: _0x1663a7,
  reply: _0xa3df25
}) => {
  if (!_0x458692) {
    return _0xa3df25("*Owner Only ❌*");
  }
  if (!_0x5e1b7b || !_0x58f93b.quoted) {
    return _0xa3df25("*Provide the message and JID(s) ❌*");
  }
  let _0x19c003 = _0x5e1b7b.split(',').map(_0x4da2c9 => _0x4da2c9.trim());
  if (_0x19c003.length === 0x0) {
    return _0xa3df25("*Provide at least one valid JID ❌*");
  }
  let _0x356a7e = {
    key: _0x13cbd5.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x13cbd5.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0xb754e = _0x13cbd5.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x5e0f6e = require('mime-types');
    let _0x431715 = _0x5e0f6e.extension(_0xb754e);
    _0x13cbd5.quoted.documentWithCaptionMessage.message.documentMessage.fileName = _0x13cbd5.quoted.documentWithCaptionMessage.message.documentMessage.caption + '.' + _0x431715;
  }
  _0x356a7e.message = _0x13cbd5.quoted;
  let _0x5be2e0 = [];
  for (let _0x420ecc of _0x19c003) {
    try {
      await _0x27c0ac.forwardMessage(_0x420ecc, _0x356a7e, false);
      _0x5be2e0.push(_0x420ecc);
    } catch (_0x25e8b4) {
      console.log("Failed to forward to " + _0x420ecc + ':', _0x25e8b4);
    }
  }
  return _0x5be2e0.length > 0x0 ? _0xa3df25("*Message successfully forwarded to:*\n\n" + _0x5be2e0.join("\n")) : _0xa3df25("*Failed to forward to all provided JIDs ❌*");
});
