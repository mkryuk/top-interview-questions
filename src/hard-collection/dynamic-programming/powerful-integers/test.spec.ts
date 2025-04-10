import { numberOfPowerfulInt } from "./solution";

describe("Count the Number of Powerful Integers", () => {
  it('numberOfPowerfulInt should return 5 for start = 1, finish = 6000, limit = 4, s = "124"', () => {
    const start = 1;
    const finish = 6000;
    const limit = 4;
    const s = "124";
    const result = numberOfPowerfulInt(start, finish, limit, s);
    expect(result).toEqual(5);
  });

  it('numberOfPowerfulInt should return 2 for start = 15, finish = 215, limit = 6, s = "10"', () => {
    const start = 15;
    const finish = 215;
    const limit = 6;
    const s = "10";
    const result = numberOfPowerfulInt(start, finish, limit, s);
    expect(result).toEqual(2);
  });

  it('numberOfPowerfulInt should return 0 for start = 1000, finish = 2000, limit = 4, s = "3000"', () => {
    const start = 1000;
    const finish = 2000;
    const limit = 4;
    const s = "3000";
    const result = numberOfPowerfulInt(start, finish, limit, s);
    expect(result).toEqual(0);
  });
});
