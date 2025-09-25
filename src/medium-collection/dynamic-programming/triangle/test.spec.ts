import { minimumTotal } from "./solution";

describe("120. Triangle", () => {
  it("minimumTotal should return 11 for triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]", () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    const result = minimumTotal(triangle);
    expect(result).toEqual(11);
  });

  it("minimumTotal should return -10 for triangle = [[-10]]", () => {
    const triangle = [[-10]];
    const result = minimumTotal(triangle);
    expect(result).toEqual(-10);
  });
});
