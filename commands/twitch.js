module.exports = {
    name: 'twitch',
    description: "this is caleb's twitch",
    execute(message, args){
        message.delete();
        message.channel.send('https://www.twitch.tv/CalebFTG');
    }
} 