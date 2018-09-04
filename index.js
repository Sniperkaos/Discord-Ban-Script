/*

Discord Bot Ban Script

Made by @我吃了你的狗#3900 

*/
const discord = require("discord.js")
const bot = new Discord.Client();
const config = require("./config.json")
//feel free to add more roles to this array
const roles = ["role1", "role2", "role3"]
bot.on("message", async message => {

//check if message author is a bot, if it is, ignore it
if(message.author.bot) return;
//check if the message has our prefix, located in a different file (./config.js)
if(message.content.indexOf(config.prefix) !== 0) return;
//isolate the command from the prefix
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "ban")
{ 
    //find the victim to ban
    let victim = message.mentions.members.first();
    //if no victim, return "no member you big gay"
    if(!victim) return message.reply("no member you big gay");
    //find reason to put in audit logs
    let reason = args.slice(1).join(' ');
    //if no reason, change reason to "no reason u big gay"
    if(!reason) reason = "no reason u big gay"
        if(message.member.roles.find("name", roles.forEach)) //if it doesn't work, change roles.forEach to one of your normal roles
        {
                await victim.ban(reason)
                  .catch(error => message.reply(`sorry but ya boi cant ban cause ${error} is slapping me rn`));
                  //prove command worked
                message.channel.send(`${victim.user.tag} has been punished by ${message.author.tag} because ${reason}`);
                //log to console
                console.log("working")
        }
        else
        {
                message.reply(`${message.author.tag}, you do not have permission to use this command.`)
        }
}

/*

Omega
                Yeet

*/
