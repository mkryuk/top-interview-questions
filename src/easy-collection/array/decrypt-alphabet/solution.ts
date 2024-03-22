export function freqAlphabets(s: string): string {
  let result: string[] = [];
  for (let i = s.length - 1; i >= 0; i--) {
    let num;
    if (s[i] === "#") {
      num = parseInt(s.substring(i - 2, i));
      i -= 2;
    } else {
      num = parseInt(s[i]);
    }
    result.push(String.fromCharCode(96 + num));
  }
  return result.reverse().join("");
}
