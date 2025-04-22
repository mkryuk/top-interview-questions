import { idealArrays } from "./solution";

describe("Count the Number of Ideal Arrays", () => {
  it("idealArrays should return 10 for n = 2, maxValue = 5", () => {
    const n = 2;
    const maxValue = 5;
    const result = idealArrays(n, maxValue);
    expect(result).toEqual(10);
  });

  it("idealArrays should return 11 for n = 5, maxValue = 3", () => {
    const n = 5;
    const maxValue = 3;
    const result = idealArrays(n, maxValue);
    expect(result).toEqual(11);
  });
});
