import { binaryGap } from "./solution";

describe("868. Binary Gap", () => {
  it("binaryGap should return 2 for n = 22", () => {
    const n = 22;
    const result = binaryGap(n);
    expect(result).toEqual(2);
  });

  it("binaryGap should return 0 for n = 8", () => {
    const n = 8;
    const result = binaryGap(n);
    expect(result).toEqual(0);
  });

  it("binaryGap should return 2 for n = 5", () => {
    const n = 5;
    const result = binaryGap(n);
    expect(result).toEqual(2);
  });
});
