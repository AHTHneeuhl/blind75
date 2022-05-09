const climbStairs = require("./climbStairs");

test("Climbing Stairs => n = 2", () => {
  expect(climbStairs(2)).toBe(2);
});

test("Climbing Stairs => n = 3", () => {
  expect(climbStairs(3)).toBe(3);
});
