module.exports = {
    name: 'ping',
    execute(client, message, args){
        const Discord = require('discord.js');

const pingEmbed = {
            color: 0x0099ff,
            title: 'Ping:',
            description: `***API ping:***   ${(message.client.ws.ping)}ms`,
        };

        message.channel.send({ embed: pingEmbed });

    }
}
