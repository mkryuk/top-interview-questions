import { maximumHappinessSum } from "./solution";

describe("Maximize Happiness of Selected Children", () => {
  it("maximumHappinessSum should return 4 for happiness = [1,2,3], k = 2", () => {
    const happiness = [1, 2, 3];
    const k = 2;
    const result = maximumHappinessSum(happiness, k);
    expect(result).toEqual(4);
  });

  it("maximumHappinessSum should return 1 for happiness = [1,1,1,1], k = 2", () => {
    const happiness = [1, 1, 1, 1];
    const k = 2;
    const result = maximumHappinessSum(happiness, k);
    expect(result).toEqual(1);
  });

  it("maximumHappinessSum should return 5 for happiness = [2,3,4,5], k = 1", () => {
    const happiness = [2, 3, 4, 5];
    const k = 1;
    const result = maximumHappinessSum(happiness, k);
    expect(result).toEqual(5);
  });
});
