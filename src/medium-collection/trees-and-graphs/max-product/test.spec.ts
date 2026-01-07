import { arrayToTreeNode } from "../common";
import { maxProduct } from "./solution";

describe("1339. Maximum Product of Splitted Binary Tree", () => {
  it("maxProduct should return 110 for root = [1,2,3,4,5,6]", () => {
    const nodes = [1, 2, 3, 4, 5, 6];
    const root = arrayToTreeNode(nodes);
    const result = maxProduct(root);
    expect(result).toEqual(110);
  });

  it("maxProduct should return 90 for root = [1,null,2,3,4,null,null,5,6]", () => {
    const nodes = [1, null, 2, 3, 4, null, null, 5, 6];
    const root = arrayToTreeNode(nodes);
    const result = maxProduct(root);
    expect(result).toEqual(90);
  });
});
