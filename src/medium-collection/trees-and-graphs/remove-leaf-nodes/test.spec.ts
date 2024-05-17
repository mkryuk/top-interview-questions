import { arrayToTreeNode, treeNodeToArray } from "../common";
import { removeLeafNodes } from "./solution";

describe("Delete Leaves With a Given Value", () => {
  it("removeLeafNodes should return [1,null,3,null,4] for root = [1,2,3,2,null,2,4], target = 2", () => {
    const nodes = [1, 2, 3, 2, null, 2, 4];
    const target = 2;
    const root = arrayToTreeNode(nodes);
    const result = removeLeafNodes(root, target);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([1, null, 3, null, 4]);
  });

  it("removeLeafNodes should return [1,3,null,null,2] for root = [1,3,3,3,2], target = 3", () => {
    const nodes = [1, 3, 3, 3, 2];
    const target = 3;
    const root = arrayToTreeNode(nodes);
    const result = removeLeafNodes(root, target);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([1, 3, null, null, 2]);
  });

  it("removeLeafNodes should return [1] for root = [1,2,null,2,null,2], target = 2", () => {
    const nodes = [1, 2, null, 2, null, 2];
    const target = 2;
    const root = arrayToTreeNode(nodes);
    const result = removeLeafNodes(root, target);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([1]);
  });
});
