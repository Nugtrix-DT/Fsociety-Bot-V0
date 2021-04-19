exports.wait = () => {
	return`*「 ESPERA 」 EN PROCESO..🍁*`
}

exports.succes = () => {
	return`*「 ❗EXITO❗ 」*`
}

exports.lvlon = () => {
	return`*「 ACTIVAR 」 NIVELACION*`
}

exports.lvloff = () => {
	return`*「 DESACTIVAR 」 NIVELACION*`
}

exports.lvlnul = () => {
	return`*SU NIVEL ESTA ACTIVO*`
}

exports.baned = () => {
	return`*LU KE BAN NJIRR LU KEK KONTOL SI*`
}

exports.lvlnoon = () => {
	return`*NIVEL DEL GRUPO NO ACTIVADO*`
}

exports.noregis = () => {
	return`*「 NO ESTA REGISTRADO 」*\n\n*Registrese primero*
 *Ejemplo = ${prefix}daftar ${pushname}|15*`
}

exports.rediregis = () => {
	return`*「 YA ESTA REGISTRADO 」*\n\n*Ya esta registrado en la base de datos del Bot*`
}

exports.stikga = () => {
	return`*Si fallo intenta en otro mento*`
}

exports.linkga = () => {
	return`*El enlace es invalido*`
}

exports.groupo = () => {
	return`*「SOLO GRUPO」*`
}

exports.ownerb = () => {
	return`*「SOLO PROPIETARIO DEL BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO GRUPO DE PROPIETARIOS」*`
}

exports.admin = () => {
	return`*「SOLO GRUPO DEL ADMINISTRADOR」*`
}

exports.badmin = () => {
	return`*「EL BOT TIENE QUE TENER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTA INACTIVO*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATOS DE USUARIO」*\n\YA ESTAS REGISTRADO EN LA BASE DE DATOS DEL BOT, DISFRUTA.\n\n┏━➤NOMBRE\n┗➤${namaUser}\n┏━➤NUMERO\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤EDAD\n┗➤${umurUser}\n┏━➤TIEMPO DE CONE\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : ғᴇʟɪᴄɪᴅᴀᴅᴇs ᴘᴏʀ ᴛᴜ ʀᴇɢɪsᴛʀᴏ sᴇᴍᴘᴀɪ ᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ʙᴏᴛ ᴛʀᴀɪᴅᴏ ᴘᴏʀ: ℘ɴᏌᏩᎢᎡᏆx-ᴰᵀ℘
 ▪️${prefix}rules ᏢᎪᎡᎪ QᏌᎬ ᏙᎬᎪᏚ ᏞᎪᏚ ᎡᎬᏩᏞᎪᏚ.`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 OMEDETOU 」*
┏𖥻ꦼꦽ➳ *Nombre* : ${pushname}
┣𖥻ꦼꦽ➳ *Numero* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nombre* : ${pushname}\n┣𖥻ꦼꦽ➳ *Numero* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}
