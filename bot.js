var Discord = require('discord.js');
var client = new Discord.Client();
var ffmpeg = require('ffmpeg');

client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'shadow1') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});
  client.login(process.env.BOT_TOKEN);
