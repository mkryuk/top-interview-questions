import { arrayToTreeNode, isEvenOddTree } from "./solution";

describe("Even Odd Tree:", () => {
  it("isEvenOddTree should return true for root = [1,10,4,3,null,7,9,12,8,6,null,null,2]", () => {
    const nodes = [1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2];
    const root = arrayToTreeNode(nodes);
    const result = isEvenOddTree(root);
    expect(result).toBeTrue();
  });

  it("isEvenOddTree should return false for root = [5,4,2,3,3,7]", () => {
    const nodes = [5, 4, 2, 3, 3, 7];
    const root = arrayToTreeNode(nodes);
    const result = isEvenOddTree(root);
    expect(result).toBeFalse();
  });

  it("isEvenOddTree should return false for root = [5,9,1,3,5,7]", () => {
    const nodes = [5, 9, 1, 3, 5, 7];
    const root = arrayToTreeNode(nodes);
    const result = isEvenOddTree(root);
    expect(result).toBeFalse();
  });
});
