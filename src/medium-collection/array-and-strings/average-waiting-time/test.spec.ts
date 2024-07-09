import { averageWaitingTime } from "./solution";

describe("Average Waiting Time", () => {
  it("averageWaitingTime should return 5.00000 for customers = [[1,2],[2,5],[4,3]]", () => {
    const customers = [
      [1, 2],
      [2, 5],
      [4, 3],
    ];
    const result = averageWaitingTime(customers);
    expect(result).toEqual(5.0);
  });

  it("averageWaitingTime should return 3.25000 for customers = [[5,2],[5,4],[10,3],[20,1]]", () => {
    const customers = [
      [5, 2],
      [5, 4],
      [10, 3],
      [20, 1],
    ];
    const result = averageWaitingTime(customers);
    expect(result).toEqual(3.25);
  });
});
