const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();

module.exports = {
    name: "ready",
    description: "Evenement lorsque le bot est chargée.",
    run: async (client) => {
        const guild = await client.guilds.cache.get(process.env.APP_GUILD_ID);
        guild.commands.set(client.commands.map(cmd => cmd));
        console.log(colors.green(`${client.user.tag} is ready to use to ${guild.name}!`));
    }
}