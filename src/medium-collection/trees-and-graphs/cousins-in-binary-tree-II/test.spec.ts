import { arrayToTreeNode, treeNodeToArray } from "../common";
import { replaceValueInTree } from "./solution";

describe("Cousins in Binary Tree II", () => {
  it("replaceValueInTree should return [0,0,0,7,7,null,11] for root = [5,4,9,1,10,null,7]", () => {
    const nodes = [5, 4, 9, 1, 10, null, 7];
    const root = arrayToTreeNode(nodes);
    const result = replaceValueInTree(root);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([0, 0, 0, 7, 7, null, 11]);
  });

  it("replaceValueInTree should return [0,0,0] for root = [3,1,2]", () => {
    const nodes = [3, 1, 2];
    const root = arrayToTreeNode(nodes);
    const result = replaceValueInTree(root);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([0, 0, 0]);
  });
});
