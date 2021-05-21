module.exports = {
    name: 'mute',
    async execute(client, message, args){
        if(message.channel.type === 'dm'){
              message.channel.send('You need to be in a server to use this command!')
          }else if(!message.mentions.members.first()){
            message.channel.send('You need to specifiy a user to use this command!')
        }else if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
            message.channel.send(`Sorry, but it appears you don\'t have permission to use this command ${user}`);
        }else if(message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
        let roleadd = message.guild.roles.cache.find(r => r.name === "Muted");
        let user = message.mentions.members.first();
        user.roles.add(roleadd);
        message.channel.send(`Muted ${user}`);
        }
    }
}
