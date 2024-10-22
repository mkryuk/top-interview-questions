import { arrayToTreeNode } from "../common";
import { kthLargestLevelSum } from "./solution";

describe("Kth Largest Sum in a Binary Tree", () => {
  it("kthLargestLevelSum should retur 13 for root = [5,8,9,2,1,3,7,4,6], k = 2", () => {
    const nodes = [5, 8, 9, 2, 1, 3, 7, 4, 6];
    const k = 2;
    const root = arrayToTreeNode(nodes);
    const result = kthLargestLevelSum(root, k);
    expect(result).toEqual(13);
  });

  it("kthLargestLevelSum should retur 3 for root = [1,2,null,3], k = 1", () => {
    const nodes = [1, 2, null, 3];
    const k = 1;
    const root = arrayToTreeNode(nodes);
    const result = kthLargestLevelSum(root, k);
    expect(result).toEqual(3);
  });
});
