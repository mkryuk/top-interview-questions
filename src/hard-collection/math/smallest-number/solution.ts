export function smallestNumber(num: string, t: number): string {
  const required = factorize(t);

  if (required === null) {
    return "-1";
  }

  const dpInfo = buildDp(required);
  const n = num.length;

  const rem2 = new Int16Array(n + 1);
  const rem3 = new Int16Array(n + 1);
  const rem5 = new Int16Array(n + 1);
  const rem7 = new Int16Array(n + 1);
  const validPrefix = new Uint8Array(n + 1);

  rem2[0] = required[0];
  rem3[0] = required[1];
  rem5[0] = required[2];
  rem7[0] = required[3];
  validPrefix[0] = 1;

  // calculate remaining requirements after each exact prefix of num
  for (let i = 0; i < n; i++) {
    if (validPrefix[i] === 0) {
      continue;
    }

    const digit = num.charCodeAt(i) - 48;

    // zero cannot belong to a valid zero-free prefix
    if (digit === 0) {
      continue;
    }

    const factors = DIGIT_FACTORS[digit];

    rem2[i + 1] = Math.max(0, rem2[i] - factors[0]);
    rem3[i + 1] = Math.max(0, rem3[i] - factors[1]);
    rem5[i + 1] = Math.max(0, rem5[i] - factors[2]);
    rem7[i + 1] = Math.max(0, rem7[i] - factors[3]);

    validPrefix[i + 1] = 1;
  }

  // num itself is already valid
  if (validPrefix[n] === 1 && rem2[n] === 0 && rem3[n] === 0 && rem5[n] === 0 && rem7[n] === 0) {
    return num;
  }

  // find the rightmost position that can be increased
  for (let i = n - 1; i >= 0; i--) {
    if (validPrefix[i] === 0) {
      continue;
    }

    const oldDigit = num.charCodeAt(i) - 48;
    const suffixLength = n - i - 1;

    for (let newDigit = Math.max(1, oldDigit + 1); newDigit <= 9; newDigit++) {
      const factors = DIGIT_FACTORS[newDigit];

      const r2 = Math.max(0, rem2[i] - factors[0]);
      const r3 = Math.max(0, rem3[i] - factors[1]);
      const r5 = Math.max(0, rem5[i] - factors[2]);
      const r7 = Math.max(0, rem7[i] - factors[3]);

      const minNeeded = getDp(dpInfo, r2, r3, r5, r7);

      if (minNeeded > suffixLength) {
        continue;
      }

      const suffix = buildSmallestSuffix(suffixLength, [r2, r3, r5, r7], dpInfo);

      return num.slice(0, i) + String(newDigit) + suffix;
    }
  }

  // no answer with the same number of digits
  const minNeeded = getDp(dpInfo, required[0], required[1], required[2], required[3]);

  const answerLength = Math.max(n + 1, minNeeded);

  return buildSmallestSuffix(answerLength, required, dpInfo);
}

type Factors = [number, number, number, number];

interface DpInfo {
  dp: Int16Array;
  size2: number;
  size3: number;
  size5: number;
  size7: number;
}

const INF = 30_000;

const DIGIT_FACTORS: Factors[] = [
  [0, 0, 0, 0], // 0
  [0, 0, 0, 0], // 1
  [1, 0, 0, 0], // 2
  [0, 1, 0, 0], // 3
  [2, 0, 0, 0], // 4
  [0, 0, 1, 0], // 5
  [1, 1, 0, 0], // 6
  [0, 0, 0, 1], // 7
  [3, 0, 0, 0], // 8
  [0, 2, 0, 0], // 9
];

function buildSmallestSuffix(length: number, initial: Factors, dpInfo: DpInfo): string {
  let r2 = initial[0];
  let r3 = initial[1];
  let r5 = initial[2];
  let r7 = initial[3];

  const result = new Array<string>(length);

  for (let i = 0; i < length; i++) {
    const positionsLeft = length - i - 1;

    for (let digit = 1; digit <= 9; digit++) {
      const factors = DIGIT_FACTORS[digit];

      const n2 = Math.max(0, r2 - factors[0]);
      const n3 = Math.max(0, r3 - factors[1]);
      const n5 = Math.max(0, r5 - factors[2]);
      const n7 = Math.max(0, r7 - factors[3]);

      if (getDp(dpInfo, n2, n3, n5, n7) > positionsLeft) {
        continue;
      }

      result[i] = String(digit);

      r2 = n2;
      r3 = n3;
      r5 = n5;
      r7 = n7;

      break;
    }
  }

  return result.join("");
}

function factorize(t: number): Factors | null {
  const primes = [2, 3, 5, 7];
  const result: Factors = [0, 0, 0, 0];

  let value = t;

  for (let i = 0; i < primes.length; i++) {
    while (value % primes[i] === 0) {
      result[i]++;
      value /= primes[i];
    }
  }

  // non-zero decimal digits contain no other prime factors
  if (value !== 1) {
    return null;
  }

  return result;
}

function buildDp(required: Factors): DpInfo {
  const info: DpInfo = {
    size2: required[0] + 1,
    size3: required[1] + 1,
    size5: required[2] + 1,
    size7: required[3] + 1,
    dp: new Int16Array((required[0] + 1) * (required[1] + 1) * (required[2] + 1) * (required[3] + 1)),
  };

  info.dp.fill(INF);

  const startIndex = getIndex(info, 0, 0, 0, 0);

  info.dp[startIndex] = 0;

  const q2: number[] = [0];
  const q3: number[] = [0];
  const q5: number[] = [0];
  const q7: number[] = [0];

  let head = 0;

  // forward bfs from no factors to capped target states
  while (head < q2.length) {
    const a = q2[head];
    const b = q3[head];
    const c = q5[head];
    const d = q7[head];
    head++;

    const currentDistance = getDp(info, a, b, c, d);

    for (let digit = 2; digit <= 9; digit++) {
      const factors = DIGIT_FACTORS[digit];

      const na = Math.min(required[0], a + factors[0]);
      const nb = Math.min(required[1], b + factors[1]);
      const nc = Math.min(required[2], c + factors[2]);
      const nd = Math.min(required[3], d + factors[3]);

      const nextIndex = getIndex(info, na, nb, nc, nd);

      if (info.dp[nextIndex] <= currentDistance + 1) {
        continue;
      }

      info.dp[nextIndex] = currentDistance + 1;

      q2.push(na);
      q3.push(nb);
      q5.push(nc);
      q7.push(nd);
    }
  }

  return info;
}

function getDp(info: DpInfo, a: number, b: number, c: number, d: number): number {
  return info.dp[getIndex(info, a, b, c, d)];
}

function getIndex(info: DpInfo, a: number, b: number, c: number, d: number): number {
  return ((a * info.size3 + b) * info.size5 + c) * info.size7 + d;
}
