"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForRegexes = (message, functions) => {
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
exports.default = checkForRegexes;
