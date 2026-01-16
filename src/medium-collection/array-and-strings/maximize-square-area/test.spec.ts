import { maximizeSquareArea } from "./solution";

describe("2975. Maximum Square Area by Removing Fences From a Field", () => {
  it("maximizeSquareArea should return 4 for m = 4, n = 3, hFences = [2,3], vFences = [2]", () => {
    const m = 4;
    const n = 3;
    const hFences = [2, 3];
    const vFences = [2];
    const result = maximizeSquareArea(m, n, hFences, vFences);
    expect(result).toEqual(4);
  });

  it("maximizeSquareArea should return -1 for m = 6, n = 7, hFences = [2], vFences = [4]", () => {
    const m = 6;
    const n = 7;
    const hFences = [2];
    const vFences = [4];
    const result = maximizeSquareArea(m, n, hFences, vFences);
    expect(result).toEqual(-1);
  });
});
