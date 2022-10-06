const countSubstrings = require("./countSubstrings");

test("Palindromic Substrings => s = 'abc'", () => {
  expect(countSubstrings("abc")).toBe(3);
});

test("Palindromic Substrings => s = 'aaa'", () => {
  expect(countSubstrings("aaa")).toBe(6);
});
