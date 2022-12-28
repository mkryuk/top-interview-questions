import { maximumBags } from "./solution";

it("maximumBags should return 3 for capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2", () => {
  const capacity = [2, 3, 4, 5];
  const rocks = [1, 2, 4, 4];
  const additionalRocks = 2;
  const result = maximumBags(capacity, rocks, additionalRocks);
  expect(result).toEqual(3);
});

it("maximumBags should return 3 for capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100", () => {
  const capacity = [10, 2, 2];
  const rocks = [2, 2, 0];
  const additionalRocks = 100;
  const result = maximumBags(capacity, rocks, additionalRocks);
  expect(result).toEqual(3);
});
