module.exports = {
    name: 'commands',
    description: "All the commands",
    execute(message, args){
        message.delete();
        message.channel.send('!twitch, !youtube, !twitch, !socials');
    }
} 