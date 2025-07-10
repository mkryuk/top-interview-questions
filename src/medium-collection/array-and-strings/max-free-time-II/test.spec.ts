import { maxFreeTime } from "./solution";

describe("3440. Reschedule Meetings for Maximum Free Time II", () => {
  it("maxFreeTime should return 2 for eventTime = 5, startTime = [1,3], endTime = [2,5]", () => {
    const eventTime = 5;
    const startTime = [1, 3];
    const endTime = [2, 5];
    const result = maxFreeTime(eventTime, startTime, endTime);
    expect(result).toEqual(2);
  });

  it("maxFreeTime should return 7 for eventTime = 10, startTime = [0,7,9], endTime = [1,8,10]", () => {
    const eventTime = 10;
    const startTime = [0, 7, 9];
    const endTime = [1, 8, 10];
    const result = maxFreeTime(eventTime, startTime, endTime);
    expect(result).toEqual(7);
  });

  it("maxFreeTime should return 6 for eventTime = 10, startTime = [0,3,7,9], endTime = [1,4,8,10]", () => {
    const eventTime = 10;
    const startTime = [0, 3, 7, 9];
    const endTime = [1, 4, 8, 10];
    const result = maxFreeTime(eventTime, startTime, endTime);
    expect(result).toEqual(6);
  });

  it("maxFreeTime should return 0 for eventTime = 5, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]", () => {
    const eventTime = 5;
    const startTime = [0, 1, 2, 3, 4];
    const endTime = [1, 2, 3, 4, 5];
    const result = maxFreeTime(eventTime, startTime, endTime);
    expect(result).toEqual(0);
  });
});
