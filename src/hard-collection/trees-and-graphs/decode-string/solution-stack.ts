export function decodeString(s: string): string {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let decodedString = "";
      // get encoded string
      while (stack[stack.length - 1] !== "[") {
        decodedString = stack.pop() + decodedString;
      }
      // pop [ from the stack
      stack.pop();
      let k = "";
      // take k from the stack
      while (stack.length !== 0 && /\d/.test(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      let num = parseInt(k);
      stack.push(decodedString.repeat(num));
    } else {
      stack.push(s[i]);
    }
  }
  let result = stack.join("");
  return result;
}
