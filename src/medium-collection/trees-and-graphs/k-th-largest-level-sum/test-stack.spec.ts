import { arrayToTreeNode } from "../common";
import { kthLargestLevelSum } from "./solution-stack";

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

  it("kthLargestLevelSum should retur 706311 for root = [897935,796748,528909,null,null,null,905326,706311,null,null,282251,null,139169], k = 4", () => {
    const nodes = [897935, 796748, 528909, null, null, null, 905326, 706311, null, null, 282251, null, 139169];
    const k = 4;
    const root = arrayToTreeNode(nodes);
    const result = kthLargestLevelSum(root, k);
    expect(result).toEqual(706311);
  });

  it("kthLargestLevelSum should retur -1 for root = [5,8,9,2,1,3,7], k = 4", () => {
    const nodes = [5, 8, 9, 2, 1, 3, 7];
    const k = 4;
    const root = arrayToTreeNode(nodes);
    const result = kthLargestLevelSum(root, k);
    expect(result).toEqual(-1);
  });
});
