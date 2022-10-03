const plusOne = require("./plusOne");

test("digits = [1, 2, 3]", () => {
  expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
});

test("digits = [3, 2, 4]", () => {
  expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
});

test("digits = [9]", () => {
  expect(plusOne([9])).toStrictEqual([1, 0]);
});
