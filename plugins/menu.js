const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚‍♀️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
 ╭─────────────━┈⊷
│*🧚‍♀️ ʙᴏᴛ ɴᴀᴍᴇ*: 𝐊𝐚𝐧𝐠𝐨-𝐌𝐃 
│*👨‍💻 ᴏᴡɴᴇʀ*: 𝐇𝐞𝐜𝐭𝐨𝐫 𝐌𝐚𝐧𝐮𝐞𝐥   
│*👤 ɴᴜᴍʙᴇʀ*: 233509977126
│
│*🧬Version*: 1.0.0
│*💻 HOST* :  fv-az661-842
│*💫 ᴘʀᴇғɪx:* .
╰─────────────━┈⊷ 

╭━❮ 𝙰𝙸 ❯━╮
┃◆ .𝙰𝚒
╰━━━━━━━━━━━━━━━⪼
╭━◆ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 ◆━╮
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝚁𝙴𝚂𝚃𝙰𝚁𝚃
┃◆ .𝙿𝚒𝚗𝚐
┃◆ .𝚅𝚒𝚍𝚎𝚘
┃◆ .𝙿𝙻𝙰𝚈
┃◆ .𝙺𝚊𝚗𝚐𝚘
┃◆ .𝙵𝙰𝙲𝚃
┃
╰━━━━━━━━━━━━━━━⪼


 > ©▂▃▅▇█▓▒░𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙷𝚎𝚌𝚝𝚘𝚛 𝙼𝚊𝚗𝚞𝚎𝚕░▒▓█▇▅▃▂
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/q1k87h.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
