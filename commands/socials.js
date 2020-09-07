module.exports = {
    name: 'socials',
    description: "All caleb's socials",
    execute(message, args){
        message.delete();
        message.channel.send('Twitch: https://www.twitch.tv/CalebFTG\nYoutube: https://www.youtube.com/channel/UCfnISZl8s77Bp4QwHU8UwKw\nTwitter: https://twitter.com/FTGCaleb');
    }
} 