const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "📜",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `💗 *Hello ${pushname}* 👋
> DARK-ALFHA-MD* 
╭─────────────────
│❒⁠⁠⁠⁠╭─────────────
│❒⁠⁠⁠⁠│▸ *DOWNLOAD* 
│❒⁠⁠⁠⁠│▸ *MAIN COMMANDS* 
│❒⁠⁠⁠⁠│▸ *GROUP COMMANDS*
│❒⁠⁠⁠⁠╰──────────────
│❒⁠⁠⁠⁠│▸ *OWNER COMMANDS* : ${cm.length} 
│❒⁠⁠⁠⁠│▸ *CONVERT COMMANDS* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠│▸ *SEARCH COMMANDS* : ${os.platform()}
│❒⁠⁠⁠⁠│▸
│❒⁠⁠⁠⁠╰──────────────
╰──────────────────\n
`
await conn.sendMessage(from,{text:madeMenu},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
