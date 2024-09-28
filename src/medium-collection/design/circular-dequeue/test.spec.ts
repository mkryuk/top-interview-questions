import { MyCircularDeque } from "./solution";

describe("Design Circular Deque ", () => {
  it("MyCircularDeque should pass test 1", () => {
    var myCircularDeque = new MyCircularDeque(3);
    expect(myCircularDeque.insertLast(1)).toBeTrue();
    expect(myCircularDeque.insertLast(2)).toBeTrue();
    expect(myCircularDeque.insertFront(3)).toBeTrue();
    expect(myCircularDeque.insertFront(4)).toBeFalse(); // the queue is full.
    expect(myCircularDeque.getRear()).toEqual(2);
    expect(myCircularDeque.isFull()).toBeTrue();
    expect(myCircularDeque.deleteLast()).toBeTrue();
    expect(myCircularDeque.insertFront(4)).toBeTrue();
    expect(myCircularDeque.getFront()).toEqual(4);
  });

  it("MyCircularDeque should pass test 1", () => {
    var myCircularDeque = new MyCircularDeque(5);
    expect(myCircularDeque.insertFront(7)).toBeTrue();
    expect(myCircularDeque.insertLast(0)).toBeTrue();
    expect(myCircularDeque.getFront()).toEqual(7);
    expect(myCircularDeque.insertLast(3)).toBeTrue();
    expect(myCircularDeque.getFront()).toEqual(7);
    expect(myCircularDeque.insertFront(9)).toBeTrue();
    expect(myCircularDeque.getRear()).toEqual(3);
    expect(myCircularDeque.getFront()).toEqual(9);
    expect(myCircularDeque.getFront()).toEqual(9);
    expect(myCircularDeque.deleteLast()).toBeTrue();
    expect(myCircularDeque.getRear()).toEqual(0);
  });
});
