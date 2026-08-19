import { maxNumberOfFamilies } from "./solution";

describe("1386. Cinema Seat Allocation:", () => {
  it("maxNumberOfFamilies should return 4 for n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]", () => {
    const n = 3;
    const reservedSeats = [
      [1, 2],
      [1, 3],
      [1, 8],
      [2, 6],
      [3, 1],
      [3, 10],
    ];
    const result = maxNumberOfFamilies(n, reservedSeats);
    expect(result).toEqual(4);
  });

  it("maxNumberOfFamilies should return 2 for n = 2, reservedSeats = [[2,1],[1,8],[2,6]]", () => {
    const n = 2;
    const reservedSeats = [
      [2, 1],
      [1, 8],
      [2, 6],
    ];
    const result = maxNumberOfFamilies(n, reservedSeats);
    expect(result).toEqual(2);
  });

  it("maxNumberOfFamilies should return 4 for n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]", () => {
    const n = 4;
    const reservedSeats = [
      [4, 3],
      [1, 4],
      [4, 6],
      [1, 7],
    ];
    const result = maxNumberOfFamilies(n, reservedSeats);
    expect(result).toEqual(4);
  });
});
