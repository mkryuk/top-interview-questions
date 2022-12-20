import { canVisitAllRooms } from "./solution-stack";

it("should return true for rooms = [[1],[2],[3],[]]", () => {
  const rooms = [[1], [2], [3], []];
  const result = canVisitAllRooms(rooms);
  expect(result).toBeTrue();
});

it("should return false for rooms = [[1,3],[3,0,1],[2],[0]]", () => {
  const rooms = [[1, 3], [3, 0, 1], [2], [0]];
  const result = canVisitAllRooms(rooms);
  expect(result).toBeFalse();
});

it("should return false for rooms = [[1],[],[0,3],[1]]", () => {
  const rooms = [[1], [], [0, 3], [1]];
  const result = canVisitAllRooms(rooms);
  expect(result).toBeFalse();
});
