import { maxNumberOfBalloons } from "./solution";

describe("1189. Maximum Number of Balloons:", () => {
  it('maxNumberOfBalloons should return 1 for text = "nlaebolko"', () => {
    const text = "nlaebolko";
    const result = maxNumberOfBalloons(text);
    expect(result).toEqual(1);
  });

  it('maxNumberOfBalloons should return 2 for text = "loonbalxballpoon"', () => {
    const text = "loonbalxballpoon";
    const result = maxNumberOfBalloons(text);
    expect(result).toEqual(2);
  });

  it('maxNumberOfBalloons should return 0 for text = "leetcode"', () => {
    const text = "leetcode";
    const result = maxNumberOfBalloons(text);
    expect(result).toEqual(0);
  });
});
