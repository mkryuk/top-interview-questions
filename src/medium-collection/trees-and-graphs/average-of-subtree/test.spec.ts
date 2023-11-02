import { arrayToTreeNode } from "../common";
import { averageOfSubtree } from "./solution";

describe("Count Nodes Equal to Average of Subtree:", () => {
  it("averageOfSubtree should return 5 for root = [4,8,5,0,1,null,6]", () => {
    const nodes = [4, 8, 5, 0, 1, null, 6];
    const root = arrayToTreeNode(nodes);
    const result = averageOfSubtree(root);
    expect(result).toEqual(5);
  });

  it("averageOfSubtree should return 1 for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = averageOfSubtree(root);
    expect(result).toEqual(1);
  });

  it("averageOfSubtree should return 1 for root = [1,null,3,null,1,null,3]", () => {
    //prettier-ignore
    const nodes = [1, null, 3, null, null, null, 1, null, null, null , null, null, null, null, 3];
    const root = arrayToTreeNode(nodes);
    const result = averageOfSubtree(root);
    expect(result).toEqual(1);
  });
});
