const colors = require("colors");
const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async client => {
    const commands = await pGlob(`${process.cwd()}/events/*/*.js`);
	commands.map(async cmdFile => {
		const event = require(cmdFile);
		if (!event.name) return console.error("Evenement non chargée (name non renseignée) | file: ", cmdFile);

        if (event.once) {
            client.once(event.name, (...args) => event.run(client, ...args));
        } else {
            client.on(event.name, (...args) => event.run(client, ...args));
        }

        console.log("Evenement chargée", colors.green(event.name));
	});
}