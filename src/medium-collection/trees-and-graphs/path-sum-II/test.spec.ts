import { arrayToTreeNode } from "../common";
import { pathSum } from "./solution";

describe("", () => {
  it("pathSum should return [[5,4,11,2],[5,8,4,5]] for root = [5,4,8,11,null,13,4,7,2,null,null,null,null,5,1], targetSum = 22", () => {
    // prettier-ignore
    const nodes = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1];
    const root = arrayToTreeNode(nodes);
    const targetSum = 22;
    const result = pathSum(root, targetSum);
    expect(result).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });

  it("pathSum should return [] for root = [1,2,3], targetSum = 5", () => {
    const nodes = [1, 2, 3];
    const targetSum = 5;
    const root = arrayToTreeNode(nodes);
    const result = pathSum(root, targetSum);
    expect(result).toEqual([]);
  });

  it("pathSum should return [] for root = [1,2], targetSum = 0", () => {
    const nodes = [1, 2];
    const targetSum = 0;
    const root = arrayToTreeNode(nodes);
    const result = pathSum(root, targetSum);
    expect(result).toEqual([]);
  });
});
