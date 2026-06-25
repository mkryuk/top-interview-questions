const MOD = BigInt(1e9 + 7);

type Matrix = bigint[][];

export function zigZagArrays(n: number, l: number, r: number): number {
  const m = r - l + 1;

  let up = new Array<bigint>(m).fill(0n);
  let down = new Array<bigint>(m).fill(0n);

  for (let value = 0; value < m; value++) {
    // length 2 arrays ending at value with last move up
    up[value] = BigInt(value);

    // length 2 arrays ending at value with last move down
    down[value] = BigInt(m - 1 - value);
  }

  const remainingSteps = n - 2;
  const twoStepCount = Math.floor(remainingSteps / 2);

  let upTwoStepMatrix = buildUpTwoStepMatrix(m);
  let downTwoStepMatrix = buildDownTwoStepMatrix(m);

  [up, down] = applyTwoStepPowers(upTwoStepMatrix, downTwoStepMatrix, up, down, twoStepCount);

  if (remainingSteps % 2 === 1) {
    [up, down] = applyOneStep(up, down);
  }

  return Number(sumVectors(up, down));
}

function multiplyMatrices(a: Matrix, b: Matrix): Matrix {
  const n = a.length;
  const result: Matrix = Array.from({ length: n }, () => new Array<bigint>(n).fill(0n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0n;

      for (let k = 0; k < n; k++) {
        if (a[i][k] !== 0n && b[k][j] !== 0n) {
          sum += a[i][k] * b[k][j];
        }
      }

      result[i][j] = sum % MOD;
    }
  }

  return result;
}

function multiplyMatrixVector(matrix: Matrix, vector: bigint[]): bigint[] {
  const n = matrix.length;
  const result = new Array<bigint>(n).fill(0n);

  for (let i = 0; i < n; i++) {
    let sum = 0n;

    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0n && vector[j] !== 0n) {
        sum += matrix[i][j] * vector[j];
      }
    }

    result[i] = sum % MOD;
  }

  return result;
}

function buildUpTwoStepMatrix(m: number): Matrix {
  const matrix: Matrix = Array.from({ length: m }, () => new Array<bigint>(m).fill(0n));

  for (let last = 0; last < m; last++) {
    for (let prev = 0; prev < m; prev++) {
      // count middle values x where x < last and x < prev
      matrix[last][prev] = BigInt(Math.min(last, prev));
    }
  }

  return matrix;
}

function buildDownTwoStepMatrix(m: number): Matrix {
  const matrix: Matrix = Array.from({ length: m }, () => new Array<bigint>(m).fill(0n));

  for (let last = 0; last < m; last++) {
    for (let prev = 0; prev < m; prev++) {
      // count middle values x where x > last and x > prev
      matrix[last][prev] = BigInt(m - 1 - Math.max(last, prev));
    }
  }

  return matrix;
}

function applyTwoStepPowers(
  upMatrix: Matrix,
  downMatrix: Matrix,
  up: bigint[],
  down: bigint[],
  power: number,
): [bigint[], bigint[]] {
  while (power > 0) {
    if (power % 2 === 1) {
      up = multiplyMatrixVector(upMatrix, up);
      down = multiplyMatrixVector(downMatrix, down);
    }

    upMatrix = multiplyMatrices(upMatrix, upMatrix);
    downMatrix = multiplyMatrices(downMatrix, downMatrix);

    power = Math.floor(power / 2);
  }

  return [up, down];
}

function applyOneStep(up: bigint[], down: bigint[]): [bigint[], bigint[]] {
  const m = up.length;
  const nextUp = new Array<bigint>(m).fill(0n);
  const nextDown = new Array<bigint>(m).fill(0n);

  let prefix = 0n;

  for (let value = 0; value < m; value++) {
    nextUp[value] = prefix;
    prefix = (prefix + down[value]) % MOD;
  }

  let suffix = 0n;

  for (let value = m - 1; value >= 0; value--) {
    nextDown[value] = suffix;
    suffix = (suffix + up[value]) % MOD;
  }

  return [nextUp, nextDown];
}

function sumVectors(up: bigint[], down: bigint[]): bigint {
  let result = 0n;

  for (const value of up) {
    result = (result + value) % MOD;
  }

  for (const value of down) {
    result = (result + value) % MOD;
  }

  return result;
}
