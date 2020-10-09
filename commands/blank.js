module.exports = {
    name: '',
    description: "Help command",
    execute(message, args){
        const Discord = require('discord.js');

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Commands:',
            description: '***info***:   Displays bot information\n***help-admin***:   Displays admin commands',
            timestamp: new Date(),
        };
        
        message.channel.send({ embed: helpEmbed });
    

    }
}