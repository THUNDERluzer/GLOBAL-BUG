global.namaown = "Hashan" // your owner name here
global.namabot = "Panda" // your bot name here
global.versisc = "9.5.0" //
global.owner = ["94782543893"] // your owner number here
global.tele = "https://t.me/" // your telegram here
global.url = "https://www.youtube.com/" // Your YouTube Here
global.namastore = "LynnZxD" // UBAH NAMA STORE LU
global.simbol = "✪" // You Can Change Simbol
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Ganti Logo Disini
global.painlogo = "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg" 

global.my = {
      saluran: "https://wa.me/qr/P6WADRJOKAFUK1",
      idCH: "120363319098372999@newsletter",
      youtube: "https://wa.me/qr/P6WADRJOKAFUK1",
      telegram: "https://wa.me/qr/P6WADRJOKAFUK1",
      Instagram: "https://wa.me/qr/P6WADRJOKAFUK1"
   }


global.mess = {
    success: 'Done😏',
    admin: '_*❗ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ !*_',
    botAdmin: '_*❗ʙᴏᴛ ᴍᴜꜱᴛ ʙᴇ ᴛʜᴇ ᴀᴅᴍɪɴ !*_',
    OnlyOwner: '_*❗ᴏᴡɴᴇʀꜱ ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ !*_',
    OnlyGrup: '_*❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ɢʀᴏᴜᴘ !*_',
    private: '_(❗ꜱᴘᴇᴄɪᴀʟ ꜰᴜɴᴄᴛɪᴏɴ ꜰᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ !*_',
    wait: '_*ᴘʀᴏᴄᴇꜱꜱɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*_',
    notregist: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ʀᴇɢɪꜱᴛᴇʀᴇᴅ*_',
    premium: '_*ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴘʀᴇᴍɪᴜᴍ_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 WIB_*.',
     bugrespon: `\`[ ! ]\`ᴡᴀɪᴛ ; ᴄᴜʀʀᴇɴᴛʟʏ ꜱᴇɴᴅɪɴɢ ᴠɪʀᴜꜱ ᴀᴛᴛᴀᴄᴋ`,
     donebug: `\`[ ! ]\`ᴠɪʀᴜꜱ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ`,
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
