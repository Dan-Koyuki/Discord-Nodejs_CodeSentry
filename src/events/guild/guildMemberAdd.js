module.exports = {
  name: 'guildMemberAdd',
  async execute(member){
    console.log('User: ' + member.user.username + ' has joined the server!');
    const roleId = '1178343361007079461'; // Replace 'YOUR_ROLE_ID' with the ID of the role you want to assign
    const role = member.guild.roles.cache.get(roleId);
    if (role) {
      member.roles.add(role)
        .then(() => {
          console.log(`Added role ${role.name} to ${member.user.tag}`);
        })
        .catch((error) => {
          console.error('Error adding role:', error);
        });
    } else {
      console.error('Role not found');
    }
  }
}