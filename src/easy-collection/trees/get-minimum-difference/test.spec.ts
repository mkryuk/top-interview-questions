import { arrayToTreeNodeLevel } from "../common";
import { getMinimumDifference } from "./solution";

describe("Minimum Absolute Difference in BST:", () => {
  it("getMinimumDifference should return 1 for root = [4,2,6,1,3]", () => {
    const nodes = [4, 2, 6, 1, 3];
    const root = arrayToTreeNodeLevel(nodes);
    const result = getMinimumDifference(root);
    expect(result).toEqual(1);
  });

  it("getMinimumDifference should return 1 for root = [1,0,48,null,null,12,49]", () => {
    const nodes = [1, 0, 48, null, null, 12, 49];
    const root = arrayToTreeNodeLevel(nodes);
    const result = getMinimumDifference(root);
    expect(result).toEqual(1);
  });

  it("getMinimumDifference should return 1 for root = [11,9,47,null,null,12,49]", () => {
    const nodes = [11, 9, 47, null, null, 12, 49];
    const root = arrayToTreeNodeLevel(nodes);
    const result = getMinimumDifference(root);
    expect(result).toEqual(1);
  });
});
