import { DiscordMessage, DiscordMsgFuncs } from '../../types';

// Do something when part of the msg match the regex
const checkForRegexes = (message: DiscordMessage, functions: DiscordMsgFuncs) => {
  const { sendMsg, regexMatch, reactToMsg } = functions;

  switch (true) {
    case regexMatch(`i'm hungry`):
      sendMsg(`Hi hungry, I'm dad!`);
      break;

    case regexMatch('love'):
      reactToMsg('❤️');
      break;

    default:
      return true;
  }
};

export default checkForRegexes;