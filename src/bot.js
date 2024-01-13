require("dotenv").config();
const { token } = process.env;
const {
  Client,
  EmbedBuilder,
  Collection,
  GatewayIntentBits,
  PermissionsBitField,
} = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
client.slashCommands = new Collection();
client.slashCommandArray = [];
client.customCommands = new Collection();
client.customCommandArray = [];

const functionsFolder = fs.readdirSync(`./src/functions`);
for (const folder of functionsFolder) {
  const functionsFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));

  for (const file of functionsFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleSlashCommands();
client.handleCustomCommands();
client.login(token);

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Your Discord bot is alive!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

setInterval(() => {
  fetch('https://discord-nodejs-code-sentry.vercel.app/')
    .then(() => console.log('Ping successful!'))
    .catch((error) => console.error('Error pinging:', error));
}, 5 * 60 * 1000);