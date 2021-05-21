module.exports = {
    name: 'help',
    aliases: ['', 'h'],
    async execute(client, message, args){
        const Discord = require('discord.js');

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Commands:',
            description: '***info:***   Displays bot information\n\n***ping:***   Displays the amount of time it took to respond to the command\n\nType   ***help-admin:***   to display admin commands',
        };

        message.channel.send({ embed: helpEmbed });

    }
}
