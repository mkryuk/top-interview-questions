import { readBinaryWatch } from "./solution";

describe("401. Binary Watch", () => {
  it("readBinaryWatch should return the expected times for turnedOn = 1", () => {
    const turnedOn = 1;
    const result = readBinaryWatch(turnedOn);
    expect(result.sort()).toEqual(["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"]);
  });

  it("readBinaryWatch should return [] for turnedOn = 9", () => {
    const turnedOn = 9;
    const result = readBinaryWatch(turnedOn);
    expect(result).toEqual([]);
  });
});
