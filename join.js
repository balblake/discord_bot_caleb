module.exports = {
    
    client.on('guildMemberAdd', member => {
        console.log('User ' + member.user.username + ' has joined the server!');
        var role = member.guild.roles.cache.find(role => role.name === 'For the girls');
        member.roles.add(role);
        });
        client.on('guildMemberAdd', member => {
        const targetChannelId = '750147958002942033'
        member.guild.channels.cache.get('749511642894565446').send(`Welcome, **${member}** to caleb's discord server!\nMake sure to check out his socials by going to ${member.guild.channels.cache.get(targetChannelId).toString()} and typing !socials\n**Twitch                                                       Twitter**\nhttps://twitch.tv/calebftg                https://twitter.com/FTGCaleb`);
        });
}