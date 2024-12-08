(function (_0x55929a, _0x3b598f) {
  const _0x26b429 = _0x55929a();
  while (true) {
    try {
      const _0x290e2a = parseInt(_0x3310(1819, 0x245)) / 1 + parseInt(_0x3310(3858, 0x1673)) / 2 * (-parseInt(_0x3310(2470, 0xaf9)) / 3) + parseInt(_0x3310(2285, 0x211)) / 4 + -parseInt(_0x3310(5377, 0xd5c)) / 5 + parseInt(_0x3310(4037, 0x798)) / 6 * (parseInt(_0x3310(5329, 0x1621)) / 7) + parseInt(_0x3310(3252, 0x348)) / 8 * (-parseInt(_0x3310(1261, 0x10e)) / 9) + parseInt(_0x3310(3654, 0x1693)) / 10;
      if (_0x290e2a === _0x3b598f) {
        break;
      } else {
        _0x26b429.push(_0x26b429.shift());
      }
    } catch (_0x2cd577) {
      _0x26b429.push(_0x26b429.shift());
    }
  }
})(_0xfab2, 122882);
const config = require("../settings");
const apkdl = require("../lib/apkdl");
const {
  cmd,
  commands
} = require("../lib/command");
const {
  Download
} = require("nima-threads-dl-api");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  jsonformat
} = require("../lib/functions");
const {
  pinterest,
  wallpaper,
  wikimedia,
  quotesAnime,
  aiovideodl,
  umma,
  ringtone,
  styletext
} = require("../lib/scraper");
const gis = require("async-g-i-s");
const axios = require("axios");
const cheerio = require("cheerio");
const {
  facebook
} = require("@mrnima/facebook-downloader");
function _0x2a5c21(_0x442a5d, _0x560645, _0x277abf, _0x50a865, _0x3bafb5) {
  return _0x3310(_0x3bafb5 - 0x8e, _0x442a5d);
}
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const yts = require("yt-search");
const videoSearchResults = new Map();
let optionIndex = 1;
const fs = require('fs');
const {
  unsplash,
  pixabay
} = require("@sl-code-lords/image-library");
var {
  subsearch,
  subdl
} = require("@sl-code-lords/si-subdl");
const {
  sizeFormatter
} = require("human-readable");
;
const {
  File
} = require("megajs");
const {
  Tiktok
} = require("../lib/tiktok");
function regtik(_0x3df1be) {
  return _0x3df1be.includes("tiktok.com");
}
const fetch = (..._0x43467b) => import("node-fetch").then(({
  default: _0xefceee
}) => _0xefceee(..._0x43467b));
async function fbDownloader(_0x517914) {
  try {
    const _0x310218 = {
      url: _0x517914
    };
    const _0x356826 = await axios({
      'method': "POST",
      'url': "https://snapsave.app/action.php?lang=vn",
      'headers': {
        'accept': "*/*",
        'accept-language': "vi,en-US;q=0.9,en;q=0.8",
        'content-type': "multipart/form-data",
        'sec-ch-ua': "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': "\"Windows\"",
        'sec-fetch-dest': "empty",
        'sec-fetch-mode': "cors",
        'sec-fetch-site': "same-origin",
        'Referer': "https://snapsave.app/vn",
        'Referrer-Policy': "strict-origin-when-cross-origin"
      },
      'data': _0x310218
    });
    let _0x55b552;
    const _0x3272c6 = _0x356826.data.replace("return decodeURIComponent", "html = decodeURIComponent");
    eval(_0x3272c6);
    _0x55b552 = _0x55b552.split("innerHTML = \"")[1].split("\";\n")[0].replace(/\\"/g, "\"");
    const _0x40930c = cheerio.load(_0x55b552);
    const _0x18ef5f = [];
    const _0x215af9 = _0x40930c("table").find("tbody");
    const _0x2f7f3d = _0x215af9.find('tr');
    _0x2f7f3d.each(function (_0x67578d, _0x2a5fe2) {
      const _0x1d717a = _0x40930c(_0x2a5fe2);
      const _0x18c1cb = _0x1d717a.children();
      const _0x5e1cf4 = _0x40930c(_0x18c1cb[0]).text().trim();
      const _0x55cda7 = _0x40930c(_0x18c1cb[2]).children('a').attr("href");
      if (_0x55cda7 != undefined) {
        const _0x4c95f1 = {
          quality: _0x5e1cf4,
          url: _0x55cda7
        };
        _0x18ef5f.push(_0x4c95f1);
      }
    });
    const _0x23a7c8 = {
      success: true,
      download: _0x18ef5f
    };
    return _0x23a7c8;
  } catch (_0x43c3e6) {
    const _0x1e9dd6 = {
      success: false
    };
    return _0x1e9dd6;
  }
}
function fbreg(_0x252684) {
  const _0x40a0b0 = /(?:https?:\/\/)?(?:www\.)?(m\.facebook|facebook|fb)\.(com|me|watch)\/(?:(?:\w\.)*#!\/)?(?:groups\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/;
  return _0x40a0b0.test(_0x252684);
}
async function Insta(_0x157cb0) {
  const _0x29b347 = [];
  const _0x16c7a5 = {
    url: _0x157cb0,
    submit: ''
  };
  const {
    data: _0x33ad80
  } = await axios("https://downloadgram.org/", {
    'method': "POST",
    'data': _0x16c7a5
  });
  const _0x5a0874 = cheerio.load(_0x33ad80);
  _0x5a0874("#downloadhere > a").each(function (_0x1c5be8, _0x1be73c) {
    const _0x1d0c66 = _0x5a0874(_0x1be73c).attr("href");
    if (_0x1d0c66) {
      _0x29b347.push(_0x1d0c66);
    }
  });
  return _0x29b347;
}
async function sswebA(_0x159693 = '', _0x19aa31 = false, _0xd6b1e3 = "desktop") {
  _0xd6b1e3 = _0xd6b1e3.toLowerCase();
  if (!["desktop", "tablet", "phone"].includes(_0xd6b1e3)) {
    _0xd6b1e3 = "desktop";
  }
  let _0x484870 = new URLSearchParams();
  _0x484870.append("url", _0x159693);
  _0x484870.append("device", _0xd6b1e3);
  if (!!_0x19aa31) {
    _0x484870.append("full", 'on');
  }
  _0x484870.append("cacheLimit", 0);
  let _0x583a1c = await axios({
    'url': "https://www.screenshotmachine.com/capture.php",
    'method': "post",
    'data': _0x484870
  });
  let _0x5ef882 = _0x583a1c.headers["set-cookie"];
  let _0x2749e8 = await axios({
    'url': "https://www.screenshotmachine.com/" + _0x583a1c.data.link,
    'headers': {
      'cookie': _0x5ef882.join('')
    },
    'responseType': "arraybuffer"
  });
  return Buffer.from(_0x2749e8.data);
}
function formatUploadDate(_0x18537b) {
  const _0x45b2f7 = new Date(_0x18537b);
  return _0x45b2f7.getFullYear() + '-' + (_0x45b2f7.getMonth() + 1) + '-' + _0x45b2f7.getDate();
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "*කරුණාකර මට threads url එකක් දෙන්න !!*";
} else {
  needus = "*Please give me threads url !!*";
}
var cantf = '';
if (config.LANG === 'SI') {
  cantf = "*මට මෙම වීඩියෝව සොයාගත නොහැක!*";
} else {
  cantf = "*I cant find this video!*";
}
var N_FOUND = '';
if (config.LANG === 'SI') {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var urlneed = '';
if (config.LANG === 'SI') {
  urlneed = "එය Baiscopelk වෙතින් සිංහල උපසිරැසි බාගත කරයි.";
} else {
  urlneed = "It downloads sinhala subtitle from Baiscopelk.";
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```";
} else {
  imgmsg = "```Please write a few words!```";
}
var desc = '';
if (config.LANG === 'SI') {
  desc = "Tiktok වෙතින් වීඩියෝ බාගත කරයි.";
} else {
  desc = "Download videos from Facebook.";
}
var urlneed1 = '';
if (config.LANG === 'SI') {
  urlneed1 = "*කරුණාකර Tiktok video url එකක් ලබා දෙන්න*";
} else {
  urlneed1 = "*Please give me tiktok video url..*";
}
var desc1 = '';
if (config.LANG === 'SI') {
  desc1 = "Facebook වෙතින් වීඩියෝ බාගත කරයි.";
} else {
  desc1 = "Download videos from Facebook.";
}
var urlneed2 = '';
if (config.LANG === 'SI') {
  urlneed2 = "*කරුණාකර facebook video url එකක් ලබා දෙන්න*";
} else {
  urlneed2 = "*Please give me facebook video url..*";
}
var desc5 = '';
if (config.LANG === 'SI') {
  desc5 = "ගූගල් හි අදාළ පින්තූර සෙවීම.";
} else {
  desc5 = "Search for related pics on Google.";
}
var desc2 = '';
if (config.LANG === 'SI') {
  desc2 = "unsplash.com හි අදාළ පින්තූර සෙවීම.";
} else {
  desc2 = "Search for related pics on unsplash.com.";
}
var desc3 = '';
if (config.LANG === 'SI') {
  desc3 = "pixabay.com හි අදාළ පින්තූර සෙවීම.";
} else {
  desc3 = "Search for related pics on pixabay.com.";
}
var desc4 = '';
if (config.LANG === 'SI') {
  desc4 = "bing හි අදාළ පින්තූර සෙවීම.";
} else {
  desc4 = "Searche for related pics on bing.";
}
var errt = '';
if (config.LANG === 'SI') {
  errt = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  errt = "*I couldn't find anything :(*";
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "*කරුණාකර මට Instagram url එකක් දෙන්න !!*";
} else {
  needus = "*Please give me Instagram url !!*";
}
var imgmsg1 = '';
if (config.LANG === 'SI') {
  imgmsg1 = "*කරුණාකර මට url එකක් දෙන්න !*";
} else {
  imgmsg1 = "*Please give me a url !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ලබා දී ඇති url හි desktop ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descg = "It gives desktop size screenshot of given url.";
}
var descp = '';
if (config.LANG === 'SI') {
  descp = "එය ලබා දී ඇති url හි දුරකථන ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descp = "It gives phone size screenshot of given url.";
}
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ලබා දී ඇති url හි ටැබ්ලට් ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  desct = "It gives tablet size screenshot of given url.";
}
var cant = '';
if (config.LANG === 'SI') {
  cant = "*මට තිර රුවක් ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.*";
} else {
  cant = "*I can't get a screenshot. Try again later.*";
}
var urlneed3 = '';
if (config.LANG === 'SI') {
  urlneed3 = "එය androidapksfree වෙතින් mod apps බාගත කරයි.";
} else {
  urlneed3 = "It downloads mod apps from androidapksfree.";
}
var urlneed4 = '';
if (config.LANG === 'SI') {
  urlneed4 = "එය playstore වෙතින් apps බාගත කරයි.";
} else {
  urlneed4 = "It downloads apps from playstore.";
}
const _0x31dd6e = {
  pattern: "movie",
  category: "download",
  react: '🎬',
  desc: "cinesubz & ytsmx & sinhalasub movie downloader",
  use: ".movie movie name",
  filename: __filename
};
cmd(_0x31dd6e, async (_0x2d68f7, _0x4c7f95, _0x13ed48, {
  reply: _0x42b8f8,
  isDev: _0x555a5f,
  from: _0x1d0c27,
  l: _0xf21079,
  q: _0x454011,
  prefix: _0x2e6b73
}) => {
  try {
    if (!_0x555a5f) {
      return _0x42b8f8("⚠️ ⚠️ *Contact owner to Active your number To Premium user*\nhttps://wa.me/94711453361\nPrice 200");
    }
    if (!_0x454011) {
      return await _0x42b8f8("*Please Give Me Text..! 🖊️*");
    }
    const _0x342295 = [{
      'title': "*🎬 SELECT MOVIE SITES 🎬*",
      'rows': [{
        'title': "    1",
        'rowId': _0x2e6b73 + "cinesubz " + _0x454011,
        'description': "Download in Cinesubz"
      }, {
        'title': "    2",
        'rowId': _0x2e6b73 + "sinhalasub " + _0x454011,
        'description': "Download in Sinhalsub"
      }, {
        'title': "    3",
        'rowId': _0x2e6b73 + "ytsmx " + _0x454011,
        'description': "Download in Ytsmx"
      }]
    }];
    const _0xbb7b83 = {
      url: config.LOGO
    };
    const _0x196ffc = {
      caption: "🎬 VAJIRA MD MOVIE-DL 🎬\n\n   ⏳ Search A Movie Name: " + _0x454011 + "\n📲 Search top 10 Movies\n",
      image: _0xbb7b83,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Result from Cinezubs & Ytsmx and sinhalasub. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x342295
    };
    const _0xc320de = {
      quoted: _0x4c7f95
    };
    return await _0x2d68f7.replyList(_0x1d0c27, _0x196ffc, _0xc320de);
  } catch (_0x1d0350) {
    _0x42b8f8("*ERROR !!*");
    _0xf21079(_0x1d0350);
  }
});
const _0x241440 = {
  pattern: "cinesubz",
  category: "download",
  react: '🎬',
  desc: "cinesubz & ytsmx & sinhalasub movie downloader",
  use: ".movie movie name",
  filename: __filename
};
cmd(_0x241440, async (_0x23c787, _0x15abd5, _0x37d6b3, {
  reply: _0x3acc11,
  isDev: _0x8e63ed,
  from: _0x13ce43,
  l: _0x47e05f,
  q: _0x5db5d0,
  prefix: _0x5ea8a1
}) => {
  try {
    if (!_0x8e63ed) {
      return _0x3acc11("⚠️ ⚠️ *Contact owner to Active your number To Premium user*\nhttps://wa.me/94711453361\nPrice 200");
    }
    if (!_0x5db5d0) {
      return await _0x3acc11("*Please Give Me Text..! 🖊️*");
    }
    const _0x4b715e = "https://cinesubz.co/?s=" + _0x5db5d0;
    const _0x40d858 = await axios.get(_0x4b715e);
    const _0x59ee70 = cheerio.load(_0x40d858.data);
    let _0x2b90d5 = [];
    _0x59ee70("div.content.rigth.csearch > div > div.result-item > article").each((_0x1560a2, _0x123213) => {
      _0x2b90d5.push({
        'title': _0x59ee70(_0x123213).find("div.details > div.title > a").text().trim(),
        'image': _0x59ee70(_0x123213).find("div.image > div > a > img").attr("src"),
        'link': _0x59ee70(_0x123213).find("div.image > div > a").attr("href"),
        'category': _0x59ee70(_0x123213).find("div.image > div > a span.movies").text().trim(),
        'year': _0x59ee70(_0x123213).find("div.details > div.meta > span.year").text().trim()
      });
    });
    const _0x2b11c9 = {
      quoted: _0x15abd5
    };
    if (_0x2b90d5.length < 1) {
      return await _0x23c787.sendMessage(_0x13ce43, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x2b11c9);
    }
    var _0x1d1bca = [];
    for (var _0x373128 = 0; _0x373128 < _0x2b90d5.length; _0x373128++) {
      _0x1d1bca.push({
        'title': _0x373128 + 1.1,
        'description': _0x2b90d5[_0x373128].title,
        'rowId': _0x5ea8a1 + "cinefind " + _0x2b90d5[_0x373128].link
      });
    }
    const _0x5eb0b6 = {
      title: "*🎬 ＤＯＷＮＬＯＡＤ ＳＵＢ ＦＲＯＭ ＣＩＮＥＳＵＢＺ 🎬*\n",
      rows: _0x1d1bca
    };
    const _0x58616e = [_0x5eb0b6];
    const _0x21bc74 = {
      url: _0x2b90d5[1].image
    };
    const _0x2f888d = {
      caption: "🎬 VAJIRA MD MOVIE-DL 🎬\n\n   ⏳ Search A Movie Name: " + _0x5db5d0 + "\n📲 Search top 10 Movies\n",
      image: _0x21bc74,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Result from Cinezubs & Ytsmx. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x58616e
    };
    const _0xb58a64 = {
      quoted: _0x15abd5
    };
    return await _0x23c787.replyList(_0x13ce43, _0x2f888d, _0xb58a64);
  } catch (_0x1462f9) {
    _0x3acc11("*ERROR !!*");
    _0x47e05f(_0x1462f9);
  }
});
const _0x1ed3c7 = {
  pattern: "ytsmx",
  react: '📑',
  category: "download",
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x1ed3c7, async (_0x5a2697, _0x33883c, _0xf82881, {
  from: _0x319633,
  prefix: _0x385c52,
  q: _0x3e1694,
  l: _0xb1000e,
  isDev: _0x1f741a,
  reply: _0x56a921
}) => {
  try {
    if (!_0x1f741a) {
      return _0x56a921("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x3e1694) {
      return await _0x56a921("*Please Give Me Text..! 🖊️*");
    }
    const _0x1a88aa = "https://yts.mx/browse-movies/" + _0x3e1694 + "/all/all/0/latest/0/all";
    const _0x3f71c3 = await axios.get(_0x1a88aa);
    const _0xdf87cc = cheerio.load(_0x3f71c3.data);
    let _0xf920e9 = [];
    _0xdf87cc("section > div.row > div").each((_0x53d83f, _0x5d5bea) => {
      _0xf920e9.push({
        'title': _0xdf87cc(_0x5d5bea).find("div.browse-movie-bottom > a").text(),
        'year': _0xdf87cc(_0x5d5bea).find("div.browse-movie-bottom > div").text(),
        'link': _0xdf87cc(_0x5d5bea).find('a').attr("href"),
        'image': _0xdf87cc(_0x5d5bea).find("a > figure > img").attr("src"),
        'rating': _0xdf87cc(_0x5d5bea).find("a > figure > figcaption > h4.rating").text(),
        'danne': _0xdf87cc(_0x5d5bea).find("a > figure > figcaption > h4").eq(1).text(),
        'danne1': _0xdf87cc(_0x5d5bea).find("a > figure > figcaption > h4").eq(2).text()
      });
    });
    const _0x356158 = {
      quoted: _0xf82881
    };
    if (_0xf920e9.length < 1) {
      return await _0x5a2697.sendMessage(_0x319633, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x356158);
    }
    var _0x4dc44f = [];
    for (var _0x5909d3 = 0; _0x5909d3 < _0xf920e9.length; _0x5909d3++) {
      _0x4dc44f.push({
        'title': _0x5909d3 + 1,
        'description': _0xf920e9[_0x5909d3].title + '+' + _0xf920e9[_0x5909d3].year,
        'rowId': _0x385c52 + "ytmx " + _0xf920e9[_0x5909d3].link
      });
    }
    const _0x1329fa = {
      title: "_[Result from ytsmx.]_",
      rows: _0x4dc44f
    };
    const _0x10e216 = [_0x1329fa];
    const _0x3a88eb = {
      url: "https://pomf2.lain.la/f/fq5tvyo.jpg"
    };
    const _0x2e9388 = {
      caption: "🎬 VAJIRA MD MOVIE-DL 🎬\n\n   ⏳ Search A Movie Name: " + _0x3e1694 + "\n📲 Search top 10 Movies\n",
      image: _0x3a88eb,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Result from ytsmx. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x10e216
    };
    const _0x137e26 = {
      quoted: _0xf82881
    };
    return await _0x5a2697.replyList(_0x319633, _0x2e9388, _0x137e26);
  } catch (_0x372349) {
    _0x56a921("*ERROR !!*");
    _0xb1000e(_0x372349);
  }
});
const _0x207012 = {
  pattern: "sinhalasub",
  react: '📑',
  category: "search",
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x207012, async (_0x9d3b3f, _0x4b482f, _0xab8b7c, {
  from: _0x55cc72,
  prefix: _0x9693aa,
  q: _0x3f2176,
  l: _0x32efb8,
  isDev: _0x2c40c6,
  reply: _0x32fafc
}) => {
  try {
    if (!_0x2c40c6) {
      return _0x32fafc("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x3f2176) {
      return await _0x32fafc("*Please Give Me Text..! 🖊️*");
    }
    const _0x501850 = "https://sinhalasub.lk/?s=" + encodeURIComponent(_0x3f2176);
    const {
      data1: _0x2c5504
    } = await axios.get(_0x501850);
    const _0x1de174 = cheerio.load(_0x2c5504);
    const _0x1146b1 = [];
    _0x1de174(".result-item").each((_0x48945b, _0x2c05a1) => {});
    const _0x7796d7 = {
      quoted: _0xab8b7c
    };
    if (_0x1146b1.length < 1) {
      return await _0x9d3b3f.sendMessage(_0x55cc72, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x7796d7);
    }
    var _0x51256a = [];
    for (var _0x968d21 = 0; _0x968d21 < _0x1146b1.length; _0x968d21++) {
      _0x51256a.push({
        'title': _0x968d21 + 1,
        'description': _0x1146b1[_0x968d21].title + '+' + _0x1146b1[_0x968d21].year,
        'rowId': _0x9693aa + "subin " + _0x1146b1[_0x968d21].link
      });
    }
    const _0x46d6b0 = {
      title: "_[Result from sinhalasub.]_",
      rows: _0x51256a
    };
    const _0x3b5c80 = [_0x46d6b0];
    const _0x26075e = {
      url: "https://github.com/kushansewmina1234/DARKSHAN-DATA/blob/main/media/image/IMG-20240907-WA0009.jpg?raw=true"
    };
    const _0x1cc645 = {
      caption: "🎬 VAJIRA MD MOVIE-DL 🎬\n\n   ⏳ Search A Movie Name: " + _0x3f2176 + "\n📲 Search top 10 Movies\n",
      image: _0x26075e,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Result from sinhalasub. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x3b5c80
    };
    const _0xbbcdb9 = {
      quoted: _0xab8b7c
    };
    return await _0x9d3b3f.replyList(_0x55cc72, _0x1cc645, _0xbbcdb9);
  } catch (_0x277447) {
    _0x32fafc("*ERROR !!*");
    _0x32efb8(_0x277447);
  }
});
const _0x37a106 = {
  pattern: "sub",
  category: "download",
  react: '🎬',
  desc: "Baiscope & subz & zoom movie downloader",
  use: ".sub movie name",
  filename: __filename
};
cmd(_0x37a106, async (_0x4dba3c, _0x43a842, _0x544c22, {
  reply: _0x125b35,
  isDev: _0x3d183e,
  from: _0x4f3e61,
  l: _0x77317d,
  q: _0x10ec05,
  prefix: _0x42cd43
}) => {
  try {
    if (!_0x10ec05) {
      return await _0x125b35("*Please Give Me Text..! 🖊️*");
    }
    const _0xa8d16e = "https://sinhala-subtitles.com/?s=" + _0x10ec05;
    const _0x57f0fd = await axios.get(_0xa8d16e);
    var _0x16fae2 = cheerio.load(_0x57f0fd.data);
    const _0xffe311 = [];
    _0x16fae2("article.l-post.grid-base-post.grid-post").each((_0x5b6018, _0x118057) => {
      _0xffe311.push({
        'link': _0x16fae2(_0x118057).find('a').attr("href"),
        'image': _0x16fae2(_0x118057).find("span").attr("data-bgsrc"),
        'title': _0x16fae2(_0x118057).find('a').attr("title"),
        'date': _0x16fae2(_0x118057).find("time.post-date").text(),
        'desc': _0x16fae2(_0x118057).find('p').text()
      });
    });
    var _0x30a237 = "https://subz.lk/?s=" + _0x10ec05;
    var _0xd57094 = await axios.get(_0x30a237);
    var _0x5efa6d = cheerio.load(_0xd57094.data);
    const _0x251966 = [];
    _0x5efa6d("div.col-lg-3.col-md-6.col-sm-12").each((_0x1d5905, _0x324cc3) => {
      _0x251966.push({
        'title': _0x5efa6d(_0x324cc3).find("a.font-bold.text-wrap.text-break.text-justify").text(),
        'link': _0x5efa6d(_0x324cc3).find('a').attr("href"),
        'image': _0x5efa6d(_0x324cc3).find("img").attr("src"),
        'emovies': _0x5efa6d(_0x324cc3).find("a.text-white").attr("href")
      });
    });
    const _0x5ae55c = "https://zoom.lk/?s=" + _0x10ec05;
    const _0x23b584 = await axios.get(_0x5ae55c);
    const _0x3f7a8c = cheerio.load(_0x23b584.data);
    let _0x570ee0 = [];
    _0x3f7a8c("div.td-pb-span8.td-main-content > div > div.td_module_16.td_module_wrap.td-animation-stack").each((_0x17f4be, _0x40585f) => {
      _0x570ee0.push({
        'time': _0x3f7a8c(_0x40585f).find("div.item-details > div > span > time").text(),
        'title': _0x3f7a8c(_0x40585f).find("div.item-details > h3 > a").text(),
        'author': _0x3f7a8c(_0x40585f).find("div.item-details > div > span > a").text(),
        'desc': _0x3f7a8c(_0x40585f).find("div.item-details > div.td-excerpt").text(),
        'comments': _0x3f7a8c(_0x40585f).find("div.item-details > div > span.td-module-comments a").text(),
        'image': _0x3f7a8c(_0x40585f).find("div.td-module-thumb > img").attr("src"),
        'link': _0x3f7a8c(_0x40585f).find("div.item-details > h3 > a").attr("href")
      });
    });
    const _0xca6bd2 = {
      quoted: _0x43a842
    };
    if (_0xffe311.length < 1) {
      return await _0x4dba3c.sendMessage(_0x4f3e61, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0xca6bd2);
    }
    const _0x1aeedd = {
      quoted: _0x43a842
    };
    if (_0x251966.length < 1) {
      return await _0x4dba3c.sendMessage(_0x4f3e61, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x1aeedd);
    }
    const _0x5c318b = {
      quoted: _0x43a842
    };
    if (_0x570ee0.length < 1) {
      return await _0x4dba3c.sendMessage(_0x4f3e61, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x5c318b);
    }
    var _0x51e37f = [];
    var _0x2c8df2 = [];
    var _0x3010e3 = [];
    for (var _0x14fb1e = 0; _0x14fb1e < _0xffe311.length; _0x14fb1e++) {
      _0x51e37f.push({
        'title': _0x14fb1e + 1.1,
        'description': _0xffe311[_0x14fb1e].title,
        'rowId': _0x42cd43 + "ssdl " + _0xffe311[_0x14fb1e].link
      });
    }
    for (var _0x14fb1e = 0; _0x14fb1e < _0x251966.length; _0x14fb1e++) {
      _0x2c8df2.push({
        'title': _0x14fb1e + 1.2,
        'description': _0x251966[_0x14fb1e].title,
        'rowId': _0x42cd43 + "subzdl " + _0x251966[_0x14fb1e].link
      });
    }
    for (var _0x14fb1e = 0; _0x14fb1e < _0x570ee0.length; _0x14fb1e++) {
      _0x3010e3.push({
        'title': _0x14fb1e + 1.3,
        'description': _0x570ee0[_0x14fb1e].title,
        'rowId': _0x42cd43 + "zoomdl " + _0x570ee0[_0x14fb1e].link
      });
    }
    const _0x48f189 = {
      title: "◈ ━━━━━━━━━━━━━━━━━\n\n*🎬 ＤＯＷＮＬＯＡＤ ＳＵＢ ＦＲＯＭ ＳＩＮＨＡＬＡ.Ｓ 🎬*\n",
      rows: _0x51e37f
    };
    const _0x57c952 = {
      title: "◈ ━━━━━━━━━━━━━━━━━\n\n*🎬 ＤＯＷＮＬＯＡＤ ＳＵＢ ＦＲＯＭ ＳＵＢＺ 🎬*\n",
      rows: _0x2c8df2
    };
    const _0x2fbe66 = {
      title: "◈ ━━━━━━━━━━━━━━━━━\n\n*🎬 ＤＯＷＮＬＯＡＤ ＳＵＢ ＦＲＯＭ ＺＯＯＭ 🎬*\n",
      rows: _0x3010e3
    };
    const _0x2dd664 = [_0x48f189, _0x57c952, _0x2fbe66];
    const _0x48f0a1 = {
      url: _0xffe311[1].image
    };
    const _0x260c46 = {
      caption: "🎬 VAJIRA MD MOVIE-DL 🎬\n\n   ⏳ Search A Movie Name: " + _0x10ec05 + "\n📲 Search top 10 Movies\n",
      image: _0x48f0a1,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Result from Cinezubs & Ytsmx. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x2dd664
    };
    const _0x4facc9 = {
      quoted: _0x43a842
    };
    return await _0x4dba3c.replyList(_0x4f3e61, _0x260c46, _0x4facc9);
  } catch (_0x4abb31) {
    _0x125b35("*ERROR !!*");
    _0x77317d(_0x4abb31);
  }
});
const _0x2d289a = {
  pattern: "zoomdl",
  react: '📑',
  category: '',
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x2d289a, async (_0xf53121, _0x32e465, _0xd957e1, {
  from: _0x25c77a,
  prefix: _0x28285b,
  q: _0x13bc71,
  l: _0x226b52,
  isDev: _0x495c28,
  reply: _0x2bd3c8
}) => {
  try {
    if (!_0x13bc71) {
      return await _0x2bd3c8("*Please Give Me Text..! 🖊️*");
    }
    const _0x4bc58d = await axios.get(_0x13bc71);
    const _0x1c9646 = cheerio.load(_0x4bc58d.data);
    const _0x2efc39 = _0x1c9646("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_title.tdi_60.tdb-single-title.td-pb-border-top.td_block_template_17 > div > h1").text();
    const _0x4d85d7 = _0x1c9646("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_67.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > span").text();
    const _0x5dba80 = _0x1c9646("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_70.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > time").text();
    const _0x59b147 = _0x1c9646("#tdi_81 > div > div.vc_column.tdi_84.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_single_content.tdi_86.td-pb-border-top.td_block_template_17.td-post-content.tagdiv-type > div > p > a > small").text();
    const _0x3bf2c8 = _0x1c9646("div.tdb-block-inner.td-fix-index > p > a").attr("href");
    const _0xcd0ce5 = "📃 *Title:* " + _0x2efc39 + "\n\n🔗 *Link:* " + _0x3bf2c8 + "\n\n📅 *Year:* " + _0x5dba80 + "\n\n💫 *Size:* " + _0x59b147 + "\n\n⏳ *Views:* " + _0x4d85d7 + "\n";
    const _0x154881 = [{
      'title': "*🎬 SUB-SEARCH-SITE 🎬*",
      'rows': [{
        'title': "    1.1",
        'rowId': _0x28285b + ("zip " + _0x3bf2c8 + '|' + _0x2efc39),
        'description': "Download in " + _0x59b147
      }]
    }];
    const _0x378651 = {
      text: _0xcd0ce5,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Search By zoom",
      buttonText: "*🔢 Reply below number*",
      sections: _0x154881
    };
    const _0x43588d = {
      quoted: _0xd957e1
    };
    return await _0xf53121.replyList(_0x25c77a, _0x378651, _0x43588d);
  } catch (_0x26f9fe) {
    _0x2bd3c8("*ERROR !!*");
    _0x226b52(_0x26f9fe);
  }
});
const _0x18c708 = {
  pattern: "subzdl",
  react: '📑',
  category: '',
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x18c708, async (_0x322793, _0x16525b, _0x5c5fcb, {
  from: _0x48a76d,
  prefix: _0x4514d2,
  q: _0x3811a1,
  l: _0x9c7507,
  isDev: _0x2166d9,
  reply: _0x6c41d9
}) => {
  try {
    if (!_0x3811a1) {
      return await _0x6c41d9("*Please Give Me Text..! 🖊️*");
    }
    var _0x3f6c16 = await axios.get(_0x3811a1);
    var _0x42a64c = cheerio.load(_0x3f6c16.data);
    const _0x348a79 = _0x42a64c("h1.text-center.text-danger.h4").text();
    const _0x291d57 = _0x42a64c("img.rounded.mx-auto.d-block.shadow-2-strong.mb-0.wp-post-image").attr("src");
    const _0x434b9b = _0x42a64c("a.btn.btn-outline-success.fw-bold").attr("href");
    const _0x5c4804 = [{
      'title': "*🎬 SUB-SEARCH-SITE 🎬*",
      'rows': [{
        'title': "    1.1",
        'rowId': _0x4514d2 + ("zip " + _0x434b9b + '|' + _0x348a79),
        'description': "Download Substitles"
      }]
    }];
    const _0x42402d = {
      url: _0x291d57
    };
    const _0x529f2a = {
      caption: '',
      image: _0x42402d,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Search By subz",
      buttonText: "*🔢 Reply below number*",
      sections: _0x5c4804
    };
    const _0x5a8dad = {
      quoted: _0x5c5fcb
    };
    return await _0x322793.replyList(_0x48a76d, _0x529f2a, _0x5a8dad);
  } catch (_0x46490c) {
    _0x6c41d9("*ERROR !!*");
    _0x9c7507(_0x46490c);
  }
});
const _0x5656fd = {
  pattern: "ssdl",
  react: '📑',
  category: '',
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x5656fd, async (_0x128795, _0x44f0e7, _0x507f98, {
  from: _0x413684,
  prefix: _0x333a3a,
  q: _0xa2002c,
  l: _0x1279a8,
  isDev: _0x584e02,
  reply: _0x28735b
}) => {
  try {
    if (!_0xa2002c) {
      return await _0x28735b("*Please Give Me Text..! 🖊️*");
    }
    const _0x5928db = await axios.get(_0xa2002c);
    const _0x1e4c7e = cheerio.load(_0x5928db.data);
    const _0x5459fe = _0x1e4c7e("h1.is-title.post-title").text();
    const _0x1895e4 = _0x1e4c7e("span.meta-item.date > time.post-date").text();
    const _0x44f9dc = _0x1e4c7e("a.image-link.media-ratio.ar-bunyad-main").attr("href");
    const _0x46f609 = _0x1e4c7e('p').text();
    const _0x3ec66f = _0x1e4c7e("figure > a").attr("href");
    const _0x5023ca = [{
      'title': "*🎬 MOVIE-SEARCH-SITE 🎬*",
      'rows': [{
        'title': "    1.1",
        'rowId': _0x333a3a + ("zip " + _0x3ec66f + '|' + _0x5459fe),
        'description': "Download in sinhala-subtitles"
      }]
    }];
    const _0x2e6ce1 = {
      url: _0x44f9dc
    };
    const _0x1892c2 = {
      caption: "📃 *Title:* " + _0x5459fe + "\n\n🔗 *Link:* " + _0x3ec66f + "\n\n📅 *Year:* " + _0x1895e4 + "\n\n⏳ *Views:* " + _0x46f609 + "\n",
      image: _0x2e6ce1,
      footer: "MOVIE DOWNLOADER BY VAJIR MD",
      title: "Search By sinhala-subtitles",
      buttonText: "*🔢 Reply below number*",
      sections: _0x5023ca
    };
    const _0x1f15dc = {
      quoted: _0x507f98
    };
    return await _0x128795.replyList(_0x413684, _0x1892c2, _0x1f15dc);
  } catch (_0x245aa1) {
    _0x28735b("*ERROR !!*");
    _0x1279a8(_0x245aa1);
  }
});
const _0x196685 = {
  pattern: "zip",
  react: '📥',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x196685, async (_0x43999b, _0x3e8419, _0x389cf2, {
  from: _0x15584d,
  q: _0xe202cb,
  isDev: _0x45f0bd,
  reply: _0x97e2f2
}) => {
  if (!_0xe202cb) {
    return await _0x97e2f2("*Please provide a direct URL!*");
  }
  try {
    const _0x121b89 = _0xe202cb.split('|')[0];
    const _0x5b5365 = _0xe202cb.split('|')[1] || "vajira_md_sub_dl_system";
    var _0xca9f80 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x56a3c2 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x3cfa67
    } = await _0x43999b.sendMessage(_0x15584d, _0x56a3c2);
    for (let _0x5eae74 = 0; _0x5eae74 < _0xca9f80.length; _0x5eae74++) {
      const _0x3936e1 = {
        text: _0xca9f80[_0x5eae74],
        edit: _0x3cfa67
      };
      await _0x43999b.sendMessage(_0x15584d, _0x3936e1);
    }
    const _0x13396b = {
      'document': await getBuffer(_0x121b89),
      'caption': "*🎬 VAJIRA MD SUB-DL 🎬*",
      'mimetype': "VAJIRA MD SUB DL",
      'fileName': _0x5b5365 + ".zip"
    };
    const _0xe04d5d = {
      quoted: _0x3e8419
    };
    await _0x43999b.sendMessage(_0x15584d, _0x13396b, _0xe04d5d);
    const _0x4bd750 = {
      text: '✅',
      key: _0x3e8419.key
    };
    const _0x8fba85 = {
      react: _0x4bd750
    };
    await _0x43999b.sendMessage(_0x15584d, _0x8fba85);
  } catch (_0x6a6cdf) {
    console.error("Error fetching or sending", _0x6a6cdf);
    const _0x3dbdb9 = {
      quoted: _0x3e8419
    };
    await _0x43999b.sendMessage(_0x15584d, "*Error fetching or sending *", _0x3dbdb9);
  }
});
const _0x180b5a = {
  pattern: "subin",
  react: '📑',
  category: '',
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x180b5a, async (_0x43ad93, _0x302ea7, _0x35ec0c, {
  from: _0x3a8f1e,
  prefix: _0x48d825,
  q: _0x4c406d,
  l: _0xbc711d,
  isDev: _0x398be2,
  reply: _0x4771cb
}) => {
  try {
    if (!_0x398be2) {
      return _0x4771cb("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x4c406d) {
      return await _0x4771cb("*Please Give Me Text..! 🖊️*");
    }
    const _0x467575 = await axios.get(_0x4c406d);
    const _0x22be75 = cheerio.load(_0x467575.data);
    const _0x28d856 = _0x22be75(".sheader").first();
    const _0x378841 = _0x28d856.find(".data .head h1").text();
    const _0x1d91ae = _0x28d856.find(".poster img").attr("src");
    const _0x5b845a = _0x28d856.find(".extra .date").text().trim();
    const _0x235105 = _0x28d856.find(".extra .runtime").text().trim();
    const _0xeff587 = _0x22be75("#info").first();
    const _0x30736a = _0xeff587.find("#repimdb strong").text().trim();
    let _0x1114c9 = [];
    _0x22be75("#download > div > div > table > tbody > tr").each((_0x29cc87, _0x1c2c9e) => {
      _0x1114c9.push({
        'quality': _0x22be75(_0x1c2c9e).find("td > strong").text(),
        'size': _0x22be75(_0x1c2c9e).find('td').eq(2).text(),
        'link': _0x22be75(_0x1c2c9e).find("td > a").attr("href")
      });
    });
    const _0x3a526a = await axios.get(_0x1114c9[0].link);
    const _0x29e33c = cheerio.load(_0x3a526a.data);
    var _0x3f8adc = _0x29e33c("#link").attr("href");
    const _0x3f2f4b = _0x3f8adc.split("https://pixeldrain.com/u/")[1];
    const _0xae21cd = "https://pixeldrain.com/api/file/" + _0x3f2f4b;
    const _0x463567 = await axios.get(_0x1114c9[1].link);
    const _0x12f8fe = cheerio.load(_0x463567.data);
    var _0x1fb660 = _0x12f8fe("#link").attr("href");
    const _0x18d841 = _0x1fb660.split("https://pixeldrain.com/u/")[1];
    const _0x5cdb49 = "https://pixeldrain.com/api/file/" + _0x18d841;
    const _0x581292 = await axios.get(_0x1114c9[2].link);
    const _0x3decbd = cheerio.load(_0x581292.data);
    var _0x584cf5 = _0x3decbd("#link").attr("href");
    const _0x339cc8 = _0x584cf5.split("https://pixeldrain.com/u/")[1];
    const _0x19c0af = "https://pixeldrain.com/api/file/" + _0x339cc8;
    const _0x5ca49b = [{
      'title': "*🎬 DOWN MKV TYPE 🎬*",
      'rows': [{
        'title': "    1.1",
        'rowId': _0x48d825 + ("mkv " + _0x19c0af + '|' + _0x378841),
        'description': "Download in 480p"
      }, {
        'title': "    1.2",
        'rowId': _0x48d825 + ("mkv " + _0x5cdb49 + '|' + _0x378841),
        'description': "Download in 720p"
      }, {
        'title': "    1.3",
        'rowId': _0x48d825 + ("mkv " + _0xae21cd + '|' + _0x378841),
        'description': "Download in 1080p"
      }]
    }, {
      'title': "*🎬 DOWN MP4 TYPE 🎬*",
      'rows': [{
        'title': "    2.1",
        'rowId': _0x48d825 + ("mp4 " + _0x19c0af + '|' + _0x378841),
        'description': "Download in 480p"
      }, {
        'title': "    2.2",
        'rowId': _0x48d825 + ("mp4 " + _0x5cdb49 + '|' + _0x378841),
        'description': "Download in 720p"
      }, {
        'title': "    2.3",
        'rowId': _0x48d825 + ("mp4 " + _0xae21cd + '|' + _0x378841),
        'description': "Download in 1080p"
      }]
    }];
    const _0x199460 = {
      url: _0x1d91ae
    };
    const _0x100c94 = {
      caption: "📃 *Title:* " + _0x378841 + "\n\n🔗 *Link:* " + _0x4c406d + "\n\n📅 *Year:* " + _0x5b845a + "\n\n💫 *Rating:* " + _0x30736a + "\n\n⏳ *Duration:* " + _0x235105 + "\n",
      image: _0x199460,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Search By firemovieshub",
      buttonText: "*🔢 Reply below number*",
      sections: _0x5ca49b
    };
    const _0x4ae19f = {
      quoted: _0x35ec0c
    };
    return await _0x43ad93.replyList(_0x3a8f1e, _0x100c94, _0x4ae19f);
  } catch (_0x1050bc) {
    _0x4771cb("*ERROR !!*");
    _0xbc711d(_0x1050bc);
  }
});
function _0xfab2() {
  const _0x555d1b = ['find', " ꜱɪᴢᴇ", "ＳＵＢＺ ", " ᴡʜᴀᴛ", "our p", 'ink:*', "DL\n\n\n", 'CpawT', "ube V", "  \n _", 'LgDaI', "tn1d ", 'div.a', 'ᴜᴘʟᴏᴀ', 'p?lan', '*Erro', '@whis', " 𝗧𝗘𝗔𝗠", 'Udyjw', 'hrEHH', "on ke", " is a", "B DOW", "You c", 'Ratin', 'FKdKy', 'gCTZY', 'ckets', 'XhstR', 'xahUu', 'HrXax', " must", 'xtNbL', 'xPhdF', "e fro", 'nter.', 'dQYFU', 'gmVpl', 'o.jpg', 'lity-', 'rrFUY', '0ee8-', 'ccess', 'dZnBy', 'Snmlb', 'NXIfg', 'ory', "iles ", 'vmois', "TEAM ", "එය pl", '██▒▒》', "* ✨\n│", 'Deskt', "* \n\n*", 'ary', "or se", 'mMzQW', '20(SS', '@mrni', 'LLQmB', 'OCahD', '.mp3', 't-cen', 'wkKrl', 'mMWVM', 'YUmlw', 'jMGNc', 'base-', 'QYJkT', "\n\n*© ", 'avgcn', " ᴜsᴇ ", 'xFbBC', 'cxXQw', '0&exp', 'RcmHx', 'Nxmfa', " Yout", 'CufHe', 'dmod', "dmod ", 'QJIYT', 'IbrQp', '/bail', "ect: ", "*මට ත", 'JtTDm', 'iles', 'rmat.', 'Unexp', 'QEfUO', 'SAgtR', 'SGCbj', 'log', 'ADER*', 'ter', 'QADRk', 'dsFrP', 'EhBZz', 'jjcTU', "s:* ", 'yQBDu', 'MYzvL', 'user', 'cipan', 'B-SEA', 'save', 'svuyQ', 'HAvto', "rice ", "ate t", 'RCH-S', 'b/apk', 'unt', "rl !!", 'MmUbc', "Use ", 'googl', 'azzPt', 'LyWtk', 'docum', "MD FB", "\nMess", "s vid", 'Qhxqn', 'ගූගල්', "_17 >", 'Detai', 'inbox', "\n ▫ ғ", 'NPtcQ', "ion: ", 'p.qua', 'iv.re', 'tWwZc', 'key.', 'pastp', "ʀᴇᴇ ᴇ", 'UOKgJ', 'then', "\n\n💫 *", "r !!*", "m Cin", 'fbsdd', 'IComp', 'pApQX', 'vZwZu', 'table', 'මටනම්', 'pushN', 'VGIxS', 'itles', "mW ", " මෙම ", 'ock-i', " යාම ", 'd-tor', 'IFgdY', "🚀 Tit", 'XsypG', 'CBeNs', "s. Pl", 'WmtTQ', 'DIXEP', 'QCDTk', 'CuZnH', "ows\"", 'MPmSp', " addi", 'zcyRi', '-titl', 'MLVCh', "ᴄᴀʟ ᴄ", 'LXsCQ', 'DtIkU', '23/1:', 'seedr', 'btn.k', 'XwHVj', 'vnUqU', 'unzPB', 'trans', "m pix", 'com', "===\n\n", "Ｄ ＳＵＢ", 'UTMCE', 'lect*', "ed.\n ", 'dlYze', 'dcMLH', 'oo8oB', " apk ", 'nt-ce', " or s", 'ptHaL', 'couKT', "rom y", 'apkin', '.td-p', 'LupVY', 'TJdCX', 'und.', "ub. 📲", 'fLJhb', 'amods', 'dlPbS', 'ING..', 'OsGOW', 'son', 'ntpoD', 'link>', 'WywCM', 'paper', 'mPOsK', 'psFoI', '://po', 'KUWCs', "1 Saf", 'WsGUN', 'a_md_', 'wQQHB', 'PjVFK', 'XCIkx', 'd-blo', 'xiUHs', 'YMGmF', "iv > ", 'ysXYX', 'NolzZ', 'TIKTO', "e etc", "\n\n===", 'thub.', "ed to", "a .co", 'SzNAA', "se\n Y", 'abay.', 'nlgWQ', 'flEDV', 'reryD', 'CmcAU', "le:* ", 'YLwXY', 'gWcbw', 'loASz', "n Cin", 'QdWxY', 'igure', "💬 Ehi", 'yOjlf', 'YDkMV', 'HpGPM', 'wGxNS', " 🎬*", '```Pl', 'srdnL', 'hread', 'pjLLr', ".ss <", 'nth-c', 'conve', "m pla", 'LTiqM', 'oadBu', 'IojId', 'inds', " tbod", 'umber', " VIDE", 'dkkGJ', 'yxYgj', 'yxafi', 'qcbxu', 'Bzizl', 'aJFpG', 'LRoLA', 'oZmQu', 'JwHZm', 'Tvkrr', "ාරයේ ", "ity a", 'TShvD', 'mag', 'dQtLX', 'otmac', 'cLGpp', 'VqPrf', 'PcpXe', '𝗘𝗦𝗨𝗕𝗭', 'liwBO', 'coffe', 'YjmvC', 'EPlhm', 'yyelm', 'dxQVR', 'IZGYV', 'jtsEJ', 'CpTRY', 'httpi', 'com/V', " erro", 'ZdrKm', " ඔබගේ", "tube ", 'YzXQJ', 'MZuyY', "ʏ ᴛᴄ ", '═•∞•═', 'lg.bt', 'oVywi', 'LOncS', 'pEriF', "from ", " h4.r", 'FeNiw', "ideo ", "《 █▒▒", 'DMPCM', " defl", 'ʏʙᴇʀꜱ', 'gdzQl', "𝙳 🦄..", '.flex', "𝗧𝗔𝗜𝗟 ", "to go", 'GYkQS', 'bpJMq', 'umeCF', "dapk ", 'Tkbvp', '../li', 'ovies', 'aqPxy', 'QbtKt', 'rable', 'xlgf', 'dnTtO', 'KWTGr', 'MdeKm', '.btn-', 'Xvviy', 'icon', '.wpap', "ehi ", "*\n *♓", 'MI-MD', 'zNWYe', 'ne.wp', "*\n   ", 'pAsAp', 'Faile', 'AwNcD', 'TQfxe', 'nbdyX', 'mimet', "PE 🪫", "ease ", " Desc", 'sZaSA', 'qkyLP', 'la-su', 'QWvjC', 'MhZsT', 'UexQY', 'indtv', 'te_17', 'wASmw', "L 🔱", "එක ht", 'KjCdH', 'droid', 'rende', 'CoaTc', "e mes", '5.mt-', 'NoTDB', 'stack', 'SEKaq', 'sMogm', " *Que", 'zYFiT', 'ad.do', 'bdDSC', 'RwylA', 'cinel', 'cFQsl', 'SwoRT', "හි අද", 'mekil', 'KvCfD', 'ePUsB', 'IFMZY', 'r23/1', 'UboVh', 'inary', "D` QU", 'OmxrE', 'wwheE', 'yxpuF', 'oHrFN', 'bCbAl', 'SoUAS', 'hmndV', 'talle', "ou ca", 'categ', 'zoom', 'fCBzm', 'tems-', "> h1", '/all/', 'yabSb', 'BAzOA', 'qzYTH', 'tHvBN', 'THoau', 'NmfMf', " API.", '.wiki', 'nyad-', 'KMlVO', 'VTJYD', 'RCqoq', "one r", 'subje', "✅ _Su", " හි අ", 'ZSOwE', 'cwxcw', 'EHI_I', 'uwLMI', 'tigYF', 'IWeKW', "want ", 'Xywzc', 'HGGkR', 'CwlxF', 'NiDQW', 'gVKQE', 'cinef', 'xt-ju', "hi fi", 'GDPbo', 'a.tex', 'jqUuO', "ge එක", 'KNaxC', 'ar-bu', 'quMnk', 'seNTE', '.chec', 'alery', "*🎬 VA", "to se", 'bXgTj', 'cQOjr', 'OvSbB', 'JID', 'OfcIc', 'tpinj', 'LrKoM', 'VPTZg', 'QBnGU', 'p4_hd', "ng AP", 'snrNr', 'Messa', 'uhFeT', "*© ᴛᴇ", "ated ", 'bmrSl', "rl හි", 'jhQsn', " අප බ", "NEXT ", "hild ", '▒▒▒▒▒', 'BabOv', "📑 *Ti", 'VXtPH', 'LlfCm', 'RqFVM', 'OoYNX', 'le_co', 'MreNM', "rom G", 'iEsUq', 'zTZkG', "\n📄 Da", 'pp1', ".ehi ", 'pkRIs', 'qDgNz', "═╯\n", 'di_64', 'tFeFs', 'FOgII', 'p.td-', 'yTmqq', 'sohRZ', " goog", 'vlbSF', 'IQVcL', 'BCNMa', "ide m", 'fZXGe', 'wnloa', 'ɴ-ɪᴢᴜ', '://ra', 'cBndc', "SD TY", " MB o", 'ECCyb', 'yfKWI', 'SlJdz', '@sl-c', 'lvJaG', 'TwODc', 'MOVIE', 'DhkvN', 'aieZq', 'arch', 'yts_', 'NSHOT', 'PscRe', " > a", "\n\n\n🧬 ", 'EvKtH', 'vYWBm', "    4", 'UBZ.C', 'empty', 'NmUYT', 'repea', '7/kop', "d Dat", 'male', 'dfOAu', 'FurWu', 'EYWto', "ata >", 'dia-r', 'XopvX', 'SfAzY', 'YGvTm', 'href', 'KRohT', 'write', "n't g", " What", "d wik", 'conte', 'Pqrhf', "ion >", "l > h", 'messa', "ch we", 'ාකිරී', 'anath', 'nWdpZ', "්සාහ ", 'CQFOJ', "sage ", 'outub', "ng in", 'acZPv', "e Fem", 'cEviE', "\"Chro", "ᴅᴏɴ'ᴛ", 'ZtxHt', "ot of", "ly be", 'XpmRX', "itle ", 'NcvPK', 'fdYQP', "\n🔮 𝗖𝗔", 'react', 'ywWln', '.wpb_', 'link.', 'RtyFz', "nter ", 'jyrde', 'RamWc', 'TFKEw', '_row_', 'CeYiM', 'nProp', " a va", 'mlkHA', 'DBKTp', 'BGpUD', "type ", "ම් හෝ", 'euGJF', "ad li", 'ion:*', 'FileS', "ext >", 'දෙයි.', "xtra ", 'eoqec', "n use", 'KMomx', 'VFIXr', " ᴠᴀᴊɪ", "ds mo", 'sVAum', 'div.m', 'nCiqQ', '://cd', "ූර සෙ", 'WyRVp', 'zoMJj', "TIME ", 'nt-ty', 'UbqRi', 'pack', 'ded;c', 'ෙතින්', '0.8', 'ating', 'whats', 'stron', 'mega.', 'ol-xl', " ᴅᴇᴠᴇ", '?page', 'VxGwP', 'eacaa', 'bXgDX', 'PASTP', 'ihgpc', 'KYLIN', 'ArPDN', 'h5.ca', 'GVRZK', 'hHwot', "ect M", 'bs.]_', 'cXTev', "_ \n _", 'ᴄʏʙᴇʀ', 'kwepS', 'MfPuW', 'MQIXg', 'time.', 'WMUtb', "56 > ", 'delet', 'api', 'zqxNK', "ිර රු", 'czAmc', 'hasil', 'pAXgT', "r app", 'jxGpd', " Qual", 'l-md-', 'plays', 'ize', 'HBjzl', 'oRgTk', 'JqxxX', 'tqFDD', 'rXvgu', 'Ttefc', 'VQYRE', "the v", "Next ", 'FLyeN', 'mHLmj', 'JGnRq', "𝗦𝗨𝗕𝗭 ", 'oIxlT', "l : ", 'oMqYn', "MD TI", 'oKQBq', 'apk1', 'dontA', 'sub.l', 'YQQVs', 'com/', 'TvAeO', 'XRVzc', 'cZbkn', "wn im", 'ttQrc', 'aleSt', 'Jbgvu', '.andr', " li", 'JWYvu', 'XcILw', "ytmx ", 'ZAMwn', 'press', "e pic", 'cines', "ක් ලබ", 'fgSEi', 'EruZM', 'ODopv', '-exce', 'NRnsq', 'fvIym', 'cxlOc', 'Darln', 'VFgtF', 'FXHtr', 'small', 'EOiEs', 'VAJIR', 'push', 'SQzpT', 'modap', 'NGlPj', 'IHXvh', " mia ", 'EHI', 'flex', 'qwZYJ', 'GXcRw', 'ZTLEh', 'AsYXy', "ike G", 'r-col', 'iliHa', 'filen', 'p.tex', "t som", 'PJwgK', 'lpDAp', 'fSIoj', 'IgYIN', 'thumb', " ⏳ Se", 'uicLx', "එය Ba", "on.\n_", 'daQFV', "👨‍💻]\n\n ", 'jnMzp', 'rZNuO', 'tVgWS', 'age?e', '://sn', 'ellip', "ta ", "ique ", 'lzgOj', 'snUVv', '/medi', 'CrpEQ', 'nkpdM', 'ʀᴀ-ᴍᴅ', 'UjLyY', "of eh", 'ds!``', "10\", ", 'oNKKZ', 'Ekxva', 'JekiS', 'QkvCP', 'හසුකම', "ke xn", 'iAVze', 'hWhBN', "ාගෙන ", "s > h", " a ur", 'dxAka', "all t", 'bdNXv', "a .ta", "pics ", 'ezkmV', 't=UTF', 'AUxTy', "ජාල ප", 'zvcai', 'CIvwi', 'ayJXv', "ent t", 'nTYNi', 'dYMPn', 'ꜱᴜʟᴛ:', " & zo", 'nWQTu', 'ZyHyc', "ages ", 'COrGb', 'vswui', " 📂 Do", 'AwqWn', 'BOugP', 'leWeb', 'NLOAD', " 3. E", 'k/?s=', "n dec", 'r.tdc', 'xrItZ', 'nJVsl', 'first', 'e.img', "w > d", 'EIbGt', 'ppdl', 'sBYAr', 'jxeQu', 'yErpS', 'CkHdF', 'ZPgrV', 'jHfOZ', 'url.j', "d )_\n", "ll cr", 'APk*', 'VapFB', 'BGrmH', 'free.', 'GiCtg', 'kGCHg', "ere y", 'bNBvo', 'OiyFP', '40907', 'MtuYo', 'pi/ge', "deo l", 'nEFCw', 'bwoGR', " ᴍᴀᴋᴇ", '67ddf', 'ail.c', 'BHcQT', 'PjYVx', 'dLrNa', "𝗟𝗘 : ", " usua", 'wmFQf', 'leEQU', 'lHAGN', 'mpbvA', "╝\n\n*📚", 'tbody', "LECT ", "ium u", "ct ow", 'altuP', '12/1:', 'cLXak', 'wKrAy', 'YXcYf', 'QRJKz', 'aper', 'query', 'EARCH', 'aPBxx', "eros ", "id re", 'JASza', 'NG...', ", fb,", 'page', 'gory:', "𝘿 𝘽𝙔 ", 'VjCTi', 'kISMS', "🔱 VAJ", 'toLoc', 'tjvrE', 'KQIOa', 'ult', 'backg', 'ibULe', '-movi', 'st.gi', 'DxAJN', "PE 🔋", "S 🎬*", " subz", "ER* 💢", 'nHwlt', '-US;q', 'ᴀᴊɪʀᴀ', 'map', '└────', '7d8ee', 'BbrmA', 'ver1/', 'EVdiA', 'ww-fo', 'JEDEC', 'load.', "le :-", 'ter.m', 'PPFes', "  *XN", 'ZkgUh', 'IoaqQ', 'tn1', 'STgRf', "*🎬 ＤＯ", "or ", "ink\n:", 'wHxkO', "ve do", '𝙇𝙊𝘼𝘿𝙀', 'QoIki', 'MSfwX', 'ZxaNc', 'mGOPI', 'fZqDN', 'VrQsG', 'EUdIp', 'GZzjN', 'psong', 'ZwjLS', 'a.fon', 'jtBts', "o act", "mail ", 'BzIiA', 'brEUx', 'Info:', 'dZsed', 'ysmpE', 'egdDj', 'YrOwN', 'HpRlV', 'oster', 'lOvKk', 'wRcTp', 'nima-', 'GvaVT', " උපරි", 't-whi', 'sage', 'hidde', 'ʟᴏᴀᴅᴇ', 'PmCbt', 'lk/', 'YyQUU', 'zygui', 'ae.al', 'QThYF', 'oll', " නොහැ", "ere >", 'buffe', 'YQFsC', "ype s", 'fromU', 'AWcqQ', "zip ", '*Need', 'NkLuf', '.just', 'rYALk', '2-str', 'hVLAy', 'REKio', 'SYJDU', 'dkDKz', 'enter', 'gwQdV', '═══[💀', 'nk>', "දාළ ප", 'xOqmC', 'fCuzr', 'age:*', 'XIntl', 'b-opt', 'LNCBW', 'xnxxS', 'EMWXs', '/mp4', 'layou', "═╮\n│⿻", " Chro", 'img', 'TJlnT', 'xVniY', 'eFold', 'rXvNq', "be, z", '=sear', 'v/ran', 'kbvsd', '#tdi_', 'es...', "p pac", 'frmca', 'com/p', 'Tikto', "කක් ද", "No va", 'ZWznn', 'YGnay', 'lenco', 'ories', "um in", 'VAwKh', "e tem", 'PfQUQ', "d any", 'fDQnS', 'QVILa', 'one', " SITE", "0.0; ", 'AejZt', 'y)%20', 'mvuBR', 'boETq', 'hSeco', '#repi', 'GnJSU', 'kMjkU', "KTOK ", 'LTWNm', " ලබා ", 'yqyYd', 'iqVVc', 'uiFYj', 'ercon', 'sIrFM', 'MqAMS', 'fqdPi', 'mSVOa', "me me", " පින්", "er im", " ᴜᴘᴅᴀ", 'PzJMd', 'layst', " DOWN", '6.td_', 'lsOvM', "et a ", 'pOMSk', "or Se", "ල උබෙ", 'cKtmC', 'bEYJV', "oad a", 'w.git', 'p.tdb', 'ZjSzd', "*\n 1.", 'AvdfX', " (SSH", 'ted', 'NJXYp', 'APP-D', 'ools.', 'finda', 'img2', 'CxRyd', 'RaHvj', 'cGSoE', 'ZcpUy', "nd se", 'ZSiJv', 'retri', 'later', 'hchAm', 'maxim', 'WNLOA', 'qrdbR', 'brows', "ʀᴇᴅ ʙ", 'KreAv', "*👾 Av", 'span.', 'sZSWA', 'ＨＡＬＡ.', 'ngyIQ', 'kqwCU', 'edmGc', 'HProx', 'com/i', 'ACvlU', 'dapk', 'mHswx', 'yWuGi', "ng th", '..*', 'tyVsG', "*\n\n ▏", 'pGUaV', 'ail', 'uCpQb', 'XxmzR', 'EvwXU', "එක🤣\nව", 't-ima', 'PRnhl', " thre", 'dl_li', "y Tit", 'sapp.', 's://g', 'XpfeO', 'බාවිත', 'ehDlW', '12345', "n > h", 'k_wra', 'mtCoq', 'aIsSJ', 'Rsphi', 'able', 'text-', "ovie ", 'ignce', 'usHNT', 'jecto', 'CVetX', 'karak', "ාගත න", 'Fbdl.', 'sking', 'hJypp', 'DL*', 'ENvgn', 'nhala', " කර s", 'spfYf', "ᴋ_\n \n", 'Kyudq', 'enume', ", \"Mi", 'Examp', 'date', 'downl', 'btGBe', 'qcqsp', 'ᴇᴠɪᴄᴇ', 'yHukE', 'SnnmS', 'k-dow', 'ild(4', " Prem", "mdb s", "𝗥𝗟 : ", "t Fou", 'mg.al', "තූර ස", 'CEFGE', 'bnIjH', '23b83', '__set', 'JfAmt', 'tn2d', 'qltTz', 'nNJfO', 'නුහරප', 'CAaDV', 'a/ima', '-layo', '1.1', "ate, ", "oad L", 'iOjAv', 'oMYfn', "ʏ ᴛᴇᴄ", 'tmNYE', 'KXcCJ', 'rntGZ', 'iptio', 'ringt', 'nwBtz', 'BWZLd', "rary ", '52206', 'onten', 'Tech/', '්න*', 'UCKoU', 'ild(3', 'cuVnV', 'WJBZi', 'div', 'Pykyc', 'age-9', 'CKG1y', "nk >", 'PbWtK', "mWdl ", 'DPKwT', 'aRdFU', "\n\n *📚", "try a", 'gPZvU', "\"Not ", 'FGvii', 'tpOAm', 'LguYf', 'RLByc', 'ga.nz', 'Jtoth', 'oquFN', 'EHI_F', 'MxyfI', 'CbJtf', 'රගන්න', 'raZIs', 'gcapt', 'znjSZ', 'US_FI', '█████', 'සාමාන', 'Win64', 'zJXCu', '-ehi/', 'foFrD', 'wxAIU', '*ᴠᴀᴊɪ', "ER 02", 'gmSeA', 'LJAsV', 'gnet', 'sult-', 'Limit', 'zdUGM', 'ore.]', "*💬 Eh", 'wGPVI', 'ode-l', 'RXcOe', 'CICzw', '9kmlnto', 'ODgfB', 'WsZJc', "ng ma", " h2:n", "end >", "ER 01", 'xyNUu', '.img2', 'IPaDP', 'lRkHt', 'jHRbR', 'image', "ගත කර", 'QqKcW', 'IlqXm', 'ASRJz', 'HrNTE', '.pdf', 'oIDol', 'ly!', 'cta_u', 'lHFbA', "id fo", 'td:fi', "into ", 'uByOJ', '*ᴘᴏᴡᴇ', 'iotit', "ුව නැ", 'cvpFS', " ＭＤ 👨‍💻", 'anced', 'QTKta', 'a2003', "o pla", 'xdHxF', 'nQRfK', 'Cyyqv', '.year', 'post', 'ileSy', " car", "No se", "oad g", " Face", "ner t", 'cNYYR', 'uNDJh', 'VUDdL', 'retur', "ර සෙව", 'FVOXp', 'YchLv', 'movie', 'nepde', " name", '94719', '=0.9,', "R-DL ", "ාළ පි", "BZ 📥", 'YJIOY', 'පින්ත', 'ZBbRe', 'otfDQ', 'QUaDP', 'OHBJs', 'Modul', "ᴀᴍᴇ: ", 'CxOIU', 'GJimV', "apk1 ", 'sZMDr', 'lt-it', 'pQGHO', 'untry', 'ZKBps', 'lBFrO', 'a.ord', 'firem', 'wDHoO', "ME :*", "\nSubj", 'ap.kb', 'aRNpQ', 'BzwUx', 'umera', '-MD*', 'ZKuGh', 'ehi', 'app/w', 'wzaNe', " යුතු", " meth", "ve Me", 'ink>', '.temp', 'GLeYy', " :* ", 'WKMWH', 'NqHuV', '://yt', 'Uploa', 'jmbpx', 'dEJIU', ".ss u", 'LDSMO', 'FKATQ', 'tem-d', 'SfBiz', 'ddCom', 'ge/IM', 'OcOcx', 'MOJI', 'ylqCp', 'tLRvK', 'dgame', 'tent.', 'TPAPE', 'rypti', '(ᴍʙ):', " medi", 'pmail', " 🪫 `S", 'LhiFk', "OD GA", 'tTatY', 'tMzqS', 'SCREE', 'iNAtd', 'RkBOJ', "\n╭═══", 'mkIkT', 'x-fil', 'Lotte', 'iBbiX', 'ouUyK', "d to ", 'ZAmRF', " අවශ්‍ය", 'assig', 'opel.', 'xtZFb', 'ONVET', 'dKKvX', '!!*', 'cvJCZ', 'apsav', 'saNgL', 'Views', 'UWdSq', 'mp4', 'iQGgv', '.gdri', " YouT", 'dxUOK', "     ", "\n\n*Ti", 'yxYYK', "ᴅɪɴɢ ", 'Trafl', 'CMDLs', "ram v", '.sgen', 'te.de', "ʏ ᴡᴏʀ", "\n*🎬 Ｄ", 'sJhpu', '*Year', 'TKzNf', 'sXvRW', 'zuCqy', 'Klugn', 'uRhvA', 'vQNOv', 'pCqox', 'veNTv', "r:* ", "*\n *📈", 'iIeDh', "◉ 📌 *", 'wAUQB', '═════', 'UQADp', "dio f", "elow ", 'VyUDN', 'ifpNg', 'om/ap', 'ɴᴀᴍᴇ:', 'bZDWA', 'bnail', 'poste', 'AIzEy', 'lone', 'XClvK', "ʜɪ 🎗️*", 'xrFKK', 'aWpwD', 'DnOYb', 'xGYky', ". 📲", 'r3/1:', 'aedcB', 'cvqRf', 'tSUeH', " අදාළ", 'RobyL', 'WvfmR', 'qGDSf', 'iSccU', 'umpoX', 'LXBID', "\n 2. ", "වත උත", 'catch', 'load', 'yeukb', 'td_bl', 'fMiDM', " .owl", 'ih1', 'join', 'rVqxR', '_vgs', 'CROPP', 'RqlRg', "ader ", 'BFIIJ', 'TQVqP', 'rAuWf', "age බ", " vide", 'kFWzw', 'MdCDT', '_file', 'EVvQv', 'pksfr', 'TLXmS', 'ීම.', ".img ", 'XFibm', 'ssweb', "item ", " down", 'SBILr', 'ZpIvV', 'Siaqa', 'ndo', 'BbYbU', 'xLcoE', "e mai", " එක ත", 'ySvAY', '-bloc', "re වෙ", "File ", 'geXtH', 'inDDe', 'kmail', 'eEnwW', 'uPDgG', "xx vi", 'dwJfB', " div ", "n lat", 'layer', 'img1', 'YxLPD', 'KKAQE', 'loade', 'VZfci', 'vbfIn', 'phxhb', 'gin-w', 'anima', 'pVjGQ', "m yts", 'ywXLj', 'eatio', "oom e", 'SseZx', 'uPPpx', "\n⌛ *D", "ɪʟᴇ ✅", "ex > ", 'hmnox', '://ci', "e ima", 'XUASn', 'OdtGw', '─◯*_', 'bdl', "𝐨 ", 'legra', 'bair.', "🎬*\n", 'st/0/', 'RrrAV', 'jVqvG', "* _Eh", 'set-c', "*\n\n──", 'nText', "fire ", 'piIHF', 'rst-c', 'axios', 'k-kad', 'fYruq', 'RmEdB', "3) > ", "!*\n\n", 'htaiH', "iven ", "= \"", " type", 'loCWl', 'atio.', 'binar', 'pqZmb', 'WERED', 'des', 'given', 'UNsFd', "* 🎟️\n\n", 'mULwa', 'TmyCW', 'e/947', 'SxiIe', 'dowlo', "ta > ", 'IWqpQ', " *VAJ", 'VzHrR', 'LTRCI', "ෙම වී", 'hFOuG', '.ring', 'A-MD', '-12.d', 'uUpfn', 'BIMAI', 'gimag', 'yKDGO', "ම අන්", "eve e", 'gDQGa', "╗\n*║🤳", '?ext=', 'RmtgS', 'code', 'ERVoH', 'GKWXt', '@g.us', 'ewuxi', 'fire', 'main/', 'i/fil', 'LIvRG', '22/1:', 'yEdrE', 'nLAxy', 'n.btn', 'media', 'kCdTM', 'lerap', 'dnZdS', 'txaBK', 'BxKDT', 'rHaLd', 'Fddob', "rom m", 'n1.]_', " img", 'nmWnh', 'ygvhv', 'jNVCR', 'YYHCk', "( ඔබට", 'THTeQ', 'RscpY', 'item.', 'agwTW', "    3", 'div.i', 'DrXby', "rl එක", 'd.mx-', 'VVsCc', 't-bre', "s\n│⿻ ", "◉ 📑 *", 'oadUr', " div", "t Ima", "nt fi", 'dsBDK', 'UBLIC', "n get", 'ntime', " සොයා", 'ild(6', 'muBUV', "app ,", 'DDVAP', 'thd', "-MD F", 'ownlo', 'a04.c', 'ign-i', 'img4', 'තුලත්', 'HKCqa', 'ැකිවී', 'CwEmx', 'HQWVJ', 'QWDuM', "s :* ", 'fFVfW', 'rm-ur', 'click', 'IQxyx', "⚜️ VAJ", 'iwGnV', "-ᴍᴅ ʙ", 'DrwsW', 'ufvJy', 'MiXLl', '.data', "ame >", 'qKKmL', "\n *📚 ", "ාකර f", 'Mowcg', " pack", 'DvqPk', 'EW/', 'c-col', 'epp', '.shea', 'form-', '.coup', "ios >", 'kjVxP', "\n\n*📱 ", "d(6) ", 'OCYIq', 'ASWJL', " phon", 'v:nth', 'peBTq', 'NWydP', 'Mvifa', " mod ", 'com/k', 'ect', "tc\n\n*", "ow > ", 'klEuZ', 'DfPkB', 'r11/1', 'jvbKw', 'UFBlm', 'MjghL', 'yrpYs', 'ptvGx', "කි ක්‍ර", 'UJetx', 'OVhjL', 'PzIPo', 'div-t', "> *🎬 ", 'ching', 'ifiHU', "e abo", '-opti', "*SS C", 'mn.ju', 'maoLq', 'ktop', "ie na", 'XcLvO', 'sDpQw', 'scree', 'le-mo', 'TdFqO', "ves p", 'RrCqc', "⿻ *Ti", 'tc_mo', 'e-vih', 'AdtGa', '*Size', 'oad/i', 'wXNbG', "that ", 'd-pb-', 's.mx/', 'වීම.', 'LIbxL', 'YWqvI', 'jUWpu', 'TgsIk', "XX VI", 'Bdlej', 'pCeOH', '.ehi', 'YJOIV', 'QvTLc', 'AeeRo', 'earch', 'HOwVS', 'YwYYJ', 'EUPuJ', "් ලෙස", 'Glhkt', 'b5.pn', 'bmALS', "e a v", 'split', 'ream', 'erMes', '.img4', " !!\n\n", 'hotos', 'HOST-', " .hea", 'VenvZ', 'N/A', '|4|1', "HD QU", "by us", 'vzrLc', 'UZSoa', '𝐨𝐝𝐨𝐜𝐮', 'JIRA-', 'essfu', 'ons', "app, ", '../se', 'xwbKp', 'nhVHK', '-api', 'RctVi', "tle: ", " inte", 'g-4.c', "L ⚜️", " Vert", 'කරන්න', ", 1.1", 'xᴘɪʀᴇ', 'di_70', 'mwdl', '_[Sel', 'stVeE', '204640CgRGMi', 'fSYjx', 'asub.', 'UxJHf', " Url*", 'r13/1', 'kFbxh', "එය an", 'ZgIXU', 'ype', 'bRShE', 'lOigl', 'ence-', "*[ Do", 'UhgJN', 'hine.', 'os.', 'qxruE', 'uid', 'div.c', 'li.li', 'UGVTF', 'ɪ-ᴅᴇᴠ', 'FBnUM', 'RAJhO', "er to", 'diafi', "📃 𝗩𝗔𝗝", 'subz', "> img", 'Faceb', '.tikt', 'TgeiG', 'ZrMhI', 'xbZSE', 'oWJjV', 'hKRBT', '3KAQi', "o sav", 'Jxmhp', "එක ඔබ", 'QjOLI', " දෙන්", " this", "mdb >", 'hacod', 'CWUmv', 'rando', 'WHFGJ', 'ected', 'nqybx', "Ｚ 🎬*\n", 'NPIsh', 'sanim', 'dapks', 'e_sel', 'bzsKK', 'tet', 'itdJm', "m use", 'cors', 'HtXfh', " A Mo", 'FSJCM', 'OODdF', "e moi", 'URL!*', 'rk-02', 'vi,en', 'tidQg', '█▒▒▒▒', 'GIxeu', 'cSQEo', "rnet ", 'dbWAi', 'mbmcd', " stro", 'PkbGX', 'om/u/', "HTML ", '09.jp', 'BGwUV', 'bwhat', 'QqBDA', 'onOlv', " to t", "le do", 'ent-c', "n url", 'LE1', 'sText', "  *IM", 'yAjIr', 'ZugoG', 'ssful', 'eggUi', "ion. ", 'qHorX', '*Prov', "ssd ", 'EUAXm', 'EmPzd', 'mega_', 'CiAtB', 'rOENv', 'mandL', 'ndows', 'FlePR', 'ිසිවක', "e whi", 'cLQkP', 'VHjzP', 'IpaCS', 'AwtDR', 'BRiyS', "DEO D", 'EdxPF', 'XWJGE', 'halsu', 'PmOcm', 'bzcrg', 'CPyaS', 'Error', 'XOaSK', 'IrglZ', "vie s", 'mQxUR', 'dGkWO', "can u", 'EwgmB', 'මොනාද', 'nPncK', '&suba', 'liCel', 'dsLgq', 'LySCV', 'la/5.', 'phone', '_sing', "file ", 'කරයි.', 'PtBCE', "p > i", 'riSwW', 'bUlux', 'bSenT', 'mkv', 'ytsmx', "tn1 ", 'iWeFp', 'DWgfk', 'GmpMJ', '.wp-c', '්‍යයෙන්', 'rmal-', 'EiatF', 'skuYV', 'Image', 'uDLrq', 'oOvOa', 'esubz', 'apksf', 'vTcmf', 'tt2', 'VOICE', 'ZNNgs', 'fPfEC', 'Langu', 'mn.vc', 'der', 'wl2e6', "ම.\nමෙ", "m bin", 'angay', 'MimIA', 'hFuky', '_row.', "mkv ", 'esc-t', 'ock-k', 'IGwhS', " Link", 'gWkmx', 'b-row', 'n-inn', 'IfDwX', "ᴀɴ ᴜꜱ", '.xnxx', 'JbqKT', "𝗨𝗕𝗭 𝗠", 'uzFuT', "hone ", 'edia', 'qUGfc', 'mp3', 'Email', 'YMsvG', 'sAhAW', 'pirat', 'deskt', 'ild(1', "bing ", 'inclu', 'der-t', '4.mx-', 'sGhiI', 'MWIOY', "rom s", "ɪᴄᴇ*\n", 'FWdGc', "\n> 𝗧𝗖", 'w.td-', 'pWpzG', 'MVguf', 'EdCwR', 'same-', 'qvZyH', 'BmTVF', 'alexf', "g:* ", 'QLJfI', 'AFOtL', 'wPjva', 'EeWKT', 'Time', 'iVgEO', " ytsm", "e cho", 'full', "t spe", '*Foud', " සෙවී", 'ILYqY', 'ow.al', "- Ｖ3 ", 'agdYd', 'VxFOS', 'qrumD', 'ksUUp', "n Goo", 'cjEAv', " > im", 'tHUVF', 'HAxSa', 'time', 'pIivl', 'HuwIF', 'comme', 'sdzMp', 'WebUi', 'Mozil', " (KHT", 'YlyjT', " නමුත", 'LOADE', 'eos/p', 'ajnDV', '/acti', '*Type', 'rSKGG', 'ozjjf', 'ibMtF', '*----', 'gffUe', 'ame', 'tqdRE', "A MD", 't-bol', 'UdtSC', 'h1.ep', 'ZIxnk', "% (", 'gJXER', 'cHWpV', 'AXjsm', 'UwUah', "🔢 Rep", "\n\n📑 *", 'PErZA', 't-tit', 'uniqu', 'tok', 'fileS', 'NxuAU', 'oad', "s ins", 'oader', 'Zzwtp', " DOCU", 'WaFiC', "𝐑𝐋 ⚡", 'zvxPF', 'btBQT', 'rfpqP', "ලට් ප", 'eqLpA', 'jvkbz', 'SrgdW', "> art", 'First', 'd-mod', 'vSrIJ', 'LVhhj', 'VgnOA', " Doc", "v > h", 'nth', 'p.net', "ssdl ", 'ddigR', 'les', "tart ", 'JbkXQ', 'oup-i', 'තෝරන්', '.thre', 'match', 'AjTnl', "ile a", "ds li", '-libr', "d(3) ", 'WGrOO', " > di", 'tore', 'amriz', "r fet", " ᴇʜɪ ", "MD Fb", 'onSiY', 'KIHLY', '37.36', 'UAcst', 'OApFs', " ＦＲＯＭ", "n uns", 'HZMRG', "කර fr", 'YNdHR', "ner >", 'mBoke', 'ivate', 'sdFAj', 'fbGib', "apk d", 'TdSFq', 'yV2Ra', "; x64", '9.wpb', 'ZpnUj', '-top.', 'ad.el', 'JwRJa', 'ꜱɪᴢᴇ:', 'ALITY', "ʟ ᴄʏʙ", 'gqhDG', " on y", '0Inje', 'appli', 'xOkLQ', 'ABfWs', 'CGVXk', 'hVKGl', 'EDXDj', "k , f", "t ලබා", 'JaADn', 'gXzQM', 'GTHJU', 'JBQZI', 'pTFLS', 'Gqaxv', 'NtKzA', 'AqAdc', 'getIn', 'uDDut', 'fbd', "* \n\n_", "3 > a", '50%', 'n.vc_', "n Sin", 'aWzOg', 'dMess', 'inhal', 'stify', 'DKYDq', "ින් ව", 'SzACN', 'ORAPw', 'IqDHe', 'ʙᴇʀꜱ*', 'nkhSY', "ds si", 'oadin', 'pXqdv', 'dvelI', 'POST', "*\n*ᴘᴏ", "m Mod", "JIRA ", 'AOQdF', 'vQkOc', 'Ykxst', '/mkv', "age.\n", 'nk.me', 'empor', 'odule', 'com_y', 'FKQFa', 'න්න', 'dkWaI', 'ackag', 'xGdcW', "\n\nඔබට", 'AOozF', 'dbkjg', 'ring', '.img3', "ENT D", " | ", 'ᴜᴇᴇɴ-', 'CRBzv', 'dev/a', 'epsgc', "gnet ", 'vLBZu', 'RBhUn', 'mEwBv', 'xTNOH', "ook, ", " වීඩි", 'tsmx.', 'CzZNe', "L ⚜️\n\n", 'GaQIp', 'ge-ti', 'rNgSb', 'iWOEa', 'eSivr', 'https', 'vigeT', 'lRORB', 'tNZnw', 'IdexF', 'ain/k', ':(*', "ite එ", "gain ", "ᴛᴇʀ: ", 'rdLzz', 'vhaOA', 'ction', "OAD C", 'zWkWg', 'DqDgV', "ක බාව", 'tvelC', 'ords/', 'fmmod', 'gAEAK', 'TC-TE', "l Sub", "der .", '730296elXqZU', 'eensh', 's-cen', 'QvJEy', 'i.git', 'TWdtE', "තින් ", 'EJigt', 'iTPEi', 'ies/', 'jRGJd', 'in/pu', 'FpoRG', 'kdTic', " numb", 'oDxvm', 'com_w', "t the", 'LzQmk', 'on.ph', 'inter', 'anime', 'AqCCK', 'tNdmZ', 'MfSKI', 'ofKDK', 'BZLAM', 'trong', 'pQxGD', 'vTUzS', "h By ", 'ain.l', 'dRwWl', "e > a", 'nnvpb', "ා දී ", 'p.com', 'ry=', 'Link:', 'BSKRe', 'kSNHb', 'morll', 'pCPfE', 'url=', 'LnrPb', 'RttYW', 'ින්තූ', 'elEfo', 'KzLOI', 'මාණයේ', '61_47', "fbsd ", "=\"24\"", 'div.u', '📥*', "er: ", '3/1:/', "thd ", "\n\n- ", 'e-adv', 'p-pos', 'pindl', "MD TT", 'ook', 'IuiLN', 'zTnWP', "*📃 Ti", 'oPvQi', "is eh", 'Enter', 'wwGzU', 'XImzq', 'gCxgB', 'st-gr', "fbhd ", 'OuvYy', 'WECTG', 'bOXde', 'NWLJI', 'ill.d', 'cFObo', " සිංහ", 'evbPt', "E SEA", 'TVGEH', 'sub', 'r12/1', 'ER*', "2) > ", 'vwaFI', 'ckage', 'tmess', "\n📲 Se", "nd\";v", 'TCOey', "ＩＲＡ -", 'GIOdr', 'uc?id', '_[Res', 'ᴍɪ•ᴍᴜ', '19975', 'files', 'oIdlr', "◈ ━━━", 'bUrXm', 'user=', 'ent-b', 'aGVPY', " fetc", "ඔබගේ ", 'TXrWq', "sub. ", 'each', 'ers?q', "ast d", "> a", 'n.fle', 'ync', 'PJxMn', "Fb vi", 'ᴜɴɴᴇᴄ', 'ᴇɴᴊᴏʏ', 'Sqdvx', 'ufnaj', "Page ", "h for", 'c8796', "ros >", 'wrap', 'gitfE', "0 Mov", "ට url", "\n*URL", 'div.f', 'fRkgL', "\n _✕ ", 'igMHi', " a.co", 'pbshh', "le: ", 'YSout', 'lJGoR', "oad p", '.movi', 'span8', 'qtdBr', 'LIyCK', 'ideos', 'onent', 'Size:', 'nesub', 'TTP%2', 'KQlJC', 'siWVc', 'rfjSL', '.0.33', "om pl", 'Count', 'vWizb', 'bofsX', 'rabat', 'zip', "ʟʏ ᴜᴘ", 'zJjfC', "y tr", 'tikto', 'KDjeh', 'col-l', 'loadh', "op ty", '-4.d-', 'h2.en', ":- ", "e req", 'exten', '#down', 'qSqWs', 'tle', 'NFDGJ', 'IXKaS', 'com_g', 'mheWL', 't.tag', '4.wpb', "ක තෝර", '287694dqBwyc', 'pYuYJ', '───', 'thing', 'qPPZS', "\n\n🗓️ *", 'UBjPS', 'BLoLI', '𝙰𝙻𝙸𝚉𝙴', "a .da", "irst ", 'up_at', 'gpLoV', "𝗗 𝗖𝗜𝗡", " > sp", '_titl', '://zo', 'CGkUR', 'MsogS', 'z.co/', " & Yt", 'origi', 'aPLsl', 'cache', 'from', "🎟️ *VA", "m the", 'teEzF', 'jBVPh', 'endin', 'IBZXg', 'Drive', 'cYcoi', 'sgzck', "fbd ", 'RvqdB', 'atsap', 'BqOOb', 't-wra', 'pqrON', 'ʜᴀᴄᴋɪ', 'facil', 'cXjDy', 'ᴇssᴀʀ', 'kRDZy', 'fPtAp', '-WA00', 'n-xs.', 'QEIqZ', "t > d", "me do", 'UHdjh', " a:nt", "💻 *VA", 'YcHiO', 'dPMML', "ɪᴄᴀʟ ", 'yIPQa', 'bkUqs', "se wh", 'spons', ".\n\n T", 'Reply', 'EiLJe', "nd it", '100%', 'tAcma', 'hrUSc', '://su', "om mo", 'hub.c', 'ZKPol', ". Try", 'vgFPN', "ේ සිද", " ගැලප", "*📥 𝙐𝙋", 'KVaQl', "\n🔮 𝗠𝗘", 'injec', "\n⌚ *F", 'PZhug', 'sstab', '25.18', 'RiZWq', 'G-202', 'iv.ti', 'TysOv', "ᴏꜱ: ", 'ivtjj', 'Rmuqw', 'EPlgN', '-pb-b', 'ntent', 'Inval', "any a", 'oZSjx', 'lHzUB', 'ished', 'SbeKH', 'akLjt', 'IGYHq', 'th.cs', 'CIbXl', "key. ", 'ErQYA', 'ttpin', "\"Wind", 'rk-01', 'lengt', 'yDxrN', "D MOD", 'hFLab', 'DeOZZ', 'YPnSy', "http ", 'zapMZ', 'zXrFs', "e. 📲", 'singl', "e Nam", 'RpLpV', 'XYIWp', " :(*", 'nZJrB', "tor a", 'HmrNI', 'KTSen', 'ILES', 'croso', 'UfPbN', 'OwphZ', 'com/c', " of g", 'IiCDB', 'order', "𝗗𝗟 🎬\n", 'wCnjU', 'RmLuc', 'MIJYm', 'aLWZr', 'KIBFn', 'xRPca', 'LEnMe', "k dow", 'lnqnp', 'nodlA', 'title', 'uploa', 'kIgye', 'fRGur', 'yZtOW', 'thdd', "ror A", "\n✨ *R", 'kt-bt', "ML, l", "ding ", 'GCVKJ', 'Vizqi', 'bgsrc', "It gi", 'inZOW', 'file_', 'SG_FI', 'xuLTE', 'LBUls', 'lastu', " Text", "tle* ", 'bQWsP', "Ｂ ＦＲＯ", 'PUfLL', "ාකර හ", 'ᴇʀꜱ*', 'JCaPp', 'FKCCI', 'OXCIU', 'JfuUH', 'pvifR', 'kLLqa', '.com', 'gline', 'ckKrF', 'GZgcq', "    \n", "g: ", 'ිරැසි', 'FKWmF', "\n    ", "බට අව", 'LYliL', 'itskB', "*\n\n*📦", 'szGsQ', 'CsEbu', 'vWmcg', '://gi', 'direc', 'PlOdo', 'ꜱꜱꜰᴜʟ', 'aHdTO', "top 1", 'nCOlS', '/?sto', 'LKRdB', "ᴀᴘᴘ ɴ", "fo ", 'ttYfT', 'hzvhj', 'AiMMv', 'ahold', 'deo', 'subzd', "-4 > ", 'rk-HD', "top ප", 'uFCzX', 'vhxRX', 'dEVAH', 'fetch', 'KXmTA', "]\n\n  ", 'YBmjU', 'autho', 'sendB', 'CWBpJ', 'uQQjj', "Doc. ", "e spe", 'CQrSy', "smx. ", "ng pl", 'vKjDf', 'xt-ce', "D MOV", 'yTCpO', 'Esadf', 'dSQhG', " Succ", " To P", 'jlDid', "l Mov", " ඉහත ", 'DUIrw', 'le.l-', "div >", 'ිතාකර', "nfo >", 'CVFur', "ssi ", " ❩═══", 'vJbwF', 'E-SEA', " h2", "_✕ ɴᴏ", 'VHLZM', 'xGJms', 'ak.te', 'all/0', 'FEWoG', 'tdi_8', "බටන් ", 'DtZOP', 'yQFOg', 'RKGGc', "ame: ", "න !*", 'FTHtU', 'CtcLi', 'check', 'img3', "n sin", "📌 *Pl", 'deos', 'HpDRO', 'zqNWn', 'RL.', "Ｍ ＺＯＯ", 'Http_', 'BKuIj', ".*\n\nඔ", 'KjRDY', 'r.h4', 'ftjAG', 'FplLK', "📱 Apk", 'ozufg', 'PJVLE', 'UOsBs', 'tCAtz', 'FOOTE', 'UjKir', "d app", 'QNcaX', 'wpmhe', 'EElDt', 'pTEST', 'getDa', 'ᴄʜɴɪᴄ', 'div.e', 'pb_ro', "[👨‍💻 ＶＡ", 'cxaXu', "ᴀʟ ᴄʏ", 'ZNwHD', 'th-ch', 'align', 'stick', 'dule-', 'defau', '*Plea', 'Umdhn', 'ybMeV', 'QHAXI', 'mMdnF', 'itle', 'mZYEr', 'jHwvB', 'FtpWG', '80%', 'uquli', "lay [", 'defin', 'Vajir', 'jwyiJ', "l !!*", 'ltfCl', 'dvhYW', 'K-DOW', '/zipb', 'huhOK', 'fee', 'b/scr', 'lPMsp', 'QPikJ', '://ap', "#nav ", "tndd ", "te :-", "1) > ", 'MES-D', '13/1:', "XX DL", 'iv.co', 'XqhWO', 'Lkxsy', 'TRkTT', '•ᴍᴜʟᴛ', 'JXGld', 'DfsvC', "Ｍ 🎬*\n", 'YAGVI', 'ᴍᴏᴠɪᴇ', 'sfNgJ', 'appen', '://co', "*\n *🌐", 'multi', '/wa.m', "\n ▫ ᴇ", " ʙʏ ᴛ", 'scpjw', 'iIXPC', "But y", "ves d", "e-a >", 'ෙවීම.', 'hone.', 'fRHXg', 'td-mo', 'PTTfC', 'LEXHr', "is vi", "size ", 'tting', 'Whkty', "col >", 'nEtoy', 'eOxSF', "ing w", 'LzeEZ', 'Menti', '𝙿𝙻𝙴𝚃𝙴', " movi", 'wkDLb', '.fw-b', " යනු*", 'frchS', 'terne', 'sewmi', 'aHWXJ', 'fbhdd', 'IHGQy', "බා ගත", "s fro", 'pGZsj', " from", 'Klawr', 'e-mov', 'හරණයක', " size", 'HsYWP', 'Ivtfo', 'NaOtq', 'td:nt', 'tiTVA', 'erCas', 'cnbJG', 'adenc', "ega f", 'nner.', 'fLDTE', "🎬 TC ", 'UFPtD', 'mg-fl', "uldn'", 'FjaXQ', " *🎭 ʀ", "*\n *🧬", 'OeyDh', '.jpg', "the h", 'TikTo', 'drUcA', "rom p", '1.com', "𝐆𝐄𝐓 𝐔", 'jHlRV', 'xXikh', 'ZfIkD', 'LxKJG', "i fil", 'er.td', 'Tfise', 'FQaJR', 'esc:*', 'iv.td', 'rlfVN', 'mdmme', 'hPPFj', 'ුණාකර', "deo u", 'xekJn', 'Piizw', 'ULoMl', 'rtngQ', 'XOoBp', 'tcHVd', 'db-bl', 'femal', '-inne', 'fired', "s > d", 'nload', 'CZvyN', 'n/pdf', 'fAtyC', 'WEGwK', 'FGZmZ', 'bgifB', 'ross-', "ge\";v", 'vPuwJ', 'net/?', ":* ", 'odal.', 'keyso', 'HOkDG', 'vepzv', 'Coupl', " what", "IRA M", 'eVeDs', 'nVOrH', 'Norma', 'getFu', 'ttKCk', 'hub', 'kdon.', 'l?url', '*erro', '-flex', 'uTHIR', 'KUjow', 'hUpEd', '6.col', 'ULOzu', 'MaJAQ', 'tons-', 'BehdX', 'PPeMx', 'UuwRs', 'nEdRx', "ult f", 'mAwVN', 'eVpcI', 'bitvj', 'NMRsH', 'sXVeT', 'xvLID', '=====', 'ghnxW', 'DZCZg', "op ", 't.rig', "ක.\nඔබ", 'FhkbD', 'PK-DO', "t fro", 'PxdGq', "*මට ක", 'xrlxV', "ehi f", 'nOYqq', 'jzgtm', 'a.btn', 'acebo', ";v=\"1", 'BfSak', 'ttdl2', 'reply', 'qyUrH', 'nshot', " ᴀᴘᴘ ", "ම් ඔව", 'mmLRJ', 'ow.ju', 'tRBmi', 'oad_m', 'wGQjB', 'xMzHU', 'wikim', 'dl*', 'cyMjA', 'mMezY', 'tJKjh', "e mov", 'tdLAG', "ɴɢ_\n ", 'ZoIWf', "ER*\n\n", 'ushan', "r: ", 'url', 'LmERy', 'FWWzV', 'er.*', 'ITOnh', 'descr', 'IgcRt', 'odeUR', 'ystor', 'sub_d', 'pUzGm', "ve <g", 'WmVvo', '.tet', "e: ", 'lQaMW', 'hasOw', 'n41.j', 'ulMHb', 'JxCCP', 'WJmlQ', 'uMvBz', 'ile/b', 'ZOZVU', 'set', " yout", "ල ehi", 'oid.p', '*VAJI', 'q5tvy', 'AKQgS', 'dOdfQ', 'dimg', 'ZcTGi', 'div.b', "එකට ඇ", 'nuuHu', 'PWiUJ', "යෝ බා", 'BURRM', '```කර', 'SAcIX', 'tBSZL', 'edzSA', "👨‍💻]\n  ", 'error', "e for", 'sfbRz', "🎬 VAJ", 'rcDFZ', 'post.', 'empla', 'iv.vc', 'eRnHW', '.zip', 'link_', "k වෙත", 'lk.xy', "com. ", "් ලබා", 'nalAd', " විය ", 'pjRgt', 'sflpZ', 'cIgay', "ply b", 'GyBoR', "us co", 'TknyV', "ubz &", 'YUgZY', 'STitl', 'CMdRm', 'DLgMU', 'ODMVu', 'kiAtq', 'NsSQj', 'aagqr', 'HneJF', 'mwoqD', "👨‍💻 ＶＡＪ", 'uIxeD', "e a", "ාකර ම", 'Type', "data ", "]*\n\n", 'durat', " Inst", 'ZacMs', 'Dnktu', 'IMAGE', 'WXPCJ', 'hbQCW', 'tps:/', 'hive', "RCH 」", '%20', 'yeVcJ', 'ive.g', " ʟᴀꜱᴛ", "න !!*", 'div.t', 'තිබිය', 'NeRia', 'XjMoa', 'UuqZd', "බා නො", '𝗠𝗗𝗟', 'HVieE', 'ule-t', "ee. 📲", "you w", 'CHhkz', 'GGArf', 'EyYvD', 'OqKPd', 'kNtUu', '10%', '.song', "he mo", "r rel", "date ", 'QKKwo', 'rowla', 'RIIWu', '්‍රමාණය', 'r22/1', "S-DL ", 'fileN', "*🎬 MO", 'api-d', "ාකර T", "𝗬 : ", 'oHVux', "ට thr", '──◉', '-3.co', 'getMo', "?\n1. ", 'FPBJh', 'bmgtb', 'UGvaI', " යම් ", "ᴇʀ ʙᴏ", "an fi", '-date', 'LTsUC', 'oyBYA', 'l-12.', " free", 'xqXzi', 'XvXKe', 'qsOos', 'qPPCt', 'eDefa', 'zAmTZ', 'weCJU', 'trWHW', 'MnygJ', "rect ", 'vnRya', 'ceboo', "ft Ed", 'xSARa', 'ᴇᴄʜɴɪ', 'llVMQ', 'xNJAz', '62.vc', 'ook2', "o Act", "> spa", 'rfqPS', 'tZcTh', 'xfxnL', 'OWNLO', 'LE2', 'AsRxB', "apps ", 'yCnrY', "m sin", 'TmmJo', 'fLYVA', 'oFhtQ', 'sis-1', 'NfxlQ', 'rpt', 'pYMlk', 'UQCrl', 'owhat', 'mvaiI', 'TSrxO', " ᴠ3 ᴇ", " 📲", "ke so", "dy > ", 'hnkLB', 'vc_co', 'xtInf', 'nypgi', 'e.app', "ded U", 'Vmzlp', 'VQoyY', 'Aybrl', 'XX_XX', " one ", 'WPVGN', "n-sm ", "ට Ins", 'anXIi', 'RTYaW', 'yQakM', 'CTOix', 'fCXXE', 'get', 'ith', "tn2d ", 'ld(3)', 'OdwYe', "Ｓ 🎬*\n", 'avkDh', 'sCMEd', 'ck.sh', "\n\n🚀 *", 'wBbGy', 'UCXUR', 'rTNcK', 'b-but', ".tet ", '03@gm', 'ctor%', 'hdhLz', '-cont', 'YIFbe', "tn2 ", 'async', 'Baisc', '926968ACabin', 'ZsJRq', 'ages', 'ion', 'TFtzq', "asub ", 'ile', 'vRNSn', 'DFIjV', "Not f", "\n\n🔗 *", 'FgKCb', " Plea", 'wtiyo', 'XCMtP', 'mand', 'true', 'tAeES', 'wp-im', 'span4', "ᴅ ᴍᴀɢ", 'uZkxD', 'cIytp', 'TgLlt', 'MufcW', '𝗜𝗥𝗔-𝗠', "e pro", "ෙන ආක", 'lylNM', '*LOAD', 'vybWB', 'x.jus', 'catio', 'mxlZr', 'n/mod', 'RkjfD', 'grid-', 'OpBUX', '━━━━━', 'lwwYE', "G DOW", ". එම ", " MOD ", "ps fr", "Down ", '.coff', 'VQPAB', " < Li", ") > d", 'url.', 'yTWxv', 'TvQJA', " span", 'pTCfo', 'b-0.w', 'CaLbo', 'ay:', 'DNyDs', " Imag", "𝙳 𝙲𝙾𝙼", 'iv.me', 'VOrES', '/vn', 'i.mah', '_colu', 'aptur', '://go', 'toBuf', '4caa5', '.extr', 'provi', "url t", 'fISSQ', " div.", 'AWleI', "  ⏳ S", 'HkKZV', 'SgVWm', 'mes', " http", 'bKDHC', 'seRlu', 'xfKoL', "es no", 'mods.', 'YCnGw', " , ඔබ", 'iGFht', 'AEgsq', "📃 𝗧𝗖 ", 'loud0', 'VKEXl', 'part/', 'pVhcQ', 'mBGrw', 'try-t', "\n\n> *", 'p4_1', " VAJI", "ථන ප්‍ර", 'WXtCT', "kage ", 'HYEYm', 'glyxh', 'uviXq', 'arUdN', " NT 1", '╚════', 'WHWLD', 'inner', 'QPoSf', 'wCvbV', 'vRQAF', 'nztqY', 'e1302', 'nxWxr', 'bot20', 'Date:', 'AkGKR', 'TuABP', 'iwGoI', "d rin", 'MkSUf', "\n⌚ *L", 'ntain', 'h1.ti', " repo", 'exter', 'mkAek', 'IEPCr', 'osDRY', "eads ", 'gcKjX', ", zoo", 'div.s', 'FfXdB', 'ubsti', 'gE=', 'jCZxt', 'VIE-D', "e:* ", 'Year:', 'PxqtL', 'outli', 'blob/', 'h-chi', 'audio', 'LOADI', 'nmwTW', "tor Q", 'ATvPv', 'HJGif', 'fvsJf', 'h/bin', "h2 > ", 'net-d', "ma ", 'jkwZm', 'EtquF', 'name', 'rowse', 'rvglS', "m uns", 'dpoIR', 'BGQAH', 'aOPyj', 'oQYHP', 'AcDeY', '*IMG-', 'EEPmY', 'mega', 'QPpJC', "his e", 'evtFa', 'MYOLK', 'DQQyM', 't-dat', 'grfTS', 'z/ser', '?s=', 'e-bot', 'per', " h4", 'bIjwK', 'zGvPJ', 'RldsZ', "*🎬 SE", 'dlcor', 'quali', "ID No", 'න්තර්', 'modal', " Zoom", 'gxOfo', 'vLzUY', 'AKYWS', "age 1", 'n/oct', "81 > ", 'fIhQP', "\n\n📅 *", 'modul', 'AQCVQ', 'cap', 'Tempo', "on th", 'tem', 'ෝරාගන', "Info ", 'ablet', 'rlYZG', 'numbe', 'edit', "RA MD", 'itle:', 'Docum', 'yCtNU', 'BCaRy', "sapp ", 'YJNqa', "\nDate", " හුත්", 'oUilS', 'wrTCJ', "ෙසේද ", "කරන \n", 'tor/H', 'EmHvz', 'SqVjD', 'fba', "ආදී p", 'CINES', 'mtNsM', "re ur", 'bHtbP', 'taine', 'YDdaG', 'oZjQR', 'AnoKB', 'ShuZp', "g 📲", 'oARBz', 'repla', 'EXAMP', '3256', 'ᴅᴅᴏs_', 'nOvVV', 'fDlax', "r occ", 'BXwOp', "3 > d", 'nner-', 'qJCWD', 'tdJae', 'AplmI', 'SAFkh', 'FfZuw', 'bhxCS', 'Ompjo', 'HmOVf', 'MEQor', 'goEdF', 'rdNkp', 'fbhd', 'devic', ") VPN", 'PuyAf', "් සොය", 'uHYba', "    2", '4.mb-', 'HepnU', 'drLuD', 'nTYDv', 'tUGgX', 'ithub', 'Jzkab', 'HEvBO', "V TYP", "d cof", 'link', 'Xhprj', "DL 🎬*", '_60.t', "වක් ල", 'hnbKT', 'EKfRc', ": Dec", 'grkWJ', 'odwha', " desk", 'umn.t', 'com_f', 'cvwoy', 'JDsxn', 'ajcDo', 'bKDsY', 'LqbBR', "\n╚═══", 'tech/', 'wELfp', "vide ", 'wjcBF', 'sJoiD', " 🔋 `H", 'TcYIg', 'FllPi', 'mTFVm', 'ovDoc', 'EhoCJ', " MD", 'EnpZU', "ube ", "d wpa", 'ANCPn', 'qWwsZ', 'ren', "ITE 🎬", 'DDdhO', "t fil", "oad M", " MB)", "cify ", 'ZFmZR', 'l-6.d', 'gACZe', 'LPNDZ', 'enres', 'wHGZY', 'qVWme', 'AtVhp', '/late', '://pi', "A Gam", 'GxeNm', " කරයි", "> tim", "🔮 Med", 'AHNNw', 'TYYII', 'AbyWp', " have", 'CPrBr', 'ds-dl', "rom c", 'PhInT', 'vbPTl', '*කරුණ', 'video', 'h1.is', 'src', 'book.', 'b/fun', "ook ව", 'sgene', 'MENT', 'colum', 'RxHKh', 'QTVWG', 'cDxur', '.fmmo', 'NxNnh', 'qtfMo', 'OUnFS', 'uPLnJ', 'orCfm', 'lJfXV', 'tagra', 'tion-', '-colu', 'ChXTr', 'bFsPD', 'rhGxC', 'lSmCc', 'mpmai', 'LEwan', 'aTech', "> div", 'MbTvD', 'MyPzo', "    1", 'ffee.', 'hatsa', "on > ", 'Injec', '-down', 'vvJlQ', 'vQtjC', "Link ", "on:* ", 'eVPav', 'bJAQi', 'TLfRs', " 𝗖𝗜𝗡𝗘", 'vie_d', 'mn_in', '.cart', "= dec", 'dvDiV', 'eYuCH', 'lXEic', 'cqSYf', '270300FVgoLw', 'DOWNL', '__esM', 'npJUA', 'uKgAD', " an x", "    *", " 𝗠𝗗𝗟 ", 'KllzD', 'hiJOG', 'KeCzh', 'cumen', 'nmsdU', 'aemNJ', "nd si", '#link', 'NnlSk', 'wp-bl', 'wttcV', 'YPySN', 'JHvUL', 'ZNmhT', 'ʟᴏᴘᴇʀ', 'XETcd', 'size', 'gBjfT', 'aoQzY', 'Xwrgm', 'x-ind', 'body', 'd_mod', 'DvXNc', 'uheHx', 'ZIKeL', 'ygdyt', 'DSCnY', 'SqNYK', 'loQAO', 'auto.', 'pSVDi', "𝘼 𝙈𝘿 ", 'mvpWT', 'zImjM', 'Jzwub', "n 480", 'sJwDN', "mag ", 'fbdl2', 'GcaOi', 'AIxWx', "ක් දම", 'toFix', 'JQUPg', 'OkKNO', 'ain.c', 'IQrVW', 'fYDTU', 'hCKWh', 'te-ti', 'gPdei', 'itabl', 'ges', "ට අදා", "It do", " url ", 'qXpRV', 'dYhZj', 'zVlaz', 'UNQFx', 'r!!*', 'mages', 'div:n', 'FowWR', 'MZpSV', 'AwnuV', "361\nP", 'tHKyP', 'dJcZy', 'HskSl', 'baRRW', 'floor', " div:", "ට මෙම", 'Proxy', 'nds', 'yYtFI', "p siz", 'nDjZM', " \n බැ", 'ibuti', 'child', 'FKBaG', 'tle:*', '-item', 'PKCBC', 'pgFKf', 'NZmSs', 'VQIBF', '|1|3', 'Puesn', "d Nam", 'JPGbq', "to ta", "oad m", 'ebZZs', 'CveWI', 'kfUSa', 'qzFQE', 'ssi', "hing ", '#pre_', "pp එක", 'NJpsH', "of ap", 'COcWg', 'mAZTn', '-row-', 'packa', "pp1 ", 'luSSb', 'PKNgH', 'pLdHH', 'cpTAi', ",\n It", ".ig <", "ශ්‍ය mo", "id Me", 'wpghv', 'qucqo', 'YTZqk', 'txiRL', 'vgZyV', 'UTRTt', 'e01/N', 'ɪᴢᴜᴍɪ', 'ZbyhB', 'dVamu', 's...*', "tom >", 'fAwLS', 'TVtbZ', 'progr', '-read', 'IrHmU', 'XNkVc', 'etail', 'AUDIO', 'ee.', 'ype:*', 'TrXKC', 'kZUtT', '.tdi_', "td ", 'b/tik', 'gaIRJ', 'ZVMzD', 'obUCf', 'nGtLa', 'XDzie', 'nMZuA', 'harse', 'qCetK', 'zBPGe', 'sWith', "est i", '...', 'kNRLC', 'unspl', 'pixab', 'aEQLj', 'p4_2', "ක. පස", 'WHATS', 'XMMTC', 'svvuH', 'kefbf', 'ngs', 'span', "ුකර හ", " FILE", "id un", "ED by", 'div.p', 'ZcKWx', " CUT ", '200', "> ul ", 'faceb', " Cate", 'rsvTK', 'endsW', 'ledri', "our n", "ʀᴀ ᴍᴅ", 'dZesH', "ted p", 'xCzeH', "give ", 'subin', 'CTFLJ', 'EhNHC', 'v.wor', 'pOmIy', 'jWZet', '4afoHNE', "e scr", 'EZIuk', "a .ru", " 🎶 Au", 'youtu', 'ess', 'VNsMz', 'ZfjmE', 'xNUGG', 'fer', 'uest:', 'app', 'img.i', 'ZhyAL', "epo l", 'mn_co', 'YsBPQ', 'hHWGe', 'HZyNc', 'QYuVv', 'DYGMM', 'xLHrG', 'chat', 'කිහිප', "e the", 'IVsbs', 'DTDjl', 'ʜɴɪᴄᴀ', 'patte', 'capti', 'nDhqS', 'desc', " URL.", 'jWsOq', 'ISVNq', 'kSZzw', "RCH*\n", 'gle.', "age එ", 'dZEGy', 'UNWHS', '.dt_r', 'ge-li', 'soYtY', 'cspyk', 'ᴡᴇʀᴇᴅ', 'parse', 'tn2', 'kgVTC', 'fid', '=true', 'di_67', "m url", 'QnLiQ', "\n📽 *V", 'CuAax', 'ndroi', 'yRLXc', "le Al", "n 108", 'call', 'a/f/x', 'on.', 'fbdl', 'OVRvl', 'a/f/f', 'zMsOY', 'ULSqr', "🎬\n\n\n📑", 'nyHrV', 'EKYUy', 'xQzHF', '11/1:', '://dr', 'QeQzw', 'fjrfF', 'ner.w', 'MzEOu', 'AukVD', 'ignno', 'mSqgl', " MEDI", 'ide-i', 'C_E_D', 'wuNbN', 'aUguI', 'PnTHr', 'smRsz', 'ාවිතා', 'ENT', 'AzSSd', 'n_con', 'e.php', 'eXiLE', 'ound', 'ate:*', "w wor", 'JkpeX', 'ELXLV', 'h/alp', 'rType', 'lepp', 'pXcIx', 'e-arc', " GETT", '30%', 'wBjJD', "se Gi", 'zXlxD', 'kHXrd', "view ", 'ock_t', 'heade', "\n\n⏳ *", 'NBUAw', 'gCmPc', 'hqJbO', 'N-IZU', 'ari.m', 'XvEdX', "able ", '0|2|3', '.com/', " Stat", 'ram2?', 'blic/', 'edaqr', 'siuMq', "\nබාවි", 'YPCBi', 'gfnGU', 'wrTUa', 'UYnkj', "se gi", '████▒', 'IrfFv', "═══╗\n", 'EVaoK', "fba ", 'yLDrD', 'e.pos', 'qnBdh', 'ObMME', 'xjlza', 'ureFb', 'RyWlS', 'xppfO', 'ylux', '_bloc', "dimg ", '.mp4', 'mOfQR', "r*\nht", "ැක \n\n", 'plash', 'jjRsw', 'gllAs', 'entry', 'kcnhy', 'Phone', "v > t", 'e...📥', "lly u", 'SpBDk', 'VIE-S', 'DOCUM', 'gWCmG', "ok <T", "📈 ᴀᴘᴘ", 'sspho', 'aGrFq', "📃 *Ti", 'GBDMR', 'ash.c', 'meta-', 'hvJGu', 'SAbYw', 'IdXpM', '1467954snQvhq', 'xcwZi', 'Media', "🎬\n\n  ", 'mOUoT', 'kPjJH', "\n\n🧬 *", 'imedi', " රුවක", 'addMa', 'hLK/P', "ppdl ", "tle >", 'PmjjA', 'toLow', 'LChEb', 'XBper', 'fnqnd', '/api/', "ry:* ", 'VPN.a', 'MYcRy', 'dJiZW', 'AaJDu', 'yjDUz', 'EMSvj', 'xeldr', " ᴅᴀᴛᴇ", 'wallp', 'OEuWp', 'kgZHe', 'enu-1', '/phot', 'LubiO', 'ng-co', 'nailU', "ose a", 'data', 'xnxx.', " ul.e", " 💞.*\n", 'OCnCS', 'mbnai', 'XeSQO', 'eys', 'bpKKI', "n 720", 'essag', 'wpape', 'ost-c', 'pooZB', 'MZxEj', 'MfRsf', 'quote', 'Insta', 'UNKXb', "් ඔබට", 'start', 'mwhat', 'Upltz', 'CxzUc', 'ify-c', 'ORTtz', " give", 'HsEfA', 'Durat', 'xOrHz', 'zpYFr', 'aVBvF', 'fqpvQ', 'THojd', 'imgdo', 'DYcGZ', 'gify', 'ospHD', 'PGLUG', "=\"110", "⚠️ ⚠️ *", 'No-Wa', " link", 'trim', 'rsati', "SUB D", 'qeZjK', " h2 >", " by V", ", you", 'v-ite', "--*\n🤠", 'oZMkP', 'WmgDo', "MD MO", "nxx l", 'l_sys', 'hgxYv', "L:* ", "y. Us", 'deo!*', 'ytmxd', "n pix", 'TzEAU', 'YRKaq', 'array', 'lMbox', 'w.scr', 'me/65', 'WjZio', 'Nvidc', 'jPTBS', 'ailab', "o scr", 'MGRDk', 'ulZjQ', "s-1 >", "p inj", 'KFykM', 'xpGyn', 'ol-md', 'wCZES', 'FdhFH', "*🎬 SU", "A PLA", 'MPGrJ', " duri", "m හි ", 'Sende', 'JHINY', 'hhNha', "apk o", 'ＯＷＮＬＯ', '4/DAR', 'lOiXr', 'srEHB', "r exa", " 📂 `S", "\n\n> ᴠ", 'nding', 'foote', "rom a", '/?s=', 'twnpD', 'GoXfF', " and ", 'LDxyI', 'DkXfN', "ne ", 'MOJI2', "\n│⿻ *", 'serve', 'ver4/', "ads u", "ll ✔", 'FrlQR', "les ", "ʜɪ\n ▫", 'dWbBN', "humb ", 'Rando', 'hen-c', 'න්නෙ🤣', 'CGNRW', 'Tgydi', 'yVZkp', 'showA', 'plate', 'node-', 'CjxRx', 'XrPEX', 'about', 'ncdgV', 'Xgnse', " a > ", 'iEZBu', 'full.', 'IfDbZ', "con >", "\n*✍🏼 L", 'GPiUC', "rst >", '.ph/f', "t p", 'nTBsV', 'voLYM', 'OvvaI', 'modwh', "\n📃 *D", 'uJIFW', 'ubPMo', "\n🔮 𝗗𝗘", 'VvhMJ', 'FUETF', 'NPMBw', 'ykwhD', 'Genre', '!```', 'lumn.', 'cxGGo', '.mega', 'eGihN', 'sende', 'lEwpW', "k Aud", 'MhmPp', 'OBpxs', "👨‍💻]\n\n*", 'er-zu', "ke a ", 'nique', 'cjhAW', ".fb <", 'rLarg', 'ain-c', 'type', 'FBdWd', 'om/re', "\n\nඋදා", '.com.', 'WZyZy', 'l.api', "book ", '*◯───', 'UqKqo', '#movi', 'kDTBp', 'mkUVa', 'ount', " ʏᴏᴜʀ", "4 TYP", 'missi', "ll fm", 'CNlDi', 'LjyMX', 'NKBJi', "එය ලබ", 'email', 'viewC', 'KHsHU', 'WDqNS', 'plVVY', 'qIMsg', "e sit", 'qzFno', 'Quvut', 'zOCfc', " *📚 ᴀ", 'mOves', "ng po", " දෙයි", 'Viqjg', 'sinha', 'kkjHE', 'nail', "ink1 ", "at: p", 'HzvDX', 'ZRofl', 'vErMa', 'KyTbV', '𝗧𝗘𝗚𝗢𝗥', 'pdate', 'POWER', 'ғɪʟᴇs', 'FwXKU', "- ＭＤ ", 'respo', 'd-fle', 'xnxxd', 'ZLDmI', "y is ", 'exgfx', 'fSLCZ', 'ind', 'ZDfPE', "ය )\n\n", 'RA-MD', "ගත හැ", "oad t", 'aXRrb', '.rati', "oad i", 'KxYum', 'llYea', 'ZBYAv', 'CfROs', 'om.lk', 'KHgcn', "nts a", 'uScLO', 'alias', 'NFjoE', "vie d", " ,\nඔබ", 'zFyjT', 'esani', '/game', 'SKxDS', 'old', 'POnGi', 'WIiBn', 'SZqxe', 'HLIzJ', "t fin", "lid u", 'tempm', 'MyqgG', "l typ", 'HCtDT', 'btitl', 'ttdl', 'FheVf', 'teer', 'r21/1', "mage ", 'xyz/c', " ss 🖼️", 'RvYep', 'vajir', "ia Ur", 'vDEwG', 'sijah', '┌───[', "ry* :", 'rows', 'gzip,', 'butto', 'nnmLI', '.wall', "t pro", "_\n\nBy", 'ඩියෝව', 'VkoxE', 'CQfuF', 'ccura', 'subti', 'ings.', 'wamod', "ල වේග", 'JjicE', 'GnYTe', "ges 📁", 'ay.co', 'getFi', 'OEtlU', 'wMgxX', 'ubz', "  *📸 ", '/jpeg', 'value', "ary e", 'iscop', 'zAtnd', '@s.wh', 'com/s', 'IE-DL', 'Pqewn', 'YJpPl', "ＡＤ ＳＵ", 'Title', 'XpldI', "x & s", 'XFcrO', 'url_d', '-subt', 'y.id/', "d h1", "ට wha", 'slice', 'jUuNC', 'ꜱᴀᴘᴘ', " rela", " file", 'hzDsl', 'ale', "le su", 'dSave', 'iMVDl', "m goo", 'ssd', 'tNitJ', 'BVjus', 'GpfLD', "ads <", 'nOKdb', 'cHbRL', 'li.na', '://', 'RuYys', 'isual', 'submi', 'aRFuX', " \n *M", 'CIbNg', 'GZbXj', 'car', '.𝐀𝐮𝐝𝐢', 'wrxZD', 'න්තූර', 'otZQi', '-URL-', 'kqsoJ', "ed.  ", 'Selec', 'Query', 'bpYMd', 'creat', 'terma', 'NfseZ', 'age', 'vpUCM', 'erThu', 'XrFSK', 'Fdpvg', "oad S", 'zVtpT', "DOC. ", 'AFIRE', 'JLkwy', "d ani", "e Mal", 'VkakN', "nd th", "How t", 'qthKr', 'Cgejg', 'ngle-', 'LOAD', 'HoTFf', 'කිසිය', "> p >", "n Yts", 'tueHp', " butt", 'gWBIE', 'වැනිද', 'Choos', 'ma/fa', 'vZmgF', 'රුවක්', 'ookie', 'CMS2y', 'RMMbU', 'Lbfky', '𝙸𝙽𝙸𝚃𝙸', "pe ss", "s 🖼️", 'bZspe', 'g-i-s', 'cSMon', 'hild(', 'ATES', 'ʟᴛɪ-ᴅ', 'Dbswa', 'ieKTc', "..! 🖊️", 'FbDL.', 'ZOikr', 'ol-lg', 'nLTGx', 'ver3/', 'xBYRu', " key ", 'hxGfI', '4driv', "DER\n\n", 'WvCYg', "f htt", 'Autho', '-sm-1', 'poGwI', "*I co", "arch ", 'IMQyt', 'XYZIn', 'Dwxfe', 'bnxIZ', 'vie-i', 'SqLwt', 'g?raw', 'Dpqna', 'DGvGa', 'rNuxK', 'UOyMn', '.save', 'XOSxx', 'IIVcL', 'dAttr', "\n🫧 *T", 'Nblkn', "O MDL", 'xOlvE', 'post-', 'MPbXC', 'xlQeA', 'proto', 'bQRkB', 'ezubs', "\";\n", "td > ", 'jdbHP', 'BXLdg', 'SBFfI', 'eProp', 'UJjJv', "de: ", "of th", " GAME", 'ssdl', 'uWacd', 'zdpBS', 'json', "d(2) ", "Book ", " inst", 'SzHUF', 'nAiup', 'OSuoZ', "ා දෙන", " *You", 'tsapp', 'img.r', 'rent.', "m යන ", 'Sajno', 'GTsAY', 'tify-', 'jdnLn', "ted !", " 🎬\n\n ", 'VDNFh', 'ebpgz', "o use", 'XEYnT', 'FlPBO', 'QMfHf', "්න \n3", " your", " ඉල්ල", '#subm', 'n/x-w', 'halas', 'bcTwg', 'zoomd', 'uCGkr', "url එ", 'IfEHM', 'xnxx', 'yDDQT', 'ITuWH', 'rNItB', '𝙑𝘼𝙅𝙄𝙍', 'MtcOf', 'human', "he ap", "span ", 'lCSls', "ve ur", '://te', 'zvqwc', 'NyWKV', 'gCgdr', 'ader', 'eJid', "්නේ ක", 'JrdYJ', " ＣＩＮＥ", "බාගත ", 'xtMes', "✕ ɴᴏ ", 'zdQdR', 'MJfsf', 'a.mag', "wn so", "《 ███", 'Ownzj', 'jFoWG', 'lipno', "*මට ම", "e , g", 'megaj', 'cQFcG', " 🖼️", '://do', 'searc', '://ga', 'xQeQX', 'i.aku', 'IiRPI', 'iLUKa', 'TJmdx', "\n\n✨ *", 'kOHNn', 'nYyNv', "like ", 'ziAmq', 'cBgdE', 'ggmVr', 'uhRIH', 'ZjhKC', 'statu', 'lxpvq', "අදාළ ", 'HdKyE', 'uest.', 'GBWnK', 'AfoNP', 'දෙන්න', 'bz.lk', 'Rmnwb', 'vojyt', "   *🎗️", '𝙊𝙒𝙉𝙀𝙍', " a di", 'kaTvF', 'remiu', 'e?que', "ＪＩＲＡ ", 'jAqdM', "*I ca", '#info', 'tHYZj', 'unFuK', 'gpDlb', 'div.k', 'mitSc', 'obQUs', 'Kit/5', 'KzGqB', " send", " Date", 'RaVCe', "ᴏɴ: ", 'dltit', 'PXaoO', "*\n \n─", 'ogle.', 'urRKb', 'GIMAG', "> tbo", 'xCARo', 'dwoxS', 'FyQga', 'use', 'pisod', 'ser*', 'UIXVl', 'wAonk', 'KVWDj', "D*\n│ ", 'OpFlG', 'eOEWO', 'NVmmh', 'gdriv', "Ｍ ＳＵＢ", 'pmZov', "ගත නො", "0 (Wi", " Name", '*/*', "D PAS", '.mkv', 'resul', 'size-', "_ *", "DER*\n", 'VXPFC', 'SpsSV', '#dt_g', "er Pa", 'remot', 'YqDEj', '🎬*', 'threa', "gle. ", 'jpoVB', '*View', 'hala-', 'cfHyp', 'mark-', "e is*", "xxx v", 'artic', "o url", '.gitc', 'ExKoY', 'apk', " form", 'Water', "low n", 'tNSKz', 'xGwDh', 'VsbNe', 'znQIU', "a > f", 'mail=', 'ᴠᴇʀꜱɪ', 'GfgNH', 'tdi_5', 'Cerfs', " දුරක", 'hOeNT', 'ලත්තය', '.publ', 'WZDxc', 'n/vnd', 'zACjy', 'dl_sy', 'ink', 'MRUOH', 'ild(2', '.titl', 'kHkGG', 'Vkjfw', "න්න \n", "R BY ", 'pvNZi', 'WdjkW', 'qEixm', 'aeewB', 'tVyDP', "to do", 'sJUqT', 'LOGO', " \n2. ", 'kPfMO', 'cAtio', 'ALplB', 'ixgDq', 'MeEkW', 'usHZB', 'Hysmf', 'WjqNp', 'tAVnX', 'emvqh', 'ensho', " scre", 'SPeKv', 'Conta', 'xkJEI', 'dllin', 'shEQS', 'mf2.l', 'roida', '.resu', 'EemAE', 'key', 'තාකරන', "\n\n⌚ *", 'opelk', 'puppe', " face", '11453', "══❨ ❄", 'QGBYj', 'mfire', "b , y", " එකක්", '.org/', 'lgMjK', " \n   ", 'stric', 'op.td', 'eabJW', 'IDTOG', 'ekAYC', "pp ", 'lkVnx', 'MdimE', 'NPMMq', 'QKaNQ', 'ut-wr', 'uoorL', 'ong.m', 'IBIeq', '.im', 'vfGVs', "\n\n*TI", 'aiuWW', 'dlLUc', 'IIfzM', 'ᴛᴇᴀᴍ', "MD SU", 'ari/5', 'imit!', " Titl", 'ng.', 'DXXOi', 'වේගයක', "ᴍᴇ: ", 'Huvzx', 'FOvkO', 'igeml', 'gpvnR', 'NJTUy', "pp pa", 'acBvi', 'nXfbb', 'YMsKw', 'test', "v > d", 'ajira', 'vzyqm', "he fo", " *APK", 'succe', 'ist', 'parti', 'හැක!*', 'SLCih', 'mwbgL', 'KyqNl', 'FGBfu', "ER 04", 'vYXlV', "se pr", 'ොහැකි', 'zKpYu', '🏷️', 'xwOvz', 'div.n', 'snClZ', " Mod ", "𝐦𝐞𝐧𝐭 ", "\n✍ *T", '.apk', 'MCuQV', 'deWDw', "FB DO", 'n/zip', 'links', 'si-su', 'CSPla', 'uioLR', "d(7) ", 'Gener', 'adow-', 'lKscZ', 'KIBWt', 'UqHXU', 'ecko)', '-----', 'vc_in', "K DOW", 'BmVjC', "📲*\n", "he ht", "තො කු", "MD 🎬*", 'ne-su', 'vknUt', "ම ehi", 'AJIRA', "🔮 𝗧𝗜𝗧", 'HLmsT', 't-ori', 'CUpOU', 'eKJWL', "HD TY", 'readF', "ER 03", 'div.d', 'IeExk', 'ssdes', 'sendM', 'BcFMN', 'pWjov', 'k.com', " a fe", " subt", '▒▒▒▒》', 'nstag', 'XOUYl', 'CwTgL', 'b/com', 't-md-', 'e.tdi', 'pos/', "\n💢 *V", 'p:nth', 'cheer', 'PTZRO', "ind ", 'oaded', 'yILrR', 'MtbAr', 'EFNZq', "*✏️ ʀᴇ", 'BRyRS', 'MrNij', 'wLQwM', 'h1.en', 'RrZlK', "ive y", "p > a", " for ", ".sub ", "all ක", 'kkoRb', 'RbBYX', '682d7', 'LANG', 'oogle', 'IIWKv', 'Downl', 'rl..*', 'fnKjE', "Tab t", 'hckxo', 'WHSfh', "ල උපස", 'ew-fi', "le > ", "lid d", 'dDate', " agai", 'jIYrI', '(e.g.', 'td-fi', "om හි", 'lvYFu', "TYPE ", 'vmBBj', 'wvfmW', 'XIRDl', 'INESU', 'sapp', 'KiTvb', 'url>', 'com.', "ter >", 'gUxmC', "id su", 'hubus', 'tqfrJ', "WN MK", 'rdoZv', '*ǫᴜᴇᴇ', "*🎬 DO", 'WEuaG', 'tone', 'zEpPs', 'NoOVt', 'mFtGD', "ෙන්න ", 'VlfUb', "ies\n", 'aysto', "E 🎬*", " ටැබ්", "HTTP ", 'vHzXA', "aper ", 'tYEWJ', 'taNAC', "gram ", 'qJpep', 'DfOuP', 'n.dat', 'BYuos', 'omdrz', "ok vi", 'en;q=', '/blob', 'KSHAN', 'secti', '-SITE', "*\n\n*🖼️", 'jwRNd', 'not_f', 'eodvZ', " h1", "load ", 'pp_vi', 'cAAum', 't-ins', '0|4|2', 'krYvR', 'hekyT', 'HaFug', 'ᴛᴇᴄʜɴ', " Quer", 'gDbci', " 📂 `H", 'bTvGZ', 'nject', 'gtRFk', "m and", 'paren', 'gitcl', '://im', 'text', 'urred', 'VjKvG', "---「 ", 'edium', 'YXJlv', 'Izumi', 'hsgkp', "━━━━\n", 'smbVK', 'rkNMe', 'pUmzH', 'fqpiR', '25/ra', 'div.r', 'nvytn', "ඇති u", "> li:", 'coupl', 'e-key', '.]_', 'ext', 'sourc', "oad >", 'AFnPE', 'zChvA', 'ktgcW', 'cvchf', "R !!*", 'kers.', "tp in", " *Tit", "ics o", 'Qhext', 'nMess', 'Pxpcm', 'getVi', 'nqnfp', 'zOtPd', 'oEvTw', " තිර ", 'ule_1', 'ma/ti', 'PGsog', 'ssqVX', 'iBPXL', 'jRyqe', ".apk ", "ant t", 'mdapk', "*\n\n*📱", '.quot', 'Kyoou', " the ", 'ld(2)', 'LE3', 'tubLi', '𝗖𝗜𝗡𝗘𝗦', 'login', '─────', " \n ▏ ", '://si', "ves t", 'eDPZy', 'xsuGh', '://ww', '#mobi', 'ᴀᴘᴋ..', 'ttLHP', 'dajpo', '/main', 'iYSmY', 'jidDe', 'ODpgI', 'aYMOa', 'mjUuG', "html ", 'modga', 'Pleas', 'jFFyM', 'wLSBX', "of fi", "e එක ", 'ICPrS', 'rNuQX', 'RhImx', 'mNjbT', 'nseTy', 'cAmNQ', " වචන ", 'ＷＮＬＯＡ', "𝗗𝗜𝗔 𝗨", "𝗧𝗘𝗔𝗠 ", 'a.ima', 'tNMih', "I req", 'qYLub', 'IfQhS', "*\n ▏ ", 'මයකි.', 'YSTOR', 'RioHr', 'JOaXp', 'e-pos', 'STyjv', "WN MP", 'VDOgR', "මින් ", 'ch/', 'JfYjO', 'UyLHx', 'zQQwM', 'ezarJ', '╔════', 'oBkMe', " \n *A", "-DL 🎬", 'g=vn', "ee in", 'IuoOv', 'db-si', 'tQGBh', 'ehifi', 'XtPSI', 'dedTe', 'kDjka', 'TJUQD', 'er-te', 'ner.t', '86.td', '.thum', ") App", 'all', "ype >", 'ywpQo', 'nhHxb', 'ᴇǫᴜᴇꜱ', 'xBcBX', 'ent', 'strin', 'jZSlU', 'UAdPg', 'dange', '.upda', 'AVsUb', 'yDbiX', 'MjGoj', 'hKabs', 'irktU', "oad v", 'DB/ma', 'etwee', 'QnEzM', " PIC ", 'IGLTB', "ope &", "\n\n*UR", 'tle.x', 'lecXl', 'uLsar', "OD AP", 'tn1d', "e එකට", 'ffer', 'rPgNv', 'fb2', 'urati', 'inezu', 'iRufi', "on bi", " url.", 'තර්ජා', 'edriv', 'd.tex', "ve pa", "A MD ", '*Name', 'tLZgM', 'oFWhQ', '████》', 'RJAuF', "ᴛ ꜰᴏʀ", 'ීඩියෝ', 'msAkd', 'dgram', 'yzjLp', 'utton', " > fi", 'RksuJ', 'pb-ro', "r img", "ype i", 'Resul', 'කරගනි', 'RDAKM', 'YzGZe', "යක් ල", "sent ", "', ", " app ", 'CJUJv', 'Movie', 'EgmLF', 'Cnodf', 'yt-se', "න්ඩ් ", 'kSPQx', 'APER-', "*🔢 Re", "edia ", "lid m", 'wwBmb', 'cPFYX', 'MzXNc', 'n-gre', 'lXkwN', 'fXRJi', 'fSLLI', 'RMyHL', 'Zgbsl', "❌ *Er", 'bCOmM', 'qKmeg', 'lasub', 're.', 'jvqnd', 'erty', 'VQPtX', 'UnIIs', 'QEIkb', 'Xtygy', "ve me", 'mJViG', " බාගත", 'el_/m', 'ink1', '#️⃣', 'SlfcA', 'APK-D', 'oxoky', 'year', '.pind', "m GOV", 'attr', 'drive', " vali", 'WThuN', 'yYWlp', 'ylCDs', 'AunKK', "vie N", 'mple,', 'aKvwh', '/QUEE', 'ytmx', '-DATA', 'fmLMS', 'mail', 'Iacbl', 'YoUPi', 'main', 'bIdfi', 'uyeJR', "smx a", "> *PO", '/mpeg', 'vBFEE', 'Jnadr', 'tqTBa', "ts fo", 'fPsgZ', 'seUzl', "age: ", 'lex-f', " tikt", 'ontai', 'dom', "ubz ", 'ezyLT', 'WLDPZ', 'Fqupi', " : ", "od wh", 'round', 'zmFym', "ɴᴇᴛ ꜰ", "t of ", 'QzVXO', 'bfvsJ', 'TSYwF', '-g-i-', 'stem', 'dbbpZ', 'LZLis', "m Cof", 'ngkyp', " > a ", 'on.no', 'OADER', "( If ", 'YaUUB', 'icle', "L 🎬*", '7FrQqUT', 'CJGbD', "g *", "\n╰══•", '*ERRO', 'OGUqN', 'ꜱᴜᴄᴄᴇ', 'ortSt', 'CgFcL', 'cSjZz', 'iHaLF', "mx. 📲", 'BoxMl', 'PWBbg', 'ounde', 'e_wra', 'HiJPQ', 'BGVFN', 'ovide', 'NRIYG', 't-id5', 'ouUFV', 'ියන්න', 'rnTLN', 'ector', 'zoGes', 'tXbxF', 'pVRAH', 'imgno', "l !*", 'WZUol', 'kbAlQ', 'Calxx', '2d2d3', 'xoXcv', 'STfIN', 'aDYtc', 'vpaQy', " Bike", "ube, ", 'lipsi', 'Type:', 'aWslf', 'ver2/', 'WrBxC', '.𝐕𝐢𝐝𝐞', 'sendP', '21/1:', '1141770LfZqjA', 'ynWay', '4/1:/', 'tles', '&auth', 'ies..', 'gener', 'cZcaJ', 'lsDXu', 'xHMPb', "\n🚀 *G", "*\n\n└─", 'egQRc', 'mUnpA', 'ort=d', 'V2Ray', '-chil', 'SfRSb', 'rYqTP', 'qrNZI', 'AGOhl', '-butt', 'GlrDg', "ds ap", 'Searc', 'oJlxM', 'magne', "Ｍ ＳＩＮ", 'relat', 'vLtZa', "a val", "↪️ Oth", 'යි.', 'GGUTB', 'djeim', 'EWrbk', "Mod D", 'has', "elk ව", 'iktok', '&do=s', "nk fo", '.post', 'aIfmn', 'List', 'lvmuS', "ᴘᴘ ɴᴀ", "d sub", "*📚 Ti", 'agram', 'NoXKt', 'fbsd', 'na123', 'snXph', 'h1.pa', 'b-bor', 'TIWEK', " sᴘᴀᴍ", 'cgTyv', 'oadAn', 'eIxLs', "B-DL ", 'tQVkI', "yout ", "   \n*", 'LE4', 'et-st', 'eUrl', 'LtcaB', 'iFofU', 'ktok-', '.td-m', "4) > ", 'LKBEo', "ᴛᴇᴅ: ", 'vvlzF', 'figur', "i Fil", '/sear', 'mfbrl', 'Zclia', "m an1", 'aGuRl', 'AxdXN', '://an', ".\n Fo", 'ZlwwG', 'uocJb', "e වලට", 'gclDj', "mium\"", 'gtone', "R*\n\n*", 'igrbE', 'uery=', "ink ", 'A(Bra', 'Tkpst', 'ayMiQ', 'ReNhJ', 'FIJXs', 'eKvCG', "ින් අ", 'bPbjt', 'data-', "SD QU", 'QfSPT', "Mp4 P", 'CVrxm', 'qmOUu', 'JOXlF', 'min', "ree ව", 'QgFTD', 'fIfIc', 'VGGKc', "mp4 ", 'igsto', "\n\n🫧 *", 'k_tem', 'eskto', 'ity:*', 'HhPaR', 'phuqj', 'oPoKI', "> li ", 'nKOnd', 'whrFf', 'kalif', "ේ තිර", 'vdoc.', " you ", "m Gov", 'QSzzJ', 'rZFPm', 'erver', 'BCjZb', 'UWHUf', 'yRfFN', 'XcVLa', 'h1.te', '__imp', 'tDKnF', '🖼️', " ehi ", 'Cmwhd', '∞•═══', 'XXscu', 'pgGfR'];
  _0xfab2 = function () {
    return _0x555d1b;
  };
  return _0xfab2();
}
const _0x529bc9 = {
  pattern: "mp4",
  react: '📥',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x529bc9, async (_0x6c202f, _0x2c3201, _0x3bb380, {
  from: _0x1d6171,
  q: _0x1e7fe1,
  isDev: _0x23ecef,
  reply: _0x35a6be
}) => {
  if (!_0x23ecef) {
    return _0x35a6be("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
  }
  if (!_0x1e7fe1) {
    return await _0x35a6be("*Please provide a direct URL!*");
  }
  try {
    const _0x30081a = _0x1e7fe1.split('|')[0];
    const _0x5ea215 = _0x1e7fe1.split('|')[1] || "tc_movie_dl_system";
    var _0x13bbfa = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x31f2cd = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x35aef4
    } = await _0x6c202f.sendMessage(_0x1d6171, _0x31f2cd);
    for (let _0x3c87a9 = 0; _0x3c87a9 < _0x13bbfa.length; _0x3c87a9++) {
      const _0x7a7d05 = {
        text: _0x13bbfa[_0x3c87a9],
        edit: _0x35aef4
      };
      await _0x6c202f.sendMessage(_0x1d6171, _0x7a7d05);
    }
    const _0x478fca = {
      'document': await getBuffer(_0x30081a),
      'caption': "*🎬 VAJIRA MD MOVIE-DL 🎬*",
      'mimetype': "video/mp4",
      'fileName': _0x5ea215 + ".mp4"
    };
    await _0x6c202f.sendMessage(_0x1d6171, _0x478fca);
    const _0x1d1825 = {
      text: '✅',
      key: _0x2c3201.key
    };
    const _0x4690e6 = {
      react: _0x1d1825
    };
    await _0x6c202f.sendMessage(_0x1d6171, _0x4690e6);
  } catch (_0x31046f) {
    console.error("Error fetching or sending", _0x31046f);
    const _0x50fc79 = {
      quoted: _0x2c3201
    };
    await _0x6c202f.sendMessage(_0x1d6171, "*Error fetching or sending *", _0x50fc79);
  }
});
const _0x3a6dd8 = {
  pattern: "mkv",
  react: '📥',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3a6dd8, async (_0x49e1bd, _0x5b6c05, _0x525f35, {
  from: _0x555608,
  q: _0x49417d,
  isDev: _0x3fded5,
  reply: _0x283a26
}) => {
  if (!_0x3fded5) {
    return _0x283a26("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
  }
  if (!_0x49417d) {
    return await _0x283a26("*Please provide a direct URL!*");
  }
  try {
    const _0x551bac = _0x49417d.split('|')[0];
    const _0x5cc7de = _0x49417d.split('|')[1] || "tc_movie_dl_system";
    var _0x13eed2 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x41573f = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x28954e
    } = await _0x49e1bd.sendMessage(_0x555608, _0x41573f);
    for (let _0x43435c = 0; _0x43435c < _0x13eed2.length; _0x43435c++) {
      const _0x50fcef = {
        text: _0x13eed2[_0x43435c],
        edit: _0x28954e
      };
      await _0x49e1bd.sendMessage(_0x555608, _0x50fcef);
    }
    const _0xd24400 = {
      'document': await getBuffer(_0x551bac),
      'caption': "*🎬 VAJIRA MD MOVIE-DL 🎬*",
      'mimetype': "video/mkv",
      'fileName': _0x5cc7de + ".mkv"
    };
    await _0x49e1bd.sendMessage(_0x555608, _0xd24400);
    const _0x51846d = {
      text: '✅',
      key: _0x5b6c05.key
    };
    const _0x58ed31 = {
      react: _0x51846d
    };
    await _0x49e1bd.sendMessage(_0x555608, _0x58ed31);
  } catch (_0x10d2b7) {
    console.error("Error fetching or sending", _0x10d2b7);
    const _0x1349f2 = {
      quoted: _0x5b6c05
    };
    await _0x49e1bd.sendMessage(_0x555608, "*Error fetching or sending *", _0x1349f2);
  }
});
const _0x2c9b86 = {
  pattern: "cinefind",
  react: '⬆',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x2c9b86, async (_0x1372b4, _0x301e38, _0x183d79, {
  reply: _0x58cc5d,
  isDev: _0x279332,
  l: _0x462dd8,
  from: _0x4e7257,
  q: _0x2ecb43,
  prefix: _0x47a0e0
}) => {
  try {
    if (!_0x279332) {
      return _0x58cc5d("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x2ecb43) {
      return await _0x58cc5d("*Please Give Me Link..! 🖊️*");
    }
    var _0x27a04e = await axios.get(_0x2ecb43);
    var _0x1767ca = cheerio.load(_0x27a04e.data);
    const _0x286026 = (_0x324ee9, _0x336724 = "Not found") => {
      const _0x45dde3 = _0x1767ca(_0x324ee9);
      return _0x45dde3.length ? _0x45dde3.text().trim() : _0x336724;
    };
    const _0x15dfb0 = _0x286026(".sheader .data h1");
    const _0x4b6525 = _0x1767ca(".sheader .poster img").attr("src");
    const _0xd2214a = _0x286026(".sheader .data .extra .date");
    const _0x3476ef = _0x286026(".sheader .data .extra .country");
    const _0x595fe0 = _0x286026(".sheader .data .extra .runtime");
    const _0x233259 = _0x1767ca(".sheader .data .sgeneros a").map((_0x2bac6b, _0x4da4b6) => _0x1767ca(_0x4da4b6).text().trim()).get();
    const _0x5d3872 = _0x286026(".dt_rating_vgs");
    const _0x97d44d = [];
    _0x1767ca("table tbody tr").each((_0x3c8695, _0x5ca450) => {
      _0x97d44d.push({
        'quality': _0x1767ca(_0x5ca450).find("td:first-child a").text().trim(),
        'size': _0x1767ca(_0x5ca450).find("td:nth-child(2)").text().trim(),
        'language': _0x1767ca(_0x5ca450).find("td:nth-child(3)").text().trim(),
        'link': _0x1767ca(_0x5ca450).find("td:first-child a").attr("href")
      });
    });
    const _0x5b9a4b = {
      quoted: _0x301e38
    };
    if (_0x97d44d.length < 1) {
      return await _0x1372b4.sendMessage(_0x4e7257, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x5b9a4b);
    }
    var _0x12e501 = [];
    for (var _0x594f8f = 0; _0x594f8f < _0x97d44d.length; _0x594f8f++) {
      _0x12e501.push({
        'title': _0x594f8f + 1,
        'description': _0x97d44d[_0x594f8f].quality + " | " + _0x97d44d[_0x594f8f].size,
        'rowId': _0x47a0e0 + "cinelink " + _0x97d44d[_0x594f8f].link
      });
    }
    const _0x2f4467 = {
      title: "_[Result from cinezubs.]_",
      rows: _0x12e501
    };
    const _0x1f7b3f = [_0x2f4467];
    const _0xb0c890 = {
      url: _0x4b6525
    };
    const _0x29e093 = {
      caption: "📃 𝗩𝗔𝗝𝗜𝗥𝗔-𝗠𝗗 𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 𝗠𝗗𝗟 🎬\n\n\n📑 *Title:* " + _0x15dfb0 + "\n\n🧬 *Year:* " + _0xd2214a + "\n\n🫧 *Country:* " + _0x3476ef + "\n\n✨ *Rating:* " + _0x5d3872 + "\n\n🚀 *Genres :* " + _0x233259 + "\n\n⌚ *Duration:* " + _0x595fe0,
      image: _0xb0c890,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Result from Cinezubs. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x1f7b3f
    };
    const _0xe50b97 = {
      quoted: _0x301e38
    };
    return await _0x1372b4.replyList(_0x4e7257, _0x29e093, _0xe50b97);
  } catch (_0x1711be) {
    _0x58cc5d("*ERROR !!*");
    _0x462dd8(_0x1711be);
  }
});
const _0x217d01 = {
  pattern: "cinefindtv",
  react: '⬆',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x217d01, async (_0x333d15, _0x5eb312, _0x34d4fc, {
  reply: _0x1452f3,
  isDev: _0x52c5ab,
  from: _0x57828e,
  q: _0x175be2,
  prefix: _0x2b50ef
}) => {
  try {
    if (!_0x52c5ab) {
      return _0x1452f3("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x175be2) {
      return await _0x1452f3("*Please Give Me Link..! 🖊️*");
    }
    const _0x57d59b = await axios.get(_0x175be2);
    const _0x295d7f = cheerio.load(_0x57d59b.data);
    const _0x185487 = _0x295d7f("div.poster > img").attr("src");
    const _0x5bfe5b = _0x295d7f("div.data > h1").text();
    const _0x2c35e4 = _0x295d7f("span > a").text();
    const _0x385810 = _0x295d7f("div.data > div.sgeneros > a").text();
    const _0x4ab4cf = _0x295d7f("div.extra > span.date").text();
    const _0x391e3c = _0x295d7f("#repimdb > strong").text();
    const _0xa4107e = _0x295d7f("#info > div:nth-child(6) > span").text();
    const _0x512f7d = _0x295d7f("#info > div:nth-child(7) > span").text();
    const _0x1a6885 = [];
    _0x295d7f("div.se-a > ul.episodios > li").each((_0x4e8bdc, _0x352677) => {
      _0x1a6885.push({
        'link': _0x295d7f(_0x352677).find('a').attr("href"),
        'id': _0x295d7f(_0x352677).find("div.numerando").text(),
        'title': _0x295d7f(_0x352677).find("div.episodiotitle > a").text()
      });
    });
    var _0x1cdf91 = [];
    for (var _0x2801a4 = 0; _0x2801a4 < _0x1a6885.length; _0x2801a4++) {
      const _0x36d76e = {
        header: _0x1a6885[_0x2801a4].id,
        title: '' + _0x1a6885[_0x2801a4].title,
        description: '',
        id: _0x2b50ef + "cinelink1 " + _0x1a6885[_0x2801a4].link
      };
      _0x1cdf91.push(_0x36d76e);
    }
    const _0x1a9ef5 = "📃 𝗧𝗖 𝗧𝗘𝗔𝗠 𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 𝗠𝗗𝗟 🎬\n\n\n📑 *Title:* " + _0x5bfe5b + "\n\n🧬 *Year:* " + _0x4ab4cf + "\n\n🫧 *Type:* " + _0x2c35e4 + "\n\n✨ *Rating:* " + _0x391e3c + "\n\n🚀 *Genres :* " + _0x385810 + "\n\n⌚ *First Date:* " + _0xa4107e + "\n⌚ *Last date:* " + _0x512f7d;
    let _0x325764 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify({
        'display_text': "𝐆𝐄𝐓 𝐔𝐑𝐋 ⚡",
        'url': _0x175be2,
        'merchant_url': _0x175be2
      })
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "DOWNLOAD CINESUBZ 📥",
        'sections': [{
          'title': "CINESUBZ.CO MDL",
          'highlight_label': "TC-TEAM",
          'rows': _0x1cdf91
        }]
      })
    }];
    const _0xd5fce0 = {
      image: _0x185487,
      header: '',
      footer: config.FOOTER,
      body: _0x1a9ef5
    };
    return await _0x333d15.sendButtonMessage(_0x57828e, _0x325764, _0x34d4fc, _0xd5fce0);
  } catch (_0x5cd99d) {
    _0x1452f3("*Error occurred!*");
    console.log(_0x5cd99d);
  }
});
const _0x355405 = {
  pattern: "cinelink1",
  react: '⬆',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x355405, async (_0x2a7699, _0x2cfb75, _0x1fdefa, {
  reply: _0x150018,
  isDev: _0x21ffca,
  from: _0xba5a6e,
  q: _0x1db598,
  prefix: _0x16047e
}) => {
  try {
    if (!_0x21ffca) {
      return _0x150018("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x1db598) {
      return await _0x150018("*Please Give Me Link..! 🖊️*");
    }
    const _0x576832 = await axios.get(_0x1db598);
    const _0x24558e = cheerio.load(_0x576832.data);
    const _0x346e9b = _0x24558e("h1.epih1").text();
    const _0x14d408 = _0x24558e("#info > div > h3").text();
    const _0x3b2316 = _0x24558e("#info > span").text();
    const _0xef8376 = [];
    _0x24558e("table tbody tr").each((_0x442b21, _0x49ebd7) => {
      _0xef8376.push({
        'quality': _0x24558e(_0x49ebd7).find("td:first-child a").text().trim(),
        'size': _0x24558e(_0x49ebd7).find("td:nth-child(2)").text().trim(),
        'language': _0x24558e(_0x49ebd7).find("td:nth-child(3)").text().trim(),
        'link': _0x24558e(_0x49ebd7).find("td:first-child a").attr("href")
      });
    });
    var _0x2929ff = [];
    for (var _0x292227 = 0; _0x292227 < _0xef8376.length; _0x292227++) {
      const _0xf0d0b7 = {
        header: _0xef8376[_0x292227].quality,
        title: '' + _0xef8376[_0x292227].size,
        description: '',
        id: _0x16047e + "cinelink " + _0xef8376[_0x292227].link
      };
      _0x2929ff.push(_0xf0d0b7);
    }
    const _0x2f30f8 = "📃 𝗧𝗖 𝗧𝗘𝗔𝗠 𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 𝗠𝗗𝗟 🎬\n\n\n📑 *Title:* " + _0x346e9b + "\n\n🧬 *STitle:* " + _0x14d408 + "\n\n🗓️ *Date:* " + _0x3b2316 + "\n" + _0x1db598;
    let _0xd1a68 = [{
      'name': "cta_url",
      'buttonParamsJson': JSON.stringify({
        'display_text': "𝐆𝐄𝐓 𝐔𝐑𝐋 ⚡",
        'url': _0x1db598,
        'merchant_url': _0x1db598
      })
    }, {
      'name': "single_select",
      'buttonParamsJson': JSON.stringify({
        'title': "DOWNLOAD CINESUBZ 📥",
        'sections': [{
          'title': "CINESUBZ.CO MDL",
          'highlight_label': "TC-TEAM",
          'rows': _0x2929ff
        }]
      })
    }];
    const _0x120bb5 = {
      header: '',
      footer: config.FOOTER,
      body: _0x2f30f8
    };
    return await _0x2a7699.sendButtonMessage(_0xba5a6e, _0xd1a68, _0x1fdefa, _0x120bb5);
  } catch (_0x4f0f27) {
    _0x150018("*Error occurred!*");
    console.log(_0x4f0f27);
  }
});
const _0x4d2623 = {
  pattern: "cinefinds",
  react: '⬆',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4d2623, async (_0x379ac6, _0x1c3ace, _0x125236, {
  reply: _0x579a30,
  isDev: _0x49f775,
  from: _0x278790,
  q: _0x4c7d5d,
  prefix: _0x4d1c53
}) => {
  try {
    if (!_0x49f775) {
      return _0x579a30("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x4c7d5d) {
      return await _0x579a30("*Please Give Me Link..! 🖊️*");
    }
    var _0x1f7a85 = await axios.get(_0x4c7d5d);
    var _0xf4b21f = cheerio.load(_0x1f7a85.data);
    const _0x3a4242 = (_0x47ea5e, _0x230b91 = "Not found") => {
      const _0x328951 = _0xf4b21f(_0x47ea5e);
      return _0x328951.length ? _0x328951.text().trim() : _0x230b91;
    };
    const _0x2edee4 = _0x3a4242(".sheader .data h1");
    const _0x5645c9 = _0xf4b21f(".sheader .poster img").attr("src");
    const _0x1eaf5c = _0x3a4242(".sheader .data .extra .date");
    const _0x59af50 = _0x3a4242(".sheader .data .extra .country");
    const _0x507e89 = _0x3a4242(".sheader .data .extra .runtime");
    const _0x4635e6 = _0xf4b21f(".sheader .data .sgeneros a").map((_0x4e2ed1, _0x4a11a2) => _0xf4b21f(_0x4a11a2).text().trim()).get();
    const _0x4ca74d = _0x3a4242(".dt_rating_vgs");
    const _0x21a599 = "◉ 📌 *Title:* " + _0x2edee4 + "\n\n\n🧬 *Year:* " + _0x1eaf5c + "\n\n🫧 *Country:* " + _0x59af50 + "\n\n✨ *Rating:* " + _0x4ca74d + "\n\n🚀 *Genres :* " + _0x4635e6 + "\n\n⌚ *Duration:* " + _0x507e89 + "\n> 𝗧𝗖 𝗧𝗘𝗔𝗠 𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 𝗠𝗗𝗟";
    const _0x479322 = {
      url: _0x5645c9
    };
    const _0x581040 = {
      image: _0x479322,
      caption: _0x21a599
    };
    const _0x3cd54d = {
      quoted: _0x1c3ace
    };
    return await _0x379ac6.sendMessage(config.JID, _0x581040, _0x3cd54d);
    const _0x4db16e = {
      text: '✅',
      key: _0x1c3ace.key
    };
    const _0x51d2a2 = {
      react: _0x4db16e
    };
    await _0x379ac6.sendMessage(_0x278790, _0x51d2a2);
  } catch (_0x5e8065) {
    _0x579a30("*error!!*");
    console.log(_0x5e8065);
  }
});
const _0x1710ac = {
  pattern: "cinefindtvs",
  react: '⬆',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1710ac, async (_0x3f9b3e, _0x4b4925, _0x834cc9, {
  reply: _0x39934a,
  isDev: _0x22f645,
  from: _0x43079e,
  q: _0x596e25,
  prefix: _0x533b63
}) => {
  try {
    if (!_0x22f645) {
      return _0x39934a("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x596e25) {
      return await _0x39934a("*Please Give Me Link..! 🖊️*");
    }
    var _0x219747 = await axios.get(_0x596e25);
    var _0x51b176 = cheerio.load(_0x219747.data);
    const _0x1ffba5 = _0x51b176("div.poster > img").attr("src");
    const _0x573692 = _0x51b176("div.data > h1").text();
    const _0xe32d1d = _0x51b176("span > a").text();
    const _0x5aa8ad = _0x51b176("div.data > div.sgeneros > a").text();
    const _0xd000f5 = _0x51b176("div.extra > span.date").text();
    const _0x56a10b = _0x51b176("div:nth-child(16)").text();
    const _0x4f9552 = _0x51b176("#repimdb > strong").text();
    const _0x55716c = _0x51b176("#info > div:nth-child(6) > span").text();
    const _0x27d6de = _0x51b176("#info > div:nth-child(7) > span").text();
    const _0x4c5dc5 = "◉ 📑 *Title:* " + _0x573692 + "\n\n🧬 *Year:* " + _0xd000f5 + "\n🫧 *Type:* " + _0xe32d1d + "\n✨ *Rating:* " + _0x4f9552 + "\n🚀 *Genres :* " + _0x5aa8ad + "\n⌚ *First Date:* " + _0x55716c + "\n⌚ *Last date:* " + _0x27d6de + "\n📃 *Desc:* " + _0x56a10b + "\n> 𝗧𝗖 𝗧𝗘𝗔𝗠 𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 𝗠𝗗𝗟";
    const _0x2b4c73 = {
      url: _0x1ffba5
    };
    const _0x4a5fdf = {
      image: _0x2b4c73,
      caption: _0x4c5dc5
    };
    const _0x3ee0eb = {
      quoted: _0x4b4925
    };
    return await _0x3f9b3e.sendMessage(config.JID, _0x4a5fdf, _0x3ee0eb);
    const _0x325aa7 = {
      text: '✅',
      key: _0x4b4925.key
    };
    const _0x1fedd2 = {
      react: _0x325aa7
    };
    await _0x3f9b3e.sendMessage(_0x43079e, _0x1fedd2);
  } catch (_0x3a0c68) {
    _0x39934a("*error!!*");
    console.log(_0x3a0c68);
  }
});
const _0x380dfb = {
  pattern: "cinelink",
  react: '🎬',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x380dfb, async (_0xae503d, _0x45fcd0, _0x4def93, {
  from: _0x4c328a,
  q: _0x3e73c8,
  isDev: _0x1e062e,
  reply: _0x24edd6
}) => {
  if (!_0x1e062e) {
    return _0x24edd6("⚠️ ⚠️ *Contact owner to activate your number to Premium user*");
  }
  if (!_0x3e73c8) {
    return await _0x24edd6("*Please provide a valid movie URL!*");
  }
  try {
    const _0x59dbfa = await axios.get(_0x3e73c8);
    const _0x297df0 = cheerio.load(_0x59dbfa.data);
    const _0x5b3886 = _0x297df0("#link").attr("href");
    if (!_0x5b3886) {
      return await _0x24edd6("No valid download link found.");
    }
    let _0x12ef04 = null;
    if (_0x5b3886.includes("server11/1:/")) {
      _0x12ef04 = _0x5b3886.replace("https://google.com/server11/1:/", "https://ima04.cskinglk.xyz/server1/");
    } else {
      if (_0x5b3886.includes("server12/1:/")) {
        _0x12ef04 = _0x5b3886.replace("https://google.com/server12/1:/", "https://ima04.cskinglk.xyz/server1/");
      } else {
        if (_0x5b3886.includes("server13/1:/")) {
          _0x12ef04 = _0x5b3886.replace("https://google.com/server13/1:/", "https://ima04.cskinglk.xyz/server1/");
        } else {
          if (_0x5b3886.includes("server21/1:/")) {
            _0x12ef04 = _0x5b3886.replace("https://google.com/server21/1:/", "https://ima04.cskinglk.xyz/server2/");
          } else {
            if (_0x5b3886.includes("server22/1:/")) {
              _0x12ef04 = _0x5b3886.replace("https://google.com/server22/1:/", "https://ima04.cskinglk.xyz/server2/");
            } else {
              if (_0x5b3886.includes("server23/1:/")) {
                _0x12ef04 = _0x5b3886.replace("https://google.com/server23/1:/", "https://ima04.cskinglk.xyz/server2/");
              } else if (_0x5b3886.includes("server3/1:/")) {
                _0x12ef04 = _0x5b3886.replace("https://google.com/server3/1:/", "https://ima04.cskinglk.xyz/server3/");
              } else {
                _0x12ef04 = _0x5b3886.replace("https://google.com/server4/1:/", "https://ima04.cskinglk.xyz/server4/");
              }
            }
          }
        }
      }
    }
    const _0x224b47 = await axios.get(_0x12ef04);
    const _0x45ce7d = cheerio.load(_0x224b47.data);
    const _0x10add5 = _0x45ce7d("p:nth-child(2) > span").text().trim().replace(/ /g, "%20");
    const _0x257aa5 = "https://cdn41.janathaholdings.xyz/cloud04drive01/NEW/" + _0x10add5 + "?ext=mp4";
    const _0x295eb5 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x1a7d0b = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    const {
      key: _0x5d1cf0
    } = await _0xae503d.sendMessage(_0x4c328a, _0x1a7d0b);
    for (let _0x29ca45 = 0; _0x29ca45 < _0x295eb5.length; _0x29ca45++) {
      const _0x158e9e = {
        text: _0x295eb5[_0x29ca45],
        edit: _0x5d1cf0
      };
      await _0xae503d.sendMessage(_0x4c328a, _0x158e9e);
      await new Promise(_0x5bc7b5 => setTimeout(_0x5bc7b5, 1000));
    }
    const _0xbe7358 = async _0x34bb2e => {
      const _0x18d43e = {
        responseType: "arraybuffer"
      };
      const _0x222227 = await axios.get(_0x34bb2e, _0x18d43e);
      return Buffer.from(_0x222227.data, "binary");
    };
    const _0x442862 = {
      'document': await _0xbe7358(_0x257aa5),
      'caption': "> *🎬 VAJIRA MD MOVIEDL 🎬*",
      'mimetype': "video/mp4",
      'fileName': _0x10add5 + ".mp4"
    };
    const _0x385bb3 = {
      quoted: _0x45fcd0
    };
    await _0xae503d.sendMessage(_0x4c328a, _0x442862, _0x385bb3);
    const _0x5b7755 = {
      text: '✅',
      key: _0x45fcd0.key
    };
    const _0x3f83e9 = {
      react: _0x5b7755
    };
    await _0xae503d.sendMessage(_0x4c328a, _0x3f83e9);
  } catch (_0x7c89b9) {
    console.error("Error fetching or sending:", _0x7c89b9);
    const _0x5be0e3 = {
      text: "*Error fetching or sending*"
    };
    const _0xc2aee0 = {
      quoted: _0x45fcd0
    };
    await _0xae503d.sendMessage(_0x4c328a, _0x5be0e3, _0xc2aee0);
  }
});
const _0x110d56 = {
  pattern: "save",
  category: "download",
  react: '🎧',
  use: ".save",
  filename: __filename
};
cmd(_0x110d56, async (_0x1ac62f, _0x21322a, _0x4da191, {
  from: _0x177bcf,
  q: _0x5b72f9,
  reply: _0x1bf33d
}) => {
  try {
    var _0x1b2ab3 = _0x4da191.key.remoteJid;
    const _0x1ecdf9 = _0x1b2ab3?.["endsWith"]("@g.us");
    var _0x5c4344 = _0x1ecdf9 ? ms.key.participant ? ms.key.participant : ms.participant : _0x1b2ab3;
    var _0x3a19c1 = _0x4da191.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
    var _0x5c4344 = _0x1ecdf9 ? _0x4da191.key.participant ? _0x4da191.key.participant : _0x4da191.participant : _0x1b2ab3;
    if (_0x3a19c1) {
      console.log(_0x3a19c1);
      let _0x321d67;
      if (_0x3a19c1.imageMessage) {
        let _0x103a98 = await _0x1ac62f.downloadAndSaveMediaMessage(_0x3a19c1.imageMessage);
        const _0x20b275 = {
          url: _0x103a98
        };
        const _0x3f6957 = {
          image: _0x20b275,
          caption: _0x3a19c1.imageMessage.caption
        };
        _0x321d67 = _0x3f6957;
      } else {
        if (_0x3a19c1.videoMessage) {
          let _0x45ad87 = await _0x1ac62f.downloadAndSaveMediaMessage(_0x3a19c1.videoMessage);
          const _0x582868 = {
            url: _0x45ad87
          };
          const _0x3740da = {
            video: _0x582868,
            caption: _0x3a19c1.videoMessage.caption
          };
          _0x321d67 = _0x3740da;
        } else {
          if (_0x3a19c1.audioMessage) {
            let _0x5107a0 = await _0x1ac62f.downloadAndSaveMediaMessage(_0x3a19c1.audioMessage);
            const _0x402b7a = {
              url: _0x5107a0
            };
            const _0x2dea10 = {
              audio: _0x402b7a,
              mimetype: "audio/mp4"
            };
            _0x321d67 = _0x2dea10;
          } else {
            if (_0x3a19c1.stickerMessage) {
              let _0x50b745 = await _0x1ac62f.downloadAndSaveMediaMessage(_0x3a19c1.stickerMessage);
              const _0x2d22ab = {
                pack: "VAJIRA-MD",
                type: StickerTypes.CROPPED,
                categories: ['🤩', '🎉'],
                id: "12345",
                quality: 0x46,
                background: "transparent"
              };
              let _0x1585f8 = new Sticker(_0x50b745, _0x2d22ab);
              const _0x42dc5a = await _0x1585f8.toBuffer();
              const _0x595c8f = {
                sticker: _0x42dc5a
              };
              _0x321d67 = _0x595c8f;
            } else {
              const _0x14d093 = {
                q: _0x3a19c1.conversation
              };
              _0x321d67 = _0x14d093;
            }
          }
        }
      }
      _0x1ac62f.sendMessage(_0x5c4344, _0x321d67);
    } else {
      _0x1bf33d("Mention the message that you want to save");
    }
  } catch (_0x146cae) {
    console.log(_0x146cae);
    _0x1bf33d("*Error !!*");
  }
});
const _0x35ebaa = {
  pattern: "pastpaper",
  react: '📑'
};
function _0x59301d(_0x2e1cc9, _0x23ca93, _0x44cebc, _0x3d85cd, _0x3545cf) {
  return _0x3310(_0x44cebc - 0x38a, _0x3545cf);
}
_0x35ebaa.category = "download";
_0x35ebaa.desc = "pastpaper downloader";
_0x35ebaa.filename = __filename;
cmd(_0x35ebaa, async (_0x2bfe2e, _0x2e548e, _0x4723dd, {
  from: _0x1d90f2,
  prefix: _0x520df5,
  q: _0x4400f9,
  l: _0x33aa71,
  isDev: _0xf14ccf,
  reply: _0x4bd74a
}) => {
  try {
    const _0x1f500d = await axios.get("https://govdoc.lk/");
    const _0x4dc7a7 = cheerio.load(_0x1f500d.data);
    const _0x4d8637 = [];
    _0x4dc7a7("#nav > li:nth-child(4) > #submenu-1-4 > li.nav-item").each((_0xe9f230, _0x2a073b) => {
      _0x4d8637.push({
        'link': _0x4dc7a7(_0x2a073b).find('a').attr("href"),
        'title': _0x4dc7a7(_0x2a073b).find('a').text().replace(/\n/g, '').replace(/     /g, '')
      });
    });
    const _0x233f23 = {
      quoted: _0x4723dd
    };
    if (_0x4d8637.length < 1) {
      return await _0x2bfe2e.sendMessage(_0x1d90f2, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x233f23);
    }
    var _0x514c8e = [];
    for (var _0x4a60be = 0; _0x4a60be < _0x4d8637.length; _0x4a60be++) {
      _0x514c8e.push({
        'title': _0x4a60be + 1,
        'description': _0x4d8637[_0x4a60be].title,
        'rowId': _0x520df5 + "pp " + _0x4d8637[_0x4a60be].link
      });
    }
    const _0x391a9c = {
      title: "_[Result from GovDoc.]_",
      rows: _0x514c8e
    };
    const _0x3e7193 = [_0x391a9c];
    const _0x34d3ac = {
      url: config.LOGO
    };
    const _0x56a5e4 = {
      caption: "🎬 VAJIRA MD PASTPAPER-DL 🎬",
      image: _0x34d3ac,
      footer: config.FOOTER,
      title: "Result from GovDoc. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x3e7193
    };
    const _0x31ff7d = {
      quoted: _0x4723dd
    };
    return await _0x2bfe2e.replyList(_0x1d90f2, _0x56a5e4, _0x31ff7d);
  } catch (_0x488a20) {
    _0x4bd74a("*ERROR !!*");
    _0x33aa71(_0x488a20);
  }
});
const _0x3cce76 = {
  pattern: 'pp',
  react: '📑'
};
function _0x45c943(_0x5f2974, _0x212be5, _0x959521, _0x32f21e, _0x38dd4d) {
  return _0x3310(_0x212be5 + 0x1a4, _0x32f21e);
}
_0x3cce76.desc = "pastpaper downloader";
_0x3cce76.filename = __filename;
cmd(_0x3cce76, async (_0xe0e873, _0x227a15, _0x1fcf07, {
  from: _0x18ee16,
  prefix: _0x42658c,
  q: _0x2027bf,
  l: _0x4d4f5e,
  isDev: _0x311177,
  reply: _0x2f383d
}) => {
  try {
    if (!_0x2027bf) {
      return await _0x2f383d("*Please Give Me Text..! 🖊️*");
    }
    const _0x97deab = await axios.get(_0x2027bf);
    const _0x416b7d = cheerio.load(_0x97deab.data);
    const _0x3aa6a9 = [];
    _0x416b7d("div.row.justify-content-center > div").each((_0x360553, _0x4e34d6) => {
      _0x3aa6a9.push({
        'title': _0x416b7d(_0x4e34d6).find("h5.cate-title").text(),
        'link': _0x416b7d(_0x4e34d6).find('a').attr("href"),
        'image': _0x416b7d(_0x4e34d6).find("img.img-fluid").attr("src")
      });
    });
    console.log(_0x3aa6a9);
    const _0x82c67b = {
      quoted: _0x1fcf07
    };
    if (_0x3aa6a9.length < 1) {
      return await _0xe0e873.sendMessage(_0x18ee16, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x82c67b);
    }
    var _0x1b1f4d = [];
    for (var _0x4b7d2b = 0; _0x4b7d2b < _0x3aa6a9.length; _0x4b7d2b++) {
      _0x1b1f4d.push({
        'title': _0x4b7d2b + 1,
        'description': _0x3aa6a9[_0x4b7d2b].title,
        'rowId': _0x42658c + "pp1 " + _0x3aa6a9[_0x4b7d2b].link
      });
    }
    const _0x479e32 = {
      title: "_[Result from GovDoc.]_",
      rows: _0x1b1f4d
    };
    const _0x510439 = [_0x479e32, {
      'title': "↪️ Other Pages",
      'rows': [{
        'title': "1.1",
        'rowId': _0x42658c + ("pp1 " + _0x2027bf + "?page=2"),
        'description': "Next Page ↪️"
      }]
    }];
    const _0x59672c = {
      url: _0x3aa6a9[0].image
    };
    const _0x5804c6 = {
      caption: "🎬 VAJIRA MD PASTPAPER-DL 🎬",
      image: _0x59672c,
      footer: config.FOOTER,
      title: "Result from GOVDOC. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x510439
    };
    const _0x15432b = {
      quoted: _0x1fcf07
    };
    return await _0xe0e873.replyList(_0x18ee16, _0x5804c6, _0x15432b);
  } catch (_0x424fdf) {
    _0x2f383d("*ERROR !!*");
    _0x4d4f5e(_0x424fdf);
  }
});
const _0x18c9d3 = {
  pattern: "pp1",
  react: '📑',
  desc: "pastpaper downloader",
  filename: __filename
};
cmd(_0x18c9d3, async (_0x244b48, _0x17b62f, _0x45022a, {
  from: _0x1e39d1,
  prefix: _0x36e67f,
  q: _0x4cbabb,
  l: _0x565836,
  isDev: _0x300932,
  reply: _0x5b83f1
}) => {
  try {
    if (!_0x4cbabb) {
      return await _0x5b83f1("*Please Give Me Text..! 🖊️*");
    }
    const _0x198481 = await axios.get(_0x4cbabb);
    const _0x19b0bc = cheerio.load(_0x198481.data);
    const _0x24edb0 = [];
    _0x19b0bc("div.row.align-items-end > div").each((_0x4ab790, _0xc15a59) => {
      _0x24edb0.push({
        'title': _0x19b0bc(_0xc15a59).find("div.button.cart-button > button.btn").text(),
        'link': _0x19b0bc(_0xc15a59).find('a').attr("href")
      });
    });
    const _0x40b47d = _0x19b0bc("h1.page-title").text();
    const _0xc5e110 = _0x19b0bc("div.container > div:nth-child(1) > div > p").text();
    const _0x28a710 = {
      quoted: _0x45022a
    };
    if (_0x24edb0.length < 1) {
      return await _0x244b48.sendMessage(_0x1e39d1, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x28a710);
    }
    var _0x32f3d8 = [];
    for (var _0x571ead = 0; _0x571ead < _0x24edb0.length; _0x571ead++) {
      _0x32f3d8.push({
        'title': _0x571ead + 1,
        'description': _0x24edb0[_0x571ead].title + " medium",
        'rowId': _0x36e67f + ("ppdl " + _0x24edb0[_0x571ead].link + '|' + _0x40b47d)
      });
    }
    const _0xe53113 = {
      title: "_[Select Medium.]_",
      rows: _0x32f3d8
    };
    const _0x14f551 = [_0xe53113];
    const _0x2fa78a = {
      text: "VAJIRA MD PASTPAPER-DL\n\n\n*📚 Title: " + _0x40b47d + "*\n *📈 Desc: " + _0xc5e110 + "*\n\n─────────────────────────────",
      footer: config.FOOTER,
      title: "Result from GOVDOC. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x14f551
    };
    const _0x52f219 = {
      quoted: _0x45022a
    };
    return await _0x244b48.replyList(_0x1e39d1, _0x2fa78a, _0x52f219);
  } catch (_0x1be4c8) {
    _0x5b83f1("*ERROR !!*");
    _0x565836(_0x1be4c8);
  }
});
const _0x4bdad5 = {
  pattern: "ppdl",
  react: '📦',
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x4bdad5, async (_0x426097, _0x5d60c3, _0x1fd7e4, {
  from: _0x1fbbdb,
  l: _0x5e9ce9,
  quoted: _0x21ee67,
  prefix: _0x523c1f,
  body: _0x3d2113,
  isCmd: _0x517d5f,
  command: _0x3f494d,
  args: _0x11e5b2,
  q: _0x2cea4e,
  isGroup: _0x351fe5,
  sender: _0x224764,
  senderNumber: _0x5aff31,
  botNumber2: _0xb855cb,
  botNumber: _0x55b08a,
  pushname: _0x307ec1,
  isMe: _0x4acfbe,
  isOwner: _0x384f11,
  groupMetadata: _0x34f1d8,
  groupName: _0x3c984d,
  participants: _0x440b72,
  groupAdmins: _0x393816,
  isBotAdmins: _0x5c83e8,
  isAdmins: _0x8177c6,
  reply: _0x33f958
}) => {
  try {
    const _0x5aeecf = {
      text: 'ℹ️',
      key: _0x5d60c3.key
    };
    const _0x2ea5cf = {
      react: _0x5aeecf
    };
    await _0x426097.sendMessage(_0x1fbbdb, _0x2ea5cf);
    const _0x57f5c2 = {
      text: "*Need apk link...*"
    };
    const _0x4be8ff = {
      quoted: _0x5d60c3
    };
    if (!_0x2cea4e) {
      return await _0x426097.sendMessage(_0x1fbbdb, _0x57f5c2, _0x4be8ff);
    }
    const _0x34cfe4 = _0x2cea4e.split('|')[0];
    const _0x57e295 = _0x2cea4e.split('|')[1] || "vajira_md_dl_system";
    const _0x211e4b = await axios.get(_0x34cfe4);
    const _0x10a497 = cheerio.load(_0x211e4b.data);
    const _0x34f746 = _0x10a497("div.col-md-12.d-flex.justify-content-center.mt-md-5.mt-4.mb-4.mx-3 > div > a").attr("href");
    const _0x5b4115 = await axios.get(_0x34f746);
    const _0x20afb4 = cheerio.load(_0x5b4115.data);
    const _0x58ba8b = _0x20afb4("#download").attr("href");
    var _0x1bf9e3 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0x3808b8 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ..."
    };
    let {
      key: _0x5b26e1
    } = await _0x426097.sendMessage(_0x1fbbdb, _0x3808b8);
    for (let _0x3a1be4 = 0; _0x3a1be4 < _0x1bf9e3.length; _0x3a1be4++) {
      const _0x71d595 = {
        text: _0x1bf9e3[_0x3a1be4],
        edit: _0x5b26e1
      };
      await _0x426097.sendMessage(_0x1fbbdb, _0x71d595);
    }
    const _0x31bf03 = {
      'document': await getBuffer(_0x58ba8b),
      'caption': "*🎬 VAJIRA MD 🎬*",
      'mimetype': "application/pdf",
      'fileName': _0x57e295 + ".pdf"
    };
    await _0x426097.sendMessage(_0x1fbbdb, _0x31bf03);
    const _0x3431e9 = {
      text: '✅',
      key: _0x5d60c3.key
    };
    const _0x1747ae = {
      react: _0x3431e9
    };
    await _0x426097.sendMessage(_0x1fbbdb, _0x1747ae);
  } catch (_0x5a00c6) {
    _0x33f958("*ERROR !!*");
    _0x5e9ce9(_0x5a00c6);
  }
});
const _0x5aa7ad = {
  pattern: "modwhatsapp",
  react: '📑',
  category: "download",
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x5aa7ad, async (_0x229197, _0x1085e6, _0x51ada9, {
  from: _0x4fbad6,
  prefix: _0x1363f3,
  q: _0x2f34d3,
  l: _0x2198fb,
  isDev: _0xd88a51,
  reply: _0x4179d3
}) => {
  try {
    if (!_0x2f34d3) {
      return await _0x4179d3("*Please Give Me Text..! 🖊️*");
    }
    const _0x272774 = "https://apkdon.net/?s=" + _0x2f34d3;
    const _0x32f597 = await axios.get(_0x272774);
    const _0x683ecc = cheerio.load(_0x32f597.data);
    const _0x38ad88 = [];
    _0x683ecc("article").each((_0x5cfa17, _0x9bc74e) => {
      _0x38ad88.push({
        'link': _0x683ecc(_0x9bc74e).find("h2 > a").attr("href"),
        'title': _0x683ecc(_0x9bc74e).find("h2.entry-title").text()
      });
    });
    const _0x2438c8 = {
      quoted: _0x51ada9
    };
    if (_0x38ad88.length < 1) {
      return await _0x229197.sendMessage(_0x4fbad6, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x2438c8);
    }
    var _0x1c8b9b = [];
    for (var _0x544ef7 = 0; _0x544ef7 < _0x38ad88.length; _0x544ef7++) {
      _0x1c8b9b.push({
        'title': _0x544ef7 + 1,
        'description': _0x38ad88[_0x544ef7].title,
        'rowId': _0x1363f3 + "mW " + _0x38ad88[_0x544ef7].link
      });
    }
    const _0x10b4a3 = {
      title: "_[Result from modwhatsapp.]_",
      rows: _0x1c8b9b
    };
    const _0xf00b9f = [_0x10b4a3];
    const _0x383b83 = {
      url: config.LOGO
    };
    const _0x2d0f30 = {
      caption: "⚜️ VAJIRA MD MODWHATSAPP-DL ⚜️",
      image: _0x383b83,
      footer: config.FOOTER,
      title: "Result from Mod Whatsapp. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0xf00b9f
    };
    const _0x5e75c8 = {
      quoted: _0x51ada9
    };
    return await _0x229197.replyList(_0x4fbad6, _0x2d0f30, _0x5e75c8);
  } catch (_0x1d87d2) {
    _0x4179d3("*ERROR !!*");
    _0x2198fb(_0x1d87d2);
  }
});
const _0x27ff37 = {
  pattern: 'mw',
  react: '📑',
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x27ff37, async (_0x14767a, _0x3dece1, _0x20fb97, {
  from: _0x3aacd5,
  prefix: _0x34f01d,
  q: _0x389b2a,
  l: _0x4e2655,
  isDev: _0x1ff04e,
  reply: _0x5995b2
}) => {
  try {
    if (!_0x389b2a) {
      return await _0x5995b2("*Please Give Me Text..! 🖊️*");
    }
    const _0x57718c = await axios.get(_0x389b2a);
    const _0x3431a2 = cheerio.load(_0x57718c.data);
    const _0x32851c = _0x3431a2("h1.entry-title").text();
    const _0x599cd7 = _0x3431a2("time.entry-date.published.updated").text();
    const _0xda2fa2 = await axios.get(_0x389b2a);
    const _0x598219 = cheerio.load(_0xda2fa2.data);
    const _0x1062b8 = [];
    _0x598219("div.kt-inside-inner-col > div.wp-block-kadence-advancedbtn.kb-buttons-wrap").each((_0x58cd7a, _0x3d5c3e) => {
      _0x1062b8.push({
        'link': _0x598219(_0x3d5c3e).find('a').attr("href"),
        'title1': _0x598219(_0x3d5c3e).find("span.kt-btn-inner-text").text()
      });
    });
    const _0x29e836 = {
      quoted: _0x20fb97
    };
    if (_0x1062b8.length < 1) {
      return await _0x14767a.sendMessage(_0x3aacd5, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x29e836);
    }
    var _0xee86c5 = [];
    for (var _0x3681c0 = 0; _0x3681c0 < _0x1062b8.length; _0x3681c0++) {
      _0xee86c5.push({
        'title': _0x3681c0 + 1,
        'description': _0x1062b8[_0x3681c0].title1,
        'rowId': _0x34f01d + "mWdl " + _0x1062b8[_0x3681c0].link
      });
    }
    const _0x32b1d5 = {
      title: "_[Result from modwhatsapp.]_",
      rows: _0xee86c5
    };
    const _0x2af25d = [_0x32b1d5];
    const _0x51a0b5 = {
      text: "⚜️ VAJIRA MD MODWHATSAPP-DL ⚜️\n\n🚀 Title :- " + _0x32851c + "\n📄 Date :- " + _0x599cd7,
      footer: config.FOOTER,
      title: "Result from Mod Whatsapp. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x2af25d
    };
    const _0x546004 = {
      quoted: _0x20fb97
    };
    return await _0x14767a.replyList(_0x3aacd5, _0x51a0b5, _0x546004);
  } catch (_0x13d58d) {
    _0x5995b2("*ERROR !!*");
    _0x4e2655(_0x13d58d);
  }
});
const _0x19bc85 = {
  pattern: "mwdl",
  react: '📑',
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x19bc85, async (_0x4cfa37, _0x377834, _0x1d1308, {
  from: _0x13f1d1,
  prefix: _0x1ebba7,
  q: _0x38c7ca,
  l: _0x4d6845,
  isDev: _0x1921c7,
  reply: _0x45dcfd
}) => {
  try {
    if (!_0x38c7ca) {
      return await _0x45dcfd("*Please Give Me Text..! 🖊️*");
    }
    const _0x3824ad = await axios.get(_0x38c7ca);
    const _0xa7688e = cheerio.load(_0x3824ad.data);
    const _0x5bbc41 = [];
    _0xa7688e("div.kt-inside-inner-col > div.wp-block-kadence-advancedbtn.kb-buttons-wrap").each((_0x4842d7, _0x5ccfee) => {
      _0x5bbc41.push({
        'dllink': _0xa7688e(_0x5ccfee).find('a').attr("href"),
        'dltitle': _0xa7688e(_0x5ccfee).find("span.kt-btn-inner-text").text()
      });
    });
    const _0x7c34fb = {
      quoted: _0x1d1308
    };
    if (_0x5bbc41.length < 1) {
      return await _0x4cfa37.sendMessage(_0x13f1d1, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x7c34fb);
    }
    var _0x95ecba = [];
    for (var _0x55aaaa = 0; _0x55aaaa < _0x5bbc41.length; _0x55aaaa++) {
      _0x95ecba.push({
        'title': _0x55aaaa + 1,
        'description': _0x5bbc41[_0x55aaaa].dltitle,
        'rowId': _0x1ebba7 + ("mdapk " + _0x5bbc41[_0x55aaaa].dllink + '|' + _0x5bbc41[_0x55aaaa].dltitle)
      });
    }
    const _0x5670c3 = {
      title: "_[Result from modwhatsapp.]_",
      rows: _0x95ecba
    };
    const _0x1234e4 = [_0x5670c3];
    const _0x3c0d80 = {
      text: "⚜️ VAJIRA MD MODWHATSAPP-DL ⚜️",
      footer: config.FOOTER,
      title: "Result from Mod Whatsapp. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x1234e4
    };
    const _0x237823 = {
      quoted: _0x1d1308
    };
    return await _0x4cfa37.replyList(_0x13f1d1, _0x3c0d80, _0x237823);
  } catch (_0x5c0cc4) {
    _0x45dcfd("*ERROR !!*");
    _0x4d6845(_0x5c0cc4);
  }
});
const _0x2e2cc3 = {
  pattern: "modapk",
  react: '📑',
  category: "download",
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x2e2cc3, async (_0x4b39ab, _0x5b00c1, _0x3971e4, {
  from: _0x4042ed,
  prefix: _0x491264,
  q: _0x52a195,
  l: _0x5406b2,
  isDev: _0x12cbb0,
  reply: _0x419ac5
}) => {
  try {
    if (!_0x52a195) {
      return await _0x419ac5("*Please Give Me Text..! 🖊️*");
    }
    const _0x230b80 = "https://an1.com/?story=" + _0x52a195 + "&do=search&subaction=search";
    const _0x13c606 = await axios.get(_0x230b80);
    const _0x276217 = cheerio.load(_0x13c606.data);
    const _0x5a2506 = [];
    _0x276217("div.item").each((_0x5ec16c, _0x5c6fba) => {
      _0x5a2506.push({
        'link': _0x276217(_0x5c6fba).find('a').attr("href"),
        'title': _0x276217(_0x5c6fba).find("div.name > a > span").text()
      });
    });
    const _0x14d916 = {
      quoted: _0x3971e4
    };
    if (_0x5a2506.length < 1) {
      return await _0x4b39ab.sendMessage(_0x4042ed, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x14d916);
    }
    var _0x9629f6 = [];
    for (var _0x10bf4d = 0; _0x10bf4d < _0x5a2506.length; _0x10bf4d++) {
      _0x9629f6.push({
        'title': _0x10bf4d + 1,
        'description': _0x5a2506[_0x10bf4d].title,
        'rowId': _0x491264 + "ma " + _0x5a2506[_0x10bf4d].link
      });
    }
    const _0x49b57e = {
      title: "_[Result from an1.]_",
      rows: _0x9629f6
    };
    const _0x47028a = [_0x49b57e];
    const _0x644708 = {
      url: "https://pomf2.lain.la/f/xwl2e6b5.png"
    };
    const _0x3a7e7b = {
      caption: "🔱 VAJIRA MD MODAPK-DL 🔱",
      image: _0x644708,
      footer: config.FOOTER,
      title: "Result from an1. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x47028a
    };
    const _0x203fb7 = {
      quoted: _0x3971e4
    };
    return await _0x4b39ab.replyList(_0x4042ed, _0x3a7e7b, _0x203fb7);
  } catch (_0x540118) {
    _0x419ac5("*ERROR !!*");
    _0x5406b2(_0x540118);
  }
});
const _0x3f7dcb = {
  pattern: "mega",
  category: "download",
  react: '⬇️',
  use: ".mega < Link >",
  desc: "Download Mega file and send it.",
  filename: __filename
};
cmd(_0x3f7dcb, async (_0x4be959, _0xe62d42, _0x210a34, {
  from: _0x41c140,
  quoted: _0x20e43f,
  body: _0x5dda2c,
  isCmd: _0x205f8c,
  command: _0x129463,
  args: _0x214be8,
  q: _0x4c8e93,
  isGroup: _0x43f48e,
  sender: _0xf181ab,
  senderNumber: _0x549e9b,
  botNumber2: _0x587d90,
  botNumber: _0x454989,
  pushname: _0x35be7a,
  isMe: _0x5a974f,
  isOwner: _0x3af4f1,
  groupMetadata: _0x167cec,
  groupName: _0x1e4c31,
  participants: _0x3aa30b,
  groupAdmins: _0x3aca79,
  isBotAdmins: _0xabdaa4,
  isAdmins: _0x5c94d4,
  reply: _0x246f8a
}) => {
  try {
    if (!_0x4c8e93 || !isUrl(_0x4c8e93) || !_0x4c8e93.includes("mega.nz")) {
      return _0x246f8a("Please provide a valid Mega.nz file URL.");
    }
    const [_0x56edb0, _0x146d30] = _0x4c8e93.split('#');
    if (!_0x146d30) {
      return _0x246f8a("Error: Decryption key is missing in the provided URL.");
    }
    const _0x48aa17 = File.fromURL(_0x56edb0 + '#' + _0x146d30);
    _0x48aa17.on("progress", (_0x441e59, _0x1952b7) => {
      const _0x306dff = (_0x441e59 / _0x1952b7 * 100).toFixed(2);
      _0x246f8a("Downloading: " + _0x306dff + "% (" + (_0x441e59 / 1024 / 1024).toFixed(2) + " MB of " + (_0x1952b7 / 1024 / 1024).toFixed(2) + " MB)");
    });
    const _0x421309 = await _0x48aa17.downloadBuffer();
    const _0x4d6a8b = {
      document: _0x421309,
      mimetype: "application/octet-stream",
      fileName: "mega_downloaded_file"
    };
    const _0x16d1c0 = {
      quoted: _0xe62d42
    };
    await _0x4be959.sendMessage(_0x41c140, _0x4d6a8b, _0x16d1c0);
    _0x246f8a("File sent successfully!");
  } catch (_0x1425a1) {
    console.error(_0x1425a1);
    _0x246f8a("Error: " + _0x1425a1.message);
  }
});
const _0x2b0f02 = {
  pattern: "modgame",
  react: '📑',
  category: "download",
  desc: "modgame downloader",
  filename: __filename
};
cmd(_0x2b0f02, async (_0xdda229, _0x461991, _0x399b24, {
  from: _0x584db0,
  prefix: _0x6079f,
  q: _0x42b937,
  l: _0x14144c,
  isDev: _0x37821c,
  reply: _0x26f831
}) => {
  try {
    if (!_0x42b937) {
      return await _0x26f831("*Please Give Me Text..! 🖊️*");
    }
    const _0x1fe21d = "https://gamekillerapp.com/search/" + _0x42b937;
    const _0x4b89dc = await axios.get(_0x1fe21d);
    const _0x3502ba = cheerio.load(_0x4b89dc.data);
    const _0x19143f = [];
    _0x3502ba("div > a.col-12.col-lg-4.col-xl-4.d-flex").each((_0x3e2ab0, _0x515468) => {
      _0x19143f.push({
        'title': _0x3502ba(_0x515468).find("div.flex-fill.d-flex.flex-column.justify-content-between > h3").text(),
        'size': _0x3502ba(_0x515468).find("div.download.ellipsis-1 > span").text().trim(),
        'type': _0x3502ba(_0x515468).find("div.tools.ellipsis-1").text().trim(),
        'link': _0x3502ba(_0x515468).find("div.flex-fill.d-flex.flex-column.justify-content-between > h3").text().replace(/ /g, '-').replace(/:/g, '-').replace(/--/g, '-'),
        'image': _0x3502ba(_0x515468).find("div.icon > img").attr("src")
      });
    });
    const _0x57f4a7 = {
      quoted: _0x399b24
    };
    if (_0x19143f.length < 1) {
      return await _0xdda229.sendMessage(_0x584db0, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x57f4a7);
    }
    var _0x1660df = [];
    for (var _0xbdad4e = 0; _0xbdad4e < _0x19143f.length; _0xbdad4e++) {
      _0x1660df.push({
        'title': _0xbdad4e + 1,
        'description': _0x19143f[_0xbdad4e].title + " | " + _0x19143f[_0xbdad4e].size,
        'rowId': _0x6079f + "mag " + _0x19143f[_0xbdad4e].link
      });
    }
    const _0x47e5e0 = {
      title: "_[Result from an1.]_",
      rows: _0x1660df
    };
    const _0x2cd033 = [_0x47e5e0];
    const _0x16f890 = {
      url: _0x19143f[0].image
    };
    const _0x3639a6 = {
      caption: "🎬 VAJIRA MD MOD GAMES-DL 🎬\n\n   ⏳ Search A Game Name: " + _0x42b937 + "\n📲 Search top 10 Movies\n",
      image: _0x16f890,
      footer: config.FOOTER,
      title: "Result from an1. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x2cd033
    };
    const _0x5b9b99 = {
      quoted: _0x399b24
    };
    return await _0xdda229.replyList(_0x584db0, _0x3639a6, _0x5b9b99);
  } catch (_0x2cbc6e) {
    _0x26f831("*ERROR !!*");
    _0x14144c(_0x2cbc6e);
  }
});
const _0x1307e3 = {
  pattern: "mag",
  react: '📦',
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x1307e3, async (_0x27c99f, _0x507394, _0x10fa83, {
  from: _0x18cfe5,
  l: _0x5cd435,
  quoted: _0x123fdc,
  prefix: _0x20ef5d,
  body: _0x2591fb,
  isCmd: _0x29ac9d,
  command: _0x1889f2,
  args: _0x6ae668,
  q: _0x7e5480,
  isGroup: _0x4834ca,
  sender: _0x287539,
  senderNumber: _0x224f82,
  botNumber2: _0x482efd,
  botNumber: _0x299a3e,
  pushname: _0x1d85bc,
  isMe: _0x24c6d3,
  isOwner: _0x4adbec,
  groupMetadata: _0x362a59,
  groupName: _0x38d2f9,
  participants: _0x1fc682,
  groupAdmins: _0x5ab116,
  isBotAdmins: _0x456888,
  isAdmins: _0x3e6de3,
  reply: _0x1579d3
}) => {
  try {
    const _0x2afa78 = {
      text: 'ℹ️',
      key: _0x507394.key
    };
    const _0x26fb63 = {
      react: _0x2afa78
    };
    await _0x27c99f.sendMessage(_0x18cfe5, _0x26fb63);
    const _0x229836 = {
      text: "*Need apk link...*"
    };
    const _0x507c2d = {
      quoted: _0x507394
    };
    if (!_0x7e5480) {
      return await _0x27c99f.sendMessage(_0x18cfe5, _0x229836, _0x507c2d);
    }
    const _0x203565 = "https://gamekillerapp.com/games/" + _0x7e5480;
    const _0x48ce40 = await axios.get(_0x203565);
    const _0x3e8c23 = cheerio.load(_0x48ce40.data);
    const _0x5b25ae = _0x3e8c23("div.d-flex.flex-column.justify-content-between.flex-fill > h1").text();
    const _0x10b766 = _0x3e8c23("div.icon > img").attr("src");
    const _0x2302df = _0x3e8c23("a.ordinary-download.d-flex.justify-content-center.align-items-center").attr("href");
    const _0x46e807 = "https://gamekillerapp.com" + _0x2302df;
    const _0x342d69 = _0x3e8c23("div.updateTime").text();
    const _0x38945e = _0x3e8c23("div:nth-child(6) > div.col-6.desc-text > a").text().trim();
    const _0x3e4aee = _0x3e8c23("div:nth-child(3) > div.col-6.desc-text").text().trim();
    const _0x5ef535 = _0x3e8c23("div:nth-child(4) > div.col-6.desc-text > a:nth-child(3)").text().trim();
    const _0x731409 = await axios.get(_0x46e807);
    const _0x2f2c15 = cheerio.load(_0x731409.data);
    const _0x4c6cae = _0x2f2c15("section.normal-download > a").attr("href");
    let _0x4b5974 = "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n   \n *MOD GAMES-DOWNLOADER*\n\n *📚 Title: " + _0x5b25ae + "*\n *📈 Date: " + _0x342d69 + "*\n *♓ Category: " + _0x38945e + "*\n *🧬 Vertion: " + _0x3e4aee + "*\n *🌐 Mod Info: " + _0x5ef535 + "*\n \n─────────────────────────────";
    const _0x38928d = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x20ef5d + ("mdapk " + _0x4c6cae + '|' + _0x5b25ae),
        'description': "Download the modgames"
      }]
    }];
    const _0x2d05b0 = {
      url: _0x10b766
    };
    const _0x37bfdc = {
      caption: _0x4b5974,
      image: _0x2d05b0,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x38928d
    };
    const _0x416352 = {
      quoted: _0x507394
    };
    return await _0x27c99f.replyList(_0x18cfe5, _0x37bfdc, _0x416352);
  } catch (_0x383004) {
    _0x1579d3("*ERROR !!*");
    _0x5cd435(_0x383004);
  }
});
const _0x45b350 = {
  pattern: 'ma',
  react: '📦',
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x45b350, async (_0x4bea3c, _0x40ddde, _0x384af6, {
  from: _0x420287,
  l: _0x5e0549,
  quoted: _0x47a444,
  prefix: _0x28bab1,
  body: _0xb75673,
  isCmd: _0x19b768,
  command: _0x51b737,
  args: _0xce454e,
  q: _0x5b1a4a,
  isGroup: _0x12ef34,
  sender: _0x186278,
  senderNumber: _0x972cc,
  botNumber2: _0xf71ab9,
  botNumber: _0x488ede,
  pushname: _0xb9ddec,
  isMe: _0x1a3edf,
  isOwner: _0x3c2cfd,
  groupMetadata: _0x674ef1,
  groupName: _0x22d8a3,
  participants: _0x484e35,
  groupAdmins: _0x7519b9,
  isBotAdmins: _0x4966fb,
  isAdmins: _0xced0c5,
  reply: _0x4c12ea
}) => {
  try {
    const _0x132e14 = {
      text: 'ℹ️',
      key: _0x40ddde.key
    };
    const _0x779016 = {
      react: _0x132e14
    };
    await _0x4bea3c.sendMessage(_0x420287, _0x779016);
    const _0x51196d = {
      text: "*Need apk link...*"
    };
    const _0x9db803 = {
      quoted: _0x40ddde
    };
    if (!_0x5b1a4a) {
      return await _0x4bea3c.sendMessage(_0x420287, _0x51196d, _0x9db803);
    }
    const _0x116854 = await axios.get(_0x5b1a4a);
    const _0x20e9de = cheerio.load(_0x116854.data);
    const _0x3bb828 = _0x20e9de("a.btn.btn-lg.btn-green").attr("href");
    const _0x1a54fe = _0x20e9de("figure.img > img").attr("src");
    const _0x3011c4 = _0x20e9de("h1.title.xxlgf").text();
    const _0x5af293 = _0x20e9de("div.app_view-first > div > ul > li:nth-child(1) > span").text();
    const _0x38668e = _0x20e9de("div.app_view-first > div > ul > li:nth-child(2) > span").text();
    const _0x8a8870 = _0x20e9de("div.app_view-first > div > ul > li:nth-child(3) > span").text();
    const _0x1bcc86 = await axios.get("https://an1.com/" + _0x3bb828);
    const _0x842a77 = cheerio.load(_0x1bcc86.data);
    const _0x1c6c92 = _0x842a77("#pre_download").attr("href");
    let _0x253ebe = "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n   \n *MOD APK-DOWNLOADER*\n\n *📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x3011c4 + "*\n *📈 ᴀᴘᴘ ꜱɪᴢᴇ: " + _0x8a8870 + "*\n *🧬 ᴀᴘᴘ ᴠᴇʀꜱɪᴏɴ: " + _0x38668e + "*\n *🌐 ᴀᴘᴘ ᴏꜱ: " + _0x5af293 + "*\n \n─────────────────────────────";
    const _0x32aece = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x28bab1 + ("mdapk " + _0x1c6c92 + '|' + _0x3011c4),
        'description': "Download the modapk"
      }]
    }];
    const _0x4befcc = {
      url: _0x1a54fe
    };
    const _0x16c5af = {
      caption: _0x253ebe,
      image: _0x4befcc,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x32aece
    };
    const _0x242fe2 = {
      quoted: _0x40ddde
    };
    return await _0x4bea3c.replyList(_0x420287, _0x16c5af, _0x242fe2);
  } catch (_0x547bba) {
    _0x4c12ea("*ERROR !!*");
    _0x5e0549(_0x547bba);
  }
});
const _0x95be44 = {
  pattern: "mdapk",
  react: '📥',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x95be44, async (_0x229efe, _0x357865, _0x2183a6, {
  from: _0x1c81ab,
  q: _0x44d273,
  isDev: _0x5b319e,
  reply: _0x2a8de4
}) => {
  if (!_0x44d273) {
    return await _0x2a8de4("*Please provide a direct URL!*");
  }
  try {
    const _0x1cab46 = _0x44d273.split('|')[0];
    const _0x4367f5 = _0x44d273.split('|')[1] || "tc_movie_dl_system";
    var _0xaf1cbb = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
    const _0xc6ef2c = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ ᴀᴘᴋ..."
    };
    let {
      key: _0x42e341
    } = await _0x229efe.sendMessage(_0x1c81ab, _0xc6ef2c);
    for (let _0x50d63d = 0; _0x50d63d < _0xaf1cbb.length; _0x50d63d++) {
      const _0x2a6550 = {
        text: _0xaf1cbb[_0x50d63d],
        edit: _0x42e341
      };
      await _0x229efe.sendMessage(_0x1c81ab, _0x2a6550);
    }
    const _0x2b2feb = {
      'document': await getBuffer(_0x1cab46),
      'caption': "*VAJIRA MD MOD APk*",
      'mimetype': "application/mod.apk",
      'fileName': _0x4367f5 + ".apk"
    };
    await _0x229efe.sendMessage(_0x1c81ab, _0x2b2feb);
    const _0x516ac8 = {
      text: '✅',
      key: _0x357865.key
    };
    const _0x3cf8e1 = {
      react: _0x516ac8
    };
    await _0x229efe.sendMessage(_0x1c81ab, _0x3cf8e1);
  } catch (_0x17675d) {
    console.error("Error fetching or sending", _0x17675d);
    const _0x1d4a39 = {
      quoted: _0x357865
    };
    await _0x229efe.sendMessage(_0x1c81ab, "*Error fetching or sending *", _0x1d4a39);
  }
});
const _0x2b612e = {
  pattern: "ytmx",
  react: '📑',
  category: '',
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x2b612e, async (_0x9e12fb, _0x404361, _0x54d685, {
  from: _0x62e708,
  prefix: _0x264c3f,
  q: _0x1ee86e,
  l: _0x1b5f4a,
  isDev: _0x20982c,
  reply: _0x42e564
}) => {
  try {
    if (!_0x20982c) {
      return _0x42e564("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x1ee86e) {
      return await _0x42e564("*Please Give Me Text..! 🖊️*");
    }
    const _0x3617b0 = await axios.get(_0x1ee86e);
    const _0x4598d8 = cheerio.load(_0x3617b0.data);
    const _0x60b30e = _0x4598d8("#mobile-movie-info > h1").text();
    const _0x48322c = _0x4598d8("#mobile-movie-info > h2:nth-child(2)").eq(0).text();
    const _0x2bc83a = _0x4598d8("#mobile-movie-info > h2 > span").text();
    const _0x3e6f31 = _0x4598d8("#movie-poster > img").attr("src");
    let _0x4b7183 = [];
    _0x4598d8("div.modal.modal-download.hidden-xs.hidden-sm > div > div > div").each((_0x4ffa26, _0xa592cb) => {
      _0x4b7183.push({
        'quality': _0x4598d8(_0xa592cb).find("div > span").text(),
        'type': _0x4598d8(_0xa592cb).find("p.quality-size").eq(0).text(),
        'size': _0x4598d8(_0xa592cb).find("p.quality-size").eq(1).text(),
        'torrent_file': _0x4598d8(_0xa592cb).find('a').attr("href"),
        'magnet': _0x4598d8(_0xa592cb).find("a.magnet-download.download-torrent.magnet").attr("href")
      });
    });
    const _0x327b28 = {
      quoted: _0x54d685
    };
    if (_0x4b7183.length < 1) {
      return await _0x9e12fb.sendMessage(_0x62e708, {
        'text': "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x327b28);
    }
    var _0x4f202f = [];
    for (var _0x36012d = 0; _0x36012d < _0x4b7183.length; _0x36012d++) {
      _0x4f202f.push({
        'title': _0x36012d + 1,
        'description': _0x4b7183[_0x36012d].quality + '+' + _0x4b7183[_0x36012d].size,
        'rowId': _0x264c3f + "ytmxdl " + _0x4b7183[_0x36012d].magnet
      });
    }
    const _0x5e2149 = {
      title: "_[Result from ytsmx.]_",
      rows: _0x4f202f
    };
    const _0x5ca2b2 = [_0x5e2149];
    const _0x4cee42 = {
      url: _0x3e6f31
    };
    const _0x22248 = {
      caption: "📑 *Title:* " + _0x60b30e + "\n\n🧬 *Year:* " + _0x48322c + "\n\n🫧 *Language:* " + _0x2bc83a,
      image: _0x4cee42,
      footer: "MOVIE DOWNLOADER BY VAJIRA MD",
      title: "Search By ytsmx",
      buttonText: "*🔢 Reply below number*",
      sections: _0x5ca2b2
    };
    const _0x2af0f0 = {
      quoted: _0x54d685
    };
    return await _0x9e12fb.replyList(_0x62e708, _0x22248, _0x2af0f0);
  } catch (_0x545815) {
    _0x42e564("*ERROR !!*");
    _0x1b5f4a(_0x545815);
  }
});
const _0x547acf = {
  pattern: "ytmxdl",
  react: '⬆',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x547acf, async (_0x49ac4e, _0x3865aa, _0x54b709, {
  from: _0x14faf3,
  l: _0x22cafa,
  prefix: _0x661a58,
  quoted: _0x49643f,
  body: _0x14d43e,
  isDev: _0x5f2f77,
  isCmd: _0x38ce29,
  command: _0x17bbc9,
  args: _0x5d87b7,
  q: _0x3cd2c3,
  isGroup: _0x296f38,
  sender: _0x219e09,
  senderNumber: _0x2f5973,
  botNumber2: _0x1e3bc9,
  botNumber: _0x5cdc14,
  pushname: _0x4f629c,
  isMe: _0x14a228,
  isOwner: _0x2ebf52,
  groupMetadata: _0x51c3c0,
  groupName: _0xea80b6,
  participants: _0x32d072,
  groupAdmins: _0x5b9274,
  isBotAdmins: _0x2e48a7,
  isAdmins: _0x1bd46d,
  reply: _0x75e658
}) => {
  try {
    if (!_0x5f2f77) {
      return _0x75e658("⚠️ ⚠️ *Contact owner to Active your number To Premium user*");
    }
    var _0x128c3d = require("seedr");
    var _0x43b7e3 = new _0x128c3d();
    await _0x43b7e3.login("moviebot2003@gmail.com", "Vajira2003@");
    const _0x369225 = {
      text: "ᴜᴘʟᴏᴀᴅɪɴɢ magnet file...📥"
    };
    const _0x2b7e1e = {
      quoted: _0x3865aa
    };
    const _0x2bf908 = await _0x49ac4e.sendMessage(_0x14faf3, _0x369225, _0x2b7e1e);
    const _0x49ec6f = await _0x43b7e3.addMagnet(_0x3cd2c3);
    var _0x122d45 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴜᴘʟᴏᴀᴅᴇᴅ ᴍᴀɢɴᴇᴛ ꜰɪʟᴇ ✅..."];
    const _0x5e273e = {
      text: "ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴜᴘʟᴏᴀᴅᴇᴅ ᴍᴀɢɴᴇᴛ ꜰɪʟᴇ ✅...",
      edit: _0x2bf908.key
    };
    const _0x5017a6 = {
      quoted: _0x3865aa
    };
    let {
      key: _0x2e025d
    } = await _0x49ac4e.sendMessage(_0x14faf3, _0x5e273e, _0x5017a6);
    for (let _0x11987b = 0; _0x11987b < _0x122d45.length; _0x11987b++) {
      const _0x217110 = {
        text: _0x122d45[_0x11987b],
        edit: _0x2e025d
      };
      await _0x49ac4e.sendMessage(_0x14faf3, _0x217110);
    }
    if (_0x49ec6f.code === 400 || _0x49ec6f.result !== true) {
      console.log("Error adding magnet " + JSON.stringify(_0x49ec6f, null, 2));
      return null;
    }
    var _0x17697b = [];
    do {
      _0x17697b = await _0x43b7e3.getVideos();
    } while (_0x17697b.length === 0);
    var _0x2157d5 = await _0x43b7e3.getFile(_0x17697b[0][0].id);
    var _0x57e16a = _0x17697b[0][0].fid;
    const _0x12e044 = _0x2157d5.url;
    await _0x49ac4e.sendMessage(_0x14faf3, {
      'document': await getBuffer(_0x12e044),
      'mimetype': "video/mp4",
      'fileName': _0x2157d5.name + " | " + "🎬 TC TEAM MOVIE-DL 🎬 " + ".mp4",
      'caption': _0x2157d5.name + "\n\n> ᴠᴀᴊɪʀᴀ-ᴍᴅ ʙʏ ᴛᴄ ᴛᴇᴀᴍ"
    });
    await _0x43b7e3.deleteFolder(_0x57e16a);
    const _0x2f86fa = {
      text: "Movie send " + config.JID + " Successfull ✔"
    };
    const _0x150652 = {
      quoted: _0x3865aa
    };
    await _0x49ac4e.sendMessage(_0x14faf3, _0x2f86fa, _0x150652);
  } catch (_0x4406eb) {
    const _0x38cbdd = {
      text: '❌',
      key: _0x3865aa.key
    };
    const _0x3b8c4f = {
      react: _0x38cbdd
    };
    await _0x49ac4e.sendMessage(_0x14faf3, _0x3b8c4f);
    console.log(_0x4406eb);
    _0x75e658("❌ *Error Accurated !!*\n\n" + _0x4406eb);
  }
});
const _0x1662b7 = {
  pattern: "xnxx",
  react: '📱',
  desc: "xxx video dowloader",
  category: "download",
  use: ".xnxx mia kalifa",
  filename: __filename
};
cmd(_0x1662b7, async (_0x852cc2, _0x5ed31b, _0x428e1f, {
  from: _0x32348a,
  prefix: _0x26e6a9,
  l: _0x5deb4b,
  quoted: _0x2b8b41,
  body: _0x4498b9,
  isCmd: _0x17b92f,
  command: _0x3c4365,
  args: _0x1a9758,
  q: _0x439de4,
  isGroup: _0x2ba334,
  sender: _0x2dc515,
  senderNumber: _0x1c9090,
  botNumber2: _0x1567eb,
  botNumber: _0x56d08d,
  pushname: _0xf234e7,
  isMe: _0x583d8c,
  isOwner: _0x1c20da,
  groupMetadata: _0x308fbd,
  groupName: _0x3b9563,
  participants: _0x5cc097,
  groupAdmins: _0x47b061,
  isBotAdmins: _0x2525aa,
  isAdmins: _0x3cbe12,
  reply: _0x4a6164
}) => {
  try {
    if (!_0x439de4) {
      return _0x5ed31b.reply("Enter Query");
    }
    const _0x3fdaeb = require("api-dylux");
    let _0x2b594c = await _0x3fdaeb.xnxxSearch(_0x439de4);
    let _0x1c6d79 = _0x2b594c.result.map(() => "මොනාද හුත්තො කුනුහරප ඉල්ලන්නෙ🤣 \n බැන්ඩ් කරගනිම් ඔව ඉල්ලල උබෙ whatsapp එක🤣\nවලත්තයා ");
    if (_0x2b594c.status) {
      _0x5ed31b.reply(_0x1c6d79);
    }
    const _0x2a7916 = _0x2b594c.result;
    const _0x23b78d = {
      text: N_FOUND
    };
    const _0x3edb4c = {
      quoted: _0x5ed31b
    };
    if (_0x2a7916.length < 1) {
      return await _0x852cc2.sendMessage(_0x32348a, _0x23b78d, _0x3edb4c);
    }
    var _0x2e8be2 = [];
    for (var _0x34dd76 = 0; _0x34dd76 < _0x2a7916.length; _0x34dd76++) {
      _0x2e8be2.push({
        'title': _0x34dd76 + 1,
        'description': _0x2a7916[_0x34dd76].title,
        'rowId': _0x26e6a9 + "xnxxdl " + _0x2a7916[_0x34dd76].link + '+' + _0x2a7916[_0x34dd76].title
      });
    }
    const _0x939279 = {
      title: "_[Result from androidapksfree.]_",
      rows: _0x2e8be2
    };
    const _0x24bb5a = [_0x939279];
    const _0x50b87f = {
      text: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *XNXX VIDEO DOWNLOADER*\n\n*📱 Enterd Name:* " + _0x439de4,
      footer: config.FOOTER,
      title: "Result from androidapksfree. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x24bb5a
    };
    const _0x5614b1 = {
      quoted: _0x5ed31b
    };
    return await _0x852cc2.replyList(_0x32348a, _0x50b87f, _0x5614b1);
  } catch (_0x4d991d) {
    _0x4a6164("*ERROR !!*");
    _0x5deb4b(_0x4d991d);
  }
});
const _0x39ceea = {
  pattern: "img",
  react: "🖼️",
  desc: "image downloader",
  category: "download",
  use: ".img car",
  filename: __filename
};
cmd(_0x39ceea, async (_0x1e1078, _0x2e5f23, _0x3e2a70, {
  from: _0x5cdbbb,
  l: _0x208f8f,
  quoted: _0x42e0a7,
  prefix: _0x3f3e8e,
  body: _0x466bfc,
  isCmd: _0xabea7d,
  command: _0x2f8fc9,
  args: _0x4b4993,
  q: _0x40bbf0,
  isGroup: _0x46bce0,
  sender: _0x354144,
  senderNumber: _0x3df3af,
  botNumber2: _0x1ec19b,
  botNumber: _0x94f1b5,
  pushname: _0x2cd3f0,
  isMe: _0x424226,
  isOwner: _0x17694a,
  groupMetadata: _0x315ebb,
  groupName: _0x289e5e,
  participants: _0x35f4c9,
  groupAdmins: _0x481797,
  isBotAdmins: _0xf85bc1,
  isAdmins: _0x1f43d8,
  reply: _0x1bb9ea
}) => {
  try {
    let _0x52479e = "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n   \n ▏ *IMG-DOWNLOADER*\n\n ▏ *🎭 ʀᴇǫᴜᴇꜱᴛᴇʀ: " + _0x2cd3f0 + "*\n ▏ *✏️ ʀᴇꜱᴜʟᴛ: " + _0x40bbf0 + "*\n\n└──────◉";
    const _0x4bb424 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x3f3e8e + "imgno " + _0x40bbf0,
        'description': "Normal type images 📁"
      }, {
        'title': '2',
        'rowId': _0x3f3e8e + "imgdoc " + _0x40bbf0,
        'description': "Document type images 🖼️"
      }]
    }];
    const _0x53e91f = {
      url: config.LOGO
    };
    const _0x5456a7 = {
      caption: _0x52479e,
      image: _0x53e91f,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4bb424
    };
    const _0x56e95a = {
      quoted: _0x2e5f23
    };
    return await _0x1e1078.replyList(_0x5cdbbb, _0x5456a7, _0x56e95a);
  } catch (_0x2e26d3) {
    _0x1bb9ea("*ERROR !!*");
    _0x208f8f(_0x2e26d3);
  }
});
const _0x6ae991 = {
  pattern: "imgno",
  react: '👾',
  desc: "to down images",
  category: '',
  use: ".im",
  filename: __filename
};
cmd(_0x6ae991, async (_0x59b4f8, _0x1f0440, _0x248f16, {
  from: _0x95e896,
  l: _0x1eb73,
  prefix: _0x7d3980,
  quoted: _0x1ae519,
  body: _0x40c333,
  isCmd: _0x24daf4,
  command: _0x482241,
  args: _0x57e36d,
  q: _0x26a732,
  isGroup: _0x37eabe,
  sender: _0x1a6dcb,
  senderNumber: _0x58afd7,
  botNumber2: _0xc30f02,
  botNumber: _0x38e2d5,
  pushname: _0x4c1b94,
  isMe: _0x40653c,
  isOwner: _0x763606,
  groupMetadata: _0x1a4534,
  groupName: _0x1e19ed,
  participants: _0x109ba0,
  groupAdmins: _0x267e8b,
  isBotAdmins: _0x34634a,
  isAdmins: _0x2da3fb,
  reply: _0x4bb6af
}) => {
  try {
    if (!_0x26a732) {
      throw "Example: " + (_0x7d3980 + _0x482241) + " Bike";
    }
    let _0x1ac087 = require("g-i-s");
    _0x1ac087(_0x26a732, async (_0x5b1698, _0x35056e) => {
      if (_0x5b1698) {
        console.error("Error fetching images:", _0x5b1698);
        return _0x4bb6af("Error fetching images. Please try again later.");
      }
      const _0x3c5fc2 = _0x35056e.slice(0, 5);
      for (let _0x55c0f3 = 0; _0x55c0f3 < _0x3c5fc2.length; _0x55c0f3++) {
        const _0x437ed7 = _0x3c5fc2[_0x55c0f3].url;
        const _0x1952a7 = {
          url: _0x437ed7
        };
        let _0x48f0ac = {
          'image': _0x1952a7,
          'caption': "*-------「 VAJIRA MD GIMAGE SEARCH 」-------*\n🤠 *Query* : " + _0x26a732 + "\n\n🔗 *Image " + (_0x55c0f3 + 1) + " Url* : " + _0x437ed7
        };
        const _0xce2408 = {
          quoted: _0x1f0440
        };
        _0x59b4f8.sendMessage(_0x95e896, _0x48f0ac, _0xce2408);
      }
    });
  } catch (_0x44db7c) {
    _0x1eb73(_0x44db7c);
  }
});
const _0x590220 = {
  pattern: "imgdoc",
  react: '👾',
  desc: "to down images",
  category: '',
  use: ".im"
};
function _0x281657(_0xdbb9b1, _0x5b91be, _0xeb966b, _0x901c73, _0x186deb) {
  return _0x3310(_0xeb966b - 0x3e5, _0xdbb9b1);
}
_0x590220.filename = __filename;
cmd(_0x590220, async (_0x10cdbe, _0x5f024b, _0x411192, {
  from: _0x40f3cb,
  l: _0x16604c,
  prefix: _0x5c4dc1,
  quoted: _0x55ed1c,
  body: _0x1ed905,
  isCmd: _0x597a0c,
  command: _0x5f0a1c,
  args: _0xce0e75,
  q: _0x31cd18,
  isGroup: _0xabed00,
  sender: _0x41c84f,
  senderNumber: _0x8375ba,
  botNumber2: _0x44ca08,
  botNumber: _0x36c2cd,
  pushname: _0x10886d,
  isMe: _0x242a77,
  isOwner: _0xa2a7db,
  groupMetadata: _0x1f35a5,
  groupName: _0x3b71bd,
  participants: _0x6c0304,
  groupAdmins: _0x5e548a,
  isBotAdmins: _0x585bca,
  isAdmins: _0x72c2f0,
  reply: _0x2d7cb6
}) => {
  try {
    if (!_0x31cd18) {
      throw "Example: " + (_0x5c4dc1 + _0x5f0a1c) + " Bike";
    }
    let _0x12ac32 = require("g-i-s");
    _0x12ac32(_0x31cd18, async (_0x3efcdb, _0x10339c) => {
      if (_0x3efcdb) {
        console.error("Error fetching images:", _0x3efcdb);
        return _0x2d7cb6("Error fetching images. Please try again later.");
      }
      const _0x351ce4 = _0x10339c.slice(0, 5);
      for (let _0x105052 = 0; _0x105052 < _0x351ce4.length; _0x105052++) {
        const _0x20813c = _0x351ce4[_0x105052].url;
        const _0x4ff50f = {
          url: _0x20813c
        };
        let _0x15acdb = {
          'document': _0x4ff50f,
          'fileName': "image.jpg",
          'mimetype': "image/jpeg",
          'caption': "*-------「 VAJIRA MD GIMAGE SEARCH 」-------*\n🤠 *Query* : " + _0x31cd18 + "\n\n🔗 *Image " + (_0x105052 + 1) + " Url* : " + _0x20813c
        };
        const _0xa4b1a2 = {
          quoted: _0x5f024b
        };
        _0x10cdbe.sendMessage(_0x40f3cb, _0x15acdb, _0xa4b1a2);
      }
    });
  } catch (_0x46150a) {
    _0x16604c(_0x46150a);
  }
});
const _0x133b09 = {
  pattern: "psong",
  react: '👾',
  desc: "to down songs",
  category: "download",
  use: ".song2",
  filename: __filename
};
cmd(_0x133b09, async (_0x411700, _0x16f77b, _0x3f514d, {
  from: _0x41a70c,
  l: _0x1296cd,
  prefix: _0xd2258a,
  quoted: _0x755623,
  body: _0x4c7240,
  isCmd: _0x50c741,
  command: _0x56d053,
  args: _0x1741cc,
  q: _0x37952c,
  isGroup: _0x27b5b8,
  sender: _0x500ae9,
  senderNumber: _0x518dbf,
  botNumber2: _0x51f6c2,
  botNumber: _0x5a7aa3,
  pushname: _0x342669,
  isMe: _0x1d25db,
  isOwner: _0x5d88c0,
  groupMetadata: _0xad3b9,
  groupName: _0xdfa439,
  participants: _0x4b81c3,
  groupAdmins: _0x486af7,
  isBotAdmins: _0x1affb4,
  isAdmins: _0x16b54d,
  reply: _0x502345
}) => {
  try {
    if (!_0x37952c) {
      return _0x502345("Enter YouTube Video Link or Search Query!");
    }
    const _0x5a4c08 = await yts(_0x37952c);
    if (_0x5a4c08.videos.length > 0) {
      let _0xfb789a = [];
      const _0x87bf00 = "yts_" + optionIndex;
      const _0x7827d8 = {};
      for (let _0x1f5c3c = 0; _0x1f5c3c < Math.min(5, _0x5a4c08.videos.length); _0x1f5c3c++) {
        const _0x3b1341 = _0x5a4c08.videos[_0x1f5c3c];
        const _0x554ff5 = _0x3b1341.url;
        const _0x84b390 = _0x3b1341.title;
        _0x7827d8[optionIndex + '.' + (_0x1f5c3c + 1)] = _0x554ff5;
        _0xfb789a.push(".tet " + optionIndex + '.' + (_0x1f5c3c + 1) + " " + _0x84b390);
      }
      if (!videoSearchResults.has(_0x87bf00)) {
        videoSearchResults.set(_0x87bf00, {});
      }
      videoSearchResults.set(_0x87bf00, Object.assign(videoSearchResults.get(_0x87bf00), _0x7827d8));
      await _0x411700.sendPoll(_0x41a70c, "Choose a video to download:", [..._0xfb789a]);
      optionIndex += 1;
    } else {
      return _0x502345("No search results found.");
    }
  } catch (_0x20b284) {
    console.error("Error during play:", _0x20b284);
    _0x16f77b.reply("Unexpected error occurred.");
    _0x1296cd(_0x20b284);
  }
});
const _0x14e16a = {
  pattern: "tet",
  react: '👾',
  desc: "to take song",
  category: "download",
  use: ".tet",
  filename: __filename
};
cmd(_0x14e16a, async (_0x1d9251, _0x2f50a1, _0x39bff7, {
  from: _0x567098,
  l: _0x15ad21,
  prefix: _0x540a39,
  quoted: _0x5437a1,
  body: _0x1cf35a,
  isCmd: _0x31f30f,
  command: _0x37c0f3,
  args: _0x48cfad,
  q: _0x67be32,
  isGroup: _0x298a3a,
  sender: _0x57ff06,
  senderNumber: _0x1031bf,
  botNumber2: _0x191876,
  botNumber: _0x166901,
  pushname: _0x4e3846,
  isMe: _0x49d799,
  isOwner: _0xe93fcb,
  groupMetadata: _0x4290fb,
  groupName: _0xafaf29,
  participants: _0x5329f0,
  groupAdmins: _0x29dca3,
  isBotAdmins: _0x1f5cdd,
  isAdmins: _0xe990c9,
  reply: _0x293b7a
}) => {
  try {
    if (!_0x67be32) {
      return _0x293b7a("Please specify the video you want to play. Use the format: play [unique-key]");
    }
    const _0x4e90b7 = _0x67be32.match(/(\d+)\.(\d+)/);
    if (!_0x4e90b7) {
      return _0x293b7a("Invalid format. Please provide a valid unique key (e.g., 1.1)");
    }
    const _0x30c5e8 = parseInt(_0x4e90b7[1]);
    const _0x60b595 = parseInt(_0x4e90b7[2]);
    const _0x5df464 = "yts_" + _0x30c5e8;
    if (videoSearchResults.has(_0x5df464)) {
      const _0x232d5b = videoSearchResults.get(_0x5df464)[_0x30c5e8 + '.' + _0x60b595];
      if (_0x232d5b) {
        const _0x14b3df = await ytdl.getInfo(_0x232d5b);
        const _0x325b49 = _0x14b3df.title || _0x14b3df.videoDetails && _0x14b3df.videoDetails.title || "N/A";
        const _0x3e105f = formatUploadDate(_0x14b3df.videoDetails.uploadDate) || "N/A";
        const _0x17683f = "\n╭═════════•∞•══╮\n│⿻ *VAJIRA MD*\n│  *Youtube Mp4 Player* ✨\n│⿻ *Title:* " + _0x325b49 + "\n│⿻ *Author:* " + (_0x14b3df.videoDetails.author.name || "N/A") + "\n│⿻ *Duration:* " + _0x14b3df.videoDetails.lengthSeconds + "s\n│⿻ *Views:* " + (_0x14b3df.videoDetails.viewCount.toLocaleString() || "N/A") + "\n│⿻ *Upload Date:* " + _0x3e105f + "\n╰══•∞•═════════╯\n";
        await _0x1d9251.sendPoll(_0x567098, _0x17683f, [".𝐀𝐮𝐝𝐢𝐨 " + _0x30c5e8 + '.' + _0x60b595, ".𝐕𝐢𝐝𝐞𝐨 " + _0x30c5e8 + '.' + _0x60b595, ".𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 " + _0x30c5e8 + '.' + _0x60b595, ".𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 " + _0x30c5e8 + '.' + _0x60b595]);
      } else {
        return _0x293b7a("Invalid sub-option. Please choose a valid sub-option.");
      }
    } else {
      return _0x293b7a("Invalid unique key. Please provide a valid unique key.");
    }
  } catch (_0x4a2dc2) {
    console.error("Error during poll creation:", _0x4a2dc2);
    return _0x293b7a("Unexpected error occurred during poll creation.");
    _0x15ad21(_0x4a2dc2);
  }
});
const _0x1de46d = {
  pattern: "xnxxdl",
  react: '👾',
  desc: "to take xnxx video",
  category: "download",
  use: ".xnxxdl",
  filename: __filename
};
cmd(_0x1de46d, async (_0x431634, _0x4392d8, _0x3820fe, {
  from: _0x46bb6e,
  l: _0x4b73d9,
  prefix: _0x125e37,
  quoted: _0x1de9e7,
  body: _0x1ffb31,
  isCmd: _0x1bd687,
  command: _0x130037,
  args: _0x5154e7,
  q: _0x4e6d0a,
  isGroup: _0x37091a,
  sender: _0x262597,
  senderNumber: _0x14c785,
  botNumber2: _0x73fd83,
  botNumber: _0x30ec9c,
  pushname: _0x573cbc,
  isMe: _0x1fc066,
  isOwner: _0xfc0a05,
  groupMetadata: _0x5cc501,
  groupName: _0x262e3d,
  participants: _0x23f125,
  groupAdmins: _0x53a410,
  isBotAdmins: _0x194e55,
  isAdmins: _0x3e19f7,
  reply: _0x3616a3
}) => {
  try {
    if (!_0x4e6d0a.includes("xnxx.com")) {
      return _0x4392d8.reply("Enter an xnxx link");
    }
    const _0x20f439 = require("api-dylux");
    let _0x40637a = await _0x20f439.xnxxdl(_0x4e6d0a);
    const _0x457c6c = {
      caption: "  *XNXX DL*\n        \n✍ *Title:* " + _0x40637a.title + "\n⌛ *Duration:* " + _0x40637a.duration + "\n📽 *Visual Quality:* " + _0x40637a.quality,
      video: {}
    };
    _0x457c6c.video.url = _0x40637a.url_dl;
    _0x431634.sendMessage(_0x4392d8.chat, _0x457c6c, {
      'quoted': _0x4392d8
    });
  } catch (_0x245ef1) {
    _0x4b73d9(_0x245ef1);
  }
});
const _0x1f2f75 = {
  pattern: "tempmail",
  react: '👾',
  desc: "to take a tempmail",
  category: "download",
  use: ".tempmail",
  filename: __filename
};
cmd(_0x1f2f75, async (_0x48869e, _0x5d377a, _0x28c056, {
  from: _0x5445ca,
  l: _0x1cc4d6,
  prefix: _0x22e69e,
  quoted: _0x4fc5a7,
  body: _0xc7c118,
  isCmd: _0x1d7c49,
  command: _0x20f577,
  args: _0x199001,
  q: _0x5c8ac1,
  isGroup: _0x3e35e4,
  sender: _0x594de,
  senderNumber: _0x4787d2,
  botNumber2: _0x11a3fa,
  botNumber: _0x1db779,
  pushname: _0x1fef41,
  isMe: _0x444a17,
  isOwner: _0x5cf729,
  groupMetadata: _0x1f0a12,
  groupName: _0x5594ba,
  participants: _0x3dc197,
  groupAdmins: _0x4e6a1f,
  isBotAdmins: _0xc6fe6c,
  isAdmins: _0x37f542,
  reply: _0x2c57a1
}) => {
  try {
    const _0x4cf580 = await fetch("https://tempmail.apinepdev.workers.dev/api/gen");
    const _0x2278a7 = await _0x4cf580.json();
    if (!_0x2278a7 || !_0x2278a7.email) {
      return _0x2c57a1("Failed to generate temporary email");
    }
    const _0x254fdc = _0x2278a7.email;
    return _0x2c57a1("Generated Temporary Email: " + _0x254fdc);
  } catch (_0x1f7345) {
    return _0x2c57a1("Unexpected error occurred during the request.");
    _0x1cc4d6(_0x1f7345);
  }
});
const _0x46f8ba = {
  pattern: "checkmail",
  react: '👾',
  desc: "to see mail",
  category: "download",
  use: ".checkmail",
  filename: __filename
};
cmd(_0x46f8ba, async (_0x556532, _0x577322, _0x46fe74, {
  from: _0x292714,
  l: _0x37f8cf,
  prefix: _0x85c2b0,
  quoted: _0x422403,
  body: _0x537706,
  isCmd: _0x4da464,
  command: _0x40c100,
  args: _0x42e89b,
  q: _0x16d29f,
  isGroup: _0x229afa,
  sender: _0x1e4c8c,
  senderNumber: _0x2a6f1f,
  botNumber2: _0x74cf1f,
  botNumber: _0x5b7f1d,
  pushname: _0x5afee7,
  isMe: _0x49db4a,
  isOwner: _0x31c398,
  groupMetadata: _0x5d36b2,
  groupName: _0x2544d9,
  participants: _0x14a9cf,
  groupAdmins: _0x15fd18,
  isBotAdmins: _0x42104b,
  isAdmins: _0x229d13,
  reply: _0x406928
}) => {
  try {
    if (!_0x16d29f) {
      return _0x406928("*Provide me tempmail for view inbox*");
    }
    const _0xb048d7 = encodeURIComponent(_0x16d29f);
    const _0xee5625 = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0xb048d7;
    const _0x5b410c = await fetch(_0xee5625);
    if (!_0x5b410c.ok) {
      return _0x406928("Invalid response from the API. Status code: " + _0x5b410c.status);
    }
    const _0x5946bd = await _0x5b410c.json();
    if (!_0x5946bd || !_0x5946bd.messages) {
      return _0x406928("Failed to retrieve email messages");
    }
    const _0x155579 = _0x5946bd.messages;
    for (const _0x3ea2d0 of _0x155579) {
      const _0xcdfb56 = _0x3ea2d0.sender;
      const _0x4ac009 = _0x3ea2d0.subject;
      const _0x15af50 = new Date(JSON.parse(_0x3ea2d0.message).date).toLocaleString();
      const _0xc78a9 = JSON.parse(_0x3ea2d0.message).body;
      const _0x28d3fe = "Sender: " + _0xcdfb56 + "\nSubject: " + _0x4ac009 + "\nDate: " + _0x15af50 + "\nMessage: " + _0xc78a9;
      await _0x406928(_0x28d3fe);
    }
  } catch (_0x161729) {
    console.error("Error during API request:", _0x161729);
    return _0x406928("Unexpected error occurred during the request.");
    _0x37f8cf(_0x161729);
  }
});
const _0x39de45 = {
  pattern: "gitclone",
  react: '🔖',
  desc: "download github repos",
  category: "download",
  use: ".gitclone",
  filename: __filename
};
cmd(_0x39de45, async (_0x5bdbef, _0x5c3c7d, _0x707104, {
  from: _0x5d8ab5,
  prefix: _0x22747d,
  l: _0x1e61df,
  quoted: _0xb91c88,
  body: _0x5d8886,
  isCmd: _0xc3e5b2,
  command: _0x3c099d,
  args: _0x2995c1,
  q: _0x550c95,
  isGroup: _0x3d56a3,
  sender: _0x4f0911,
  senderNumber: _0x440477,
  botNumber2: _0x3cd283,
  botNumber: _0x5a4e88,
  pushname: _0x1fc368,
  isMe: _0x38b494,
  isOwner: _0x3cc7bf,
  groupMetadata: _0x4b3427,
  groupName: _0x5f08af,
  participants: _0x403667,
  groupAdmins: _0x1facf6,
  isBotAdmins: _0x46c36f,
  isAdmins: _0x231523,
  reply: _0x17d82e
}) => {
  try {
    let _0x3bb5ed = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x2995c1[0]) {
      _0x17d82e("Use " + _0x22747d + "gitclone repo link\n: https://github.com/VajiraTech/QUEEN-IZUMI-MD");
    }
    if (!_0x3bb5ed.test(_0x2995c1[0])) {
      return _0x17d82e("link");
    }
    let [, _0x346e32, _0x30a24a] = _0x2995c1[0].match(_0x3bb5ed) || [];
    _0x30a24a = _0x30a24a.replace(/.git$/, '');
    let _0x257719 = "https://api.github.com/repos/" + _0x346e32 + '/' + _0x30a24a + "/zipball";
    let _0x48af3e = '' + _0x346e32 + _0x30a24a;
    const _0x1d4b7d = {
      url: _0x257719
    };
    _0x5bdbef.sendMessage(_0x5c3c7d.chat, {
      'document': _0x1d4b7d,
      'fileName': _0x48af3e + ".zip",
      'mimetype': "application/zip",
      'caption': "*ǫᴜᴇᴇɴ-ɪᴢᴜᴍɪ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*"
    }, {
      'quoted': _0x5c3c7d
    })["catch"](_0xbe4c14 => _0x17d82e(mess.error));
  } catch (_0x3820ea) {
    _0x17d82e();
    _0x1e61df(_0x3820ea);
  }
});
const _0x591c71 = {
  pattern: "ehi",
  react: "🖼️",
  desc: "ehi files downloader",
  category: "download",
  use: ".ehi",
  filename: __filename
};
cmd(_0x591c71, async (_0x2a74c0, _0xc3f986, _0x434c78, {
  from: _0x3ea880,
  l: _0x2d426c,
  quoted: _0x10e3e6,
  prefix: _0x1b6b87,
  body: _0x52cec3,
  isCmd: _0x3e3e35,
  command: _0x5df976,
  args: _0x1637c0,
  q: _0xa01a1e,
  isGroup: _0x17ded5,
  sender: _0x56f09d,
  senderNumber: _0x9184c7,
  botNumber2: _0x309cb2,
  botNumber: _0x32685b,
  pushname: _0x3eaa6a,
  isMe: _0x212f61,
  isOwner: _0x17c26f,
  groupMetadata: _0x3677b6,
  groupName: _0x52e17b,
  participants: _0xf2d9a0,
  groupAdmins: _0x136426,
  isBotAdmins: _0x66ce04,
  isAdmins: _0x1985cb,
  reply: _0x2f5c64
}) => {
  try {
    const _0x50c86c = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x1b6b87 + "httpinjector " + _0xa01a1e,
        'description': "apk of http injector"
      }, {
        'title': '2',
        'rowId': _0x1b6b87 + "ehifiles " + _0xa01a1e,
        'description': "Down ehi files"
      }, {
        'title': '3',
        'rowId': _0x1b6b87 + "aboutehi " + _0xa01a1e,
        'description': "Info of ehi files"
      }]
    }];
    const _0x1e76d4 = {
      url: config.LOGO
    };
    const _0x276951 = {
      caption: "╔══════❨ ❄ ❩══════╗\n\n            *🎗️ ᴠᴀᴊɪʀᴀ ᴍᴅ ᴠ3 ᴇʜɪ 🎗️*\n    \n ▫ ғʀᴇᴇ ᴇʜɪ\n ▫ ᴍᴀᴋᴇ ᴅᴀᴛᴇ\n ▫ ᴇxᴘɪʀᴇ ᴅᴀᴛᴇ \n     \n _✕ ɴᴏ ʜᴀᴄᴋɪɴɢ_\n _✕ ɴᴏ sᴘᴀᴍ_ \n _✕ ɴᴏ ᴅᴅᴏs_\n _✕ ᴅᴏɴ'ᴛ ᴜsᴇ ᴜɴɴᴇᴄᴇssᴀʀʏ ᴡᴏʀᴋ_\n \n    *ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴇʜɪ ғɪʟᴇs 💞.*\n\n╚══════[💀]",
      image: _0x1e76d4,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x50c86c
    };
    const _0x2bab4b = {
      quoted: _0xc3f986
    };
    return await _0x2a74c0.replyList(_0x3ea880, _0x276951, _0x2bab4b);
  } catch (_0x471bbd) {
    _0x2f5c64("*ERROR !!*");
    _0x2d426c(_0x471bbd);
  }
});
const _0x5ac1f1 = {
  pattern: "aboutehi",
  category: '',
  filename: __filename
};
cmd(_0x5ac1f1, async (_0x5dd50a, _0x1b2e55, _0x105d31, {
  from: _0xcbd400,
  l: _0x38481b,
  quoted: _0x578d26,
  body: _0x59b0f5,
  isCmd: _0x4ac611,
  command: _0x1fe7a9,
  args: _0x3de51b,
  q: _0xb9bfd9,
  isGroup: _0x166d80,
  sender: _0xb88f38,
  senderNumber: _0x564d15,
  botNumber2: _0x53cac5,
  botNumber: _0x3763ff,
  pushname: _0x219229,
  isMe: _0x1d0218,
  isOwner: _0x5101a5,
  groupMetadata: _0x34bdf7,
  groupName: _0x1da0ad,
  participants: _0x1183ea,
  groupAdmins: _0x54e864,
  isBotAdmins: _0x499ce7,
  isAdmins: _0xe281cf,
  reply: _0x4eecbb
}) => {
  try {
    const _0x33617d = [];
    const _0x5043e9 = {
      caption: "💬 Ehi file යනු* ,\nඔබට whatsapp package බාවිතාකර free internet ලබාගත හැකි ක්‍රමයකි.\n\nඋදාහරණයක් ලෙස , ඔබට whatsapp package එක බාවිතාකරමින් tiktok , fb , youtube , google යාම වැනිදේ සිදුකර හැකිවීම.\nමෙම ehi file උපරිම අන්තර්ජාල වේගයක් ලබා නොදෙයි. නමුත් ඔබට යම් වේගයකින් අන්තර්ජාල පහසුකම් ලබාගත හැක.\nඔබට මෙම ehi file සාමාන්‍යයෙන් අප බාවිතාකරන \nwhatsapp , facebook , youtube , zoom යන ආදී package වලට ගැලපෙන ආකාරයේ file බාවිතාකර හැක \n\n\nබාවිතාකරන්නේ කෙසේද ?\n1. http injector app එක ඔබගේ phone එකට install කරගන්න \n2. ඔබගේ package එකට අදාල ehi file එක තෝරාගන්න \n3. එම file එක httpinjector app එකට ඇතුලත් කර start බටන් එක ඔබන්න \n( ඔබට මෙම file බාවිතාකිරීමටනම් ඉහත කිසියම් හෝ package 1ක් දමාගෙන තිබිය යුතුය )\n\n*© ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*\n\n============================================================================\n\n*💬 Ehi file is*,\n It is a method where you can get free internet by using whatsapp package.\n For example, you can use whatsapp package to go to tiktok, fb, youtube, google etc.\n\n This ehi file does not provide maximum internet speed.  But you can get internet facility at some speed.\n You can find this ehi file which we usually use\n You can use the type of file suitable for packages like whatsapp, facebook, youtube, zoom etc\n\n*How to use*\n 1. Install the http injector app on your phone.\n 2. Select the ehi file related to your package.\n 3. Enter that file into the httpinjector app and press the start button.\n_( If you want to use this file, you must have one of the above packages installed )_\n\n\n*© ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
      footer: "*ᴠᴀᴊɪʀᴀ-ᴍᴅ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*",
      buttons: _0x33617d,
      headerType: 0x1
    };
    return await _0x5dd50a.buttonMessage(_0xcbd400, _0x5043e9, _0x1b2e55);
  } catch (_0x51de58) {
    _0x38481b(_0x51de58);
  }
});
const _0x252c8a = {
  pattern: "httpinjector",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x252c8a, async (_0x306f4b, _0x3a1e4a, _0xc180eb, {
  from: _0x629279,
  l: _0xb025c8,
  quoted: _0x542839,
  body: _0x3a17eb,
  isCmd: _0x2f95a0,
  command: _0x5056dd,
  args: _0x4a8e8b,
  q: _0x182806,
  isGroup: _0x1f16f1,
  sender: _0x588cee,
  senderNumber: _0x1dbc94,
  botNumber2: _0x3ab520,
  botNumber: _0x3f3c08,
  pushname: _0x225829,
  isMe: _0x156780,
  isOwner: _0x3785c2,
  groupMetadata: _0x3220f0,
  groupName: _0x26995e,
  participants: _0x1210df,
  groupAdmins: _0x231f58,
  isBotAdmins: _0x1703e5,
  isAdmins: _0x4d603b,
  reply: _0x3dcfa0
}) => {
  try {
    const _0x504034 = {
      text: '📥',
      key: _0x3a1e4a.key
    };
    const _0x284bd0 = {
      react: _0x504034
    };
    await _0x306f4b.sendMessage(_0x629279, _0x284bd0);
    const _0xc74de7 = {
      url: "https://github.com/VajiraTech/Izumi-ehi/blob/main/Http_injector/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk"
    };
    const _0x2f1d2e = {
      document: _0xc74de7,
      mimetype: "application/vnd.android.package-archive",
      fileName: "HTTP Injector Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ (SSHProxyV2Ray) VPN.apk",
      caption: config.FOOTER
    };
    const _0x1b9b00 = {
      quoted: _0x3a1e4a
    };
    await _0x306f4b.sendMessage(_0x629279, _0x2f1d2e, _0x1b9b00);
    const _0xffa428 = {
      text: '✔',
      key: _0x3a1e4a.key
    };
    const _0x4ada79 = {
      react: _0xffa428
    };
    await _0x306f4b.sendMessage(_0x629279, _0x4ada79);
  } catch (_0x1d2f84) {
    _0x3dcfa0("*ERROR !!*");
    _0xb025c8(_0x1d2f84);
  }
});
const _0x4c7b69 = {
  pattern: "ehifiles",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4c7b69, async (_0x3528df, _0x282ebc, _0x5a6213, {
  from: _0x7ee2cd,
  l: _0x3b11c2,
  quoted: _0x2400b9,
  body: _0x1a0b67,
  isCmd: _0x4d1db6,
  command: _0x8169ff,
  args: _0x56ace7,
  q: _0x72a9c,
  isGroup: _0x4dd66f,
  sender: _0x4c848a,
  senderNumber: _0x45c002,
  botNumber2: _0x53d201,
  botNumber: _0x55e199,
  pushname: _0xc5683d,
  isMe: _0x54bfcd,
  isOwner: _0x550f32,
  groupMetadata: _0x26d523,
  groupName: _0x5e8ea6,
  participants: _0xbc651e,
  groupAdmins: _0x399e10,
  isBotAdmins: _0x2db57e,
  isAdmins: _0xa53eb4,
  reply: _0x556405
}) => {
  try {
    const _0x1f818a = await fetchJson("https://gist.github.com/VajiraTech/e13022d2d3eacaac87967d8ee67ddf25/raw");
    ehi = _0x1f818a.EHI_FILES[0].SG_FILE1;
    ehi2 = _0x1f818a.EHI_FILES[0].SG_FILE2;
    ehi3 = _0x1f818a.EHI_FILES[0].SG_FILE3;
    ehi4 = _0x1f818a.EHI_FILES[0].SG_FILE4;
    ehi5 = _0x1f818a.EHI_FILES[1].US_FILE1;
    ehi6 = _0x1f818a.EHI_FILES[1].US_FILE2;
    ehi7 = _0x1f818a.EHI_FILES[1].US_FILE3;
    ehi8 = _0x1f818a.EHI_FILES[1].US_FILE4;
    const _0x5d66f9 = {
      text: "\n" + _0x1f818a.EHI + "\n" + _0x1f818a.C_E_DATES + "\n" + _0x1f818a.XX_XX + "\n"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x5d66f9, {
      'quoted': _0x282ebc
    });
    const _0x65760a = {
      url: ehi
    };
    const _0x3e3510 = {
      document: _0x65760a,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI + " FaceBook " + _0x1f818a.EHI_IMOJI + ".ehi"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x3e3510, {
      'quoted': _0x282ebc
    });
    const _0x42e5aa = {
      url: ehi2
    };
    const _0xaedc2 = {
      document: _0x42e5aa,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI + " Whatsapp " + _0x1f818a.EHI_IMOJI + ".ehi "
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0xaedc2, {
      'quoted': _0x282ebc
    });
    const _0x2a8583 = {
      url: ehi3
    };
    const _0x4e315c = {
      document: _0x2a8583,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI + " Youtube " + _0x1f818a.EHI_IMOJI + ".ehi"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x4e315c, {
      'quoted': _0x282ebc
    });
    const _0xe6ee80 = {
      url: ehi4
    };
    const _0x5a6fb9 = {
      document: _0xe6ee80,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI + " Zoom " + _0x1f818a.EHI_IMOJI + ".ehi"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x5a6fb9, {
      'quoted': _0x282ebc
    });
    const _0xca3f95 = {
      url: ehi5
    };
    const _0x1e3bc2 = {
      document: _0xca3f95,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI2 + " FaceBook " + _0x1f818a.EHI_IMOJI2 + ".ehi"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x1e3bc2, {
      'quoted': _0x282ebc
    });
    const _0x4ab55f = {
      url: ehi6
    };
    const _0x1dc513 = {
      document: _0x4ab55f,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI2 + " Whatsapp " + _0x1f818a.EHI_IMOJI2 + ".ehi "
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x1dc513, {
      'quoted': _0x282ebc
    });
    const _0x1516bf = {
      url: ehi7
    };
    const _0x4c59a0 = {
      document: _0x1516bf,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI2 + " Youtube " + _0x1f818a.EHI_IMOJI2 + ".ehi"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x4c59a0, {
      'quoted': _0x282ebc
    });
    const _0x56a292 = {
      url: ehi8
    };
    const _0x31ab32 = {
      document: _0x56a292,
      mimetype: "application/octet-stream",
      fileName: _0x1f818a.EHI_IMOJI2 + " Zoom " + _0x1f818a.EHI_IMOJI2 + ".ehi"
    };
    await _0x3528df.sendMessage(_0x282ebc.chat, _0x31ab32, {
      'quoted': _0x282ebc
    });
    await _0x3528df.sendMessage(_0x282ebc.chat, "✅ _Success send_ *" + _0x282ebc.pushName + "* _Ehi Files..._", _0x282ebc);
  } catch (_0x36baf4) {
    _0x556405("*📥 𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝘿 𝘽𝙔 𝙑𝘼𝙅𝙄𝙍𝘼 𝙈𝘿 𝙊𝙒𝙉𝙀𝙍*");
    _0x3b11c2(_0x36baf4);
  }
});
function _0x3310(_0x5539d9, _0x38ddda) {
  const _0x2ef391 = _0xfab2();
  _0x3310 = function (_0x231d71, _0x52a0ae) {
    _0x231d71 = _0x231d71 - 281;
    let _0x3429a0 = _0x2ef391[_0x231d71];
    return _0x3429a0;
  };
  return _0x3310(_0x5539d9, _0x38ddda);
}
const _0x34106f = {
  pattern: "fmmods",
  alias: ["wamod", "wamods", "fmmod"],
  react: '📲',
  desc: "Download all fmmods."
};
function _0xa9e4bd(_0x4dc831, _0x57b404, _0xea2ebb, _0x2aa12b, _0x33b0e2) {
  return _0x3310(_0x33b0e2 + 0x18f, _0x4dc831);
}
_0x34106f.category = "download";
_0x34106f.use = ".fmmods";
_0x34106f.filename = __filename;
cmd(_0x34106f, async (_0x4d6ffa, _0x4f73c1, _0x1bf196, {
  from: _0xb487cf,
  l: _0x408fe9,
  quoted: _0x364d65,
  prefix: _0x431a30,
  body: _0x1ccdc4,
  isCmd: _0x227708,
  command: _0xf89508,
  args: _0x20cc29,
  q: _0x4ca273,
  isGroup: _0x3ffca4,
  sender: _0x5b5683,
  senderNumber: _0x4b30ea,
  botNumber2: _0xf8d4c1,
  botNumber: _0x3dd246,
  pushname: _0x332af9,
  isMe: _0x26e485,
  isOwner: _0x1078f5,
  groupMetadata: _0x58afb5,
  groupName: _0x121279,
  participants: _0x42af2e,
  groupAdmins: _0x29a7de,
  isBotAdmins: _0x30162c,
  isAdmins: _0x580e3a,
  reply: _0x2c59fd
}) => {
  try {
    let _0x77491a = (await fetchJson("https://api.maher-zubair.tech/whatsapp/wamods")).data;
    const _0x4103fe = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x431a30 + "dmod " + _0x77491a.com_whatsapp.link + '+' + _0x77491a.com_whatsapp.name,
        'description': _0x77491a.com_whatsapp.name
      }, {
        'title': '2',
        'rowId': _0x431a30 + "dmod " + _0x77491a.com_fmwhatsapp.link + '+' + _0x77491a.com_fmwhatsapp.name,
        'description': _0x77491a.com_fmwhatsapp.name
      }, {
        'title': '3',
        'rowId': _0x431a30 + "dmod " + _0x77491a.com_gbwhatsapp.link + '+' + _0x77491a.com_gbwhatsapp.name,
        'description': _0x77491a.com_gbwhatsapp.name
      }, {
        'title': '4',
        'rowId': _0x431a30 + "dmod " + _0x77491a.com_yowhatsapp.link + '+' + _0x77491a.com_yowhatsapp.name,
        'description': _0x77491a.com_yowhatsapp.name
      }]
    }];
    const _0x321203 = {
      url: config.LOGO
    };
    const _0x499378 = {
      caption: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n      \n*Foud Whatsapp Mod Downloader 📲*\n",
      image: _0x321203,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4103fe
    };
    const _0x527d19 = {
      quoted: _0x4f73c1
    };
    return await _0x4d6ffa.replyList(_0xb487cf, _0x499378, _0x527d19);
  } catch (_0x566e38) {
    _0x2c59fd("*ERROR !!*");
    _0x408fe9(_0x566e38);
  }
});
const _0x11020c = {
  pattern: "dmod",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x11020c, async (_0x40b14b, _0x44cf67, _0x2325f0, {
  from: _0x28f818,
  l: _0x3d35e9,
  quoted: _0x2906ba,
  body: _0x131f66,
  isCmd: _0x1faa39,
  command: _0x54b857,
  args: _0x3f95f6,
  q: _0x5b16cb,
  isGroup: _0x33175a,
  sender: _0x43f400,
  senderNumber: _0x5a98cd,
  botNumber2: _0x15491e,
  botNumber: _0x753784,
  pushname: _0x4d89a6,
  isMe: _0x3988d4,
  isOwner: _0xb77abf,
  groupMetadata: _0x2fe111,
  groupName: _0x2793d8,
  participants: _0x2232b5,
  groupAdmins: _0x1fa15d,
  isBotAdmins: _0x47b081,
  isAdmins: _0x1009d7,
  reply: _0x44920b
}) => {
  try {
    const _0xdd0d33 = {
      text: '📥',
      key: _0x44cf67.key
    };
    const _0x1f5587 = {
      react: _0xdd0d33
    };
    await _0x40b14b.sendMessage(_0x28f818, _0x1f5587);
    let [_0x302571, _0x1d51bc] = _0x5b16cb.split`+`;
    const _0x598667 = {
      url: _0x302571
    };
    const _0x35102b = {
      quoted: _0x44cf67
    };
    await _0x40b14b.sendMessage(_0x28f818, {
      'document': _0x598667,
      'fileName': _0x1d51bc + ".apk",
      'mimetype': "application/vnd.android.package-archive"
    }, _0x35102b);
    const _0x465f5d = {
      text: '✔',
      key: _0x44cf67.key
    };
    const _0x494051 = {
      react: _0x465f5d
    };
    await _0x40b14b.sendMessage(_0x28f818, _0x494051);
  } catch (_0x1d618f) {
    _0x44920b("*ERROR !!*");
    _0x3d35e9(_0x1d618f);
  }
});
const _0x23162d = {
  pattern: "apk",
  react: '📦',
  desc: "apk downloader",
  category: "download",
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x23162d, async (_0xb6e33f, _0x512ee9, _0x5ede49, {
  from: _0x562d5e,
  l: _0x14be6c,
  quoted: _0x162d75,
  prefix: _0x4ec08c,
  body: _0x367368,
  isCmd: _0x80f120,
  command: _0x32bcaf,
  args: _0x514281,
  q: _0x1d18f4,
  isGroup: _0x282345,
  sender: _0x482679,
  senderNumber: _0x3f04fe,
  botNumber2: _0x3e05c2,
  botNumber: _0x460d6d,
  pushname: _0x1f7bd3,
  isMe: _0x497003,
  isOwner: _0x506571,
  groupMetadata: _0x52f51e,
  groupName: _0x2c28b4,
  participants: _0x404205,
  groupAdmins: _0x4c6442,
  isBotAdmins: _0x539c07,
  isAdmins: _0x2f0271,
  reply: _0x10a8cb
}) => {
  try {
    const _0x157d6c = {
      text: 'ℹ️',
      key: _0x512ee9.key
    };
    const _0x266b35 = {
      react: _0x157d6c
    };
    await _0xb6e33f.sendMessage(_0x562d5e, _0x266b35);
    const _0x5aea33 = {
      text: "*Need apk link...*"
    };
    const _0x4a8cd9 = {
      quoted: _0x512ee9
    };
    if (!_0x1d18f4) {
      return await _0xb6e33f.sendMessage(_0x562d5e, _0x5aea33, _0x4a8cd9);
    }
    const _0x20059c = await apkdl.download(_0x1d18f4);
    let _0x4cc312 = "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ - Ｖ3 👨‍💻]\n   \n *APK-DOWNLOADER*\n\n *📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x20059c.name + "*\n *📈 ᴀᴘᴘ ꜱɪᴢᴇ: " + _0x20059c.size + "*\n \n─────────────────────────────";
    const _0x25bad2 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x4ec08c + "dapk " + _0x1d18f4,
        'description': "Download the apk"
      }, {
        'title': '2',
        'rowId': _0x4ec08c + "apk1 " + _0x1d18f4,
        'description': "Download many apk"
      }, {
        'title': '3',
        'rowId': _0x4ec08c + "apkinfo " + _0x1d18f4,
        'description': "Info of apk"
      }]
    }];
    const _0x20099d = {
      url: config.LOGO
    };
    const _0x57c586 = {
      caption: _0x4cc312,
      image: _0x20099d,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x25bad2
    };
    const _0x17d6fd = {
      quoted: _0x512ee9
    };
    return await _0xb6e33f.replyList(_0x562d5e, _0x57c586, _0x17d6fd);
  } catch (_0xe6afba) {
    _0x10a8cb("*ERROR !!*");
    _0x14be6c(_0xe6afba);
  }
});
const _0x46f459 = {
  pattern: "apk1",
  react: '📱',
  alias: ["findapk", "playstore"],
  desc: urlneed4,
  category: "download",
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x46f459, async (_0x29ceb3, _0x378d8b, _0x29363a, {
  from: _0x100c54,
  prefix: _0x24d045,
  l: _0x3e1010,
  quoted: _0x5e3ff8,
  body: _0x28bf88,
  isCmd: _0x886743,
  command: _0x5b5a65,
  args: _0x142390,
  q: _0x54a692,
  isGroup: _0x294337,
  sender: _0x45dd94,
  senderNumber: _0x501a4b,
  botNumber2: _0x389ea8,
  botNumber: _0x357fd8,
  pushname: _0x33d1f4,
  isMe: _0x3cf237,
  isOwner: _0xd44311,
  groupMetadata: _0xb253cc,
  groupName: _0x1f9f82,
  participants: _0x54314f,
  groupAdmins: _0xadd17b,
  isBotAdmins: _0x41c494,
  isAdmins: _0xa1e857,
  reply: _0x3fa6e3
}) => {
  try {
    const _0x260774 = {
      text: imgmsg
    };
    const _0x14de47 = {
      quoted: _0x378d8b
    };
    if (!_0x54a692) {
      return await _0x29ceb3.sendMessage(_0x100c54, _0x260774, _0x14de47);
    }
    const _0x45328d = await apkdl.search(_0x54a692);
    const _0x5a795f = {
      text: N_FOUND
    };
    const _0x5d58f6 = {
      quoted: _0x378d8b
    };
    if (_0x45328d.length < 1) {
      return await _0x29ceb3.sendMessage(_0x100c54, _0x5a795f, _0x5d58f6);
    }
    var _0x24724b = [];
    for (var _0x4b3ee0 = 0; _0x4b3ee0 < _0x45328d.length; _0x4b3ee0++) {
      _0x24724b.push({
        'description': _0x45328d[_0x4b3ee0].name,
        'title': _0x4b3ee0 + 1,
        'rowId': _0x24d045 + "dapk " + _0x45328d[_0x4b3ee0].id
      });
    }
    const _0x594d42 = {
      title: "_[Result from playstore.]_",
      rows: _0x24724b
    };
    const _0x4b8681 = [_0x594d42];
    const _0x553cf3 = {
      text: "┌───[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *APK DOWNLOADER*\n\n*📱 Apk Name:* " + _0x54a692,
      footer: config.FOOTER,
      title: "Result from playstore. 📲",
      buttonText: "*🔢 Reply below number*",
      sections: _0x4b8681
    };
    const _0x40228a = {
      quoted: _0x378d8b
    };
    await _0x29ceb3.replyList(_0x100c54, _0x553cf3, _0x40228a);
  } catch (_0x6d9078) {
    _0x3fa6e3("*ERROR !!*");
    _0x3e1010(_0x6d9078);
  }
});
const _0x1491c1 = {
  pattern: "dapk",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1491c1, async (_0x51f490, _0x293697, _0x471906, {
  from: _0x4d2d0e,
  l: _0x5e86d7,
  quoted: _0x532f7d,
  body: _0x106315,
  isCmd: _0x567870,
  command: _0x4ef927,
  args: _0x3ba67b,
  q: _0x48061e,
  isGroup: _0x2e9022,
  sender: _0x32d27f,
  senderNumber: _0x3c0f0a,
  botNumber2: _0x1877c7,
  botNumber: _0x49286c,
  pushname: _0x26a11b,
  isMe: _0x29b452,
  isOwner: _0x12e75f,
  groupMetadata: _0x1fd9b1,
  groupName: _0x26e562,
  participants: _0x3a41e2,
  groupAdmins: _0x50cbd0,
  isBotAdmins: _0x20b933,
  isAdmins: _0x43f8c4,
  reply: _0x39faa0
}) => {
  try {
    const _0x1ac800 = {
      text: '📥',
      key: _0x293697.key
    };
    const _0x2549f2 = {
      react: _0x1ac800
    };
    await _0x51f490.sendMessage(_0x4d2d0e, _0x2549f2);
    const _0x1ab9a2 = {
      text: "*Need apk link...*"
    };
    const _0x113d03 = {
      quoted: _0x293697
    };
    if (!_0x48061e) {
      return await _0x51f490.sendMessage(_0x4d2d0e, _0x1ab9a2, _0x113d03);
    }
    const _0x493210 = await apkdl.download(_0x48061e);
    const _0x52aa76 = {
      url: _0x493210.dllink
    };
    const _0x7c5cf6 = {
      quoted: _0x293697
    };
    let _0x210a70 = await _0x51f490.sendMessage(_0x4d2d0e, {
      'document': _0x52aa76,
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x493210.name + '.' + "apk",
      'caption': "*ᴠᴀᴊɪʀᴀ-ᴍᴅ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*"
    }, _0x7c5cf6);
    const _0x95e19c = {
      text: '📁',
      key: _0x210a70.key
    };
    const _0x42d2d6 = {
      react: _0x95e19c
    };
    await _0x51f490.sendMessage(_0x4d2d0e, _0x42d2d6);
    const _0x2c2a52 = {
      text: '✔',
      key: _0x293697.key
    };
    const _0x5d2df2 = {
      react: _0x2c2a52
    };
    await _0x51f490.sendMessage(_0x4d2d0e, _0x5d2df2);
  } catch (_0x693276) {
    _0x39faa0("*ERROR !!*");
    _0x5e86d7(_0x693276);
  }
});
const _0x558794 = {
  pattern: "apkinfo",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x558794, async (_0x3b876e, _0x155a66, _0x3abc56, {
  from: _0x37da6e,
  l: _0x4cab98,
  quoted: _0x15b565,
  body: _0x5d4108,
  isCmd: _0x3d9a45,
  command: _0x24ce44,
  args: _0x236f55,
  q: _0x459fd1,
  isGroup: _0x4a1e21,
  sender: _0x5b421c,
  senderNumber: _0x3f7524,
  botNumber2: _0x372ee2,
  botNumber: _0x52c2b8,
  pushname: _0x4a9482,
  isMe: _0x3c681e,
  isOwner: _0x1643c3,
  groupMetadata: _0x3d4433,
  groupName: _0x145f31,
  participants: _0x2b4948,
  groupAdmins: _0x38c503,
  isBotAdmins: _0x1b39e7,
  isAdmins: _0x3d49fc,
  reply: _0x281c4b
}) => {
  try {
    const _0x17d49c = {
      text: 'ℹ️',
      key: _0x155a66.key
    };
    const _0x471489 = {
      react: _0x17d49c
    };
    await _0x3b876e.sendMessage(_0x37da6e, _0x471489);
    const _0x2e5a8a = {
      text: "*Need apk link...*"
    };
    const _0x4cf857 = {
      quoted: _0x155a66
    };
    if (!_0x459fd1) {
      return await _0x3b876e.sendMessage(_0x37da6e, _0x2e5a8a, _0x4cf857);
    }
    const _0x48fb3d = await apkdl.download(_0x459fd1);
    let _0x1cfaea = "╔═══════════════════╗\n*║🤳VAJIRA PLAYSTORE-SEARCH*\n╚═══════════════════╝\n\n*📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x48fb3d.name + "* \n\n*📈 ᴀᴘᴘ ꜱɪᴢᴇ(ᴍʙ): " + _0x48fb3d.size + "*\n\n*📱 ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ: " + _0x48fb3d.lastup + "*\n\n*📦 ᴅᴇᴠᴇʟᴏᴘᴇʀ: " + _0x48fb3d["package"] + "* \n\n_*◯──────────────────────────────────◯*_";
    const _0x194264 = {
      url: _0x48fb3d.icon
    };
    const _0x564a62 = {
      image: _0x194264,
      caption: _0x1cfaea
    };
    const _0x567534 = {
      quoted: _0x155a66
    };
    await _0x3b876e.sendMessage(_0x37da6e, _0x564a62, _0x567534);
    const _0x39257d = {
      text: '✔',
      key: _0x155a66.key
    };
    const _0x118e02 = {
      react: _0x39257d
    };
    await _0x3b876e.sendMessage(_0x37da6e, _0x118e02);
  } catch (_0x28d304) {
    _0x4cab98(_0x28d304);
  }
});
const _0x363c88 = {
  pattern: 'ss',
  react: "🖼️",
  desc: "url to screenshot",
  category: "download",
  use: ".ss url",
  filename: __filename
};
cmd(_0x363c88, async (_0x2c8dd5, _0x337f2c, _0x31a3b9, {
  from: _0x14477b,
  l: _0x4207f7,
  quoted: _0x4d8bf4,
  prefix: _0x39ac8a,
  body: _0x53fae8,
  isCmd: _0x36f895,
  command: _0xa3fbe0,
  args: _0x4a3df,
  q: _0x451865,
  isGroup: _0x3febec,
  sender: _0x2d8dfe,
  senderNumber: _0x3b1904,
  botNumber2: _0x112323,
  botNumber: _0x12aca6,
  pushname: _0x15f287,
  isMe: _0x56599c,
  isOwner: _0x18b1b7,
  groupMetadata: _0x2621bf,
  groupName: _0x16391d,
  participants: _0x47bbe1,
  groupAdmins: _0x925ca7,
  isBotAdmins: _0x132dab,
  isAdmins: _0x3ee16c,
  reply: _0x403f05
}) => {
  try {
    const _0xd64989 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x39ac8a + "desktop " + _0x451865,
        'description': "Desktop type ss"
      }, {
        'title': '2',
        'rowId': _0x39ac8a + "ssphone " + _0x451865,
        'description': "Phone type ss 🖼️"
      }, {
        'title': '3',
        'rowId': _0x39ac8a + "sstab " + _0x451865,
        'description': "Tab type ss 🖼️"
      }]
    }];
    const _0x558d54 = {
      url: config.LOGO
    };
    const _0x15e054 = {
      caption: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n   \n ▏ *SS CONVETER*\n\n└──────◉",
      image: _0x558d54,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0xd64989
    };
    const _0x533aea = {
      quoted: _0x337f2c
    };
    return await _0x2c8dd5.replyList(_0x14477b, _0x15e054, _0x533aea);
  } catch (_0x3683b2) {
    _0x403f05("*ERROR !!*");
    _0x4207f7(_0x3683b2);
  }
});
const _0x243e54 = {
  pattern: "desktop",
  react: '📸',
  alias: ["screenshot", "ssweb", "ssdesktop"],
  desc: descg,
  category: "download",
  use: ".ss <url>",
  filename: __filename
};
cmd(_0x243e54, async (_0x334c4c, _0x20658b, _0x1204ec, {
  from: _0x161671,
  l: _0x192236,
  quoted: _0x2f0eba,
  prefix: _0x2ee590,
  body: _0x349270,
  isCmd: _0x57ff3b,
  command: _0x3b3739,
  args: _0x4597c0,
  q: _0x2a5a59,
  isGroup: _0x3d45b4,
  sender: _0x4d1039,
  senderNumber: _0x4a8924,
  botNumber2: _0x1c12b7,
  botNumber: _0x2a6c68,
  pushname: _0xd8cc98,
  isMe: _0x7637cb,
  isOwner: _0x4eec69,
  groupMetadata: _0xd34876,
  groupName: _0x304e0f,
  participants: _0x681dec,
  groupAdmins: _0x366ed1,
  isBotAdmins: _0x517c3a,
  isAdmins: _0x38ee35,
  reply: _0x14348e
}) => {
  try {
    if (!_0x2a5a59) {
      return _0x14348e(imgmsg);
    }
    let _0x3da75b = getRandom('');
    let _0x50f7f6 = await sswebA(_0x2a5a59, true, "desktop");
    fs.writeFileSync(_0x3da75b + ".jpg", _0x50f7f6);
    const _0x4a31bb = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x2ee590 + "ssd " + _0x3da75b + ".jpg",
        'description': "DOCUMENT"
      }, {
        'title': '2',
        'rowId': _0x2ee590 + "ssi " + _0x3da75b + ".jpg",
        'description': "IMAGE"
      }]
    }];
    const _0x2cbaa8 = {
      url: config.LOGO
    };
    const _0x42b01c = {
      caption: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*",
      image: _0x2cbaa8,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4a31bb
    };
    const _0xe5e11 = {
      quoted: _0x20658b
    };
    return await _0x334c4c.replyList(_0x161671, _0x42b01c, _0xe5e11);
  } catch (_0xf3c3e3) {
    _0x14348e("*ERROR !!*");
    _0x192236(_0xf3c3e3);
  }
});
const _0x47ba92 = {
  pattern: "ssphone",
  react: '📸',
  desc: descp,
  category: "download",
  use: ".ss <url>",
  filename: __filename
};
cmd(_0x47ba92, async (_0x28a1b0, _0x4fb42e, _0x36e96a, {
  from: _0x3c3a04,
  l: _0x4adb8d,
  quoted: _0xd3febb,
  prefix: _0x5c2644,
  body: _0xbf55fa,
  isCmd: _0x42b350,
  command: _0x53bbe9,
  args: _0x2d7042,
  q: _0x3f5029,
  isGroup: _0x4c712f,
  sender: _0x263b54,
  senderNumber: _0x81c342,
  botNumber2: _0x3c17af,
  botNumber: _0x12a04e,
  pushname: _0x22b683,
  isMe: _0x16aecc,
  isOwner: _0xafec89,
  groupMetadata: _0x52fcb3,
  groupName: _0x3391cf,
  participants: _0x2c08ba,
  groupAdmins: _0x261ec5,
  isBotAdmins: _0x4f1dc6,
  isAdmins: _0x4bbac4,
  reply: _0x2bd217
}) => {
  try {
    if (!_0x3f5029) {
      return _0x2bd217(imgmsg);
    }
    let _0x54333f = getRandom('');
    let _0x2b2c93 = await sswebA(_0x3f5029, true, "phone");
    fs.writeFileSync(_0x54333f + ".jpg", _0x2b2c93);
    const _0x5b7d87 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x5c2644 + "ssd " + _0x54333f + ".jpg",
        'description': "DOCUMENT"
      }, {
        'title': '2',
        'rowId': _0x5c2644 + "ssi " + _0x54333f + ".jpg",
        'description': "IMAGE"
      }]
    }];
    const _0x36777c = {
      url: config.LOGO
    };
    const _0x3cb319 = {
      caption: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*",
      image: _0x36777c,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x5b7d87
    };
    const _0x388f33 = {
      quoted: _0x4fb42e
    };
    return await _0x28a1b0.replyList(_0x3c3a04, _0x3cb319, _0x388f33);
  } catch (_0x5e0538) {
    _0x2bd217("*ERROR !!*");
    _0x4adb8d(_0x5e0538);
  }
});
const _0x368062 = {
  pattern: "sstab",
  react: '📸',
  desc: desct,
  category: "download",
  use: ".ss <url>",
  filename: __filename
};
cmd(_0x368062, async (_0x3120fe, _0x4e8ba7, _0x1eff43, {
  from: _0x3f2ce5,
  l: _0x5ea7cd,
  quoted: _0x46bbc8,
  prefix: _0x3c1287,
  body: _0x1d7226,
  isCmd: _0x4e4504,
  command: _0x4ba868,
  args: _0x408725,
  q: _0x363c2c,
  isGroup: _0x8f4cd5,
  sender: _0x41a5ed,
  senderNumber: _0x48e45a,
  botNumber2: _0x90f131,
  botNumber: _0x32251d,
  pushname: _0x46d487,
  isMe: _0x1e4754,
  isOwner: _0xba91a4,
  groupMetadata: _0x547fc0,
  groupName: _0x2ef1d6,
  participants: _0x3305d4,
  groupAdmins: _0x1e558e,
  isBotAdmins: _0x5acd21,
  isAdmins: _0x496ece,
  reply: _0x326e5d
}) => {
  try {
    if (!_0x363c2c) {
      return _0x326e5d(imgmsg);
    }
    let _0xb73b27 = getRandom('');
    let _0x170bd0 = await sswebA(_0x363c2c, true, "tablet");
    fs.writeFileSync(_0xb73b27 + ".jpg", _0x170bd0);
    const _0x14297e = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x3c1287 + "ssd " + _0xb73b27 + ".jpg",
        'description': "DOCUMENT"
      }, {
        'title': '2',
        'rowId': _0x3c1287 + "ssi " + _0xb73b27 + ".jpg",
        'description': "IMAGE"
      }]
    }];
    const _0x57c055 = {
      url: config.LOGO
    };
    const _0x1f718d = {
      caption: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *📸 SCREENSHOT GETTER*",
      image: _0x57c055,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x14297e
    };
    const _0x350b0a = {
      quoted: _0x4e8ba7
    };
    return await _0x3120fe.replyList(_0x3f2ce5, _0x1f718d, _0x350b0a);
  } catch (_0x22bd61) {
    _0x326e5d("*ERROR !!*");
    _0x5ea7cd(_0x22bd61);
  }
});
const _0xc63f91 = {
  pattern: "ssi",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xc63f91, async (_0x1b022d, _0x141ac7, _0x59717e, {
  from: _0x6b0c93,
  l: _0x251700,
  quoted: _0x2f1061,
  body: _0x44185c,
  isCmd: _0x4d917f,
  command: _0x11794f,
  args: _0x5e0e34,
  q: _0x5aaf53,
  isGroup: _0x44615d,
  sender: _0x480c9c,
  senderNumber: _0x2b70e6,
  botNumber2: _0x543378,
  botNumber: _0x5e9d1b,
  pushname: _0x301661,
  isMe: _0x12f2b6,
  isOwner: _0x22b172,
  groupMetadata: _0x2ff7d3,
  groupName: _0x30aff5,
  participants: _0x378903,
  groupAdmins: _0x2fd4be,
  isBotAdmins: _0x1e4416,
  isAdmins: _0xed327c,
  reply: _0x4767aa
}) => {
  try {
    const _0x2f2c5f = {
      text: '📥',
      key: _0x141ac7.key
    };
    const _0xedd4e8 = {
      react: _0x2f2c5f
    };
    await _0x1b022d.sendMessage(_0x6b0c93, _0xedd4e8);
    const _0x4c02d0 = {
      quoted: _0x141ac7
    };
    await _0x1b022d.sendMessage(_0x6b0c93, {
      'image': fs.readFileSync(_0x5aaf53),
      'caption': config.FOOTER
    }, _0x4c02d0);
    const _0x37c042 = {
      text: '✔',
      key: _0x141ac7.key
    };
    const _0x2576d5 = {
      react: _0x37c042
    };
    await _0x1b022d.sendMessage(_0x6b0c93, _0x2576d5);
  } catch (_0x12aa09) {
    _0x4767aa("*ERROR !!*");
    _0x251700(_0x12aa09);
  }
});
const _0x5d6f25 = {
  pattern: "ssd",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x5d6f25, async (_0x3909b3, _0x1ad200, _0x1155b7, {
  from: _0x55427a,
  l: _0x565300,
  quoted: _0x5f59ef,
  body: _0x2892f4,
  isCmd: _0x5c1784,
  command: _0x30219d,
  args: _0x42dff1,
  q: _0x36290e,
  isGroup: _0xcbbe21,
  sender: _0x3fd5cf,
  senderNumber: _0x2bfcc0,
  botNumber2: _0x5920de,
  botNumber: _0x583cfb,
  pushname: _0x49e037,
  isMe: _0x52e52f,
  isOwner: _0x401525,
  groupMetadata: _0x152728,
  groupName: _0x4cfc80,
  participants: _0x255983,
  groupAdmins: _0x54ba8c,
  isBotAdmins: _0x2c97bf,
  isAdmins: _0x80d6c4,
  reply: _0x51ec3e
}) => {
  try {
    const _0x22a9d1 = {
      text: '📥',
      key: _0x1ad200.key
    };
    const _0x3fa332 = {
      react: _0x22a9d1
    };
    await _0x3909b3.sendMessage(_0x55427a, _0x3fa332);
    const _0xb11938 = {
      quoted: _0x1ad200
    };
    await _0x3909b3.sendMessage(_0x55427a, {
      'document': fs.readFileSync(_0x36290e),
      'mimetype': "image/jpeg",
      'fileName': "screenshot.jpg",
      'caption': config.FOOTER
    }, _0xb11938);
    const _0x47dd28 = {
      text: '✔',
      key: _0x1ad200.key
    };
    const _0x6ef031 = {
      react: _0x47dd28
    };
    await _0x3909b3.sendMessage(_0x55427a, _0x6ef031);
  } catch (_0x5c116f) {
    _0x51ec3e("*ERROR !!*");
    _0x565300(_0x5c116f);
  }
});
const _0x569302 = {
  pattern: "mediafire",
  alias: ["mfire"],
  desc: "download mfire files",
  category: "download",
  react: '📩',
  filename: __filename
};
cmd(_0x569302, async (_0x5bae9a, _0x24feed, _0x131cb7, {
  from: _0x3ca6cb,
  quoted: _0x596975,
  body: _0x48dc2b,
  isCmd: _0x3b4231,
  command: _0x25696e,
  args: _0x3902ec,
  q: _0x3c9338,
  isGroup: _0x22e365,
  sender: _0x578970,
  senderNumber: _0x38e43f,
  botNumber2: _0x5bc62c,
  botNumber: _0xa95035,
  pushname: _0x27d200,
  isMe: _0xc3a6cf,
  isOwner: _0x768385,
  groupMetadata: _0x181492,
  groupName: _0xe4353a,
  participants: _0x400529,
  groupAdmins: _0x412b0f,
  isBotAdmins: _0x13004a,
  isAdmins: _0x56d9d4,
  reply: _0x10784a
}) => {
  try {
    if (!_0x3c9338 && !_0x3c9338.startsWith("https://")) {
      return _0x10784a("give me mediafire url");
    }
    let _0x3b854c;
    (async () => {
      let _0x26ca04 = await fetchJson("https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json");
      _0x3b854c = _0x26ca04.api;
    })();
    let _0x2333f3 = await fetchJson(_0x3b854c + "/api/mediafiredl?url=" + _0x3c9338);
    _0x10784a("*VAJIRA-MD MEDIAFIRE FILE DOWNLOADING...📥*");
    const _0x5354de = {
      url: _0x2333f3.data.link_1
    };
    const _0x313a2a = {
      document: _0x5354de,
      fileName: _0x2333f3.data.name,
      mimetype: _0x2333f3.data.file_type,
      caption: _0x2333f3.data.name + "\n\n" + yourName
    };
    const _0x157cd9 = {
      quoted: _0x24feed
    };
    await _0x5bae9a.sendMessage(_0x3ca6cb, _0x313a2a, _0x157cd9);
  } catch (_0x25e541) {
    console.log(_0x25e541);
    _0x10784a('' + _0x25e541);
  }
});
const _0x22c639 = {
  pattern: 'ig',
  alias: ["igstory"],
  react: '🎀',
  desc: "Download instagram videos/photos.",
  category: "download",
  use: ".ig <Instagram link>",
  filename: __filename
};
cmd(_0x22c639, async (_0xe537ce, _0xa611a0, _0x872d06, {
  from: _0x524e8f,
  l: _0xce488b,
  quoted: _0xfacc99,
  body: _0xca94fb,
  isCmd: _0x286b26,
  command: _0x5acb9c,
  args: _0x2c0692,
  q: _0x50d575,
  isGroup: _0x336a36,
  sender: _0x2956bb,
  senderNumber: _0x494bf6,
  botNumber2: _0x3d8f62,
  botNumber: _0x5cb870,
  pushname: _0x2b27bb,
  isMe: _0x34564b,
  isOwner: _0x5bbbea,
  groupMetadata: _0x46186b,
  groupName: _0x4a9bdb,
  participants: _0x828ee4,
  groupAdmins: _0x4133fc,
  isBotAdmins: _0x507316,
  isAdmins: _0xe6e393,
  reply: _0x465612
}) => {
  try {
    if (!_0x50d575) {
      return await _0x465612(needus);
    }
    let _0x2795f9 = await fetchJson("https://api.maher-zubair.tech/download/instagram2?url=" + _0x50d575);
    for (let _0x441635 = 0; _0x441635 < _0x2795f9.data.data.length; _0x441635++) {
      const _0x165d6c = {
        quoted: _0xa611a0
      };
      const _0x496956 = {
        quoted: _0xa611a0
      };
      if (_0x2795f9.data.data[_0x441635].type === "image") {
        await _0xe537ce.sendMessage(_0x524e8f, {
          'image': {
            'url': _0x2795f9.data.data[_0x441635].url
          },
          'caption': config.FOOTER
        }, _0x165d6c);
      } else {
        await _0xe537ce.sendMessage(_0x524e8f, {
          'video': {
            'url': _0x2795f9.data.data[_0x441635].url
          },
          'caption': config.FOOTER
        }, _0x496956);
      }
    }
  } catch (_0x52b562) {
    _0x465612(cantf);
    _0xce488b(_0x52b562);
  }
});
const _0x42cb49 = {
  pattern: "threads",
  alias: ["thread"],
  react: '🧵',
  desc: "Download threads videos/photos.",
  category: "download",
  use: ".threads <threads link>",
  filename: __filename
};
cmd(_0x42cb49, async (_0x2bad00, _0x44aff7, _0xa146b1, {
  from: _0x51bb9e,
  l: _0x4956ff,
  quoted: _0x2fa081,
  body: _0x2a8fe0,
  isCmd: _0x45d857,
  command: _0x832ad0,
  args: _0x2a47b6,
  q: _0x57e136,
  isGroup: _0x5a99fc,
  sender: _0x45bbb5,
  senderNumber: _0x59376,
  botNumber2: _0xf2990c,
  botNumber: _0x42d63c,
  pushname: _0xb337d1,
  isMe: _0x21e1f7,
  isOwner: _0xc5bcd4,
  groupMetadata: _0x5c28ad,
  groupName: _0x22a4af,
  participants: _0x1a0d38,
  groupAdmins: _0x272a39,
  isBotAdmins: _0x56e9fa,
  isAdmins: _0x28e13a,
  reply: _0x4fbc1d
}) => {
  try {
    if (!_0x57e136) {
      return await _0x4fbc1d(needus);
    }
    let _0x20a13a = await Download(_0x57e136);
    for (let _0x528674 = 0; _0x528674 < _0x20a13a.download.length; _0x528674++) {
      const _0x562395 = {
        quoted: _0x44aff7
      };
      const _0x329c53 = {
        quoted: _0x44aff7
      };
      if (_0x20a13a.download[_0x528674].type === "image") {
        await _0x2bad00.sendMessage(_0x51bb9e, {
          'image': {
            'url': _0x20a13a.download[_0x528674].url
          },
          'caption': config.FOOTER
        }, _0x562395);
      } else {
        await _0x2bad00.sendMessage(_0x51bb9e, {
          'video': {
            'url': _0x20a13a.download[_0x528674].url
          },
          'caption': config.FOOTER
        }, _0x329c53);
      }
    }
  } catch (_0x4e50d9) {
    _0x4fbc1d(cantf);
    _0x4956ff(_0x4e50d9);
  }
});
const _0x397fbf = {
  pattern: "pindl",
  react: '🔖',
  desc: "download pinterest images",
  category: "download",
  use: ".pindl",
  filename: __filename
};
cmd(_0x397fbf, async (_0x5da78e, _0x83e19f, _0xe6d9d4, {
  from: _0x1838da,
  l: _0xa28523,
  quoted: _0x52bd40,
  body: _0x22c3fc,
  isCmd: _0x53f5a3,
  command: _0x12d233,
  args: _0x40e8b2,
  q: _0xa386c8,
  isGroup: _0x5746fb,
  sender: _0x5160dd,
  senderNumber: _0x26e85b,
  botNumber2: _0x180f86,
  botNumber: _0x2a420e,
  pushname: _0x5d322e,
  isMe: _0x52312a,
  isOwner: _0x19c6e6,
  groupMetadata: _0x41a064,
  groupName: _0x4e5890,
  participants: _0x3f1cb6,
  groupAdmins: _0xeb3c02,
  isBotAdmins: _0x1ef861,
  isAdmins: _0x2395e4,
  reply: _0x1c1dbd
}) => {
  try {
    let {
      pinterest: _0x3501ee
    } = require("../lib/scraper");
    anu = await _0x3501ee(_0xa386c8);
    result = anu[Math.floor(Math.random() * anu.length)];
    const _0x19c95b = {
      url: result
    };
    _0x5da78e.sendMessage(_0x83e19f.chat, {
      'image': _0x19c95b,
      'caption': "🔮 Media Url : " + result
    }, {
      'quoted': _0x83e19f
    });
    const _0x157497 = {
      text: '✅',
      key: _0x83e19f.key
    };
    const _0x5aa4ab = {
      react: _0x157497
    };
    await _0x5da78e.sendMessage(_0x1838da, _0x5aa4ab);
  } catch (_0x1feb86) {
    _0x1c1dbd();
    _0xa28523(_0x1feb86);
  }
});
const _0x49dbbf = {
  pattern: "gdrive",
  alias: ["googledrive'"],
  react: '📑',
  desc: "Download googledrive files.",
  category: "download",
  use: ".gdrive <googledrive link>",
  filename: __filename
};
cmd(_0x49dbbf, async (_0x4f346c, _0x19461f, _0x553e29, {
  from: _0xba17c2,
  l: _0x18c3f3,
  quoted: _0x44fda9,
  body: _0x396fc7,
  isCmd: _0x39555e,
  command: _0x315b9b,
  args: _0x152877,
  q: _0x516722,
  isGroup: _0x38ee60,
  sender: _0x2456f6,
  senderNumber: _0x5a8dec,
  botNumber2: _0xf37099,
  botNumber: _0x1284ef,
  pushname: _0x429748,
  isMe: _0x5e4f4f,
  isOwner: _0x32a2bc,
  groupMetadata: _0x27ccee,
  groupName: _0xa3bd98,
  participants: _0x5acf93,
  groupAdmins: _0x4422dd,
  isBotAdmins: _0x17274d,
  isAdmins: _0x56eef6,
  reply: _0x5b8d59
}) => {
  try {
    if (!_0x516722) {
      return await _0x5b8d59("*Please give me googledrive url !!*");
    }
    async function _0x52ccdb(_0x5166a9) {
      const _0x1378f6 = {
        error: true
      };
      let _0x4c8af9;
      let _0x79a141 = _0x1378f6;
      if (!(_0x5166a9 && _0x5166a9.match(/drive\.google/i))) {
        return _0x79a141;
      }
      const _0x5c385b = sizeFormatter({
        'std': "JEDEC",
        'decimalPlaces': 0x2,
        'keepTrailingZeroes': false,
        'render': (_0x71fcf0, _0x41ed74) => _0x71fcf0 + " " + _0x41ed74 + 'B'
      });
      try {
        _0x4c8af9 = (_0x5166a9.match(/\/?id=(.+)/i) || _0x5166a9.match(/\/d\/(.*?)\//))[1];
        if (!_0x4c8af9) {
          throw "ID Not Found";
        }
        _0x79a141 = await fetch("https://drive.google.com/uc?id=" + _0x4c8af9 + "&authuser=0&export=download", {
          'method': "post",
          'headers': {
            'accept-encoding': "gzip, deflate, br",
            'content-length': 0x0,
            'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
            'origin': "https://drive.google.com",
            'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
            'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
            'x-drive-first-party': "DriveWebUi",
            'x-json-requested': "true"
          }
        });
        let {
          fileName: _0x5d35c2,
          sizeBytes: _0x47e219,
          downloadUrl: _0x1cc96e
        } = JSON.parse((await _0x79a141.text()).slice(4));
        if (!_0x1cc96e) {
          throw "Link Download Limit!";
        }
        let _0x2c7fa7 = await fetch(_0x1cc96e);
        if (_0x2c7fa7.status !== 200) {
          return _0x2c7fa7.statusText;
        }
        return {
          'downloadUrl': _0x1cc96e,
          'fileName': _0x5d35c2,
          'fileSize': _0x5c385b(_0x47e219),
          'mimetype': _0x2c7fa7.headers.get("content-type")
        };
      } catch (_0x17ec42) {
        console.log(_0x17ec42);
        return _0x79a141;
      }
    }
    let _0xc8ea1 = await _0x52ccdb(_0x516722);
    let _0x4d12ad = "*[ Downloading file ]*\n\n";
    _0x4d12ad += "*Name :* " + _0xc8ea1.fileName + "\n";
    _0x4d12ad += "*Size :* " + _0xc8ea1.fileSize + "\n";
    _0x4d12ad += "*Type :* " + _0xc8ea1.mimetype;
    await _0x5b8d59(_0x4d12ad);
    const _0x3d67b3 = {
      url: _0xc8ea1.downloadUrl
    };
    const _0x3ea8cd = {
      document: _0x3d67b3,
      fileName: _0xc8ea1.fileName,
      mimetype: _0xc8ea1.mimetype
    };
    const _0x9a084d = {
      quoted: _0x19461f
    };
    _0x4f346c.sendMessage(config.JID, _0x3ea8cd, _0x9a084d);
  } catch (_0x539766) {
    _0x5b8d59("*Error !!*");
    console.log(_0x539766);
  }
});
const _0x282a81 = {
  pattern: "tiktok3",
  alias: ["ttdl", 'tt3'],
  react: "🏷️",
  desc: desc,
  category: "download",
  use: ".tiktok <Tiktok link>",
  filename: __filename
};
cmd(_0x282a81, async (_0x22b42f, _0x55040a, _0x320b76, {
  from: _0x285388,
  l: _0x40b601,
  prefix: _0x455c78,
  quoted: _0x58bd45,
  body: _0x12f432,
  isCmd: _0x5199aa,
  command: _0xc48209,
  args: _0x46c209,
  q: _0x927e57,
  isGroup: _0x378460,
  sender: _0x414e40,
  senderNumber: _0x56556d,
  botNumber2: _0x45db4f,
  botNumber: _0x2515f4,
  pushname: _0x4639ea,
  isMe: _0x16ea8f,
  isOwner: _0x424256,
  groupMetadata: _0x49e817,
  groupName: _0x21a6aa,
  participants: _0x4378c4,
  groupAdmins: _0x2c85ba,
  isBotAdmins: _0x2df8aa,
  isAdmins: _0xe81c87,
  reply: _0x523a20
}) => {
  try {
    if (!_0x927e57.includes("tiktok.com")) {
      return await _0x523a20(urlneed);
    }
    let _0x17f5a2 = await downloadTiktok(_0x927e57);
    let _0x30bfe2 = "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n*TIKTOK DOWNLOADER*\n\n*📃 Title:* " + _0x17f5a2.result.title + "\n*✍🏼 Link:* " + _0x927e57;
    const _0x44c802 = {
      title: "Watermark-01",
      rows: [{
        'title': "    1.1",
        'rowId': _0x455c78 + "tn1 " + _0x927e57,
        'description': "No-Watermark-01"
      }, {
        'title': "    1.2",
        'rowId': _0x455c78 + "tn1d " + _0x927e57,
        'description': "No-Watermark-01 Doc"
      }]
    };
    const _0x52734b = {
      title: "Watermark-02",
      rows: [{
        'title': "    2.1",
        'rowId': _0x455c78 + "tn2 " + _0x927e57,
        'description': "No-Watermark-02"
      }, {
        'title': "    2.2",
        'rowId': _0x455c78 + "tn2d " + _0x927e57,
        'description': "No-Watermark-02 Doc"
      }]
    };
    const _0x585cd8 = {
      title: "Watermark-HD",
      rows: [{
        'title': "    3.1",
        'rowId': _0x455c78 + "thd " + _0x927e57,
        'description': "No-Watermark-HD"
      }, {
        'title': "    3.2",
        'rowId': _0x455c78 + "tndd " + _0x927e57,
        'description': "No-Watermark-HD Doc"
      }]
    };
    const _0x81dd36 = {
      title: "VOICE CUT TYPE 🎶",
      rows: [{
        'title': "    4.1",
        'rowId': _0x455c78 + "ta " + _0x927e57,
        'description': "AUDIO DOWNLOAD"
      }, {
        'title': "    4.2",
        'rowId': _0x455c78 + "td " + _0x927e57,
        'description': "DOCUMENT DOWNLOAD"
      }]
    };
    const _0xcfa93f = [_0x44c802, _0x52734b, _0x585cd8, _0x81dd36];
    const _0x2323c2 = {
      url: _0x17f5a2.result.image
    };
    const _0x4dd35a = {
      image: _0x2323c2,
      caption: _0x30bfe2,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0xcfa93f
    };
    const _0x41ec9b = {
      quoted: _0x55040a
    };
    return await _0x22b42f.replyList(_0x285388, _0x4dd35a, _0x41ec9b);
  } catch (_0x16969f) {
    _0x523a20("*ERROR !!*");
    _0x40b601(_0x16969f);
  }
});
const _0x4a30e4 = {
  pattern: "thd",
  react: '⬇',
  filename: __filename
};
cmd(_0x4a30e4, async (_0x21613f, _0x6e2580, _0x4f962a, {
  from: _0x44fb4d,
  quoted: _0x4bc5a6,
  body: _0x217499,
  isCmd: _0x20b31b,
  command: _0x4c9b54,
  args: _0x15827a,
  q: _0x513bef,
  isGroup: _0x9fa1b5,
  sender: _0x2c8fd4,
  senderNumber: _0x48014d,
  botNumber2: _0x1af22b,
  botNumber: _0x24ee39,
  pushname: _0x485ccc,
  isMe: _0x1d4240,
  isOwner: _0x305547,
  groupMetadata: _0x3d53dc,
  groupName: _0x133d7f,
  participants: _0x4cd55c,
  groupAdmins: _0x3e51f4,
  isBotAdmins: _0x33fb55,
  isAdmins: _0x4cefe1,
  reply: _0xdf7af
}) => {
  try {
    let _0x4ceb50 = await downloadTiktok(_0x513bef);
    const _0x223231 = {
      text: '⬆',
      key: _0x6e2580.key
    };
    const _0x5b2139 = {
      react: _0x223231
    };
    await _0x21613f.sendMessage(_0x44fb4d, _0x5b2139);
    const _0x11fd5a = {
      url: _0x4ceb50.result.dl_link.download_mp4_hd
    };
    const _0x27a2fa = {
      video: _0x11fd5a,
      mimetype: "video/mp4",
      caption: "> *POWERED by VAJIRA-MD*"
    };
    const _0xb57086 = {
      quoted: _0x6e2580
    };
    await _0x21613f.sendMessage(_0x44fb4d, _0x27a2fa, _0xb57086);
    const _0x569deb = {
      text: '✔',
      key: _0x6e2580.key
    };
    const _0x3b5fb1 = {
      react: _0x569deb
    };
    await _0x21613f.sendMessage(_0x44fb4d, _0x3b5fb1);
  } catch (_0x6b9bb4) {
    const _0x31ad46 = {
      text: '❌',
      key: _0x6e2580.key
    };
    const _0x2c032e = {
      react: _0x31ad46
    };
    await _0x21613f.sendMessage(_0x44fb4d, _0x2c032e);
    console.log(_0x6b9bb4);
    _0xdf7af("Error !!\n\n*" + _0x6b9bb4 + '*');
  }
});
const _0x511a14 = {
  pattern: "thdd",
  react: '⬇',
  filename: __filename
};
cmd(_0x511a14, async (_0x2ccebf, _0x5bc8d2, _0x360495, {
  from: _0x407f76,
  quoted: _0x903492,
  body: _0x467256,
  isCmd: _0x47f70c,
  command: _0x5ae398,
  args: _0x30202c,
  q: _0x22431a,
  isGroup: _0x43aca0,
  sender: _0x49c783,
  senderNumber: _0x4e2394,
  botNumber2: _0x58fdb5,
  botNumber: _0xac65b7,
  pushname: _0x5c70a6,
  isMe: _0x547760,
  isOwner: _0x494c45,
  groupMetadata: _0x1ea69b,
  groupName: _0x39848d,
  participants: _0x552252,
  groupAdmins: _0x33630b,
  isBotAdmins: _0x41c712,
  isAdmins: _0x552c29,
  reply: _0x4250df
}) => {
  try {
    let _0x354cf6 = await downloadTiktok(_0x22431a);
    const _0x58e7ae = {
      text: '⬆',
      key: _0x5bc8d2.key
    };
    const _0x1501df = {
      react: _0x58e7ae
    };
    await _0x2ccebf.sendMessage(_0x407f76, _0x1501df);
    const _0x4ed57b = {
      url: _0x354cf6.result.dl_link.download_mp4_hd
    };
    const _0x2d02d5 = {
      document: _0x4ed57b,
      mimetype: "video/mp4",
      fileName: _0x354cf6.result.title + ".mp4",
      caption: "💻 *VAJIRA MD TTDL*"
    };
    const _0x32c59d = {
      quoted: _0x5bc8d2
    };
    await _0x2ccebf.sendMessage(_0x407f76, _0x2d02d5, _0x32c59d);
    const _0x5cc37b = {
      text: '✔',
      key: _0x5bc8d2.key
    };
    const _0x5f4f00 = {
      react: _0x5cc37b
    };
    await _0x2ccebf.sendMessage(_0x407f76, _0x5f4f00);
  } catch (_0x3b0686) {
    const _0x14724d = {
      text: '❌',
      key: _0x5bc8d2.key
    };
    const _0x2c50c1 = {
      react: _0x14724d
    };
    await _0x2ccebf.sendMessage(_0x407f76, _0x2c50c1);
    console.log(_0x3b0686);
    _0x4250df("Error !!\n\n*" + _0x3b0686 + '*');
  }
});
const _0x16d6c8 = {
  pattern: "tn2",
  react: '⬇',
  filename: __filename
};
cmd(_0x16d6c8, async (_0x477e80, _0xbd4e54, _0x2d9d91, {
  from: _0x1e97d2,
  quoted: _0x1f6324,
  body: _0xea2efe,
  isCmd: _0x52ac43,
  command: _0x357e83,
  args: _0xe1bb37,
  q: _0x3bf1ca,
  isGroup: _0x562e06,
  sender: _0x319bfd,
  senderNumber: _0x22e26f,
  botNumber2: _0x4ed93e,
  botNumber: _0x9f77db,
  pushname: _0xee3061,
  isMe: _0x529570,
  isOwner: _0x271190,
  groupMetadata: _0x2c45f0,
  groupName: _0xa4e09a,
  participants: _0xb5f415,
  groupAdmins: _0x17e119,
  isBotAdmins: _0x4785d1,
  isAdmins: _0x2e1181,
  reply: _0x2931e2
}) => {
  try {
    let _0x279ffa = await downloadTiktok(_0x3bf1ca);
    const _0x2b79a9 = {
      text: '⬆',
      key: _0xbd4e54.key
    };
    const _0xfdcd4f = {
      react: _0x2b79a9
    };
    await _0x477e80.sendMessage(_0x1e97d2, _0xfdcd4f);
    const _0x4bcafb = {
      url: _0x279ffa.result.dl_link.download_mp4_1
    };
    const _0x27a5b5 = {
      video: _0x4bcafb,
      mimetype: "video/mp4",
      caption: "> *POWERED by VAJIRA-MD*"
    };
    const _0x40ff21 = {
      quoted: _0xbd4e54
    };
    await _0x477e80.sendMessage(_0x1e97d2, _0x27a5b5, _0x40ff21);
    const _0x35aef3 = {
      text: '✔',
      key: _0xbd4e54.key
    };
    const _0xa4f5a4 = {
      react: _0x35aef3
    };
    await _0x477e80.sendMessage(_0x1e97d2, _0xa4f5a4);
  } catch (_0x47709c) {
    const _0x3d26ed = {
      text: '❌',
      key: _0xbd4e54.key
    };
    const _0x1aa5d1 = {
      react: _0x3d26ed
    };
    await _0x477e80.sendMessage(_0x1e97d2, _0x1aa5d1);
    console.log(_0x47709c);
    _0x2931e2("Error !!\n\n*" + _0x47709c + '*');
  }
});
const _0x3a3380 = {
  pattern: "tn2d",
  react: '⬇',
  filename: __filename
};
cmd(_0x3a3380, async (_0x106386, _0x8c489e, _0x565611, {
  from: _0x4c0e04,
  quoted: _0x58f0aa,
  body: _0x232f3c,
  isCmd: _0x65164b,
  command: _0x19ae7f,
  args: _0x5c428c,
  q: _0x44267b,
  isGroup: _0x24a04e,
  sender: _0x381f3c,
  senderNumber: _0x4fd8a1,
  botNumber2: _0xbc7fa1,
  botNumber: _0x5eed3e,
  pushname: _0x1c356e,
  isMe: _0x21c289,
  isOwner: _0x1e6119,
  groupMetadata: _0x4a3b7c,
  groupName: _0x919ba6,
  participants: _0x3ae426,
  groupAdmins: _0x4a107b,
  isBotAdmins: _0x4b2f5b,
  isAdmins: _0xdee7d0,
  reply: _0x58c702
}) => {
  try {
    let _0x47c98b = await downloadTiktok(_0x44267b);
    const _0x431dbc = {
      text: '⬆',
      key: _0x8c489e.key
    };
    const _0x4d962e = {
      react: _0x431dbc
    };
    await _0x106386.sendMessage(_0x4c0e04, _0x4d962e);
    const _0x189e6c = {
      url: _0x47c98b.result.dl_link.download_mp4_1
    };
    const _0x7ea79f = {
      document: _0x189e6c,
      mimetype: "video/mp4",
      fileName: _0x47c98b.result.title + ".mp4",
      caption: "💻 *VAJIRA MD TTDL*"
    };
    const _0x5a99d0 = {
      quoted: _0x8c489e
    };
    await _0x106386.sendMessage(_0x4c0e04, _0x7ea79f, _0x5a99d0);
    const _0x3a031a = {
      text: '✔',
      key: _0x8c489e.key
    };
    const _0x5be5f0 = {
      react: _0x3a031a
    };
    await _0x106386.sendMessage(_0x4c0e04, _0x5be5f0);
  } catch (_0x4281db) {
    const _0x3cef19 = {
      text: '❌',
      key: _0x8c489e.key
    };
    const _0x35c3c5 = {
      react: _0x3cef19
    };
    await _0x106386.sendMessage(_0x4c0e04, _0x35c3c5);
    console.log(_0x4281db);
    _0x58c702("Error !!\n\n*" + _0x4281db + '*');
  }
});
const _0x5bbdff = {
  pattern: "tn1",
  react: '⬇',
  filename: __filename
};
cmd(_0x5bbdff, async (_0x5b68c0, _0x3120de, _0x12e0d9, {
  from: _0x6247ea,
  quoted: _0x5b3d0c,
  body: _0x312d4f,
  isCmd: _0x53f098,
  command: _0x5a223c,
  args: _0x2146d0,
  q: _0x324758,
  isGroup: _0x18dc01,
  sender: _0x427b24,
  senderNumber: _0x1fbe13,
  botNumber2: _0x28cefe,
  botNumber: _0x23a57f,
  pushname: _0x87619e,
  isMe: _0x5196e6,
  isOwner: _0x5dd5aa,
  groupMetadata: _0x3dc7cc,
  groupName: _0x3410ab,
  participants: _0x57c5f4,
  groupAdmins: _0x564b80,
  isBotAdmins: _0x681870,
  isAdmins: _0x112ed8,
  reply: _0x34366c
}) => {
  try {
    let _0x572e7c = await downloadTiktok(_0x324758);
    const _0x402fa7 = {
      text: '⬆',
      key: _0x3120de.key
    };
    const _0x51ea7d = {
      react: _0x402fa7
    };
    await _0x5b68c0.sendMessage(_0x6247ea, _0x51ea7d);
    const _0x29770a = {
      url: _0x572e7c.result.dl_link.download_mp4_2
    };
    const _0x59ee84 = {
      video: _0x29770a,
      mimetype: "video/mp4",
      caption: "> *POWERED by VAJIRA-MD*"
    };
    const _0x287ece = {
      quoted: _0x3120de
    };
    await _0x5b68c0.sendMessage(_0x6247ea, _0x59ee84, _0x287ece);
    const _0x1b3c05 = {
      text: '✔',
      key: _0x3120de.key
    };
    const _0x5592ba = {
      react: _0x1b3c05
    };
    await _0x5b68c0.sendMessage(_0x6247ea, _0x5592ba);
  } catch (_0x1b59da) {
    const _0x5e7acb = {
      text: '❌',
      key: _0x3120de.key
    };
    const _0x125efc = {
      react: _0x5e7acb
    };
    await _0x5b68c0.sendMessage(_0x6247ea, _0x125efc);
    console.log(_0x1b59da);
    _0x34366c("Error !!\n\n*" + _0x1b59da + '*');
  }
});
const _0x13dd7e = {
  pattern: "tn1d",
  react: '⬇',
  filename: __filename
};
cmd(_0x13dd7e, async (_0x517ec9, _0x9003da, _0x19b367, {
  from: _0xd072b5,
  quoted: _0x420f28,
  body: _0x2739e2,
  isCmd: _0x275499,
  command: _0x2f47dc,
  args: _0x3a1d24,
  q: _0xdbb3a6,
  isGroup: _0x37b657,
  sender: _0x2f3ec8,
  senderNumber: _0x1ffa1e,
  botNumber2: _0x2beaf2,
  botNumber: _0x5c5690,
  pushname: _0x5432f3,
  isMe: _0x20c2b0,
  isOwner: _0x2e48a3,
  groupMetadata: _0x4b1f71,
  groupName: _0x17a3ad,
  participants: _0x47ff0e,
  groupAdmins: _0x4b6016,
  isBotAdmins: _0x533ed0,
  isAdmins: _0x5a210b,
  reply: _0x41fc51
}) => {
  try {
    let _0x281941 = await downloadTiktok(_0xdbb3a6);
    const _0x46a0a9 = {
      text: '⬆',
      key: _0x9003da.key
    };
    const _0xd7009 = {
      react: _0x46a0a9
    };
    await _0x517ec9.sendMessage(_0xd072b5, _0xd7009);
    const _0x26c49f = {
      url: _0x281941.result.dl_link.download_mp4_2
    };
    const _0x383d61 = {
      document: _0x26c49f,
      mimetype: "video/mp4",
      fileName: _0x281941.result.title + ".mp4",
      caption: "💻 *VAJIRA MD TTDL*"
    };
    const _0x4109e3 = {
      quoted: _0x9003da
    };
    await _0x517ec9.sendMessage(_0xd072b5, _0x383d61, _0x4109e3);
    const _0x52e06e = {
      text: '✔',
      key: _0x9003da.key
    };
    const _0x128307 = {
      react: _0x52e06e
    };
    await _0x517ec9.sendMessage(_0xd072b5, _0x128307);
  } catch (_0x33118d) {
    const _0x2547af = {
      text: '❌',
      key: _0x9003da.key
    };
    const _0x4a69d3 = {
      react: _0x2547af
    };
    await _0x517ec9.sendMessage(_0xd072b5, _0x4a69d3);
    console.log(_0x33118d);
    _0x41fc51("Error !!\n\n*" + _0x33118d + '*');
  }
});
const _0x1d23c6 = {
  pattern: 'ta',
  react: '⬇',
  filename: __filename
};
cmd(_0x1d23c6, async (_0x244786, _0x508521, _0x3bb097, {
  from: _0x37e89e,
  quoted: _0x3ae34e,
  body: _0x18552e,
  isCmd: _0x12c2d2,
  command: _0x5b5d29,
  args: _0x3a7f61,
  q: _0x4236b2,
  isGroup: _0x17d824,
  sender: _0x2070a3,
  senderNumber: _0x4c3df7,
  botNumber2: _0xabfd25,
  botNumber: _0x82322b,
  pushname: _0x3f73e5,
  isMe: _0x1caf85,
  isOwner: _0x2542fa,
  groupMetadata: _0x1af58b,
  groupName: _0x239f8d,
  participants: _0x12a9d6,
  groupAdmins: _0x43c110,
  isBotAdmins: _0xdcfbf9,
  isAdmins: _0x49cb99,
  reply: _0x589853
}) => {
  try {
    let _0x3e8b11 = await downloadTiktok(_0x4236b2);
    const _0x282b74 = {
      text: '⬆',
      key: _0x508521.key
    };
    const _0x2aa5bd = {
      react: _0x282b74
    };
    await _0x244786.sendMessage(_0x37e89e, _0x2aa5bd);
    const _0x1d2328 = {
      url: _0x3e8b11.result.dl_link.download_mp3
    };
    const _0x392fe8 = {
      audio: _0x1d2328,
      mimetype: "audio/mpeg"
    };
    const _0x58d3ad = {
      quoted: _0x508521
    };
    await _0x244786.sendMessage(_0x37e89e, _0x392fe8, _0x58d3ad);
    const _0x11e544 = {
      text: '✔',
      key: _0x508521.key
    };
    const _0x9b1fc3 = {
      react: _0x11e544
    };
    await _0x244786.sendMessage(_0x37e89e, _0x9b1fc3);
  } catch (_0x11cb45) {
    const _0x39c982 = {
      text: '❌',
      key: _0x508521.key
    };
    const _0x5c016c = {
      react: _0x39c982
    };
    await _0x244786.sendMessage(_0x37e89e, _0x5c016c);
    console.log(_0x11cb45);
    _0x589853("Error !!\n\n*" + _0x11cb45 + '*');
  }
});
const _0x343af5 = {
  pattern: 'td',
  react: '⬇',
  filename: __filename
};
cmd(_0x343af5, async (_0xad96de, _0x3e0fda, _0x4c1d4a, {
  from: _0x4d23b5,
  quoted: _0x3cd85a,
  body: _0x3f0faa,
  isCmd: _0x5b6472,
  command: _0x47f88a,
  args: _0x470142,
  q: _0x3e673a,
  isGroup: _0x5b0ef8,
  sender: _0x26a285,
  senderNumber: _0x4bc040,
  botNumber2: _0x2e5663,
  botNumber: _0x46aa4e,
  pushname: _0x2ccc86,
  isMe: _0x1ffc03,
  isOwner: _0x75c209,
  groupMetadata: _0x526d19,
  groupName: _0x3e3437,
  participants: _0x1998f0,
  groupAdmins: _0x3e8f65,
  isBotAdmins: _0x51a9ba,
  isAdmins: _0x3f7e5a,
  reply: _0x384074
}) => {
  try {
    let _0x485d61 = await downloadTiktok(_0x3e673a);
    const _0x3d8808 = {
      text: '⬆',
      key: _0x3e0fda.key
    };
    const _0x636ea5 = {
      react: _0x3d8808
    };
    await _0xad96de.sendMessage(_0x4d23b5, _0x636ea5);
    const _0x35f716 = {
      url: _0x485d61.result.dl_link.download_mp3
    };
    const _0x290b25 = {
      document: _0x35f716,
      mimetype: "audio/mpeg",
      fileName: _0x485d61.result.title + ".mp3",
      caption: "💻 *VAJIRA MD TTDL*"
    };
    const _0x41104e = {
      quoted: _0x3e0fda
    };
    await _0xad96de.sendMessage(_0x4d23b5, _0x290b25, _0x41104e);
    const _0xa92a4 = {
      text: '✔',
      key: _0x3e0fda.key
    };
    const _0x67c0bc = {
      react: _0xa92a4
    };
    await _0xad96de.sendMessage(_0x4d23b5, _0x67c0bc);
  } catch (_0x2595e4) {
    const _0x41c103 = {
      text: '❌',
      key: _0x3e0fda.key
    };
    const _0x354caa = {
      react: _0x41c103
    };
    await _0xad96de.sendMessage(_0x4d23b5, _0x354caa);
    console.log(_0x2595e4);
    _0x384074("Error !!\n\n*" + _0x2595e4 + '*');
  }
});
const _0x204446 = {
  pattern: "tiktok2",
  alias: ["ttdl2", "tt2"],
  react: "🏷️",
  desc: desc,
  category: "download",
  use: ".tiktok <Tiktok link>",
  filename: __filename
};
cmd(_0x204446, async (_0x465241, _0x4251da, _0x275e1b, {
  from: _0x34c0ab,
  l: _0x4f2c02,
  prefix: _0x38b8c6,
  quoted: _0x103eaa,
  body: _0x3d452c,
  isCmd: _0x1ca577,
  command: _0x16c9ea,
  args: _0x3148f1,
  q: _0x3f4e84,
  isGroup: _0x10afae,
  sender: _0x298f91,
  senderNumber: _0x3a58ad,
  botNumber2: _0x2d5248,
  botNumber: _0xb28cb8,
  pushname: _0x5c9b4f,
  isMe: _0x47ab42,
  isOwner: _0x516b65,
  groupMetadata: _0x23ac72,
  groupName: _0x1d3828,
  participants: _0x3b6bc2,
  groupAdmins: _0x4a355c,
  isBotAdmins: _0x31576f,
  isAdmins: _0x348a37,
  reply: _0x3bae30
}) => {
  try {
    if (!_0x3f4e84.includes("tiktok.com")) {
      return await _0x3bae30(urlneed);
    }
    let _0x35df40 = await downloadTiktok(_0x3f4e84);
    let _0x163067 = "\n    🎟️ *VAJIRA-MD TIKTOK DOWNLOADER* 🎟️\n\n📌 *Please click what you want to select*\n\n*Title* :- " + _0x35df40.result.title + "\n\n*URL:* " + _0x3f4e84;
    const _0xaddb50 = {
      url: '' + _0x35df40.result.image
    };
    const _0x37df0e = {
      image: _0xaddb50,
      caption: _0x163067
    };
    const _0x3b5b2c = {
      quoted: _0x4251da
    };
    await _0x465241.sendMessage(_0x34c0ab, _0x37df0e, _0x3b5b2c);
    const _0x3cf4ce = {
      text: '📥',
      key: _0x4251da.key
    };
    const _0x1cb00f = {
      react: _0x3cf4ce
    };
    await _0x465241.sendMessage(_0x34c0ab, _0x1cb00f);
    const _0x2eae74 = {
      url: _0x3f4e84
    };
    const _0x100954 = {
      quoted: _0x4251da
    };
    await _0x465241.sendMessage(_0x34c0ab, {
      'document': _0x2eae74,
      'mimetype': "audio/mpeg",
      'fileName': "TikTok Audio.mp3",
      'caption': config.FOOTER
    }, _0x100954);
    const _0x5e8c4f = {
      url: _0x35df40.result.dl_link.download_mp4_1
    };
    const _0xc3bdca = {
      video: _0x5e8c4f,
      mimetype: "video/mp4",
      caption: "SD QUALITY\n\n> *POWERED by VAJIRA-MD"
    };
    const _0x5cba75 = {
      quoted: _0x4251da
    };
    await _0x465241.sendMessage(_0x34c0ab, _0xc3bdca, _0x5cba75);
    const _0x19f67f = {
      url: _0x35df40.result.dl_link.download_mp4_2
    };
    const _0x4b6072 = {
      video: _0x19f67f,
      mimetype: "video/mp4",
      caption: "HD QUALITY\n\n> *POWERED by VAJIRA-MD"
    };
    const _0xd7352c = {
      quoted: _0x4251da
    };
    await _0x465241.sendMessage(_0x34c0ab, _0x4b6072, _0xd7352c);
    const _0xae68a6 = {
      text: '✔',
      key: _0x4251da.key
    };
    const _0x17805f = {
      react: _0xae68a6
    };
    await _0x465241.sendMessage(_0x34c0ab, _0x17805f);
  } catch (_0x1a2cb5) {
    _0x3bae30("*ERROR !!*");
    _0x4f2c02(_0x1a2cb5);
  }
});
const _0xd356dc = {
  pattern: "img1",
  react: "🖼️",
  desc: desc2,
  category: '',
  use: ".img2 car",
  filename: __filename
};
cmd(_0xd356dc, async (_0x3d5d78, _0xa624de, _0x37e564, {
  from: _0x5c69e9,
  l: _0x4e4784,
  prefix: _0x1bd63e,
  quoted: _0x3ed149,
  body: _0x45cd6a,
  isCmd: _0x5b0ce5,
  command: _0x2713c0,
  args: _0x354bd6,
  q: _0x5b2338,
  isGroup: _0x45ab05,
  sender: _0x1795da,
  senderNumber: _0x268d64,
  botNumber2: _0x3baa03,
  botNumber: _0x15a8f9,
  pushname: _0x456006,
  isMe: _0x329ac0,
  isOwner: _0x52952a,
  groupMetadata: _0x37c29a,
  groupName: _0x42f8b4,
  participants: _0x27d976,
  groupAdmins: _0x2a486b,
  isBotAdmins: _0x472973,
  isAdmins: _0x4d3493,
  reply: _0x43df5e
}) => {
  try {
    if (!_0x5b2338) {
      return await _0x43df5e(imgmsg);
    }
    const _0x1cc564 = {
      query: _0x5b2338,
      page: 0x1
    };
    const _0xc279dc = await unsplash.search(_0x1cc564);
    const _0x31e0f1 = {
      text: N_FOUND
    };
    const _0x3faa0b = {
      quoted: _0xa624de
    };
    if (_0xc279dc.result.length < 1) {
      return await _0x3d5d78.sendMessage(_0x5c69e9, _0x31e0f1, _0x3faa0b);
    }
    var _0x587e52 = [];
    let _0xc9dc11 = 1;
    for (var _0x5e4378 = 0; _0x5e4378 < _0xc279dc.length; _0x5e4378++) {
      _0x587e52.push({
        'title': _0x5e4378 + 1,
        'description': "Image number: " + _0xc9dc11++,
        'rowId': _0x1bd63e + "dimg " + _0xc279dc.result[_0x5e4378]
      });
    }
    const _0x2a8ba3 = {
      title: "Result from unsplash.com. 📲",
      rows: _0x587e52
    };
    const _0x3b9798 = [_0x2a8ba3];
    const _0xceda89 = {
      text: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *IMG DOWNLOADER 02*\n\n*🖼️ Image Name:* " + _0x5b2338,
      footer: config.FOOTER,
      title: "Result from unsplash.com. 📲",
      buttonText: "Select Image",
      sections: _0x3b9798
    };
    const _0x47474c = {
      quoted: _0xa624de
    };
    await _0x3d5d78.replyList(_0x5c69e9, _0xceda89, _0x47474c);
  } catch (_0x51a915) {
    _0x43df5e(errt);
    _0x4e4784(_0x51a915);
  }
});
const _0x108f84 = {
  pattern: "img2",
  react: "🖼️",
  desc: desc3,
  category: '',
  use: ".img3 car",
  filename: __filename
};
cmd(_0x108f84, async (_0x4c2fb1, _0x14debd, _0xd5475c, {
  from: _0x455f15,
  l: _0x277e92,
  prefix: _0x1123d8,
  quoted: _0x845c22,
  body: _0x2d2f5b,
  isCmd: _0x5b854f,
  command: _0x31b380,
  args: _0x7edb63,
  q: _0x492bc7,
  isGroup: _0x32167d,
  sender: _0x4ab189,
  senderNumber: _0x3a2aa4,
  botNumber2: _0xfed040,
  botNumber: _0x4082c3,
  pushname: _0x44e78e,
  isMe: _0xef08b0,
  isOwner: _0x5243a7,
  groupMetadata: _0x362235,
  groupName: _0x3c3343,
  participants: _0x1cf233,
  groupAdmins: _0x30affd,
  isBotAdmins: _0x1f54cc,
  isAdmins: _0x5baa62,
  reply: _0x24af67
}) => {
  try {
    if (!_0x492bc7) {
      return await _0x24af67(imgmsg);
    }
    const _0x59450b = {
      query: _0x492bc7,
      page: 0x1
    };
    const _0x11d4c5 = await pixabay.search(_0x59450b);
    const _0xa40633 = {
      text: N_FOUND
    };
    const _0xf07f8e = {
      quoted: _0x14debd
    };
    if (_0x11d4c5.result.length < 1) {
      return await _0x4c2fb1.sendMessage(_0x455f15, _0xa40633, _0xf07f8e);
    }
    var _0x16e13f = [];
    let _0x17b036 = 1;
    for (var _0x1988c9 = 0; _0x1988c9 < _0x11d4c5.length; _0x1988c9++) {
      _0x16e13f.push({
        'title': _0x1988c9 + 1,
        'description': "Image number: " + _0x17b036++,
        'rowId': _0x1123d8 + "dimg " + _0x11d4c5.result[_0x1988c9]
      });
    }
    const _0xe121b2 = {
      title: "Result from pixabay.com. 📲",
      rows: _0x16e13f
    };
    const _0x1266a4 = [_0xe121b2];
    const _0x3f6ba9 = {
      text: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *IMG DOWNLOADER 03*\n\n*🖼️ Image Name:* " + _0x492bc7,
      footer: config.FOOTER,
      title: "Result from pixabay.com. 📲",
      buttonText: "Select Image",
      sections: _0x1266a4
    };
    const _0x39a58b = {
      quoted: _0x14debd
    };
    await _0x4c2fb1.replyList(_0x455f15, _0x3f6ba9, _0x39a58b);
  } catch (_0x55ae0c) {
    _0x24af67(errt);
    _0x277e92(_0x55ae0c);
  }
});
const _0x167afb = {
  pattern: "img3",
  react: "🖼️",
  desc: desc4,
  category: '',
  use: ".img4 car",
  filename: __filename
};
cmd(_0x167afb, async (_0x4517a9, _0x4b8cc6, _0xfb8d39, {
  from: _0x4c32e6,
  l: _0x33e5b6,
  prefix: _0x29bb03,
  quoted: _0x4ccc89,
  body: _0x2cbc5b,
  isCmd: _0x415fd2,
  command: _0x1991a6,
  args: _0x2cea2f,
  q: _0x1b6c6b,
  isGroup: _0x4ef725,
  sender: _0xa4e22b,
  senderNumber: _0x47cd65,
  botNumber2: _0x28c046,
  botNumber: _0x478c4d,
  pushname: _0x55674b,
  isMe: _0x4ef8cc,
  isOwner: _0x388deb,
  groupMetadata: _0x3fc2fd,
  groupName: _0x52c799,
  participants: _0x52aaa0,
  groupAdmins: _0x4ed6e0,
  isBotAdmins: _0x7e620b,
  isAdmins: _0x155862,
  reply: _0x5c7d71
}) => {
  try {
    if (!_0x1b6c6b) {
      return await _0x5c7d71(imgmsg);
    }
    const _0x26ebee = await fetchJson("https://api.akuari.my.id/search/bingimage?query=" + _0x1b6c6b);
    let _0x3ec624 = _0x26ebee.hasil;
    const _0xf7c1ca = {
      text: N_FOUND
    };
    const _0x548c6e = {
      quoted: _0x4b8cc6
    };
    if (_0x3ec624.results.length < 1) {
      return await _0x4517a9.sendMessage(_0x4c32e6, _0xf7c1ca, _0x548c6e);
    }
    var _0x2f449f = [];
    for (var _0x578faf = 0; _0x578faf < _0x3ec624.length; _0x578faf++) {
      _0x2f449f.push({
        'title': _0x578faf + 1,
        'description': _0x3ec624.results[_0x578faf].title,
        'rowId': _0x29bb03 + "dimg " + _0x3ec624.results[_0x578faf].direct
      });
    }
    const _0x3baf77 = {
      title: "Result from bing 📲",
      rows: _0x2f449f
    };
    const _0x4eb6c3 = [_0x3baf77];
    const _0x442c95 = {
      text: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *IMG DOWNLOADER 04*\n\n*🖼️ Image Name:* " + _0x1b6c6b,
      footer: config.FOOTER,
      title: "Result from bing 📲",
      buttonText: "Select Image",
      sections: _0x4eb6c3
    };
    const _0x598475 = {
      quoted: _0x4b8cc6
    };
    await _0x4517a9.replyList(_0x4c32e6, _0x442c95, _0x598475);
  } catch (_0x53aad8) {
    _0x5c7d71(errt);
    _0x33e5b6(_0x53aad8);
  }
});
const _0x3ba7e5 = {
  pattern: "img4",
  react: "🖼️",
  desc: desc5,
  category: "download",
  use: ".img car",
  filename: __filename
};
cmd(_0x3ba7e5, async (_0x1e2586, _0x3db415, _0x36b57d, {
  from: _0x1f5b92,
  l: _0x5143da,
  prefix: _0x2f0112,
  quoted: _0x2978ac,
  body: _0xd314f2,
  isCmd: _0x3687b8,
  command: _0xc015b3,
  args: _0x4601e6,
  q: _0xfec78,
  isGroup: _0x25c679,
  sender: _0x3334ff,
  senderNumber: _0x542f79,
  botNumber2: _0x3aa20c,
  botNumber: _0x5ee7a5,
  pushname: _0x17212e,
  isMe: _0x34678c,
  isOwner: _0x3e69ff,
  groupMetadata: _0x3006e2,
  groupName: _0x15edf9,
  participants: _0x1b1cca,
  groupAdmins: _0x217758,
  isBotAdmins: _0x45f5d3,
  isAdmins: _0x331fdb,
  reply: _0xb3e399
}) => {
  try {
    if (!_0xfec78) {
      return await _0xb3e399(imgmsg);
    }
    const _0xde2005 = await gis(_0xfec78);
    let _0x24ea1e = _0xde2005.slice(0, 100);
    const _0xcc2f20 = {
      text: N_FOUND
    };
    const _0x3baca9 = {
      quoted: _0x3db415
    };
    if (_0x24ea1e.length < 1) {
      return await _0x1e2586.sendMessage(_0x1f5b92, _0xcc2f20, _0x3baca9);
    }
    var _0x5604fa = [];
    let _0x3ae1a2 = 1;
    for (var _0x323a80 = 0; _0x323a80 < _0x24ea1e.length; _0x323a80++) {
      _0x5604fa.push({
        'title': _0x323a80 + 1,
        'description': "Image number: " + _0x3ae1a2++,
        'rowId': _0x2f0112 + "dimg " + _0x24ea1e[_0x323a80].url
      });
    }
    const _0x1476fd = {
      title: "Result from google. 📲",
      rows: _0x5604fa
    };
    const _0x62fe03 = [_0x1476fd];
    const _0x1aa3f9 = {
      text: "[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]\n\n   *IMG DOWNLOADER 01*\n\n*🖼️ Image Name:* " + _0xfec78,
      footer: config.FOOTER,
      title: "Result from google. 📲",
      buttonText: "Select Image",
      sections: _0x62fe03
    };
    const _0x5562b0 = {
      quoted: _0x3db415
    };
    await _0x1e2586.replyList(_0x1f5b92, _0x1aa3f9, _0x5562b0);
  } catch (_0x5dccda) {
    _0xb3e399(errt);
    _0x5143da(_0x5dccda);
  }
});
const _0xbdc834 = {
  pattern: "dimg",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xbdc834, async (_0x2719e4, _0x322981, _0x4c6312, {
  from: _0xa8d4c,
  l: _0x5a8b74,
  quoted: _0x17cc1e,
  body: _0x2aeb1d,
  isCmd: _0x4001fc,
  command: _0x72c11d,
  args: _0x2f6aa2,
  q: _0x3c37cf,
  isGroup: _0x54f927,
  sender: _0x2d9aac,
  senderNumber: _0x3536c9,
  botNumber2: _0x3b9c90,
  botNumber: _0x195fcb,
  pushname: _0x47abfe,
  isMe: _0x295160,
  isOwner: _0x5edeb7,
  groupMetadata: _0x4b8365,
  groupName: _0x413e6f,
  participants: _0x1782eb,
  groupAdmins: _0x5a6fea,
  isBotAdmins: _0x1fda67,
  isAdmins: _0x16ea22,
  reply: _0x2f316d
}) => {
  try {
    const _0xa9bdf1 = {
      text: '🔃',
      key: _0x322981.key
    };
    const _0x563680 = {
      react: _0xa9bdf1
    };
    await _0x2719e4.sendMessage(_0xa8d4c, _0x563680);
    const _0x3ceeb1 = {
      url: _0x3c37cf
    };
    const _0x3c320b = {
      image: _0x3ceeb1,
      caption: config.FOOTER
    };
    const _0x271a77 = {
      quoted: _0x322981
    };
    await _0x2719e4.sendMessage(_0xa8d4c, _0x3c320b, _0x271a77);
    const _0x12843d = {
      text: '✔',
      key: _0x322981.key
    };
    const _0x1050cd = {
      react: _0x12843d
    };
    await _0x2719e4.sendMessage(_0xa8d4c, _0x1050cd);
  } catch (_0x697320) {
    _0x2f316d(errt);
    _0x5a8b74(_0x697320);
  }
});
const _0x2043bd = {
  pattern: "wallpaper",
  react: '🔖',
  desc: "image downloader",
  category: "download",
  use: ".wallpaper",
  filename: __filename
};
cmd(_0x2043bd, async (_0x559109, _0x45db23, _0x5cbb7e, {
  from: _0x30d132,
  l: _0x131aae,
  quoted: _0x5e2124,
  prefix: _0x11a267,
  body: _0x48f8a2,
  isCmd: _0x509bf8,
  command: _0x3d6289,
  args: _0x3a7d56,
  q: _0x17c992,
  isGroup: _0x4ed32b,
  sender: _0x8356be,
  senderNumber: _0x249696,
  botNumber2: _0xaade9c,
  botNumber: _0x1a3354,
  pushname: _0x221ad6,
  isMe: _0x15ff79,
  isOwner: _0x50a1e4,
  groupMetadata: _0x4c8d6d,
  groupName: _0x41a98e,
  participants: _0x40955c,
  groupAdmins: _0x2ab87f,
  isBotAdmins: _0x4892d0,
  isAdmins: _0x4f2f99,
  reply: _0x523ee8
}) => {
  try {
    let {
      wallpaper: _0x1d9db8
    } = require("../lib/scraper");
    anu = await _0x1d9db8(_0x17c992);
    result = anu[Math.floor(Math.random() * anu.length)];
    const _0x1104b7 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x11a267 + "wallpaper " + _0x17c992,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x323465 = {
      url: result.image[0]
    };
    const _0x1c64bb = {
      image: _0x323465,
      caption: "🔮 𝗧𝗜𝗧𝗟𝗘 : " + result.title + "\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : " + result.type + "\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : " + result.source + "\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : " + (result.image[2] || result.image[1] || result.image[0]),
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x1104b7
    };
    const _0x21f310 = {
      quoted: _0x45db23
    };
    return await _0x559109.replyList(_0x30d132, _0x1c64bb, _0x21f310);
  } catch (_0x2adbcc) {
    _0x523ee8("*ERROR !!*");
    _0x131aae(_0x2adbcc);
  }
});
const _0x4374f1 = {
  pattern: "wikimedia",
  react: '🔖',
  desc: "to download wikimedia",
  category: "download",
  use: ".wikimedia",
  filename: __filename
};
cmd(_0x4374f1, async (_0x3c52b3, _0x32f579, _0x4f24f8, {
  from: _0x250097,
  l: _0x23a519,
  quoted: _0x176803,
  prefix: _0x12bd63,
  body: _0x62984d,
  isCmd: _0x8639cf,
  command: _0x37302d,
  args: _0x304031,
  q: _0xef3196,
  isGroup: _0xbfe596,
  sender: _0x34d604,
  senderNumber: _0x47f091,
  botNumber2: _0x3fe542,
  botNumber: _0x25fb34,
  pushname: _0x49358f,
  isMe: _0x3d3037,
  isOwner: _0x4c149e,
  groupMetadata: _0x2d43fd,
  groupName: _0x4328c9,
  participants: _0x282263,
  groupAdmins: _0x22b32c,
  isBotAdmins: _0x410feb,
  isAdmins: _0x132ec9,
  reply: _0x10d617
}) => {
  try {
    let {
      wikimedia: _0x28fe4d
    } = require("../lib/scraper");
    anu = await _0x28fe4d(_0xef3196);
    result = anu[Math.floor(Math.random() * anu.length)];
    const _0x4fbc12 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x12bd63 + "wikimedia " + _0xef3196,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x28a75b = {
      url: result.image[0]
    };
    const _0x2f001f = {
      image: _0x28a75b,
      caption: "🔮 𝗧𝗜𝗧𝗟𝗘 : " + result.title + "\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : " + result.type + "\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : " + result.source + "\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : " + (result.image[2] || result.image[1] || result.image[0]),
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4fbc12
    };
    const _0x4d5c8a = {
      quoted: _0x32f579
    };
    return await _0x3c52b3.replyList(_0x250097, _0x2f001f, _0x4d5c8a);
  } catch (_0x429175) {
    _0x10d617("*ERROR !!*");
    _0x23a519(_0x429175);
  }
});
const _0x161044 = {
  pattern: "quotesanime",
  react: '🔖',
  desc: "to download animes",
  category: "download",
  use: ".quotesanime",
  filename: __filename
};
cmd(_0x161044, async (_0x4f57e4, _0x58efa1, _0x386327, {
  from: _0x23e919,
  l: _0x3e7c49,
  quoted: _0x2c47b5,
  prefix: _0x5b4d59,
  body: _0x547ccd,
  isCmd: _0x97d2ee,
  command: _0xf2e275,
  args: _0x330780,
  q: _0x45f0fe,
  isGroup: _0x21064f,
  sender: _0x5550ef,
  senderNumber: _0x5793ae,
  botNumber2: _0x27bd14,
  botNumber: _0x468b8d,
  pushname: _0x495f7d,
  isMe: _0x408d94,
  isOwner: _0x415ff7,
  groupMetadata: _0xcc5747,
  groupName: _0x27b7fe,
  participants: _0x47d364,
  groupAdmins: _0x455281,
  isBotAdmins: _0x5b1a2f,
  isAdmins: _0x180c9b,
  reply: _0x2f9ca7
}) => {
  try {
    let {
      quotesAnime: _0x11384e
    } = require("../lib/scraper");
    let _0x1cb87d = await _0x11384e();
    result = _0x1cb87d[Math.floor(Math.random() * _0x1cb87d.length)];
    const _0x4a30c4 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x5b4d59 + "quotesanime " + _0x45f0fe,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x527592 = {
      text: '~_' + result.quotes + "_\n\nBy '" + result.karakter + "', " + result.anime + "\n\n- " + result.up_at,
      footer: config.FOOTER,
      buttonText: "🔢 Reply below number,",
      sections: _0x4a30c4,
      contextInfo: {}
    };
    _0x527592.contextInfo.externalAdReply = {};
    _0x527592.contextInfo.externalAdReply.title = "👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻";
    _0x527592.contextInfo.externalAdReply.body = "ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ";
    _0x527592.contextInfo.externalAdReply.mediaType = 0x1;
    _0x527592.contextInfo.externalAdReply.sourceUrl = '';
    _0x527592.contextInfo.externalAdReply.thumbnailUrl = "https://telegra.ph/file/b4caa5682d75220623b83.jpg";
    _0x527592.contextInfo.externalAdReply.renderLargerThumbnail = false;
    _0x527592.contextInfo.externalAdReply.showAdAttribution = true;
    const _0x50e27a = {
      quoted: _0x58efa1
    };
    return await _0x4f57e4.replyList(_0x23e919, _0x527592, _0x50e27a);
  } catch (_0x44ed15) {
    _0x2f9ca7(N_FOUND);
    _0x3e7c49(_0x44ed15);
  }
});
const _0x129383 = {
  pattern: "coffe",
  react: '🔖',
  desc: "to download coffe",
  category: "download",
  use: ".coffe",
  filename: __filename
};
cmd(_0x129383, async (_0x445037, _0x3faadc, _0xd690d2, {
  from: _0x4e2212,
  l: _0x14049b,
  quoted: _0x53b612,
  prefix: _0x4e2fff,
  body: _0x4aad51,
  isCmd: _0x12e86d,
  command: _0x4c11ee,
  args: _0x1e23fc,
  q: _0x3a1f51,
  isGroup: _0x5e37f3,
  sender: _0x4342ee,
  senderNumber: _0x25520f,
  botNumber2: _0xd815ff,
  botNumber: _0x37b578,
  pushname: _0x3da7f8,
  isMe: _0x262700,
  isOwner: _0x446111,
  groupMetadata: _0x23a475,
  groupName: _0x25ca56,
  participants: _0x49203b,
  groupAdmins: _0x2fb728,
  isBotAdmins: _0x782755,
  isAdmins: _0x59312e,
  reply: _0x2bc6cc
}) => {
  try {
    const _0x21cc59 = {
      text: '☕',
      key: _0x3faadc.key
    };
    const _0x5226c4 = {
      react: _0x21cc59
    };
    await _0x445037.sendMessage(_0x4e2212, _0x5226c4);
    const _0x451d29 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x4e2fff + "coffe " + _0x3a1f51,
        'description': "NEXT  PIC ➡️"
      }]
    }];
    const _0x3841c8 = {
      url: "https://coffee.alexflipnote.dev/random"
    };
    const _0x570133 = {
      image: _0x3841c8,
      caption: "Random Coffee",
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x451d29
    };
    const _0x60afab = {
      quoted: _0x3faadc
    };
    return await _0x445037.replyList(_0x4e2212, _0x570133, _0x60afab);
  } catch (_0x321419) {
    _0x2bc6cc("*ERROR !!*");
    _0x14049b(_0x321419);
  }
});
const _0x53198d = {
  pattern: "wpaper",
  react: '🔖',
  desc: "to download wpaper",
  category: "download",
  use: ".wpaper",
  filename: __filename
};
cmd(_0x53198d, async (_0x3e7c29, _0x499942, _0x2c93f1, {
  from: _0x46b53f,
  l: _0x4d302e,
  quoted: _0x3f5298,
  prefix: _0x367a29,
  body: _0x5bb30d,
  isCmd: _0x294512,
  command: _0x44cbc5,
  args: _0x2b44b0,
  q: _0xc65bf4,
  isGroup: _0x247135,
  sender: _0x2fce13,
  senderNumber: _0x34e2a2,
  botNumber2: _0x520d34,
  botNumber: _0x102ff5,
  pushname: _0x2e9060,
  isMe: _0x34a612,
  isOwner: _0x1c9f97,
  groupMetadata: _0x4403fd,
  groupName: _0x537fbb,
  participants: _0x12c380,
  groupAdmins: _0x5a7c32,
  isBotAdmins: _0x9cef78,
  isAdmins: _0x451f14,
  reply: _0x1a9fea
}) => {
  try {
    const _0x44321b = {
      url: "https://api.akuari.my.id/search/alphacoders?query=" + _0xc65bf4
    };
    const _0x425d7e = {
      image: _0x44321b,
      caption: '' + config.cap
    };
    const _0x5e11ef = {
      url: "https://api.akuari.my.id/search/alphacoders?query=" + _0xc65bf4
    };
    const _0x45cde8 = {
      image: _0x5e11ef,
      caption: '' + config.cap
    };
    await _0x3e7c29.sendMessage(_0x499942.chat, _0x425d7e, {
      'quoted': _0x499942
    });
    await _0x3e7c29.sendMessage(_0x499942.chat, _0x45cde8, {
      'quoted': _0x499942
    }.repeat(5));
    const _0x46f956 = {
      text: '✅',
      key: _0x499942.key
    };
    const _0x1b0dc4 = {
      react: _0x46f956
    };
    await _0x3e7c29.sendMessage(_0x46b53f, _0x1b0dc4);
  } catch (_0x492147) {
    _0x1a9fea();
    _0x4d302e(_0x492147);
  }
});
const _0x473d10 = {
  pattern: "ringtone",
  react: '🔖',
  desc: "to download ringtone",
  category: "download",
  use: ".ringtone",
  filename: __filename
};
cmd(_0x473d10, async (_0x1180d5, _0x31e57a, _0x3d3187, {
  from: _0x444640,
  l: _0x626476,
  quoted: _0x1e023b,
  prefix: _0x4d72c4,
  body: _0x5eb96a,
  isCmd: _0x4aa530,
  command: _0x3a506c,
  args: _0x39d450,
  q: _0x2f6a86,
  isGroup: _0x57eaa2,
  sender: _0x3b07e6,
  senderNumber: _0x4447c3,
  botNumber2: _0x40b61a,
  botNumber: _0x2d1c72,
  pushname: _0x529e39,
  isMe: _0xcbb743,
  isOwner: _0xf89840,
  groupMetadata: _0x4787e2,
  groupName: _0x2d4603,
  participants: _0x39a0c9,
  groupAdmins: _0x2236bb,
  isBotAdmins: _0x622703,
  isAdmins: _0x259162,
  reply: _0x3f9a14
}) => {
  try {
    if (!_0x2f6a86) {
      _0x3f9a14`${Lang.EXAMPLE}\n : ${_0x4d72c4 + _0x3a506c} black rover`;
    }
    let {
      ringtone: _0x5007f2
    } = require("../lib/scraper");
    let _0x543e22 = await _0x5007f2(_0x2f6a86);
    let _0x43cb10 = _0x543e22[Math.floor(Math.random() * _0x543e22.length)];
    const _0x1c1d3f = {
      url: _0x43cb10.audio
    };
    _0x1180d5.sendMessage(_0x31e57a.chat, {
      'audio': _0x1c1d3f,
      'fileName': _0x43cb10.title + ".mp3",
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x31e57a
    });
    const _0x59b584 = {
      text: '✅',
      key: _0x31e57a.key
    };
    const _0x3efc39 = {
      react: _0x59b584
    };
    await _0x1180d5.sendMessage(_0x444640, _0x3efc39);
  } catch (_0x26c323) {
    _0x3f9a14();
    _0x626476(_0x26c323);
  }
});
const _0x2eb4c2 = {
  pattern: "couplepp",
  react: '🔖',
  desc: "couple pic download",
  category: "download",
  use: ".couplepp",
  filename: __filename
};
cmd(_0x2eb4c2, async (_0x56af25, _0x374436, _0x57586c, {
  from: _0x3c44a8,
  l: _0x473f36,
  quoted: _0x4fe2b0,
  body: _0x25a147,
  isCmd: _0x2776b1,
  command: _0x186363,
  args: _0x14808e,
  q: _0x15f0ba,
  isGroup: _0x247136,
  sender: _0x2e3fe5,
  senderNumber: _0x246a01,
  botNumber2: _0x176f82,
  botNumber: _0x3367e6,
  pushname: _0x140e7b,
  isMe: _0xa1ebdb,
  isOwner: _0x91fbb7,
  groupMetadata: _0x5ef8a7,
  groupName: _0x3387ea,
  participants: _0x5c34bc,
  groupAdmins: _0x5f211c,
  isBotAdmins: _0x41aef4,
  isAdmins: _0x1880a2,
  reply: _0x19ca30
}) => {
  try {
    const _0x1906b4 = {
      text: '💏',
      key: _0x374436.key
    };
    const _0x5214e4 = {
      react: _0x1906b4
    };
    await _0x56af25.sendMessage(_0x3c44a8, _0x5214e4);
    let _0xee28ab = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json");
    let _0x433d66 = _0xee28ab[Math.floor(Math.random() * _0xee28ab.length)];
    const _0x13abc5 = {
      url: _0x433d66.male
    };
    const _0x37a420 = {
      image: _0x13abc5,
      caption: "Couple Male"
    };
    _0x56af25.sendMessage(_0x374436.chat, _0x37a420, {
      'quoted': _0x374436
    });
    const _0x160d72 = {
      url: _0x433d66.female
    };
    const _0x19badb = {
      image: _0x160d72,
      caption: "Couple Female"
    };
    _0x56af25.sendMessage(_0x374436.chat, _0x19badb, {
      'quoted': _0x374436
    });
    const _0x3c8d1c = {
      text: '✅',
      key: _0x374436.key
    };
    const _0x4f85af = {
      react: _0x3c8d1c
    };
    await _0x56af25.sendMessage(_0x3c44a8, _0x4f85af);
  } catch (_0x35de17) {
    _0x19ca30();
    _0x473f36(_0x35de17);
  }
});
const _0x189ffd = {
  pattern: 'fb',
  react: "#️⃣",
  alias: ["fbdl", "facebook"],
  desc: desc1,
  category: "download",
  use: ".fb <Fb video link>",
  filename: __filename
};
cmd(_0x189ffd, async (_0x1a1700, _0x272418, _0x2768b8, {
  from: _0x58208f,
  prefix: _0x43f6a4,
  l: _0x40f2c7,
  quoted: _0x940aa3,
  body: _0x225b3a,
  isCmd: _0x11d4f2,
  command: _0x24f30a,
  args: _0x49c726,
  q: _0xa4160c,
  isGroup: _0x487be0,
  sender: _0x437a2b,
  senderNumber: _0x3669f3,
  botNumber2: _0xa7abc1,
  botNumber: _0x42e8b7,
  pushname: _0x3429c0,
  isMe: _0x24c06f,
  isOwner: _0x5e9a60,
  groupMetadata: _0x1f38b6,
  groupName: _0x432ea0,
  participants: _0x108e76,
  groupAdmins: _0x284484,
  isBotAdmins: _0x5cf201,
  isAdmins: _0x261951,
  reply: _0x49efd6
}) => {
  try {
    if (!fbreg(_0xa4160c)) {
      return await _0x49efd6(urlneed2);
    }
    const _0x130eb1 = await facebook(_0xa4160c);
    let _0x51a96d = "VAJIRA MD FB DOWNLOADER\n\n   \n*TIME :* " + _0x130eb1.result.duration + "\n*URL :* " + _0xa4160c;
    var _0x2dbcd4 = [{
      'title': "SD TYPE 🪫",
      'rows': [{
        'title': "    1.1",
        'rowId': _0x43f6a4 + "fbsd " + _0xa4160c,
        'description': " 🪫 `SD` QUALITY VIDEO"
      }, {
        'title': "    1.2",
        'rowId': _0x43f6a4 + "fbsdd " + _0xa4160c,
        'description': " 📂 `SD` QUALITY DOCUMENT"
      }]
    }, {
      'title': "HD TYPE 🔋",
      'rows': [{
        'title': "    2.1",
        'rowId': _0x43f6a4 + "fbhd " + _0xa4160c,
        'description': " 🔋 `HD` QUALITY VIDEO"
      }, {
        'title': "    2.2",
        'rowId': _0x43f6a4 + "fbhdd " + _0xa4160c,
        'description': " 📂 `HD` QUALITY DOCUMENT"
      }]
    }, {
      'title': "VOICE CUT TYPE 🎶",
      'rows': [{
        'title': "    3.1",
        'rowId': _0x43f6a4 + "fba " + _0xa4160c,
        'description': " 🎶 Audio file"
      }, {
        'title': "    3.2",
        'rowId': _0x43f6a4 + "fbd " + _0xa4160c,
        'description': " 📂 Document file"
      }]
    }];
    const _0x30399f = {
      url: '' + _0x130eb1.result.thumbnail
    };
    const _0x284aa9 = {
      image: _0x30399f,
      caption: _0x51a96d,
      footer: config.FOOTER,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x2dbcd4
    };
    const _0x1b8234 = {
      quoted: _0x272418
    };
    return await _0x1a1700.replyList(_0x58208f, _0x284aa9, _0x1b8234);
  } catch (_0x46460d) {
    _0x49efd6("*ERROR !!*");
    _0x40f2c7(_0x46460d);
  }
});
const _0x594db8 = {
  pattern: "fb2",
  react: "#️⃣",
  alias: ["fbdl2", "facebook2"],
  desc: desc1,
  category: "download",
  use: ".fb <Fb video link>",
  filename: __filename
};
cmd(_0x594db8, async (_0x507e6f, _0x7abe17, _0x553ae3, {
  from: _0x499be4,
  prefix: _0x18b39c,
  l: _0xd6cca7,
  quoted: _0x1c6fa5,
  body: _0x24acd9,
  isCmd: _0x4661b0,
  command: _0x52693d,
  args: _0x580871,
  q: _0x26c6d5,
  isGroup: _0x465bc1,
  sender: _0x247588,
  senderNumber: _0x31865a,
  botNumber2: _0x1c7240,
  botNumber: _0xa3349b,
  pushname: _0xa01ccb,
  isMe: _0x253330,
  isOwner: _0x5f5b89,
  groupMetadata: _0x140319,
  groupName: _0x2260ca,
  participants: _0x1152ac,
  groupAdmins: _0x52ea40,
  isBotAdmins: _0x5eaddc,
  isAdmins: _0x575869,
  reply: _0x490cd8
}) => {
  try {
    if (!fbreg(_0x26c6d5)) {
      return await _0x490cd8(urlneed2);
    }
    const _0x16723f = await facebook(_0x26c6d5);
    const _0x2285fe = "\n💢 *VAJIRA-MD FB DOWNLOADER* 💢\n\n*TIME :* " + _0x16723f.result.duration + "\n*URL :* " + _0x26c6d5 + "\n";
    const _0x6e03ba = {
      url: '' + _0x16723f.result.thumbnail
    };
    const _0x27d0f6 = {
      image: _0x6e03ba,
      caption: _0x2285fe
    };
    const _0x1e390b = {
      quoted: _0x7abe17
    };
    await _0x507e6f.sendMessage(_0x499be4, _0x27d0f6, _0x1e390b);
    const _0x412322 = {
      text: '⬆',
      key: _0x7abe17.key
    };
    const _0xd2668e = {
      react: _0x412322
    };
    await _0x507e6f.sendMessage(_0x499be4, _0xd2668e);
    const _0x59ef20 = {
      url: _0x16723f.result.links.HD
    };
    const _0x8c4902 = {
      audio: _0x59ef20,
      mimetype: "audio/mpeg"
    };
    const _0x9c9134 = {
      quoted: _0x7abe17
    };
    await _0x507e6f.sendMessage(_0x499be4, _0x8c4902, _0x9c9134);
    const _0x319b8b = {
      url: _0x16723f.result.links.SD
    };
    const _0x55883a = {
      video: _0x319b8b,
      mimetype: "video/mp4",
      caption: "SD QUALITY\n\n> *POWERED by VAJIRA-MD*"
    };
    const _0x215a02 = {
      quoted: _0x7abe17
    };
    await _0x507e6f.sendMessage(_0x499be4, _0x55883a, _0x215a02);
    const _0x195dad = {
      url: _0x16723f.result.links.HD
    };
    const _0x3ea490 = {
      video: _0x195dad,
      mimetype: "video/mp4",
      caption: "HD QUALITY\n\n> *POWERED by VAJIRA-MD*"
    };
    const _0x5b5198 = {
      quoted: _0x7abe17
    };
    await _0x507e6f.sendMessage(_0x499be4, _0x3ea490, _0x5b5198);
    const _0x202c96 = {
      text: '✔',
      key: _0x7abe17.key
    };
    const _0x2df088 = {
      react: _0x202c96
    };
    await _0x507e6f.sendMessage(_0x499be4, _0x2df088);
  } catch (_0x29a19a) {
    const _0x21f117 = {
      text: '❌',
      key: _0x7abe17.key
    };
    const _0x396600 = {
      react: _0x21f117
    };
    await _0x507e6f.sendMessage(_0x499be4, _0x396600);
    console.log(_0x29a19a);
    _0x490cd8("Error !!\n\n*" + _0x29a19a + '*');
  }
});
const _0x516c27 = {
  pattern: "fbsd",
  react: '⬇',
  filename: __filename
};
cmd(_0x516c27, async (_0x3b5a2b, _0x549d0d, _0x1e541d, {
  from: _0x18b6a2,
  quoted: _0x8d8a22,
  body: _0x344ccd,
  isCmd: _0x16c98b,
  command: _0x1e91b8,
  args: _0x4c0d70,
  q: _0x40e9cb,
  isGroup: _0x1cb5ae,
  sender: _0xed923d,
  senderNumber: _0x57ad3b,
  botNumber2: _0x5b718a,
  botNumber: _0x3cc92c,
  pushname: _0x37cc00,
  isMe: _0x3e613b,
  isOwner: _0x5d075b,
  groupMetadata: _0x3a6852,
  groupName: _0x582fa5,
  participants: _0x391356,
  groupAdmins: _0x45119c,
  isBotAdmins: _0x13c3ad,
  isAdmins: _0x4469aa,
  reply: _0x56a9a9
}) => {
  try {
    const _0x44ee92 = await facebook(_0x40e9cb);
    const _0x5b1884 = {
      text: '⬆',
      key: _0x549d0d.key
    };
    const _0x15a83a = {
      react: _0x5b1884
    };
    await _0x3b5a2b.sendMessage(_0x18b6a2, _0x15a83a);
    const _0x3d3061 = {
      url: _0x44ee92.result.links.SD
    };
    const _0x26ff70 = {
      video: _0x3d3061,
      mimetype: "video/mp4",
      caption: "> *POWERED by VAJIRA-MD*"
    };
    const _0x281f74 = {
      quoted: _0x549d0d
    };
    await _0x3b5a2b.sendMessage(_0x18b6a2, _0x26ff70, _0x281f74);
    const _0x2c0004 = {
      text: '✔',
      key: _0x549d0d.key
    };
    const _0x486914 = {
      react: _0x2c0004
    };
    await _0x3b5a2b.sendMessage(_0x18b6a2, _0x486914);
  } catch (_0x280d60) {
    const _0x20c6cd = {
      text: '❌',
      key: _0x549d0d.key
    };
    const _0x57aed8 = {
      react: _0x20c6cd
    };
    await _0x3b5a2b.sendMessage(_0x18b6a2, _0x57aed8);
    console.log(_0x280d60);
    _0x56a9a9("Error !!\n\n*" + _0x280d60 + '*');
  }
});
const _0x21acc5 = {
  pattern: "fbsdd",
  react: '⬇',
  filename: __filename
};
cmd(_0x21acc5, async (_0x24e144, _0x1c6a2e, _0x50f0b2, {
  from: _0x3c2bbf,
  quoted: _0x482639,
  body: _0x258b66,
  isCmd: _0x3814e9,
  command: _0x14ea30,
  args: _0x18fc38,
  q: _0x243a51,
  isGroup: _0x3ecf6d,
  sender: _0x2dc10c,
  senderNumber: _0x5e26db,
  botNumber2: _0x3ccd3a,
  botNumber: _0x35b3cf,
  pushname: _0x5298ba,
  isMe: _0x178e55,
  isOwner: _0x21419c,
  groupMetadata: _0x18c35c,
  groupName: _0x2a2ddc,
  participants: _0x4332db,
  groupAdmins: _0x20d0fd,
  isBotAdmins: _0x6bbb9b,
  isAdmins: _0x46499f,
  reply: _0xaedc2f
}) => {
  try {
    const _0x363a92 = await facebook(_0x243a51);
    const _0x5c3131 = {
      text: '⬆',
      key: _0x1c6a2e.key
    };
    const _0x244a41 = {
      react: _0x5c3131
    };
    await _0x24e144.sendMessage(_0x3c2bbf, _0x244a41);
    const _0x1b8d56 = {
      url: _0x363a92.result.links.SD
    };
    const _0x40b4cd = {
      document: _0x1b8d56,
      mimetype: "video/mp4",
      fileName: "FbDL.mp4",
      caption: "💻 *VAJIRA MD FBDL*"
    };
    const _0x1b579d = {
      quoted: _0x1c6a2e
    };
    await _0x24e144.sendMessage(_0x3c2bbf, _0x40b4cd, _0x1b579d);
    const _0x5808db = {
      text: '✔',
      key: _0x1c6a2e.key
    };
    const _0x4c6b8b = {
      react: _0x5808db
    };
    await _0x24e144.sendMessage(_0x3c2bbf, _0x4c6b8b);
  } catch (_0x588625) {
    const _0x5d1f1e = {
      text: '❌',
      key: _0x1c6a2e.key
    };
    const _0x5cc263 = {
      react: _0x5d1f1e
    };
    await _0x24e144.sendMessage(_0x3c2bbf, _0x5cc263);
    console.log(_0x588625);
    _0xaedc2f("Error !!\n\n*" + _0x588625 + '*');
  }
});
const _0x513991 = {
  pattern: "fbhd",
  react: '⬇',
  filename: __filename
};
cmd(_0x513991, async (_0x5a1240, _0x507b79, _0x244ad2, {
  from: _0x1f0f2b,
  quoted: _0x203552,
  body: _0x2c5784,
  isCmd: _0x412702,
  command: _0x520ff7,
  args: _0xbeea21,
  q: _0x38eaad,
  isGroup: _0x224f72,
  sender: _0x19430c,
  senderNumber: _0x2daf61,
  botNumber2: _0x57d269,
  botNumber: _0x2742e3,
  pushname: _0x2c35ae,
  isMe: _0x2b0faf,
  isOwner: _0x139fe3,
  groupMetadata: _0x2d0dd6,
  groupName: _0x49e7e6,
  participants: _0x4f3deb,
  groupAdmins: _0x152653,
  isBotAdmins: _0x4b2ae5,
  isAdmins: _0x5d0424,
  reply: _0x19a66d
}) => {
  try {
    if (!_0x38eaad.includes("https://")) {
      return await _0x19a66d(msr.not_fo);
    }
    const _0x889770 = await facebook(_0x38eaad);
    const _0x3a2d1f = {
      text: '⬆',
      key: _0x507b79.key
    };
    const _0x18fbb6 = {
      react: _0x3a2d1f
    };
    await _0x5a1240.sendMessage(_0x1f0f2b, _0x18fbb6);
    const _0x128790 = {
      url: _0x889770.result.links.HD
    };
    const _0x4fd83d = {
      video: _0x128790,
      mimetype: "video/mp4",
      caption: "> *POWERED by VAJIRA-MD*"
    };
    const _0x40cfd9 = {
      quoted: _0x507b79
    };
    await _0x5a1240.sendMessage(_0x1f0f2b, _0x4fd83d, _0x40cfd9);
    const _0x4e61c2 = {
      text: '✔',
      key: _0x507b79.key
    };
    const _0x421ac6 = {
      react: _0x4e61c2
    };
    await _0x5a1240.sendMessage(_0x1f0f2b, _0x421ac6);
  } catch (_0x4ba53a) {
    const _0x245bc8 = {
      text: '❌',
      key: _0x507b79.key
    };
    const _0x23556b = {
      react: _0x245bc8
    };
    await _0x5a1240.sendMessage(_0x1f0f2b, _0x23556b);
    console.log(_0x4ba53a);
    _0x19a66d("Error !!\n\n*" + _0x4ba53a + '*');
  }
});
const _0x5698ab = {
  pattern: "fbhdd",
  react: '⬇',
  filename: __filename
};
cmd(_0x5698ab, async (_0x5386f3, _0x45ce2a, _0x5a3b94, {
  from: _0x4f1c27,
  quoted: _0x2e2da0,
  body: _0x8b1890,
  isCmd: _0x1982f9,
  command: _0x160ed6,
  args: _0x202804,
  q: _0x4e4c38,
  isGroup: _0x2333ba,
  sender: _0x20a8ed,
  senderNumber: _0x3310e4,
  botNumber2: _0x3a0fdb,
  botNumber: _0x4dc894,
  pushname: _0x513a40,
  isMe: _0x3776a9,
  isOwner: _0x352381,
  groupMetadata: _0x399f7c,
  groupName: _0x50df38,
  participants: _0x3c21d9,
  groupAdmins: _0x50ce61,
  isBotAdmins: _0x4dd0fa,
  isAdmins: _0x5c2fe0,
  reply: _0xb807f3
}) => {
  try {
    if (!_0x4e4c38.includes("https://")) {
      return await _0xb807f3(msr.not_fo);
    }
    const _0x712050 = await facebook(_0x4e4c38);
    const _0x1ce8b8 = {
      text: '⬆',
      key: _0x45ce2a.key
    };
    const _0x59cc65 = {
      react: _0x1ce8b8
    };
    await _0x5386f3.sendMessage(_0x4f1c27, _0x59cc65);
    const _0x121f6f = {
      url: _0x712050.result.links.HD
    };
    const _0x59dd0e = {
      document: _0x121f6f,
      mimetype: "video/mp4",
      fileName: "FbDL.mp4",
      caption: "💻 *VAJIRA MD FBDL*"
    };
    const _0x230b16 = {
      quoted: _0x45ce2a
    };
    await _0x5386f3.sendMessage(_0x4f1c27, _0x59dd0e, _0x230b16);
    const _0x5d8457 = {
      text: '✔',
      key: _0x45ce2a.key
    };
    const _0x114a4f = {
      react: _0x5d8457
    };
    await _0x5386f3.sendMessage(_0x4f1c27, _0x114a4f);
  } catch (_0x5e011d) {
    const _0x17840a = {
      text: '❌',
      key: _0x45ce2a.key
    };
    const _0x151b02 = {
      react: _0x17840a
    };
    await _0x5386f3.sendMessage(_0x4f1c27, _0x151b02);
    console.log(_0x5e011d);
    _0xb807f3("Error !!\n\n*" + _0x5e011d + '*');
  }
});
const _0x21dfd4 = {
  pattern: "fba",
  react: '⬇',
  filename: __filename
};
cmd(_0x21dfd4, async (_0x2cc19b, _0xa17ad7, _0x5d08dc, {
  from: _0x197d2f,
  quoted: _0x37547a,
  body: _0x258c9b,
  isCmd: _0x543537,
  command: _0x471753,
  args: _0x3d4cfc,
  q: _0x3bf13d,
  isGroup: _0x5683aa,
  sender: _0x568529,
  senderNumber: _0x1c9163,
  botNumber2: _0x30d796,
  botNumber: _0x26a999,
  pushname: _0x4e43e1,
  isMe: _0x34c0d4,
  isOwner: _0xc02f4b,
  groupMetadata: _0x1d0327,
  groupName: _0x1788a2,
  participants: _0x2b7915,
  groupAdmins: _0x23004e,
  isBotAdmins: _0x815ba7,
  isAdmins: _0x208fdb,
  reply: _0x2773f9
}) => {
  try {
    if (!_0x3bf13d.includes("https://")) {
      return await _0x2773f9(msr.not_fo);
    }
    const _0x3870cb = await facebook(_0x3bf13d);
    const _0x52fb4c = {
      text: '⬆',
      key: _0xa17ad7.key
    };
    const _0x4ebefd = {
      react: _0x52fb4c
    };
    await _0x2cc19b.sendMessage(_0x197d2f, _0x4ebefd);
    const _0x52d52f = {
      url: _0x3870cb.result.links.HD
    };
    const _0x26160e = {
      audio: _0x52d52f,
      mimetype: "audio/mpeg"
    };
    const _0x3386f4 = {
      quoted: _0xa17ad7
    };
    await _0x2cc19b.sendMessage(_0x197d2f, _0x26160e, _0x3386f4);
    const _0x31c61c = {
      text: '✔',
      key: _0xa17ad7.key
    };
    const _0x31ae37 = {
      react: _0x31c61c
    };
    await _0x2cc19b.sendMessage(_0x197d2f, _0x31ae37);
  } catch (_0x1dc84d) {
    const _0x11c37c = {
      text: '❌',
      key: _0xa17ad7.key
    };
    const _0x29fbbb = {
      react: _0x11c37c
    };
    await _0x2cc19b.sendMessage(_0x197d2f, _0x29fbbb);
    console.log(_0x1dc84d);
    _0x2773f9("Error !!\n\n*" + _0x1dc84d + '*');
  }
});
const _0x5b0169 = {
  pattern: "fbd",
  react: '⬇',
  filename: __filename
};
cmd(_0x5b0169, async (_0x12ebfa, _0x1e0f49, _0x16f0ba, {
  from: _0x1b72f2,
  quoted: _0xd1221c,
  body: _0x3ba205,
  isCmd: _0x20eaa8,
  command: _0x4fa28b,
  args: _0x41a8ed,
  q: _0x24baea,
  isGroup: _0x3e0f7f,
  sender: _0x33043b,
  senderNumber: _0x2b7d1a,
  botNumber2: _0x1498c5,
  botNumber: _0x306aa2,
  pushname: _0x5ee1d5,
  isMe: _0x1609a2,
  isOwner: _0x585200,
  groupMetadata: _0x54963d,
  groupName: _0x482b46,
  participants: _0x540cd4,
  groupAdmins: _0x3b3b85,
  isBotAdmins: _0x48ec0b,
  isAdmins: _0xf2ed51,
  reply: _0x558fc1
}) => {
  try {
    if (!_0x24baea.includes("https://")) {
      return await _0x558fc1(msr.not_fo);
    }
    const _0x5a925f = await facebook(_0x24baea);
    const _0x19a988 = {
      text: '⬆',
      key: _0x1e0f49.key
    };
    const _0x53a478 = {
      react: _0x19a988
    };
    await _0x12ebfa.sendMessage(_0x1b72f2, _0x53a478);
    const _0x57edd9 = {
      url: _0x5a925f.result.links.HD
    };
    const _0x5d74ab = {
      document: _0x57edd9,
      mimetype: "audio/mpeg",
      fileName: "Fbdl.mp3",
      caption: "💻 *VAJIRA MD Fbdl*"
    };
    const _0x3ead54 = {
      quoted: _0x1e0f49
    };
    await _0x12ebfa.sendMessage(_0x1b72f2, _0x5d74ab, _0x3ead54);
    const _0x23bcb0 = {
      text: '✔',
      key: _0x1e0f49.key
    };
    const _0x22ffc8 = {
      react: _0x23bcb0
    };
    await _0x12ebfa.sendMessage(_0x1b72f2, _0x22ffc8);
  } catch (_0x5e2fe0) {
    const _0x3f5e18 = {
      text: '❌',
      key: _0x1e0f49.key
    };
    const _0x52ac4c = {
      react: _0x3f5e18
    };
    await _0x12ebfa.sendMessage(_0x1b72f2, _0x52ac4c);
    console.log(_0x5e2fe0);
    _0x558fc1("Error !!\n\n*" + _0x5e2fe0 + '*');
  }
});
