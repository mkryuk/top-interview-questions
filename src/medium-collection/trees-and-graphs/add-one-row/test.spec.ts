import { arrayToTreeNode, treeNodeToArray } from "../common";
import { addOneRow } from "./solution";

describe("Add One Row to Tree", () => {
  it("addOneRow should return [4,1,1,2,null,null,6,3,1,5] for root = [4,2,6,3,1,5], val = 1, depth = 2", () => {
    const nodes = [4, 2, 6, 3, 1, 5];
    const val = 1;
    const depth = 2;
    const root = arrayToTreeNode(nodes);
    const result = addOneRow(root, val, depth);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([4, 1, 1, 2, null, null, 6, 3, 1, 5]);
  });

  it("addOneRow should return [4,2,null,1,1,3,null,null,1] for root = [4,2,null,3,1], val = 1, depth = 3", () => {
    const nodes = [4, 2, null, 3, 1];
    const val = 1;
    const depth = 3;
    const root = arrayToTreeNode(nodes);
    const result = addOneRow(root, val, depth);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([4, 2, null, 1, 1, 3, null, null, 1]);
  });

  it("addOneRow should return [4,2,6,1,1,1,1,3,null,null,1,5] for root = [4,2,6,3,1,5], val = 1, depth = 3", () => {
    const nodes = [4, 2, 6, 3, 1, 5];
    const val = 1;
    const depth = 3;
    const root = arrayToTreeNode(nodes);
    const result = addOneRow(root, val, depth);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([4, 2, 6, 1, 1, 1, 1, 3, null, null, 1, 5]);
  });
});
