require('dotenv').config()
const Discord = require('discord.js');

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({ 
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        ] 
    });
const prefix = '/'

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running\n');
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});


client.once('ready', () => {
    console.log('KarlBOT is online')
})

client.on('messageCreate',(message) => {
    if(message.content == "hi KarlBOT"){
        message.reply("time to get sweaty ;)")
    }
})

client.on('messageCreate', (message) => {
    
     
    if (message.mentions.has(client.user.id) && !message.author.bot && !message.content.startsWith(prefix) ) {
        message.channel.send("Hello, sensei instructed me to further assist you with your training, type /help to see what i can do for you");
    }    
    else if(!message.content.startsWith(prefix) || message.author.bot) return
    
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

      

    if(command == 'wiki'){
        message.channel.send('<https://dragonfist-limitless.fandom.com/wiki/Dragonfist_Limitless_Wiki>')
    }
    else if(command == "zenkai"){
        message.channel.send('https://discord.com/channels/868250826446078042/891089693909860363/1021592772970561619')
    }
    else if(command == 'sheet'){
        message.channel.send('Make a copy of this sheet\nhttps://docs.google.com/spreadsheets/d/1kUg1He9i3JeTE9K728p4qrJADg0Knn7oRJQFUoPNn0I/edit#gid=1521561611')
    }
    else if(command == 'scrolls'){
        message.channel.send('https://discord.com/channels/868250826446078042/892897203436257280/1061987449527603270')
    }
    else if(command == 'nap'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1018305373645574165')
    }
    else if(command == 'powernap'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1018305373645574165')
    }
    else if(command == 'help'){
        message.channel.send('List of current commands:\n/wiki\n/zenkai\n/sheet\n/scrolls\n/(power)nap\n/(blue)flash\n/shadowboxing\n/drops\n/spg (spg: special power gains)\n/soulorb'
    )
    }
    else if(command == 'blueflash'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1065089595286491137')
    }
    else if(command == 'flash'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1065089595286491137')
    }
    else if(command == 'shadowboxing'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1072671036052607077')
    }
    else if(command == 'ap'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1022550239170809878')
    }
    else if(command == 'drops'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1016118890679500820')
    }
    else if(command == '(power)nap'){
        message.channel.send('umm.. its either /nap or /powernap.. hehe.')
    }
    else if(command == '(blue)flash'){
        message.channel.send('DOES NOT COMPUTE, do /flash or /blueflash.')
    }
    else if(command == 'spg'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1076252726947745963')
    }
    else if(command == 'soulorb'){
        message.channel.send('https://discord.com/channels/868250826446078042/868981965590765608/1076644474656137216')
    }
    
    else return
})






client.login(process.env.token);
