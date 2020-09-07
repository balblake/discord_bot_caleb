module.exports = {
    name: 'yt',
    description: "this is caleb's youtube",
    execute(message, args){
        message.delete();
        message.channel.send('https://www.youtube.com/channel/UCfnISZl8s77Bp4QwHU8UwKw');
    }
} 