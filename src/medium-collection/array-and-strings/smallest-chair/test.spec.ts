import { smallestChair } from "./solution";

describe("The Number of the Smallest Unoccupied Chair", () => {
  it("smallestChair should return 1 for times = [[1,4],[2,3],[4,6]], targetFriend = 1", () => {
    const times = [
      [1, 4],
      [2, 3],
      [4, 6],
    ];
    const targetFriend = 1;
    const result = smallestChair(times, targetFriend);
    expect(result).toEqual(1);
  });

  it("smallestChair should return 2 for times = [[3,10],[1,5],[2,6]], targetFriend = 0", () => {
    const times = [
      [3, 10],
      [1, 5],
      [2, 6],
    ];
    const targetFriend = 0;
    const result = smallestChair(times, targetFriend);
    expect(result).toEqual(2);
  });

  it("smallestChair should return 0 for times = [[4,5],[12,13],[5,6],[1,2],[8,9],[9,10],[6,7],[3,4],[7,8],[13,14],[15,16],[14,15],[10,11],[11,12],[2,3],[16,17]], targetFriend = 15", () => {
    const times = [
      [4, 5],
      [12, 13],
      [5, 6],
      [1, 2],
      [8, 9],
      [9, 10],
      [6, 7],
      [3, 4],
      [7, 8],
      [13, 14],
      [15, 16],
      [14, 15],
      [10, 11],
      [11, 12],
      [2, 3],
      [16, 17],
    ];
    const targetFriend = 15;
    const result = smallestChair(times, targetFriend);
    expect(result).toEqual(0);
  });
});
