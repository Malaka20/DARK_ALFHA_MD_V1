
const config = require('../config')
const { cmd, commands } = require('../command')


cmd({
    pattern: "apk",
    react: "📱",
    alias: ["findapk","playstore"],
    category: "download",
    use: '.apk whatsapp',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await apkdl.search(q)
const data = data2
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
    const rows = []
for (var i = 0; i < data.length; i++)


 {

    rows.push({
        header: '',
        title: `${data[i].name}`,
        description: '',
        id: prefix + `dapk ${data[i].id}`
    })

}
let buttons = [{
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: config.BTN,
            url: config.BTNURL,
            merchant_url: config.BTNURL
        }),
    },
    {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: 'Select a Category :)',
            sections: [{
                title: 'Please select a category',
                highlight_label: 'DARK SHUTER',
                rows: rows

            }]
        }),
    }

]

let MNG = `\`✦ 𝗗𝗔𝗥𝗞 𝗦𝗛𝗨𝗧𝗘𝗥 𝗠𝗗 𝗩2 ✦\`

      ❒ 𝗔𝗽𝗸 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿 ❒

\`Apk name :\` ${q}


`

let opts = {
    image: config.LOGO,
    header: '',
    footer: config.FOOTER,
    body: MNG

}
return await conn.sendButtonMessage(from, buttons, m, opts)
} catch (e) {
    reply('ERROR !!')

   console.log(e)
}
})
