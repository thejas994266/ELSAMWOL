const Shadow = require("../Utilis/events");
const { getBuffer } = require('../Utilis/download');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
//stylish menu - by Shadow

Shadow.addCommand({ pattern: 'menu ?(.*)', fromMe: true, desc: "Simple command list", }, async (message, match) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
    var wish = ''
if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 16) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 16 && hrs <= 20) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 20 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'
    var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 17) am_pm = 'ᴘᴍ'
if (hrs >= 17 && hrs <= 19) am_pm = 'ᴘᴍ'
if (hrs >= 19 && hrs <= 24) am_pm = 'ᴘᴍ'
const spark = [777,0,100,500,1000,999,2021] //items by Shadow
  return await message.sendMessage(`╭────────────────╮
│   ` + wish + `
│       *ᴛɪᴍᴇ*  *⌚` + time + ` ` + am_pm + `*
╰────────────────╯
╭────────────────╮
             ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs
╰────────────────╯
❏ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ ▢ ᴀᴅᴅ
│ ▢ ᴋɪᴄᴋ
│ ▢ ᴍᴜᴛᴇ
│ ▢ ᴜɴᴍᴜᴛᴇ
│ ▢ ᴘʀᴏᴍᴏᴛᴇ
│ ▢ ᴅᴇᴍᴏᴛᴇ
│ ▢ ɪɴᴠɪᴛᴇ
│ ▢ ʀᴇᴠᴏᴋᴇ
│ ▢ ᴊᴏɪɴ
│ ▢ ᴡᴇʟᴄᴏᴍᴇ
│ ▢ ɢᴏᴏᴅʙʏᴇ
│ ▢ ʙᴀɴʙʏᴇ
│ ▢ ʟᴇғᴛ
│ ▢ ᴡᴀʀɴ
│ ▢ ᴠᴏᴛᴇ
│ ▢ ᴛᴀɢ
╰────────────────
❏ ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ ▢ ʏᴛᴠ
│ ▢ ʏᴛs
│ ▢ sᴏɴɢ
│ ▢ ᴠɪᴅᴇᴏ
│ ▢ ɪɴsᴛᴀ
│ ▢ sᴛᴏʀʏ
│ ▢ ғʙ
│ ▢ ɪᴍɢ
│ ▢ ᴡɪᴋɪ
│ ▢ ᴛɪᴋᴛᴏᴋ
│ ▢ ᴛᴡɪᴛᴛᴇʀ
│ ▢ ᴘɪɴᴛʀᴇsᴛ
│ ▢ ᴍᴇᴅɪᴀғɪʀᴇ
╰────────────────
❏ ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ ▢ ᴡᴀsᴛᴇᴅ
│ ▢ ᴛʀɪɢɢᴇᴅ
│ ▢ ʜɪsᴛᴏ
│ ▢ ᴠᴇᴄᴛᴏʀ
│ ▢ ᴀᴠᴇᴄ
│ ▢ ᴍᴘ3
│ ▢ sᴛɪᴄᴋᴇʀ
│ ▢ ᴘʜᴏᴛᴏ
│ ▢ ʀᴇᴠᴇʀᴄᴇ
│ ▢ ᴄᴜᴛ
│ ▢ ᴛʀɪᴍ
│ ▢ ʀᴏᴛᴀᴛᴇ
│ ▢ ᴍᴇʀɢᴇ
│ ▢ ᴄᴏᴍᴘʀᴇss
│ ▢ ʙᴀss
│ ▢ ᴛʀᴇʙʟᴇ
│ ▢ ᴘɪᴛᴄʜ
│ ▢ ʟᴏᴡ
│ ▢ ᴛᴛs
│ ▢ ᴜɴᴠᴏɪᴄᴇ
│ ▢ ᴠᴏɪᴄᴇ
│ ▢ ʀᴇᴍᴏᴠᴇʙɢ
│ ▢ ᴀᴛᴛᴘ
│ ▢ ᴇᴍᴏᴊɪ
│ ▢ ғɪɴᴅ
│ ▢ ᴛʀᴛ
│ ▢ ᴘʟᴜɢɪɴ
│ ▢ ᴘʟᴜɢɪɴ ʟɪsᴛ
│ ▢ ʀᴇᴍᴏᴠᴇ
│ ▢ ғɪʟᴛᴇʀ
│ ▢ ᴊɪᴅ
│ ▢ ʙʟᴏᴄᴋ
│ ▢ ᴜɴʙʟᴏᴄᴋ
│ ▢ sᴇᴛᴀʙᴏᴜᴛ
│ ▢ sᴇᴛsᴛᴀᴛᴜs
│ ▢ ᴛᴀᴋᴇ
│ ▢ ʙʀᴏᴀᴅᴄᴀsᴛ
│ ▢ ᴜʀʟ
│ ▢ ᴡʜᴏɪs
│ ▢ sʜᴇᴅᴜʟᴇ
│ ▢ ᴘɪɴɢ
╰────────────────
❏ ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs
╭────────────────
│ ▢ ʀᴇsᴛᴀʀᴛ
│ ▢ sʜᴜᴛᴅᴏᴡɴ
│ ▢ sᴇᴛᴠᴀʀ
│ ▢ ɢᴇᴛᴠᴀʀ
│ ▢ ᴀʟʟᴠᴀʀ
│ ▢ ᴜᴘᴅᴀᴛᴇ
│ ▢ ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ
╰────────────────`,{quoted : {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
        	"itemCount" : spark[Math.floor(8*Math.random())],
             "status": 1,
           "surface" : 1,
           "message": "      Whatsapp Bot",
           "orderTitle": "menu",
           "sellerJid": '919526808481@s.whatsapp.net' 
        }
      }
}}) //Coded by Shadow...
}); //simple menu
