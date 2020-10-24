"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Discord = require("discord.js");
const child_process_1 = require("child_process");
const client = new Discord.Client();
const listenForMessages_1 = require("./functions/listenForMessages");
listenForMessages_1.default(client);
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    child_process_1.exec('zzenity --text="Bot Ready" --notification');
});
client.login(process.env.DISCORDJS_BOT_TOKEN);
