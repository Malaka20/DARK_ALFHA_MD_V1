const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const metadata = [
    {
        "command": "fb",
        "desc": "Download facebook videos",
        "example": "fb https://web.facebook.com/watch/?mibextid=6aamW6&v=535935245442639",
        "type": "download"
    }
];

const system = require('../src/system');
const config = require('../config');
const { fetchFbVideoDetails } = require('../lib/fb-core');

module.exports = async (sock, m, query, callback) => {

              
    const data = await fetchFbVideoDetails(query);   
    await sock.sendMessage(m.key.remoteJid, { react: { text: "🔎", key: m.key } });
               

               
    if (data) { 

        await sock.sendMessage(m.key.remoteJid, { react: { text: "🗃️", key: m.key } });
        

                    const lite = '`';

                    const BodyMessage =  
`╭─━━━━━━( *● WT-MD ●* )━━━━━─◉
│
│  ${lite}FB VIDEO DOWNLOADER${lite}
│
╰─━━━━━━━━━━━━━━━━━━━─◉`;
       
                        const FooterMessage = system.botFooter;
                        const Buttons = [
                            {
                                "text": "HD (720p)",
                                "type": "reply", 
                                "id": `${config.Prefix}fbhd ${query}-btn`
                            },
                            {
                                "text": "SD (360p)",
                                "type": "reply", 
                                "id": `${config.Prefix}fbsd ${query}-btn`
                            },
                        ];

                        await callback({
                            BodyMessage,
                            FooterMessage,
                            Buttons,
                            MType: 'buttonMessage',
                        });
                } else {
                    BodyMessage = '*Video not found (404)*';    
                    callback({
                        BodyMessage
                    });
                    await sock.sendMessage(m.key.remoteJid, { react: { text: "⚠️", key: m.key } });
        
                }


};
