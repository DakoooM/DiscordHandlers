module.exports = {
    name: "interactionCreate",
    description: "Evenement lorsqu'une commande slash est executer.",
    run: async (client, interaction) => {
        if (interaction.isCommand()){
            const cmd = client.commands.get(interaction.commandName);
            if (!cmd) return interaction.reply({content: "Cette commande n'existe pas."});
    
            cmd.run(client, interaction);
        }
    }
}