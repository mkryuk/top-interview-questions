import { bagOfTokensScore } from "./solution";

describe("Bag of Tokens:", () => {
  it("bagOfTokensScore should return 0 for tokens = [100], power = 50", () => {
    const tokens = [100];
    const power = 50;
    const result = bagOfTokensScore(tokens, power);
    expect(result).toEqual(0);
  });

  it("bagOfTokensScore should return 1 for tokens = [200,100], power = 150", () => {
    const tokens = [200, 100];
    const power = 150;
    const result = bagOfTokensScore(tokens, power);
    expect(result).toEqual(1);
  });

  it("bagOfTokensScore should return 2 for tokens = [100,200,300,400], power = 200", () => {
    const tokens = [100, 200, 300, 400];
    const power = 200;
    const result = bagOfTokensScore(tokens, power);
    expect(result).toEqual(2);
  });

  it("bagOfTokensScore should return 1 for tokens = [26], power = 51", () => {
    const tokens = [26];
    const power = 51;
    const result = bagOfTokensScore(tokens, power);
    expect(result).toEqual(1);
  });

  it("bagOfTokensScore should return 0 for tokens = [71,55,82], power = 54", () => {
    const tokens = [71, 55, 82];
    const power = 54;
    const result = bagOfTokensScore(tokens, power);
    expect(result).toEqual(0);
  });
});
