const colors = require("colors");
const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async client => {
    const commands = await pGlob(`${process.cwd()}/commands/*/*.js`);
	commands.map(async cmdFile => {
		const cmd = require(cmdFile);
		if (!cmd.name || !cmd.description) return console.log(colors.red("Commande non chargée (name ou description non renseignée) | file: ", cmdFile));
		client.commands.set(cmd.name, cmd);
		console.log("Commande chargée", colors.green(cmd.name));
	});
}