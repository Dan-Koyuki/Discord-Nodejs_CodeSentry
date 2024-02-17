const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pingembed")
    .setDescription("Return My Ping!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const embed = new EmbedBuilder()
      .setTitle(`Hello, ${interaction.user.tag}`)
      .setDescription(`API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`)
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

      await interaction.editReply({
        embeds: [embed]
      });
  },
};
