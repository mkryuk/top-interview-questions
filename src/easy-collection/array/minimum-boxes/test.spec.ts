import { minimumBoxes } from "./solution";

describe("3074. Apple Redistribution into Boxes", () => {
  it("minimumBoxes should return 2 for apple = [1,3,2], capacity = [4,3,1,5,2]", () => {
    const apple = [1, 3, 2];
    const capacity = [4, 3, 1, 5, 2];
    const result = minimumBoxes(apple, capacity);
    expect(result).toEqual(2);
  });

  it("minimumBoxes should return 4 for apple = [5,5,5], capacity = [2,4,2,7]", () => {
    const apple = [5, 5, 5];
    const capacity = [2, 4, 2, 7];
    const result = minimumBoxes(apple, capacity);
    expect(result).toEqual(4);
  });
});
