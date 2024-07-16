import { treeNodeToArray } from "../common";
import { createBinaryTree } from "./solution";

describe("Create Binary Tree From Descriptions", () => {
  it("createBinaryTree should return [50,20,80,15,17,19] for descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]", () => {
    const descriptions = [
      [20, 15, 1],
      [20, 17, 0],
      [50, 20, 1],
      [50, 80, 0],
      [80, 19, 1],
    ];
    const result = createBinaryTree(descriptions);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([50, 20, 80, 15, 17, 19]);
  });

  it("createBinaryTree should return [1,2,null,null,3,4] for descriptions = [[1,2,1],[2,3,0],[3,4,1]]", () => {
    const descriptions = [
      [1, 2, 1],
      [2, 3, 0],
      [3, 4, 1],
    ];
    const result = createBinaryTree(descriptions);
    const resultArray = treeNodeToArray(result);
    expect(resultArray).toEqual([1, 2, null, null, 3, 4]);
  });
});
