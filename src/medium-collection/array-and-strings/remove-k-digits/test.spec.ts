import { removeKdigits } from "./solution";

describe("Remove K Digits", () => {
  it('removeKdigits should return "1219" for num = "1432219", k = 3', () => {
    const num = "1432219";
    const k = 3;
    const result = removeKdigits(num, k);
    expect(result).toEqual("1219");
  });

  it('removeKdigits should return "200" for num = "10200", k = 1', () => {
    const num = "10200";
    const k = 1;
    const result = removeKdigits(num, k);
    expect(result).toEqual("200");
  });

  it('removeKdigits should return "0" for num = "10", k = 2', () => {
    const num = "10";
    const k = 2;
    const result = removeKdigits(num, k);
    expect(result).toEqual("0");
  });
});
