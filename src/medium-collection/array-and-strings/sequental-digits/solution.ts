export function sequentialDigits(low: number, high: number): number[] {
  let result: number[] = [];
  for (let i = 1; i <= 9; i++) {
    addSequence(i, low, high, result);
  }
  return result.sort((a, b) => a - b);
}

function addSequence(start: number, low: number, high: number, seq: number[]) {
  let num = start;
  for (let i = start; i <= 9; i++) {
    if (num >= low && num <= high) {
      seq.push(num);
    }
    const next = (num % 10) + 1;
    if (next > 9 || num > high) {
      break;
    }
    num = num * 10 + next;
  }
}
