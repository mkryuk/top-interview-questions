export function removeOccurrences(s: string, part: string): string {
  const partLength = part.length;
  const stack: string[] = [];
  for (let ch of s) {
    stack.push(ch);
    if (stack.length < partLength) {
      continue;
    }
    let match = true;
    const stackLength = stack.length;
    for (let i = 0; i < partLength; i++) {
      if (stack[stackLength - partLength + i] !== part[i]) {
        match = false;
        break;
      }
    }
    if (match) {
      for (let i = 0; i < partLength; i++) {
        stack.pop();
      }
    }
  }
  return stack.join("");
}
