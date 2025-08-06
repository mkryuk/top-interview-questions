import { numOfUnplacedFruits } from "./solution";

describe("3479. Fruits Into Baskets III", () => {
  it("numOfUnplacedFruits should return 1 for fruits = [4,2,5], baskets = [3,5,4]", () => {
    const fruits = [4, 2, 5];
    const baskets = [3, 5, 4];
    const result = numOfUnplacedFruits(fruits, baskets);
    expect(result).toEqual(1);
  });

  it("numOfUnplacedFruits should return 0 for fruits = [4,2,5], baskets = [3,5,4]", () => {
    const fruits = [3, 6, 1];
    const baskets = [6, 4, 7];
    const result = numOfUnplacedFruits(fruits, baskets);
    expect(result).toEqual(0);
  });
});
