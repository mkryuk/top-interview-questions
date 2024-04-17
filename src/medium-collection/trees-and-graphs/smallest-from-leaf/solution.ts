import { TreeNode } from "../common";

export function smallestFromLeaf(root: TreeNode | null): string {
  if (root === null) return "";

  let queue: [TreeNode, string[]][] = [
    [root, [String.fromCharCode("a".charCodeAt(0) + root.val)]],
  ];
  // Using "{" to ensure it is lexicographically higher than any valid character.
  let result = "{";

  while (queue.length > 0) {
    const [node, path] = queue.shift()!;

    if (node.left === null && node.right === null) {
      const currentString = path.reverse().join("");
      if (currentString < result) {
        result = currentString;
      }
    }

    if (node.left !== null) {
      const char = String.fromCharCode("a".charCodeAt(0) + node.left.val);
      queue.push([node.left, [...path, char]]);
    }

    if (node.right !== null) {
      const char = String.fromCharCode("a".charCodeAt(0) + node.right.val);
      queue.push([node.right, [...path, char]]);
    }
  }

  return result;
}
