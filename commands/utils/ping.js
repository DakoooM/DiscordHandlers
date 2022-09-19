module.exports = {
    name: "ping",
    description: "ping commande",
    run: (client, interaction) => {
        interaction.reply({
            content: "pong!"
        })
    }
}