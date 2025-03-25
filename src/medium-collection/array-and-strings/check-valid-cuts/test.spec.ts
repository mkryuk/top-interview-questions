import { checkValidCuts } from "./solution";

describe("Check if Grid can be Cut into Sections", () => {
  it("checkValidCuts should return true for  n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]", () => {
    const n = 5;
    const rectangles = [
      [1, 0, 5, 2],
      [0, 2, 2, 4],
      [3, 2, 5, 3],
      [0, 4, 4, 5],
    ];
    const result = checkValidCuts(n, rectangles);
    expect(result).toBeTrue();
  });

  it("checkValidCuts should return true for n = 4, rectangles = [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]", () => {
    const n = 4;
    const rectangles = [
      [0, 0, 1, 1],
      [2, 0, 3, 4],
      [0, 2, 2, 3],
      [3, 0, 4, 3],
    ];
    const result = checkValidCuts(n, rectangles);
    expect(result).toBeTrue();
  });

  it("checkValidCuts should return false for n = 4, rectangles = [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]", () => {
    const n = 4;
    const rectangles = [
      [0, 2, 2, 4],
      [1, 0, 3, 2],
      [2, 2, 3, 4],
      [3, 0, 4, 2],
      [3, 2, 4, 4],
    ];
    const result = checkValidCuts(n, rectangles);
    expect(result).toBeFalse();
  });
});
