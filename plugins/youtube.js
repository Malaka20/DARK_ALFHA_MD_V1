(function (_0x37bfd0, _0x1b0d6a) {
  const _0x504e4d = _0x37bfd0();
  while (true) {
    try {
      const _0x5e06d3 = parseInt(_0x1e1f(241, 0x2d)) / 1 * (parseInt(_0x1e1f(827, 0x2b3)) / 2) + -parseInt(_0x1e1f(874, 0x3e3)) / 3 + parseInt(_0x1e1f(600, 0xde)) / 4 + parseInt(_0x1e1f(1035, 0x743)) / 5 * (-parseInt(_0x1e1f(515, 0x481)) / 6) + parseInt(_0x1e1f(419, -0x367)) / 7 * (-parseInt(_0x1e1f(399, 0x215)) / 8) + parseInt(_0x1e1f(590, -0x1de)) / 9 + parseInt(_0x1e1f(799, -0x6)) / 10 * (parseInt(_0x1e1f(856, 0x1dc)) / 11);
      if (_0x5e06d3 === _0x1b0d6a) {
        break;
      } else {
        _0x504e4d.push(_0x504e4d.shift());
      }
    } catch (_0x11b187) {
      _0x504e4d.push(_0x504e4d.shift());
    }
  }
})(_0x25eb, 724332);
const _0x4ceb4f = function () {
  let _0x2a650f = true;
  return function (_0x4d7453, _0x137546) {
    const _0x3ddc01 = _0x2a650f ? function () {
      if (_0x137546) {
        const _0x54e742 = _0x137546.apply(_0x4d7453, arguments);
        _0x137546 = null;
        return _0x54e742;
      }
    } : function () {};
    _0x2a650f = false;
    return _0x3ddc01;
  };
}();
const _0x763334 = _0x4ceb4f(this, function () {
  return _0x763334.toString().search("(((.+)+)+)+$").toString().constructor(_0x763334).search("(((.+)+)+)+$");
});
_0x763334();
const _0x5c8ce7 = function () {
  let _0x2d9887 = true;
  return function (_0x1bbc72, _0x282182) {
    const _0x28ec01 = _0x2d9887 ? function () {
      if (_0x282182) {
        const _0x4dba46 = _0x282182.apply(_0x1bbc72, arguments);
        _0x282182 = null;
        return _0x4dba46;
      }
    } : function () {};
    _0x2d9887 = false;
    return _0x28ec01;
  };
}();
(function () {
  _0x5c8ce7(this, function () {
    const _0x28d739 = new RegExp("function *\\( *\\)");
    const _0x2bae27 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x4e93e0 = _0x7e2af6("init");
    if (!_0x28d739.test(_0x4e93e0 + "chain") || !_0x2bae27.test(_0x4e93e0 + "input")) {
      _0x4e93e0('0');
    } else {
      _0x7e2af6();
    }
  })();
})();
const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const axios = require("axios");
const fg = require("api-dylux");
async function ytmp3(_0x23790d) {
  try {
    if (!_0x23790d) {
      throw new Error("URL parameter is required");
    }
    const _0x11a56a = await fg.yta(_0x23790d);
    const {
      title: _0x1a6e64,
      dl_url: _0x4640cd
    } = _0x11a56a;
    const _0x346896 = {
      status: true,
      Created_by: "Janith Rashmika",
      title: _0x1a6e64,
      dl_link: _0x4640cd
    };
    return _0x346896;
  } catch (_0x5a1a6d) {
    const _0x10542d = {
      status: false,
      error: _0x5a1a6d.message
    };
    return _0x10542d;
  }
}
async function ytmp4(_0x3dc820, _0x39c6d9) {
  try {
    if (!_0x3dc820 || !_0x39c6d9) {
      throw new Error("Both URL and format parameters are required.");
    }
    const _0x2bc579 = parseInt(_0x39c6d9.replace('p', ''), 10);
    const _0x4711ba = {
      button: 0x1,
      start: 0x1,
      end: 0x1,
      format: _0x2bc579,
      url: _0x3dc820
    };
    const _0x3a65ee = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      Origin: "https://loader.to",
      Referer: "https://loader.to",
      "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      "Sec-Ch-Ua-Mobile": '?1',
      "Sec-Ch-Ua-Platform": "\"Android\"",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x26e5d4 = {
      params: _0x4711ba,
      headers: _0x3a65ee
    };
    const {
      data: _0x47e80d
    } = await axios.get("https://ab.cococococ.com/ajax/download.php", _0x26e5d4);
    const _0x325d0f = _0x47e80d.id;
    async function _0x34c0bb() {
      const _0x1695aa = {
        'id': _0x325d0f
      };
      try {
        const _0x2bc2ab = {
          params: _0x1695aa,
          headers: _0x3a65ee
        };
        const _0x1f6cc8 = await axios.get("https://p.oceansaver.in/ajax/progress.php", _0x2bc2ab);
        const {
          progress: _0x184ffc,
          download_url: _0x2bb88e,
          text: _0x4e5b53
        } = _0x1f6cc8.data;
        if (_0x4e5b53 === "Finished") {
          return _0x2bb88e;
        } else {
          await new Promise(_0x47fae6 => setTimeout(_0x47fae6, 1000));
          return _0x34c0bb();
        }
      } catch (_0x5e4abf) {
        throw new Error("Error in progress check: " + _0x5e4abf.message);
      }
    }
    return await _0x34c0bb();
  } catch (_0x7e116b) {
    const _0x3bbc80 = {
      status: false,
      error: _0x7e116b.message
    };
    return _0x3bbc80;
  }
}
const _0x1ec46c = {
  ytmp3: ytmp3,
  ytmp4: ytmp4
};
module.exports = _0x1ec46c;
function extractYouTubeId(_0x2b4100) {
  const _0x5b3337 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x4b95f8 = _0x2b4100.match(_0x5b3337);
  return _0x4b95f8 ? _0x4b95f8[1] : null;
}
function convertYouTubeLink(_0x5ea40a) {
  const _0x4979fa = extractYouTubeId(_0x5ea40a);
  if (_0x4979fa) {
    return "https://www.youtube.com/watch?v=" + _0x4979fa;
  }
  return _0x5ea40a;
}
function _0x2f7c22(_0x4ae2e4, _0x2d3563, _0x462786, _0x10bc51, _0x546e35) {
  return _0x1e1f(_0x2d3563 - 0x187, _0x462786);
}
const _0x2a1c42 = {
  pattern: "song",
  desc: "To download songs.",
  react: '🎵',
  category: "download",
  filename: __filename
};
cmd(_0x2a1c42, async (_0x1b9bd6, _0x451f9b, _0x366bc5, {
  from: _0x30efd1,
  quoted: _0x5af1bc,
  body: _0x16dec1,
  isCmd: _0x48d15d,
  command: _0x501204,
  args: _0x54d2a8,
  q: _0x337170,
  isGroup: _0x296d0a,
  sender: _0x137576,
  senderNumber: _0x575ace,
  botNumber2: _0x409b6b,
  botNumber: _0x1b0ff2,
  pushname: _0x23b3d6,
  isMe: _0x936b8c,
  isOwner: _0x65fcf0,
  groupMetadata: _0x5affb3,
  groupName: _0x50316e,
  participants: _0x2d497b,
  groupAdmins: _0x9e9034,
  isBotAdmins: _0x1263cc,
  isAdmins: _0x2532f1,
  reply: _0xcb6f3e
}) => {
  try {
    if (!_0x337170) {
      return _0xcb6f3e("Please give me a URL or title.");
    }
    _0x337170 = convertYouTubeLink(_0x337170);
    const _0x554525 = await yts(_0x337170);
    const _0x452f65 = _0x554525.videos[0];
    const _0x5671ae = _0x452f65.url;
    let _0x3aad39 = "\n⫷⦁[ * '-'_꩜ 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝙎𝙊𝙉𝙂 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 ꩜_'-' * ]⦁⫸\n\n🎵 *Song Found!* \n\n➥ *Title:* " + _0x452f65.title + " \n➥ *Duration:* " + _0x452f65.timestamp + " \n➥ *Views:* " + _0x452f65.views + " \n➥ *Uploaded On:* " + _0x452f65.ago + " \n➥ *Link:* " + _0x452f65.url + " \n\n🎧 *Enjoy the music brought to you by* *Queen Anju Bot*! \n\n🔽 *To download send:*\n\n1. *Audio File* 🎶\n2. *Document File* 📂\n\n> *Created with ❤️ by Janith Rashmika* \n\n> *© 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 - MD*  \n*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD    \n";
    let _0x845c52 = "\n🎥 *MP3 Download Found!* \n\n➥ *Title:* " + _0x452f65.title + " \n➥ *Duration:* " + _0x452f65.timestamp + " \n➥ *Views:* " + _0x452f65.views + " \n➥ *Uploaded On:* " + _0x452f65.ago + " \n➥ *Link:* " + _0x452f65.url + " \n\n🎬 *Enjoy the video brought to you by Queen Anju Bot!* \n";
    const _0x22b09d = {
      url: _0x452f65.thumbnail
    };
    const _0x163d84 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x163d84.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x163d84.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x163d84.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x163d84.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x163d84.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x163d84.externalAdReply.mediaType = 0x1;
    _0x163d84.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x163d84.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x163d84.externalAdReply.renderLargerThumbnail = false;
    _0x163d84.externalAdReply.showAdAttribution = true;
    const _0x48f2ff = {
      image: _0x22b09d,
      caption: _0x3aad39,
      contextInfo: _0x163d84
    };
    const _0x54af31 = await _0x1b9bd6.sendMessage(_0x30efd1, _0x48f2ff);
    const _0x31cb51 = _0x54af31.key.id;
    _0x1b9bd6.ev.on("messages.upsert", async _0x3e1ed3 => {
      const _0x515940 = _0x3e1ed3.messages[0];
      if (!_0x515940.message) {
        return;
      }
      const _0x1caeca = _0x515940.message.conversation || _0x515940.message.extendedTextMessage?.["text"];
      const _0x4ec63d = _0x515940.key.remoteJid;
      const _0x1f1c3a = _0x515940.message.extendedTextMessage && _0x515940.message.extendedTextMessage.contextInfo.stanzaId === _0x31cb51;
      if (_0x1f1c3a) {
        const _0x351720 = {
          text: '⬇️',
          key: _0x515940.key
        };
        const _0x1bf94f = {
          react: _0x351720
        };
        await _0x1b9bd6.sendMessage(_0x4ec63d, _0x1bf94f);
        const _0x66f300 = await ytmp3('' + _0x5671ae);
        const _0x3bcdc4 = _0x66f300.dl_link;
        const _0x38b133 = {
          text: '⬆️',
          key: _0x515940.key
        };
        const _0x336ab8 = {
          react: _0x38b133
        };
        await _0x1b9bd6.sendMessage(_0x4ec63d, _0x336ab8);
        if (_0x1caeca === '1') {
          const _0x40aa79 = {
            url: _0x3bcdc4
          };
          const _0x53d2f0 = {
            title: _0x452f65.title,
            body: _0x452f65.videoId,
            mediaType: 0x1,
            sourceUrl: _0x452f65.url,
            thumbnailUrl: _0x452f65.thumbnail,
            renderLargerThumbnail: true,
            showAdAttribution: true
          };
          const _0x2cab95 = {
            externalAdReply: _0x53d2f0
          };
          const _0xab6017 = {
            audio: _0x40aa79,
            mimetype: "audio/mpeg",
            contextInfo: _0x2cab95
          };
          const _0x2af337 = {
            quoted: _0x515940
          };
          await _0x1b9bd6.sendMessage(_0x4ec63d, _0xab6017, _0x2af337);
        } else {
          if (_0x1caeca === '2') {
            const _0x4b2e17 = {
              url: _0x3bcdc4
            };
            const _0x1e8b32 = {
              document: _0x4b2e17,
              mimetype: "audio/mp3",
              fileName: _0x452f65.title + ".mp3",
              caption: _0x845c52,
              contextInfo: {}
            };
            _0x1e8b32.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
            _0x1e8b32.contextInfo.groupMentions = [];
            _0x1e8b32.contextInfo.forwardingScore = 0x3e7;
            _0x1e8b32.contextInfo.isForwarded = true;
            _0x1e8b32.contextInfo.forwardedNewsletterMessageInfo = {};
            _0x1e8b32.contextInfo.externalAdReply = {};
            _0x1e8b32.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x1e8b32.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x1e8b32.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x1e8b32.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x1e8b32.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x1e8b32.contextInfo.externalAdReply.mediaType = 0x1;
            _0x1e8b32.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x1e8b32.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x1e8b32.contextInfo.externalAdReply.renderLargerThumbnail = false;
            _0x1e8b32.contextInfo.externalAdReply.showAdAttribution = true;
            await _0x1b9bd6.sendMessage(_0x4ec63d, _0x1e8b32);
          }
        }
        const _0xe14c81 = {
          text: '✅',
          key: _0x515940.key
        };
        const _0x5b2c72 = {
          react: _0xe14c81
        };
        await _0x1b9bd6.sendMessage(_0x4ec63d, _0x5b2c72);
        console.log("Response sent successfully");
      }
    });
  } catch (_0x318e96) {
    console.log(_0x318e96);
    _0xcb6f3e('' + _0x318e96);
  }
});
function _0xd8e2cb(_0x4466d7, _0x4a59fe, _0x3ea8fa, _0x4444a6, _0x26aaec) {
  return _0x1e1f(_0x4a59fe + 0x16a, _0x4444a6);
}
function _0x59d26f(_0x503ffa, _0x167616, _0x4e620a, _0x567f7d, _0xd113c1) {
  return _0x1e1f(_0x503ffa - 0x392, _0x567f7d);
}
function _0x25eb() {
  const _0x3c46ee = ['178wZFSxV', 'title', 'MREYx', 'showA', "URL p", 'AYHQj', 'BDnwC', "*\n   ", " File", 'NMGkw', "\n🔽 *T", 'sdcde', "d Fou", "𝙏𝙎 𝙎𝙀", "1.1 *", 'qnkiQ', "y Jan", 'SIxRE', '77562', 'Link:', "nith ", " \n➥ *", 'oding', 'bvbqy', 'BllrU', 'oSqLR', 'rWqlh', 'HpeBb', 'Jid', '55oIFNJq', 'RwspO', 'ihlkL', 'Dest', 'times', 'BEjDt', 'api-d', '/mp4', 'wEQUp', 'nSQux', 'butto', 'gaKmo', 'Csoky', 'ent', 'ocean', 'terva', "   2.", 'ltPJL', '758523uwcBeq', 'ucces', "e giv", 'ound!', 'mika/', 'rsati', " Rash", "𝘼𝙍𝘾𝙃 ", 'video', 'YCakV', " *360", ". *Au", 'raNkK', 'NPQJS', " MD* ", 'RnPbp', 'text', 'EEN_A', " \n\n> ", 'zWRhc', 'xvRnL', "* \n", 'OAjhK', "   1.", '𝘿𝙊𝙒𝙉𝙇', 'aJoXD', 'menti', "𝙊𝙏 - ", 'hkKwk', 'DATA/', "ion *", "2. *D", 'sLGEi', ", \"Ch", 'mimet', "ss ch", 'pYcGC', 'RHjrp', "rmat ", 'qEMFz', 'ENZPx', 'lIhxy', 'Platf', "eos a", "; K) ", 'eos.', '𝐐𝐔𝐄𝐄𝐍', 'capti', 'AQnuN', 'boSPq', 'forwa', 'JamhR', "❤️ by ", 'JIXDB', 'iSdhb', 'fYvqU', "2.1 *", 'QEbYC', " 𝐌𝐃", " Bot!", 'ss.ph', " Foun", 'WjFqn', 'warde', 'vHBkd', 'tter', "le Sa", 'MkfAs', 'iPFgu', 'GBPwt', 'rqPqu', 'VekCG', 'fBxiH', 'nONxm', 'count', 'EMQiU', 'JHrLo', "h Ras", '/main', 'UstCh', "  \n", "𝙉 𝘼𝙉𝙅", "𝙀𝙀𝙉 𝘼", 'FelGg', 'ashmi', 'VVHGb', 'ageId', 'Yuhni', 'expor', "480*\n", '360p', 'a-zA-', 'vcVLo', 'Queen', "⫸\n\n🎵 ", "by Ja", 'JNvDK', 'sage', 'ufOYq', 'ufCOw', "_MD\n", ", lik", 'adESu', 'hmika', 'IJZNV', 'pp.ne', 'SfwRM', 'eInfo', 'categ', 'JAsvf', 'orqgT', " 1.2 ", 'lNbNu', '𝙊𝘼𝘿𝙀𝙍', 'wnloa', "s:* ", 'get', 'dgbKr', "\"Andr", 'cnwnE', '537.3', 'ND-Ja', "is\")(", 'h-Ua', 'hatsa', 'KCGxw', 'heads', 'patte', "ch Re", 'GzDLA', '.com/', '1.4', 'YcJdU', '2.2', '.mp4', 'itHub', "2.2 *", "\"Not-", "arch ", '{}.co', 'itle:', 'gycde', " audi", '1.2', 'refs/', 'parti', "r tit", 'oWYxR', 'uXHOa', 'Docum', "\"124\"", "* '-'", " on Y", "*\n\n> ", 'CHtGP', 'VwzbW', 'axios', 'views', 'YeZwh', 'funct', 'call', '17900FLIaOU', "\n\n➥ *", 'Creat', 'SBzTz', 'b/fun', '.mp3', '/LOGO', " 📂\n\n>", 'Origi', 'tkwNw', 'RMLOq', '*Audi', 'SmWJm', 'actio', 'LPvTE', 'Sec-F', 'ibuti', 'CIVab', 'fBgzC', 'nailU', 'iuPuR', 'AYMFs', 'Raksc', "d wit", 'TtWpq', "⦁⫸ \n\n", " send", "\n➥ *T", 'UhRpu', 'EmULF', 'XACgc', "oad s", 'MhFaS', "\n\n1. ", 'ZqMRz', 'Mkmyf', 'TqJxF', 'nstru', 'LbOoN', ')+)+)', 'aNizG', 'QsbSw', 'https', 'stanz', 'KUDZT', " * ]⦁", 'apply', "t*! \n", 'sfhRD', 'PPVEw', 'XmYUd', 'tyAfK', 'beOfM', 'BWOFy', 'heade', 'wDVBZ', 'bGcjL', 'YzTVp', "2 *48", "deo F", 'oad.p', 'dAttr', 'JQhVn', 'rogre', 'etter', 'group', 'TEjiL', 'sftkb', "e pro", 'gs.', "ile* ", '*Crea', 'GQKuJ', "\"retu", 'BBJAX', 'ction', " defl", 'orm', 'YJWiP', 'eJid', 'nalAd', 'mvdoF', "𝐔𝐄𝐄𝐍 ", 'zSDvt', 'PZLXm', 'gzEuD', 'GiXIY', "with ", 'IXdph', 'nDLAa', 'TQfBz', 'OqUFr', 'fgGmW', 'Mode', 'XZdfb', 'fqJgV', 'xzcXT', 'AYVbU', "*  \n*", 'const', 'Downl', 'jgPoX', '*Docu', 'ion:*', 'NikVb', 'TiOdX', 'com/N', 'requi', 'wSwOc', "id 10", 'state', "nt Fi", 'ADWXi', "ith R", 'ZSxEf', 'yt-se', 'com/w', 'XaMVL', 'WebKi', "to yo", "o Fil", 'newsl', "𝙄𝘿𝙀𝙊 ", 'dl_li', 'input', 'Cylwn', 'rrash', '*View', " Mobi", " Anju", 'choin', 'ZZeQM', 'A.Bra', 'ouTub', "e Gec", 'exten', " vide", "* \n\n🔽", 'nzNSC', 'song', 'nail', 'sendM', "\n*💻 G", "rch q", 'gzDsi', 'lmrWP', 'Apple', "nd\";v", "a sea", 'NZAVh', "ted w", 'XyzJe', 'uired', '88931', 'ges', 'end:*', 'tIcLE', " or t", 'ago', "On:* ", 'qIYoL', 'quote', 'Score', 'NqWTb', 'vWhts', 'CAhRV', "📂\n   ", 'cococ', "\\+\\+ ", 'aZAVP', 'YePwL', 'com/M', "rn th", "a You", 'File*', 'sAUEN', 'hswDL', "20*\n ", 'yXFGW', 'rMess', "\n> *C", 'tcIOA', ":* gi", 'Neyfo', "en An", "oad Y", 'test', 'key', 'mhAPh', " for:", "nd fo", 'XNhHx', 'abqbR', 'KQnva', 'jax/p', 'CCuoJ', "aded ", 'sourc', 'Error', 'lengt', "e* 🎶\n", '7346qUpsGo', "ated ", " *Doc", "c bro", 'MdouT', 'desc', 'XGSEZ', 'chain', 'la/5.', " 2.3 ", 'fWDDB', 'nhlfR', 'm/Mrr', '*Dura', 'yJYBJ', 'image', 'TbXeW', 'ame', 'Accep', '_ANJU', 'kCxWv', 'EBeTx', "th ❤️ ", 'KHTML', " 𝐌𝐃 -", "nse s", 'ZXZzI', ',en-U', "u by ", 'JAMjN', 'NJU_M', 'DeMNO', 'xaWXP', 'niya/', 'caRbj', 'CfzDh', 'uykoI', "_MD  ", "𝐉𝐔 𝐌𝐃", "\\( *\\", 'searc', 'oFKHp', '.9,en', 'eqQew', 'gQZIO', '*Uplo', "* \n\n➥", 'param', 'lPCpS', "0 (Li", 'mika', '://lo', "0*\n *", 'FnARZ', 'ENEwx', '/mp3', 'ype', '*Link', 'bOoLG', '/mpeg', 'nqAHr', 'kLSfu', 'Durat', 'onedJ', '12036', 'url', "o bro", "_꩜ 𝙌𝙐", "oid\"", 'ZZput', 'LdpaW', 'wkltI', 'FqTOH', "0*\n  ", ';q=0.', 'saver', 'CXSnW', 'ZetMN', 'audio', 'conve', " musi", 'gger', 'nTnDq', 'ewsle', 'h-Ua-', 'OfgxS', "le* 📂", "d vid", "nd!* ", 'body', 'en-GB', "💻 Git", 'Gvdzd', 'data', 'ATrsc', " \n\n🎧 ", "a URL", 'HwmNJ', 'Janit', " gith", 'nctio', 'GGHvU', 'wmqXN', 'cors', 'pzAIB', " 1.3 ", 'arame', 'JDIkr', 'uery.', 'PoJJn', "\n   2", "* \n\n>", 'HMUUr', 'Agent', 'ZeYFU', 'ideos', 'romiu', 'NsnUc', 'VwbXu', 'vzJvb', 'downl', 'yvkCc', 'vdPlc', 'aElYH', 'oHXhi', "\n> *©", 'uuONX', "ter i", "URL o", 'Name', "nux; ", "\n⫷⦁[ ", "\n\n> *", 'S;q=0', 'msClY', 'TDZBt', 'OTAxc', 'hrome', 'CcQUK', '0-9a-', 'start', 'bVzOo', "𝙐 𝘽𝙊𝙏", 'zA-Z_', "🎥 *Vi", 'thub.', '8@s.w', "e) {}", 'cuwaY', 'sults', 'tterM', 'conte', 'wngEb', 'Plqsu', 'xtInf', 'zGFjf', 'AKogU', 'reate', '16wtGtEh', "⫸\n\n🔍 ", 'SiXdL', 'guage', 'QUEEN', 'eters', 'GBhrL', "m\";v=", "n (fu", '21815', "𝘼𝘿𝙀𝙍 ", "eck: ", 'Andro', 'OecZt', 'ytmp3', 'filen', '*Song', 'ercon', '*Sear', 'setIn', '2260699GqnSZt', 'isFor', 'le.', 'LHuqw', " ꩜_'-", "P3 Do", 'RrHqP', 'UXFcm', 'zkDpW', '(((.+', 'tQqYX', 'SEkBs', "To se", 'AJhrA', 'iko-A', 'Mozil', 'hOdIo', 'Refer', " by J", 'anith', '*/*', "d son", 'aId', '://p.', " *108", '*(?:[', 'vGhNK', 'react', 'PPXsF', 'QHmaL', 'IJYMY', 'MJPoP', "ment ", 'QeYeH', " *© 𝐐", '.coco', " *Cre", 'FphqX', 'cpEsG', 'drLOk', 'ANJU-', 'GAKpN', 'YOuwC', 'nYowA', 'yXTzI', ".3 *7", 'etch-', 'uzeTK', ".4 *1", 'eYsKR', "𝙉𝙅𝙐 𝙑", "u by*", 'Respo', 'Reply', "𝙉𝙅𝙐 𝘽", 't-Enc', 'arch', 'red.', 'sNwoT', '2.3', 'TWajE', 'zLAyz', 'wDjCF', 'woTmr', 'Views', 'iSHwQ', 'gzip,', '2.4', "  2.1", 'CPrei', 'NwUEG', 'BLVle', 'owBuY', 'FHRtP', 'QvLqG', 'Title', 'fari/', " 2.4 ", "h ❤️ b", 'ges.u', 'Sec-C', 'AglQV', "ent s", " in p", 'JygDo', 'hubus', 'xmZFu', "*© 𝙌𝙐", '../co', " *Que", 'yta', "\n   1", "꩜_'-'", 'atch?', 'HHtqY', ":*\n\n ", '2070bcIxsk', 'JOMDv', '78149', 'debu', " are ", 'iQEHP', "ate, ", 'ka/QU', 'VjRiO', '*Enjo', 'User-', 'tle:*', 'XSKlc', 'VkWYN', 'cKtnT', 'ywVGD', '1.jpg', "MD*  ", 'ocume', '𝙊𝙒𝙉𝙇𝙊', 'bEuYF', "3 *72", 'tFtqh', 'GfORu', 'itle.', "\n🎥 *M", ".36 (", "  1.4", 'yts', 'ader.', 'repla', 'while', 'GThyb', "ju Bo", 'psert', 'tSuPh', 'ed_by', "e me ", 'usVoJ', 'w.git', 'Site', 'strin', 'FZlGO', 'vjMyp', "𝐀𝐍𝐉𝐔 ", 'aNKux', 'Rashm', 'GnOtY', "ught ", 'rLOfb', 'ctor(', 'HTmdP', "ent F", 'ccmpD', "ith ❤️", 'fGNOz', 'giwfw', '1080', 'BOltj', 'RwFwm', 'GsDjR', 'Objec', '://ra', 'erThu', 'bdPHE', 'log', 'statu', 'rzvOt', 'vTlcp', "🎶\n   ", 'tion:', "P4 Do", "360*\n", 'fileN', 'ing', '641106fbwSDJ', 'IIGOm', 'sCBnu', '15400', '2.1', 'KwEEj', "𝐄𝐍 𝐀𝐍", 'hSJdB', 'zNbfZ', '*480*', '5400236PdzZvT', 'pGkcm', "𝙉𝙅𝙐 𝙔", 'TrCdK', 'bxvRN', 'UTbZX', "\n\n*Vi", 'BEYtn', "\n🎵 *M", "vide ", 'mmand', 'UBibH', 'forma', "ed wi", 'seabk', 'uvtTO', 'AHDDX', 'ESUHd', 'rXUOO', '94717', 'media', '*720*', 'FvhKE', 'iwQbN', 'ExhiS', 'ylux', 'hed', "o dow", 'ument', "s req", 'exter', " 𝙌𝙐𝙀𝙀", 'nxoyX', '360', 'yhnUJ', " (tru", " *To ", '../li', 'ory', 'LBtrQ', 'CYCsZ', 'tiJJZ', 'ePdLs', 'dedTe', 'caHiI', "* 📂\n ", "© 𝐐𝐔𝐄", 'forEa', 'HdQWI', 'BnLQj', 'VdLCE', 'qNJqh', 'error', '://ab', 'EMNzx', "ko) C", 'TsHvF', 'wxGLE', 'rding', ". *Ti", 'BrfJo', 'ybSFp', 'oIavR', 'serve', 'oZvyt', 'Pleas', 'pNEFe', 'HEaEQ', '557@n', "080*\n", 'toStr', 'ztUsY', 'HoCbL', 'end', 'SynEY', "s MP4", 'mcbVs', '32999', 'XtFnV', ":* ", " 𝐀𝐍𝐉𝐔", 'mika*', 'rdedN', 'gHPVy', 'ZvJPz', 'Gzrgf', 'iYupB', "1 *36", 'ytmp4', " \n\n🎬 ", 'bMPhL', "d!* \n", 'cipan', 'DHBIA', 'tivLS', 'docum', 'toIOE', 'lcVZE', " \n   ", 'SOObx', 'hIYYz', 'jWnmP', 'LtxDg', 'xtMes', '-site', 'Type', "To do", 'cross', 'qbwge', 'llisY', 'Menti', 'LLATp', 'nDrEo', 'wsrPW', 't/537', "=\"99\"", 'biwAO', 'match', 'tamp', "n() ", 'tent.', 'ZdCfI', "le:* ", 'jRZZk', " *Tit", 'FJNOI', 'zHOwN', 'messa', 'AIVna', 'Z_$][', 'RUJkG', 'ructo', 'LiRpu', 'DVuvr', "dio F", 'bNthM', 'JnidK', '$]*)', "y the", 'NaLgc', 'ZeSxQ', 'opTlh', 'ctIVK', 'KYHRR', "Tube ", 'retur', 'hAInN', 'ibGWR', 'bHYAf', "ka* \n", 'iyyvN', "> *© ", '1.1', '480', 'init', "for v", "n:* ", 'ZVASH', "s MP3", 'cIAWx', 'OduEy', 'HyMPn', 'IlzbS', 'tube.', '1.3', 'rLarg', 'mbnai', 'zUxII', 'tXlrI', 'rende', 'DOzEn', 'ub.co', 'qXOZp', 'GISZg', 'Hub:*', 'xtJgq', '0.0.0', 'SbHiU', 'essag', 'qZFAx', "𝙉𝙅𝙐 𝙎", 'yYoxK', "𝐌𝐃 - ", 'Uploa', "🎶\n2. ", '://ww', 'LyaPO', '/124.', 't-Lan', 'nIqUU', '720', 'Finis', 'IgZzE', 'oad', 'XFUFs', "Both ", 'w.you', "e vid", 'ajax/', '1566200GCSeoz', "ded O", 'ons', 'thumb', 'CMmKK', " - MD", 'sfull', 'MyClR', 'MFmaB', 'xWRiI', 'slice', '.in/a', "URL a", 'nload', '*Vide', 'empty', 'eUrl', 'S/615', 'remot', ":*\n\n1", 'SNzNi', '*1080', "' * ]", '://gi', 'Mobil', "𝙊𝙉𝙂 𝘿", "ika* ", 'pgAmb'];
  _0x25eb = function () {
    return _0x3c46ee;
  };
  return _0x25eb();
}
(function () {
  const _0x5bb144 = function () {
    let _0x5ab060;
    try {
      _0x5ab060 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3b479d) {
      _0x5ab060 = window;
    }
    return _0x5ab060;
  };
  const _0x11a41b = _0x5bb144();
  _0x11a41b.setInterval(_0x7e2af6, 4000);
})();
const _0xf5f0e8 = {
  pattern: "ytmp3",
  desc: "Download YouTube videos as MP3.",
  react: '🎵',
  category: "download",
  filename: __filename
};
cmd(_0xf5f0e8, async (_0x5dc70e, _0x18ec5a, _0x490b46, {
  from: _0x499661,
  quoted: _0x26f421,
  body: _0x3acfd4,
  isCmd: _0x580001,
  command: _0x140be8,
  args: _0x1ce633,
  q: _0x1815bc,
  isGroup: _0x2d1c85,
  sender: _0x203233,
  senderNumber: _0x43c4a8,
  botNumber2: _0x4d1f89,
  botNumber: _0xce58d6,
  pushname: _0x5960b8,
  isMe: _0x85cf90,
  isOwner: _0x43a742,
  groupMetadata: _0x181fce,
  groupName: _0x43bd0a,
  participants: _0x45c144,
  groupAdmins: _0x4b65bf,
  isBotAdmins: _0x4de1ed,
  isAdmins: _0x88f4b6,
  reply: _0x6227e5
}) => {
  try {
    if (!_0x1815bc) {
      return _0x6227e5("Please provide a YouTube URL or title.");
    }
    _0x1815bc = convertYouTubeLink(_0x1815bc);
    const _0x3b5901 = await yts(_0x1815bc);
    const _0x22ba8e = _0x3b5901.videos[0];
    const _0x14d907 = _0x22ba8e.url;
    let _0x2a25e6 = "\n🎵 *MP3 Download Found!* \n\n➥ *Title:* " + _0x22ba8e.title + " \n➥ *Duration:* " + _0x22ba8e.timestamp + " \n➥ *Views:* " + _0x22ba8e.views + " \n➥ *Uploaded On:* " + _0x22ba8e.ago + " \n➥ *Link:* " + _0x22ba8e.url + " \n\n🎧 *Enjoy the audio brought to you by Queen Anju Bot!* \n\n🔽 *To download send:*\n\n1. *Audio File* 🎶\n2. *Document File* 📂\n\n> *Created with ❤️ by Janith Rashmika* \n\n> *© 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 - MD*  \n*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x1b29aa = "\n🎥 *MP3 Download Found!* \n\n➥ *Title:* " + _0x22ba8e.title + " \n➥ *Duration:* " + _0x22ba8e.timestamp + " \n➥ *Views:* " + _0x22ba8e.views + " \n➥ *Uploaded On:* " + _0x22ba8e.ago + " \n➥ *Link:* " + _0x22ba8e.url + " \n\n🎬 *Enjoy the video brought to you by Queen Anju Bot!* \n";
    const _0x3d1d8d = {
      url: _0x22ba8e.thumbnail
    };
    const _0x57ad50 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x57ad50.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x57ad50.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x57ad50.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x57ad50.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x57ad50.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x57ad50.externalAdReply.mediaType = 0x1;
    _0x57ad50.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x57ad50.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x57ad50.externalAdReply.renderLargerThumbnail = false;
    _0x57ad50.externalAdReply.showAdAttribution = true;
    const _0x2e3a1f = {
      image: _0x3d1d8d,
      caption: _0x2a25e6,
      contextInfo: _0x57ad50
    };
    const _0x3ea789 = await _0x5dc70e.sendMessage(_0x499661, _0x2e3a1f);
    const _0x56138c = _0x3ea789.key.id;
    _0x5dc70e.ev.on("messages.upsert", async _0x5a2a50 => {
      const _0x5199d1 = _0x5a2a50.messages[0];
      if (!_0x5199d1.message) {
        return;
      }
      const _0x1518e0 = _0x5199d1.message.conversation || _0x5199d1.message.extendedTextMessage?.["text"];
      const _0x4e6e0f = _0x5199d1.key.remoteJid;
      const _0x2c36af = _0x5199d1.message.extendedTextMessage && _0x5199d1.message.extendedTextMessage.contextInfo.stanzaId === _0x56138c;
      if (_0x2c36af) {
        const _0x4f6e98 = {
          text: '⬇️',
          key: _0x5199d1.key
        };
        const _0x3d1db8 = {
          react: _0x4f6e98
        };
        await _0x5dc70e.sendMessage(_0x4e6e0f, _0x3d1db8);
        const _0x1b6205 = await ytmp3('' + _0x14d907);
        const _0x172150 = _0x1b6205.dl_link;
        const _0x3e0909 = {
          text: '⬆️',
          key: _0x5199d1.key
        };
        const _0x18510f = {
          react: _0x3e0909
        };
        await _0x5dc70e.sendMessage(_0x4e6e0f, _0x18510f);
        if (_0x1518e0 === '1') {
          const _0x19d1ef = {
            url: _0x172150
          };
          const _0xf0cf58 = {
            title: _0x22ba8e.title,
            body: _0x22ba8e.videoId,
            mediaType: 0x1,
            sourceUrl: _0x22ba8e.url,
            thumbnailUrl: _0x22ba8e.thumbnail,
            renderLargerThumbnail: true,
            showAdAttribution: true
          };
          const _0x5d3e09 = {
            externalAdReply: _0xf0cf58
          };
          const _0x329134 = {
            audio: _0x19d1ef,
            mimetype: "audio/mpeg",
            contextInfo: _0x5d3e09
          };
          const _0x148ec7 = {
            quoted: _0x5199d1
          };
          await _0x5dc70e.sendMessage(_0x4e6e0f, _0x329134, _0x148ec7);
        } else {
          if (_0x1518e0 === '2') {
            const _0x4f7087 = {
              url: _0x172150
            };
            const _0x45417e = {
              document: _0x4f7087,
              mimetype: "audio/mp3",
              fileName: _0x22ba8e.title + ".mp3",
              caption: _0x1b29aa,
              contextInfo: {}
            };
            _0x45417e.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
            _0x45417e.contextInfo.groupMentions = [];
            _0x45417e.contextInfo.forwardingScore = 0x3e7;
            _0x45417e.contextInfo.isForwarded = true;
            _0x45417e.contextInfo.forwardedNewsletterMessageInfo = {};
            _0x45417e.contextInfo.externalAdReply = {};
            _0x45417e.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x45417e.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x45417e.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x45417e.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x45417e.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x45417e.contextInfo.externalAdReply.mediaType = 0x1;
            _0x45417e.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x45417e.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x45417e.contextInfo.externalAdReply.renderLargerThumbnail = false;
            _0x45417e.contextInfo.externalAdReply.showAdAttribution = true;
            await _0x5dc70e.sendMessage(_0x4e6e0f, _0x45417e);
          }
        }
        const _0x1748fa = {
          text: '✅',
          key: _0x5199d1.key
        };
        const _0x3b825a = {
          react: _0x1748fa
        };
        await _0x5dc70e.sendMessage(_0x4e6e0f, _0x3b825a);
        console.log("Response sent successfully");
      }
    });
  } catch (_0x124a0d) {
    console.log(_0x124a0d);
    _0x6227e5('' + _0x124a0d);
  }
});
const _0x225a2c = {
  pattern: "yts",
  desc: "To search for videos on YouTube.",
  react: '🎥',
  category: "search",
  filename: __filename
};
cmd(_0x225a2c, async (_0x19d525, _0x500710, _0x590622, {
  from: _0x310a59,
  quoted: _0x272f29,
  body: _0x3accc4,
  isCmd: _0x313825,
  command: _0x42e7ba,
  args: _0x1a66f7,
  q: _0x4c7436,
  isGroup: _0x545ca2,
  sender: _0x5bd851,
  senderNumber: _0x2a1b75,
  botNumber2: _0x4e0811,
  botNumber: _0x576cb2,
  pushname: _0x3d12ac,
  isMe: _0xfb0590,
  isOwner: _0x8097ff,
  groupMetadata: _0x5c69f5,
  groupName: _0x22a4f4,
  participants: _0x134dd6,
  groupAdmins: _0x1d1003,
  isBotAdmins: _0x30c300,
  isAdmins: _0x48c848,
  reply: _0x17b49b
}) => {
  try {
    if (!_0x4c7436) {
      return _0x17b49b("Please provide a search query.");
    }
    const _0x40fc6d = await yts(_0x4c7436);
    const _0x58a340 = _0x40fc6d.videos.slice(0, 10);
    let _0x2b9eee = "\n⫷⦁[ * '-'_꩜ 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝙔𝙏𝙎 𝙎𝙀𝘼𝙍𝘾𝙃 ꩜_'-' * ]⦁⫸\n\n🔍 *Search Results for:* " + _0x4c7436 + "\n\n";
    _0x58a340.forEach((_0x3302c2, _0x2cc1b6) => {
      _0x2b9eee += "\n" + (_0x2cc1b6 + 1) + ". *Title:* " + _0x3302c2.title + " \n   *Duration:* " + _0x3302c2.timestamp + " \n   *Views:* " + _0x3302c2.views + " \n   *Uploaded On:* " + _0x3302c2.ago + " \n   *Link:* " + _0x3302c2.url + "\n";
    });
    _0x2b9eee += "\n> *Created with ❤️ by Janith Rashmika* \n> *© 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 - MD* \n*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    const _0x567644 = {
      url: _0x40fc6d.videos[0].thumbnail
    };
    const _0x2ebe4d = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x2ebe4d.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x2ebe4d.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2ebe4d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x2ebe4d.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2ebe4d.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2ebe4d.externalAdReply.mediaType = 0x1;
    _0x2ebe4d.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x2ebe4d.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x2ebe4d.externalAdReply.renderLargerThumbnail = false;
    _0x2ebe4d.externalAdReply.showAdAttribution = true;
    const _0x3591b5 = {
      image: _0x567644,
      caption: _0x2b9eee,
      contextInfo: _0x2ebe4d
    };
    await _0x19d525.sendMessage(_0x310a59, _0x3591b5);
  } catch (_0x25369d) {
    console.log(_0x25369d);
    _0x17b49b('' + _0x25369d);
  }
});
function _0x3194bf(_0x3b6acc, _0x1d7b72, _0x20f9ea, _0x42301e, _0x322c4c) {
  return _0x1e1f(_0x42301e + 0x3e6, _0x20f9ea);
}
function _0x4ace49(_0x394f7e, _0x2a5280, _0x34c003, _0x3af0cb, _0x369db8) {
  return _0x1e1f(_0x394f7e + 0x373, _0x3af0cb);
}
function _0x1e1f(_0x763334, _0x4ceb4f) {
  const _0x25eb6b = _0x25eb();
  _0x1e1f = function (_0x1e1f58, _0x502415) {
    _0x1e1f58 = _0x1e1f58 - 172;
    let _0x30eefe = _0x25eb6b[_0x1e1f58];
    return _0x30eefe;
  };
  return _0x1e1f(_0x763334, _0x4ceb4f);
}
const _0x1559e2 = {
  pattern: "video",
  desc: "To download videos.",
  react: '🎥',
  category: "download",
  filename: __filename
};
cmd(_0x1559e2, async (_0xcf45d9, _0x469f80, _0x1e6222, {
  from: _0x227747,
  quoted: _0x4422a2,
  body: _0x2949d2,
  isCmd: _0x23553d,
  command: _0x285b1f,
  args: _0x27a899,
  q: _0x3f4fa9,
  isGroup: _0x120290,
  sender: _0x56a673,
  senderNumber: _0x3e78c6,
  botNumber2: _0x2774ba,
  botNumber: _0x59b83f,
  pushname: _0x2853da,
  isMe: _0x151f73,
  isOwner: _0x4c8398,
  groupMetadata: _0x4ffe0c,
  groupName: _0x21ad9f,
  participants: _0x58a6f1,
  groupAdmins: _0x24e7c3,
  isBotAdmins: _0x59ee7c,
  isAdmins: _0x2fdd07,
  reply: _0x160c16
}) => {
  try {
    if (!_0x3f4fa9) {
      return _0x160c16("Please give me a URL or title.");
    }
    _0x3f4fa9 = convertYouTubeLink(_0x3f4fa9);
    const _0x37b802 = await yts(_0x3f4fa9);
    const _0x2773e = _0x37b802.videos[0];
    const _0x57bff2 = _0x2773e.url;
    let _0x279036 = "\n⫷⦁[ * '-'_꩜ 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 ꩜_'-' * ]⦁⫸ \n\n🎥 *Video Found!* \n\n➥ *Title:* " + _0x2773e.title + " \n➥ *Duration:* " + _0x2773e.timestamp + " \n➥ *Views:* " + _0x2773e.views + " \n➥ *Uploaded On:* " + _0x2773e.ago + " \n➥ *Link:* " + _0x2773e.url + " \n\n🎬 *Enjoy the video brought to you by* *Queen Anju Bot*! \n\n🔽 *To download send:*\n\n *Video File* 🎶\n   1.1 *360*\n   1.2 *480*\n   1.3 *720*\n   1.4 *1080*\n *Document File* 📂\n   2.1 *360*\n   2.2 *480*\n   2.3 *720*\n   2.4 *1080*\n\n> *Created with ❤️ by Janith Rashmika* \n\n> *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD*  \n*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x394636 = "\n🎥 *MP4 Download Found!* \n\n➥ *Title:* " + _0x2773e.title + " \n➥ *Duration:* " + _0x2773e.timestamp + " \n➥ *Views:* " + _0x2773e.views + " \n➥ *Uploaded On:* " + _0x2773e.ago + " \n➥ *Link:* " + _0x2773e.url + " \n\n🎬 *Enjoy the video brought to you by Queen Anju Bot!* \n";
    const _0x2d3134 = {
      url: _0x2773e.thumbnail
    };
    const _0x4c6be5 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x4c6be5.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x4c6be5.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x4c6be5.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x4c6be5.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x4c6be5.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x4c6be5.externalAdReply.mediaType = 0x1;
    _0x4c6be5.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x4c6be5.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x4c6be5.externalAdReply.renderLargerThumbnail = false;
    _0x4c6be5.externalAdReply.showAdAttribution = true;
    const _0x2c3d18 = {
      image: _0x2d3134,
      caption: _0x279036,
      contextInfo: _0x4c6be5
    };
    const _0x3f6326 = await _0xcf45d9.sendMessage(_0x227747, _0x2c3d18);
    const _0x493274 = _0x3f6326.key.id;
    _0xcf45d9.ev.on("messages.upsert", async _0x364656 => {
      const _0x2e7092 = _0x364656.messages[0];
      if (!_0x2e7092.message) {
        return;
      }
      const _0x42d2f9 = _0x2e7092.message.conversation || _0x2e7092.message.extendedTextMessage?.["text"];
      const _0x1f5fba = _0x2e7092.key.remoteJid;
      const _0x349660 = _0x2e7092.message.extendedTextMessage && _0x2e7092.message.extendedTextMessage.contextInfo.stanzaId === _0x493274;
      if (_0x349660) {
        const _0x3b9766 = {
          text: '⬇️',
          key: _0x2e7092.key
        };
        const _0x101b09 = {
          react: _0x3b9766
        };
        await _0xcf45d9.sendMessage(_0x1f5fba, _0x101b09);
        if (_0x42d2f9 === "1.1") {
          const _0x31f5f5 = await ytmp4('' + _0x57bff2, "360p");
          const _0x354a4a = {
            text: '⬆️',
            key: _0x2e7092.key
          };
          const _0x5798fc = {
            react: _0x354a4a
          };
          await _0xcf45d9.sendMessage(_0x1f5fba, _0x5798fc);
          const _0x3e789d = {
            url: _0x31f5f5
          };
          const _0x17c914 = {
            mentionedJid: ["94717775628@s.whatsapp.net"],
            groupMentions: [],
            forwardingScore: 0x3e7,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {},
            externalAdReply: {}
          };
          _0x17c914.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x17c914.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x17c914.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x17c914.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x17c914.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x17c914.externalAdReply.mediaType = 0x1;
          _0x17c914.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x17c914.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x17c914.externalAdReply.renderLargerThumbnail = false;
          _0x17c914.externalAdReply.showAdAttribution = true;
          const _0x4fc3c1 = {
            video: _0x3e789d,
            caption: _0x394636,
            contextInfo: _0x17c914
          };
          await _0xcf45d9.sendMessage(_0x1f5fba, _0x4fc3c1);
        } else {
          if (_0x42d2f9 === "1.2") {
            const _0x461166 = await ytmp4('' + _0x57bff2, "480");
            const _0x319fb4 = {
              text: '⬆️',
              key: _0x2e7092.key
            };
            const _0x38edd9 = {
              react: _0x319fb4
            };
            await _0xcf45d9.sendMessage(_0x1f5fba, _0x38edd9);
            const _0xcd9a22 = {
              url: _0x461166
            };
            const _0x31c8d3 = {
              mentionedJid: ["94717775628@s.whatsapp.net"],
              groupMentions: [],
              forwardingScore: 0x3e7,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {},
              externalAdReply: {}
            };
            _0x31c8d3.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x31c8d3.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x31c8d3.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x31c8d3.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x31c8d3.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x31c8d3.externalAdReply.mediaType = 0x1;
            _0x31c8d3.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x31c8d3.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x31c8d3.externalAdReply.renderLargerThumbnail = false;
            _0x31c8d3.externalAdReply.showAdAttribution = true;
            const _0x1133bc = {
              video: _0xcd9a22,
              caption: _0x394636,
              contextInfo: _0x31c8d3
            };
            await _0xcf45d9.sendMessage(_0x1f5fba, _0x1133bc);
          } else {
            if (_0x42d2f9 === "1.3") {
              const _0x3a2928 = await ytmp4('' + _0x57bff2, "720");
              const _0x5d7f6a = {
                text: '⬆️',
                key: _0x2e7092.key
              };
              const _0xb1f69b = {
                react: _0x5d7f6a
              };
              await _0xcf45d9.sendMessage(_0x1f5fba, _0xb1f69b);
              const _0xb7aa02 = {
                url: _0x3a2928
              };
              const _0x319b2d = {
                mentionedJid: ["94717775628@s.whatsapp.net"],
                groupMentions: [],
                forwardingScore: 0x3e7,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {},
                externalAdReply: {}
              };
              _0x319b2d.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
              _0x319b2d.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x319b2d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x319b2d.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x319b2d.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x319b2d.externalAdReply.mediaType = 0x1;
              _0x319b2d.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
              _0x319b2d.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
              _0x319b2d.externalAdReply.renderLargerThumbnail = false;
              _0x319b2d.externalAdReply.showAdAttribution = true;
              const _0x25a4a5 = {
                video: _0xb7aa02,
                caption: _0x394636,
                contextInfo: _0x319b2d
              };
              await _0xcf45d9.sendMessage(_0x1f5fba, _0x25a4a5);
            } else {
              if (_0x42d2f9 === "1.4") {
                const _0x3abf2b = await ytmp4('' + _0x57bff2, "1080");
                const _0x5d06a9 = {
                  text: '⬆️',
                  key: _0x2e7092.key
                };
                const _0x216713 = {
                  react: _0x5d06a9
                };
                await _0xcf45d9.sendMessage(_0x1f5fba, _0x216713);
                const _0x3db0fb = {
                  url: _0x3abf2b
                };
                const _0xffd11d = {
                  mentionedJid: ["94717775628@s.whatsapp.net"],
                  groupMentions: [],
                  forwardingScore: 0x3e7,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {},
                  externalAdReply: {}
                };
                _0xffd11d.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                _0xffd11d.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0xffd11d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0xffd11d.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0xffd11d.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0xffd11d.externalAdReply.mediaType = 0x1;
                _0xffd11d.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                _0xffd11d.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                _0xffd11d.externalAdReply.renderLargerThumbnail = false;
                _0xffd11d.externalAdReply.showAdAttribution = true;
                const _0x1d41b2 = {
                  video: _0x3db0fb,
                  caption: _0x394636,
                  contextInfo: _0xffd11d
                };
                await _0xcf45d9.sendMessage(_0x1f5fba, _0x1d41b2);
              } else {
                if (_0x42d2f9 === "2.1") {
                  const _0x1d889b = await ytmp4('' + _0x57bff2, "360");
                  const _0x16ea17 = {
                    text: '⬆️',
                    key: _0x2e7092.key
                  };
                  const _0x15b27f = {
                    react: _0x16ea17
                  };
                  await _0xcf45d9.sendMessage(_0x1f5fba, _0x15b27f);
                  const _0x1c01c2 = {
                    url: _0x1d889b
                  };
                  const _0x1e1299 = {
                    document: _0x1c01c2,
                    mimetype: "video/mp4",
                    fileName: _0x2773e.title + ".mp4",
                    caption: _0x394636,
                    contextInfo: {}
                  };
                  _0x1e1299.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                  _0x1e1299.contextInfo.groupMentions = [];
                  _0x1e1299.contextInfo.forwardingScore = 0x3e7;
                  _0x1e1299.contextInfo.isForwarded = true;
                  _0x1e1299.contextInfo.forwardedNewsletterMessageInfo = {};
                  _0x1e1299.contextInfo.externalAdReply = {};
                  _0x1e1299.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                  _0x1e1299.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x1e1299.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                  _0x1e1299.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x1e1299.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x1e1299.contextInfo.externalAdReply.mediaType = 0x1;
                  _0x1e1299.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                  _0x1e1299.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                  _0x1e1299.contextInfo.externalAdReply.renderLargerThumbnail = false;
                  _0x1e1299.contextInfo.externalAdReply.showAdAttribution = true;
                  await _0xcf45d9.sendMessage(_0x1f5fba, _0x1e1299);
                } else {
                  if (_0x42d2f9 === "2.2") {
                    const _0x49329a = await ytmp4('' + _0x57bff2, "480");
                    const _0x393661 = {
                      text: '⬆️',
                      key: _0x2e7092.key
                    };
                    const _0x4f0bb4 = {
                      react: _0x393661
                    };
                    await _0xcf45d9.sendMessage(_0x1f5fba, _0x4f0bb4);
                    const _0xda0e1e = {
                      url: _0x49329a
                    };
                    const _0x5a0252 = {
                      document: _0xda0e1e,
                      mimetype: "video/mp4",
                      fileName: _0x2773e.title + ".mp4",
                      caption: _0x394636,
                      contextInfo: {}
                    };
                    _0x5a0252.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                    _0x5a0252.contextInfo.groupMentions = [];
                    _0x5a0252.contextInfo.forwardingScore = 0x3e7;
                    _0x5a0252.contextInfo.isForwarded = true;
                    _0x5a0252.contextInfo.forwardedNewsletterMessageInfo = {};
                    _0x5a0252.contextInfo.externalAdReply = {};
                    _0x5a0252.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                    _0x5a0252.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x5a0252.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                    _0x5a0252.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x5a0252.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x5a0252.contextInfo.externalAdReply.mediaType = 0x1;
                    _0x5a0252.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                    _0x5a0252.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                    _0x5a0252.contextInfo.externalAdReply.renderLargerThumbnail = false;
                    _0x5a0252.contextInfo.externalAdReply.showAdAttribution = true;
                    await _0xcf45d9.sendMessage(_0x1f5fba, _0x5a0252);
                  } else {
                    if (_0x42d2f9 === "2.3") {
                      const _0xadab22 = await ytmp4('' + _0x57bff2, "720");
                      const _0x1529b8 = {
                        text: '⬆️',
                        key: _0x2e7092.key
                      };
                      const _0x322639 = {
                        react: _0x1529b8
                      };
                      await _0xcf45d9.sendMessage(_0x1f5fba, _0x322639);
                      const _0x4b98b4 = {
                        url: _0xadab22
                      };
                      const _0x121837 = {
                        document: _0x4b98b4,
                        mimetype: "video/mp4",
                        fileName: _0x2773e.title + ".mp4",
                        caption: _0x394636,
                        contextInfo: {}
                      };
                      _0x121837.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                      _0x121837.contextInfo.groupMentions = [];
                      _0x121837.contextInfo.forwardingScore = 0x3e7;
                      _0x121837.contextInfo.isForwarded = true;
                      _0x121837.contextInfo.forwardedNewsletterMessageInfo = {};
                      _0x121837.contextInfo.externalAdReply = {};
                      _0x121837.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                      _0x121837.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x121837.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                      _0x121837.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x121837.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x121837.contextInfo.externalAdReply.mediaType = 0x1;
                      _0x121837.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                      _0x121837.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                      _0x121837.contextInfo.externalAdReply.renderLargerThumbnail = false;
                      _0x121837.contextInfo.externalAdReply.showAdAttribution = true;
                      await _0xcf45d9.sendMessage(_0x1f5fba, _0x121837);
                    } else {
                      if (_0x42d2f9 === "2.4") {
                        const _0x35a8b9 = await ytmp4('' + _0x57bff2, "1080");
                        const _0x20b7e3 = {
                          text: '⬆️',
                          key: _0x2e7092.key
                        };
                        const _0xcfdf5f = {
                          react: _0x20b7e3
                        };
                        await _0xcf45d9.sendMessage(_0x1f5fba, _0xcfdf5f);
                        const _0x494c36 = {
                          url: _0x35a8b9
                        };
                        const _0xc37e54 = {
                          document: _0x494c36,
                          mimetype: "video/mp4",
                          fileName: _0x2773e.title + ".mp4",
                          caption: _0x394636,
                          contextInfo: {}
                        };
                        _0xc37e54.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                        _0xc37e54.contextInfo.groupMentions = [];
                        _0xc37e54.contextInfo.forwardingScore = 0x3e7;
                        _0xc37e54.contextInfo.isForwarded = true;
                        _0xc37e54.contextInfo.forwardedNewsletterMessageInfo = {};
                        _0xc37e54.contextInfo.externalAdReply = {};
                        _0xc37e54.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                        _0xc37e54.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0xc37e54.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                        _0xc37e54.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0xc37e54.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0xc37e54.contextInfo.externalAdReply.mediaType = 0x1;
                        _0xc37e54.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                        _0xc37e54.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                        _0xc37e54.contextInfo.externalAdReply.renderLargerThumbnail = false;
                        _0xc37e54.contextInfo.externalAdReply.showAdAttribution = true;
                        await _0xcf45d9.sendMessage(_0x1f5fba, _0xc37e54);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const _0x1767f3 = {
          text: '✅',
          key: _0x2e7092.key
        };
        const _0x220177 = {
          react: _0x1767f3
        };
        await _0xcf45d9.sendMessage(_0x1f5fba, _0x220177);
        console.log("Response sent successfully");
      }
    });
  } catch (_0x18bb7e) {
    console.log(_0x18bb7e);
    _0x160c16('' + _0x18bb7e);
  }
});
const _0x7a9ca = {
  pattern: "ytmp4",
  desc: "Download YouTube videos as MP4.",
  react: '🎥',
  category: "download",
  filename: __filename
};
cmd(_0x7a9ca, async (_0x4d55af, _0xda5fa5, _0x140543, {
  from: _0x3821ed,
  quoted: _0x9963d3,
  body: _0x4d7019,
  isCmd: _0x4406f4,
  command: _0x328fc8,
  args: _0x4ad1dc,
  q: _0x315ba0,
  isGroup: _0x465308,
  sender: _0x500140,
  senderNumber: _0x1f7ecd,
  botNumber2: _0x523000,
  botNumber: _0x473738,
  pushname: _0x5017d2,
  isMe: _0x3c52c3,
  isOwner: _0x93d91c,
  groupMetadata: _0x46cc8b,
  groupName: _0x3400dd,
  participants: _0x1b1cb0,
  groupAdmins: _0x424bf8,
  isBotAdmins: _0x3e8243,
  isAdmins: _0x453462,
  reply: _0x57a770
}) => {
  try {
    if (!_0x315ba0) {
      return _0x57a770("Please provide a YouTube URL or title.");
    }
    _0x315ba0 = convertYouTubeLink(_0x315ba0);
    const _0x2c821c = await yts(_0x315ba0);
    const _0x253658 = _0x2c821c.videos[0];
    const _0x5632eb = _0x253658.url;
    let _0x25aa83 = "\n🎥 *MP4 Download Found!* \n\n➥ *Title:* " + _0x253658.title + " \n➥ *Duration:* " + _0x253658.timestamp + " \n➥ *Views:* " + _0x253658.views + " \n➥ *Uploaded On:* " + _0x253658.ago + " \n➥ *Link:* " + _0x253658.url + " \n\n🎬 *Enjoy the video brought to you by Queen Anju Bot!* \n\n🔽 *To download send:*\n\n*Video File* 🎶\n   1.1 *360*\n   1.2 *480*\n   1.3 *720*\n   1.4 *1080*\n *Document File* 📂\n   2.1 *360*\n   2.2 *480*\n   2.3 *720*\n   2.4 *1080*\n\n> *Created with ❤️ by Janith Rashmika* \n\n> *© 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝘽𝙊𝙏 - MD*  \n*💻 GitHub:* github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x2566b7 = "\n🎥 *MP4 Download Found!* \n\n➥ *Title:* " + _0x253658.title + " \n➥ *Duration:* " + _0x253658.timestamp + " \n➥ *Views:* " + _0x253658.views + " \n➥ *Uploaded On:* " + _0x253658.ago + " \n➥ *Link:* " + _0x253658.url + " \n\n🎬 *Enjoy the video brought to you by Queen Anju Bot!* \n";
    const _0x4280af = {
      url: _0x253658.thumbnail
    };
    const _0x428981 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x428981.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x428981.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x428981.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x428981.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x428981.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x428981.externalAdReply.mediaType = 0x1;
    _0x428981.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x428981.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x428981.externalAdReply.renderLargerThumbnail = false;
    _0x428981.externalAdReply.showAdAttribution = true;
    const _0x4598a6 = {
      image: _0x4280af,
      caption: _0x25aa83,
      contextInfo: _0x428981
    };
    const _0x5b9e78 = await _0x4d55af.sendMessage(_0x3821ed, _0x4598a6);
    const _0x1f9111 = _0x5b9e78.key.id;
    _0x4d55af.ev.on("messages.upsert", async _0x206b9e => {
      const _0x2a1998 = _0x206b9e.messages[0];
      if (!_0x2a1998.message) {
        return;
      }
      const _0x21d49b = _0x2a1998.message.conversation || _0x2a1998.message.extendedTextMessage?.["text"];
      const _0x44ae9d = _0x2a1998.key.remoteJid;
      const _0x3fa14e = _0x2a1998.message.extendedTextMessage && _0x2a1998.message.extendedTextMessage.contextInfo.stanzaId === _0x1f9111;
      if (_0x3fa14e) {
        const _0x34422e = {
          text: '⬇️',
          key: _0x2a1998.key
        };
        const _0x4dbfa7 = {
          react: _0x34422e
        };
        await _0x4d55af.sendMessage(_0x44ae9d, _0x4dbfa7);
        if (_0x21d49b === "1.1") {
          const _0x427e16 = await ytmp4('' + _0x5632eb, "360p");
          const _0x409a01 = {
            text: '⬆️',
            key: _0x2a1998.key
          };
          const _0x3d2bee = {
            react: _0x409a01
          };
          await _0x4d55af.sendMessage(_0x44ae9d, _0x3d2bee);
          const _0x7bcf7b = {
            url: _0x427e16
          };
          const _0x3ec186 = {
            mentionedJid: ["94717775628@s.whatsapp.net"],
            groupMentions: [],
            forwardingScore: 0x3e7,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {},
            externalAdReply: {}
          };
          _0x3ec186.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x3ec186.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x3ec186.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x3ec186.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x3ec186.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x3ec186.externalAdReply.mediaType = 0x1;
          _0x3ec186.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x3ec186.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x3ec186.externalAdReply.renderLargerThumbnail = false;
          _0x3ec186.externalAdReply.showAdAttribution = true;
          const _0x569009 = {
            video: _0x7bcf7b,
            caption: _0x2566b7,
            contextInfo: _0x3ec186
          };
          await _0x4d55af.sendMessage(_0x44ae9d, _0x569009);
        } else {
          if (_0x21d49b === "1.2") {
            const _0xd6da71 = await ytmp4('' + _0x5632eb, "480");
            const _0x5d7e89 = {
              text: '⬆️',
              key: _0x2a1998.key
            };
            const _0x414b6a = {
              react: _0x5d7e89
            };
            await _0x4d55af.sendMessage(_0x44ae9d, _0x414b6a);
            const _0x475601 = {
              url: _0xd6da71
            };
            const _0x1045e8 = {
              mentionedJid: ["94717775628@s.whatsapp.net"],
              groupMentions: [],
              forwardingScore: 0x3e7,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {},
              externalAdReply: {}
            };
            _0x1045e8.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x1045e8.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x1045e8.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x1045e8.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x1045e8.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x1045e8.externalAdReply.mediaType = 0x1;
            _0x1045e8.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x1045e8.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x1045e8.externalAdReply.renderLargerThumbnail = false;
            _0x1045e8.externalAdReply.showAdAttribution = true;
            const _0x3b4be2 = {
              video: _0x475601,
              caption: _0x2566b7,
              contextInfo: _0x1045e8
            };
            await _0x4d55af.sendMessage(_0x44ae9d, _0x3b4be2);
          } else {
            if (_0x21d49b === "1.3") {
              const _0x5532ef = await ytmp4('' + _0x5632eb, "720");
              const _0x211e42 = {
                text: '⬆️',
                key: _0x2a1998.key
              };
              const _0x5cd066 = {
                react: _0x211e42
              };
              await _0x4d55af.sendMessage(_0x44ae9d, _0x5cd066);
              const _0x46bcc6 = {
                url: _0x5532ef
              };
              const _0x230b1d = {
                mentionedJid: ["94717775628@s.whatsapp.net"],
                groupMentions: [],
                forwardingScore: 0x3e7,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {},
                externalAdReply: {}
              };
              _0x230b1d.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
              _0x230b1d.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x230b1d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x230b1d.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x230b1d.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x230b1d.externalAdReply.mediaType = 0x1;
              _0x230b1d.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
              _0x230b1d.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
              _0x230b1d.externalAdReply.renderLargerThumbnail = false;
              _0x230b1d.externalAdReply.showAdAttribution = true;
              const _0x18a116 = {
                video: _0x46bcc6,
                caption: _0x2566b7,
                contextInfo: _0x230b1d
              };
              await _0x4d55af.sendMessage(_0x44ae9d, _0x18a116);
            } else {
              if (_0x21d49b === "1.4") {
                const _0x2b60ae = await ytmp4('' + _0x5632eb, "1080");
                const _0x46a4ba = {
                  text: '⬆️',
                  key: _0x2a1998.key
                };
                const _0x558704 = {
                  react: _0x46a4ba
                };
                await _0x4d55af.sendMessage(_0x44ae9d, _0x558704);
                const _0x892bc4 = {
                  url: _0x2b60ae
                };
                const _0x3a8163 = {
                  mentionedJid: ["94717775628@s.whatsapp.net"],
                  groupMentions: [],
                  forwardingScore: 0x3e7,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {},
                  externalAdReply: {}
                };
                _0x3a8163.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                _0x3a8163.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x3a8163.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0x3a8163.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x3a8163.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x3a8163.externalAdReply.mediaType = 0x1;
                _0x3a8163.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                _0x3a8163.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                _0x3a8163.externalAdReply.renderLargerThumbnail = false;
                _0x3a8163.externalAdReply.showAdAttribution = true;
                const _0x1b9988 = {
                  video: _0x892bc4,
                  caption: _0x2566b7,
                  contextInfo: _0x3a8163
                };
                await _0x4d55af.sendMessage(_0x44ae9d, _0x1b9988);
              } else {
                if (_0x21d49b === "2.1") {
                  const _0x543358 = await ytmp4('' + _0x5632eb, "360");
                  const _0x508f02 = {
                    text: '⬆️',
                    key: _0x2a1998.key
                  };
                  const _0x418e69 = {
                    react: _0x508f02
                  };
                  await _0x4d55af.sendMessage(_0x44ae9d, _0x418e69);
                  const _0xa38330 = {
                    url: _0x543358
                  };
                  const _0x2ca6b3 = {
                    document: _0xa38330,
                    mimetype: "video/mp4",
                    fileName: _0x253658.title + ".mp4",
                    caption: _0x2566b7,
                    contextInfo: {}
                  };
                  _0x2ca6b3.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                  _0x2ca6b3.contextInfo.groupMentions = [];
                  _0x2ca6b3.contextInfo.forwardingScore = 0x3e7;
                  _0x2ca6b3.contextInfo.isForwarded = true;
                  _0x2ca6b3.contextInfo.forwardedNewsletterMessageInfo = {};
                  _0x2ca6b3.contextInfo.externalAdReply = {};
                  _0x2ca6b3.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                  _0x2ca6b3.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x2ca6b3.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                  _0x2ca6b3.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x2ca6b3.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x2ca6b3.contextInfo.externalAdReply.mediaType = 0x1;
                  _0x2ca6b3.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                  _0x2ca6b3.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                  _0x2ca6b3.contextInfo.externalAdReply.renderLargerThumbnail = false;
                  _0x2ca6b3.contextInfo.externalAdReply.showAdAttribution = true;
                  await _0x4d55af.sendMessage(_0x44ae9d, _0x2ca6b3);
                } else {
                  if (_0x21d49b === "2.2") {
                    const _0x116d86 = await ytmp4('' + _0x5632eb, "480");
                    const _0x589744 = {
                      text: '⬆️',
                      key: _0x2a1998.key
                    };
                    const _0x3b7375 = {
                      react: _0x589744
                    };
                    await _0x4d55af.sendMessage(_0x44ae9d, _0x3b7375);
                    const _0x57001a = {
                      url: _0x116d86
                    };
                    const _0x5ec928 = {
                      document: _0x57001a,
                      mimetype: "video/mp4",
                      fileName: _0x253658.title + ".mp4",
                      caption: _0x2566b7,
                      contextInfo: {}
                    };
                    _0x5ec928.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                    _0x5ec928.contextInfo.groupMentions = [];
                    _0x5ec928.contextInfo.forwardingScore = 0x3e7;
                    _0x5ec928.contextInfo.isForwarded = true;
                    _0x5ec928.contextInfo.forwardedNewsletterMessageInfo = {};
                    _0x5ec928.contextInfo.externalAdReply = {};
                    _0x5ec928.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                    _0x5ec928.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x5ec928.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                    _0x5ec928.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x5ec928.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x5ec928.contextInfo.externalAdReply.mediaType = 0x1;
                    _0x5ec928.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                    _0x5ec928.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                    _0x5ec928.contextInfo.externalAdReply.renderLargerThumbnail = false;
                    _0x5ec928.contextInfo.externalAdReply.showAdAttribution = true;
                    await _0x4d55af.sendMessage(_0x44ae9d, _0x5ec928);
                  } else {
                    if (_0x21d49b === "2.3") {
                      const _0x2549e8 = await ytmp4('' + _0x5632eb, "720");
                      const _0x27a246 = {
                        text: '⬆️',
                        key: _0x2a1998.key
                      };
                      const _0x10d9d8 = {
                        react: _0x27a246
                      };
                      await _0x4d55af.sendMessage(_0x44ae9d, _0x10d9d8);
                      const _0x8a64d1 = {
                        url: _0x2549e8
                      };
                      const _0x52baac = {
                        document: _0x8a64d1,
                        mimetype: "video/mp4",
                        fileName: _0x253658.title + ".mp4",
                        caption: _0x2566b7,
                        contextInfo: {}
                      };
                      _0x52baac.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                      _0x52baac.contextInfo.groupMentions = [];
                      _0x52baac.contextInfo.forwardingScore = 0x3e7;
                      _0x52baac.contextInfo.isForwarded = true;
                      _0x52baac.contextInfo.forwardedNewsletterMessageInfo = {};
                      _0x52baac.contextInfo.externalAdReply = {};
                      _0x52baac.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                      _0x52baac.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x52baac.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                      _0x52baac.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x52baac.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x52baac.contextInfo.externalAdReply.mediaType = 0x1;
                      _0x52baac.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                      _0x52baac.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                      _0x52baac.contextInfo.externalAdReply.renderLargerThumbnail = false;
                      _0x52baac.contextInfo.externalAdReply.showAdAttribution = true;
                      await _0x4d55af.sendMessage(_0x44ae9d, _0x52baac);
                    } else {
                      if (_0x21d49b === "2.4") {
                        const _0x747d31 = await ytmp4('' + _0x5632eb, "1080");
                        const _0xe32252 = {
                          text: '⬆️',
                          key: _0x2a1998.key
                        };
                        const _0x36d44c = {
                          react: _0xe32252
                        };
                        await _0x4d55af.sendMessage(_0x44ae9d, _0x36d44c);
                        const _0xfd30f7 = {
                          url: _0x747d31
                        };
                        const _0x59201c = {
                          document: _0xfd30f7,
                          mimetype: "video/mp4",
                          fileName: _0x253658.title + ".mp4",
                          caption: _0x2566b7,
                          contextInfo: {}
                        };
                        _0x59201c.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                        _0x59201c.contextInfo.groupMentions = [];
                        _0x59201c.contextInfo.forwardingScore = 0x3e7;
                        _0x59201c.contextInfo.isForwarded = true;
                        _0x59201c.contextInfo.forwardedNewsletterMessageInfo = {};
                        _0x59201c.contextInfo.externalAdReply = {};
                        _0x59201c.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                        _0x59201c.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0x59201c.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                        _0x59201c.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0x59201c.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0x59201c.contextInfo.externalAdReply.mediaType = 0x1;
                        _0x59201c.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                        _0x59201c.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                        _0x59201c.contextInfo.externalAdReply.renderLargerThumbnail = false;
                        _0x59201c.contextInfo.externalAdReply.showAdAttribution = true;
                        await _0x4d55af.sendMessage(_0x44ae9d, _0x59201c);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const _0x3e9953 = {
          text: '✅',
          key: _0x2a1998.key
        };
        const _0x2e92c7 = {
          react: _0x3e9953
        };
        await _0x4d55af.sendMessage(_0x44ae9d, _0x2e92c7);
        console.log("Response sent successfully");
      }
    });
  } catch (_0x339164) {
    console.log(_0x339164);
    _0x57a770('' + _0x339164);
  }
});
function _0x7e2af6(_0x508099) {
  function _0x51b2d1(_0x14a610) {
    if (typeof _0x14a610 === "string") {
      return function (_0x47e95c) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x14a610 / _0x14a610).length !== 1 || _0x14a610 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x51b2d1(++_0x14a610);
  }
  try {
    if (_0x508099) {
      return _0x51b2d1;
    } else {
      _0x51b2d1(0);
    }
  } catch (_0x13ab17) {}
}
