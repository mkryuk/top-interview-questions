export function maxSum(nums: number[], k: number): number {
  const MOD = BigInt(1e9 + 7);
  const MAX_BITS = 31;
  const bitCount: number[] = new Array(MAX_BITS).fill(0);

  // count how many times each bit appears
  for (const num of nums) {
    for (let bit = 0; bit < MAX_BITS; bit++) {
      if ((num & (1 << bit)) !== 0) {
        bitCount[bit]++;
      }
    }
  }

  let result = 0n;

  // greedily concentrate available bits into k numbers
  for (let i = 0; i < k; i++) {
    let value = 0;
    for (let bit = 0; bit < MAX_BITS; bit++) {
      if (bitCount[bit] > 0) {
        value += 2 ** bit;

        bitCount[bit]--;
      }
    }

    const x = BigInt(value);
    result = (result + x * x) % MOD;
  }

  return Number(result);
}
