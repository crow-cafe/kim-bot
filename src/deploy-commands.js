const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('hi').setDescription('Gives birth to Kim'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('marry').setDescription('Holy Matrimony'),
	new SlashCommandBuilder().setName('divorce').setDescription('Kim deserves better'),
	new SlashCommandBuilder().setName('maritalstatus').setDescription('None of your business'),
	new SlashCommandBuilder().setName('apexmap').setDescription('Kim is a big fan of the hit game Apex Legends'),
	new SlashCommandBuilder().setName('peg').setDescription('...'),
	new SlashCommandBuilder().setName('cock').setDescription('...'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);