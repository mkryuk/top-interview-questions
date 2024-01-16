import { Node } from "./node";

export function postorder(root: Node | null): number[] {
  if (root === null) {
    return [];
  }
  let result: number[] = [];
  for (const node of root.children) {
    result = result.concat(postorder(node));
  }
  result.push(root.val);
  return result;
}
