import * as Discord from 'discord.js';

import { DiscordMsgFuncs } from '../types';

import checkForCommands from './handleMessages/checkForCommands';
import checkForExactMsgs from './handleMessages/checkForExactMsgs';
import checkForRegexes from './handleMessages/checkForRegexes';

// Handle the message
const handleMessages = (message: Discord.Message, client: Discord.Client, functions: DiscordMsgFuncs) => {
  // Prevent anything if the bot is the sender
  if (message.author.bot) return;

  // Do something upon prefix and command recognition
  if (!checkForCommands(message, client, functions)) return;

  // Do something on exact messages match
  if (!checkForExactMsgs(message, functions)) return;

  // Do something when part of the msg match the regex
  if (!checkForRegexes(message, functions)) return;
};

export default handleMessages;
