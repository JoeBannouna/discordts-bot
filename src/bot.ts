require('dotenv').config();
import * as Discord from 'discord.js';
import { exec } from 'child_process';

const client = new Discord.Client();

import listenForMessages from './functions/listenForMessages';

// Execut the client listen command
listenForMessages(client);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
  exec('zzenity --text="Bot Ready" --notification');
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
