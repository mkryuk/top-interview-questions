import { totalWaviness } from "./solution";

describe("3751. Total Waviness of Numbers in Range I:", () => {
  it("totalWaviness should return 3 for num1 = 120, num2 = 130", () => {
    const num1 = 120;
    const num2 = 130;
    const result = totalWaviness(num1, num2);
    expect(result).toEqual(3);
  });

  it("totalWaviness should return 3 for num1 = 198, num2 = 202", () => {
    const num1 = 198;
    const num2 = 202;
    const result = totalWaviness(num1, num2);
    expect(result).toEqual(3);
  });

  it("totalWaviness should return 2 for num1 = 4848, num2 = 4848", () => {
    const num1 = 4848;
    const num2 = 4848;
    const result = totalWaviness(num1, num2);
    expect(result).toEqual(2);
  });
});
