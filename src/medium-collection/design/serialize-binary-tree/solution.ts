import { TreeNode } from "../../trees-and-graphs/common";

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  if (root === null) {
    return "";
  }
  let currentLayer: (TreeNode | null)[] = [root];
  let nextLayer: (TreeNode | null)[] = [];
  let result: (number | null)[] = [];
  while (currentLayer.length || nextLayer.length) {
    let layerResult: (number | null)[] = [];
    while (currentLayer.length) {
      let node = currentLayer.shift();
      layerResult.push(node?.val ?? null);
      if (currentLayer.length || node?.left || node?.right) {
        nextLayer.push(node?.left ?? null);
        nextLayer.push(node?.right ?? null);
      }
    }
    if (layerResult.some((n) => n !== null)) {
      result = result.concat(layerResult);
      currentLayer = nextLayer;
    }
    nextLayer = [];
    layerResult = [];
  }

  let resultStr = result.map((n) => n?.toString() ?? "null").join(",");
  return resultStr;
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  return null;
}
