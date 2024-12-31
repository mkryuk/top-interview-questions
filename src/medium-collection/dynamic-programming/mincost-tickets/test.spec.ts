import { mincostTickets } from "./solution";

describe("Minimum Cost For Tickets", () => {
  it("mincostTickets should return 11 for days = [1,4,6,7,8,20], costs = [2,7,15]", () => {
    const days = [1, 4, 6, 7, 8, 20];
    const costs = [2, 7, 15];
    const result = mincostTickets(days, costs);
    expect(result).toEqual(11);
  });

  it("mincostTickets should return 17 for days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]", () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
    const costs = [2, 7, 15];
    const result = mincostTickets(days, costs);
    expect(result).toEqual(17);
  });
});
