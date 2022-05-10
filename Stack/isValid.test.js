const isValid = require("./isValid");

test("Valid Parentheses => str = '()'", () => {
  expect(isValid("()")).toBe(true);
});

test("Valid Parentheses => str = '()[]{}'", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("Valid Parentheses => str = '(]'", () => {
  expect(isValid("(]")).toBe(false);
});
