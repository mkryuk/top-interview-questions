import { maxEvents } from "./solution";

describe("1353. Maximum Number of Events That Can Be Attended", () => {
  it("maxEvents should return 3 for events = [[1,2],[2,3],[3,4]]", () => {
    const events = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const result = maxEvents(events);
    expect(result).toEqual(3);
  });

  it("maxEvents should return 4 for events = [[1,2],[2,3],[3,4],[1,2]]", () => {
    const events = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 2],
    ];
    const result = maxEvents(events);
    expect(result).toEqual(4);
  });

  it("maxEvents should return 5 for events = [[1,2],[1,2],[3,3],[1,5],[1,5]]", () => {
    const events = [
      [1, 2],
      [1, 2],
      [3, 3],
      [1, 5],
      [1, 5],
    ];
    const result = maxEvents(events);
    expect(result).toEqual(5);
  });
});
