const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Return My Embed Example!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("My Embed")
      .setDescription("Embed Example")
      .setColor('Navy')
      .setImage(client.user.displayAvatarURL())
      .setThumbnail('https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png')
      .setTimestamp(Date.now())
      .setURL('https://dan-koyuki-profile.vercel.app')
      .setAuthor({
        url: 'https://dan-koyuki-profile.vercel.app',
        iconURL: 'https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png',
        name: 'Dan Koyuki'
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
      })
      .addFields([
        {
          name: 'Field 1',
          value: 'Value of Field 1',
          inline: true
        },
        {
          name: 'Field 2',
          value: 'Value of Field 2',
          inline: true
        },
      ]);

      await interaction.reply({
        embeds: [embed]
      });
  },
};
