export function findKthSmallest(coins: number[], k: number): number {
  coins.sort((a, b) => a - b);

  // remove redundant denominations
  const filtered: number[] = [];

  for (const coin of coins) {
    let redundant = false;

    for (const smaller of filtered) {
      if (coin % smaller === 0) {
        redundant = true;
        break;
      }
    }

    if (!redundant) {
      filtered.push(coin);
    }
  }

  const terms = buildTerms(filtered);
  let left = 1;
  let right = filtered[0] * k;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (countAmounts(mid, terms) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function buildTerms(coins: number[]): Array<[number, number]> {
  const coefficients = new Map<number, number>();
  const n = coins.length;
  const totalMasks = 1 << n;

  // lcm[mask] lets us build a subset from mask without
  // iterating through all its elements
  const lcms = new Array<number>(totalMasks).fill(1);
  const bits = new Array<number>(totalMasks).fill(0);

  for (let mask = 1; mask < totalMasks; mask++) {
    const lowBit = mask & -mask;
    const index = 31 - Math.clz32(lowBit);
    const previousMask = mask ^ lowBit;
    lcms[mask] = lcm(lcms[previousMask], coins[index]);
    bits[mask] = bits[previousMask] + 1;
    const sign = bits[mask] % 2 === 1 ? 1 : -1;
    const value = lcms[mask];
    coefficients.set(value, (coefficients.get(value) ?? 0) + sign);
  }

  const result: Array<[number, number]> = [];

  for (const [value, coefficient] of coefficients) {
    if (coefficient !== 0) {
      result.push([value, coefficient]);
    }
  }
  return result;
}

function countAmounts(limit: number, terms: Array<[number, number]>): number {
  let count = 0;
  for (const [divisor, coefficient] of terms) {
    if (divisor <= limit) {
      count += coefficient * Math.floor(limit / divisor);
    }
  }
  return count;
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function lcm(a: number, b: number): number {
  return (a / gcd(a, b)) * b;
}
