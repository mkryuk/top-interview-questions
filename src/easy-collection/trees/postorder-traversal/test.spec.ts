import { arrayToTreeNode, treeNodeToArray } from "../common";
import { postorderTraversal } from "./solution";

describe("Binary Tree Postorder Traversal", () => {
  it("postorderTraversal should return [3,2,1] for root = [1,null,2,3]", () => {
    const nodes = [1, null, 2, 3];
    const root = arrayToTreeNode(nodes);
    const result = postorderTraversal(root);
    expect(result).toEqual([3, 2, 1]);
  });

  it("postorderTraversal should return [] for root = []", () => {
    const nodes: number[] = [];
    const root = arrayToTreeNode(nodes);
    const result = postorderTraversal(root);
    expect(result).toEqual([]);
  });

  it("postorderTraversal should return [1] for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = postorderTraversal(root);
    expect(result).toEqual([1]);
  });
});
