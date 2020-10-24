"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
const config = {};
const math = mathjs_1.create(mathjs_1.all, config);
const solveMathOperation = (operation, sendMsg) => {
    try {
        const result = math.evaluate(operation);
        sendMsg(result)
            .catch(err => sendMsg('even ur math teacher doesnt know the answer to this'));
    }
    catch (error) {
        sendMsg('thats not math u idot');
    }
};
exports.default = solveMathOperation;
