import { minMeetingRooms } from "./solution";

it("minMeetingRooms should return 2 for intervals = [[0,30],[5,10],[15,20]]", function () {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ];
  const result = minMeetingRooms(intervals);
  expect(result).toEqual(2);
});

it("minMeetingRooms should return 1 for intervals = [[7,10],[2,4]]", function () {
  const intervals = [
    [7, 10],
    [2, 4],
  ];
  const result = minMeetingRooms(intervals);
  expect(result).toEqual(1);
});
