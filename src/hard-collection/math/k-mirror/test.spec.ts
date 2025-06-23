import { kMirror } from "./solution";

describe("2081. Sum of k-Mirror Numbers", () => {
  it("kMirror should return 25 for k = 2, n = 5", () => {
    const k = 2;
    const n = 5;
    const result = kMirror(k, n);
    expect(result).toEqual(25);
  });

  it("kMirror should return 499 for k = 3, n = 7", () => {
    const k = 3;
    const n = 7;
    const result = kMirror(k, n);
    expect(result).toEqual(499);
  });

  it("kMirror should return 20379000 for k = 7, n = 17", () => {
    const k = 7;
    const n = 17;
    const result = kMirror(k, n);
    expect(result).toEqual(20379000);
  });
});
