module.exports = {
    name: 'help-admin',
    description: "Help command",
    execute(message, args){
        const Discord = require('discord.js');

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Commands that require Administrator privileges:',
            description: '***mute***:   Mute a specified user\n***muter***:   Mute a specified user but also removes a selected role',
            timestamp: new Date(),
        };
        
        message.channel.send({ embed: helpEmbed });
    

    }
}