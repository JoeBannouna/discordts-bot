"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doMathOperation_1 = require("../commands/doMathOperation");
const checkForCommands = (message, client, functions) => {
    const { sendMsg } = functions;
    if (message.content.startsWith('!')) {
        const [cmd, ...args] = message.content.toLocaleLowerCase().split(/\s+/);
        switch (cmd) {
            case '!math':
                doMathOperation_1.default(args.join(' '), sendMsg);
                break;
            case '!avatar':
                sendMsg(message.author.avatarURL());
                break;
            default:
                return true;
        }
    }
    else
        return true;
};
exports.default = checkForCommands;
