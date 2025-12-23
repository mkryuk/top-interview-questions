import { maxTwoEvents } from "./solution";

describe("2054. Two Best Non-Overlapping Events", () => {
  it("maxTwoEvents should return 4 for events = [[1,3,2],[4,5,2],[2,4,3]]", () => {
    const events = [
      [1, 3, 2],
      [4, 5, 2],
      [2, 4, 3],
    ];
    const result = maxTwoEvents(events);
    expect(result).toEqual(4);
  });

  it("maxTwoEvents should return 5 for events = [[1,3,2],[4,5,2],[1,5,5]]", () => {
    const events = [
      [1, 3, 2],
      [4, 5, 2],
      [1, 5, 5],
    ];
    const result = maxTwoEvents(events);
    expect(result).toEqual(5);
  });

  it("maxTwoEvents should return 8 for events = [[1,5,3],[1,5,1],[6,6,5]]", () => {
    const events = [
      [1, 5, 3],
      [1, 5, 1],
      [6, 6, 5],
    ];
    const result = maxTwoEvents(events);
    expect(result).toEqual(8);
  });

  it("maxTwoEvents should return 7 for events = [[1,3,2],[4,5,2],[2,4,3],[5,7,4]]", () => {
    const events = [
      [1, 3, 2],
      [4, 5, 2],
      [2, 4, 3],
      [5, 7, 4],
    ];
    const result = maxTwoEvents(events);
    expect(result).toEqual(7);
  });
});
