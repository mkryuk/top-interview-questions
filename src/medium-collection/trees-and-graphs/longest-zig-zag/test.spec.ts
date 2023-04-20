import { arrayToTreeNode } from "../common";
import { longestZigZag } from "./solution";

describe("Longest ZigZag Path in a Binary Tree", () => {
  it("longestZigZag should return 3 for root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]", () => {
    // prettier-ignore
    const nodes = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(3);
  });

  it("longestZigZag should return 4 for root = [1,1,1,null,1,null,null,1,1,null,1]", () => {
    // prettier-ignore
    const nodes = [1,1,1,null,1,null,null,1,1,null,1];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(4);
  });

  it("longestZigZag should return 0 for root = [1]", () => {
    const nodes = [1];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(0);
  });

  it("longestZigZag should return 1 for root = [1,1]", () => {
    const nodes = [1, 1];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(1);
  });

  it("longestZigZag should return 1 for root = [1,null,1]", () => {
    const nodes = [1, null, 1];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(1);
  });

  it("longestZigZag should return 3 for root = [1,null,1,1,null,null,1]", () => {
    const nodes = [1, null, 1, 1, null, null, 1];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(3);
  });
});
