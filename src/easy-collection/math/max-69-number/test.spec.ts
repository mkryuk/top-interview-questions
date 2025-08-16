import { maximum69Number } from "./solution";

describe("1323. Maximum 69 Number", () => {
  it("maximum69Number should return 9969 for num = 9669", () => {
    const num = 9669;
    const result = maximum69Number(num);
    expect(result).toEqual(9969);
  });

  it("maximum69Number should return 9999 for num = 9996", () => {
    const num = 9996;
    const result = maximum69Number(num);
    expect(result).toEqual(9999);
  });

  it("maximum69Number should return 9999 for num = 9999", () => {
    const num = 9999;
    const result = maximum69Number(num);
    expect(result).toEqual(9999);
  });
});
