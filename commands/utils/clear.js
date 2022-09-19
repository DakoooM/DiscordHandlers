module.exports = {
    name: "clear",
    description: "clear commande",
    run: (client, interaction) => {
        interaction.reply({
            content: "tu a clear 10 messages"
        })
    }
}