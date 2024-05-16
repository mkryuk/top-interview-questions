import { arrayToTreeNode } from "../common";
import { evaluateTree } from "./solution";

describe("Evaluate Boolean Binary Tree", () => {
  it("evaluateTree should return true for root = [2,1,3,null,null,0,1]", () => {
    const nodes = [2, 1, 3, null, null, 0, 1];
    const root = arrayToTreeNode(nodes);
    const result = evaluateTree(root);
    expect(result).toBeTrue();
  });

  it("evaluateTree should return false for root = [0]", () => {
    const nodes = [0];
    const root = arrayToTreeNode(nodes);
    const result = evaluateTree(root);
    expect(result).toBeFalse();
  });
});
