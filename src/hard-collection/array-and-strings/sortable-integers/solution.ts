export function sortableIntegers(nums: number[]): number {
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);
  const divisors = getDivisors(n);

  let result = 0;
  for (const k of divisors) {
    if (isSortable(nums, sorted, k)) {
      result += k;
    }
  }
  return result;
}

function buildPrefix(pattern: number[]): number[] {
  const prefix: number[] = new Array(pattern.length).fill(0);

  for (let i = 1; i < pattern.length; i++) {
    let j = prefix[i - 1];

    while (j > 0 && pattern[i] !== pattern[j]) {
      j = prefix[j - 1];
    }

    if (pattern[i] === pattern[j]) {
      j++;
    }

    prefix[i] = j;
  }

  return prefix;
}

function isBlockRotation(nums: number[], sorted: number[], start: number, k: number): boolean {
  const pattern = sorted.slice(start, start + k);
  const prefix = buildPrefix(pattern);

  let matched = 0;

  // search pattern inside block + block
  // only 2k - 1 positions are needed
  for (let i = 0; i < 2 * k - 1; i++) {
    const value = nums[start + (i % k)];

    while (matched > 0 && value !== pattern[matched]) {
      matched = prefix[matched - 1];
    }

    if (value === pattern[matched]) {
      matched++;
    }

    if (matched === k) {
      return true;
    }
  }

  return false;
}

function isSortable(nums: number[], sorted: number[], k: number): boolean {
  const n = nums.length;

  for (let start = 0; start < n; start += k) {
    if (!isBlockRotation(nums, sorted, start, k)) {
      return false;
    }
  }

  return true;
}

function getDivisors(n: number): number[] {
  const divisors: number[] = [];

  for (let d = 1; d * d <= n; d++) {
    if (n % d !== 0) {
      continue;
    }

    divisors.push(d);

    if (d * d !== n) {
      divisors.push(n / d);
    }
  }

  return divisors;
}
