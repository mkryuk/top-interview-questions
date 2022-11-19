import { arrayToTreeNode } from "../common";
import { countNodes } from "./solution-optimized";

it("countNodes should return 6 for nodes = [1,2,3,4,5,6]", () => {
  const nodes = [1, 2, 3, 4, 5, 6];
  const root = arrayToTreeNode(nodes);
  const result = countNodes(root);
  expect(result).toEqual(6);
});

it("countNodes should return 0 for nodes = []", () => {
  const nodes: number[] = [];
  const root = arrayToTreeNode(nodes);
  const result = countNodes(root);
  expect(result).toEqual(0);
});

it("countNodes should return 1 for nodes = [1]", () => {
  const nodes = [1];
  const root = arrayToTreeNode(nodes);
  const result = countNodes(root);
  expect(result).toEqual(1);
});

it("countNodes should return 11 for nodes = [1,2,3,4,5,6,7,8,9,10]", () => {
  const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const root = arrayToTreeNode(nodes);
  const result = countNodes(root);
  expect(result).toEqual(10);
});

it("countNodes should return 11 for nodes = [1,2,3,4,5,6,7,8,9,10,11]", () => {
  const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const root = arrayToTreeNode(nodes);
  const result = countNodes(root);
  expect(result).toEqual(11);
});

it("countNodes should return 11 for nodes = [1,2,3,4,5,6,7,8,9,10,12]", () => {
  const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const root = arrayToTreeNode(nodes);
  const result = countNodes(root);
  expect(result).toEqual(12);
});
