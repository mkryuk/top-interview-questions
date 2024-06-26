import { arrayToTreeNode, treeNodeToArray } from "../common";
import { balanceBST } from "./solution";

describe("Balance a Binary Search Tree", () => {
  it("balanceBST should return [2,1,3,null,null,null,4] for root = [1,null,2,null,3,null,4,null,null]", () => {
    const nodes = [1, null, 2, null, 3, null, 4, null, null];
    const root = arrayToTreeNode(nodes);
    const result = balanceBST(root);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([2, 1, 3, null, null, null, 4]);
  });

  it("balanceBST should return [2,1,3] for root = [2,1,3]", () => {
    const nodes = [2, 1, 3];
    const root = arrayToTreeNode(nodes);
    const result = balanceBST(root);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([2, 1, 3]);
  });
});
