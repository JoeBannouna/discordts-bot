import { DiscordMessage, DiscordMsgFuncs } from '../../types';

// Do something on exact messages match
const checkForExactMsgs = (message: DiscordMessage, functions: DiscordMsgFuncs) => {
  const { sendMsg } = functions;
  switch (message.content.toLowerCase().trim()) {
    case 'ping':
      sendMsg('pong!');
      break;

    default:
      return true;
  }
};
export default checkForExactMsgs;
