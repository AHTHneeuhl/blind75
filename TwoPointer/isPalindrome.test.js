const isPalindrome = require("./isPalindrome");

test('Valid Palindrome => s = "A man, a plan, a canal: Panama"', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test('Valid Palindrome => s = "race a car"', () => {
  expect(isPalindrome("race a car")).toBe(false);
});
