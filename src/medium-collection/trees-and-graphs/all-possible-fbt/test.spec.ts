import { treeNodeToArray } from "../common";
import { allPossibleFBT } from "./solution";

describe("All Possible Full Binary Trees:", () => {
  it("allPossibleFBT should return correct result for n = 7", () => {
    const n = 7;
    const result = allPossibleFBT(n);
    const resultArrays = result.map((tree) => {
      return treeNodeToArray(tree);
    });
    expect(
      compareArrays(resultArrays, [
        [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
        [0, 0, 0, null, null, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
        [0, 0, 0, 0, 0, null, null, 0, 0],
      ]),
    ).toBeTrue();
  });

  it("allPossibleFBT should return correct result for n = 3", () => {
    const n = 3;
    const result = allPossibleFBT(n);
    const resultArrays = result.map((tree) => {
      return treeNodeToArray(tree);
    });
    expect(compareArrays(resultArrays, [[0, 0, 0]])).toBeTrue();
  });
});

function compareArrays(
  left: (number | null)[][],
  right: (number | null)[][],
): boolean {
  if (left.length !== right.length) {
    return false;
  }
  let leftStrings = left.map((item) => item.join(","));
  let rightStrings = right.map((item) => item.join(","));

  return leftStrings.every((l) => rightStrings.includes(l));
}
