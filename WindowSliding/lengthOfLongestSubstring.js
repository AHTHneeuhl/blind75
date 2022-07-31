function lengthOfLongestSubstring(s) {
  const window = new Set();
  var beg = 0;
  var end = 0;
  var res = 0;
  var n = s.length;

  while (beg < n && end < n) {
    if (!window.has(s[end])) {
      if (end + 1 < n) {
        window.add(s[end]);
      }
      end += 1;
      res = Math.max(res, end - beg);
    } else {
      window.delete(s[beg]);
      beg += 1;
    }
  }

  return res;
}

module.exports = lengthOfLongestSubstring;
