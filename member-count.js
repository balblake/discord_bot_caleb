module.exports = client => {
    const channelId = '749512585254273114'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName('Members: ${guild.memberCount.toLocaleString()}')
    }

    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('749508868434034769')
    updateMembers(guild)
}