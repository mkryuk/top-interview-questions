import { mostBooked } from "./solution";

describe("2402. Meeting Rooms III:", () => {
  it("mostBooked should return 0 for n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]", () => {
    const n = 2;
    const meetings: [number, number][] = [
      [0, 10],
      [1, 5],
      [2, 7],
      [3, 4],
    ];
    const result = mostBooked(n, meetings);
  });

  it("mostBooked should return 1 for n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]", () => {
    const n = 3;
    const meetings: [number, number][] = [
      [1, 20],
      [2, 10],
      [3, 5],
      [4, 9],
      [6, 8],
    ];
    const result = mostBooked(n, meetings);
  });
});
