const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Gives birth to Kim'),
	async execute(interaction) {
		await interaction.reply('"Hello, I\'m Kim Kitsuragi." His grip is firm. "Lieutenant, Precinct 57. You must be from the 41st..."');
	},
};