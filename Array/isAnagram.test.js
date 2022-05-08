const isAnagram = require("./isAnagram");

test('Is Anagram => s = "anagram", t = "nagaram"', () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test('Is Anagram => s = "rat", t = "car"', () => {
  expect(isAnagram("rat", "car")).toBe(false);
});
