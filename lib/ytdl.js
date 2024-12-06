const axios = require("axios");
const qs = require("querystring");
const cheerio = require('cheerio');
const getBuffer = async (_0x16c722, _0x2bba54) => {
  try {
    if (_0x2bba54) {
      _0x2bba54;
    } else {
      ({});
    }
    var _0x5c8b56 = await axios({
      'method': "get",
      'url': _0x16c722,
      'responseType': 'arraybuffer'
    });
    return _0x5c8b56.data;
  } catch (_0x1052bc) {
    console.log(_0x1052bc);
  }
};
async function getsize(_0x3831a5) {
  function _0x1e1d2b(_0x2a3838) {
    let _0x179341 = ['B', 'KB', 'MB', 'GB', 'TB'];
    let _0x5b9b01 = _0x2a3838;
    let _0x4371be;
    for (_0x4371be = 0x0; _0x5b9b01 >= 0x400 && _0x4371be < 0x4; _0x4371be++) {
      _0x5b9b01 /= 0x400;
    }
    return _0x5b9b01.toFixed(0x2) + " " + _0x179341[_0x4371be];
  }
  return _0x1e1d2b(Buffer.byteLength(await getBuffer(_0x3831a5)));
}
ytmp4 = async _0x230ec0 => {
  const _0x3a8280 = {
    'url': _0x230ec0,
    'format': "mp4",
    'lang': 'en'
  };
  let _0x1b7400 = await axios.post("https://s64.notube.net/recover_weight.php", qs.stringify(_0x3a8280));
  let _0x14013a = await axios.get("https://notube.net/en/download?token=" + _0x1b7400.data.token);
  let _0x27ce3d = cheerio.load(_0x14013a.data);
  return {
    'title': _0x27ce3d("#breadcrumbs-section h2").text(),
    'download': _0x27ce3d("#breadcrumbs-section #downloadButton").attr("href"),
    'size': await getsize(_0x27ce3d("#breadcrumbs-section #downloadButton").attr('href'))
  };
};
ytmp4hd = async _0x40abd1 => {
  const _0x580a = {
    'url': _0x40abd1,
    'format': 'mp4hd',
    'lang': 'en'
  };
  let _0x31852d = await axios.post("https://s61.notube.net/recover_weight.php", qs.stringify(_0x580a));
  let _0x2c1b25 = await axios.get('https://notube.net/en/download?token=' + _0x31852d.data.token);
  let _0x1e6231 = cheerio.load(_0x2c1b25.data);
  return {
    'title': _0x1e6231("#breadcrumbs-section h2").text(),
    'download': _0x1e6231("#breadcrumbs-section #downloadButton").attr("href"),
    'size': await getsize(_0x1e6231("#breadcrumbs-section #downloadButton").attr("href"))
  };
};
ytmp3 = async _0x18154e => {
  const _0x49b164 = {
    'url': _0x18154e,
    'format': 'mp3',
    'lang': 'en'
  };
  let _0x1acadd = await axios.post("https://s64.notube.net/recover_weight.php", qs.stringify(_0x49b164));
  let _0x5ef4b5 = await axios.get("https://notube.net/en/download?token=" + _0x1acadd.data.token);
  let _0x2ddeba = cheerio.load(_0x5ef4b5.data);
  return {
    'title': _0x2ddeba("#breadcrumbs-section h2").text(),
    'download': _0x2ddeba("#breadcrumbs-section #downloadButton").attr('href'),
    'size': await getsize(_0x2ddeba("#breadcrumbs-section #downloadButton").attr('href'))
  };
};
module.exports = {
  'ytmp3': ytmp3,
  'ytmp4': ytmp4,
  'ytmp4hd': ytmp4hd
};
