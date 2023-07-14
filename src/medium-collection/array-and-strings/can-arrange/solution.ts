export function canArrange(arr: number[], k: number): boolean {
  let freq = new Array(k).fill(0);
  for (let i = 0; i < arr.length; i++) {
    // Making sure that modulo is positive
    let mod = ((arr[i] % k) + k) % k;
    freq[mod]++;
  }
  // If k is even, check if frequency of k/2 is even
  if (k % 2 === 0 && freq[k / 2] % 2 !== 0) {
    return false;
  }
  // Check if frequency of 0 is even
  if (freq[0] % 2 !== 0) {
    return false;
  }
  // Checking if sums of pairs are divisible by k
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (freq[i] !== freq[k - i]) {
      return false;
    }
  }
  return true;
}
