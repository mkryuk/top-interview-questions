import { MinStack } from "./solution";

function createStack(nums: number[]): MinStack {
  const stack = new MinStack();
  nums.forEach((n) => stack.push(n));
  return stack;
}

it("push should push the element to the stack", () => {
  const stack = new MinStack();
  const val = 42;
  stack.push(val);
  const top = stack.top();
  expect(top).toEqual(val);
});

it("pop should remove top element fom the stack [1,2]", () => {
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

it("getMin should return min element fom the [2,-1,3]", () => {
  const nums = [2, -1, 3];
  const stack = createStack(nums);
  const min = stack.getMin();
  expect(min).toEqual(-1);
});

it("getMin should return first min element fom the [2,-1,3,-5,4]", () => {
  const nums = [2, -1, 3, -5, 4];
  const stack = createStack(nums);
  const min = stack.getMin();
  expect(min).toEqual(-5);
});

it("getMin should return second min element fom the [2,-1,3,-5,4]", () => {
  const nums = [2, -1, 3, -5, 4];
  const stack = createStack(nums);
  stack.pop();
  stack.pop();
  const min = stack.getMin();
  expect(min).toEqual(-1);
});

it("should pass the sequence", () => {
  const nums = [2147483646, 2147483646, 2147483647];
  const stack = createStack(nums);
  let top = stack.top();
  expect(top).toEqual(2147483647);
  stack.pop();
  let min = stack.getMin();
  expect(min).toEqual(2147483646);
  stack.pop();
  min = stack.getMin();
  expect(min).toEqual(2147483646);
  stack.pop();
  stack.push(2147483647);
  top = stack.top();
  expect(top).toEqual(2147483647);
  min = stack.getMin();
  expect(top).toEqual(2147483647);
  stack.push(-2147483648);
  stack.top();
  min = stack.getMin();
  expect(min).toEqual(-2147483648);
  stack.pop();
  min = stack.getMin();
  expect(min).toEqual(2147483647);
});
