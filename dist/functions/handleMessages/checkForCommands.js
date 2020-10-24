"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
const config = {};
const math = mathjs_1.create(mathjs_1.all, config);
const checkForCommands = (message, client, functions) => {
    const { sendMsg } = functions;
    if (message.content.startsWith('!')) {
        const [cmd, ...args] = message.content.toLocaleLowerCase().split(/\s+/);
        switch (cmd) {
            case '!math':
                const operation = args.join(' ');
                try {
                    const result = math.evaluate(operation);
                    sendMsg(result)
                        .catch(err => sendMsg('even ur math teacher doesnt know the answer to this'));
                }
                catch (error) {
                    sendMsg('thats not math u idot');
                }
                break;
            case '!emoji':
                sendMsg('this doesnt work rn but ill do it later <:kekW:765982296972460094>');
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
