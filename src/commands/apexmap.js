const { SlashCommandBuilder } = require('discord.js');
const fetch = require('cross-fetch');
const { apexkey } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('apexmap')
		.setDescription('Kim is a big fan of the hit game Apex Legends'),
	async execute(interaction) {
		const response = await fetch('https://api.mozambiquehe.re/maprotation?auth=' + apexkey);
		const data = await response.json();
		let map = data.current.map;
		let nextmap = data.next.map;
		let nextmapduration = data.next.DurationInMinutes;
		let timeleft = data.current.remainingMins;
		let message = '**Current map:** ' + `${map}` + ' (' + `${timeleft}` + ' minutes left) \n**Next map:** ' + `${nextmap}` + ' (Duration: ' + `${nextmapduration}` + ' minutes)'
		await interaction.reply(message);
	},
};