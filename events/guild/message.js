module.exports = async (Discord, client, message) => {

  const grabber = /.{0,}(grabify\.link|curiouscat\.club|catsnthings\.fun|catsnthing\.com|skypeipresolver\.net|spylink\.net|ipstat\.com|ipstatp\.com|bmwforum\.co|leancoding\.co|quickmessage\.io|spottyfly\.com|spötify\.com|stopify\.co|yoütu\.|beyoütübe\.|coyoütübe\.com|yȯutube\.com|xda-developers\.io|starbucksiswrong\.com|starbucksisbadforyou\.com|bucks\.as|discörd\.com|minecräft\.com|cyberh1\.xyz|discördapp\.com|freegiftcards\.co|disçordapp\.com|rëddït\.com|iplogger\.org|iplogger\.com|iplogger\.ru|2no\.co|yip\.su|youramonkey\.com|whatstheirip\.com|ip-grabber\.com|blasze\.tk|ps3cfw\.com|freegeoip\.net|ipstack\.com|ipstack\.net|tracemyip\.org|xn--yotu-1ra\.be|xn--discrd-zxa\.com|xn--srahah-bua\.eu|xn--minecrft-5za\.com|xn--disordapp-s3a\.com|xn--srahah-bua\.pl|xda-developers\.us|quickmessage\.us|fortnight\.space|fortnitechat\.site|youshouldclick\.us|joinmy\.site|watches-my\.stream|apple\.com-fasting\.live|parentelement\.tk|com-fasting\.live|crabrave\.pw|särahah\.eu|särahah\.pl|mapper\.info|ezstat\.ru|blasze\.com|spÃ¶tify\.com|yoÃ¼tÃ¼be\.co|yoÃ¼tÃ¼be\.com|yoÃ¼tu\.be|hackfÈ¯rums\.com|hackfÈ¯rums\.net|discÃ¶rd\.com|battlÄ—\.net|xn--yo14t14be-m2ad7057gea\.com|xn--sptify-4ka37a\.com|xn--discrd-6ka37a\.com|xn--yo14tu-4ta9735d\.be|xn--yo14t14be-m2ad7057gea\.co|xn--battl-kra2007c\.net).{0,}/i;

  if  (message.content.match(grabber)) {
      if(message.author.bot) return;
        if(message.channel.type === 'dm'){
            message.channel.send('Nice try :)')
        }else{
        message.delete()
        const ipEmbed = new Discord.MessageEmbed()
        .setColor('#e30f0f')
        .setTitle('IP Grabber Blocked:')
        .addFields(
          { name: 'Sender:', value: message.author },
          { name: 'Content:', value: '\`" ' + message.content + ' "\`' },
        )
        // Response time may seem slower as it depends on the end user's connection speeds
        .setFooter(`Response time: ~${Date.now() - message.createdTimestamp}ms`)
        message.channel.send({ embed: ipEmbed });
      }
    }
    const prefix = '--';
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    try{
      command.execute(client, message, args, Discord);
    }catch(err){
      message.reply('It seems there was an error trying to execute this command!')
    }
}
