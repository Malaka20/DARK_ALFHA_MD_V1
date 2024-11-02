/**
 * @author vishwamihiranga
 * @description BHASHI-MD WhatsApp Bot Command Template
 * @version 1.0.0
 */


const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
    pattern: "ghsearch",
    desc: "Search GitHub repositories",
    category: "search",
    react: "🔍",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply(`❌ Please provide a search query!\n\n*Example:* .ghsearch BHASHI-MD`);

        // API configuration
        const API_URL = "http://94.72.102.160:3000/misc/github-search";
        const API_KEY = "manula";
        const response = await axios.get(API_URL, {
            params: {
                query: q,
                limit: 10,
                sort: 'stars',
                order: 'desc',
                apikey: API_KEY
            }
        });

        if (response.data.status !== "success" || !response.data.data.length) {
            return reply("❌ No repositories found!");
        }

        // Format repository data
        let message = `*🔍 GitHub Search Results for "${q}"*\n\n`;

        response.data.data.forEach((repo, index) => {
            message += `*${index + 1}. ${repo.name}*\n`;
            message += `├ *Description:* ${repo.description || 'No description'}\n`;
            message += `├ *Owner:* ${repo.owner.login}\n`;
            message += `├ *Language:* ${repo.language || 'Not specified'}\n`;
            message += `├ *Stars:* ⭐ ${repo.stars}\n`;
            message += `├ *Forks:* 🔄 ${repo.forks}\n`;
            message += `├ *Created:* ${new Date(repo.createdAt).toLocaleDateString()}\n`;
            message += `├ *Updated:* ${new Date(repo.updatedAt).toLocaleDateString()}\n`;
            message += `└ *URL:* ${repo.url}\n\n`;
        });

        message += `\n📊 *Total Results:* ${response.data.data.length}`;
        message += `\n\n💡 _Use .ghsearch <query> to search for repositories_`;

        await conn.sendMessage(from, {
            text: message,
            contextInfo: {
                externalAdReply: {
                    title: "GitHub Repository Search",
                    body: `Results for "${q}"`,
                    thumbnail: await conn.getBuffer("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"),
                    mediaType: 1,
                    mediaUrl: "https://github.com",
                    sourceUrl: "https://github.com"
                }
            }
        });

    } catch (error) {
        console.error('Error in GitHub search command:', error);
        reply('❌ An error ');
    }
});

// https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k
