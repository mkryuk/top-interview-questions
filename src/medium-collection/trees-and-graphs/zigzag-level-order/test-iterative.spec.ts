import { zigzagLevelOrder } from "./solution-iterative";
import { arrayToTreeNodeLevel } from "../common";

it("zigzagLevelOrder should return [[3],[20,9],[15,7]] for root = [3,9,20,null,null,15,7]", function () {
  const root = [3, 9, 20, null, null, 15, 7];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = zigzagLevelOrder(rootNode);
  expect(result).toEqual([[3], [20, 9], [15, 7]]);
});

it("zigzagLevelOrder should return [[1],[3,2],[4,5],[9,8,7,6]] for root = [1,2,3,4,null,5,null,6,7,null,null,8,9,null,null]", function () {
  const root = [1, 2, 3, 4, null, 5, null, 6, 7, null, null, 8, 9, null, null];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = zigzagLevelOrder(rootNode);
  expect(result).toEqual([[1], [3, 2], [4, 5], [9, 8, 7, 6]]);
});

it("zigzagLevelOrder should return [[1],[3,2],[4,5],[9,8,7,6]] for root = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]", function () {
  const root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = zigzagLevelOrder(rootNode);
  expect(result).toEqual([[1], [3, 2], [4, 5, 6, 7], [15, 14, 13, 12, 11, 10, 9, 8]]);
});

it("zigzagLevelOrder should return [[1]] for root = [1]", function () {
  const root = [1];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = zigzagLevelOrder(rootNode);
  expect(result).toEqual([[1]]);
});

it("zigzagLevelOrder should return [] for root = []", function () {
  const root: number[] = [];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = zigzagLevelOrder(rootNode);
  expect(result).toEqual([]);
});
