module.exports = {
   name: 'info',
   execute(client, message, args){
       const Discord = require('discord.js');

       let botVersion = '0.2.0'

       const infoEmbed = {
           color: 0x0099ff,
           title: 'Bot info:',
           description: '***Bot version:***   ' + botVersion + '\n\n***Source Code:***   https://github.com/Cybo1927/Discord-Bot',
           timestamp: new Date(),
       };

       message.channel.send({ embed: infoEmbed });

   }
}
