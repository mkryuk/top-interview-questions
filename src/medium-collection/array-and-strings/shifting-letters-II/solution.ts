export function shiftingLetters(s: string, shifts: number[][]): string {
  const n = s.length;
  const shiftMap = new Array(n + 1).fill(0);
  for (const [start, end, direction] of shifts) {
    const shift = direction === 1 ? 1 : -1;
    shiftMap[start] += shift;
    shiftMap[end + 1] -= shift;
  }

  let cumulativeShift = 0;
  let result = s.split("");
  for (let i = 0; i < n; i++) {
    cumulativeShift += shiftMap[i];
    const currentCharCode = result[i].charCodeAt(0) - "a".charCodeAt(0);
    const newCharCode = (currentCharCode + (cumulativeShift % 26) + 26) % 26;
    result[i] = String.fromCharCode(newCharCode + "a".charCodeAt(0));
  }
  return result.join("");
}
