module.exports = function check(str, bracketsConfig) {
  // your solution
    const stack = [];
    for (const bracket of str) {
      const pair = bracketsConfig.find((pair) => pair.includes(bracket));
      if (bracket === pair[1] && stack.length === 0 && pair[0] !== pair[1]) {
        return false;
      }  else if (bracket === pair[1] && stack.at(-1) === pair[0]) {
        stack.pop();
      } else if (bracket === pair[0]) {
        stack.push(bracket);
      } else if (bracket === pair[1] && stack.at(-1) !== pair[0]) {
        return false;
      }
    }
    return stack.length === 0;
  }
