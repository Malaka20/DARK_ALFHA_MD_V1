const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "wEIxUDBL#3W7t4Cw5TKba1pHP42RJJHzhpnp2V-HLy2C60J6Y3D0",
MONGODB: process.env.MONGODB || "mongodb://mongo:PIDRqpahCzzZlpwYFWqShxAURtcFoRje@autorack.proxy.rlwy.net:32217",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/QNwLWTN/20241201-230018.jpg",
BOT_NAME: process.env.BOT_NAME || "➺ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ࿐",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",
};
