import { arrayToTreeNode } from "../common";
import { flipEquiv } from "./solution-dfs";

it("flipEquiv should return true for tes 1", () => {
  const arr1 = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8];
  // prettier-ignore
  const arr2 = [1, 3, 2, null, 6, 4, 5, null, null, null, null, null,null, 8, 7];
  const root1 = arrayToTreeNode(arr1);
  const root2 = arrayToTreeNode(arr2);
  const result = flipEquiv(root1, root2);
  expect(result).toBeTrue();
});

it("flipEquiv should return true for tes 2", () => {
  const arr1: number[] = [];
  const arr2: number[] = [];
  const root1 = arrayToTreeNode(arr1);
  const root2 = arrayToTreeNode(arr2);
  const result = flipEquiv(root1, root2);
  expect(result).toBeTrue();
});

it("flipEquiv should return true for tes 3", () => {
  const arr1: number[] = [];
  const arr2 = [1];
  const root1 = arrayToTreeNode(arr1);
  const root2 = arrayToTreeNode(arr2);
  const result = flipEquiv(root1, root2);
  expect(result).toBeFalse();
});

it("flipEquiv should return true for tes 4", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, null, 3];
  const root1 = arrayToTreeNode(arr1);
  const root2 = arrayToTreeNode(arr2);
  const result = flipEquiv(root1, root2);
  expect(result).toBeFalse();
});

it("flipEquiv should return true for tes 5", () => {
  const arr1: number[] = [1];
  const arr2: number[] = [2];
  const root1 = arrayToTreeNode(arr1);
  const root2 = arrayToTreeNode(arr2);
  const result = flipEquiv(root1, root2);
  expect(result).toBeFalse();
});
