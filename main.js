//Creaed By Danny
//wa.me/255697608274

require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: GlobalTechIncConnect, delay, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers } = require("@whiskeysockets/baileys")
const PHONENUMBER_MCC = require('./lib/PairingPatch');
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@whiskeysockets/baileys").default

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

let phoneNumber = "255697608274"
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
         
async function startGlobalTechInc() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache()
    const GlobalTechInc = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
        browser: Browsers.windows('Firefox'),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        getMessage: async (key) => {
            let jid = jidNormalizedUser(key.remoteJid)
            let msg = await store.loadMessage(jid, key.id)
            return msg?.message || ""
        },
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
    })
   
    store.bind(GlobalTechInc.ev)

    if (pairingCode && !GlobalTechInc.authState.creds.registered) {
        if (useMobile) throw new Error('Cannot use pairing code with mobile API')

        let phoneNumber
        if (!!phoneNumber) {
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
                console.log(chalk.bgBlack(chalk.redBright("Start with the country code of your WhatsApp Number, e.g., 255697608274")))
                process.exit(0)
            }
        } else {
            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😂\nExample: 255697608274 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
        }

        setTimeout(async () => {
            let code = await GlobalTechInc.requestPairingCode(phoneNumber)
            code = code?.match(/.{1,4}/g)?.join("-") || code
            console.log(chalk.black(chalk.bgGreen(`Your Creepy Pairing Code: `)), chalk.black(chalk.white(code)))
        }, 3000)
    }

    GlobalTechInc.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast')
            if (!GlobalTechInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(GlobalTechInc, mek, store)
            require("./creepymd1")(GlobalTechInc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    GlobalTechInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    GlobalTechInc.public = true

    GlobalTechInc.serializeM = (m) => smsg(GlobalTechInc, m, store)

    GlobalTechInc.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
            console.log(chalk.yellow(`🤖 Connected to => ` + JSON.stringify(GlobalTechInc.user, null, 2)))
            await delay(1999)
            console.log(chalk.cyan(`< ================================================== >`))
        }
        if (connection === "close" && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
            startGlobalTechInc()
        }
    })

    GlobalTechInc.ev.on('creds.update', saveCreds)
    GlobalTechInc.sendText = (jid, text, quoted = '', options) => GlobalTechInc.sendMessage(jid, { text, ...options }, { quoted, ...options })
}

return startGlobalTechInc()

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
    console.log('Caught exception: ', err)
})
