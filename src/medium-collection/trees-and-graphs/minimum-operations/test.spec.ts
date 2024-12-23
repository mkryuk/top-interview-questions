import { arrayToTreeNode } from "../common";
import { minimumOperations } from "./solution";

describe("Minimum Number of Operations to Sort a Binary Tree by Level", () => {
  it("minimumOperations should return 3 for root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]", () => {
    const nodes = [1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10];
    const root = arrayToTreeNode(nodes);
    const result = minimumOperations(root);
    expect(result).toEqual(3);
  });

  it("minimumOperations should return 3 for root = [1,3,2,7,6,5,4]", () => {
    const nodes = [1, 3, 2, 7, 6, 5, 4];
    const root = arrayToTreeNode(nodes);
    const result = minimumOperations(root);
    expect(result).toEqual(3);
  });

  it("minimumOperations should return 0 for root = [1,2,3,4,5,6]", () => {
    const nodes = [1, 2, 3, 4, 5, 6];
    const root = arrayToTreeNode(nodes);
    const result = minimumOperations(root);
    expect(result).toEqual(0);
  });
});
