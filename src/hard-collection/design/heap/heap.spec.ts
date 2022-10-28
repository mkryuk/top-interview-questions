import { Heap } from "./heap";

it("heap should store min heap", () => {
  const minHeap = new Heap((left, right) => left - right);
  minHeap.push(-3);
  minHeap.push(0);
  minHeap.push(5);
  minHeap.push(3);
  expect(minHeap.pop()).toEqual(-3);
  expect(minHeap.pop()).toEqual(0);
  expect(minHeap.pop()).toEqual(3);
  expect(minHeap.pop()).toEqual(5);
});

it("heap should store max heap", () => {
  const maxHeap = new Heap((left, right) => right - left);
  maxHeap.push(-3);
  maxHeap.push(0);
  maxHeap.push(5);
  maxHeap.push(3);
  expect(maxHeap.pop()).toEqual(5);
  expect(maxHeap.pop()).toEqual(3);
  expect(maxHeap.pop()).toEqual(0);
  expect(maxHeap.pop()).toEqual(-3);
});
