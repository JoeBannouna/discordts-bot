"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForRegexes = (message, functions) => {
    const { sendMsg, regexMatch, reactToMsg } = functions;
    switch (true) {
        case regexMatch('fuck you'):
        case regexMatch('fuck u'):
            sendMsg(`fuck you ${message.author}`);
            break;
        case regexMatch('nice'):
            sendMsg(`nice`);
            break;
        case regexMatch('love'):
            sendMsg(`i love you babe :heart:`);
            break;
        case regexMatch('nou'):
        case regexMatch('no u'):
            sendMsg(`no u`);
            break;
        case regexMatch('love'):
            sendMsg(`i love u babe :heart:`);
            break;
        case regexMatch('indeed'):
            sendMsg('indeed');
            break;
        case regexMatch('reeeee'):
            sendMsg('§§§§§§§§§üüüüüüüüüüüüüü§§§§§§§§§§§§ääääääää§§§§§ööööööööööööö§§§²^^^^ßßßßßßßßßßßßßßßßßßßßßßßßßßßß^^³³');
            break;
        case regexMatch('sex'):
            reactToMsg('😳');
            break;
        default:
            return true;
    }
};
exports.default = checkForRegexes;
