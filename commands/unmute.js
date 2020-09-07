module.exports = {
    name: 'unmute',
    description: "unmute",
    execute(message, args, member){

        if(message.member.roles.cache.has('749510080159809586')){
            var member  = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
            if(!member) return  message.reply("I CANT FIND THE USER " + member)
 
            var role = member.guild.roles.cache.find(role => role.name === 'For the girls');
            var role2 = member.guild.roles.cache.find(role => role.name === '⛔Muted⛔');
            member.roles.add(role);
            member.roles.remove(role2);
            message.delete();

            message.channel.send(`${member} has been unmuted.`)
 
            if(!role2) return message.reply("Couldn't find the for the girls role.")


    } else {
        message.channel.send('Nice try command is only for mods!');
    }

    }
} 