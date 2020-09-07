module.exports = {
    name: 'twitter',
    description: "this is caleb's twitter",
    execute(message, args){
        message.delete();
        message.channel.send('https://twitter.com/FTGCaleb');
    }
} 