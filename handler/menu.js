require("./module");

global.allmenu = `*AI :*
◦ Aiblur
◦ Aihd

*BROADCAST :*
◦ Broadcast
◦ Broadcastgroup
◦ Broadcastid
◦ Broadcastuser
◦ Cekgroup
◦ Idgroup
◦ Save
◦ Savegroup
◦ Savegroupid

*Download :*
◦ Play
◦ Facebookdl
◦ Instagramdl
◦ Instagramstorydl
◦ Mediafiredl
◦ Sfiledl
◦ Tiktokdl
◦ Tiktokmp3
◦ play
◦ ytmp3
◦ ytmp4
◦ youtubeshortsdl
◦ soundcloud
◦ spotify

*Image Anime :*
◦ animeawoo
◦ animemegumin
◦ animeshinobu
◦ animehandhold
◦ animehighfive
◦ animecringe
◦ animedance
◦ animehappy
◦ animeglomp
◦ animesmug
◦ animeblush
◦ animewave
◦ animesmile
◦ animepoke
◦ animewink
◦ animebully
◦ animeyeet
◦ animekill
◦ animelick
◦ animebite
◦ animepat
◦ animehug
◦ animewlp
◦ animekiss
◦ animecry
◦ animewaifu
◦ animecuddle
◦ animeneko
◦ animeslap
◦ animenom
◦ animefoxgirl
◦ animetickle
◦ animegecg

*GAMES :*
◦ Dadu
◦ Slot
◦ Suit
◦ Tod
◦ Asahotak
◦ Caklontong
◦ Kuismath
◦ Siapakahaku
◦ Susunkata
◦ Tebakgambar
◦ Tebakkata
◦ Tebaklagu
◦ Tebaklirik
◦ Tebaktebakan
◦ Tekateki

*GROUP :*
◦ Add
◦ Demote
◦ Editinfo
◦ Group
◦ Hidetag
◦ Join
◦ Kick
◦ Kickall
◦ Leave
◦ Linkgroup
◦ Promote
◦ Tagall
◦ Totag

*Internet :*
◦ !chord
◦ !distance
◦ !fetch
◦ !gempa
◦ !google
◦ !gimage
◦ !lyric
◦ !pinterest
◦ !xnxx
◦ !xvideos
◦ !wattpad
◦ !wikipedia
◦ !youtube

*RPG GAMES :*
◦ Inventori
◦ Bonus
◦ Berkebun
◦ Merampok

*STORE :*
◦ Addlist
◦ Dellist
◦ List
◦ Updatelist
◦ Addsaldo
◦ Minsaldo
◦ Ceksaldo
◦ Deposit
◦ Transaksi
◦ Payment
◦ Done
◦ Proses

*Stalker :*
◦ !wattpadstalk

*Tool :*
◦ !case
◦ !emojimix
◦ !emojimix2
◦ !getname
◦ !getpp
◦ !fetch
◦ !shortlink
◦ !sshp
◦ !sspc
◦ !sstablet
◦ !sticker
◦ !stickermeme
◦ !stickerqc
◦ !stickerqcimg
◦ !stickerwm
◦ !toaudio
◦ !togif
◦ !toimage
◦ !tomp3
◦ !tomp4
◦ !toonce
◦ !tourl
◦ !tovideo
◦ !tovn
◦ !translate
◦ !ttp
◦ !tts
◦ !viewonce

*Setting :*
◦ !auto
◦ !autoread
◦ !autosw
◦ !block
◦ !boost
◦ !clearsrc
◦ !get
◦ !getcase
◦ !getdb
◦ !getfile
◦ !getfolder
◦ !getpackage
◦ !getscript
◦ !getsesi
◦ !joingroup
◦ !leavegroup
◦ !listblock
◦ !public
◦ !restart
◦ !setmenu
◦ !setppbot
◦ !setreply
◦ !shutdown
◦ !unblock

*FITUR GK ADA :*
◦ Banned
◦ Bannedv1
◦ Bannedv2
◦ Bannedv3
◦ Bannedv4
◦ Bannedv5
◦ Bannedv6
◦ Unbanned
◦ Unbannedv2
◦ Unbannedv3
◦ Unbannedv4
◦ Unbannedv5`;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
   console.log(chalk.redBright(`Update ${__filename}`));
   delete require.cache[file];
   require(file);
});
