const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTc0MzA0NzQ4ODcwNjk2OTYw.XM3eBg.ZgkK7hPt0ScFfAuflEM_aCXTEz8';

const PREFIX = '~!~';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('HELLO I AM GuN for Ever Bot!');
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'come':
            message.channel.sendMessage('https://tenor.com/view/hot-lust-gif-3438018')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;
     }
}) 

bot.login(token);
