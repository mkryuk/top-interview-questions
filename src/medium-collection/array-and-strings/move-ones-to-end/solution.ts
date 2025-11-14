export function maxOperations(s: string): number {
  let result: number = 0;

  // ones stores how many '1's we have seen so far while scanning
  let ones: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === "1") {
      // count each '1' we pass
      ones++;
    } else {
      // we are at a '0'
      // if this zero is the last in its block (next char is '1' or end of string)
      // then every '1' seen so far can be moved across this zero block once
      if (i + 1 === s.length || s[i + 1] === "1") {
        result += ones;
      }
    }
  }

  return result;
}
