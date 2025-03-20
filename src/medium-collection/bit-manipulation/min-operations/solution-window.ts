export function minOperations(nums: number[]): number {
  const n = nums.length;
  const k = 3;
  // flip[i] indicates whether a flip operation started at index i.
  const flip: number[] = new Array(n).fill(0);
  let res = 0;
  let curFlip = 0; // counts the number of active flips affecting the current index

  for (let i = 0; i < n; i++) {
    // when we move past a flip's range, subtract its effect.
    if (i >= k) {
      curFlip -= flip[i - k];
    }

    // after applying the flips, if the current bit is 0, then we need to flip.
    // (nums[i] + curFlip) % 2 === 0 means the current bit is 0.
    if ((nums[i] + curFlip) % 2 === 0) {
      // if there are fewer than k elements remaining, it's impossible.
      if (i + k > n) {
        return -1;
      }
      // mark that we perform a flip at index i.
      flip[i] = 1;
      curFlip++;
      res++;
    }
  }
  return res;
}
