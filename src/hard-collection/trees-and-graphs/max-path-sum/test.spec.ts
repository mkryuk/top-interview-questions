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
