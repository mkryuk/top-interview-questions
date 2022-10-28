import { MedianFinder } from "./solution-heap";

it("MedianFinder should pass test 1", () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1); // arr = [1]
  medianFinder.addNum(2); // arr = [1, 2]
  expect(medianFinder.findMedian()).toEqual(1.5); // return 1.5 (i.e., (1 + 2) / 2)
  medianFinder.addNum(3); // arr[1, 2, 3]
  expect(medianFinder.findMedian()).toEqual(2); // return 2.0
});

it("MedianFinder should pass test 2", () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1);
  medianFinder.addNum(3);
  expect(medianFinder.findMedian()).toEqual(2);
  medianFinder.addNum(3);
  medianFinder.addNum(2);
  expect(medianFinder.findMedian()).toEqual(2.5);
});

it("MedianFinder should pass test 3", () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(-1);
  expect(medianFinder.findMedian()).toEqual(-1);
  medianFinder.addNum(-2);
  expect(medianFinder.findMedian()).toEqual(-1.5);
  medianFinder.addNum(-3);
  expect(medianFinder.findMedian()).toEqual(-2);
  medianFinder.addNum(-4);
  expect(medianFinder.findMedian()).toEqual(-2.5);
  medianFinder.addNum(-5);
  expect(medianFinder.findMedian()).toEqual(-3);
});

it("MedianFinder should pass test 4", () => {
  const medianFinder = new MedianFinder();
  for (let i = 1; i < 10; i++) {
    medianFinder.addNum(i);
  }
  expect(medianFinder.findMedian()).toEqual(5);
});

it("MedianFinder should pass test 5", () => {
  const medianFinder = new MedianFinder();
  for (let i = 9; i > 0; i--) {
    medianFinder.addNum(i);
  }
  expect(medianFinder.findMedian()).toEqual(5);
});

it("MedianFinder should pass time test to add number", () => {
  const passTime = countPassTime(() => {
    const medianFinder = new MedianFinder();
    for (let i = 50001; i < 100000; i++) {
      medianFinder.addNum(i);
    }
    expect(medianFinder.findMedian()).toEqual(75000);
  });
  expect(passTime).toBeLessThan(100);
});

it("MedianFinder should pass time test to add and find median number", () => {
  const passTime = countPassTime(() => {
    const medianFinder = new MedianFinder();
    for (let i = 1; i < 15000; i++) {
      medianFinder.addNum(i);
      medianFinder.findMedian();
    }
    expect(medianFinder.findMedian()).toEqual(7500);
  });
  expect(passTime).toBeLessThan(100);
});

function countPassTime(test: () => void): number {
  const startTime = new Date().getTime();
  test();
  const endTime = new Date().getTime();
  var timeDiff = endTime - startTime;
  return timeDiff;
}
