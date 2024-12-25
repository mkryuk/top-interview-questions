import { arrayToTreeNode } from "../common";
import { largestValues } from "./solution";

describe("Find Largest Value in Each Tree Row", () => {
  it("largestValues should return [1,3,9] for root = [1,3,2,5,3,null,9]", () => {
    const nodes = [1, 3, 2, 5, 3, null, 9];
    const root = arrayToTreeNode(nodes);
    const result = largestValues(root);
    expect(result).toEqual([1, 3, 9]);
  });

  it("largestValues should return [1,3] for root = [1,2,3]", () => {
    const nodes = [1, 2, 3];
    const root = arrayToTreeNode(nodes);
    const result = largestValues(root);
    expect(result).toEqual([1, 3]);
  });
});
