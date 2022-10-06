function isValid(str) {
  var stack = new Array();

  for (c of str) {
    switch (c) {
      case "(":
      case "[":
      case "{":
        stack.push(c);
        break;
      case ")":
        if (stack.length === 0 || stack.at(-1) !== "(") return false;
        else stack.pop();
        break;
      case "]":
        if (stack.length === 0 || stack.at(-1) !== "[") return false;
        else stack.pop();
        break;
      case "}":
        if (stack.length === 0 || stack.at(-1) !== "{") return false;
        else stack.pop();
        break;
      default:
        return;
    }
  }

  return stack.length === 0;
}

module.exports = isValid;
