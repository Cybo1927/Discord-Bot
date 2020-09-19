const { ClientUser, Client } = require("discord.js");

module.exports = {
    name: 'muter',
    description: "Mute command that also removes a specified role",
    execute(message, args){

        if(message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {

        let rolerem = message.guild.roles.cache.find(r => r.name === (args[1]));
        let roleadd = message.guild.roles.cache.find(r => r.name === "Muted");
        let user = message.mentions.members.first();
        user.roles.remove(rolerem);
        user.roles.add(roleadd);

        message.channel.send(`Muted ${user} and removed the role "${(args[1])}"`);
        } else {
            message.channel.send(`Sorry, but it appears you don\'t have permission to use this command ${message.author}`);
        }
    }
}