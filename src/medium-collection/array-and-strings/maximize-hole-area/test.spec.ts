import { maximizeSquareHoleArea } from "./solution";

describe("2943. Maximize Area of Square Hole in Grid", () => {
  it("maximizeSquareHoleArea should return 4 for n = 2, m = 1, hBars = [2,3], vBars = [2]", () => {
    const n = 2;
    const m = 1;
    const hBars = [2, 3];
    const vBars = [2];
    const result = maximizeSquareHoleArea(n, m, hBars, vBars);
    expect(result).toEqual(4);
  });

  it("maximizeSquareHoleArea should return 4 for n = 1, m = 1, hBars = [2], vBars = [2]", () => {
    const n = 1;
    const m = 1;
    const hBars = [2];
    const vBars = [2];
    const result = maximizeSquareHoleArea(n, m, hBars, vBars);
    expect(result).toEqual(4);
  });

  it("maximizeSquareHoleArea should return 4 for n = 2, m = 3, hBars = [2,3], vBars = [2,4]", () => {
    const n = 2;
    const m = 3;
    const hBars = [2, 3];
    const vBars = [2, 4];
    const result = maximizeSquareHoleArea(n, m, hBars, vBars);
    expect(result).toEqual(4);
  });
});
