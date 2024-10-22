const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/GWyFJPj/20241013-212512.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am Dark alfha i am alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
