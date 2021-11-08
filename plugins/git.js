const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git (.*)?', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/KLK1AZz.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/917736936605?text=*Hi*%20*AJNAS*%20*SK*.%20*

*Bot setting video : https://youtu.be/_D4ZYuUSXjs*

*Githublink (Setup)  :    https://github.com/SKDRAGON1/ELSAMWOL*

*Audio commads :   https://github.com/SKDRAGON1/ELSAMWOL/tree/master/uploads*

*Sticker commads : https://github.com/SKDRAGON1/ELSAMWOL/tree/master/uploads*

*Video For Setting Bot : https://youtu.be/_D4ZYuUSXjs* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
