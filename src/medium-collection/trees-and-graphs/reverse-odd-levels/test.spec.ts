import { arrayToTreeNode, treeNodeToArray } from "../common";
import { reverseOddLevels } from "./solution";

describe("Reverse Odd Levels of Binary Tree", () => {
  it("reverseOddLevels should return [2,5,3,8,13,21,34] for root = [2,3,5,8,13,21,34]", () => {
    const nodes = [2, 3, 5, 8, 13, 21, 34];
    const root = arrayToTreeNode(nodes);
    const result = reverseOddLevels(root);
    expect(treeNodeToArray(result)).toEqual([2, 5, 3, 8, 13, 21, 34]);
  });

  it("reverseOddLevels should return [7,11,13] for root = [7,13,11]", () => {
    const nodes = [7, 13, 11];
    const root = arrayToTreeNode(nodes);
    const result = reverseOddLevels(root);
    expect(treeNodeToArray(result)).toEqual([7, 11, 13]);
  });

  it("reverseOddLevels should return [0,2,1,0,0,0,0,2,2,2,2,1,1,1,1] for root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]", () => {
    const nodes = [0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
    const root = arrayToTreeNode(nodes);
    const result = reverseOddLevels(root);
    expect(treeNodeToArray(result)).toEqual([0, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1]);
  });
});
