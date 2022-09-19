const {Client, Intents, Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, Collection} = require("discord.js");
const { Handlers } = require("./Config.json");
const dotenv = require("dotenv"); /* pour accèder au variables d'environnement dans le fichier .env */
dotenv.config();

const client = new Client({
    intents: [ 
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_BANS, 
        Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, 
		Intents.FLAGS.GUILD_INTEGRATIONS, 
		Intents.FLAGS.GUILD_WEBHOOKS, 
		Intents.FLAGS.GUILD_INVITES, 
		Intents.FLAGS.GUILD_VOICE_STATES, 
		Intents.FLAGS.GUILD_PRESENCES, 
		Intents.FLAGS.GUILD_MESSAGES, 
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
		Intents.FLAGS.GUILD_MESSAGE_TYPING, 
		Intents.FLAGS.DIRECT_MESSAGES, 
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, 
		Intents.FLAGS.DIRECT_MESSAGE_TYPING
	],
    restTimeOffset: 0,
    partials: ["USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "MANAGE_ROLES"]
});

client.commands = new Collection();

Handlers.forEach(handler => {
	require(`./Handlers/${handler}`)(client);
});

client.login(process.env.APP_TOKEN);