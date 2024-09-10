const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 𝐦𝐮𝐧̃𝐞𝐪𝐮𝐢𝐭𝐚𝐬 👑* ${pesan}`;
  let teks = `*Tʜᴇ Oɴᴇ Wʜᴏ Is Nᴏᴛ ᴀ Bɪᴛᴄʜ💅 Is Nᴏᴛ Fᴀsʜɪᴏɴᴀʙʟᴇ🔥*\n\n ${oi}\n\n➥ _*➥ 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗣𝗥𝗘𝗖𝗜𝗢𝗦𝗔𝗦 💗:*_\n`;
  for (const mem of participants) {
    teks += `💸 ⇝ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ *JossiBᴏᴛ ⇝@by.jossi*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall1|invocar1|invocacion1|todos1|invocación1|todasputas)$/i;
handler.admin = true;
handler.group = true;
export default handler;
