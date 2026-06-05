export function totalWaviness(num1: number, num2: number): number {
  let result = 0;
  for (let num = num1; num <= num2; num++) {
    result += getWaviness(num);
  }
  return result;
}

function getWaviness(num: number): number {
  const digits = num.toString();
  let waviness = 0;
  if (digits.length < 3) {
    return 0;
  }
  for (let i = 1; i < digits.length - 1; i++) {
    const prev = Number(digits[i - 1]);
    const curr = Number(digits[i]);
    const next = Number(digits[i + 1]);

    if (isPeak(prev, curr, next)) {
      waviness++;
    }

    if (isValley(prev, curr, next)) {
      waviness++;
    }
  }

  return waviness;
}

function isPeak(prev: number, curr: number, next: number): boolean {
  return curr > prev && curr > next;
}

function isValley(prev: number, curr: number, next: number): boolean {
  return curr < prev && curr < next;
}
