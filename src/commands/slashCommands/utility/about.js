const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`Author`)
    .setDescription("Author Contact!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Hello, I\'m Dan Koyuki.`)
      .setDescription(`Currently Nothing!`)
      .setColor('Navy')
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: 'https://dan-koyuki-profile.vercel.app',
        iconURL: 'https://res.cloudinary.com/dankoyuki/image/upload/v1706862368/Custom%20Card/l3dulnz3rs8j8gnaydnj.png',
        name: 'Dan Koyuki'
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
      });

      await interaction.reply({
        embeds: [embed]
      });
  },
};
