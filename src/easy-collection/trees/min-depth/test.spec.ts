import { arrayToTreeNode } from "../common";
import { minDepth } from "./solution";

describe("Minimum Depth of Binary Tree:", () => {
  it("minDepth should return 2 for root = [3,9,20,null,null,15,7]", () => {
    const nodes = [3, 9, 20, null, null, 15, 7];
    const root = arrayToTreeNode(nodes);
    const result = minDepth(root);
    expect(result).toEqual(2);
  });

  it("minDepth should return 4 for root = [1,null,2,null,null,null,3,null,null,null,null,null,null,4]", () => {
    //prettier-ignore
    const nodes = [1, null, 2, null, null, null, 3, null, null, null, null, null, null, 4];
    const root = arrayToTreeNode(nodes);
    const result = minDepth(root);
    expect(result).toEqual(4);
  });
});
