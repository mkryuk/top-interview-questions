export function judgePoint24(cards: number[]): boolean {
  return dfs(cards);
}

// depth-first search over all ways to combine numbers pairwise
function dfs(nums: number[]): boolean {
  // small epsilon to account for floating point error
  const EPS: number = 1e-6;
  if (nums.length === 1) {
    if (Math.abs(nums[0] - 24) < EPS) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const a: number = nums[i];
      const b: number = nums[j];

      const rest: number[] = [];
      for (let k = 0; k < nums.length; k++) {
        if (k !== i && k !== j) {
          rest.push(nums[k]);
        }
      }

      const candidates: number[] = [];
      candidates.push(a + b);
      candidates.push(a - b);
      candidates.push(b - a);
      candidates.push(a * b);
      if (Math.abs(b) > EPS) {
        candidates.push(a / b);
      }
      if (Math.abs(a) > EPS) {
        candidates.push(b / a);
      }

      for (let idx = 0; idx < candidates.length; idx++) {
        rest.push(candidates[idx]);
        if (dfs(rest)) {
          return true;
        } else {
          rest.pop();
        }
      }
    }
  }

  return false;
}
