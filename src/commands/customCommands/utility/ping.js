module.exports = {
  name: 'ping',
  description: 'Returns bot and API ping information',
  async execute(message, client) {
    try {
      const botPing = Date.now() - message.createdTimestamp;
      const apiPing = Math.round(client.ws.ping);

      const reply = `Bot Latency: ${botPing}ms\nAPI Latency: ${apiPing}ms`;
      await message.reply(reply);
    } catch (error) {
      console.error('Error executing ping command:', error);
      await message.reply('There was an error while processing the command.');
    }
  },
}