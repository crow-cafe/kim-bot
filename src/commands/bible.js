const { SlashCommandBuilder } = require('discord.js');
const fetch = require('cross-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bible')
		.setDescription('Our Father in heaven, hallowed be your name.'),
	async execute(interaction) {
		const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
		const data = await response.json();
		const book = data[0].bookname;
        const chapter = data[0].chapter;
        const verse = data[0].verse;
        const text = data[0].text;
        const message = '**' + `${book}` + ' ' + `${chapter}` + ':' + `${verse}` + '**' + ' ' + `${text}`;
        await interaction.reply(message);
	},
};