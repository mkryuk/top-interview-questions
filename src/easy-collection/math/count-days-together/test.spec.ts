import { countDaysTogether } from "./solution";

describe("2409. Count Days Spent Together:", () => {
  it("countDaysTogether should return 3 for overlapping stays", () => {
    const arriveAlice = "08-15";
    const leaveAlice = "08-18";
    const arriveBob = "08-16";
    const leaveBob = "08-19";
    const result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
    expect(result).toEqual(3);
  });

  it("countDaysTogether should return 0 for non-overlapping stays", () => {
    const arriveAlice = "10-01";
    const leaveAlice = "10-31";
    const arriveBob = "11-01";
    const leaveBob = "12-31";
    const result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
    expect(result).toEqual(0);
  });
});
