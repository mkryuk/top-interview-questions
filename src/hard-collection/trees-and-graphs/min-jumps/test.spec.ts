import { minJumps } from "./solution";

describe("1345. Jump Game IV:", () => {
  it("minJumps should return 3 for arr = [100,-23,-23,404,100,23,23,23,3,404]", () => {
    const arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
    const result = minJumps(arr);
    expect(result).toBe(3);
  });

  it("minJumps should return 0 for arr = [7]", () => {
    const arr = [7];
    const result = minJumps(arr);
    expect(result).toBe(0);
  });

  it("minJumps should return 1 for arr = [7,6,9,6,9,6,9,7]", () => {
    const arr = [7, 6, 9, 6, 9, 6, 9, 7];
    const result = minJumps(arr);
    expect(result).toBe(1);
  });
});
