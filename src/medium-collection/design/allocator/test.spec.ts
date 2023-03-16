import { Allocator } from "./solution";

describe("Design Memory Allocator", () => {
  it("should pass test 1", () => {
    var loc = new Allocator(10);
    expect(loc.allocate(1, 1)).toEqual(0); // The leftmost block's first index is 0. The memory array becomes [1,_,_,_,_,_,_,_,_,_]. We return 0.
    expect(loc.allocate(1, 2)).toEqual(1); // The leftmost block's first index is 1. The memory array becomes [1,2,_,_,_,_,_,_,_,_]. We return 1.
    expect(loc.allocate(1, 3)).toEqual(2); // The leftmost block's first index is 2. The memory array becomes [1,2,3,_,_,_,_,_,_,_]. We return 2.
    expect(loc.free(2)).toEqual(1); // Free all memory units with mID 2. The memory array becomes [1,_, 3,_,_,_,_,_,_,_]. We return 1 since there is only 1 unit with mID 2.
    expect(loc.allocate(3, 4)).toEqual(3); // The leftmost block's first index is 3. The memory array becomes [1,_,3,4,4,4,_,_,_,_]. We return 3.
    expect(loc.allocate(1, 1)).toEqual(1); // The leftmost block's first index is 1. The memory array becomes [1,1,3,4,4,4,_,_,_,_]. We return 1.
    expect(loc.allocate(1, 1)).toEqual(6); // The leftmost block's first index is 6. The memory array becomes [1,1,3,4,4,4,1,_,_,_]. We return 6.
    expect(loc.free(1)).toEqual(3); // Free all memory units with mID 1. The memory array becomes [_,_,3,4,4,4,_,_,_,_]. We return 3 since there are 3 units with mID 1.
    expect(loc.allocate(10, 2)).toEqual(-1); // We can not find any free block with 10 consecutive free memory units, so we return -1.
    expect(loc.free(7)).toEqual(0); // Free all memory units with mID 7. The memory array remains the same since there is no memory unit with mID 7. We return 0.
  });

  it("should pass test 2", () => {
    const loc = new Allocator(20);
    expect(loc.allocate(12, 1)).toEqual(0);
    expect(loc.allocate(5, 2)).toEqual(12);
    expect(loc.allocate(4, 3)).toEqual(-1);
    expect(loc.allocate(3, 3)).toEqual(17);
    expect(loc.free(2)).toEqual(5);
    expect(loc.allocate(3, 2)).toEqual(12);
    expect(loc.free(2)).toEqual(3);
    expect(loc.free(2)).toEqual(0);
  });
});
