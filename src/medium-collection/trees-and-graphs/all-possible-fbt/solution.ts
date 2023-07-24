import { TreeNode } from "../common";

export function allPossibleFBT(n: number): Array<TreeNode | null> {
  return dfs(n, new Map());
}

function dfs(
  n: number,
  memo: Map<number, (TreeNode | null)[]>,
): Array<TreeNode | null> {
  if (n % 2 === 0) {
    return [];
  }
  if (n === 1) {
    return [new TreeNode(0)];
  }
  if (memo.has(n)) {
    return memo.get(n)!;
  }
  let result: (TreeNode | null)[] = [];
  for (let i = 1; i < n; i += 2) {
    let left = dfs(i, memo);
    let right = dfs(n - i - 1, memo);
    left.forEach((l) => {
      right.forEach((r) => {
        let root = new TreeNode(0, l, r);
        result.push(root);
      });
    });
  }
  memo.set(n, result);
  return result;
}
