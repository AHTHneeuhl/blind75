function rob(nums) {
  var prev = 0,
    curr = 0;
  for (const num of nums) {
    var t = Math.max(num + prev, curr);
    prev = curr;
    curr = t;
  }
  return curr;
}

module.exports = rob;
