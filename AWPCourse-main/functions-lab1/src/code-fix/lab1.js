// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      throw new Error();
    }
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = function (nombre) {
      return nombre * 2;
    };
    return array.map(double);
  },

  checkForBadWords(input) {
    let grosMot = ['merde'];
    grosMot.forEach((element) => {
      if (input.includes(element.toLowerCase())) {
        throw new Error();
      }
    });
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    console.log(input);
  },

  nameOfWeekDay(index) {
    const jours = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return jours[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    return array.sort((a, b) => a - b);
  },

  createCounterFunction(input) {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    callback(1, 2);
  },

  combineArrays(array1, array2) {
    return [...array1, ...array2];
  },

  promiseMeMoney() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) {
          reject('Error');
        }
        // resolve('send message');
      }, 2000);
    });
  },
};

module.exports = functions;
