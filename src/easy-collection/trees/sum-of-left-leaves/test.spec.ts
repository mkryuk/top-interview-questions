import { arrayToTreeNode } from "../common";
import { sumOfLeftLeaves } from "./solution";

describe("Sum of Left Leaves", () => {
  it("sumOfLeftLeaves should return 24 for root = [3,9,20,null,null,15,7]", () => {
    const nodes = [3, 9, 20, null, null, 15, 7];
    const root = arrayToTreeNode(nodes);
    const result = sumOfLeftLeaves(root);
    expect(result).toEqual(24);
  });

  it("sumOfLeftLeaves should return 0 for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = sumOfLeftLeaves(root);
    expect(result).toEqual(0);
  });
});
