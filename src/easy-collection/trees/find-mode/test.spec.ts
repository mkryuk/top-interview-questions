import { arrayToTreeNode } from "../common";
import { findMode } from "./solution";

describe("Find Mode in Binary Search Tree: ", () => {
  it("findMode should return [2] for root = [1,null,2,2]", () => {
    const nodes = [1, null, 2, null, null, 2, null];
    const root = arrayToTreeNode(nodes);
    const result = findMode(root);
    expect(result).toEqual([2]);
  });

  it("findMode should return [0] for root = [0]", () => {
    const nodes = [0];
    const root = arrayToTreeNode(nodes);
    const result = findMode(root);
    expect(result).toEqual([0]);
  });

  it("findMode should return [1,2] for root = [1,null,2]", () => {
    const nodes = [1, null, 2];
    const root = arrayToTreeNode(nodes);
    const result = findMode(root);
    expect(result).toEqual([1, 2]);
  });
});
