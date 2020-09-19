module.exports = {
    name: 'info',
    description: "Info command",
    execute(message, args){
        const Discord = require('discord.js');
        const ver = '1.1.1'

    const infoEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Info:')
	.setDescription('A simple moderation bot made by Cybo1927')
	.addFields(
		{ name: 'Version:', value: ver },
	)
	.setTimestamp()

    message.channel.send({ embed: infoEmbed });
    }
}
