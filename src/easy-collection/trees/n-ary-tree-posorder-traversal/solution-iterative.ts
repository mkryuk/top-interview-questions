import { Node } from "./node";

export function postorder(root: Node | null): number[] {
  if (root === null) {
    return [];
  }
  let stack: Node[] = [root];
  let result: number[] = [];
  while (stack.length > 0) {
    let node = stack.pop();
    result.unshift(node!.val);
    for (const child of node!.children) {
      stack.push(child);
    }
  }
  return result;
}
