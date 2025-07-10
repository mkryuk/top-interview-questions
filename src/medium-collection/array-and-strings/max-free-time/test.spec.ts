import { maxFreeTime } from "./solution";

describe("3439. Reschedule Meetings for Maximum Free Time I", () => {
  it("maxFreeTime should return 2 for eventTime = 5, k = 1, startTime = [1,3], endTime = [2,5]", () => {
    const eventTime = 5;
    const k = 1;
    const startTime = [1, 3];
    const endTime = [2, 5];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toEqual(2);
  });

  it("maxFreeTime should return 6 for eventTime = 10, k = 1, startTime = [0,2,9], endTime = [1,4,10]", () => {
    const eventTime = 10;
    const k = 1;
    const startTime = [0, 2, 9];
    const endTime = [1, 4, 10];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toEqual(6);
  });

  it("maxFreeTime should return 0 for eventTime = 5, k = 2, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]", () => {
    const eventTime = 5;
    const k = 2;
    const startTime = [0, 1, 2, 3, 4];
    const endTime = [1, 2, 3, 4, 5];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toEqual(0);
  });

  it("maxFreeTime should return 18 for eventTime = 34, k = 2, startTime = [0,17], endTime = [14,19]", () => {
    const eventTime = 34;
    const k = 2;
    const startTime = [0, 17];
    const endTime = [14, 19];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toEqual(18);
  });

  it("maxFreeTime should return 21 for eventTime = 99, k = 1, startTime = [7,21,25], endTime = [13,25,78]", () => {
    const eventTime = 99;
    const k = 1;
    const startTime = [7, 21, 25];
    const endTime = [13, 25, 78];
    const result = maxFreeTime(eventTime, k, startTime, endTime);
    expect(result).toEqual(21);
  });
});
