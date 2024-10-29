const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/XWggNqz/20241027-181936.jpg",
};
