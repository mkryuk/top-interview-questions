import { arrayToTreeNode, hasPathSum } from "./solution";

describe("Path Sum:", () => {
  it("hasPathSum should return true for root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22", () => {
    const nodes = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
    const targetSum = 22;
    const root = arrayToTreeNode(nodes);
    const result = hasPathSum(root, targetSum);
    expect(result).toBeTrue();
  });

  it("hasPathSum should return false for root = [1,2,3], targetSum = 5", () => {
    const nodes = [1, 2, 3];
    const targetSum = 5;
    const root = arrayToTreeNode(nodes);
    const result = hasPathSum(root, targetSum);
    expect(result).toBeFalse();
  });

  it("hasPathSum should return false for root = [], targetSum = 0", () => {
    const nodes: number[] = [];
    const targetSum = 0;
    const root = arrayToTreeNode(nodes);
    const result = hasPathSum(root, targetSum);
    expect(result).toBeFalse();
  });

  it("hasPathSum should return false for root = [1,2], targetSum = 1", () => {
    const nodes = [1, 2];
    const targetSum = 1;
    const root = arrayToTreeNode(nodes);
    const result = hasPathSum(root, targetSum);
    expect(result).toBeFalse();
  });
});
