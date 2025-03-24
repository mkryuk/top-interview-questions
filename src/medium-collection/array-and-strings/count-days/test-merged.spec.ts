import { countDays } from "./solution-merged";

describe("Count Days Without Meetings", () => {
  it("countDays should return 2 for days = 10, meetings = [[5,7],[1,3],[9,10]]", () => {
    const days = 10;
    const meetings = [
      [5, 7],
      [1, 3],
      [9, 10],
    ];
    const result = countDays(days, meetings);
    expect(result).toEqual(2);
  });

  it("countDays should return 2 for days = 5, meetings = [[2,4],[1,3]]", () => {
    const days = 5;
    const meetings = [
      [2, 4],
      [1, 3],
    ];
    const result = countDays(days, meetings);
    expect(result).toEqual(1);
  });

  it("countDays should return 0 for days = 6, meetings = [[1,6]]", () => {
    const days = 6;
    const meetings = [[1, 6]];
    const result = countDays(days, meetings);
    expect(result).toEqual(0);
  });
});
