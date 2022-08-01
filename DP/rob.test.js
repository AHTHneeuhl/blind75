const rob = require("./rob");

test("House Robber => nums = [1, 2, 3, 1]", () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
});

test("House Robber => [2, 7, 9, 3, 1]", () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
});
