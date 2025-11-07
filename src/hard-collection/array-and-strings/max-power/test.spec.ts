import { maxPower } from "./solution";

describe("2528. Maximize the Minimum Powered City", () => {
  it("maxPower should return 5 for stations = [1,2,4,5,0], r = 1, k = 2", () => {
    const stations = [1, 2, 4, 5, 0];
    const r = 1;
    const k = 2;
    const result = maxPower(stations, r, k);
    expect(result).toEqual(5);
  });

  it("maxPower should return 4 for stations = [4,4,4,4], r = 0, k = 3", () => {
    const stations = [4, 4, 4, 4];
    const r = 0;
    const k = 3;
    const result = maxPower(stations, r, k);
    expect(result).toEqual(4);
  });
});
