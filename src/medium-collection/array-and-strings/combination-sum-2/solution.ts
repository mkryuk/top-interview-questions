export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  backtrack(candidates, 0, target, [], result);
  return result;
}

function backtrack(candidates: number[], start: number, target: number, combination: number[], result: number[][]) {
  if (target === 0) {
    result.push([...combination]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    if (candidates[i] > target) {
      break;
    }
    combination.push(candidates[i]);
    backtrack(candidates, i + 1, target - candidates[i], combination, result);
    combination.pop();
  }
}
