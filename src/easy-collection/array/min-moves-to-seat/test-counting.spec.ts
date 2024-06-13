import { minMovesToSeat } from "./solution-counting";

describe("Minimum Number of Moves to Seat Everyone", () => {
  it("minMovesToSeat should return 4 for seats = [3,1,5], students = [2,7,4]", () => {
    const seats = [3, 1, 5];
    const students = [2, 7, 4];
    const result = minMovesToSeat(seats, students);
    expect(result).toEqual(4);
  });

  it("minMovesToSeat should return 7 for seats = [4,1,5,9], students = [1,3,2,6]", () => {
    const seats = [4, 1, 5, 9];
    const students = [1, 3, 2, 6];
    const result = minMovesToSeat(seats, students);
    expect(result).toEqual(7);
  });

  it("minMovesToSeat should return 4 for seats = [2,2,6,6], students = [1,3,2,6]", () => {
    const seats = [2, 2, 6, 6];
    const students = [1, 3, 2, 6];
    const result = minMovesToSeat(seats, students);
    expect(result).toEqual(4);
  });
});
