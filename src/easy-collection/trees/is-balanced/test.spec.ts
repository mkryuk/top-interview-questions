import { arrayToTreeNode } from "../common";
import { isBalanced } from "./solution";

describe("110. Balanced Binary Tree", () => {
  it("isBalanced should return true for root = [3,9,20,null,null,15,7]", () => {
    const nodes = [3, 9, 20, null, null, 15, 7];
    const root = arrayToTreeNode(nodes);
    const result = isBalanced(root);
    expect(result).toBeTrue();
  });

  it("isBalanced should return false for root = [1,2,2,3,3,null,null,4,4]", () => {
    const nodes = [1, 2, 2, 3, 3, null, null, 4, 4];
    const root = arrayToTreeNode(nodes);
    const result = isBalanced(root);
    expect(result).toBeFalse();
  });

  it("isBalanced should return true for root = []", () => {
    const nodes: number[] = [];
    const root = arrayToTreeNode(nodes);
    const result = isBalanced(root);
    expect(result).toBeTrue();
  });
});
