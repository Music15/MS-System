const Discord = require('discord.js');
    const client = new Discord.Client();
client.on("ready", () =>{
console.log(`Listening To ${client.user.username} !`)
})

const prefix = "-";

client.on('message', message => {
       if(message.content.split(' ')[0] == prefix + 'server') {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    
    const verificationLevels = ['0', '1', '2', '3', '4'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**:id: Server ID :**", "**"+message.guild.id+"**",true)
    .addField("**:earth_africa: Region**" , "**"+message.guild.region+"**",true)
    .addField('**:speech_balloon: Channels Written**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**:mega: Channels sound**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**:calendar:  Created On**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**:closed_lock_with_key: Roles**",`**[${message.guild.roles.size}]** Role `,true)
    .addField(":busts_in_silhouette: Members",`
    **${message.guild.memberCount}**`)
    .setColor('#0dffff')
    message.channel.sendEmbed(embed)
    
    }
    });


client.login(process.env.BOT_TOKEN);
