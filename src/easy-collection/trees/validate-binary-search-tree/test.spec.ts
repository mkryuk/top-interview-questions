import { arrayToTreeNode } from "../common";
import { isValidBST } from "./solution";

it("isValidBST should return true for root = [2,1,3]", function () {
  const root = [2, 1, 3];
  const tree = arrayToTreeNode(root);
  const result = isValidBST(tree);
  expect(result).toBeTrue();
});

it("isValidBST should return false for root = [5,1,4,null,null,3,6]", function () {
  const root = [5, 1, 4, null, null, 3, 6];
  const tree = arrayToTreeNode(root);
  const result = isValidBST(tree);
  expect(result).toBeFalse();
});

it("isValidBST should return false for root = [2,2,2]", function () {
  const root = [2, 2, 2];
  const tree = arrayToTreeNode(root);
  const result = isValidBST(tree);
  expect(result).toBeFalse();
});

it("isValidBST should return false for root = [5,4,6,null,null,3,7]", function () {
  const root = [5, 4, 6, null, null, 3, 7];
  const tree = arrayToTreeNode(root);
  const result = isValidBST(tree);
  expect(result).toBeFalse();
});

it("isValidBST should return false for root = [0,null,-1]", function () {
  const root = [0, null, -1];
  const tree = arrayToTreeNode(root);
  const result = isValidBST(tree);
  expect(result).toBeFalse();
});
