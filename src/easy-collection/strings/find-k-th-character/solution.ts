export function kthCharacter(k: number): string {
  let result = ["a"];
  while (result.length < k) {
    const len = result.length;
    for (let i = 0; i < len; i++) {
      const code = result[i].charCodeAt(0);
      const nextCh = code === 122 ? "a" : String.fromCharCode(code + 1);
      result.push(nextCh);
    }
  }
  return result[k - 1];
}
