const crypto = require('crypto');
const axios = require('axios');
const { cmd, commands } = require('../command');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const config = require('../config');
const { igdl } = require('ruhend-scraper');

cmd({
    pattern: "moviedl",
    desc: "Fetch detailed information about a movie.",
    category: "movie",
    react: "🎬",
    use: '.movie',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        
        const response = await axios.get(apiUrl);

        const data = response.data;
        if (data.Response === "False") {
            return reply("🚫 Movie not found.");
        }

        const movieInfo = `
🔮 *MOVIE INFORMATION* 🔮

🎥 *Title:* ${data.Title}
📅 *Year:* ${data.Year}
🌟 *Rated:* ${data.Rated}
📆 *Released:* ${data.Released}
⏳ *Runtime:* ${data.Runtime}
🎭 *Genre:* ${data.Genre}
🎬 *Director:* ${data.Director}
✍️ *Writer:* ${data.Writer}
🎭 *Actors:* ${data.Actors}
📝 *Plot:* ${data.Plot}
🌍 *Language:* ${data.Language}
🇺🇸 *Country:* ${data.Country}
🏆 *Awards:* ${data.Awards}
⭐ *IMDB Rating:* ${data.imdbRating}
🗳️ *IMDB Votes:* ${data.imdbVotes}
`;

        

        // Send the movie information along with the poster image
        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> *🔮 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 💃ᴍᴀʟᴀᴋᴀ-ᴍᴅ ʙʏ ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ 🤍*`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e.message}`);
    }
});
