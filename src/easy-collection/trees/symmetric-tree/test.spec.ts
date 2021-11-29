import { arrayToTreeNode } from "../common";
import { isSymmetric } from "./solution";

it("isSymmetric should return true for root = [1,2,2,3,4,4,3]", function () {
  const root = [1, 2, 2, 3, 4, 4, 3];
  const tree = arrayToTreeNode(root);
  const result = isSymmetric(tree);
  expect(result).toBeTrue();
});

it("isSymmetric should return false for root = [1,2,2,null,3,null,3]", function () {
  const root = [1, 2, 2, null, 3, null, 3];
  const tree = arrayToTreeNode(root);
  const result = isSymmetric(tree);
  expect(result).toBeFalse();
});

it("isSymmetric should return false for root = [1,2,2,3,null,3,null]", function () {
  const root = [1, 2, 2, 3, null, 3, null];
  const tree = arrayToTreeNode(root);
  const result = isSymmetric(tree);
  expect(result).toBeFalse();
});

it("isSymmetric should return true for root = [1,2,2,3,null,null,3]", function () {
  const root = [1, 2, 2, 3, null, null, 3];
  const tree = arrayToTreeNode(root);
  const result = isSymmetric(tree);
  expect(result).toBeTrue();
});
