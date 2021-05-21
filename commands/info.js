module.exports = {
   name: 'info',
   aliases: ['i'],
   async execute(client, message, args){
       const Discord = require('discord.js');

       let botVersion = '0.3.0.1'

       const infoEmbed = {
           color: 0x0099ff,
           title: 'Bot info:',
           description: '***Bot version:***   ' + botVersion + '\n\n***Source Code:***   https://github.com/Cybo1927/Discord-Bot',
       };

       message.channel.send({ embed: infoEmbed });

   }
}
