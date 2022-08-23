// Require the necessary discord.js classes
import { Client, GatewayIntentBits } from 'discord.js';
import fetch from 'node-fetch';
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./config.json'));
const token = data.token;
const apexkey = data.apexkey;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

let maritalStatus = false;
let peg_count = 0;
let rooster_count = 0;

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
		await interaction.reply('\"Hello, I\'m Kim Kitsuragi.\" His grip is firm. \"Lieutenant, Precinct 57. You must be from the 41st...\"');
	} else if (commandName === 'server') {
		await interaction.reply('this hasnt been implemented yet lol');
	} else if (commandName === 'user') {
		await interaction.reply('this hasnt been implemented yet lol');
	}

	if (commandName === 'marry') {
		if (maritalStatus === false) {
			maritalStatus = true;
			await interaction.reply('You are now married to Kim');
		} else {
			await interaction.reply('Kim is taken and the Christian God denounces polyamory');
		}
	}

	if (commandName === 'divorce') {
		if (maritalStatus === true) {
			maritalStatus = false;
			await interaction.reply('You have divorced Kim\'s marriage, even if you weren\'t married to him, because I didn\'t account for the case of un-marrying him from other people when i was coding this, and i can\'t be arsed to for a funny gag, at least not yet');
		} else {
			await interaction.reply('To the spirits be free');
		}
	}

	if (commandName === 'maritalstatus') {
		if (maritalStatus === true) {
			await interaction.reply('Kim is currently married');
		} else {
			await interaction.reply('Kim is currently not married');
		}
	}

	if (commandName === 'apexmap') {
		const response = await fetch('https://api.mozambiquehe.re/maprotation?auth=' + apexkey);
		const data = await response.json();
		let map = data.current.map;
		let nextmap = data.next.map;
		let nextmapduration = data.next.DurationInMinutes;
		let timeleft = data.current.remainingMins;
		let message = '**Current map:** ' + `${map}` + ' (' + `${timeleft}` + ' minutes left) \n**Next map:** ' + `${nextmap}` + ' (Duration: ' + `${nextmapduration}` + ' minutes)'
		await interaction.reply(message);
	}

	if (commandName === 'peg') {
		peg_count++;
		await interaction.reply('you give kim a clothes peg. kim has ' + `${peg_count}` + ' peg(s)');
	}

	if (commandName === 'cock') {
		rooster_count++;
		await interaction.reply('you give kim a rooster. kim has ' + `${rooster_count}` + ' rooster(s)');
	}
});

// Login to Discord with your client's token
client.login(token);
