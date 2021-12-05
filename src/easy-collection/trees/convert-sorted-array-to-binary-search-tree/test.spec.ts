import { sortedArrayToBST } from "./solution";
import { treeNodeToArray } from "../common";

it("sortedArrayToBST should return [0,-3,9,-10,null,5] for nums = [-10,-3,0,5,9]", function () {
  const nums = [-10, -3, 0, 5, 9];
  const result = sortedArrayToBST(nums);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([0, -3, 9, -10, null, 5, null]);
});

it("sortedArrayToBST should return [3,1] for nums = [1,3]", function () {
  const nums = [1, 3];
  const result = sortedArrayToBST(nums);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([3, 1, null]);
});
