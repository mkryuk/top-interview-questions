import { FindSumPairs } from "./solution";

describe("1865. Finding Pairs With a Certain Sum", () => {
  it("FindSumPairs should pass test 1", () => {
    const findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
    expect(findSumPairs.count(7)).toEqual(8); // return 8; pairs (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) make 2 + 5 and pairs (5,1), (5,5) make 3 + 4
    findSumPairs.add(3, 2); // now nums2 = [1,4,5,4,5,4]
    expect(findSumPairs.count(8)).toEqual(2); // return 2; pairs (5,2), (5,4) make 3 + 5
    expect(findSumPairs.count(4)).toEqual(1); // return 1; pair (5,0) makes 3 + 1
    findSumPairs.add(0, 1); // now nums2 = [2,4,5,4,5,4]
    findSumPairs.add(1, 1); // now nums2 = [2,5,5,4,5,4]
    expect(findSumPairs.count(7)).toEqual(11); // return 11; pairs (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) make 2 + 5 and pairs (5,3), (5,5) make 3 + 4
  });
});
