export function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
  if (t === 0) {
    return s.length % Number(MOD);
  }

  // build the 26×26 big-int matrix M
  const M: Matrix = Array.from({ length: 26 }, () => Array<bigint>(26).fill(BigInt(0)));
  for (let i = 0; i < 26; i++) {
    for (let d = 1; d <= nums[i]; d++) {
      const j = (i + d) % 26;
      M[i][j] += BigInt(1);
    }
  }

  // compute M^t in big-int
  const Mt = matrixPower(M, t);

  // count initial letters
  const count: number[] = Array(26).fill(0);
  for (const ch of s) {
    count[ch.charCodeAt(0) - 97]++;
  }

  // for each letter i, rowSum = sum_j Mt[i][j];
  // multiply by count[i] and accumulate.
  let answer = BigInt(0);
  for (let i = 0; i < 26; i++) {
    if (count[i] === 0) {
      continue;
    }
    let rowSum = BigInt(0);
    for (let j = 0; j < 26; j++) {
      rowSum += Mt[i][j];
    }
    answer = (answer + rowSum * BigInt(count[i])) % MOD;
  }

  return Number(answer);
}

const MOD = BigInt(1e9 + 7);
type Matrix = bigint[][];

// multiply two 26×26 matrices (bigint) mod MOD
function multiplyMatrix(a: Matrix, b: Matrix): Matrix {
  const n = 26;
  const c: Matrix = Array.from({ length: n }, () => Array<bigint>(n).fill(BigInt(0)));
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      const aik = a[i][k];
      if (aik !== BigInt(0)) {
        for (let j = 0; j < n; j++) {
          c[i][j] = (c[i][j] + aik * b[k][j]) % MOD;
        }
      }
    }
  }
  return c;
}

// fast exponentiation of a 26×26 matrix to power e (e is a JS number)
function matrixPower(mat: Matrix, e: number): Matrix {
  const n = 26;
  // identity matrix
  let res: Matrix = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? BigInt(1) : BigInt(0))),
  );
  let base = mat;
  let exp = e;
  while (exp > 0) {
    if (exp & 1) {
      res = multiplyMatrix(res, base);
    }
    base = multiplyMatrix(base, base);
    exp >>>= 1;
  }
  return res;
}
