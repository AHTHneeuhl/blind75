function hammingWeight(n) {
  return n ? 1 + hammingWeight(n & (n - 1)) : 0;
}

module.exports = hammingWeight;
