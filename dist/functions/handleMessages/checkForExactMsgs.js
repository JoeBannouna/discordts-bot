"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForExactMsgs = (message, functions) => {
    const { sendMsg } = functions;
    switch (message.content.toLowerCase().trim()) {
        case 'ping':
            sendMsg('pong!');
            break;
        default:
            return true;
    }
};
exports.default = checkForExactMsgs;
