const functions = require("../lab2");

// Don't fix these tests - fix the code in lab2
describe("Test of Functions —lab2", () => {
  // This function takes an array of numbers, multiplies each number by 2, and returns the sum of all the resulting numbers.

  test('filterStrings should return an array with only the strings that contain the letter "a"', () => {
    const strings = ["apple", "banana", "plum", "pear", "mango", "cherry"];
    const result = functions.filterStrings(strings);
    expect(result).toEqual(["apple", "banana", "pear", "mango"]);
  });

  test("filterStrings should not modify the original array", () => {
    const strings = ["apple", "banana", "orange", "pear"];
    functions.filterStrings(strings);
    expect(strings).toEqual(["apple", "banana", "orange", "pear"]);
  });

  test("sumReduceNumbers should return 0 when given an empty array", () => {
    const numbers = [];
    const result = functions.sumReduceNumbers(numbers);
    expect(result).toBe(0);
  });

  test("sumReduceNumbers should return the sum of all the numbers in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = functions.sumReduceNumbers(numbers);
    expect(result).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  test("should remove last element from the array", () => {
    const array1 = [1, 2, 3, 4, 5];
    const lastElement = functions.helper1(array1);

    expect(lastElement).toBe(5);
    expect(array1).toEqual([1, 2, 3, 4]);
  });

  test("should return undefined for empty array", () => {
    const emptyArray = [];
    const lastElement = functions.helper1(emptyArray);
    expect(lastElement).toBeUndefined();
  });

  test("should add a new element to the end of an array", () => {
    const arr = [1, 2, 3];
    const updatedArr = functions.helper2(arr, 4);
    expect(updatedArr).toEqual([1, 2, 3, 4]);
  });

  test("should return an array with the new element added at the end", () => {
    const arr = [1, 2, 3];
    const updatedArr = functions.helper2(arr, 4);
    expect(updatedArr).toEqual(expect.arrayContaining([4]));
  });

  test("should remove the first element of the array", () => {
    const array1 = [1, 2, 3];
    const shiftedValue = functions.helper3(array1);
    expect(shiftedValue).toBe(1);
    expect(array1).toEqual([2, 3]);
  });

  test("shift should return undefined if the array is empty", () => {
    const emptyArray = [];
    const shiftedValue = functions.helper3(emptyArray);
    expect(shiftedValue).toBeUndefined();
  });

  test("should add new elements at the beginning of the array", () => {
    const array1 = [1, 2, 3];
    const result = functions.helper4(array1, 0, -1);
    expect(result).toEqual([0, -1, 1, 2, 3]);
  });

  test("should return a new array and not modify the original array", () => {
    const array1 = [1, 2, 3];
    const result = functions.helper5(array1, 0, -1);
    expect(result).not.toBe(array1);
    expect(array1).toEqual([1, 2, 3]);
  });

  test("should remove and insert elements correctly", () => {
    const myArray = ["apple", "banana", "cherry", "date"];
    const deleted = functions.helper5(myArray, 2, 1, "grape");
    expect(myArray).toEqual(["apple", "banana", "grape", "date"]);
    expect(deleted).toEqual(["cherry"]);
  });

  test("should return an empty array if no elements are deleted", () => {
    const myArray = ["apple", "banana", "cherry", "date"];
    const deleted = functions.helper5(myArray, 2, 0, "grape", "kiwi");
    expect(myArray).toEqual([
      "apple",
      "banana",
      "grape",
      "kiwi",
      "cherry",
      "date",
    ]);
    expect(deleted).toEqual([]);
  });

  test("should return a new array with specified elements", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const slicedArray = functions.helper6(originalArray, 1, 4);
    expect(slicedArray).toEqual([2, 3, 4]);
  });

  test("should not modify the original array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const slicedArray = functions.helper6(originalArray, 1, 3);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return a new array with elements of both arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const newArray = functions.helper7(array1, array2);
    expect(newArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should not modify the original arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    functions.helper7(array1, array2);
    expect(array1).toEqual([1, 2, 3]);
    expect(array2).toEqual([4, 5, 6]);
  });

  test("should return the index of the first occurrence of the specified element", () => {
    const arr = [1, 2, 3, 4, 5];
    const index = functions.helper8(arr, 3);
    expect(index).toEqual(2);
  });

  test("should return -1 if the specified element is not found in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const index = functions.helper8(arr, 6);
    expect(index).toEqual(-1);
  });

  test("should return true if the value is present in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const value = 3;
    const result = functions.helper9(array, value);
    expect(result).toBe(true);
  });

  test("should return false if the value is not present in the array", () => {
    const array = [1, 2, 3, 4, 5];
    const value = 6;
    const result = functions.helper9(array, value);
    expect(result).toBe(false);
  });

  test("should return true if the array includes the string", () => {
    const array = ["apple", "banana", "cherry"];
    const result = functions.helper9(array, "banana");
    expect(result).toBe(true);
  });

  test("should return the first element that satisfies the callback function", () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element) => element > 2;
    expect(functions.helper10(array, callback)).toBe(3);
  });

  test("should return undefined if no element satisfies the callback function", () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (element) => element > 5;
    expect(functions.helper10(array, callback)).toBe(undefined);
  });

  test("should return index of the first element that satisfies the provided testing function", () => {
    const array = [1, 2, 3, 4, 5];
    const result = functions.helper11(array, (element) => element > 3);
    expect(result).toEqual(3);
  });

  test("should return -1 if no element satisfies the provided testing function", () => {
    const array = [1, 2, 3, 4, 5];
    const result = functions.helper11(array, (element) => element > 5);
    expect(result).toEqual(-1);
  });

  test("should return true if all elements pass the test", () => {
    const arr = [2, 4, 6, 8];
    const isEven = (n) => n % 2 === 0;
    expect(functions.helper12(arr, isEven)).toBe(true);
  });

  test("should return false if any element fails the test", () => {
    const arr = [2, 4, 5, 8];
    const isEven = (n) => n % 2 === 0;
    expect(functions.helper12(arr, isEven)).toBe(false);
  });

  test("should return true if any element satisfies the condition", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = functions.helper13(arr, (element) => element > 3);
    expect(result).toBe(true);
  });

  test("should return false if no element satisfies the condition", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = functions.helper13(arr, (element) => element > 5);
    expect(result).toBe(false);
  });

  test("an array of strings with ',' separator returns the correct string", () => {
    const arr = ["apple", "banana", "cherry"];
    const separator = ",";
    const expectedResult = "apple,banana,cherry";

    const result = functions.helper14(arr, separator);

    expect(result).toBe(expectedResult);
  });

  test("an array of numbers with '-' separator returns the correct string", () => {
    const arr = [1, 2, 3, 4, 5];
    const separator = "-";
    const expectedResult = "1-2-3-4-5";

    const result = functions.helper14(arr, separator);

    expect(result).toBe(expectedResult);
  });

  test("should return the sum of all the numbers in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = functions.sumEachNumbers(numbers);
    expect(result).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  test("should return 0 when given an empty array", () => {
    const numbers = [];
    const result = functions.sumEachNumbers(numbers);
    expect(result).toBe(0);
  });

  test("should return an array with each number squared", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = functions.squareNumbers(numbers);
    expect(result).toEqual([1, 4, 9, 16, 25]);
  });

  test("should not modify the original array", () => {
    const numbers = [1, 2, 3, 4, 5];
    functions.squareNumbers(numbers);
    expect(numbers).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return the sum of even numbers after doubling them", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = functions.sumDoubledEvenNumbers(numbers);
    expect(result).toBe(12); // 2*2 + 4*2 = 12
  });

  test("should return 0 when given an empty array", () => {
    const numbers = [];
    const result = functions.sumDoubledEvenNumbers(numbers);
    expect(result).toBe(0);
  });
});
