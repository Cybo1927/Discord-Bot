module.exports = {
    name: 'help-admin',
    aliases: ['admin'],
    async execute(client, message, args){
        const Discord = require('discord.js');

        const helpEmbed = {
            color: 0x0099ff,
            title: 'Commands that require Administrator privileges:',
            description: '***mute:***   Mute a specified user\n\n***muter:***   Mute a specified user but also removes a selected role (role is case sensitive)',
        };

        message.channel.send({ embed: helpEmbed });

    }
}
