import * as Discord from 'discord.js';

// A type for an object with functions that do some discord funcionalities(sending a message reacting ect..) 
export type DiscordMsgFuncs = {
  regexMatch: (regex: string) => boolean;
  sendMsg: (msg: string) => Promise<Discord.Message>;
  reactToMsg: (emoji: string) => Promise<Discord.MessageReaction>;
};

// Discord types
export type DiscordChannel = Discord.TextChannel | Discord.DMChannel | Discord.NewsChannel;
export type DiscordMessage = Discord.Message;
export type DiscordClient = Discord.Client;