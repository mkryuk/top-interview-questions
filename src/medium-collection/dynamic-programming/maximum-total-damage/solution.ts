export function maximumTotalDamage(power: number[]): number {
  const freq: Map<number, number> = buildFrequency(power);
  const values: number[] = Array.from(freq.keys()).sort((a, b) => a - b);
  const gains: number[] = values.map((v) => v * (freq.get(v) as number));
  const prev: number[] = computePrevIndices(values);

  const dp: number[] = new Array(values.length).fill(0);
  for (let i = 0; i < values.length; i += 1) {
    const take: number = gains[i] + (prev[i] >= 0 ? dp[prev[i]] : 0);
    const skip: number = i > 0 ? dp[i - 1] : 0;
    dp[i] = Math.max(skip, take);
  }

  if (values.length > 0) {
    return dp[values.length - 1];
  } else {
    return 0;
  }
}

function upperBound(arr: number[], target: number): number {
  let lo: number = 0;
  let hi: number = arr.length;
  while (lo < hi) {
    const mid: number = lo + ((hi - lo) >> 1);
    if (arr[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

// builds frequency map of values
function buildFrequency(power: number[]): Map<number, number> {
  const freq: Map<number, number> = new Map();
  for (const p of power) {
    if (!freq.has(p)) {
      freq.set(p, 0);
    }
    freq.set(p, (freq.get(p) as number) + 1);
  }
  return freq;
}

// precomputes previous index j for each i such that values[j] <= values[i] - 3
function computePrevIndices(values: number[]): number[] {
  const prev: number[] = new Array(values.length).fill(-1);
  for (let i = 0; i < values.length; i += 1) {
    const target: number = values[i] - 3;
    const j: number = upperBound(values, target) - 1;
    if (j >= 0) {
      prev[i] = j;
    }
  }
  return prev;
}
