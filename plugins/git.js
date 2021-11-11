const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/FxFHZRh.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ᴇʟꜱᴀᴍᴡᴏʟ created by ✩ᴀᴊɴᴀꜱ ꜱᴋ✩*
*Creator number : wa.me/994407231657?text=HI%20ELSAMWOL%20✩ᴀᴊɴᴀꜱꜱᴋ✩.%20*

*Bot setting video : https://youtu.be/L8E4enqfYik*

*Githublink (Setup)  :    https://github.com/SKDRAGON1/ELSAMWOL*

*Audio commads :   https://github.com/SKDRAGON1/ELSAMWOL/tree/master/uploads*

*Sticker commads : https://github.com/SKDRAGON1/ELSAMWOL/tree/master/uploads*

*Video For Setting Bot : https://youtu.be/L8E4enqfYik* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
