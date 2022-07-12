import { arrayToTreeNode } from "../common";
import { maxPathSum } from "./solution";

it("maxPathSum should return 6 for root = [1,2,3]", () => {
  const arr = [1, 2, 3];
  const root = arrayToTreeNode(arr);
  const result = maxPathSum(root);
  expect(result).toBe(6);
});

it("maxPathSum should return 42 for root = [-10,9,20,null,null,15,7]", () => {
  const arr = [-10, 9, 20, null, null, 15, 7];
  const root = arrayToTreeNode(arr);
  const result = maxPathSum(root);
  expect(result).toBe(42);
});

it("maxPathSum should return 40 for root = [5,3,4,7,8,6,9,2,1,10,11]", () => {
  const arr = [5, 3, 4, 7, 8, 6, 9, 2, 1, 10, 11];
  const root = arrayToTreeNode(arr);
  const result = maxPathSum(root);
  expect(result).toBe(40);
});

it("maxPathSum should return 53 for root = [5,3,4,7,8,6,9,2,25,10,11]", () => {
  const arr = [5, 3, 4, 7, 8, 6, 9, 2, 25, 10, 11];
  const root = arrayToTreeNode(arr);
  const result = maxPathSum(root);
  expect(result).toBe(53);
});
