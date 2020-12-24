const help = (prefix) => {
	return `*>- YOBOTS Self Commands -<*_

_*INFORMATIONS*_
┌ *➪Library : Baileys*
├ *➪Running : ${pad(hours)} H,${pad(minutes)} M,${pad(seconds)} S*
└ *➪Support : Ipul , Shirayuki , Dll*

_*SELF SYSTEM*_
┌ *➪ ${prefix}help*
├ *➪ ${prefix}term*
└ *➪ ${prefix}setprefix*

_*SELF GROUP*_
┌ *➪ ${prefix}hidetag*
├ *➪ ${prefix}tagall*
├ *➪ ${prefix}runtime*
├ *➪ ${prefix}linkgroup*
└ *➪ ${prefix}crp*

_*SELF MEDIA*_
┌ *➪ ${prefix}sticker*
├ *➪ ${prefix}sticker nobg*
├ *➪ ${prefix}toimg*
├ *➪ ${prefix}tsticker*
├ *➪ ${prefix}meme*
├ *➪ ${prefix}memeindo*
├ *➪ ${prefix}gtts*
├ *➪ ${prefix}loli*
├ *➪ ${prefix}nsfwloli*
├ *➪ ${prefix}url2img*
├ *➪ ${prefix}simi*
├ *➪ ${prefix}ocr*
├ *➪ ${prefix}wait*
└ *➪ ${prefix}simih*

_*MORE FITURE IS COMMING*_
`
}

exports.help = help
