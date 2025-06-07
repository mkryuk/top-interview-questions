export function robotWithString(s: string): string {
  const charCount = new Array(26).fill(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    charCount[s.charCodeAt(i) - 97]++;
  }

  const stack: string[] = [];
  const result: string[] = [];
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    stack.push(ch);
    charCount[ch.charCodeAt(0) - 97]--;
    let minIndex = 0;
    while (minIndex < 26 && charCount[minIndex] === 0) {
      minIndex++;
    }
    const minChar = minIndex < 26 ? String.fromCharCode(minIndex + 97) : null;
    while (stack.length > 0 && (minChar === null || stack[stack.length - 1] <= minChar)) {
      result.push(stack.pop()!);
    }
  }
  return result.join("");
}
