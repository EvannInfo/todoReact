require('@testing-library/jest-dom');

const {
  addClickListener,
  removeClickListener,
  addKeyDownListener,
  removeKeyDownListener,
  addClickWithCaptureListener,
  addClickWithBubbleListener,
} = require('../lab1');
const functions = require('../lab1');

// Don't fix these tests - fix the code in lab1
describe('Test of Event Vanilla js —lab1', () => {
  test('should add a click event listener to an element', () => {
    const mockElement = document.createElement('div');
    const mockCallback = jest.fn();
    addClickListener(mockElement, mockCallback);
    mockElement.click();
    expect(mockCallback).toHaveBeenCalled();
  });

  test('should remove a click event listener from an element', () => {
    const mockElement = document.createElement('div');
    const mockCallback = jest.fn();
    addClickListener(mockElement, mockCallback);
    removeClickListener(mockElement, mockCallback);
    mockElement.click();
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('should add a keydown event listener to an element', () => {
    const mockElement = document.createElement('input');
    const mockCallback = jest.fn();
    addKeyDownListener(mockElement, mockCallback);
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    mockElement.dispatchEvent(event);
    expect(mockCallback).toHaveBeenCalled();
  });

  test('should remove a keydown event listener from an element', () => {
    const mockElement = document.createElement('input');
    const mockCallback = jest.fn();
    addKeyDownListener(mockElement, mockCallback);
    removeKeyDownListener(mockElement, mockCallback);
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    mockElement.dispatchEvent(event);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('should add a click event listener in the capturing phase to an element', () => {
    document.body.innerHTML = '<button id="test-button">Click me</button>';
    const button = document.getElementById('test-button');
    addClickWithCaptureListener(button);

    const consoleSpy = jest.spyOn(console, 'log');

    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(consoleSpy).toHaveBeenCalledWith('Click count: 2');
    consoleSpy.mockRestore();
  });

  test('should not increment count when clicking on child element', () => {
    document.body.innerHTML = `
      <div>
        <button id="parent">
          Parent
          <button id="child">Child</button>
        </button>
      </div>
    `;
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    const getCount = addClickWithBubbleListener(parent);
    child.click();
    child.click();
    expect(getCount()).toBe(0);
  });

  test('should increment count when clicking on parent element', () => {
    document.body.innerHTML = `
      <div>
        <button id="parent">
          Parent
          <button id="child">Child</button>
        </button>
      </div>
    `;
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    const getCount = addClickWithBubbleListener(parent);
    parent.click();
    expect(getCount()).toBe(1);
  });

  test('should not increment count when clicking outside of element', () => {
    document.body.innerHTML = `
      <div>
        <button id="parent">
          Parent
          <button id="child">Child</button>
        </button>
      </div>
    `;
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    const getCount = addClickWithBubbleListener(parent);
    document.body.click();
    child.click();
    expect(getCount()).toBe(0);
  });

  test('should remove event listener when calling returned function', () => {
    document.body.innerHTML = `
      <div>
        <button id="parent">
          Parent
          <button id="child">Child</button>
        </button>
      </div>
    `;
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    const removeListener = addClickWithBubbleListener(parent);
    parent.click();
    expect(removeListener()).toBe(1);
    parent.click();
    parent.click();
    parent.click();
    expect(removeListener()).toBe(1);
  });
});
