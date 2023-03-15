import { arrayToTreeNode, nodeToArray, treeNodeToArray } from "../common";
import { isCompleteTree } from "./solution";

describe("Check Completeness of a Binary Tree", () => {
  it("isCompleteTree should return true for root = [1,2,3,4,5,6]", () => {
    const root = [1, 2, 3, 4, 5, 6];
    const node = arrayToTreeNode(root);
    const result = isCompleteTree(node);
    expect(result).toBeTrue();
  });

  it("isCompleteTree should return false for root = [1,2,3,4,5,null,7]", () => {
    const root = [1, 2, 3, 4, 5, null, 7];
    const node = arrayToTreeNode(root);
    const result = isCompleteTree(node);
    expect(result).toBeFalse();
  });
});
