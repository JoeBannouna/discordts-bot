// Import the mathjs lib for the math command
import { create, all } from 'mathjs';
const config = {};
const math = create(all, config);

// Perform the math operation and return it or an error
const solveMathOperation = (operation: string, sendMsg: Function): void => {
  // Try catch block to send error if args is not a math operation
  try {
    // evaluate the operation
    const result = math.evaluate(operation);
    sendMsg(result)
      // If operation cannot be answered send an error
      .catch(err => sendMsg('even ur math teacher doesnt know the answer to this'));
  } catch (error) {
    // Send error if args is not a math operation
    sendMsg('thats not math u idot');
  }
};

export default solveMathOperation;