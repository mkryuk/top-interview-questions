import { minimumFuelCost } from "./solution";

describe("Minimum Fuel Cost to Report to the Capital", () => {
  it("minimumFuelCost should return 3 for roads = [[0,1],[0,2],[0,3]], seats = 5", () => {
    const roads = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    const seats = 5;
    const result = minimumFuelCost(roads, seats);
    expect(result).toBe(3);
  });

  it("minimumFuelCost should return 7 for roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2", () => {
    const roads = [
      [3, 1],
      [3, 2],
      [1, 0],
      [0, 4],
      [0, 5],
      [4, 6],
    ];
    const seats = 2;
    const result = minimumFuelCost(roads, seats);
    expect(result).toBe(7);
  });

  it("minimumFuelCost should return 0 for roads = [], seats = 1", () => {
    const roads: number[][] = [];
    const seats = 1;
    const result = minimumFuelCost(roads, seats);
    expect(result).toBe(0);
  });
});
