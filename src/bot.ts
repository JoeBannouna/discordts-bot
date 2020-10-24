require('dotenv').config();
import * as Discord from 'discord.js';
import { exec } from 'child_process';

const client = new Discord.Client();

import listenForMessages from './functions/listenForMessages';

// Execut the client listen command
listenForMessages(client);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
  
  // If on linux send notification that bot is ready
  try { exec('zenity --text="Bot Ready" --notification'); } catch (err) {}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
