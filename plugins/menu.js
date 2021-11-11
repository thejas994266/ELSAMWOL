const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/28KsnoW.mp4";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️AJNAS SK✨️━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 𝐄𝐥𝐬𝐚 𝐌𝐰𝐨𝐥 𝐛𝐨𝐭.
      *𝐄𝐋𝐒𝐀 𝐌𝐖𝐎𝐋࿐*

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
╰────────────────




`}) 

}));
