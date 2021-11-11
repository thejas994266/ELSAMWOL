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


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 *AJNAS SK* 𝐛𝐨𝐭.
            *ELSAMWOL*

 text  on 
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
🍙𝙐𝙨𝙚➜   Dictionary [-dict en;anime]

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
🍙𝙐𝙨𝙚➜   Tells you about your horoscope.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
🍙𝙐𝙨𝙚➜   Converts text into qr code.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
🍙𝙐𝙨𝙚➜  Gives you info about movie.
⚠️movie master

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
🍙𝙐𝙨𝙚➜  Gives you info about anime.
⚠️anime pikachu
■□■□■□■□■Pikachu□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
🍙𝙐𝙨𝙚➜ Converts img/gif into a sticker.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
🍙𝙐𝙨𝙚➜ Converts sticker into image.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
🍙𝙐𝙨𝙚➜ Converts text into glowing sticker.
⚠️ex  attp Elsa Mwol
■□■□■□■□■□■□■□■□■□■□

▣▣▣▣▣▣▣▣▣✩ᴀᴊɴᴀꜱ ꜱᴋ✩▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
