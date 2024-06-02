import { scoreOfString } from "./solution";

describe("Score of a String", () => {
  it('scoreOfString should return 13 for s = "hello"', () => {
    const s = "hello";
    const result = scoreOfString(s);
    expect(result).toEqual(13);
  });

  it('scoreOfString should return 50 for s = "zaz"', () => {
    const s = "zaz";
    const result = scoreOfString(s);
    expect(result).toEqual(50);
  });
});
