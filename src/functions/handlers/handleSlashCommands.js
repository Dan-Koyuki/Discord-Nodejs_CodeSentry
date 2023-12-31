const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require("fs");

module.exports = (client) => {
  client.handleSlashCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands/slashCommands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/slashCommands/${folder}`)
        .filter((file) => file.endsWith(".js"));
      
      const { slashCommands, slashCommandArray } = client;
      for (const file of commandFiles){
        const command = require(`../../commands/slashCommands/${folder}/${file}`);
        slashCommands.set(command.data.name, command);
        slashCommandArray.push(command.data.toJSON());
      }

    }

    const clientID = '1177801611163217931';
    const guildID = '1178274179779416095';
    const rest = new REST({version: '10'}).setToken(process.env.token);
    try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
        body: client.slashCommandArray,
      });

      console.log("Succesfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }

  };
};
