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

it("minMeetingRooms should return 3 for intervals = [[1,5],[3,8],[6,7],[9,15],[10,13],[11,12],[14,17],[16,18],[19,20]]", function () {
  const intervals = [
    [1, 5],
    [3, 8],
    [6, 7],
    [9, 15],
    [10, 13],
    [11, 12],
    [14, 17],
    [16, 18],
    [19, 20],
  ];
  const result = minMeetingRooms(intervals);
  expect(result).toEqual(3);
});

it("minMeetingRooms should return 3 for intervals = [[1,8],[6,20],[9,16],[13,17]]", function () {
  const intervals = [
    [1, 8],
    [6, 20],
    [9, 16],
    [13, 17],
  ];
  const result = minMeetingRooms(intervals);
  expect(result).toEqual(3);
});
