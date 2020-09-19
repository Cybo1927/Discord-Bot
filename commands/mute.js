const { ClientUser, Client } = require("discord.js");

module.exports = {
    name: 'mute',
    description: "Mute a user",
    execute(message, args){

        if(message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {

        let roleadd = message.guild.roles.cache.find(r => r.name === "Muted");
        let user = message.mentions.members.first();
        user.roles.add(roleadd);

        message.channel.send(`Muted ${user}`);
        } else {
            message.channel.send(`Sorry, but it appears you don\'t have permission to use this command ${user}`);
        }
    }
}