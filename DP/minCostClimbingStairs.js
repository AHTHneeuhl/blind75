function minCostClimbingStairs(cost) {
  var a = 0,
    b = 0;
  for (let i = 0; i < cost.length; i++) {
    var t = cost[i] + Math.min(a, b);
    a = b;
    b = t;
  }
  return Math.min(a, b);
}

module.exports = minCostClimbingStairs;
