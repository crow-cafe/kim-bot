// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

/*
// Kim I Love You
client.on("message", msg => {
    if (msg.content === "hey kim") {
      msg.reply("\"Hello, I'm Kim Kitsuragi.\" His grip is firm. \"Lieutenant, Precinct 57. You must be from the 41st...\"");
    }
  })
  */

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'hi') {
		await interaction.reply("\"Hello, I'm Kim Kitsuragi.\" His grip is firm. \"Lieutenant, Precinct 57. You must be from the 41st...\"");
	} else if (commandName === 'server') {
		await interaction.reply('this hasnt been implemented yet lol');
	} else if (commandName === 'user') {
		await interaction.reply('this hasnt been implemented yet lol');
	}
});

// Login to Discord with your client's token
client.login(token);
