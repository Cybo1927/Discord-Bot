module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
        const Discord = require('discord.js');

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Commands:',
            description: '***default***:   Displays out of the box settings\n***info***:   Displays bot information\n***help-admin***:   Displays admin commands',
            timestamp: new Date(),
        };
        
        message.channel.send({ embed: helpEmbed });
    

    }
}