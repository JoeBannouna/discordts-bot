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
    try {
        child_process_1.exec('zenity --text="Bot Ready" --notification');
    }
    catch (err) { }
});
client.login(process.env.DISCORDJS_BOT_TOKEN);
