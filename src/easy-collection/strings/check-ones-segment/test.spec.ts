import { checkOnesSegment } from "./solution";

describe("1784. Check if Binary String Has at Most One Segment of Ones:", () => {
  it('checkOnesSegment should return false for s = "1001"', () => {
    const s = "1001";
    const result = checkOnesSegment(s);
    expect(result).toEqual(false);
  });

  it('checkOnesSegment should return true for s = "110"', () => {
    const s = "110";
    const result = checkOnesSegment(s);
    expect(result).toEqual(true);
  });
});
