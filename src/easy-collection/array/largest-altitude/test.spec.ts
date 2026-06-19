import { largestAltitude } from "./solution";

describe("1732. Find the Highest Altitude:", () => {
  it("largestAltitude should return 1 for gain = [-5,1,5,0,-7]", () => {
    const gain = [-5, 1, 5, 0, -7];
    const result = largestAltitude(gain);
    expect(result).toEqual(1);
  });

  it("largestAltitude should return 0 for gain = [-4,-3,-2,-1,4,3,2]", () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2];
    const result = largestAltitude(gain);
    expect(result).toEqual(0);
  });
});
