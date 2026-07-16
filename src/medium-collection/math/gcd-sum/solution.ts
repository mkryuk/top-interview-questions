export function gcdSum(nums: number[]): number {
  const prefixGcd = buildPrefixGcd(nums);

  prefixGcd.sort((a, b) => a - b);

  let left = 0;
  let right = prefixGcd.length - 1;
  let sum = 0;

  while (left < right) {
    sum += gcd(prefixGcd[left], prefixGcd[right]);

    left++;
    right--;
  }

  return sum;
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

function buildPrefixGcd(nums: number[]): number[] {
  const prefixGcd: number[] = new Array(nums.length);

  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(currentMax, nums[i]);
    prefixGcd[i] = gcd(nums[i], currentMax);
  }

  return prefixGcd;
}
