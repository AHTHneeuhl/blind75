const twoSum = require("./twoSum");

test("Two Sum => nums = [2, 7, 11, 15], target = 9", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("Two Sum => nums = [3, 2, 4], target = 6", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});
