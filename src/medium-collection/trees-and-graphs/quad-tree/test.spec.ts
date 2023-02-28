import { quadTreeNodeToArray } from "../common";
import { construct } from "./solution";

describe("Construct Quad Tree", () => {
  it("construct should pass test 1", () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];
    const root = construct(grid);
    const result = quadTreeNodeToArray(root);
    expect(result).toEqual([
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 1],
      [1, 0],
    ]);
  });

  it("construct should pass test 2", () => {
    const grid = [
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
    ];
    const root = construct(grid);
    const result = quadTreeNodeToArray(root);
    expect(result).toEqual([
      [0, 1],
      [1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      null,
      null,
      null,
      null,
      [1, 0],
      [1, 0],
      [1, 1],
      [1, 1],
    ]);
  });

  it("construct should pass test 3", () => {
    const grid = [
      [1, 1, 1, 1],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [1, 1, 0, 0],
    ];
    const root = construct(grid);
    const result = quadTreeNodeToArray(root);
    expect(result).toEqual([
      [0, 1],
      [1, 1],
      [0, 1],
      [0, 1],
      [1, 0],
      null,
      null,
      null,
      null,
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 1],
      [1, 1],
    ]);
  });
});
