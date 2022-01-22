import { buildTree } from "./solution";
import { treeNodeToArray } from "../common";

it("buildTree should return [3,9,20,15,7] for preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", function () {
  const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];
  const result = buildTree(preorder, inorder);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([3, 9, 20, 15, 7]);
});

it("buildTree should return [1,2,3,4,5,6,7] for preorder = [1,2,4,5,3,6,7], inorder = [4,2,5,1,6,3,7]", function () {
  const preorder = [1, 2, 4, 5, 3, 6, 7],
    inorder = [4, 2, 5, 1, 6, 3, 7];
  const result = buildTree(preorder, inorder);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

it("buildTree should return [-1] for preorder = [-1], inorder = [-1]", function () {
  const preorder = [-1],
    inorder = [-1];
  const result = buildTree(preorder, inorder);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([-1]);
});
