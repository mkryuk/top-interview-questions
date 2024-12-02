import { arrayToTreeNode } from "../common";
import { preorderTraversal } from "./solution";

describe("Binary Tree Preorder Traversal", () => {
  it("preorderTraversal should return [1,2,3] for root = [1,null,2,3]", () => {
    const nodes = [1, null, 2, 3];
    const root = arrayToTreeNode(nodes);
    const result = preorderTraversal(root);
    expect(result).toEqual([1, 2, 3]);
  });

  it("preorderTraversal should return [1,2,4,5,6,7,3,8,9] for root = [1,2,3,4,5,null,8,null,null,6,7,9]", () => {
    const nodes = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
    const root = arrayToTreeNode(nodes);
    const result = preorderTraversal(root);
    expect(result).toEqual([1, 2, 4, 5, 6, 7, 3, 8, 9]);
  });

  it("preorderTraversal should return [] for root = []", () => {
    const nodes: number[] = [];
    const root = arrayToTreeNode(nodes);
    const result = preorderTraversal(root);
    expect(result).toEqual([]);
  });

  it("preorderTraversal should return [1] for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = preorderTraversal(root);
    expect(result).toEqual([1]);
  });
});
