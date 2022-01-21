import { buildTree } from "./solution";
import { treeNodeToArray } from "../common";

it("buildTree should return [3,9,20,null,null,15,7] for preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", function () {
  const preorder = [3, 9, 20, 15, 7],
    inorder = [9, 3, 15, 20, 7];
  const result = buildTree(preorder, inorder);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([3, 9, 20, null, null, 15, 7]);
});

it("buildTree should return [-1] for preorder = [-1], inorder = [-1]", function () {
  const preorder = [-1],
    inorder = [-1];
  const result = buildTree(preorder, inorder);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([-1]);
});
