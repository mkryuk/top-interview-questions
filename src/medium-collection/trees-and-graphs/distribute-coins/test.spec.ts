import { arrayToTreeNode } from "../common";
import { distributeCoins } from "./solution";

describe("Distribute Coins in Binary Tree", () => {
  it("distributeCoins should return 2 for root = [3,0,0]", () => {
    const nodes = [3, 0, 0];
    const root = arrayToTreeNode(nodes);
    const result = distributeCoins(root);
    expect(result).toEqual(2);
  });

  it("distributeCoins should return 3 for root = [0,3,0]", () => {
    const nodes = [0, 3, 0];
    const root = arrayToTreeNode(nodes);
    const result = distributeCoins(root);
    expect(result).toEqual(3);
  });
});
