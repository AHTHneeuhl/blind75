const minCostClimbingStairs = require("./minCostClimbingStairs");

test("Min Cost Climbing Stairs => cost = [10, 15, 20]", () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
});

test("Min Cost Climbing Stairs => cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]", () => {
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});
