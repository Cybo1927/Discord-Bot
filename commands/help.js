module.exports = {
    name: 'help',
    description: "Help command",
    execute(client, message, args){
        const Discord = require('discord.js');

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Commands:',
            description: '***info:***   Displays bot information\n\n***ping:***   Displays the amount of time it took to respond to the command\n\nType   ***help-admin:***   to display admin commands',
            timestamp: new Date(),
        };
        
        message.channel.send({ embed: helpEmbed });
    

    }
}
