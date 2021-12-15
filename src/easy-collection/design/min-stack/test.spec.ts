import { MinStack } from "./solution";

it("push should push the element to the stack", () => {
  const stack = new MinStack();
  const val = 42;
  stack.push(val);
  const top = stack.top();
  expect(top).toEqual(val);
});

it("pop should remove top element fom the stack", () => {
  const stack = new MinStack();
  const [val1, val2] = [1, 2];
  stack.push(val1);
  stack.push(val2);
  const top2 = stack.top();
  stack.pop();
  const top1 = stack.top();
  expect(top1).toEqual(val1);
  expect(top2).toEqual(val2);
});

it("getMin should return min element fom the stack", () => {
  const stack = new MinStack();
  const [val1, valMin, val3] = [2, -1, 3];
  stack.push(val1);
  stack.push(valMin);
  stack.push(val3);
  const min = stack.getMin();
  expect(min).toEqual(valMin);
});
