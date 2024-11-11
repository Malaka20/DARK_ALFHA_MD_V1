const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "youre session id",
MONGODB: process.env.MONGODB || "enter mongodb here",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/5Rp1c5q/20241111-195552.jpg",
BOT_NUMBER: process.env.BOT_NUMBER || "94704243771",
PREFIX: process.env.PREFIX || '.',
LANG: process.env.BOT_LANG || 'EN' ,
};
