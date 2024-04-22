import { openLock } from "./solution";

describe("Open the Lock", () => {
  it('openLock should return 6 for deadends = ["0201","0101","0102","1212","2002"], target = "0202"', () => {
    const deadends = ["0201", "0101", "0102", "1212", "2002"];
    const target = "0202";
    const result = openLock(deadends, target);
    expect(result).toEqual(6);
  });

  it('openLock should return 1 for deadends = ["8888"], target = "0009"', () => {
    const deadends = ["8888"];
    const target = "0009";
    const result = openLock(deadends, target);
    expect(result).toEqual(1);
  });

  it('openLock should return -1 for deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"', () => {
    const deadends = [
      "8887",
      "8889",
      "8878",
      "8898",
      "8788",
      "8988",
      "7888",
      "9888",
    ];
    const target = "8888";
    const result = openLock(deadends, target);
    expect(result).toEqual(-1);
  });
});
