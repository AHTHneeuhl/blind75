function climbStairs(n) {
  var [a, b] = [1, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return a;
}

module.exports = climbStairs;
