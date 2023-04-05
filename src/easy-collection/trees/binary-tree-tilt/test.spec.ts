import { arrayToTreeNode } from "../common";
import { findTilt } from "./solution";

describe("", () => {
  it("findTilt should return 1 for root = [1,2,3]", () => {
    const nodes = [1, 2, 3];
    const root = arrayToTreeNode(nodes);
    const result = findTilt(root);
    expect(result).toEqual(1);
  });

  it("findTilt should return 15 for root = [4,2,9,3,5,null,7]", () => {
    const nodes = [4, 2, 9, 3, 5, null, 7];
    const root = arrayToTreeNode(nodes);
    const result = findTilt(root);
    expect(result).toEqual(15);
  });
  
  it("findTilt should return 9 for root = [21,7,14,1,1,2,2,3,3]", () => {
    const nodes = [21, 7, 14, 1, 1, 2, 2, 3, 3]n;
    const root = arrayToTreeNode(nodes);
    const result = findTilt(root);
    expect(result).toEqual(9);
  });
});
