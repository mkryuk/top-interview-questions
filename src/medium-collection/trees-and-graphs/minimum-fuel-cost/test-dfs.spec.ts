import { minimumFuelCost } from "./solution-dfs";

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

  it("minimumFuelCost should return 8 for roads = [[0,1],[1,2],[0,3],[3,4],[0,5],[0,6]], seats = 1", () => {
    const roads = [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 4],
      [0, 5],
      [0, 6],
    ];
    const seats = 1;
    const result = minimumFuelCost(roads, seats);
    expect(result).toBe(8);
  });

  it("minimumFuelCost should return 3 for roads = [[0,1],[0,2],[0,3]], seats = 5", () => {
    const roads = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    const seats = 5;
    expect(minimumFuelCost(roads, seats)).toEqual(3);
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
    expect(minimumFuelCost(roads, seats)).toEqual(7);
  });

  it("minimumFuelCost should return 0 for roads = [], seats = 1", () => {
    const roads: number[][] = [];
    const seats = 1;
    const result = minimumFuelCost(roads, seats);
    expect(result).toBe(0);
  });

  it("minimumFuelCost should return 4 for roads = [[0,1],[0,2],[1,3],[1,4]] seats = 5", () => {
    const roads = [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
    ];
    const seats = 5;
    const result = minimumFuelCost(roads, seats);
    expect(result).toBe(4);
  });
});
