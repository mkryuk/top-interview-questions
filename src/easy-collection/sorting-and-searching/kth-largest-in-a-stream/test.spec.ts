import { KthLargest } from "./solution";

describe("Kth Largest Element in a Stream:", () => {
  it("should return [null, 4, 5, 5, 8, 8] for [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]", () => {
    let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.add(3)).toEqual(4); // return 4
    expect(kthLargest.add(5)).toEqual(5); // return 5
    expect(kthLargest.add(10)).toEqual(5); // return 5
    expect(kthLargest.add(9)).toEqual(8); // return 8
    expect(kthLargest.add(4)).toEqual(8); // return 8
  });
});
