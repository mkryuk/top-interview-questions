import { arrayToTreeNode, treeNodeToArray } from "../common";
import { maxLevelSum } from "./solution";

describe("Maximum Level Sum of a Binary Tree:", () => {
  it("maxLevelSum should return 2 for root = [1,7,0,7,-8,null,null]", () => {
    const nodes = [1, 7, 0, 7, -8, null, null];
    const root = arrayToTreeNode(nodes);
    const result = maxLevelSum(root);
    expect(result).toEqual(2);
  });

  it("maxLevelSum should return 2 for root = [989,null,10250,98693,-89388,null,null,null,-32127]", () => {
    const nodes = [989, null, 10250, 98693, -89388, null, null, null, -32127];
    const root = arrayToTreeNode(nodes);
    const result = maxLevelSum(root);
    expect(result).toEqual(2);
  });

  it("maxLevelSum should return 3 for root = [-100,-200,-300,-20,-5,-10,null]", () => {
    const nodes = [-100, -200, -300, -20, -5, -10, null];
    const root = arrayToTreeNode(nodes);
    const result = maxLevelSum(root);
    expect(result).toEqual(3);
  });

  it("maxLevelSum should return 1 for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = maxLevelSum(root);
    expect(result).toEqual(1);
  });
});
