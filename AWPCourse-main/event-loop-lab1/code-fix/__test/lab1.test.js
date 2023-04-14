const {
  checkEventLoop,
  executeAfterDelay,
  executeInOrder,
  executePromise,
  stopInterval,
  executePromises,
} = require('../lab1');
const functions = require('../lab1');

// Don't fix these tests - fix the code in lab1
describe('Test of Event Loop —lab1', () => {
  // setTimeout doit renvoyer un identifiant numérique permettant d'annuler le timeout
  test('should run in order', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    checkEventLoop();

    expect(consoleSpy).toHaveBeenCalledWith(`this is the start`);
    consoleSpy.mockRestore();
  });

  // setTimeout avec un délai de 0ms devrait s'exécuter de manière asynchrone
  test('setTimeout with a delay of 0ms should still execute asynchronously', (done) => {
    const delay = 1000;
    const startTime = Date.now();
    executeAfterDelay(() => {
      const endTime = Date.now();
      const difference = endTime - startTime;
      expect(difference).toBeGreaterThanOrEqual(delay);
      done();
    }, delay);
  });

  test('setTimeout callbacks should execute before setTimeout callbacks', (done) => {
    let order = '';
    executeInOrder(
      () => {
        order += 'timeout';
      },
      () => {
        order += 'immediate';
        expect(order).toBe('timeoutimmediate');
        done();
      },
    );
  });

  test('setInterval should stop executing after clearInterval is called', (done) => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      if (count === 3) {
        stopInterval(intervalId, () => {
          expect(count).toBe(3);
          done();
        });
      }
    }, 1000);
  });

  test('promise resolution should happen after the current event loop iteration', (done) => {
    let callbackExecuted = false;
    executePromise(({ status, value }) => {
      callbackExecuted = status;
      expect(callbackExecuted).toBe(true);
      expect(value).toBe('foo');
      done();
    });
  });

  test('Promise.all should maintain the order of promise execution', (done) => {
    executePromises((results) => {
      expect(results).toEqual(['first', 'second', 'third']);
      done();
    });
  });
});
