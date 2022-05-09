function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();

  var left = 0;
  var right = str.length - 1;

  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }

  return true;
}

module.exports = isPalindrome;
