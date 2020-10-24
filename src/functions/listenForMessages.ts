import * as Discord from 'discord.js';

import handleMessages from './handleMessages';

// Listen for messages function
const listenForMessages = (client: Discord.Client) => {
  // Listen for any message
  client.on('message', (message: Discord.Message) => {
    // Check for a regex match in a message
    const regexMatch = (regex: string) => message.content.toLowerCase().includes(regex);

    // A send command
    const sendMsg = (msg: string) => message.channel.send(msg);

    // React to a msg
    const reactToMsg = (emoji: string) => message.react(emoji);

    const functions = { regexMatch, sendMsg, reactToMsg };

    // Handle the message
    handleMessages(message, client, functions);
  });
};

export default listenForMessages;
