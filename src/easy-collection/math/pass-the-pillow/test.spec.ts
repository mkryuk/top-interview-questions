import { passThePillow } from "./solution";

describe("Pass the Pillow", () => {
  it("passThePillow should return 2 for n = 4, time = 5", () => {
    const n = 4;
    const time = 5;
    const result = passThePillow(n, time);
    expect(result).toEqual(2);
  });

  it("passThePillow should return 3 for n = 4, time = 5", () => {
    const n = 4;
    const time = 5;
    const result = passThePillow(n, time);
    expect(result).toEqual(3);
  });
});
