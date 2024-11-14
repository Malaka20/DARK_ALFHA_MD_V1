const yts = require('yt-search'); // Importing yt-search module

async function ytinfo(query) {
    let searchResults = await yts(query); // Searching YouTube with the provided query
    searchResults = searchResults.all;

    if (searchResults.length < 1) {
        return { success: false }; // If no results, return an object indicating failure
    } else {
        // Get information from the first result
        let thumbnail = searchResults[0].thumbnail;
        let title = searchResults[0].title.replace(/ /g, '+'); // Format the title for URL
        let views = searchResults[0].views;
        let author = searchResults[0].author.name;
        let url = searchResults[0].url;
        let length = searchResults[0].timestamp;

        // Create formatted response messages
        let songMessage = `┌───[🐋AQUA BOT]\n\n📥SONG DOWNLOAD*\n\n│🎧 Song: ${title}\n\n│ 👀 Views: ${views}\n\n│ 📹 Channel: ${author}\n\n│🖇️ URL: ${url}\n\n└───────────`;
        let videoMessage = `┌───[🐋AQUA BOT]\n\n📥VIDEO DOWNLOAD*\n\n│🎧 Video: ${title}\n\n│ 👀 Views: ${views}\n\n│ 📹 Channel: ${author}\n\n│🖇️ URL: ${url}\n\n└───────────`;

        // Return the information as an object
        return {
            songmsg: songMessage,
            vidmsg: videoMessage,
            thumbnail: thumbnail,
            length: length
        };
    }
}

module.exports = ytinfo; // Export the ytinfo function
