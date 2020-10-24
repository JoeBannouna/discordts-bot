import { DiscordClient, DiscordMessage, DiscordMsgFuncs } from '../../types';

// Command Functions
import solveMathOperation from '../commands/doMathOperation';

// Do something upon prefix and command recognition
const checkForCommands = (message: DiscordMessage, client: DiscordClient, functions: DiscordMsgFuncs) => {
  const { sendMsg } = functions;

  if (message.content.startsWith('!')) {
    const [cmd, ...args] = message.content.toLocaleLowerCase().split(/\s+/);
    switch (cmd) {
      // Perform a math operation
      case '!math':
        solveMathOperation(args.join(' '), sendMsg);
        break;

      // Get the avatar image of the user
      case '!avatar':
        sendMsg(message.author.avatarURL());
        break;

      default:
        return true;
    }
  } else return true;
};

export default checkForCommands;
