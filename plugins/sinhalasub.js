const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
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
const {
  sinhalaSub
} = require("mrnima-moviedl");
const axios = require("axios");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
cmd({
  'pattern': "movie",
  'alias': ["movi", 'tests'],
  'use': ".movie <query>",
  'react': '🔎',
  'desc': "Moive downloader",
  'category': "movie",
  'filename': __filename
}, async (_0x3bd47c, _0x4c78c3, _0x3cffe4, {
  from: _0x586952,
  l: _0x46e84b,
  quoted: _0x56b46c,
  body: _0x5f4a62,
  isCmd: _0x2bd21d,
  command: _0x1ebdf1,
  args: _0x690eee,
  q: _0x1b8916,
  isGroup: _0x577f2b,
  sender: _0x537ada,
  senderNumber: _0x426601,
  botNumber2: _0x2d6cfd,
  botNumber: _0x1724d1,
  pushname: _0x3ff9f9,
  isMe: _0x14292d,
  isOwner: _0x48dbde,
  groupMetadata: _0x6048a8,
  groupName: _0x172ece,
  participants: _0x121e6f,
  groupAdmins: _0x5082ca,
  isBotAdmins: _0x3fb5ff,
  isAdmins: _0x1d3818,
  reply: _0x524c19
}) => {
  try {
    const _0x66b3d4 = await sinhalaSub();
    if (!_0x1b8916) {
      return _0x524c19("🚩 *Please give me words to search*");
    }
    var _0x149f2c = await _0x66b3d4.search(_0x1b8916);
    const _0x3acd66 = _0x149f2c.result;
    if (_0x3acd66.length < 0x1) {
      return await _0x3bd47c.sendMessage(_0x586952, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x4c78c3
      });
    }
    var _0x21f137 = [];
    _0x149f2c.result.map(_0x38cdc3 => {
      _0x21f137.push({
        'buttonId': ".tsts " + _0x38cdc3.link,
        'buttonText': {
          'displayText': '' + _0x38cdc3.title
        },
        'type': 0x1
      });
    });
    const _0x8d1a1f = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*🎥 DARK SHUTER MOVIE SEARCH 🎥*",
      'footer': config.FOOTER,
      'buttons': _0x21f137,
      'headerType': 0x4
    };
    return await _0x3bd47c.buttonMessage(_0x586952, _0x8d1a1f, _0x4c78c3);
  } catch (_0x3892c1) {
    console.log(_0x3892c1);
    await _0x3bd47c.sendMessage(_0x586952, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x4c78c3
    });
  }
});
cmd({
  'pattern': "tsts",
  'alias': ["mdv"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x2aa8e3, _0x1c3d70, _0x27c03b, {
  from: _0x24d9f2,
  l: _0x4a8220,
  quoted: _0x570686,
  body: _0x60bac0,
  isCmd: _0x2bc62a,
  command: _0x5176db,
  args: _0x14fec2,
  q: _0x125de2,
  isGroup: _0x347663,
  prefix: _0x4100aa,
  sender: _0x1814d3,
  senderNumber: _0x4f9abd,
  botNumber2: _0xcd70a9,
  botNumber: _0x29bee0,
  pushname: _0x37e718,
  isMe: _0xf0f90c,
  isOwner: _0x2479c6,
  groupMetadata: _0x163fea,
  groupName: _0x1b3efc,
  participants: _0x143479,
  groupAdmins: _0x2fe60b,
  isBotAdmins: _0x2c2645,
  isAdmins: _0x197eb2,
  reply: _0xf05557
}) => {
  try {
    if (!_0x125de2) {
      return _0xf05557("🚩 *Please give me a url*");
    }
    const _0x4ff60a = await axios.get(_0x125de2);
    const _0x271dfb = cheerio.load(_0x4ff60a.data);
    const _0x2b45b3 = _0x271dfb(".sheader").first();
    const _0x487ffa = _0x2b45b3.find(".data .head h1").text();
    const _0x52fa2b = _0x2b45b3.find(".poster img").attr('src');
    const _0x1b4f6f = _0x2b45b3.find(".extra .date").text().trim();
    const _0x5096c3 = _0x2b45b3.find(".extra .runtime").text().trim();
    const _0x5d904d = _0x271dfb("#info").first();
    const _0x4849a4 = _0x5d904d.find("#repimdb strong").text().trim();
    const _0x5ba13b = [];
    _0x271dfb(".linktabs .idTabs li").each((_0x4d83f8, _0x436e20) => {
      const _0x3803d5 = _0x271dfb(_0x436e20).text().trim();
      const _0x169794 = _0x271dfb(".box_links .linktabs + .sbox").eq(_0x4d83f8).find(".links_table tbody tr");
      _0x169794.each((_0x1793cd, _0x25cb14) => {
        const _0x4670e3 = _0x271dfb(_0x25cb14).find("td a").attr("href");
        const _0x3715ec = _0x271dfb(_0x25cb14).find("td strong.quality").text().trim();
        const _0x86ff7a = _0x271dfb(_0x25cb14).find('td').last().text().trim();
        _0x5ba13b.push({
          'server': _0x3803d5,
          'link': _0x4670e3,
          'quality': _0x3715ec,
          'size': _0x86ff7a
        });
      });
    });
    if (_0x5ba13b.length < 0x1) {
      return await _0x2aa8e3.sendMessage(_0x24d9f2, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x1c3d70
      });
    }
    var _0x2a019d = [];
    _0x5ba13b.map(_0x437fd9 => {
      _0x2a019d.push({
        'buttonId': _0x4100aa + ("mvkdd " + _0x437fd9.link + '±' + _0x487ffa),
        'buttonText': {
          'displayText': _0x437fd9.size + " - " + _0x437fd9.quality
        },
        'type': 0x1
      }, {
        'buttonId': _0x4100aa + "detailss " + _0x125de2,
        'buttonText': {
          'displayText': "Details send"
        },
        'type': 0x1
      });
    });
    const _0x2b2a12 = "   *🎥 DARK SHUTER MOVIE DOWNLODER 🎥*\n \n *☘️ Title :* *" + _0x487ffa + "*\n\n*🖇️ Link :* *" + _0x125de2 + "*\n\n*📅 Release :* *" + _0x1b4f6f + "*\n\n*🕰️ Duration :* *" + _0x5096c3 + "*\n\n*🏆 IMDD Rating :* *" + _0x4849a4 + "*\n\n ";
    const _0x52ad43 = {
      'image': {
        'url': _0x52fa2b
      },
      'caption': _0x2b2a12,
      'footer': config.FOOTER,
      'buttons': _0x2a019d,
      'headerType': 0x4
    };
    return await _0x2aa8e3.buttonMessage(_0x24d9f2, _0x52ad43, _0x1c3d70);
  } catch (_0xe01761) {
    console.log(_0xe01761);
    await _0x2aa8e3.sendMessage(_0x24d9f2, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x1c3d70
    });
  }
});
cmd({
  'pattern': "mvkdd",
  'react': '🎥',
  'alias': ['online', 'test', "bot"],
  'desc': "Check bot online or no.",
  'use': '.alive',
  'filename': __filename
}, async (_0x22c98a, _0x4d7479, _0x5830a7, {
  from: _0x2ea8f9,
  prefix: _0x1b6301,
  q: _0x1fa9f,
  pushname: _0x763336,
  reply: _0x508007
}) => {
  try {
    if (!_0x1fa9f) {
      return await _0x508007("please give me text !..");
    }
    const _0x4fcbb = _0x1fa9f.split('±')[0x0];
    const _0x15ff84 = _0x1fa9f.split('±')[0x1];
    const _0x4d774b = await fetch(_0x4fcbb);
    const _0x45883c = await _0x4d774b.text();
    const _0x186942 = cheerio.load(_0x45883c);
    const _0x5d723a = [];
    _0x186942("#link").each((_0x22ccf4, _0x45daf5) => {
      _0x5d723a.push(_0x186942(_0x45daf5).attr('href'));
    });
    const _0x4e8b9f = [{
      'buttonId': _0x1b6301 + "fit " + _0x5d723a + '±' + _0x15ff84,
      'buttonText': {
        'displayText': "DOWNLOAD"
      },
      'type': 0x1
    }];
    const _0x1c490c = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*DOWNLOAD MOVIE*",
      'footer': config.FOOTER,
      'buttons': _0x4e8b9f,
      'headerType': 0x1
    };
    await _0x22c98a.buttonMessage(_0x2ea8f9, _0x1c490c, _0x4d7479);
  } catch (_0x147f2c) {
    console.log(_0x147f2c);
    _0x508007("*Error !!*");
  }
});
cmd({
  'pattern': 'mn',
  'react': '🎥',
  'alias': ["online", "test", 'bot'],
  'desc': "Check bot online or no.",
  'use': ".alive",
  'filename': __filename
}, async (_0x2e9e3d, _0x2ca09b, _0xc07fc0, {
  from: _0x4cb79f,
  prefix: _0x19a6c0,
  q: _0x48c825,
  pushname: _0x2522da,
  reply: _0x121245
}) => {
  try {
    if (!_0x48c825) {
      return await _0x121245("please give me text !..");
    }
    const _0x3ed55f = _0x48c825.split('±')[0x1];
    const _0x2993fc = [{
      'buttonId': _0x19a6c0 + "fit " + fhd + '±' + _0x3ed55f,
      'buttonText': {
        'displayText': "DOWNLOAD"
      },
      'type': 0x1
    }];
    const _0x5f4b6a = {
      'image': {
        'url': "https://telegra.ph/file/091fc81528af5881cdf47.jpg"
      },
      'caption': "DOWNLOAD MOVIE\n",
      'footer': config.FOOTER,
      'buttons': _0x2993fc,
      'headerType': 0x1
    };
    await _0x2e9e3d.buttonMessage(_0x4cb79f, _0x5f4b6a, _0x2ca09b);
  } catch (_0x1aadee) {
    console.log(_0x1aadee);
    _0x121245("*Error !!*");
  }
});
cmd({
  'pattern': "fit",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2056f1, _0x56a1d2, _0x2e2670, {
  from: _0x5ab174,
  q: _0x2782b3,
  isMe: _0x313592,
  reply: _0xf5d39e
}) => {
  if (!_0x2782b3) {
    return await _0xf5d39e("*Please provide a direct URL!*");
  }
  try {
    const _0x3c3501 = _0x2782b3.split('±')[0x0];
    const _0x51dc7c = _0x2782b3.split('±')[0x1];
    const _0x4b2017 = _0x3c3501.split("https://pixeldrain.com/u/")[0x1];
    const _0xef4b5b = "https://pixeldrain.com/api/file/" + _0x4b2017;
    const _0x5792e3 = _0xef4b5b.trim();
    const _0x251d18 = await axios.get(_0x5792e3, {
      'responseType': "arraybuffer"
    });
    const _0x198311 = Buffer.from(_0x251d18.data, 'binary');
    const _0x1d7b65 = {
      'document': _0x198311,
      'caption': _0x51dc7c + "\n     \n *ＤＡＲＫ ＳＨＵＴＥＲ ＭＤ Ｖ2*",
      'mimetype': "video/mp4",
      'fileName': "🎬DARK SHUTER🎬.mp4"
    };
    await _0x2056f1.sendMessage(config.JID, _0x1d7b65);
    await _0x2056f1.sendMessage(_0x5ab174, {
      'react': {
        'text': '✔️',
        'key': _0x56a1d2.key
      }
    });
  } catch (_0x367e75) {
    console.error("Error fetching or sending", _0x367e75);
    await _0x2056f1.sendMessage(_0x5ab174, "*Error fetching or sending *", {
      'quoted': _0x56a1d2
    });
  }
});
cmd({
  'pattern': "fetch",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x17bfef, _0x50afd6, _0x5ae974, {
  from: _0x3db660,
  q: _0x296e4b,
  isMe: _0x41d47a,
  reply: _0x4decf8
}) => {
  if (!_0x296e4b) {
    return await _0x4decf8("*Please provide a direct URL!*");
  }
  try {
    const _0x57a5e1 = _0x296e4b.trim();
    const _0x3f9501 = await axios.get(_0x57a5e1, {
      'responseType': 'arraybuffer'
    });
    const _0x5017c0 = Buffer.from(_0x3f9501.data, "binary");
    const _0x5b1ce8 = {
      'document': _0x5017c0,
      'caption': "*ＨＹＰＥＲ ＭＯＶＩＥ ＤＬ🎥*",
      'mimetype': "video/mp4",
      'fileName': 'sadas.mp4'
    };
    await _0x17bfef.sendMessage(config.JID, _0x5b1ce8);
    await _0x17bfef.sendMessage(_0x3db660, {
      'react': {
        'text': '✔️',
        'key': _0x50afd6.key
      }
    });
  } catch (_0x36ef2c) {
    console.error("Error fetching or sending", _0x36ef2c);
    await _0x17bfef.sendMessage(_0x3db660, "*Error fetching or sending *", {
      'quoted': _0x50afd6
    });
  }
});
cmd({
  'pattern': "daqt",
  'react': '📑',
  'desc': "sinhalasub moive downloader",
  'filename': __filename
}, async (_0x5ed416, _0x3fc0f7, _0x1e2e7d, {
  reply: _0x19e899,
  q: _0xd5a32b,
  isMe: _0x4dd9c5,
  l: _0x1cde94,
  prefix: _0x58f4ff,
  from: _0x3dc613
}) => {
  if (!_0x4dd9c5) {
    return _0x19e899("Active your number To Premium user*");
  }
  try {
    if (!_0xd5a32b) {
      return await _0x19e899("please give me text !..");
    }
    const _0x46c8f3 = await axios.get(_0xd5a32b);
    const _0x3a3c0b = cheerio.load(_0x46c8f3.data);
    const _0x89b688 = _0x3a3c0b(".sheader").first();
    const _0x4f677a = _0x89b688.find(".data .head h1").text();
    const _0x45c1f9 = _0x89b688.find(".extra .date").text().trim();
    const _0x367b24 = _0x89b688.find(".extra .runtime").text().trim();
    const _0x1f4cc0 = _0x3a3c0b("#info").first();
    const _0x1d6f1c = _0x1f4cc0.find("#repimdb strong").text().trim();
    const _0x48edbe = "*🎥• HYPER MOVIE DOWNLOADER •🎥*\n\n\n*🍿 Title -* " + _0x4f677a + "\n\n*📅 Year -* " + _0x45c1f9 + "\n\n*🚩 Rating -* " + _0x1d6f1c + "\n\n*🌲Duration -* " + _0x367b24 + "\n\nlink " + _0xd5a32b + "\n";
    await _0x5ed416.sendMessage(config.JID, {
      'caption': _0x48edbe
    }, {
      'quoted': _0x3fc0f7
    });
  } catch (_0x125ee1) {
    _0x19e899("🚩 Not Found !");
    console.log(_0x125ee1);
  }
});
cmd({
  'pattern': 'tv',
  'alias': ['t', "tvs"],
  'use': ".movie <query>",
  'react': '🔎',
  'desc': "Download movies",
  'category': "movie",
  'filename': __filename
}, async (_0x3329ca, _0x848b94, _0x263931, {
  from: _0x2391a0,
  l: _0x271511,
  quoted: _0x338ea2,
  body: _0x2f1270,
  isCmd: _0x7eb28a,
  command: _0x4947a4,
  args: _0xe58dbf,
  q: _0x3cfc17,
  isGroup: _0x143d4f,
  sender: _0x4a8d05,
  senderNumber: _0x4a6800,
  botNumber2: _0xdf23bb,
  botNumber: _0x20ed5f,
  pushname: _0x2c26cf,
  isMe: _0x1e2f88,
  isOwner: _0x3d4321,
  groupMetadata: _0x3214ab,
  groupName: _0x3ca293,
  participants: _0x3f2f32,
  groupAdmins: _0x37c4d6,
  isBotAdmins: _0x50d373,
  isAdmins: _0x50d424,
  reply: _0xed7a82
}) => {
  try {
    const _0x310baf = await sinhalaSub();
    if (!_0x3cfc17) {
      return _0xed7a82("🚩 *Please give me words to search*");
    }
    var _0x1f486c = await _0x310baf.search(_0x3cfc17);
    const _0x48a238 = _0x1f486c.result;
    if (_0x48a238.length < 0x1) {
      return await _0x3329ca.sendMessage(_0x2391a0, {
        'text': "🚩 *I couldn't find anything :(*"
      }, {
        'quoted': _0x848b94
      });
    }
    var _0x160013 = [];
    _0x1f486c.result.map(_0x4c0968 => {
      _0x160013.push({
        'buttonId': ".tvb " + _0x4c0968.link,
        'buttonText': {
          'displayText': '' + _0x4c0968.title
        },
        'type': 0x1
      });
    });
    const _0x341779 = {
      'image': {
        'url': "https://telegra.ph/file/091fc81528af5881cdf47.jpg"
      },
      'caption': "乂 *S I N H A L A S U B - S E A R C H*",
      'footer': config.FOOTER,
      'buttons': _0x160013,
      'headerType': 0x4
    };
    return await _0x3329ca.buttonMessage(_0x2391a0, _0x341779, _0x848b94);
  } catch (_0x1692c8) {
    console.log(_0x1692c8);
    await _0x3329ca.sendMessage(_0x2391a0, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x848b94
    });
  }
});
cmd({
  'pattern': "tvb",
  'alias': ['tvshows'],
  'use': ".tv <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0x487e19, _0x202e5d, _0x24aae0, {
  from: _0x25877c,
  l: _0x5ef472,
  quoted: _0x2b11df,
  body: _0xddbb1b,
  isCmd: _0x3f3854,
  command: _0x897d3e,
  args: _0x3b3cb0,
  q: _0x50f57f,
  isGroup: _0x19b531,
  sender: _0x23843c,
  senderNumber: _0x106652,
  botNumber2: _0x499854,
  botNumber: _0x5a14b4,
  pushname: _0xfb2f0b,
  isMe: _0x4f34aa,
  isOwner: _0x33ea10,
  prefix: _0x513f18,
  groupMetadata: _0x223882,
  groupName: _0x4bf25e,
  participants: _0x996423,
  groupAdmins: _0x381592,
  isBotAdmins: _0x3006f1,
  isAdmins: _0x14f1ab,
  reply: _0x46e179
}) => {
  try {
    if (!_0x50f57f) {
      return _0x46e179("🚩 *Please give me a url*");
    }
    const _0x312c73 = await fetch(_0x50f57f);
    const _0x38a0ad = await _0x312c73.text();
    const _0x15b151 = cheerio.load(_0x38a0ad);
    const _0x224b23 = [];
    _0x15b151('.episodiotitle').each((_0x540ffa, _0x3130d9) => {
      _0x224b23.push({
        'title': _0x15b151(_0x3130d9).find('a').text(),
        'link': _0x15b151(_0x3130d9).find('a').attr("href")
      });
    });
    console.log(_0x224b23);
    if (_0x224b23.length < 0x1) {
      return await _0x487e19.sendMessage(_0x25877c, {
        'text': N_FOUND
      }, {
        'quoted': _0x202e5d
      });
    }
    var _0x3a9b39 = [];
    var _0x3a9b39 = [];
    _0x224b23.map(_0x1917f1 => {
      _0x3a9b39.push({
        'buttonId': _0x513f18 + "fdl " + _0x1917f1.link,
        'buttonText': {
          'displayText': '' + _0x1917f1.title
        },
        'type': 0x1
      });
    });
    const _0x51e061 = {
      'image': {
        'url': 'https://telegra.ph/file/091fc81528af5881cdf47.jpg'
      },
      'caption': "*🎥 TV SHOWS DOWNLOADER 🎥*",
      'footer': config.FOOTER,
      'buttons': _0x3a9b39,
      'headerType': 0x4
    };
    return await _0x487e19.buttonMessage(_0x25877c, _0x51e061, _0x202e5d);
  } catch (_0x51859c) {
    _0x46e179("*ERROR !!*");
    _0x5ef472(_0x51859c);
  }
});
cmd({
  'pattern': "detailss",
  'alias': ["dltestss"],
  'use': ".moviedl <url>",
  'react': '🎥',
  'desc': "download movies from sinhalasub.lk",
  'filename': __filename
}, async (_0xed74f0, _0x16c88a, _0x1b5f6c, {
  from: _0x5d97ab,
  l: _0x4a00ef,
  quoted: _0x412beb,
  body: _0x413844,
  isCmd: _0x15fcfe,
  command: _0x421742,
  args: _0x190b86,
  q: _0x59534b,
  isGroup: _0x29fdeb,
  sender: _0x272ca1,
  senderNumber: _0xce8bde,
  botNumber2: _0x8eca62,
  botNumber: _0x271711,
  pushname: _0x2ba02d,
  isMe: _0xf5eb0,
  isOwner: _0x3be791,
  groupMetadata: _0x2f7466,
  groupName: _0x345858,
  participants: _0x5ad113,
  groupAdmins: _0x18a7ae,
  isBotAdmins: _0x2db245,
  isAdmins: _0x2f96ab,
  reply: _0x1bd063
}) => {
  try {
    if (!_0x59534b) {
      return _0x1bd063("🚩 *Please give me a url*");
    }
    const _0x9a2294 = await axios.get(_0x59534b);
    const _0x8f2733 = cheerio.load(_0x9a2294.data);
    const _0x4e6fbd = _0x8f2733('.sheader').first();
    const _0x12ef65 = _0x4e6fbd.find(".data .head h1").text();
    const _0x33d66b = _0x4e6fbd.find(".extra .date").text().trim();
    const _0x362788 = _0x4e6fbd.find(".extra .runtime").text().trim();
    const _0x1d288a = _0x8f2733("#info").first();
    const _0xe0c2f2 = _0x1d288a.find("#repimdb strong").text().trim();
    const _0xe98dc5 = "*⦁⦂⦁━┉┉┉┉┉━━┉━━━┉━⦁⦂⦁*\n\n*☘️ Title :* *" + _0x12ef65 + "*\n\n*🖇️ Link :* *" + _0x59534b + "*\n\n*📅 Release :* *" + _0x33d66b + "*\n\n*🕰️ Duration :* *" + _0x362788 + "*\n\n*🏆 IMDD Rating :* *" + _0xe0c2f2 + "*\n";
    await _0xed74f0.sendMessage(config.JID, {
      'text': _0xe98dc5
    });
    await _0xed74f0.sendMessage(config.JID, {
      'react': {
        'text': '✔️',
        'key': _0x16c88a.key
      }
    });
  } catch (_0x817ca2) {
    console.error("Error fetching or sending", _0x817ca2);
    await _0xed74f0.sendMessage(_0x5d97ab, "*Error fetching or sending *", {
      'quoted': _0x16c88a
    });
  }
});
cmd({
  'pattern': "edit",
  'desc': "edit files",
  'alias': ['ed'],
  'category': 'movie',
  'use': ".edit hi & hi",
  'filename': __filename
}, async (_0x55adb3, _0x2a2e29, _0x53803e, {
  from: _0x48edf0,
  l: _0x5ba86d,
  quoted: _0x52eefc,
  body: _0x1002b7,
  isCmd: _0x47f855,
  command: _0x5778b3,
  args: _0x597f0a,
  q: _0x4a1283,
  isGroup: _0x28d97c,
  sender: _0x115571,
  senderNumber: _0xcdddd3,
  botNumber2: _0x194a5d,
  botNumber: _0x165696,
  pushname: _0x5a898d,
  isMe: _0x58f963,
  isOwner: _0x1c5eac,
  groupMetadata: _0x5217de,
  groupName: _0x528d4a,
  participants: _0x5cb370,
  groupAdmins: _0x1af459,
  isBotAdmins: _0x311475,
  isAdmins: _0x20201b,
  reply: _0xa92689
}) => {
  if (!_0x4a1283 || !_0x53803e.quoted) {
    _0xa92689("*give me message ❌*");
  }
  const _0x22bea7 = _0x4a1283.split('&')[0x0];
  const _0x152b51 = _0x4a1283.split('&')[0x1];
  let _0x242978 = {
    'key': _0x2a2e29.quoted?.['fakeObj']?.['key']
  };
  if (_0x2a2e29.quoted?.["documentWithCaptionMessage"]?.["message"]?.['documentMessage']) {
    let _0x2c0b72 = _0x2a2e29.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0xf5933 = require("mime-types");
    let _0x8ae4f7 = _0xf5933.extension(_0x2c0b72);
    _0x2a2e29.quoted.documentWithCaptionMessage.message.documentMessage.fileName = _0x152b51 + '.' + _0x8ae4f7;
    _0x2a2e29.quoted.documentWithCaptionMessage.message.documentMessage.caption = _0x22bea7;
  }
  _0x242978.message = _0x2a2e29.quoted;
  return _0xa92689("*File edited ✅*");
});
cmd({
  'pattern': 'f',
  'desc': "forward msgs",
  'alias': ["forward"],
  'category': "movie",
  'use': ".forward < Jid address >",
  'filename': __filename
}, async (_0x2b9f78, _0x4461f3, _0x496752, {
  from: _0x13385c,
  l: _0x47b430,
  quoted: _0x42979c,
  body: _0x52ff3d,
  isCmd: _0x913831,
  command: _0x193bcd,
  args: _0x1ce2e5,
  q: _0x3c1ffd,
  isGroup: _0x36b524,
  sender: _0x5b1ebb,
  senderNumber: _0x52810e,
  botNumber2: _0xbb3ad0,
  botNumber: _0x53e926,
  pushname: _0x1a25e9,
  isMe: _0x3b5f2d,
  isOwner: _0x17907d,
  groupMetadata: _0x11086e,
  groupName: _0x50105b,
  participants: _0x10c876,
  groupAdmins: _0xa995c2,
  isBotAdmins: _0x1d6f30,
  isAdmins: _0x12213d,
  reply: _0x1f1993
}) => {
  if (!_0x3c1ffd || !_0x496752.quoted) {
    _0x1f1993("*give me message ❌*");
  }
  let _0x3b62bc;
  let _0x35e410 = {
    'key': _0x4461f3.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x4461f3.quoted?.['documentWithCaptionMessage']?.["message"]?.["documentMessage"]) {
    let _0x32d685 = _0x4461f3.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x551936 = require('mime-types');
    let _0x472ba9 = _0x551936.extension(_0x32d685);
    _0x4461f3.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x3b62bc ? _0x3b62bc : _0x4461f3.quoted.documentWithCaptionMessage.message.documentMessage.caption) + '.' + _0x472ba9;
  }
  _0x35e410.message = _0x4461f3.quoted;
  return _0x1f1993("*Message forwarded to:*\n\n " + _0x3c1ffd);
});
