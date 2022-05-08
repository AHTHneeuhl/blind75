const containsDuplicate = require("./containsDuplicate");

test("Contains Duplicate => nums = [1, 2, 3, 1]", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test("Contains Duplicate => nums = [1, 2, 3, 4]", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});
