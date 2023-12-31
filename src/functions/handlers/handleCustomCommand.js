const fs = require("fs");

module.exports = (client) => {
  client.handleCustomCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands/customCommands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/customCommands/${folder}`)
        .filter((file) => file.endsWith(".js"));
      
      const { customCommands } = client;
      for (const file of commandFiles){
        const command = require(`../../commands/customCommands/${folder}/${file}`);
        customCommands.set(command.name, command);
      }
    }
  };
};
