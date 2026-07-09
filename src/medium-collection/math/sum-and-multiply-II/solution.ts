const MOD = 1e9 + 7;
const MOD_BIG = BigInt(1e9 + 7);
export function sumAndMultiply(s: string, queries: number[][]): number[] {
  const n = s.length;
  // nonZeroCount[i] = count of non-zero digits in s[0..i-1]
  const nonZeroCount = new Array<number>(n + 1).fill(0);
  // prefixValue[k] = number formed by first k non-zero digits, modulo mod
  const prefixValue = new Array<number>(n + 1).fill(0);
  // prefixSum[k] = digit sum of first k non-zero digits
  const prefixSum = new Array<number>(n + 1).fill(0);
  // pow10[k] = 10^k modulo mod
  const pow10 = new Array<number>(n + 1).fill(1);

  for (let i = 1; i <= n; i++) {
    pow10[i] = (pow10[i - 1] * 10) % MOD;
  }

  let compressedIndex = 0;

  for (let i = 0; i < n; i++) {
    const digit = s.charCodeAt(i) - 48;

    nonZeroCount[i + 1] = nonZeroCount[i];

    if (digit !== 0) {
      compressedIndex++;
      nonZeroCount[i + 1] = compressedIndex;
      prefixValue[compressedIndex] = (prefixValue[compressedIndex - 1] * 10 + digit) % MOD;
      prefixSum[compressedIndex] = prefixSum[compressedIndex - 1] + digit;
    }
  }

  const result: number[] = [];

  for (const [l, r] of queries) {
    const left = nonZeroCount[l] + 1;
    const right = nonZeroCount[r + 1];

    if (left > right) {
      result.push(0);
      continue;
    }

    const x = substringNumberMod(left, right, prefixValue, pow10);
    const digitSum = prefixSum[right] - prefixSum[left - 1];

    result.push(mulMod(x, digitSum));
  }

  return result;
}

function mulMod(a: number, b: number): number {
  // use bigint only where number multiplication may lose precision
  return Number((BigInt(a) * BigInt(b)) % MOD_BIG);
}

function subMod(a: number, b: number): number {
  const result = a - b;

  if (result < 0) {
    return result + MOD;
  }

  return result;
}

function substringNumberMod(left: number, right: number, prefixValue: number[], pow10: number[]): number {
  const length = right - left + 1;
  const removedPrefix = mulMod(prefixValue[left - 1], pow10[length]);

  return subMod(prefixValue[right], removedPrefix);
}
