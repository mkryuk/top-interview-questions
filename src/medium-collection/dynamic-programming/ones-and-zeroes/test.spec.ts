import { findMaxForm } from "./solution";

describe("474. Ones and Zeroes", () => {
  it('findMaxForm should return 4 for strs = ["10","0001","111001","1","0"], m = 5, n = 3', () => {
    const strs = ["10", "0001", "111001", "1", "0"];
    const m = 5;
    const n = 3;
    const result = findMaxForm(strs, m, n);
    expect(result).toEqual(4);
  });

  it('findMaxForm should return 2 for strs = ["10","0","1"], m = 1, n = 1', () => {
    const strs = ["10", "0", "1"];
    const m = 1;
    const n = 1;
    const result = findMaxForm(strs, m, n);
    expect(result).toEqual(2);
  });
});
