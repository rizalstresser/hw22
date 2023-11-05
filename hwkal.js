// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/JGvGRES22WvJ41IIkgW7Gc'
global.ig = 'www.vegeta.cloud' // ubah aja
global.email = 'rizalstresser@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'RizalTzy' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://reseller.rizalxalfi.com' // Isi Domain Lu
global.apikey2 = 'ptla_GCTbr872qRTzi8ssOHrXluJs6cvdXXmpS76rOx9pkXW' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_4fO85Fc8ICGUHAh03lAqt3jW69mW9AHzdt2SS4IlulS' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.owner = ['62895803540003']// ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Vegeta' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'RizalTzy' // ubah aja ini nama sticker
global.author = '62895803540003' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})