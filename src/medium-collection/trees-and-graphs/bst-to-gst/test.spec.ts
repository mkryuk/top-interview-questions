import { arrayToTreeNode, treeNodeToArray } from "../common";
import { bstToGst } from "./solution";

describe("Binary Search Tree to Greater Sum Tree", () => {
  it("bstToGst should return [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8] for root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]", () => {
    // prettier-ignore
    const nodes = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8];
    const root = arrayToTreeNode(nodes);
    const result = bstToGst(root);
    const resultArray = treeNodeToArray(result);
    // prettier-ignore
    expect(resultArray).toEqual([30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]);
  });

  it("bstToGst should return [1,null,1] for root = [0,null,1]", () => {
    const nodes = [0, null, 1];
    const root = arrayToTreeNode(nodes);
    const result = bstToGst(root);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([1, null, 1]);
  });
});
