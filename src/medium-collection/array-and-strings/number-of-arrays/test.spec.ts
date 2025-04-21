import { numberOfArrays } from "./solution";

describe("Count the Hidden Sequences", () => {
  it("numberOfArrays should return 2 for differences = [1,-3,4], lower = 1, upper = 6", () => {
    const differences = [1, -3, 4];
    const lower = 1;
    const upper = 6;
    const result = numberOfArrays(differences, lower, upper);
    expect(result).toEqual(2);
  });

  it("numberOfArrays should return 4 for differences = [3,-4,5,1,-2], lower = -4, upper = 5", () => {
    const differences = [3, -4, 5, 1, -2];
    const lower = -4;
    const upper = 5;
    const result = numberOfArrays(differences, lower, upper);
    expect(result).toEqual(4);
  });

  it("numberOfArrays should return 0 for differences = [4,-7,2], lower = 3, upper = 6", () => {
    const differences = [4, -7, 2];
    const lower = 3;
    const upper = 6;
    const result = numberOfArrays(differences, lower, upper);
    expect(result).toEqual(0);
  });
});
