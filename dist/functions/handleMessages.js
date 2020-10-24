"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForCommands_1 = require("./handleMessages/checkForCommands");
const checkForExactMsgs_1 = require("./handleMessages/checkForExactMsgs");
const checkForRegexes_1 = require("./handleMessages/checkForRegexes");
const handleMessages = (message, client, functions) => {
    if (message.author.bot)
        return;
    if (!checkForCommands_1.default(message, client, functions))
        return;
    if (!checkForExactMsgs_1.default(message, functions))
        return;
    if (!checkForRegexes_1.default(message, functions))
        return;
};
exports.default = handleMessages;
