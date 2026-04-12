import { minimumDistance } from "./solution";
describe("1320. Minimum Distance to Type a Word Using Two Fingers:", () => {
  it('minimumDistance should return 3 for word = "CAKE"', () => {
    const word = "CAKE";
    expect(minimumDistance(word)).toBe(3);
  });

  it('minimumDistance should return 6 for word = "HAPPY"', () => {
    const word = "HAPPY";
    expect(minimumDistance(word)).toBe(6);
  });
});
