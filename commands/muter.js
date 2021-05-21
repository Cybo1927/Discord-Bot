module.exports = {
    name: 'muter',
    async execute(client, message, args){
        if(message.channel.type === 'dm'){
              message.channel.send('You need to be in a server to use this command!')
          }else if(!message.mentions.members.first()){
            message.channel.send('You need to specifiy a user to use this command!')
        }else if(!args[0]){
            message.channel.send('You need to specifiy a role to remove to use this command!')
        }else if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
            message.channel.send(`Sorry, but it appears you don\'t have permission to use this command ${user}`);
        }else if(message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
        let rolerem = message.guild.roles.cache.find(r => r.name === (args[0]));
        let roleadd = message.guild.roles.cache.find(r => r.name === "Muted");
        let user = message.mentions.members.first();
        user.roles.remove(rolerem);
        user.roles.add(roleadd);
        message.channel.send(`Muted ${user} and removed the role "${(args[0])}"`);
        }
    }
}
