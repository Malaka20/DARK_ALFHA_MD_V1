const config = require("../config");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require("../command");
const yts = require("ytsearch-venom");
function ytreg(_0x14e029) {
  const _0x513a48 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return _0x513a48.test(_0x14e029);
}
cmd({
  'pattern': "yts2",
  'alias': ["ytsearch2"],
  'use': ".yts lelena",
  'react': '🔎',
  'desc': "Search songs",
  'category': "search",
  'filename': __filename
}, async (_0x12f26b, _0x21988f, _0x4ea95e, {
  from: _0x9f3c87,
  l: _0x211d55,
  quoted: _0x54c957,
  body: _0x5d2e65,
  isCmd: _0x3f7d00,
  command: _0x39485c,
  args: _0x342c55,
  q: _0x322b5c,
  isGroup: _0x25fb49,
  sender: _0x18c526,
  senderNumber: _0x21d42e,
  botNumber2: _0x15b691,
  botNumber: _0x30dd1d,
  pushname: _0x542a2e,
  isMe: _0x39c66f,
  isOwner: _0x31b1fe,
  groupMetadata: _0x400b92,
  groupName: _0x22a683,
  participants: _0x3037e3,
  groupAdmins: _0x3df9e8,
  isBotAdmins: _0x303ad0,
  isAdmins: _0x1db42b,
  reply: _0x4cef73
}) => {
  try {
    if (!_0x322b5c) {
      return await _0x4cef73(imgmsg);
    }
    if (isUrl(_0x322b5c) && !ytreg(_0x322b5c)) {
      return await _0x4cef73(imgmsg);
    }
    try {
      let _0x23d9d6 = require('ytsearch-venom');
      var _0x560c6c = await _0x23d9d6(_0x322b5c);
    } catch (_0x355fe2) {
      _0x211d55(_0x355fe2);
      return await _0x12f26b.sendMessage(_0x9f3c87, {
        'text': "*Error !!*"
      }, {
        'quoted': _0x21988f
      });
    }
    var _0x26fab4 = '';
    _0x560c6c.all.map(_0x33636e => {
      _0x26fab4 += " *🖲️" + _0x33636e.title + "*\n🔗 " + _0x33636e.url + "\n\n";
    });
    await _0x12f26b.sendMessage(_0x9f3c87, {
      'text': _0x26fab4
    }, {
      'quoted': _0x21988f
    });
  } catch (_0x3b1c76) {
    _0x211d55(_0x3b1c76);
    _0x4cef73("*Error !!*");
  }
});
cmd({
  'pattern': 'song4',
  'alias': ["ytsong4"],
  'use': ".song lelena",
  'react': '🎧',
  'desc': "Download songs",
  'category': "download",
  'filename': __filename
}, async (_0x4a5126, _0x3e95dd, _0x367b69, {
  from: _0x282848,
  prefix: _0x5d5612,
  l: _0x1034b7,
  quoted: _0x22712d,
  body: _0x54d4f5,
  isCmd: _0x10d11f,
  command: _0x20b6ff,
  args: _0x13d9e4,
  q: _0x5c80b2,
  isGroup: _0x14d890,
  sender: _0x20c750,
  senderNumber: _0x3ff6da,
  botNumber2: _0x2a54af,
  botNumber: _0x5dc810,
  pushname: _0x1bda11,
  isMe: _0x267616,
  isOwner: _0x551c88,
  groupMetadata: _0x204707,
  groupName: _0xbd02ff,
  participants: _0x5bdafa,
  groupAdmins: _0x3e8206,
  isBotAdmins: _0x10e2af,
  isAdmins: _0x53b96d,
  reply: _0x3e54fe
}) => {
  try {
    if (!_0x5c80b2) {
      return await _0x3e54fe("*Please enter a query or a url!*");
    }
    const _0x4bc757 = _0x5c80b2.replace(/\?si=[^&]*/, '');
    var _0x22cb73 = await yts(_0x4bc757);
    let _0x2a7e0e = config.FOOTER;
    var _0x50c42c = _0x22cb73.videos[0x0];
    let _0x24a26b = "*🎧 DARK SHUTER SONG DOWNLODER 🎧*\n\n*📃 Title:* " + _0x50c42c.title + "\n\n*📺 Views:* " + _0x50c42c.views + "\n\n*🕹️ Duration:* " + _0x50c42c.duration + "\n\n*🔗 Url:* " + _0x50c42c.url;
    const _0x30458b = [{
      'buttonId': _0x5d5612 + "ytaa " + _0x50c42c.url,
      'buttonText': {
        'displayText': "AUDIO TYPE"
      },
      'type': 0x1
    }, {
      'buttonId': _0x5d5612 + "ytad " + _0x50c42c.url + '±' + _0x50c42c.title,
      'buttonText': {
        'displayText': "DOCUMENT TYPE"
      },
      'type': 0x1
    }];
    const _0x11c17c = {
      'image': {
        'url': _0x50c42c.thumbnail
      },
      'caption': _0x24a26b,
      'footer': _0x2a7e0e,
      'buttons': _0x30458b,
      'headerType': 0x4
    };
    await _0x4a5126.buttonMessage(_0x282848, _0x11c17c, _0x3e95dd);
  } catch (_0x4dc96d) {
    _0x3e54fe(N_FOUND);
    console.log(_0x4dc96d);
  }
});
cmd({
  'pattern': "ytaa",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x308ae4, _0x1c10a9, _0x387040, {
  from: _0x3c428a,
  q: _0x9bf1a3,
  reply: _0x19fdf3
}) => {
  try {
    if (!_0x9bf1a3) {
      return await _0x19fdf3("*Need a youtube url!*");
    }
    const _0x55e31f = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp3?url=" + _0x9bf1a3);
    await _0x308ae4.sendMessage(_0x3c428a, {
      'audio': {
        'url': _0x55e31f.result.download_url
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x1c10a9
    });
  } catch (_0x2e69d1) {
    console.log(_0x2e69d1);
  }
});
cmd({
  'pattern': 'ytad',
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x45473b, _0x8bc9cc, _0x3fa79f, {
  from: _0x21b674,
  q: _0x425466,
  reply: _0xa78e31
}) => {
  try {
    if (!_0x425466) {
      return await _0xa78e31("*Need a youtube url!*");
    }
    const _0x388b11 = _0x425466.split('±')[0x0];
    const _0x3a59b7 = _0x425466.split('±')[0x1];
    const _0x3e6ab7 = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp3?url=" + _0x388b11);
    await _0x45473b.sendMessage(_0x21b674, {
      'document': {
        'url': _0x3e6ab7.result.download_url
      },
      'mimetype': "audio/mpeg",
      'caption': config.FOOTER,
      'fileName': _0x3a59b7 + ".mp3"
    }, {
      'quoted': _0x8bc9cc
    });
    await _0x45473b.sendMessage(_0x21b674, {
      'react': {
        'text': '✔️',
        'key': _0x8bc9cc.key
      }
    });
  } catch (_0x45edaf) {
    console.log(_0x45edaf);
  }
});
cmd({
  'pattern': "video2",
  'alias': ["ytvideo2"],
  'use': ".song lelena",
  'react': "📽️",
  'desc': "Download videos",
  'category': "download",
  'filename': __filename
}, async (_0x3b8f49, _0x27c0e5, _0x4026a1, {
  from: _0x36af63,
  prefix: _0x602e91,
  l: _0x416471,
  quoted: _0x15e3ff,
  body: _0x303170,
  isCmd: _0x5b93d7,
  command: _0x343d36,
  args: _0x116b8a,
  q: _0x591556,
  isGroup: _0x24d3cb,
  sender: _0x2658f0,
  senderNumber: _0x2cb288,
  botNumber2: _0x3605dd,
  botNumber: _0x42f01f,
  pushname: _0x4aba4f,
  isMe: _0x986c04,
  isOwner: _0x3d7274,
  groupMetadata: _0x3bf402,
  groupName: _0x46675c,
  participants: _0x537422,
  groupAdmins: _0x1a8b27,
  isBotAdmins: _0x30fe8b,
  isAdmins: _0x57487e,
  reply: _0x5469d2
}) => {
  try {
    if (!_0x591556) {
      return await _0x5469d2("*Please enter a query or a url!*");
    }
    const _0x1e4183 = _0x591556.replace(/\?si=[^&]*/, '');
    var _0x1a2594 = await yts(_0x1e4183);
    let _0x5423d7 = config.FOOTER;
    var _0x538161 = _0x1a2594.videos[0x0];
    let _0x46cd18 = "*📽️ DARK SHUTER VIDEO DOWNLODER 📽️*\n     \n*📃 Title:* " + _0x538161.title + "\n\n*📺 Views:* " + _0x538161.views + "\n\n*🕹️ Duration:* " + _0x538161.duration + "\n\n*🔗 Url:* " + _0x538161.url;
    const _0x2f50c1 = [{
      'buttonId': _0x602e91 + "360pv " + _0x538161.url,
      'buttonText': {
        'displayText': "VIDEO TYPE"
      },
      'type': 0x1
    }, {
      'buttonId': _0x602e91 + "720pv " + _0x538161.url + '±' + _0x538161.title,
      'buttonText': {
        'displayText': "DOCUMENT TYPE"
      },
      'type': 0x1
    }];
    const _0x411218 = {
      'image': {
        'url': _0x538161.thumbnail
      },
      'caption': _0x46cd18,
      'footer': _0x5423d7,
      'buttons': _0x2f50c1,
      'headerType': 0x4
    };
    await _0x3b8f49.buttonMessage(_0x36af63, _0x411218, _0x27c0e5);
  } catch (_0x521eed) {
    _0x5469d2(N_FOUND);
    console.log(_0x521eed);
  }
});
cmd({
  'pattern': "360pv",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x420a39, _0x4fdc40, _0x41758f, {
  from: _0x12b50f,
  q: _0x2ff8e7,
  reply: _0x10e36e
}) => {
  try {
    if (!_0x2ff8e7) {
      return await _0x10e36e("*Need a youtube url!*");
    }
    const _0x301b98 = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp4?url=" + _0x2ff8e7);
    await _0x420a39.sendMessage(_0x12b50f, {
      'video': {
        'url': _0x301b98.result.download_url
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x4fdc40
    });
    await _0x420a39.sendMessage(_0x12b50f, {
      'react': {
        'text': '✔️',
        'key': _0x4fdc40.key
      }
    });
  } catch (_0x11b54a) {
    console.log(_0x11b54a);
  }
});
cmd({
  'pattern': "480pv",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5e5388, _0x3d96e6, _0x4904b3, {
  from: _0x2104fd,
  q: _0x4a6d62,
  reply: _0x29144c
}) => {
  try {
    if (!_0x4a6d62) {
      return await _0x29144c("*Need a youtube url!*");
    }
    const _0x1486aa = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp4?url=" + _0x4a6d62);
    await _0x5e5388.sendMessage(_0x2104fd, {
      'video': {
        'url': _0x1486aa.result.download_url
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x3d96e6
    });
  } catch (_0x2d97ed) {
    console.log(_0x2d97ed);
  }
});
cmd({
  'pattern': '720pv',
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3461e9, _0x1cc63e, _0x4c2649, {
  from: _0x2b3cc7,
  q: _0x4d50d4,
  reply: _0x59ad69
}) => {
  try {
    if (!_0x4d50d4) {
      return await _0x59ad69("*Need a youtube url!*");
    }
    const _0x265b8c = _0x4d50d4.split('±')[0x0];
    const _0x1ad866 = _0x4d50d4.split('±')[0x1];
    const _0x13da79 = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp4?url=" + _0x265b8c);
    await _0x3461e9.sendMessage(_0x2b3cc7, {
      'document': {
        'url': _0x13da79.result.download_url
      },
      'mimetype': "audio/mpeg",
      'caption': config.FOOTER,
      'fileName': _0x1ad866 + '.mp4'
    }, {
      'quoted': _0x1cc63e
    });
  } catch (_0xb21bb2) {
    await _0x3461e9.sendMessage(_0x2b3cc7, {
      'react': {
        'text': '✔️',
        'key': _0x1cc63e.key
      }
    });
    console.log(_0xb21bb2);
  }
});
cmd({
  'pattern': "1080pv",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x39b10a, _0x133039, _0x59416f, {
  from: _0x3134f0,
  q: _0xacfd40,
  reply: _0x2c6c67
}) => {
  try {
    if (!_0xacfd40) {
      return await _0x2c6c67("*Need a youtube url!*");
    }
    const _0x2fb102 = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp4?url=" + _0xacfd40);
    await _0x39b10a.sendMessage(_0x3134f0, {
      'video': {
        'url': _0x2fb102.result.download_url
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x133039
    });
  } catch (_0x1d1a6e) {
    console.log(_0x1d1a6e);
  }
});
