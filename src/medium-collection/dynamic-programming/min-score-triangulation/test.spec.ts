import { minScoreTriangulation } from "./solution";

describe("1039. Minimum Score Triangulation of Polygon", () => {
  it("minScoreTriangulation should return 6 for values = [1,2,3]", () => {
    const values = [1, 2, 3];
    const result = minScoreTriangulation(values);
    expect(result).toEqual(6);
  });

  it("minScoreTriangulation should return 144 for values = [3,7,4,5]", () => {
    const values = [3, 7, 4, 5];
    const result = minScoreTriangulation(values);
    expect(result).toEqual(144);
  });

  it("minScoreTriangulation should return 13 for values = [1,3,1,4,1,5]", () => {
    const values = [1, 3, 1, 4, 1, 5];
    const result = minScoreTriangulation(values);
    expect(result).toEqual(13);
  });
});
