const functions = require('../lab1');

// Don't fix these tests - fix the code in lab1
describe('Test of Functions —lab1', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  });

  it('adds 5 + 5 to equal 10', () => {
    expect(functions.sum(5, 5)).toBe(10);
  });

  it('should return a number', () => {
    expect(typeof functions.sum(1, 2)).toBe('number');
    expect(typeof functions.sum(5, 40)).toBe('number');
  });

  it('should receive two numbers as arguments', function () {
    expect(() => functions.sum('a', true)).toThrow(Error);
  });

  it('doubles each number in the array', () => {
    expect(functions.doubleNumbersInArray([2, 4, 6, 8])).toEqual([
      4, 8, 12, 16,
    ]);
  });

  it('doubles each number in the array', () => {
    expect(functions.doubleNumbersInArray([4, 4, 2, 2])).toEqual([8, 8, 4, 4]);
  });

  it('throws an Error when giving it bad words', () => {
    expect(() => functions.checkForBadWords('Oh merde!')).toThrow(Error);
  });

  it('behaves normally when no bad words are used', () => {
    expect(() => functions.checkForBadWords('Oh hi!')).not.toThrow(Error);
  });

  it('returns Monday as the first day of the week', () => {
    expect(functions.nameOfWeekDay(0)).toBe('Monday');
  });

  it('returns Tuesday as the second day of the week', () => {
    expect(functions.nameOfWeekDay(1)).toBe('Tuesday');
  });

  it('sort numbers correctly', () => {
    expect(functions.sortNumbers([4, 2, 7, 6, 1])).toEqual([1, 2, 4, 6, 7]);
  });

  it('sort numbers correctly', () => {
    expect(functions.sortNumbers([10, 5, 20, 3, 100])).toEqual([
      3, 5, 10, 20, 100,
    ]);
  });

  it('counter counts in increments of one', () => {
    const counter = functions.createCounterFunction(0);
    let count = counter();
    count = counter();
    count = counter();
    expect(count).toEqual(3);
  });

  it('greets you properly', () => {
    expect(functions.createHelloMessage('There')).toEqual(
      'Hello There. Are you well?',
    );
  });

  it('calls the function only once', () => {
    const myMockFunction = jest.fn();

    functions.callTheCallback(myMockFunction);
    expect(myMockFunction).toBeCalled();
    expect(myMockFunction).toHaveBeenCalledTimes(1);
  });

  it('calls the function with parameters 1 and 2', () => {
    const myMockFunction = jest.fn();
    functions.callTheCallback(myMockFunction);

    expect(myMockFunction.mock.calls[0][0]).toBe(1);
    expect(myMockFunction.mock.calls[0][1]).toBe(2);
  });

  it('combine array elements in the correct order', () => {
    const combined = functions.combineArrays([1, 2, 3], ['a', 'b', 'c']);
    expect(combined).toEqual([1, 2, 3, 'a', 'b', 'c']);
  });

  it('the promise should resolve after a moment', async () => {
    const result = await functions.promiseMeMoney();
    expect(result).toBe('send message');
  });
});
