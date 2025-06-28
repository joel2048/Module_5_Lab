const { addNumbers } = require('./addNumbers.js');

test('add numbers', () => {
expect(addNumbers(5, 7)).toBe(12);
});