module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    const prefix = "!!";

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Check if the command exists in the customCommands Map
    if (client.customCommands.has(command)) {
      try {
        // Get the command from the Map and execute it passing the message and client
        const cmd = client.customCommands.get(command);
        cmd.execute(message, client);
      } catch (error) {
        console.error('Error executing custom command:', error);
        message.reply('There was an error while processing the command.');
      }
    } else {
      // Handle case when the command doesn't exist
      message.reply('Command not found.');
    }
  }
};