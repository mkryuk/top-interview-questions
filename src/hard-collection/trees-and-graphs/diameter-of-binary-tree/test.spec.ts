import { arrayToTreeNodeLevel } from "../common";
import { diameterOfBinaryTree } from "./solution";

it("diameterOfBinaryTree should return 3 for root = [1,2,3,4,5]", () => {
  const arr = [1, 2, 3, 4, 5];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(3);
});

it("diameterOfBinaryTree should return 1 for root = [1,2]", () => {
  const arr = [1, 2];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(1);
});

it("diameterOfBinaryTree should return 4 for root = [1,2,3,4,5,6,7]", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(4);
});

it("diameterOfBinaryTree should return 4 for root = [1,2,3,4,null,null,7]", () => {
  const arr = [1, 2, 3, 4, null, null, 7];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(4);
});

it("diameterOfBinaryTree should return 4 for root = [1,2,3,null,5,6,null]", () => {
  const arr = [1, 2, 3, null, 5, 6, null];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(4);
});

it("diameterOfBinaryTree should return 5 for root = [1,2,3,4,5,6,7,8]", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(5);
});

it("diameterOfBinaryTree should return 5 for root = [1,2,3,4,5,6,7,null,9]", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, null, 9];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(5);
});

it("diameterOfBinaryTree should return 5 for root = [1,2,3,4,5,6,7,null,9]", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, null, 9];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(5);
});

it("diameterOfBinaryTree should return 5 for left side of the tree", () => {
  // prettier-ignore
  const arr = 
  [                                     1,
                         2,                                   null, 
             4,                 5,                null,                   null,
     null,         6,       7,      8,      null,       null,       null,       null, 
  null, null, null, null, 9, 10, 11, 12, null, null, null, null, null, null, null, null];
  const root = arrayToTreeNodeLevel(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(5);
});
