const Discord = require("discord.js");
const bot = new Discord.Client({autoReconnect:true});
const fs = require("fs");
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');


bot.on("ready", () => {
  console.log("By shadow");


});
// التوكن تضعها من الهيروكو ضع الايدي والبرفكس فقططط.
const ownerid = "300415775875923969"; // ضع ايديك هنا
const prefix = "f"; // البرفكس هنا

bot.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== ownerid) return;

  if (message.content.startsWith(prefix + 'wt')) {
                
      if(argresult){
         message.channel.send("**You Are Watching **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'WATCHING'});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
   if (message.content.startsWith(prefix + 'st')) {
                
      if(argresult){
         message.channel.send("**You Are Streaming **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'STREAMING', url:"https://www.twitch.tv/benkayali"});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	    if (message.content.startsWith(prefix + 'pl')) {
             
      if(argresult){
         message.channel.send("**You Are Playing **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'PLAYING'});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
  
    if (message.content.startsWith(prefix + 'li')) {
               
      if(argresult){
         message.channel.send("**You Are Listening To **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'LISTENING'});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	  if (message.content.startsWith(prefix + "dnd")) {
        message.channel.send("**Done Changing Your Status To `DND`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("dnd");
	  } else
		  
      if (message.content.startsWith(prefix + "idle")) {
        message.channel.send("**Done Changing Your Status To `IDLE`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("idle");
	  } else
		  
	  if (message.content.startsWith(prefix + "off")) {
          message.channel.send("**Done Changing Your Status To `OFFLINE`**").then(message => {message.delete(3000)})
          message.delete(3000);
		  bot.user.setStatus("invisible");
	  } else 

       if (message.content.startsWith(prefix + "x")) {

        let count = parseInt(args[0]) || 1;

          message.delete();
          message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id }).then(messages => {
          const prunable = messages.filter(m => m.author.id === bot.user.id);

        return Promise.all(
            prunable.map(m => m.delete())
        ).then(() => {
        });
    }).catch(message.error);
    
} else
 if (message.content.startsWith(prefix + "f")) {
   if (args.length < 1) {
        message.channel.send('You must provide text to space out!').then(message => {message.delete(3000)})
    }
       let amount = 1;

    if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        (amount < 1) && (amount = 1);
        (amount > 15) && (amount = 15);
        args = args.slice(1);
    }
    message.delete();
    message.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));

 }
		  
});


bot.login(process.env.BOT_TOKEN);



////////////////////////


bot.on('message', (message) => {
    

           if (message.content.startsWith(prefix + "av")) {
			     if (message.author.id !== ownerid) return;
        var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }
          let avatar = new Discord.RichEmbed()
          .setColor("#787978")
          .setTitle(`{ URL HERE }`)
          .setURL(`${getvalueof.avatarURL}`)
          .setImage(`${getvalueof.avatarURL}`);
                    message.channel.sendEmbed(avatar);
          message.delete(3000);
	  } 

    
   });

const token ="process.env.BOT_TOKEN";