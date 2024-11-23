import { rotateTheBox } from "./solution";

describe("Rotating the Box", () => {
  it("rotateTheBox should rotate box 1", () => {
    const box = [["#", ".", "#"]];
    const result = rotateTheBox(box);
    expect(result).toEqual([["."], ["#"], ["#"]]);
  });

  it("rotateTheBox should rotate box 2", () => {
    const box = [
      ["#", ".", "*", "."],
      ["#", "#", "*", "."],
    ];
    const result = rotateTheBox(box);
    expect(result).toEqual([
      ["#", "."],
      ["#", "#"],
      ["*", "*"],
      [".", "."],
    ]);
  });

  it("rotateTheBox should rotate box 3", () => {
    const box = [
      ["#", "#", "*", ".", "*", "."],
      ["#", "#", "#", "*", ".", "."],
      ["#", "#", "#", ".", "#", "."],
    ];
    const result = rotateTheBox(box);
    expect(result).toEqual([
      [".", "#", "#"],
      [".", "#", "#"],
      ["#", "#", "*"],
      ["#", "*", "."],
      ["#", ".", "*"],
      ["#", ".", "."],
    ]);
  });
});
