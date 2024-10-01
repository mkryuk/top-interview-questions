import { CustomStack } from "./solution-optimized";

describe("Design a Stack With Increment Operation", () => {
  it("CustomStack should pass test 1", () => {
    const stk = new CustomStack(3); // Stack is Empty []
    stk.push(1); // stack becomes [1]
    stk.push(2); // stack becomes [1, 2]
    expect(stk.pop()).toEqual(2); // return 2 --> Return top of the stack 2, stack becomes [1]
    stk.push(2); // stack becomes [1, 2]
    stk.push(3); // stack becomes [1, 2, 3]
    stk.push(4); // stack still [1, 2, 3], Do not add another elements as size is 4
    stk.increment(5, 100); // stack becomes [101, 102, 103]
    stk.increment(2, 100); // stack becomes [201, 202, 103]
    expect(stk.pop()).toEqual(103); // return 103 --> Return top of the stack 103, stack becomes [201, 202]
    expect(stk.pop()).toEqual(202); // return 202 --> Return top of the stack 202, stack becomes [201]
    expect(stk.pop()).toEqual(201); // return 201 --> Return top of the stack 201, stack becomes []
    expect(stk.pop()).toEqual(-1); // return -1 --> Stack is empty return -1.
  });
});
