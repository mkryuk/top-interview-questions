import { arrayToTreeNode } from "../common";
import { longestZigZag } from "./solution";

describe("Longest ZigZag Path in a Binary Tree", () => {
  it("longestZigZag should return 3 for root = [1,null,2,3,4,null,null,5,6,null,7,null,null,null,8,null,9]", () => {
    // prettier-ignore
    const nodes = [1,null,2,3,4,null,null,5,6,null,7,null,null,null,8,null,9];
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

  it("longestZigZag should return 3 for root = [1,2,1,1,1,2,2,1,1,2,1,2,2,2,3]", () => {
    // prettier-ignore
    const nodes = [1,2,1,1,1,2,2,1,1,2,1,2,2,2,3];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(3);
  });

  it("longestZigZag should return 8 for test 39", () => {
    // prettier-ignore
    const nodes = [2,8,6,1,1,7,9,8,9,3,1,4,8,null,
      5,3,4,10,10,2,null,5,null,3,7,null,3,null,4,
      6,2,8,4,5,null,null,9,null,6,null,6,null,null,
      2,2,null,3,2,null,null,8,1,9,8,8,5,10,null,9,
      null,8,null,null,null,null,5,7,2,10,null,null,
      null,null,null,null,3,null,2,null,null,null,8,7,
      null,null,3,1,null,3,null,null,null,7,1,null,3,null,
      null,null,null,2,null,2,null,4,7,4,null,null,null,
      9,null,null,null,null,8,8,null,null,null,null,7,2,
      1,4,null,4,7,null,5,9,null,7,9,7,null,10,9,6,null,
      null,7,2,3,null,2,null,9,5,9,null,null,5,null,5,9,
      null,null,null,null,9,null,null,null,null,null,7,
      null,null,null,null,null,null,null,9,null,4,1,null,
      null,null,null,4,4,null,null,4,null,null,null,4];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(8);
  });

  it("longestZigZag should return 1 for test 44", () => {
    const nodes = [1, 2, 3, 4, null, null, 5];
    const root = arrayToTreeNode(nodes);
    const result = longestZigZag(root);
    expect(result).toEqual(1);
  });
});
