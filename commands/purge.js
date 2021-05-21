module.exports = {
    name: 'purge',
    aliases: ['nuke', 'replace'],
    async execute(client, message, args){
      const Discord = require('discord.js');

      const name = message.channel.name
      const catID = message.channel.parentID
      const position = message.channel.position.toLocaleString();

      if(message.channel.type === 'dm'){
            message.channel.send('You need to be in a server to use this command!')
        }else if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
          message.channel.send(`Sorry, but it appears you don\'t have permission to use this command ${user}`)
        }else{
        message.channel.delete(name);
        message.guild.channels.create(name, { type: 'text', parent: catID, position}).then(channel => {
        channel.send('Channel successfully nuked!');
      })
    }
  }
}
