const binarySearch = require("./binarySearch");

test("Binary Search => nums = [-1, 0, 3, 5, 9, 12], target = 9", () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test("Binary Search => nums = [-1, 0, 3, 5, 9, 12], target = 2", () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
