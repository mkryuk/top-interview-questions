export function minSumOfLengths(arr: number[], target: number): number {
  const n = arr.length;
  const best: number[] = new Array(n).fill(Infinity);

  let left = 0;
  let sum = 0;
  let minLength = Infinity;
  let result = Infinity;

  for (let right = 0; right < n; right++) {
    sum += arr[right];

    // shrink the window while the sum is too large
    while (sum > target && left <= right) {
      sum -= arr[left];
      left++;
    }

    if (sum === target) {
      const currentLength = right - left + 1;

      // combine with the best non-overlapping interval on the left
      if (left > 0 && best[left - 1] !== Infinity) {
        result = Math.min(result, currentLength + best[left - 1]);
      }

      minLength = Math.min(minLength, currentLength);
    }
    best[right] = minLength;
  }

  return result === Infinity ? -1 : result;
}
