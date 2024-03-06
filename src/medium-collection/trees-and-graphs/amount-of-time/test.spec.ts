import { arrayToTreeNode } from "../common";
import { amountOfTime } from "./solution";

describe("Amount of Time for Binary Tree to Be Infected:", () => {
  it("amountOfTime should return 4 for root = [1,5,3,null,4,10,6,9,2], start = 3", () => {
    const nodes = [1, 5, 3, null, 4, 10, 6, 9, 2];
    const start = 3;
    const root = arrayToTreeNode(nodes);
    const result = amountOfTime(root, start);
    expect(result).toEqual(4);
  });

  it("amountOfTime should return 0 for root = [1], start = 1", () => {
    const nodes = [1];
    const start = 1;
    const root = arrayToTreeNode(nodes);
    const result = amountOfTime(root, start);
    expect(result).toEqual(0);
  });
});
