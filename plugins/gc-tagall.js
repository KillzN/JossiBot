const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = globalw
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `* 𝗔𝗖𝗧𝗜𝗩𝗘𝗡𝗦𝗘:* ${pesan}`;
  let teks = `*> 𝘽𝙚𝙘𝙖𝙪𝙨𝙚 𝙩𝙤𝙢𝙤𝙧𝙧𝙤𝙬 𝙬𝙞𝙡𝙡 𝙗𝙚 𝙣𝙞𝙘𝙚 💗*\n\n ${oi}\n\n➥ _*LISTA DE INTEGRANTES:*_\n`;
  for (const mem of participants) {
    teks += `💸  ⇝ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ *JossiBᴏᴛ ⇝ @by.jossi*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación|putos)$/i;
handler.admin = true;
handler.group = true;
export default handler;