import { addBinary } from "./solution";

describe("67. Add Binary", () => {
  it('addBinary should return "100" for a = "11", b = "1"', () => {
    const a = "11";
    const b = "1";
    const result = addBinary(a, b);
    expect(result).toEqual("100");
  });

  it('addBinary should return "100" for a = "1010", b = "1011"', () => {
    const a = "1010";
    const b = "1011";
    const result = addBinary(a, b);
    expect(result).toEqual("10101");
  });
});
