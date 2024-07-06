import { passThePillow } from "./solution";

describe("Pass the Pillow", () => {
  it("passThePillow should return 2 for n = 4, time = 5", () => {
    const n = 4;
    const time = 5;
    const result = passThePillow(n, time);
    expect(result).toEqual(2);
  });

  it("passThePillow should return 3 for n = 3, time = 2", () => {
    const n = 3;
    const time = 2;
    const result = passThePillow(n, time);
    expect(result).toEqual(3);
  });

  it("passThePillow should return 6 for n = 8, time = 9", () => {
    const n = 8;
    const time = 9;
    const result = passThePillow(n, time);
    expect(result).toEqual(6);
  });

  it("passThePillow should return 6 for n = 8, time = 19", () => {
    const n = 8;
    const time = 19;
    const result = passThePillow(n, time);
    expect(result).toEqual(6);
  });

  it("passThePillow should return 2 for n = 2, time = 341", () => {
    const n = 2;
    const time = 341;
    const result = passThePillow(n, time);
    expect(result).toEqual(2);
  });

  it("passThePillow should return 11 for n = 46, time = 1000", () => {
    const n = 46;
    const time = 1000;
    const result = passThePillow(n, time);
    expect(result).toEqual(11);
  });
});
