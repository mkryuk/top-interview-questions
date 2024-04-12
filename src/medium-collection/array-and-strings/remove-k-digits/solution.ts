export function removeKdigits(num: string, k: number): string {
  let stack: string[] = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }

  const result = stack.join("").replace(/^0+/, "");
  return result === "" ? "0" : result;
}
