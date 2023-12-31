module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()){
      const { slashCommands } = client;
      const { commandName } = interaction;
      const command = slashCommands.get(commandName); 
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: `Something went wrong when executing this command...`,
          ephemeral: true
        });
      }
    }
  }
}