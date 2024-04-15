import { arrayToTreeNode } from "../common";
import { sumNumbers } from "./solution";

describe("Sum Root to Leaf Numbers", () => {
  it("sumNumbers should return 25 for root = [1,2,3]", () => {
    const nodes = [1, 2, 3];
    const root = arrayToTreeNode(nodes);
    const result = sumNumbers(root);
    expect(result).toEqual(25);
  });

  it("sumNumbers should return 1026 for root = [4,9,0,5,1]", () => {
    const nodes = [4, 9, 0, 5, 1];
    const root = arrayToTreeNode(nodes);
    const result = sumNumbers(root);
    expect(result).toEqual(1026);
  });
});
