import { concatenatedBinary } from "./solution";

describe("1680. Concatenation of Consecutive Binary Numbers:", () => {
  it("concatenatedBinary should return 1 for n = 1", () => {
    const n = 1;
    const result = concatenatedBinary(n);
    expect(result).toEqual(1);
  });

  it("concatenatedBinary should return 27 for n = 3", () => {
    const n = 3;
    const result = concatenatedBinary(n);
    expect(result).toEqual(27);
  });

  it("concatenatedBinary should return 505379714 for n = 12", () => {
    const n = 12;
    const result = concatenatedBinary(n);
    expect(result).toEqual(505379714);
  });
});
