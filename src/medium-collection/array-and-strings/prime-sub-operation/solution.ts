export function primeSubOperation(nums: number[]): boolean {
  const n = nums.length;
  const maxNum = Math.max(...nums) + 1;
  const isPrime = Array(maxNum).fill(true);
  isPrime[0] = isPrime[1] = false;

  // generate all primes up to maxNum
  for (let i = 2; i * i < maxNum; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < maxNum; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // generate list of primes less than maxNum
  const primes: number[] = [];
  for (let i = 2; i < maxNum; i++) {
    if (isPrime[i]) primes.push(i);
  }

  let prev = 0;

  for (let i = 0; i < n; i++) {
    // generate possible nums[i] values
    const possibleNums = new Set<number>();
    possibleNums.add(nums[i]); // include original number

    for (let p of primes) {
      if (p >= nums[i]) {
        break;
      }
      possibleNums.add(nums[i] - p);
    }

    // filter nums[i] > prev and nums[i] >= 1
    const validNums = Array.from(possibleNums)
      .filter((val) => val > prev && val >= 1)
      .sort((a, b) => a - b);

    if (validNums.length === 0) {
      return false;
    } else {
      nums[i] = validNums[0];
      prev = nums[i];
    }
  }

  return true;
}
