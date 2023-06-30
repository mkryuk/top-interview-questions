import { TreeNode } from "../common";

export function pseudoPalindromicPaths(root: TreeNode | null): number {
  let count: number = 0;
  let path: number = 0;

  const stack: Array<[TreeNode, number]> = [];
  stack.push([root!, 0]);

  while (stack.length > 0) {
    const [node, currPath] = stack.pop()!;
    path = currPath;

    if (node !== null) {
      // Compute occurrences of each digit in the corresponding register
      path = path ^ (1 << node.val);

      if (node.left === null && node.right === null) {
        // Check if at most one digit has an odd frequency
        // The expression `(path & (path - 1)) === 0` checks if there is at most one bit set to 1 in the binary representation of `path`
        // If there is at most one bit set to 1, it means that at most one digit has an odd frequency in the path's digit occurrences
        // Example: If `path` is 0100 (indicating the digits 2 occurred once), then `path - 1` is 0011
        // Performing a bitwise AND operation between `path` and `path - 1` should result in 0, indicating that at most one digit has an odd frequency
        // If the condition is true, increment the count since the path is pseudo-palindromic
        if ((path & (path - 1)) === 0) {
          count++;
        }
      } else {
        stack.push([node.right!, path]);
        stack.push([node.left!, path]);
      }
    }
  }

  return count;
}
