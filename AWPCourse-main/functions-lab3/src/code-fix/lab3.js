// TODO: Fix the errors in the functions below!

const functions = {
  orderTotal(order) {
    // const totalNormalItems = order.items...;
    // const shippingItem = order.items...;
    // const shipping = ...;
    return 0;
  },

  addPositiveNumbers(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    const sum = 0;
    return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    // for (let i = 0; i < string.length - 1; i++)
    return -1;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's in this array. If there is any value other than 1 or 0 in the array, this is an error, return -1. The 1's and 0's may be either string or integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = -1;
    //
    // Todo
    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
