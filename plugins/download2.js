(function (_0x53bd99, _0x5a0443) {
  const _0x3da32e = _0x53bd99();
  while (true) {
    try {
      const _0x26641f = parseInt(_0x2d5b(919, 0x3f)) / 1 + parseInt(_0x2d5b(337, -0x33)) / 2 * (parseInt(_0x2d5b(1230, 0x339)) / 3) + parseInt(_0x2d5b(532, -0x232)) / 4 * (parseInt(_0x2d5b(443, 0xf8)) / 5) + parseInt(_0x2d5b(948, 0x2c6)) / 6 * (-parseInt(_0x2d5b(1081, 0x32f)) / 7) + parseInt(_0x2d5b(670, 0x87)) / 8 * (-parseInt(_0x2d5b(494, 0x1e8)) / 9) + parseInt(_0x2d5b(980, 0x168)) / 10 * (-parseInt(_0x2d5b(1172, 0x575)) / 11) + -parseInt(_0x2d5b(1384, 0x512)) / 12;
      if (_0x26641f === _0x5a0443) {
        break;
      } else {
        _0x3da32e.push(_0x3da32e.shift());
      }
    } catch (_0x50e90d) {
      _0x3da32e.push(_0x3da32e.shift());
    }
  }
})(_0x33a0, 900423);
const _0x51cf4a = function () {
  let _0x250783 = true;
  return function (_0x527687, _0x5c4e2f) {
    const _0x1d43cd = _0x250783 ? function () {
      if (_0x5c4e2f) {
        const _0x5b8537 = _0x5c4e2f.apply(_0x527687, arguments);
        _0x5c4e2f = null;
        return _0x5b8537;
      }
    } : function () {};
    _0x250783 = false;
    return _0x1d43cd;
  };
}();
const _0x2e07fc = _0x51cf4a(this, function () {
  return _0x2e07fc.toString().search("(((.+)+)+)+$").toString().constructor(_0x2e07fc).search("(((.+)+)+)+$");
});
_0x2e07fc();
const _0xeb48bd = function () {
  let _0x1d640b = true;
  return function (_0x18b284, _0x338dd0) {
    const _0x2595d3 = _0x1d640b ? function () {
      if (_0x338dd0) {
        const _0x1bd678 = _0x338dd0.apply(_0x18b284, arguments);
        _0x338dd0 = null;
        return _0x1bd678;
      }
    } : function () {};
    _0x1d640b = false;
    return _0x2595d3;
  };
}();
(function () {
  _0xeb48bd(this, function () {
    const _0x4235d4 = new RegExp("function *\\( *\\)");
    const _0x19b847 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x289591 = _0x3badeb("init");
    if (!_0x4235d4.test(_0x289591 + "chain") || !_0x19b847.test(_0x289591 + "input")) {
      _0x289591('0');
    } else {
      _0x3badeb();
    }
  })();
})();
const {
  cmd,
  commands
} = require("../command");
const axios = require("axios");
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
} = require("../lib/functions");
function formatNumber(_0x559e05) {
  return String(_0x559e05).padStart(2, '0');
}
async function getPremiumUsers() {
  const _0x5afbb0 = await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Moviedl/primiyam.json");
  const _0x12b663 = _0x5afbb0.split(',');
  return _0x12b663.map(_0x5e6642 => _0x5e6642.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
}
function _0x2d5b(_0x25cf10, _0x2e07fc) {
  const _0x51cf4a = _0x33a0();
  _0x2d5b = function (_0x33a094, _0x2d5b3b) {
    _0x33a094 = _0x33a094 - 258;
    let _0x533e3e = _0x51cf4a[_0x33a094];
    return _0x533e3e;
  };
  return _0x2d5b(_0x25cf10, _0x2e07fc);
}
const _0x4b0da0 = {};
function _0x68d1d8(_0x101047, _0x5bc0e9, _0x5534fa, _0x30da35, _0x26cd79) {
  return _0x2d5b(_0x5bc0e9 + 0x17, _0x5534fa);
}
_0x4b0da0.pattern = "dbl2";
_0x4b0da0.react = '⬇️';
_0x4b0da0.filename = __filename;
cmd(_0x4b0da0, async (_0x13b4c9, _0x2b36d2, _0x5f44f9, {
  from: _0x1040ff,
  q: _0x26cf50,
  sender: _0xdde856,
  reply: _0x53626a
}) => {
  try {
    const _0x2a3d4e = _0x26cf50.split(" & ")[0];
    const _0x26b4d2 = _0x26cf50.split(" & ")[1];
    const _0x2ef65c = _0x26cf50.split(" & ")[2];
    const _0xce0eb5 = _0x26cf50.split(" & ")[3];
    const _0x527a13 = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    let _0x6bbff4 = _0x527a13.imageurl;
    let _0xc06d77 = _0x527a13.channel;
    if (!_0x2a3d4e) {
      return _0x53626a("❗ කරුණාකර download link එකක් ලබා දෙන්න.");
    }
    const _0x44a384 = /^(https?:\/\/[^\s]+)/;
    if (!_0x44a384.test(_0x2a3d4e)) {
      return _0x53626a("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    const _0xb566bc = {
      text: '⬆️',
      key: _0x2b36d2.key
    };
    const _0x4008b0 = {
      react: _0xb566bc
    };
    await _0x13b4c9.sendMessage(_0x1040ff, _0x4008b0);
    const _0x48ef41 = {
      title: "ASITHA-MD",
      body: "ASITHA-MD",
      thumbnailUrl: '' + _0x6bbff4,
      sourceUrl: '' + _0xc06d77
    };
    const _0x2cb4b9 = {
      quoted: _0x2b36d2
    };
    await _0x13b4c9.sendMessage(_0x1040ff, {
      'image': {
        'url': _0xce0eb5 ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      }
    }, _0x2cb4b9);
    const _0x500630 = {
      url: _0x2a3d4e
    };
    const _0x38b803 = {
      externalAdReply: _0x48ef41
    };
    const _0x488a40 = {
      document: _0x500630,
      caption: "\n*" + _0x26b4d2 + "*\n\n> *" + _0x2ef65c + "*\n\n> *POWERED by ASITHA-MD*",
      mimetype: "video/mp4",
      fileName: "🎬ASITHA-MD🎬" + _0x26b4d2 + ".mp4",
      contextInfo: _0x38b803
    };
    const _0x1920fe = {
      quoted: _0x2b36d2
    };
    await _0x13b4c9.sendMessage(_0x1040ff, _0x488a40, _0x1920fe);
    const _0x3f58d5 = {
      text: '✅',
      key: _0x2b36d2.key
    };
    const _0x59e887 = {
      react: _0x3f58d5
    };
    await _0x13b4c9.sendMessage(_0x1040ff, _0x59e887);
  } catch (_0x60934c) {
    _0x53626a("❗ Error: " + _0x60934c);
  }
});
const _0x226a9c = {
  pattern: "ginisisila",
  react: '🎥',
  desc: "Download movie for isaidub9.com",
  category: "extra",
  use: ".Ginisisila <Movie Name>",
  filename: __filename
};
cmd(_0x226a9c, async (_0x254c11, _0x599a0e, _0x19d871, {
  from: _0x1fcc1d,
  sender: _0x8ef66b,
  prefix: _0xa74654,
  quoted: _0x1ba776,
  q: _0xfc0c3,
  reply: _0x186aea
}) => {
  try {
    let _0x260e06 = _0xfc0c3.split(" & ")[1];
    let _0x10ecbc = _0xfc0c3.split(" & ")[0];
    const _0x2272c4 = "https://www.dark-yasiya-api.site/search/ginisisila?text=" + _0x10ecbc + "&page=" + _0x260e06;
    const _0x483bc0 = await axios.get(_0x2272c4).then(_0x2ea51c => _0x2ea51c.data);
    if (!_0x483bc0.status) {
      return _0x186aea("*ERROR:* Unable to fetch data for \"" + _0x10ecbc + "\".");
    }
    let _0xa7d33a = _0x483bc0.result.data;
    const _0x227b33 = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    let _0x29a97e = _0x227b33.footer;
    var _0x5d5c33 = [];
    for (var _0x70dd36 = 0; _0x70dd36 < _0xa7d33a.length; _0x70dd36++) {
      _0x5d5c33.push({
        'title': _0x70dd36 + 1,
        'description': _0xa7d33a[_0x70dd36].title + "\n",
        'rowId': _0xa74654 + "gdrivegini " + (_0xa7d33a[_0x70dd36].url || "N/A") + " & " + _0xa7d33a[_0x70dd36].image
      });
    }
    const _0x21d83f = [{
      'title': "*[Results from ginisisilacartoon.net]*\n",
      'rows': _0x5d5c33
    }];
    const _0x333d0c = {
      'text': "📽 ASITHA MD CINEMA 📽\n\n👽 Entered Name || " + _0x10ecbc,
      'footer': _0x29a97e || "> POWERED by ASITHA-MD",
      'title': '',
      'buttonText': "🔢 Reply below number\n",
      'sections': _0x21d83f
    };
    const _0x9c5650 = {
      quoted: _0x599a0e
    };
    return await _0x254c11.replyList(_0x1fcc1d, _0x333d0c, _0x9c5650);
  } catch (_0x27b8f2) {
    console.error(_0x27b8f2);
    _0x186aea("No Movie");
  }
});
const _0x5bb3c4 = {
  pattern: "sinhaladub",
  react: '🎥',
  desc: "Download movie for isaidub9.com",
  category: "extra",
  use: ".sinhaladub <Movie Name>",
  filename: __filename
};
cmd(_0x5bb3c4, async (_0x464975, _0x887e33, _0x5dc3c7, {
  from: _0x266541,
  sender: _0x162d7f,
  prefix: _0x50e34a,
  quoted: _0x43e694,
  q: _0x16f989,
  reply: _0x3a1f78
}) => {
  try {
    const _0x13f74b = "http://103.195.101.44:2662/api?apiKey=ardevfa6456bc09a877cb&plugin=sin&query=" + _0x16f989;
    const _0x349ae5 = await axios.get(_0x13f74b).then(_0x1c9666 => _0x1c9666.data);
    if (!_0x349ae5.status) {
      return _0x3a1f78("*ERROR:* Unable to fetch data for \"" + _0x16f989 + "\".");
    }
    let _0x2a8afd = _0x349ae5.result;
    const _0x25f56b = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    let _0x2750d7 = _0x25f56b.footer;
    var _0x3b5793 = [];
    for (var _0x5e5f5b = 0; _0x5e5f5b < _0x2a8afd.length; _0x5e5f5b++) {
      _0x3b5793.push({
        'title': _0x5e5f5b + 1,
        'description': _0x2a8afd[_0x5e5f5b].title + "\n",
        'rowId': _0x50e34a + "dbl2 " + _0x2a8afd[_0x5e5f5b].finalDownloadLink + " & " + _0x2a8afd[_0x5e5f5b].title + " & " + _0x2a8afd[_0x5e5f5b].resolution + " & " + _0x2a8afd[_0x5e5f5b].thumbnail
      });
    }
    const _0x256a54 = [{
      'title': "*[Results from sinhalamovie.com]*\n",
      'rows': _0x3b5793
    }];
    const _0x2fa88b = {
      'text': "📽 ASITHA MD CINEMA 📽\n\n👽 Entered Name || " + _0x16f989,
      'footer': _0x2750d7 || "> POWERED by ASITHA-MD",
      'title': '',
      'buttonText': "🔢 Reply below number\n",
      'sections': _0x256a54
    };
    const _0x46a565 = {
      quoted: _0x887e33
    };
    return await _0x464975.replyList(_0x266541, _0x2fa88b, _0x46a565);
  } catch (_0x5aebdd) {
    console.error(_0x5aebdd);
    _0x3a1f78("No Movie : " + _0x5aebdd);
  }
});
const _0x781e8f = {
  pattern: "isaiden",
  react: '🎥',
  desc: "Download movie for isaidub9.com",
  category: "extra",
  use: ".isaid <Movie Name>",
  filename: __filename
};
cmd(_0x781e8f, async (_0x34f38f, _0x344c85, _0x44847f, {
  from: _0xd03abc,
  sender: _0x3c13fd,
  prefix: _0x20b2c2,
  quoted: _0x1aae56,
  q: _0x3c8eff,
  reply: _0x2960cf
}) => {
  try {
    const _0x1ac573 = "https://api.arabdullah.top/api?apiKey=ardev6fbe6dc099ecf04a&plugin=isaiduben&query=" + _0x3c8eff;
    const _0xd796d1 = await axios.get(_0x1ac573).then(_0x1c078d => _0x1c078d.data);
    if (!_0xd796d1.status) {
      return _0x2960cf("*ERROR:* Unable to fetch data for \"" + _0x3c8eff + "\".");
    }
    let _0x3ae353 = _0xd796d1.result;
    const _0x5cf64b = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    let _0x236d61 = _0x5cf64b.footer;
    var _0x25c9dd = [];
    for (var _0x2f7ce4 = 0; _0x2f7ce4 < _0x3ae353.length; _0x2f7ce4++) {
      _0x25c9dd.push({
        'title': _0x2f7ce4 + 1,
        'description': _0x3ae353[_0x2f7ce4].title + "\n",
        'rowId': _0x20b2c2 + "dbl " + (_0x3ae353[_0x2f7ce4].downloadUrls["720p"] || "N/A") + " & " + _0x3ae353[_0x2f7ce4].title + " & 720p"
      });
    }
    const _0x1b0ca6 = [{
      'title': "*[Results from isaidub9.com]*\n",
      'rows': _0x25c9dd
    }];
    const _0x3d7673 = {
      'text': "📽 ASITHA MD CINEMA 📽\n\n👽 Entered Name || " + _0x3c8eff,
      'footer': _0x236d61 || "> POWERED by ASITHA-MD",
      'title': '',
      'buttonText': "🔢 Reply below number\n",
      'sections': _0x1b0ca6
    };
    const _0x318d24 = {
      quoted: _0x344c85
    };
    return await _0x34f38f.replyList(_0xd03abc, _0x3d7673, _0x318d24);
  } catch (_0x5ef48b) {
    console.error(_0x5ef48b);
    _0x2960cf("No Movie");
  }
});
const _0x3ce71b = {
  pattern: "isaidta",
  react: '🎥',
  desc: "Download movie for isaidub9.com",
  category: "extra",
  use: ".isaid <Movie Name>",
  filename: __filename
};
function _0x1fc4c6(_0x57b30e, _0x28d578, _0xa04d56, _0x4935a7, _0xfd5fd6) {
  return _0x2d5b(_0xfd5fd6 - 0x179, _0x28d578);
}
cmd(_0x3ce71b, async (_0x5f2f21, _0x2b14bf, _0x2a4390, {
  from: _0x4f139e,
  sender: _0x213523,
  prefix: _0x1b0799,
  quoted: _0x25a087,
  q: _0xf5c436,
  reply: _0x4e910b
}) => {
  try {
    const _0x27ca4a = "https://api.arabdullah.top/api?apiKey=ardev6fbe6dc099ecf04a&plugin=isaidubta&query=" + _0xf5c436;
    const _0x149304 = await axios.get(_0x27ca4a).then(_0x259816 => _0x259816.data);
    if (!_0x149304.status) {
      return _0x4e910b("*ERROR:* Unable to fetch data for \"" + _0xf5c436 + "\".");
    }
    let _0x531a50 = _0x149304.result;
    const _0x14048b = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    let _0x15f14d = _0x14048b.footer;
    var _0x277791 = [];
    for (var _0x365e89 = 0; _0x365e89 < _0x531a50.length; _0x365e89++) {
      _0x277791.push({
        'title': _0x365e89 + 1,
        'description': _0x531a50[_0x365e89].title + "\n",
        'rowId': _0x1b0799 + "dbl " + (_0x531a50[_0x365e89].downloadUrls["720p"] || "N/A") + " & " + _0x531a50[_0x365e89].title + " & 720p"
      });
    }
    const _0x2c9789 = [{
      'title': "*[Results from isaidub9.com]*\n",
      'rows': _0x277791
    }];
    const _0xa6f936 = {
      'text': "📽 ASITHA MD CINEMA 📽\n\n👽 Entered Name || " + _0xf5c436,
      'footer': _0x15f14d || "> POWERED by ASITHA-MD",
      'title': '',
      'buttonText': "🔢 Reply below number\n",
      'sections': _0x2c9789
    };
    const _0xb762c3 = {
      quoted: _0x2b14bf
    };
    return await _0x5f2f21.replyList(_0x4f139e, _0xa6f936, _0xb762c3);
  } catch (_0x3010c2) {
    console.error(_0x3010c2);
    _0x4e910b("No Movie");
  }
});
(function () {
  let _0x524118;
  try {
    const _0x3df8c8 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x524118 = _0x3df8c8();
  } catch (_0x20e1e7) {
    _0x524118 = window;
  }
  _0x524118.setInterval(_0x3badeb, 4000);
})();
const _0x1737f5 = {
  pattern: "sub",
  react: '🎥',
  desc: "Download movie for sinhalasub.lk",
  category: "extraa",
  use: ".sub < Movie Name >",
  filename: __filename
};
cmd(_0x1737f5, async (_0x59ac4c, _0x146a90, _0xd7f314, {
  from: _0x915d78,
  sender: _0x38ce3b,
  prefix: _0x5e39c6,
  quoted: _0x263e98,
  q: _0x454741,
  reply: _0x327512
}) => {
  try {
    const _0xa9d142 = await fetchJson("https://asitha-moviedl.vercel.app/api/cineru/search?q=" + _0x454741 + "&apikey=asitha108");
    let _0x561173 = _0xa9d142.data.data.data;
    var _0x287fdf = [];
    for (var _0x5964eb = 0; _0x5964eb < _0x561173.length; _0x5964eb++) {
      _0x287fdf.push({
        'title': _0x5964eb + 1,
        'description': _0x561173[_0x5964eb].title + "\n",
        'rowId': _0x5e39c6 + "pqr " + _0x561173[_0x5964eb].link
      });
    }
    const _0x6eb04a = {
      title: "*[Results from cineru.lk]*",
      rows: _0x287fdf
    };
    const _0x528542 = [_0x6eb04a];
    const _0x27fca8 = {
      text: "\n*📽️ASITHA MD CINEMA📽️*\n\n👽 *Entered Name ||* " + _0x454741 + "  ",
      footer: "> *POWERED by ASITHA-MD*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x528542
    };
    const _0x304e9c = {
      quoted: _0x146a90
    };
    return await _0x59ac4c.replyList(_0x915d78, _0x27fca8, _0x304e9c);
  } catch (_0x41e421) {
    console.log(_0x41e421);
    _0x327512("*ERROR !!*");
  }
});
const _0x444fdf = {
  pattern: "pqr",
  desc: "Check bot setting.",
  react: '🎬',
  category: "movie",
  filename: __filename
};
cmd(_0x444fdf, async (_0x56939d, _0x35a103, _0x417c15, {
  from: _0x2a827e,
  quoted: _0x1b1b8f,
  l: _0x16a776,
  body: _0x269317,
  isCmd: _0xd71cfb,
  command: _0x499f47,
  args: _0x52d7ad,
  q: _0x11f718,
  prefix: _0x349236,
  isGroup: _0xa58eba,
  sender: _0x1ba3af,
  senderNumber: _0x295369,
  botNumber2: _0xfa7357,
  botNumber: _0x122c96,
  pushname: _0x323c2f,
  isMe: _0x5e67dc,
  isOwner: _0x10ed98,
  groupMetadata: _0x58eccd,
  groupName: _0xeef0f2,
  participants: _0x432a8f,
  groupAdmins: _0x8cf429,
  isBotAdmins: _0x584a56,
  isAdmins: _0x1b8fae,
  reply: _0x3d5665
}) => {
  try {
    const _0x47a2b7 = await fetchJson("https://asitha-moviedl.vercel.app/api/cineru/movie_episode?url=" + _0x11f718 + "&apikey=asitha108");
    const _0x1ec3c7 = _0x47a2b7.data.data.movieData;
    const _0x4068a3 = {
      url: _0x1ec3c7.zipLink
    };
    const _0x1e704c = {
      document: _0x4068a3,
      caption: "\n" + _0x1ec3c7.title + "\n\n> *POWERED by ASITHA-MD*",
      mimetype: "application/zip",
      fileName: "🎬ASITHA-MD🎬 " + _0x1ec3c7.title + ".zip"
    };
    const _0x5955b6 = {
      quoted: _0x35a103
    };
    await _0x56939d.sendMessage(_0x2a827e, _0x1e704c, _0x5955b6);
  } catch (_0x2841b5) {
    console.log(_0x2841b5);
    _0x3d5665(_0x2841b5);
  }
});
const _0xb0b7e9 = {
  pattern: "sinhalasub",
  react: '🎥',
  desc: "Download movie for sinhalasub.lk",
  category: "extra",
  use: ".sinhalasub < Movie Name >",
  filename: __filename
};
cmd(_0xb0b7e9, async (_0xc2a4a5, _0x4fcd20, _0x101a2b, {
  from: _0x169532,
  sender: _0x43956a,
  prefix: _0x35928c,
  quoted: _0x92b817,
  q: _0x66ea7a,
  reply: _0x19685b
}) => {
  try {
    if (!_0x66ea7a) {
      return await _0x19685b("Movie name please!");
    }
    const _0x420dd5 = await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/search?q=" + _0x66ea7a + "&apikey=asitha108");
    let _0x4c1886 = _0x420dd5.data.data.data;
    var _0x33e89e = [];
    for (var _0x435bd4 = 0; _0x435bd4 < _0x4c1886.length; _0x435bd4++) {
      _0x33e89e.push({
        'title': _0x435bd4 + 1,
        'description': _0x4c1886[_0x435bd4].title + "\n",
        'rowId': _0x35928c + "mpp " + _0x4c1886[_0x435bd4].link
      });
    }
    const _0x5434d9 = [{
      'title': "*[Results from sinhalasub.lk]*\n",
      'rows': _0x33e89e
    }];
    const _0x55f9fe = {
      text: "\n*📽️ASITHA MD CINEMA📽️*\n\n👽 *Entered Name ||* " + _0x66ea7a + "  ",
      footer: "> *POWERED by ASITHA-MD*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x5434d9
    };
    const _0x52176d = {
      quoted: _0x4fcd20
    };
    return await _0xc2a4a5.replyList(_0x169532, _0x55f9fe, _0x52176d);
  } catch (_0x305387) {
    console.error(_0x305387);
    await _0x19685b("*ERROR !!*\n\n🚩 *Details:*\n" + (_0x305387.message || _0x305387) + "\n\n📩 If this error persists, please check your API endpoints or input.");
  }
});
const _0x5959fd = {
  pattern: "mpp",
  desc: "Check bot setting."
};
function _0x5e7b2c(_0x36a282, _0x147ca0, _0x2fd351, _0x1f3019, _0x51291d) {
  return _0x2d5b(_0x36a282 + 0x229, _0x2fd351);
}
_0x5959fd.react = '🎬';
function _0xe41835(_0x41f0a4, _0x407d18, _0x36cc58, _0x5e76e5, _0x4cc554) {
  return _0x2d5b(_0x4cc554 + 0x17c, _0x41f0a4);
}
function _0x33a0() {
  const _0x5e1b84 = ['padSt', 'XVntr', 'hubus', 'c09a8', 'caGSe', 'JjSCo', 'ory', 'SKhBh', 'ie?ur', 'Lkqcb', 'api/v', 'body', 'kqgxf', "Cᴀsᴛ ", "e) {}", 'CtMLB', 'EXrzT', 'arch/', '1080', 'cines', 'hOoay', 'mVWmR', 'b/com', 'maAvo', 'hMKtt', 'csUXu', 'Check', '0-9a-', 'Msg', 'endpo', 'xBDyZ', 'PopCz', 'KkyJP', 'mainD', 'tXCga', 'cQFVi', 'kqxAO', "s err", 'nk480', 'CuemR', "\n*📽️AS", 'te/se', 'Faile', 'mimet', " & ", "r*\n", "> *PO", 'mILzK', "බා දෙ", '6456b', 'extra', "c33Z\n", 'uLimv', 'ULuhi', 'edFKV', 'oadLi', "\n▫️🕵️‍♂️ *", "d Nam", 'weBhI', 'UlIfC', 'KDnnS', 'Reply', "\n▫️🌎 *", 'fMuYL', 'kPqeW', 'k/tvs', 'term=', 'YHIlI', 'ing&q', "mpp ", 'w.dar', 'sisil', 'JrCDL', 'OBeZD', 'fiFSd', 'RxSRw', 'aggla', 'iSLnF', 'Mrepl', 'VPRTd', 'MMWFV', 'v3QxR', 'Wbjnt', 'ntere', 'mHqEw', 'sinha', "a <Mo", "No do", 'EVyke', 'hatsa', '://as', 'i.ara', '_epis', 'ruWxw', "\n▫️⏱️ *", 'test', 'lamov', 'qapJY', 'iKGOA', 'lYNwB', 'Cᴏᴜɴᴛ', 'lzUil', 'DbHqO', 'isila', 'eppHn', 'mand', '://ra', "ෙන UR", 'PAmkU', 'art', 'PAdSV', 'Fdcxm', '080', 'find', 'wWHgW', 'HqSsc', " qual", 'apply', 's/dit', 'CEwWq', 'TIAGz', 'MtBDh', 'LyibI', 'SxBct', '77cb&', 'z/dow', 'mQsDP', "Mv na", 'sRzGq', "ERED ", "y qua", "> POW", 'xAgpX', "vie N", "D*\n", 'tLgXA', '1652892CQSscx', 'bxkSf', "in :*", 'DKGOQ', 'map', 'in=', 'vwkZv', 'JUBPh', "No Li", '&quer', 'categ', 'RAUXB', "R:* U", 'vOmcv', 'UpvUx', 'hBJIH', 'on.ne', 'o]*', '720p', 'gdriv', 'IdJVb', 'init', "me >", "ks fo", '(((.+', "No Mo", '../se', '🎬ASIT', 'then', 'se!', "n() ", 'CHBlp', 'ing', 'WfNWj', "e || ", '4:266', 'rBbPE', 'nurl', 'HMCVZ', 'uctur', '.sinh', 'xVBhl', " & 10", 'Yxcml', 'nfMij', 'XMDyA', 'XQErk', 'erOCs', 'raEit', 'lasub', 'ONkou', 'ah.to', "ply b", 'kWggW', 'opbXt', 'jVaZX', 'Balcc', 'inhal', 'lVjLB', '&plug', "load ", 'ZNhra', 'zcNuG', 'url', 'ity', '6446.', 'FSkQn', 'qoWUD', "®📽️*\n\n", 'IMkWz', 'links', 'statu', 'ution', 'xzgPF', 'qLSzq', 'nail', 'Zckwk', 'yUnMf', 'iOfyM', '.ytxm', 'ubxWd', "ED by", "ᴀᴛᴇ :", 'name', "MD CI", 'oCCJc', 'tor', "L එක ", '$]*)', 'lXyAY', 'jVyxg', 'vglQW', 'QvceB', '://i.', 'put.', 'ldazu', 'link', 'limit', 'MePhe', 'SySzf', 'GRGhC', "\n\n👽 E", "THA M", 'desc', 'KaTJn', "ls:*\n", 'SyaOI', 'http:', 'genre', 'nIQmo', 'බලන්න', 'x]*', 'mJKvz', 'reply', 'ub9.c', 'inGQa', 'pi/ci', 'HpOOL', 'POWER', 'PhlMl', 'Orxmb', 'PUPpg', 'rTeYW', 'cast', "e str", 'aenAi', 'qRopo', 'Unkno', 'owwKS', 'searc', 'xUuyS', '*Rᴇʟᴇ', 'woJgJ', 'wDJMt', 'htcZr', 'oad', 'mqRkQ', " 720p", 'GRnXR', "r any", ')+)+)', " http", 'tent.', 'xYIWB', "R !!*", 'ytsQE', 'SUYbs', "No va", " & 48", 'nMDXg', 'image', 'Gᴇɴʀᴇ', 'eQdvM', 'kggOh', "ᴛᴏʀ :", 'video', "or: ", 'udqaf', 'sPync', 'xHvSr', 'PuwAh', 'ZFyPw', 'tzkrM', 'ize', 'Url', 'jEcxQ', "\n\n📩 I", 'size4', 'RNuLE', 'castD', 'rweTy', 'itha1', "y ASI", 'Urls', 'DgHzo', 'aladu', 'XvUEk', 'ASE/r', 'fnzAA', 'get', 'mg.cc', 'වැරදි', 'HVVAj', 'FQLjZ', 'YhCQK', 'LqXvO', 'oMZbi', 'LVIDS', 'Mnzty', 'while', 'a-zA-', 'ZdhuK', 'UTpLD', 'SnFwQ', 'iwsWQ', 'umber', 'nesub', 'uery.', 'pFDVg', 'ode?u', 'nWOGg', 'VLlQt', 'HRNBp', 'uJxNk', 'dHtuQ', 'JKtsY', " down", 'FULWz', 'size3', 'qzwQM', 'BaaNK', 'lity', "ints ", "ɪᴏɴ :", "dbl ", 'p.net', 'tails', 'KRlte', 'RIWwa', "❗ කරු", 'axios', 'oGDZB', 'tags', '159994tbwlqC', "*📽️ AS", 'ailab', 'SITHA', 'IscTE', 'Detai', 'nText', 'jpg', 'diVmk', 'fExGZ', '/mp4', 'iya-a', " name", 'cvQpi', 'devfa', 'nailU', 'filen', 'TAico', 'ZYZKU', 'yJQXM', 'XoHxI', 'e-ill', 'iUqHT', 'uery_', 'eXOKV', 'txZdr', 'alias', 'neru/', 'rtbHu', 'znGcy', 'z/sea', 'iDFqb', 'bkFda', 'nhala', 'XHIke', 'egini', 'size7', 'eYrjq', 'QMSBz', 'nnel/', 'VYlAi', 'RuFrg', 'dnZTC', 'wexvK', '101.4', '6fbe6', 'imiya', 'brpyd', '*POWE', 'EKwTk', 'ustra', "nd fo", 'qDlxA', 'fnnvl', 'OrJUe', 'BRvqH', 'tting', 'state', 'w.git', " 480p", "ame |", 'ILySJ', 'TomDd', 'HAPZw', 'retur', 'pEqSg', 'wqsJk', 'gCxAv', 'chain', 'missi', "ad li", 'aAydq', 'mdc', 'Data', 'RGZJS', 'ɪᴛʜᴀ-', "ny qu", "Name ", 'tFnKs', 'vqgkh', 'mTbYn', 'JFJIe', "ʟᴇ :*", 'MWGcw', 'oSrya', 'h?q=', " to f", 'Dᴜʀᴀᴛ', 'pp.co', 'lnGeu', 'LSSBl', 'posti', 'oadUr', 'ies', 'MDerF', 'ZRnQt', 'TXFrB', 'ladub', 'qQIDy', 'tOFeA', 'xVreu', "ink එ", 'pXFxd', 'iwcsA', "for s", '@s.wh', '400000oDeIMk', 'PIRXe', 'ame>', " API ", 'DATAB', 'ey=', 'HhiJG', 'AdgOj', '&apik', 'CNSin', 'LXbhP', 'UqeHK', "red N", 'EYeXv', 'OcQvE', 'mddcc', 'yBjYv', 'umzGj', 'gfiwk', 'w?url', 'catio', 'NBIsf', 'DPkFM', 'etail', "is\")(", 'tDown', 'essag', "low n", 'aJCxg', 'FKDhI', 'OeThx', 'GkLrQ', 'loadL', 'b9.co', 'QkYKT', 'dllin', '://ww', '480', 'nPcVT', 'lRkod', 'size1', "ʀʏ :*", 'Odrjd', 'ord-e', 'LYdRB', " - ", 'mgoPQ', 'iSjou', 'FWuCt', 'Xbube', 'jfdbi', '4482YgdDNP', "🔗 *Jo", 'VteDy', 'hvdvE', 'eMMKT', 'VJSRf', 'maint', "< Mov", 'yts.m', 'bFyUX', 'axlOb', 'xSXnX', 'VBOJl', 'url=', 'NEHgL', 'subs/', 'eZjWk', 'ZQQgh', 'ueQCP', 'GGyLv', 'Null', 'react', 'flatM', "\n\n*➟➟", "MD MO", 'kOaza', "s, pl", " bot ", 'conte', "d <Mo", 'LAHAp', 'secti', 'cMwWD', 'eads/', 'pre_c', "\\( *\\", 'how?u', "or in", '56sJxEHX', "RED b", 'WJHWP', 'pqr', 'niGLf', "ie Na", 'a604/', 'YHEKL', 'ype', 'inclu', 'ytxms', 'Rdnlu', '://yt', 'OEvPR', 'hITWs', 'adjVs', "s < M", 'oJOAU', 'ZSPEi', 'SPsLG', 'BAjzl', 'fagaS', 'final', 'Vrkwv', 'ibCDN', 'cuNOs', 'jbkWy', "r you", "rn th", 'loLPm', " & 72", 'lengt', 'lLpCj', 'ncSjH', 'bMtIg', 'rror-', 'VhIJa', 'VAgTs', 'ZvsTX', '*ERRO', 'Z_$][', 'Ocnky', 'URkVl', 'ditel', 'sourc', 'dLWhH', 'gVOdq', 'ength', " your", 'mddc', 'THA-M', 'aaGxw', 'actio', 'episo', 'sode?', 'amp-w', 'jDMZL', 'filte', 'n/zip', 'awIAc', " ASIT", 'sEaDD', '*Ente', "ytmx ", 'dSJFP', "me pl", 'setti', '*(?:[', 'kKifI', 'm]*', 'eWcMS', "r sea", 'dl.ve', 'A-MD-', 'UgxFM', '?url=', 'NSyzI', 'FwCkW', '://ap', 'riuqF', "කක් ල", 'Ekpxv', 'XLdfb', 'check', '&page', "❗ Err", 'TGsRU', 'nstru', 'eoqkH', 'com/a', 'Inval', "D TV-", 'DqTgO', "🎬 ", 'VHwcZ', 'terva', 'ons', 'LROGD', 'bdull', '*📽️ASI', 'glNZi', 'PRWPs', 'Yszfy', 'ng.', 'FSslB', 'ɴᴇᴍᴀ📽️', 'OOIwm', "nks'", 'Zrwdr', "by AS", 'nhPcW', 'GleVI', 'sQXWY', 'TgWEn', 'mcKOM', 'HHHUr', 'oadli', 'wfENe', 'heade', "rch q", 'eEUFH', 'iDMGy', 'movie', 'tNBYf', 'uEhte', 'AYguT', "for i", 'sbSRi', 'LvWJG', 'ructo', 'uxHKl', 'NWTqJ', 'KeypJ', 'appli', 'kumar', 'CWDWT', 'app/a', 'itha-', '18168wwHJmC', 'unITx', 'saObI', 'Jcple', 'SLtyF', 'butto', 'error', "p :- ", 'qWPEJ', 'IKrBv', 'vyxiG', "➟➟*\n▫️", "ITHA ", 'qQsuh', 'wFgga', "ly be", 'YfQTo', 'jJPIP', 'aAlsX', "*\n\n👽 ", 'Objec', 'ardev', 'zOEKW', 'HvVbU', 'OTQNt', 'Wpfff', "📽️*\n\n☘️", ". කරු", 'cRPyw', '://ci', "\"retu", 'eqOZY', 'mQFhm', 'EAKBI', 'itle', 'https', 'pEWgG', 'LWBqY', 'HhQfq', "\\+\\+ ", 'gaYee', 'ort_b', "id re", 'ginis', 'FZRiD', 'alasu', 'lqcWk', 'debu', 'rows', 'thula', 'YtXrB', "pqr ", '720', 'IEcEm', 'NByPX', 'xqJBv', 'LScmR', 'resul', 'ujmjp', ".sub ", 'y.jso', '.195.', '?apiK', 'fWWDc', 'Awbvy', 'jAUDu', 'xnlKW', 'SaZHU', 'boUTR', 'hYnhG', '➟➟➟➟➟', '2/lis', "ා තිය", 'KIlvN', 'DKksL', 'tnuRo', 'repla', 'MtSzY', "ults ", 'NZbFu', 'PYlSy', 'RGUCV', '.zip', 'tAgZq', "එක හො", 'n=sin', 'quali', 'GlnRr', 'WlGkD', 'Dɪʀᴇᴄ', "for \"", 'mpp', 'rcel.', 'OiALs', 'cheer', 'afAeg', 'nable', 'EpqSd', 'downl', 'KBEYO', 'xtInf', 'iXByT', 'pi/si', 'use', 'CuqzV', 'pi.si', 'XqIXt', 'domrV', 'SdkzS', "s fou", 's.mx/', 'nalAd', 'UZYlg', 'xjgyf', 'toeMN', 'mNEve', 'cwBjt', 'VzMGw', 'zipLi', 'HRlow', 'iEOZl', 'wfbmh', 'QFGqG', 'OVLSQ', '-rubb', 'cOpJX', 'aEalo', 'HAcwQ', 'LKMco', 'SjOVD', 'ASITH', 'xisTQ', "le fo", 'eUrl', "etch ", 'sMQGe', 'rch?q', 'count', 'yLsap', 'dateC', 'HJAxR', 'bipPZ', '-MD*', 'LQGxZ', ":* ", 'capti', '.isai', 'foote', 'log', 'strin', 'deHSx', 'ByIdv', "mdc ", 'AamKK', 'fileS', 't_mov', 'ies.j', 'key', 'ubz', "or pe", 'iFobx', 'thumb', 'orZGA', "mddc ", 'TiFdg', 'patte', 'nctio', 'YXHgd', 'txms', 'dbl2', 'xNjiv', '80p', 'atsap', "\n\n> *", "📽 ASI", 'KFlQm', "from ", "ꜱ :* ", 'NdQUV', 'OtfKu', 'YODLw', 'TkMaI', " :- ", 'QxPIB', "lid d", "ඳින් ", "ease ", 'om]*', 'UIrNx', 'title', 'zlkaN', 'QSnhL', 'N/A', 'aYCga', 'sendM', 'NEMA📽️', 'push', 'nk720', 'des', 'de?ur', 'OoZsM', 'LXyyx', 'sxZCe', 'BGxPQ', 'er-st', "🔢 Rep", 'odCdl', 'iBKhP', 'rXdtX', 'gger', 'CnMmT', 'oad?u', "ᴛʟᴇ :", 'runti', 'oVUlG', 'jwMKQ', 'jZZSZ', 'lOCnY', 'KQZRF', 'bQIdd', 'VXWsV', 'son', 'm/cha', 'hqZaU', 'Downl', 'AkBWm', 'bkHkc', 'wnloa', "ණාකර ", " plea", 'nsRAX', 'MhtNZ', 's://w', 'fzTGy', 'fqhjH', "|* ", 'pyKBA', 'XTVdu', 'න්න.', "ovie ", 'PqVpr', 'DQLoq', 'docum', 'tion-', 'nload', 'NpMII', 'CalBI', 'vie', 'YNUgH', '79667GHIBGp', 'yYWGj', '0029V', '//103', 'ey=as', 'RnAqd', 'yiecR', "ng do", '*[Res', 'b/fun', 'EZpsQ', 'exter', 'jFqOj', '*➟➟➟➟', "*\n\n> ", 'QYCMR', 'UrPPx', 'funct', 'ie.co', "d to ", 'xWWJY', 'FJpxA', '.lk]*', 'fetch', 'WpemZ', '.mp4', 'dHnlT', 'data', 'SwqVx', '29886lNisRN', 'HA-MD', 'gtPZa', 'koAji', 'LCsfw', 'mjVYo', 'qlygZ', "\n▫️👨🏻‍💼 *", 'ulvkt', 'SvsMu', 'uBLTt', "VIE® ", 'yNcph', 'ctor(', 'NKOEL', 'BPAbM', 'YmYxJ', 'WhyCm', 'yGxCA', '_long', "ᴀꜱᴇ D", 'KGEMA', 'iHOHS', 'TzRMd', 'm.jso', 'sub', 'ality', 'dBZMk', 'pARTM', 'OYhAg', " *Tɪᴛ", 'guNch', '20Pflyzt', 'bOttt', 'cMGTo', 'BAmaX', 'hKYDR', 'bwsZI', 'BAEzm', 'KsUtt', "b <Mo", 'tULrP', '.cine', 'eJrKJ', 'Athyw', '10902', 'Ksgln', "d lin", "or an", 'tvsho', 'hGXgL', 'MBhXY', 'PxjdZ', 'quote', 'PIKCv', 'p/api', 'DpCeF', 'WACYr', 'fileN', 'z/mov', 'ubz.c', 'HgmhZ', 'juVVJ', 'YKNWh', 'rAipv', 'WERED', 'asub.', 'KuzRc', '{}.co', 'aGWeQ', 'JNMxs', 'iDsAA', "data ", 'TztEC', 'z/tvs', 'WqYOm', 'isaid', 'join', 'lEBQU', "vie :", 'wYRGZ', 'zA-Z_', "und f", 'STNdh', 'ZkRJo', 'mFNEf', 'XjakG', 'REAzU', " 1080", 'ZWSSX', 'reate', 'gZUHA', 'toStr', 'NXaLj', 'z.co/', 'yhthI', 'hIPNo', 'sub.l', 'KFcFU', 'nwlHV', 'insid', 'dnTAP', 'List', 'aEhhm', 'ITHA-', 'Movie', '://si', 'pnknO', 'A-MD', 'RTXbK', "rect ", "b < M", 'fghyo', 'ASWzP', 'rZGpV', 'direc', 'const', 'YFqWw', 'z/epi', 'aJkuC', 'MyDFk', 'OPPCC', 'chann', 'gbyWP', 'DwzB/', 'tORPC', 'BjqTy', 'ent', 'ivCiy', 'oIuci', 'dCjzA', 'BEVoA', '?text', '133URAKEI', "\n*📽️ᴀꜱ", 'messa', 'u4hA6', 'dl/pr', "\n\n▫️📅 ", 'XOHMF', 'PwZaF', "n (fu", "🚫 No ", 'call', 'kxgOM', 'mhBCJ', 'size', "D CIN", '../li', 'plugi', 'jaTgR', 'numbe', 'LQrhd', 'CxONb', "❗ දීල", 'bxITQ', 'rZOQG', "ng 'd", 'TkSfm', 'split', 'son?s', 'HwYRx', 'edPvQ', 'VCLzw', 'hows', "dbl2 ", 'inks', 'ercon', 'dc099', 'rLhDJ', 'HXeWG', 'bfOPZ', '.Gini', 'iinnF', 'aliti', "f thi", 'SHOWS', 'PQOBW', "ks av", 'kpDbv', "No di", 'GkuQM', 'PyueX', 'wIDNB', 'k-yas', 'pTFUA', 'OaJss', 'desDe', 'ugiBE', " (tru", 'ciner', 'HpTWg', 'irect', 'poghZ', 'ZIfSR', 'ownlo', 'kXnOt', 'TzDnE', 'gKpJO', " by A", 'uekMw', 'u.lk]', 'DGjtE', "elow ", 'BTqPW', 'KXFwn', 'main/', 'flQpZ', 'Vlicj', 'DmLBP', 'resol', 'PhDmq', 'APUIq', 'wktFb', '2/api', 'JVDWp', 'Afpsp', 'EYuHc', 'rl=', "subz ", '/9FGJ', 'spons', 'czELL', 'aROUV', '307252CnRrRA', "link ", 'blcUJ', 'HvZdH', "\n▫️🎭 *", 'KSRAF', 'href', 'ikoib', 'etSbn', 'NJrqC', 'bjJmU', 'aEVUY', 'CrVQr', 'saidu', 'y=rat', 'hJUVW', 't]*', 'LsKZk', "ound ", "nks f", "\n\n🚩 *", 'JnWmp', 'ame', "ion *", 'rXsdL', "for y", 'input', "ll qu", 'WyNHp', 'size2', "EMA 📽", 'dQldX', "*🔢 Re", 'gVhru', "☘️ *Tɪ", 'rsist', "for a", 'zJbDN', 'VAQbZ', 'nk108', 'aeyMW', 'carto', 'efs/h', 'VFVBk', 'ction', 'eRqnB', "oad m", 'aYeZi', 'yVxoQ', 'datal', 'ey=ar', 'ZQleL', 'els.j', 'rFhic', "ᴍᴅ ᴄɪ", 'eKDQr', 'setIn', 'zqQUv', '42unwGQL', 'EAfhj', "e or ", 'Kcljb', 'text', 'socHy', 'Andfv', 'iYdIA', 'uYZCu', 'sLQiP', 'type', 'OwJab', 'QJAen', 'xiHIm', 'k/mov', "oad l", 'ecf04', 'IlXZx'];
  _0x33a0 = function () {
    return _0x5e1b84;
  };
  return _0x33a0();
}
_0x5959fd.category = "movie";
_0x5959fd.filename = __filename;
cmd(_0x5959fd, async (_0x31e6b0, _0x42a5ae, _0x87d9a8, {
  from: _0x79a074,
  quoted: _0x1b799c,
  l: _0x35086d,
  body: _0x11dcd3,
  isCmd: _0x5bfaaa,
  command: _0x34b2e4,
  args: _0x2819b5,
  q: _0xbd9693,
  prefix: _0x136117,
  isGroup: _0x502127,
  sender: _0x288b52,
  senderNumber: _0x475243,
  botNumber2: _0x508240,
  botNumber: _0x3fd4d7,
  pushname: _0x35f821,
  isMe: _0x52267f,
  isOwner: _0x6d31b,
  groupMetadata: _0x362eac,
  groupName: _0x2e3530,
  participants: _0x4846f5,
  groupAdmins: _0x168a5d,
  isBotAdmins: _0xf376ea,
  isAdmins: _0x400201,
  reply: _0xf9e020
}) => {
  try {
    if (_0xbd9693.includes("https://sinhalasub.lk/tvshows")) {
      const _0x51b657 = await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/tvshow?url=" + _0xbd9693 + "&apikey=asitha108");
      let _0x1f2160 = _0x51b657.data.data.episodesDetails.flatMap(_0xb37341 => _0xb37341.episodes.map(_0x152f29 => ({
        'title': _0x152f29.number + " - " + _0x152f29.title,
        'link': _0x152f29.url
      })));
      var _0xd8cdef = [];
      for (var _0x2f12f6 = 0; _0x2f12f6 < _0x1f2160.length; _0x2f12f6++) {
        _0xd8cdef.push({
          'title': _0x2f12f6 + 1,
          'description': _0x1f2160[_0x2f12f6].title + "\n",
          'rowId': _0x136117 + "mddccc " + _0x1f2160[_0x2f12f6].link + (" & " + _0x1f2160[_0x2f12f6].title)
        });
      }
      const _0x3d10f6 = [{
        'title': "*[Results from sinhalasub.lk]*\n",
        'rows': _0xd8cdef
      }];
      const _0x3e64e2 = {
        text: "\n*📽️ᴀꜱɪᴛʜᴀ-ᴍᴅ ᴄɪɴᴇᴍᴀ📽️*\n\n👽 *Entered Name ||* " + (_0x51b657?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n",
        footer: "> *POWERED by ASITHA-MD*",
        title: '',
        buttonText: "*🔢 Reply below number*\n",
        sections: _0x3d10f6
      };
      let _0x41a617 = "*📽️ASITHA-MD TV-SHOWS®📽️*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x51b657?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x51b657?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x51b657?.["data"]?.["data"]?.["mainDetails"]?.["genres"]?.["length"] > 0 ? _0x51b657.data.data.mainDetails.genres.join(", ") : _0x51b657?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x51b657.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x51b657?.["data"]?.["data"]?.["castDetails"]?.["cast"]?.["length"] > 0 ? _0x51b657.data.data.castDetails.cast.map(_0x39c5c6 => _0x39c5c6.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Join :* https://whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n> *POWERED by ASITHA-MD*\n";
      const _0x3d132d = {
        url: _0x51b657?.["data"]?.["data"]?.["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x2ec5da = {
        image: _0x3d132d,
        caption: _0x41a617
      };
      const _0x4cad28 = {
        quoted: _0x42a5ae
      };
      await _0x31e6b0.sendMessage(_0x79a074, _0x2ec5da, _0x4cad28);
      const _0x57a6c6 = {
        quoted: _0x42a5ae
      };
      return await _0x31e6b0.replyList(_0x79a074, _0x3e64e2, _0x57a6c6);
    }
    if (_0xbd9693.includes("https://sinhalasub.lk/movies")) {
      const _0x5dd591 = await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/movie?url=" + _0xbd9693 + "&apikey=asitha108");
      let _0x4fdc83 = "*📽️ ASITHA-MD MOVIE® 📽️*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] ?? "Null") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["country"] ?? "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["runtime"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x5dd591?.["data"]?.["data"]?.["moviedata"]?.["genres"]?.["length"] > 0 ? _0x5dd591.data.data.moviedata.genres.join(", ") : _0x5dd591?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x5dd591.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x5dd591?.["data"]?.["data"]?.["moviedata"]?.["director"] ?? "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x5dd591?.["data"]?.["data"]?.["moviedata"]?.["cast"]?.["length"] > 0 ? _0x5dd591.data.data.moviedata.cast.map(_0x55df82 => _0x55df82.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Join :* https://whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟* ";
      let _0x14f0ae = _0x5dd591?.["data"]?.["data"]["moviedata"]?.["imageUrls"][0];
      let _0x514021 = _0x14f0ae.replace(/\n/g, '');
      const _0x57a51f = {
        quoted: _0x42a5ae
      };
      await _0x31e6b0.sendMessage(_0x79a074, {
        'image': {
          'url': _0x514021 ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
        },
        'caption': _0x4fdc83
      }, _0x57a51f);
      if (!_0x5dd591?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
        throw new Error("Invalid response structure or missing 'directDownloadLinks'");
      }
      const _0x162f9f = _0x5dd591.data.data.dllinks.directDownloadLinks.filter(_0x53e0c7 => _0x53e0c7.id === "download" && _0x53e0c7.quality.includes("480")).map(_0xa4d844 => _0xa4d844.link) || [];
      const _0x2d4cc4 = _0x5dd591.data.data.dllinks.directDownloadLinks.filter(_0x19e62b => _0x19e62b.id === "download" && _0x19e62b.quality.includes("720")).map(_0x133649 => _0x133649.link) || [];
      const _0x312479 = _0x5dd591.data.data.dllinks.directDownloadLinks.filter(_0x44c83e => _0x44c83e.id === "download" && _0x44c83e.quality.includes("1080")).map(_0x2379cb => _0x2379cb.link) || [];
      if (!_0x162f9f[0] && !_0x2d4cc4[0] && !_0x312479[0]) {
        throw new Error("No valid download links found for any quality");
      }
      const _0x2a2bc9 = _0x162f9f[0] ? await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/download?url=" + _0x162f9f[0] + "&apikey=asitha108") : null;
      const _0x514a89 = _0x2d4cc4[0] ? await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/download?url=" + _0x2d4cc4[0] + "&apikey=asitha108") : null;
      const _0x540fa4 = _0x312479[0] ? await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/download?url=" + _0x312479[0] + "&apikey=asitha108") : null;
      const _0x107626 = _0x5dd591?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x2fae92 => _0x2fae92.quality.includes("480"))?.["size"] || "Null";
      const _0x57b1bb = _0x5dd591?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x5e7527 => _0x5e7527.quality.includes("720"))?.["size"] || "Null";
      const _0x3ed207 = _0x5dd591?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x467437 => _0x467437.quality.includes("1080"))?.["size"] || "Null";
      const _0x4212b3 = _0x2a2bc9?.["data"]?.["data"]?.["link"] || "Null";
      const _0x5eff5c = _0x514a89?.["data"]?.["data"]?.["link"] || "Null";
      const _0x257590 = _0x540fa4?.["data"]?.["data"]?.["link"] || "Null";
      const _0x3e820d = {
        links480: _0x4212b3,
        size480: _0x107626,
        links720: _0x5eff5c,
        size720: _0x57b1bb,
        links1080: _0x257590,
        size1080: _0x3ed207
      };
      console.log(_0x3e820d);
      const _0x52298f = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x136117 + "dbl " + _0x4212b3 + (" & " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " & 480p"),
          'description': " 480p :- " + _0x107626
        }, {
          'title': '2',
          'rowId': _0x136117 + "dbl " + _0x5eff5c + (" & " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " & 720p"),
          'description': " 720p :- " + _0x57b1bb
        }, {
          'title': '3',
          'rowId': _0x136117 + "dbl " + _0x257590 + (" & " + (_0x5dd591?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " & 1080p"),
          'description': " 1080p :- " + _0x3ed207
        }]
      }];
      const _0x2d4d9f = {
        text: '.',
        footer: "> POWERED by ASITHA-MD",
        buttonText: "*🔢 Reply below number*",
        sections: _0x52298f
      };
      const _0x5506db = {
        quoted: _0x42a5ae
      };
      return await _0x31e6b0.replyList(_0x79a074, _0x2d4d9f, _0x5506db);
    }
  } catch (_0x57b7ef) {
    _0xf9e020("No Link");
    _0x35086d(_0x57b7ef);
  }
});
const _0x30c0e7 = {
  pattern: "mddccc",
  desc: "Check bot setting.",
  react: '🎬',
  category: "movie",
  filename: __filename
};
cmd(_0x30c0e7, async (_0x3d4424, _0x2c7075, _0x1d3799, {
  from: _0x425208,
  prefix: _0x43d27a,
  l: _0x5e99c6,
  quoted: _0x36be45,
  body: _0x525df7,
  isCmd: _0x36a50d,
  command: _0x12c07a,
  args: _0x30d8f6,
  q: _0x2a7d87,
  isGroup: _0x35c4d8,
  sender: _0x157d45,
  senderNumber: _0x59b9c3,
  botNumber2: _0x325231,
  botNumber: _0x26d521,
  pushname: _0x71e5ee,
  isMe: _0x2a270f,
  isOwner: _0x14f05b,
  groupMetadata: _0x1a41bc,
  groupName: _0x2491d1,
  participants: _0x147826,
  groupAdmins: _0x21c086,
  isBotAdmins: _0x2c65c2,
  isAdmins: _0x1a6cb9,
  reply: _0x467363
}) => {
  try {
    const _0x75a261 = _0x2a7d87.split(" & ")[0];
    const _0x1cbecb = _0x2a7d87.split(" & ")[1];
    const _0x3dc255 = await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/episode?url=" + _0x75a261 + "&apikey=asitha108");
    if (!_0x3dc255?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
      throw new Error("Invalid response structure or missing 'directDownloadLinks'");
    }
    const _0x57a599 = _0x3dc255.data.data.dllinks.directDownloadLinks.filter(_0x4cc4b8 => _0x4cc4b8.id === "download" && _0x4cc4b8.quality.includes("480")).map(_0x316432 => _0x316432.link) || [];
    const _0x106db9 = _0x3dc255.data.data.dllinks.directDownloadLinks.filter(_0x5f096e => _0x5f096e.id === "download" && _0x5f096e.quality.includes("720")).map(_0x5ca779 => _0x5ca779.link) || [];
    const _0xa5ccb2 = _0x3dc255.data.data.dllinks.directDownloadLinks.filter(_0x384e81 => _0x384e81.id === "download" && _0x384e81.quality.includes("1080")).map(_0x378f8b => _0x378f8b.link) || [];
    if (!_0x57a599[0] && !_0x106db9[0] && !_0xa5ccb2[0]) {
      throw new Error("No download links found for any quality");
    }
    const _0x69aa82 = _0x57a599[0] ? await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/download?url=" + _0x57a599[0] + "&apikey=asitha108") : null;
    const _0x2be1c7 = _0x106db9[0] ? await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/download?url=" + _0x106db9[0] + "&apikey=asitha108") : null;
    const _0x4ffb4e = _0xa5ccb2[0] ? await fetchJson("https://asitha-moviedl.vercel.app/api/sinhalasubs/download?url=" + _0xa5ccb2[0] + "&apikey=asitha108") : null;
    const _0x2a71ec = _0x3dc255?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x856957 => _0x856957.quality.includes("480"))?.["size"] || "Null";
    const _0x3672e6 = _0x3dc255?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x1f7244 => _0x1f7244.quality.includes("720"))?.["size"] || "Null";
    const _0x29508f = _0x3dc255?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x4197b5 => _0x4197b5.quality.includes("1080"))?.["size"] || "Null";
    const _0x51169f = _0x69aa82?.["data"]?.["data"]?.["link"] || "Null";
    const _0x340f2f = _0x2be1c7?.["data"]?.["data"]?.["link"] || "Null";
    const _0x5e9a1c = _0x4ffb4e?.["data"]?.["data"]?.["link"] || "Null";
    const _0x392feb = {
      links480: _0x51169f,
      size480: _0x2a71ec,
      links720: _0x340f2f,
      size720: _0x3672e6,
      links1080: _0x5e9a1c,
      size1080: _0x29508f
    };
    console.log(_0x392feb);
    const _0x1b3e98 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0x43d27a + "dbl " + _0x51169f + (" & " + _0x1cbecb + " & 480p"),
        'description': " 480p :- " + _0x2a71ec
      }, {
        'title': '2',
        'rowId': _0x43d27a + "dbl " + _0x340f2f + (" & " + _0x1cbecb + " & 720p"),
        'description': " 720p :- " + _0x3672e6
      }, {
        'title': '3',
        'rowId': _0x43d27a + "dbl " + _0x5e9a1c + (" & " + _0x1cbecb + " & 1080p"),
        'description': " 1080p :- " + _0x29508f
      }]
    }];
    const _0x4af787 = {
      text: '.',
      footer: "> POWERED by ASITHA-MD",
      buttonText: "*🔢 Reply below number*",
      sections: _0x1b3e98
    };
    const _0x5f2132 = {
      quoted: _0x2c7075
    };
    return await _0x3d4424.replyList(_0x425208, _0x4af787, _0x5f2132);
  } catch (_0x3d055f) {
    _0x467363(_0x3d055f);
    _0x5e99c6(_0x3d055f);
  }
});
const _0x1d371b = {
  pattern: "cinesubz",
  react: '🎥',
  alias: ['cz'],
  desc: "Download movie for sinhalasub.lk",
  category: "extra",
  use: ".cinesubz < Movie Name >",
  filename: __filename
};
cmd(_0x1d371b, async (_0x32bf18, _0x3b2790, _0x1fedfe, {
  from: _0x4a444d,
  sender: _0x251b0a,
  prefix: _0x55b380,
  quoted: _0x5697b0,
  q: _0x18118c,
  reply: _0x4c90d3
}) => {
  try {
    const _0x4d77bd = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    const _0x262d7d = await getPremiumUsers();
    const _0x59a1ca = _0x262d7d.includes(_0x251b0a);
    if (!_0x59a1ca) {
      return _0x4c90d3(_0x4d77bd.pre_cmd);
    }
    if (!_0x18118c) {
      return await _0x4c90d3("Mv name plz");
    }
    const _0x32b477 = await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/search?q=" + _0x18118c + "&apikey=asitha108");
    if (_0x32b477.data.data.datalength === 0) {
      return _0x4c90d3("🚫 No movies found for your search query.");
    }
    let _0x1b0661 = _0x32b477.data.data.data;
    var _0x5daf9a = [];
    for (var _0x5e2a43 = 0; _0x5e2a43 < _0x1b0661.length; _0x5e2a43++) {
      _0x5daf9a.push({
        'title': _0x5e2a43 + 1,
        'description': _0x1b0661[_0x5e2a43].title + "\n",
        'rowId': _0x55b380 + "mdc " + _0x1b0661[_0x5e2a43].link
      });
    }
    const _0x4aa662 = [{
      'title': "*[Results from cinesubz.co]*\n",
      'rows': _0x5daf9a
    }];
    const _0x43e1be = {
      text: "\n*📽️ASITHA MD CINEMA📽️*\n\n👽 *Entered Name ||* " + _0x18118c + "  ",
      footer: "> *POWERED by ASITHA-MD*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x4aa662
    };
    const _0x5b486b = {
      quoted: _0x3b2790
    };
    return await _0x32bf18.replyList(_0x4a444d, _0x43e1be, _0x5b486b);
  } catch (_0xd43884) {
    console.log(_0xd43884);
    _0x4c90d3("*ERROR !!*");
  }
});
const _0x5f4d43 = {
  pattern: "mdc",
  desc: "Check bot setting."
};
function _0x7dd54b(_0x38ada9, _0x405610, _0xfed2f2, _0x400275, _0x1f5bec) {
  return _0x2d5b(_0xfed2f2 - 0x3ba, _0x1f5bec);
}
_0x5f4d43.react = '🎬';
_0x5f4d43.category = "movie";
_0x5f4d43.filename = __filename;
cmd(_0x5f4d43, async (_0x52a348, _0x834929, _0x701f4f, {
  from: _0x21b2f8,
  l: _0x5a94f3,
  quoted: _0x585c52,
  body: _0x3b50da,
  isCmd: _0xdaac80,
  command: _0x2783e4,
  args: _0x5ebabf,
  q: _0x1c5573,
  prefix: _0x19b8c9,
  isGroup: _0x4aa687,
  sender: _0x16b56b,
  senderNumber: _0x2fbed5,
  botNumber2: _0xb20203,
  botNumber: _0x4bbb8a,
  pushname: _0x2a9155,
  isMe: _0x1261bb,
  isOwner: _0x40de35,
  groupMetadata: _0x54091c,
  groupName: _0x2eff55,
  participants: _0x13a5ff,
  groupAdmins: _0xfb16b0,
  isBotAdmins: _0x4fface,
  isAdmins: _0x115a12,
  reply: _0x105713
}) => {
  try {
    const _0x535dc4 = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    const _0x3d778d = await getPremiumUsers();
    const _0x288032 = _0x3d778d.includes(_0x16b56b);
    if (!_0x288032) {
      return _0x105713(_0x535dc4.pre_cmd);
    }
    if (_0x1c5573.includes("https://cinesubz.co/tvshows")) {
      const _0x2e32e2 = await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/tvshow?url=" + _0x1c5573 + "&apikey=asitha108");
      let _0x3f3ef5 = _0x2e32e2.data.data.episodesDetails.flatMap(_0x3edd0f => _0x3edd0f.episodes.map(_0x1f1030 => ({
        'title': _0x1f1030.number + " - " + _0x1f1030.title,
        'link': _0x1f1030.url
      })));
      var _0x170adc = [];
      for (var _0x3738a1 = 0; _0x3738a1 < _0x3f3ef5.length; _0x3738a1++) {
        _0x170adc.push({
          'title': _0x3738a1 + 1,
          'description': _0x3f3ef5[_0x3738a1].title + "\n",
          'rowId': _0x19b8c9 + "mddc " + _0x3f3ef5[_0x3738a1].link + (" & " + _0x3f3ef5[_0x3738a1].title)
        });
      }
      const _0x104772 = [{
        'title': "*[Results from cinesubz.co]*\n",
        'rows': _0x170adc
      }];
      const _0x29d783 = {
        text: "\n*📽️ᴀꜱɪᴛʜᴀ-ᴍᴅ ᴄɪɴᴇᴍᴀ📽️*\n\n👽 *Entered Name ||* " + (_0x2e32e2?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n",
        footer: "> *POWERED by ASITHA-MD*",
        title: '',
        buttonText: "*🔢 Reply below number*\n",
        sections: _0x104772
      };
      let _0x43973f = "*📽️ASITHA-MD TV-SHOWS®📽️*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x2e32e2?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x2e32e2?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x2e32e2?.["data"]?.["data"]?.["mainDetails"]?.["genres"]?.["length"] > 0 ? _0x2e32e2.data.data.mainDetails.genres.join(", ") : _0x2e32e2?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x2e32e2.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x2e32e2?.["data"]?.["data"]?.["castDetails"]?.["cast"]?.["length"] > 0 ? _0x2e32e2.data.data.castDetails.cast.map(_0x2b74a6 => _0x2b74a6.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Join :* https://whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n> *POWERED by ASITHA-MD*\n";
      const _0x585654 = {
        url: _0x2e32e2?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x5ef62f = {
        image: _0x585654,
        caption: _0x43973f
      };
      const _0x3d4403 = {
        quoted: _0x834929
      };
      await _0x52a348.sendMessage(_0x21b2f8, _0x5ef62f, _0x3d4403);
      const _0x516278 = {
        quoted: _0x834929
      };
      return await _0x52a348.replyList(_0x21b2f8, _0x29d783, _0x516278);
    }
    if (_0x1c5573.includes("https://cinesubz.co/movies")) {
      const _0x2f3dbe = await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/movie?url=" + _0x1c5573 + "&apikey=asitha108");
      let _0x24dd47 = "*📽️ ASITHA-MD MOVIE® 📽️*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["title"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] || "Null") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["mainDetails"]?.["country"] || "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["mainDetails"]?.["runtime"] || "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["genres"]?.["length"] > 0 ? _0x2f3dbe.data.data.moviedata.genres.join(", ") : _0x2f3dbe?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x2f3dbe.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["director"] || "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["cast"]?.["length"] > 0 ? _0x2f3dbe.data.data.moviedata.cast.map(_0x57af6d => _0x57af6d.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Join :* https://whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n";
      const _0x2ab17c = {
        url: _0x2f3dbe?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x1da4a7 = {
        image: _0x2ab17c,
        caption: _0x24dd47
      };
      const _0x40b4f4 = {
        quoted: _0x834929
      };
      await _0x52a348.sendMessage(_0x21b2f8, _0x1da4a7, _0x40b4f4);
      if (!_0x2f3dbe?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
        throw new Error("Invalid response structure or missing download links");
      }
      const _0x1e84b2 = _0x2f3dbe.data.data.dllinks.directDownloadLinks.filter(_0x155d69 => _0x155d69.quality.includes("480")).map(_0xd82ff => _0xd82ff.link) || [];
      const _0x1f3265 = _0x2f3dbe.data.data.dllinks.directDownloadLinks.filter(_0x3ca6db => _0x3ca6db.quality.includes("720")).map(_0x1aaa38 => _0x1aaa38.link) || [];
      const _0x47b648 = _0x2f3dbe.data.data.dllinks.directDownloadLinks.filter(_0x8aa526 => _0x8aa526.quality.includes("1080")).map(_0x2b3c81 => _0x2b3c81.link) || [];
      if (_0x47b648.length === 0 && _0x1f3265.length === 0 && _0x1e84b2.length === 0) {
        throw new Error("No download links available for any quality");
      }
      const _0x35d25e = _0x47b648.length > 0 ? await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/download?url=" + _0x47b648[0] + "&apikey=asitha108") : null;
      const _0x23e0bf = _0x1f3265.length > 0 ? await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/download?url=" + _0x1f3265[0] + "&apikey=asitha108") : null;
      const _0x27703c = _0x1e84b2.length > 0 ? await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/download?url=" + _0x1e84b2[0] + "&apikey=asitha108") : null;
      if (!_0x35d25e && !_0x23e0bf && !_0x27703c) {
        throw new Error("Failed to fetch download data for all qualities");
      }
      const _0xb81245 = _0x27703c?.["data"]?.["data"]?.["filter"](_0x5bfbcd => _0x5bfbcd.type === "direct")["map"](_0x70b0e9 => _0x70b0e9.href) || [];
      const _0x2b8e09 = _0x23e0bf?.["data"]?.["data"]?.["filter"](_0x402a3e => _0x402a3e.type === "direct")["map"](_0x3f529f => _0x3f529f.href) || [];
      const _0x35d08c = _0x35d25e?.["data"]?.["data"]?.["filter"](_0x5dc134 => _0x5dc134.type === "direct")["map"](_0x3ddf3e => _0x3ddf3e.href) || [];
      const _0x40b165 = _0xb81245[0] || "No direct link";
      const _0x1f4d08 = _0x2b8e09[0] || "No direct link";
      const _0x4cea78 = _0x35d08c[0] || "No direct link";
      const _0x273652 = _0x27703c?.["data"]?.["data"][0]?.["fileSize"] ?? "Unknown";
      const _0x116d99 = _0x23e0bf?.["data"]?.["data"][0]?.["fileSize"] ?? "Unknown";
      const _0xf0bcf6 = _0x35d25e?.["data"]?.["data"][0]?.["fileSize"] ?? "Unknown";
      const _0x289dfd = {
        downloadlink480: _0x40b165,
        downloadlink720: _0x1f4d08,
        downloadlink1080: _0x4cea78,
        size: _0x273652,
        size2: _0x116d99,
        size3: _0xf0bcf6
      };
      console.log(_0x289dfd);
      const _0x598910 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x19b8c9 + "dbl " + _0x40b165 + (" & " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["title"] ?? "Null") + " & 480p"),
          'description': " 480p :- " + _0x273652
        }, {
          'title': '2',
          'rowId': _0x19b8c9 + "dbl " + _0x1f4d08 + (" & " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["title"] ?? "Null") + " & 720p"),
          'description': " 720p :- " + _0x116d99
        }, {
          'title': '3',
          'rowId': _0x19b8c9 + "dbl " + _0x4cea78 + (" & " + (_0x2f3dbe?.["data"]?.["data"]?.["moviedata"]?.["title"] ?? "Null") + " & 1080p"),
          'description': " 1080p :- " + _0xf0bcf6
        }]
      }];
      const _0x1e52b5 = {
        text: '.',
        footer: "> POWERED by ASITHA-MD",
        buttonText: "*🔢 Reply below number*",
        sections: _0x598910
      };
      const _0x108dd6 = {
        quoted: _0x834929
      };
      return await _0x52a348.replyList(_0x21b2f8, _0x1e52b5, _0x108dd6);
    }
  } catch (_0x20cf44) {
    _0x105713("No Link");
    _0x5a94f3(_0x20cf44);
  }
});
const _0xf1b288 = {
  pattern: "mddc",
  desc: "Check bot setting.",
  react: '🎬',
  category: "movie",
  filename: __filename
};
cmd(_0xf1b288, async (_0x1f6d2b, _0x122dbe, _0x2f99da, {
  from: _0x44b354,
  prefix: _0xda67c6,
  l: _0x280b33,
  quoted: _0x1e371c,
  body: _0x4c2e5c,
  isCmd: _0x38d916,
  command: _0x36025d,
  args: _0x360ff8,
  q: _0x3dd80f,
  isGroup: _0x15f4a1,
  sender: _0x2db7bf,
  senderNumber: _0x41798c,
  botNumber2: _0x470de8,
  botNumber: _0x430fb7,
  pushname: _0xae5d79,
  isMe: _0x3b9d33,
  isOwner: _0x36086b,
  groupMetadata: _0xe3b84e,
  groupName: _0x17fa2b,
  participants: _0xb9f611,
  groupAdmins: _0x484d75,
  isBotAdmins: _0x47ee35,
  isAdmins: _0x2b4d77,
  reply: _0x9a599c
}) => {
  try {
    const _0x572989 = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    const _0x388673 = await getPremiumUsers();
    const _0x554b87 = _0x388673.includes(_0x2db7bf);
    if (!_0x554b87) {
      return _0x9a599c(_0x572989.pre_cmd);
    }
    const _0x57ed2f = _0x3dd80f.split(" & ")[0];
    const _0x5b39bf = _0x3dd80f.split(" & ")[1];
    const _0x20686d = await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/episode?url=" + _0x57ed2f + "&apikey=asitha108");
    if (!_0x20686d?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
      throw new Error("Invalid response structure or missing download links");
    }
    const _0x59a5ec = _0x20686d.data.data.dllinks.directDownloadLinks.filter(_0x4389f6 => _0x4389f6.quality.includes("480")).map(_0x3ebe3b => _0x3ebe3b.link) || [];
    const _0x417f80 = _0x20686d.data.data.dllinks.directDownloadLinks.filter(_0x4451e2 => _0x4451e2.quality.includes("720")).map(_0x5e2c0d => _0x5e2c0d.link) || [];
    const _0xa77697 = _0x20686d.data.data.dllinks.directDownloadLinks.filter(_0x5e669b => _0x5e669b.quality.includes("1080")).map(_0x24795e => _0x24795e.link) || [];
    if (_0x59a5ec.length === 0 && _0x417f80.length === 0 && _0xa77697.length === 0) {
      throw new Error("No download links found for any quality");
    }
    const _0x5a5654 = _0x59a5ec.length > 0 ? await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/download?url=" + _0x59a5ec[0] + "&apikey=asitha108") : null;
    const _0x56a3d1 = _0x417f80.length > 0 ? await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/download?url=" + _0x417f80[0] + "&apikey=asitha108") : null;
    const _0x9af302 = _0xa77697.length > 0 ? await fetchJson("https://asitha-moviedl.vercel.app/api/cinesubz/download?url=" + _0xa77697[0] + "&apikey=asitha108") : null;
    const _0xa2adf1 = _0x5a5654?.["data"]?.["data"]?.["filter"](_0x5dba34 => _0x5dba34.type === "direct")["map"](_0x77ac9f => _0x77ac9f.href) || [];
    const _0x4b0b7b = _0xa2adf1[0] || "No direct link";
    const _0x3d6fa0 = _0x5a5654?.["data"]?.["data"]?.[0]?.["fileSize"] ?? "Unknown";
    const _0x312853 = _0x56a3d1?.["data"]?.["data"]?.["filter"](_0x5790b3 => _0x5790b3.type === "direct")["map"](_0x3f4fa9 => _0x3f4fa9.href) || [];
    const _0x69a0eb = _0x312853[0] || "No direct link";
    const _0xdde2be = _0x56a3d1?.["data"]?.["data"]?.[0]?.["fileSize"] ?? "Unknown";
    const _0x5656e2 = _0x9af302?.["data"]?.["data"]?.["filter"](_0x15fadb => _0x15fadb.type === "direct")["map"](_0x5a490c => _0x5a490c.href) || [];
    const _0x45a173 = _0x5656e2[0] || "No direct link";
    const _0x4b1213 = _0x9af302?.["data"]?.["data"]?.[0]?.["fileSize"] ?? "Unknown";
    const _0x537f62 = {
      downloadlink480: _0x4b0b7b,
      size: _0x3d6fa0,
      downloadlink720: _0x69a0eb,
      size2: _0xdde2be,
      downloadlink1080: _0x45a173,
      size3: _0x4b1213
    };
    console.log(_0x537f62);
    const _0x108ce5 = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': _0xda67c6 + "dbl " + _0x4b0b7b + (" & " + _0x5b39bf + " & 480p"),
        'description': " 480p :- " + _0x3d6fa0
      }, {
        'title': '2',
        'rowId': _0xda67c6 + "dbl " + _0x69a0eb + (" & " + _0x5b39bf + " & 720p"),
        'description': " 720p :- " + _0xdde2be
      }, {
        'title': '3',
        'rowId': _0xda67c6 + "dbl " + _0x45a173 + (" & " + _0x5b39bf + " & 1080p"),
        'description': " 1080p :- " + _0x4b1213
      }]
    }];
    const _0x1c6305 = {
      text: '.',
      footer: "> POWERED by ASITHA-MD",
      buttonText: "*🔢 Reply below number*",
      sections: _0x108ce5
    };
    const _0x3e9233 = {
      quoted: _0x122dbe
    };
    return await _0x1f6d2b.replyList(_0x44b354, _0x1c6305, _0x3e9233);
  } catch (_0x300b39) {
    _0x9a599c(_0x300b39);
    _0x280b33(_0x300b39);
  }
});
const _0x21bed1 = {
  pattern: "ytxms",
  react: '🎥',
  alias: ['ys'],
  desc: "Download movie for ytxms",
  category: "extra",
  use: ".ytxms < Movie Name >",
  filename: __filename
};
cmd(_0x21bed1, async (_0x24301d, _0x1ac8ce, _0x53e2da, {
  from: _0x109392,
  sender: _0x2bdf59,
  prefix: _0x500691,
  quoted: _0x3aea82,
  q: _0x4bf0b4,
  reply: _0x3a6a19
}) => {
  try {
    const _0x581eee = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    const _0x3343b5 = await getPremiumUsers();
    const _0x3dc3b9 = _0x3343b5.includes(_0x2bdf59);
    if (!_0x3dc3b9) {
      return _0x3a6a19(_0x581eee.pre_cmd);
    }
    if (!_0x4bf0b4) {
      return await _0x3a6a19("Mv name plz");
    }
    const _0x4fc750 = await fetchJson("https://yts.mx/api/v2/list_movies.json?sort_by=rating&query_term=" + _0x4bf0b4);
    if (_0x4fc750.data.limit === 0) {
      return _0x3a6a19("🚫 No movies found for your search query.");
    }
    let _0x4423c7 = _0x4fc750.data.movies;
    var _0x33cb24 = [];
    for (var _0x1b879d = 0; _0x1b879d < _0x4423c7.length; _0x1b879d++) {
      _0x33cb24.push({
        'title': _0x1b879d + 1,
        'description': _0x4423c7[_0x1b879d].title_long + "\n",
        'rowId': _0x500691 + "ytmx " + _0x4423c7[_0x1b879d].url
      });
    }
    const _0x3e5fc8 = [{
      'title': "*[Results from yts.mx]*\n",
      'rows': _0x33cb24
    }];
    const _0x256497 = {
      text: "\n*📽️ASITHA MD CINEMA📽️*\n\n👽 *Entered Name ||* " + _0x4bf0b4 + "  ",
      footer: "> *POWERED by ASITHA-MD*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x3e5fc8
    };
    const _0x5ad7c2 = {
      quoted: _0x1ac8ce
    };
    return await _0x24301d.replyList(_0x109392, _0x256497, _0x5ad7c2);
  } catch (_0x1f49bb) {
    console.log(_0x1f49bb);
    _0x3a6a19("*ERROR !!*");
  }
});
function _0x3badeb(_0x257aa0) {
  function _0x3ce4c5(_0x54f4ca) {
    if (typeof _0x54f4ca === "string") {
      return function (_0x32a0c9) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x54f4ca / _0x54f4ca).length !== 1 || _0x54f4ca % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x3ce4c5(++_0x54f4ca);
  }
  try {
    if (_0x257aa0) {
      return _0x3ce4c5;
    } else {
      _0x3ce4c5(0);
    }
  } catch (_0x2a7bbd) {}
}
