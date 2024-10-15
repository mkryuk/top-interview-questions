export function minimumSteps(s: string): number {
  let result = 0;
  let countOnes = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      countOnes++;
    } else {
      result += countOnes;
    }
  }
  return result;
}
