type Ctx = {
  n: number;
  m: number;
  k: number;
  nums: number[];
  MOD: bigint;
  comb: bigint[][];
  powNums: bigint[][];
  dp: (bigint[] | null)[][][];
};

export function magicalSum(m: number, k: number, nums: number[]): number {
  {
    const MOD: bigint = BigInt(1e9 + 7);

    if (k < 0 || k > m) {
      return 0;
    }

    const n: number = nums.length;

    // precompute combinations and powers
    const comb: bigint[][] = buildCombinations(m, MOD);
    const powNums: bigint[][] = buildPowers(nums, m, MOD);

    // allocate memo table
    const dp: (bigint[] | null)[][][] = new Array(n + 1);
    for (let i = 0; i <= n; i += 1) {
      dp[i] = new Array(m + 1);
      for (let r = 0; r <= m; r += 1) {
        dp[i][r] = new Array(m + 1).fill(null);
      }
    }

    // assemble context
    const ctx: Ctx = { n, m, k, nums, MOD, comb, powNums, dp };

    // run dfs and extract answer for exactly k set bits
    const vec: bigint[] = dfs(ctx, 0, m, 0);
    const ans: bigint = k >= 0 && k < vec.length ? vec[k] : BigInt(0);
    return Number(ans % MOD);
  }
}

function dfs(ctx: Ctx, i: number, rem: number, carry: number): bigint[] {
  {
    const cached: bigint[] | null = ctx.dp[i][rem][carry];
    if (cached !== null) {
      return cached;
    }
  }

  if (i === ctx.n) {
    if (rem !== 0) {
      const zeroVec: bigint[] = new Array(ctx.k + 1).fill(BigInt(0));
      ctx.dp[i][rem][carry] = zeroVec;
      return zeroVec;
    }
    const pc: number = popcount(carry);
    const baseVec: bigint[] = new Array(ctx.k + 1).fill(BigInt(0));
    if (pc <= ctx.k) {
      baseVec[pc] = BigInt(1);
    }
    ctx.dp[i][rem][carry] = baseVec;
    return baseVec;
  }

  const out: bigint[] = new Array(ctx.k + 1).fill(BigInt(0));

  for (let t = 0; t <= rem; t += 1) {
    const totalAtBit: number = t + carry;
    const bitAdd: number = totalAtBit & 1;
    const newCarry: number = totalAtBit >> 1;

    // ways to assign exactly t copies of index i
    const ways: bigint = mulMod(ctx.comb[rem][t], ctx.powNums[i][t], ctx.MOD);

    // recurse to next index
    const sub: bigint[] = dfs(ctx, i + 1, rem - t, newCarry);

    if (bitAdd <= ctx.k) {
      for (let b = 0; b + bitAdd <= ctx.k; b += 1) {
        const addVal: bigint = mulMod(ways, sub[b], ctx.MOD);
        out[b + bitAdd] = addMod(out[b + bitAdd], addVal, ctx.MOD);
      }
    }
  }

  ctx.dp[i][rem][carry] = out;
  return out;
}

function buildCombinations(maxN: number, MOD: bigint): bigint[][] {
  const c: bigint[][] = new Array(maxN + 1);
  for (let i = 0; i <= maxN; i += 1) {
    c[i] = new Array(i + 1).fill(BigInt(0));
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || j === i) {
        c[i][j] = BigInt(1);
      } else {
        c[i][j] = addMod(c[i - 1][j - 1], c[i - 1][j], MOD);
      }
    }
  }
  // expand each row to uniform length for direct indexing
  for (let i = 0; i <= maxN; i += 1) {
    if (c[i].length < maxN + 1) {
      const row: bigint[] = new Array(maxN + 1).fill(BigInt(0));
      for (let j = 0; j <= i; j += 1) {
        row[j] = c[i][j];
      }
      c[i] = row;
    }
  }
  return c;
}

function buildPowers(nums: number[], m: number, MOD: bigint): bigint[][] {
  const n: number = nums.length;
  const powNums: bigint[][] = new Array(n);
  for (let i = 0; i < n; i += 1) {
    powNums[i] = new Array(m + 1).fill(BigInt(0));
    powNums[i][0] = BigInt(1);
    const base: bigint = BigInt(nums[i]) % MOD;
    for (let t = 1; t <= m; t += 1) {
      powNums[i][t] = mulMod(powNums[i][t - 1], base, MOD);
    }
  }
  return powNums;
}

function popcount(x: number): number {
  let v: number = x >>> 0;
  let cnt: number = 0;
  while (v > 0) {
    if ((v & 1) !== 0) {
      cnt += 1;
    }
    v = v >>> 1;
  }
  return cnt;
}

function addMod(a: bigint, b: bigint, MOD: bigint): bigint {
  let s: bigint = a + b;
  if (s >= MOD) {
    s -= MOD;
  }
  return s;
}

function mulMod(a: bigint, b: bigint, MOD: bigint): bigint {
  return (a * b) % MOD;
}
