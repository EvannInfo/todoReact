// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;
    const squared = numbers;
    return squared;
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // filter
    const filteredStrings = strings;
    return filteredStrings;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    const sum = 0;
    return sum;
  },

  // removes last element of an array and returns it
  helper1(array) {
    return array;
  },

  // add one one element to an array
  helper2(arr, newOne) {
    return newOne;
  },

  // removes first element from an array and returns a new array
  helper3(arr) {
    return arr;
  },

  // add elements to the top of an array
  helper4(arr, ...elements) {
    return [];
  },

  // add elements to the top of an array
  helper5(arr, ...elements) {
    return [arr, elements];
  },

  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(arr, start, deleteCount, ...items) {
    return [arr, start, deleteCount, ...items];
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    return [start, end];
  },

  // concat two arrays
  helper7(arr1, arr2) {
    return arr1.concat(arr2);
  },

  helper8(arr, element) {
    return element;
  },

  helper9(array, value) {
    return value;
  },

  helper10(array, callback) {
    return callback();
  },

  helper11(arr, predicate) {
    return predicate;
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(arr, callback) {
    return callback();
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(arr, funcCallback) {
    return funcCallback();
  },

  helper14(arr, separator) {
    return [arr, separator];
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  sumEachNumbers(numbers) {
    return 0;
  },

  // This function takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    // double numbers
    // sum
    return 0;
  },
};

module.exports = functions;
