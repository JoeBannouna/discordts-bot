"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForExactMsgs = (message, functions) => {
    const { sendMsg } = functions;
    switch (message.content.toLowerCase().trim()) {
        case 'bruh':
            sendMsg('bruh momento');
            break;
        case 'morty:':
            sendMsg(`Give it up folks, einstein over here has something to say. What's that buddy? Wha- A grammatical error?!? WHAT?!? B... Bu... That can't be possible! Surely not! A GRAMMAR MISTAKE? IN MY SIGHT?!? What a great, absolute miracle that you and your 257 IQ Brain was here to correct it! Thank you! Have my grattitude, Actually, What's your cashapp? I'd like to give you 20$... Know what? While we're at it have the keys to my car. Actually, no, scratch that. Have the keys to my house, go watch my kids grow up and fuck my wife. Also, my Paypal username and password is: Ilikesmartazzes4 and 968386329. Go have fun. Thank you for your work.`);
            break;
        default:
            return true;
    }
};
exports.default = checkForExactMsgs;
