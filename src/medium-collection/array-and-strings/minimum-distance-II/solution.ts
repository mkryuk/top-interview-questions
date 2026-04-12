export function minimumDistance(nums: number[]): number {
  // value -> list of indices where it appears
  const positions: Map<number, number[]> = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    if (!positions.has(nums[i])) {
      positions.set(nums[i], []);
    }

    positions.get(nums[i])!.push(i);
  }

  let answer = Number.MAX_SAFE_INTEGER;

  for (const indices of positions.values()) {
    if (indices.length < 3) {
      continue;
    }

    // for sorted i < j < k:
    // |i-j| + |j-k| + |k-i| = (j-i) + (k-j) + (k-i) = 2 * (k - i)
    // so for each value, the best triple is any 3 consecutive occurrences
    // because that minimizes the span between first and third index
    for (let i = 0; i + 2 < indices.length; i++) {
      const left = indices[i];
      const right = indices[i + 2];
      const distance = 2 * (right - left);

      if (distance < answer) {
        answer = distance;
      }
    }
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
