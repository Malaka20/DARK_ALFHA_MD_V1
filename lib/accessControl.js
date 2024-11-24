const axios = require("axios");
const fs = require('fs');
const path = require("path");
const config = require("../config");
let blacklistedJIDs = [];
let premiumJIDs = [];
let developers = [];
let dataLoaded = false;
async function loadData() {
  try {
    blacklistedJIDs = [];
    premiumJIDs = [];
    developers = [];
    const _0x559109 = path.join(__dirname, '../lib/blacklist.json');
    try {
      const _0x41d63f = fs.readFileSync(_0x559109, "utf8");
      blacklistedJIDs = JSON.parse(_0x41d63f).jids || [];
      console.log("Blacklisted JIDs loaded from local file:", blacklistedJIDs);
    } catch (_0x485ea2) {
      console.error("Error loading blacklist from local file:", _0x485ea2);
      console.log("Falling back to remote URL for blacklist.");
    }
    const _0x325a46 = await axios.get("https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/main/blacklist.json")['catch'](_0x50ecab => {
      console.error("Error loading blacklist from remote URL:", _0x50ecab);
      return {
        'data': {
          'jids': []
        }
      };
    });
    blacklistedJIDs = _0x325a46.data.jids || blacklistedJIDs;
    const _0x594e8f = await axios.get("https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/main/premium.json")['catch'](_0x434f91 => {
      console.error("Error loading premium list:", _0x434f91);
      return {
        'data': {
          'jids': []
        }
      };
    });
    premiumJIDs = _0x594e8f.data.jids || [];
    const _0x57c3f4 = await axios.get("https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/main/developers.json")["catch"](_0x13a929 => {
      console.error("Error loading developers list:", _0x13a929);
      return {
        'data': {
          'jids': []
        }
      };
    });
    developers = _0x57c3f4.data.jids || [];
    console.log("Premium JIDs and Developer JIDs loaded:", premiumJIDs, developers);
    dataLoaded = true;
  } catch (_0x121ef8) {
    console.error("Error loading data:", _0x121ef8);
  }
}
function isPremiumUser(_0x484a33) {
  return premiumJIDs.includes(_0x484a33);
}
function isDeveloper(_0x4552b9) {
  return developers.includes(_0x4552b9);
}
function checkAccess(_0xb952fd, _0x8a3a90) {
  if (!dataLoaded) {
    console.log("Data not loaded yet. Please wait.");
    return false;
  }
  console.log("Checking access for:", _0xb952fd);
  const _0x5b29cd = _0xb952fd === config.OWNER_NUMBER;
  if (blacklistedJIDs.includes(_0xb952fd)) {
    console.log(_0xb952fd + " is blacklisted. Access denied.");
    return false;
  }
  if (developers.includes(_0xb952fd)) {
    console.log(_0xb952fd + " is a developer. Full access granted.");
    return true;
  }
  if (premiumJIDs.includes(_0xb952fd)) {
    console.log(_0xb952fd + " is a premium user. Access granted for premium commands.");
    return true;
  }
  switch (config.mode) {
    case 'private':
      return _0x5b29cd;
    case "public":
      return true;
    case "inbox":
      return _0x5b29cd || !_0x8a3a90;
    case "groups":
      return _0x5b29cd || _0x8a3a90;
    default:
      return _0x5b29cd;
  }
}
loadData();
module.exports = {
  'checkAccess': checkAccess,
  'isPremiumUser': isPremiumUser,
  'isDeveloper': isDeveloper,
  'blacklistedJIDs': blacklistedJIDs,
  'premiumJIDs': premiumJIDs,
  'developers': developers,
  'dataLoaded': dataLoaded
};
