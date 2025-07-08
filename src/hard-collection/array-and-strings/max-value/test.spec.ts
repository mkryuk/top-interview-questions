import { maxValue } from "./solution";

describe("1751. Maximum Number of Events That Can Be Attended II", () => {
  it("maxValue should return 7 for events = [[1,2,4],[3,4,3],[2,3,1]], k = 2", () => {
    const events = [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 1],
    ];
    const k = 2;
    const result = maxValue(events, k);
    expect(result).toEqual(7);
  });

  it("maxValue should return 10 for events = [[1,2,4],[3,4,3],[2,3,10]], k = 2", () => {
    const events = [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 10],
    ];
    const k = 2;
    const result = maxValue(events, k);
    expect(result).toEqual(10);
  });
  it("maxValue should return 10 for events = [[1,2,4],[3,4,3],[2,3,10]], k = 2", () => {
    const events = [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 10],
    ];
    const k = 2;
    const result = maxValue(events, k);
    expect(result).toEqual(10);
  });

  it("maxValue should return 9 for events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3", () => {
    const events = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
      [4, 4, 4],
    ];
    const k = 3;
    const result = maxValue(events, k);
    expect(result).toEqual(9);
  });
});
