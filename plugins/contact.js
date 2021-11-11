const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:✩ᴀᴊɴᴀꜱ ꜱᴋ✩ [OWNER]\n' // full name
            + 'ORG:✩ᴀᴊɴᴀꜱ ꜱᴋ✩;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=917736936605:+91 7736936605\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "✩ᴀᴊɴᴀꜱ ꜱᴋ✩ [OWNER]", vcard: vcard}, MessageType.contact)
}))
