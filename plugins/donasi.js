let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 081215320837
│┝‷✧ *Dana:* 082137914790
│┝‷✧ *Linkaja:* 
│┝‷✧ *Gopay:* 
│┝‷✧ *Ovo:* 
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│ wa.me/6281215320837?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
