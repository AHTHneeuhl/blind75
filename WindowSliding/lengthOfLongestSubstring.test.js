const maxProfit = require("./lengthOfLongestSubstring");

test("Longest Substring Without Repeating Characters => s = 'abcabcbb'", () => {
  expect(maxProfit("abcabcbb")).toBe(3);
});

test("Longest Substring Without Repeating Characters => s = 'bbbbb'", () => {
  expect(maxProfit("bbbbb")).toBe(1);
});
