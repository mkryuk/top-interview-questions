import { convertToTitle } from "./solution";

describe("Excel Sheet Column Title:", () => {
  it("convertToTitle should return 'A' for columnNumber = 1", () => {
    const columnNumber = 1;
    const result = convertToTitle(columnNumber);
    expect(result).toEqual("A");
  });

  it("convertToTitle should return 'AB' for columnNumber = 28", () => {
    const columnNumber = 28;
    const result = convertToTitle(columnNumber);
    expect(result).toEqual("AB");
  });

  it("convertToTitle should return 'ZY' for columnNumber = 701", () => {
    const columnNumber = 701;
    const result = convertToTitle(columnNumber);
    expect(result).toEqual("ZY");
  });
});
