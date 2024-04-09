import { timeRequiredToBuy } from "./solution";

describe("Time Needed to Buy Tickets", () => {
  it("timeRequiredToBuy should return 6 for tickets = [2,3,2], k = 2", () => {
    const tickets = [2, 3, 2];
    const k = 2;
    const result = timeRequiredToBuy(tickets, k);
    expect(result).toEqual(6);
  });

  it("timeRequiredToBuy should return 8 for tickets = [5,1,1,1], k = 0", () => {
    const tickets = [5, 1, 1, 1];
    const k = 0;
    const result = timeRequiredToBuy(tickets, k);
    expect(result).toEqual(8);
  });
});
