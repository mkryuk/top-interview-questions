import { arrayToTreeNodeLevel } from "../common";
import { sumRootToLeaf } from "./solution";

describe("1022. Sum of Root To Leaf Binary Numbers", () => {
  it("sumRootToLeaf should return 22 for root = [1,0,1,0,1,0,1]", function () {
    const nodes = [1, 0, 1, 0, 1, 0, 1];
    const root = arrayToTreeNodeLevel(nodes);
    const result = sumRootToLeaf(root);
    expect(result).toBe(22);
  });

  it("sumRootToLeaf should return 0 for root = [0]", function () {
    const nodes = [0];
    const root = arrayToTreeNodeLevel(nodes);
    const result = sumRootToLeaf(root);
    expect(result).toBe(0);
  });
});
