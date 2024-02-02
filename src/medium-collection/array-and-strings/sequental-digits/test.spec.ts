import { sequentialDigits } from "./solution";

describe("Sequential Digits:", () => {
  it("sequentialDigits should return [123,234] for low = 100, high = 300", () => {
    const low = 100;
    const high = 300;
    const result = sequentialDigits(low, high);
    expect(result).toEqual([123, 234]);
  });

  it("sequentialDigits should return [1234,2345,3456,4567,5678,6789,12345] for low = 1000, high = 13000", () => {
    const low = 1000;
    const high = 13000;
    const result = sequentialDigits(low, high);
    expect(result).toEqual([1234, 2345, 3456, 4567, 5678, 6789, 12345]);
  });
});
