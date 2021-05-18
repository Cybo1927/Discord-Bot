const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('message', async message =>{

    const grabber = /.{0,}(grabify\.link|curiouscat\.club|catsnthings\.fun|catsnthing\.com|skypeipresolver\.net|spylink\.net|ipstat\.com|ipstatp\.com|bmwforum\.co|leancoding\.co|quickmessage\.io|spottyfly\.com|spötify\.com|stopify\.co|yoütu\.|beyoütübe\.|coyoütübe\.com|yȯutube\.com|xda-developers\.io|starbucksiswrong\.com|starbucksisbadforyou\.com|bucks\.as|discörd\.com|minecräft\.com|cyberh1\.xyz|discördapp\.com|freegiftcards\.co|disçordapp\.com|rëddït\.com|iplogger\.org|iplogger\.com|iplogger\.ru|2no\.co|yip\.su|youramonkey\.com|whatstheirip\.com|ip-grabber\.com|blasze\.tk|ps3cfw\.com|freegeoip\.net|ipstack\.com|ipstack\.net|tracemyip\.org|xn--yotu-1ra\.be|xn--discrd-zxa\.com|xn--srahah-bua\.eu|xn--minecrft-5za\.com|xn--disordapp-s3a\.com|xn--srahah-bua\.pl|xda-developers\.us|quickmessage\.us|fortnight\.space|fortnitechat\.site|youshouldclick\.us|joinmy\.site|watches-my\.stream|apple\.com-fasting\.live|parentelement\.tk|com-fasting\.live|crabrave\.pw|särahah\.eu|särahah\.pl|mapper\.info|ezstat\.ru|blasze\.com|spÃ¶tify\.com|yoÃ¼tÃ¼be\.co|yoÃ¼tÃ¼be\.com|yoÃ¼tu\.be|hackfÈ¯rums\.com|hackfÈ¯rums\.net|discÃ¶rd\.com|battlÄ—\.net|xn--yo14t14be-m2ad7057gea\.com|xn--sptify-4ka37a\.com|xn--discrd-6ka37a\.com|xn--yo14tu-4ta9735d\.be|xn--yo14t14be-m2ad7057gea\.co|xn--battl-kra2007c\.net).{0,}/i;

    if  (message.content.match(grabber)) {
        if(message.author.bot) return;
          if(message.channel.type === 'dm'){
              message.channel.send('Nice try :)')
          }else{
        message.delete()
          const ipEmbed = new Discord.MessageEmbed()
          .setColor('#e30f0f')
          .setTitle('IP Grabber Blocked:')
          .addFields(
            { name: 'Sender:', value: message.author, inline: true },
            { name: 'Content:', value: '||  ' + message.content + '  ||', inline: true },
          )
          .setTimestamp()
          message.channel.send({ embed: ipEmbed });
        }
    }
});

// needs to stay as the last line
client.login(process.env.TOKEN);
