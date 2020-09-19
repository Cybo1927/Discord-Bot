module.exports = {
    name: 'default',
    description: "Default out of the box",
    execute(message, args){
        const Discord = require('discord.js');

        const defEmbed = {
            color: 0x0099ff,
            title: '***Out of the box settings:***',
            description: '*Block 70+ IP grabbers\nBlock malicious URLs*',
            timestamp: new Date(),
        };
        
        message.channel.send({ embed: defEmbed });
    

    }
}