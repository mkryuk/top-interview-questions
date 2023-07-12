import { TreeNode, arrayToTreeNode } from "../common";
import { distanceK } from "./solution";

describe("All Nodes Distance K in Binary Tree:", () => {
  it("distanceK should return [7,4,1] for root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2", () => {
    const nodes = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const target = 5;
    const k = 2;
    const root = arrayToTreeNode(nodes);
    const targetNode = new TreeNode(target);
    const result = distanceK(root, targetNode, k);
    expect(arrayEquals([7, 4, 1], result)).toBeTrue();
  });
  it("distanceK should return [] for root = [1], target = 1, k = 3", () => {
    const nodes = [1];
    const target = 1;
    const k = 3;
    const root = arrayToTreeNode(nodes);
    const targetNode = new TreeNode(target);
    const result = distanceK(root, targetNode, k);
    expect(arrayEquals([], result)).toBeTrue();
  });
});

export function arrayEquals(a: number[], b: number[]): boolean {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
