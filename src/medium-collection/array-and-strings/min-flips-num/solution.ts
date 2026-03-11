export function minFlips(s: string): number {
  const n: number = s.length;
  const doubled: string = s + s;

  let diffStartWithZero: number = 0;
  let diffStartWithOne: number = 0;
  let left: number = 0;
  let answer: number = Number.MAX_SAFE_INTEGER;

  for (let right = 0; right < doubled.length; right++) {
    const expectedZeroPattern: string = right % 2 === 0 ? "0" : "1";
    const expectedOnePattern: string = right % 2 === 0 ? "1" : "0";

    if (doubled[right] !== expectedZeroPattern) {
      diffStartWithZero++;
    }

    if (doubled[right] !== expectedOnePattern) {
      diffStartWithOne++;
    }

    if (right - left + 1 > n) {
      const leftExpectedZeroPattern: string = left % 2 === 0 ? "0" : "1";
      const leftExpectedOnePattern: string = left % 2 === 0 ? "1" : "0";

      if (doubled[left] !== leftExpectedZeroPattern) {
        diffStartWithZero--;
      }

      if (doubled[left] !== leftExpectedOnePattern) {
        diffStartWithOne--;
      }

      left++;
    }

    if (right - left + 1 === n) {
      answer = Math.min(answer, diffStartWithZero, diffStartWithOne);
    }
  }

  return answer;
}
