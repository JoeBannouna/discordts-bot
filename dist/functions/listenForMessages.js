"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMessages_1 = require("./handleMessages");
const listenForMessages = (client) => {
    client.on('message', (message) => {
        const regexMatch = (regex) => message.content.toLowerCase().includes(regex);
        const sendMsg = (msg) => message.channel.send(msg);
        const reactToMsg = (emoji) => message.react(emoji);
        const functions = { regexMatch, sendMsg, reactToMsg };
        handleMessages_1.default(message, client, functions);
    });
};
exports.default = listenForMessages;
