import { TreeNode } from "../../trees-and-graphs/common";

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  let result = rSerialize(root, "");
  return result;
}

function rSerialize(root: TreeNode | null, result: string): string {
  if (!root) {
    result += "null,";
    return result;
  }
  result += `${root?.val},`;
  result += rSerialize(root?.left ?? null, "");
  result += rSerialize(root?.right ?? null, "");
  return result;
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  let dataArray = data
    .split(",")
    .map((n) => (n === "null" ? null : parseInt(n, 10)));
  let root: TreeNode | null = new TreeNode();
  root = rDeserialize(dataArray);
  return root;
}

function rDeserialize(dataArray: (number | null)[]): TreeNode | null {
  let val = dataArray.shift();
  if (val === null || val === undefined) {
    return null;
  }
  let root = new TreeNode(val);
  root.left = rDeserialize(dataArray);
  root.right = rDeserialize(dataArray);
  return root;
}
