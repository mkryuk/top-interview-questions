import { MedianFinder } from "./solution";

it("MedianFinder should pass test 1", () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1); // arr = [1]
  medianFinder.addNum(2); // arr = [1, 2]
  expect(medianFinder.findMedian()).toEqual(1.5); // return 1.5 (i.e., (1 + 2) / 2)
  medianFinder.addNum(3); // arr[1, 2, 3]
  expect(medianFinder.findMedian()).toEqual(2); // return 2.0
});
