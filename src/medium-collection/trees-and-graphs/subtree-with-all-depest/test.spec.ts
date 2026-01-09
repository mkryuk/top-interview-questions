import { arrayToTreeNode, treeNodeToArray } from "../common";
import { subtreeWithAllDeepest } from "./solution";

describe("865. Smallest Subtree with all the Deepest Nodes", () => {
  it("subtreeWithAllDeepest should return [2,7,4] for root = [3,5,1,6,2,0,8,null,null,7,4]", () => {
    const nodes = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
    const root = arrayToTreeNode(nodes);
    const result = subtreeWithAllDeepest(root);
    const resultNodes = treeNodeToArray(result);
    expect(resultNodes).toEqual([2, 7, 4]);
  });

  it("subtreeWithAllDeepest should return [1] for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = subtreeWithAllDeepest(root);
    const resultNodes = treeNodeToArray(result);
    expect(resultNodes).toEqual([1]);
  });

  it("subtreeWithAllDeepest should return [2] for root = [0,1,3,null,2]", () => {
    const nodes = [0, 1, 3, null, 2];
    const root = arrayToTreeNode(nodes);
    const result = subtreeWithAllDeepest(root);
    const resultNodes = treeNodeToArray(result);
    expect(resultNodes).toEqual([2]);
  });
});
