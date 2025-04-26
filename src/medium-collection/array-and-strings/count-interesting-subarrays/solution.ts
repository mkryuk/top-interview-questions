export function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
  let prefixSum = 0;
  let result = 0;
  const freqMap = new Map<number, number>();
  freqMap.set(0, 1);
  for (const num of nums) {
    if (num % modulo === k) {
      prefixSum++;
    }
    const current = prefixSum % modulo;
    const need = (current - k + modulo) % modulo;
    result += freqMap.get(need) ?? 0;
    freqMap.set(current, (freqMap.get(current) ?? 0) + 1);
  }
  return result;
}
