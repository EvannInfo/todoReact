const functions = require("../lab3");

// Don't fix these tests - fix the code in lab3
describe("Test of Functions —lab3", () => {
  it("calc total of an order", () => {
    const someOrder = {
      items: [
        { name: "Cat food", price: 8, quantity: 8 },
        { name: "Dog small house", price: 800, quantity: 2 },
        { name: "Tax", price: 40, shipping: true },
      ],
    };
    expect(functions.orderTotal(someOrder)).toBe(1664);
  });

  it("adds shipping price of 40 for small orders", () => {
    const someOrder = {
      items: [
        { name: "Cat small house", price: 8, quantity: 8 },
        { name: "Tax", price: 40, shipping: true },
      ],
    };
    expect(functions.orderTotal(someOrder)).toBe(104);
  });

  test("return the sum of all positive numbers", () => {
    expect(functions.addPositive([1, 0, 3, -1])).toBe(4);
  });

  test("return the sum of all positive numbers, and convert string to number", () => {
    expect(functions.addPositive([1, 0, "3", -1])).toBe(4);
  });

  test("return 0 for empty array", () => {
    expect(functions.addPositive([])).toBe(0);
  });

  test("return index of first repeating character", () => {
    expect(functions.repeatingCharacter("IAMMMFINE")).toBe(3);
  });

  test("return index of first repeating character and case insensitive", () => {
    expect(functions.repeatingCharacter("IAmMMFINE")).toBe(3);
  });

  test("ignore space", () => {
    expect(functions.repeatingCharacter("I  AAM")).toBe(4);
  });

  test("repeatingChar return -1 if no repeating", () => {
    expect(functions.repeatingCharacter("IAMFINE")).toBe(-1);
  });

  test("return max number of consecutive 1s", () => {
    expect(functions.maxOneNumber([0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1])).toBe(5);
  });

  test("maxOnes return -1 for error", () => {
    expect(functions.maxOneNumber([0, 1, 1, 0, 0, 2])).toBe(-1);
  });

  test("both string and integer are acceptable", () => {
    expect(functions.maxOneNumber([0, "1", 1, "1", "0", 0, 1])).toBe(3);
  });
});
