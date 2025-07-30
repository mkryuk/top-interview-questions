export function smallestSubarrays(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array<number>(n);
  // lastPos[b] = latest index ≥ i where bit b appears
  const lastPos = new Array<number>(32).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    for (let b = 0; b < 32; b++) {
      if (((nums[i] >>> b) & 1) === 1) {
        lastPos[b] = i;
      }
    }
    let farthest = i;
    for (let b = 0; b < 32; b++) {
      if (lastPos[b] > farthest) {
        farthest = lastPos[b];
      }
    }
    answer[i] = farthest - i + 1;
  }

  return answer;
}
