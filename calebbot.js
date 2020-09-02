const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!');
    var role = member.guild.roles.cache.find(role => role.name === 'For the girls');
    member.roles.add(role);
    });
    client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get('749511642894565446').send(`Welcome, **${member}** to caleb's discord server!\n Make sure to check out my socials!\n**Twitch                                                       Twitter**\nhttps://twitch.tv/calebftg                https://twitter.com/FTGCaleb`);
    }); 
 
client.once('ready', () => {
    console.log('Caleb Bot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'twitter'){
        client.commands.get('twitter').execute(message, args);
        } 
    if(command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
        } 
    if(command === 'youtube'){
       client.commands.get('youtube').execute(message, args);
        } 
    if(command === 'yt'){
        client.commands.get('yt').execute(message, args);
         } 
     if(command === 'commands'){
        client.commands.get('commands').execute(message, args);
        } 
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
        } 
    if(command === 'kick'){
       client.commands.get('kick').execute(message, args);
        } 
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
        } 
    if(command === 'mcommands'){
        client.commands.get('mcommands').execute(message, args);
        } 
    if(command === 'socials'){
        client.commands.get('socials').execute(message, args);
        } 
});



// Keep this at the bottom
client.on('ready', () =>{
    client.user.setActivity('!commands', { type: 'WATCHING'}).catch(console.error)
}) // for the type: PLAYING WATCHING LISTENING STREAMING

 
 
client.login('NzUwMDYyODkyNjMxNzE5OTU4.X01EgQ.mpKcE--nSipjs7NnRF0C8wDAeJg');