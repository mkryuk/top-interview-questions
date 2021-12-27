export function isValid(s: string): boolean {
  // initialize map with corresponding brackets
  let mapBrackets = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    // if the current bracket is the closing bracket
    if (mapBrackets.has(s[i])) {
      // get top from the stack
      const top = stack.pop();
      // check if this is the corresponding bracket
      if (mapBrackets.get(s[i]) !== top) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}
