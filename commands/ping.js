module.exports = {
    name: 'ping',
    description: "Client's ping",
    execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();

        message.channel.send(`Client ping: ${Math.round(message.client.ws.ping)}ms`);
        }
    }