function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  return str1 === str2;
}

module.exports = isAnagram;
