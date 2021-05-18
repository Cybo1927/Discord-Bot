module.exports = {
   name: 'info',
   execute(client, message, args){
       const Discord = require('discord.js');

       let botVersion = '0.1.0'

       const helpEmbed = {
           color: 0x0099ff,
           title: 'Bot info:',
           description: '***Bot version:***   ' + botVersion + '\n\n***Source Code:***   https://github.com/Cybo1927/Discord-Bot',
           timestamp: new Date(),
       };

       message.channel.send({ embed: helpEmbed });


   }
}
