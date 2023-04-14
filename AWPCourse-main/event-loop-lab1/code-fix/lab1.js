// TODO: Fix the errors in the functions below!

const functions = {
  checkEventLoop() {
    console.log('this is the start');

    setTimeout(() => {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    setTimeout(() => {
      console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');
  },

  executeAfterDelay(callback, delay) {
    // use setTimeout
    setTimeout(callback, delay);
  },

  executeInOrder(callback1, callback2) {
    setTimeout(callback1, 0);
    setTimeout(callback2);
  },

  stopInterval(intervalId, callback) {
    clearInterval(intervalId);
    callback();
  },

  executePromise(callback) {
    const promise = new Promise((resolve) => {
      const result = { status: true, value: 'foo' };
      resolve(result);
    });
    setImmediate(() => {
      promise.then((value) => {
        callback(value);
      });
    });
  },

  executePromises(callback) {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve('first'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('second'), 500)),
      new Promise((resolve) => setTimeout(() => resolve('third'), 250)),
    ];
    Promise.all(promises).then(callback);
  },
};

module.exports = functions;
