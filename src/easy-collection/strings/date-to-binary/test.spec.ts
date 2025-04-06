import { convertDateToBinary } from "./solution";

describe("Convert Date to Binary", () => {
  it('convertDateToBinary should return "100000100000-10-11101" for date = "2080-02-29"', () => {
    const date = "2080-02-29";
    const result = convertDateToBinary(date);
    expect(result).toEqual("100000100000-10-11101");
  });

  it('convertDateToBinary should return "11101101100-1-1" for date = "1900-01-01"', () => {
    const date = "1900-01-01";
    const result = convertDateToBinary(date);
    expect(result).toEqual("11101101100-1-1");
  });
});
