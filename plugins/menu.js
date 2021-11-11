const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️Ameer Suhail✨️━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 ✩ᴀᴊɴᴀꜱ ꜱᴋ✩ 𝐛𝐨𝐭.
            *𝐄𝐋𝐒𝐀 𝐌𝐖𝐎𝐋࿐*

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

`}) 

}));
