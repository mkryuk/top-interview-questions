import { canTransform } from "./solution";

describe("Swap Adjacent in LR String:", () => {
  it('canTransform should return true for start = "RXXLRXRXL", end = "XRLXXRRLX"', () => {
    const start = "RXXLRXRXL";
    const end = "XRLXXRRLX";
    const result = canTransform(start, end);
    expect(result).toBeTrue();
  });

  it('canTransform should return false for start = "XRLXXRRLX", end = "RXXLRXRXL"', () => {
    const start = "XRLXXRRLX";
    const end = "RXXLRXRXL";
    const result = canTransform(start, end);
    expect(result).toBeFalse();
  });

  it('canTransform should return false for start = "X", end = "L"', () => {
    const start = "X";
    const end = "L";
    const result = canTransform(start, end);
    expect(result).toBeFalse();
  });

  it('canTransform should return false for start = "RXR", end = "XXR"', () => {
    const start = "RXR";
    const end = "XXR";
    const result = canTransform(start, end);
    expect(result).toBeFalse();
  });

  it('canTransform should return false for start = "LXXLXRLXXL", end = "XLLXRXLXLX"', () => {
    const start = "LXXLXRLXXL";
    const end = "XLLXRXLXLX";
    const result = canTransform(start, end);
    expect(result).toBeFalse();
  });

  it('canTransform should return true for start = "LXXXXL", end = "LLXXXX"', () => {
    const start = "LXXXXL";
    const end = "LLXXXX";
    const result = canTransform(start, end);
    expect(result).toBeTrue();
  });

  it('canTransform should return true for start = "RXXXXR", end = "XXXXRR"', () => {
    const start = "RXXXXR";
    const end = "XXXXRR";
    const result = canTransform(start, end);
    expect(result).toBeTrue();
  });
});
