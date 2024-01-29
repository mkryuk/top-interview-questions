import { MyQueue } from "./solution";

describe("Implement Queue using Stacks:", () => {
  it("should pass test 1", () => {
    let myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    expect(myQueue.peek()).toEqual(1); // return 1
    expect(myQueue.pop()).toEqual(1); // return 1, queue is [2]
    expect(myQueue.empty()).toBeFalse(); // return false
  });

  it("should pass test 2", () => {
    let myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    expect(myQueue.empty()).toBeFalse(); // return false
  });

  it("should pass test 3", () => {
    let myQueue = new MyQueue();
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    expect(myQueue.peek()).toEqual(1);
    expect(myQueue.pop()).toEqual(1);
    myQueue.push(4);
    expect(myQueue.peek()).toEqual(2);
    expect(myQueue.pop()).toEqual(2);
    expect(myQueue.pop()).toEqual(3);
    expect(myQueue.empty()).toBeFalse();
    expect(myQueue.pop()).toEqual(4);
    expect(myQueue.empty()).toBeTrue();
  });
});
