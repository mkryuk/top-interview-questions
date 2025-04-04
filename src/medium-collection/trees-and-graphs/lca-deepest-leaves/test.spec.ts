import { arrayToTreeNode, treeNodeToArray } from "../common";
import { lcaDeepestLeaves } from "./solution";

describe("Lowest Common Ancestor of Deepest Leaves", () => {
  it("lowestCommonAncestor should return [2,7,4] for root = [3,5,1,6,2,0,8,null,null,7,4]", function () {
    const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const rootNode = arrayToTreeNode(root);
    const result = lcaDeepestLeaves(rootNode);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([2, 7, 4]);
  });

  it("lowestCommonAncestor should return [1] for root = [1]", function () {
    const root = [1];
    const rootNode = arrayToTreeNode(root);
    const result = lcaDeepestLeaves(rootNode);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([1]);
  });

  it("lowestCommonAncestor should return [2] for root = [0,1,3,null,2]", function () {
    const root = [0, 1, 3, null, 2];
    const rootNode = arrayToTreeNode(root);
    const result = lcaDeepestLeaves(rootNode);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([2]);
  });
});
