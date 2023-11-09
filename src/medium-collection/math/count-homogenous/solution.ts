export function countHomogenous(s: string): number {
  let mod = 1e9 + 7;
  let char = "";
  let result = 0;
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === char) {
      cur++;
    } else {
      char = s[i];
      cur = 1;
    }
    result = (result + cur) % mod;
  }
  return result;
}
