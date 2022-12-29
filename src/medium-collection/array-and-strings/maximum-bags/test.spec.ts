import { maximumBags } from "./solution";

fit("maximumBags should return 3 for capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2", () => {
  const capacity = [2, 3, 4, 5];
  const rocks = [1, 2, 4, 4];
  const additionalRocks = 2;
  const result = maximumBags(capacity, rocks, additionalRocks);
  expect(result).toEqual(3);
});

fit("maximumBags should return 3 for capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100", () => {
  const capacity = [10, 2, 2];
  const rocks = [2, 2, 0];
  const additionalRocks = 100;
  const result = maximumBags(capacity, rocks, additionalRocks);
  expect(result).toEqual(3);
});

fit("maximumBags should return 1 for capacity = [91,54,63,99,24,45,78], rocks = [35,32,45,98,6,1,25], additionalRocks = 17", () => {
  const capacity = [91, 54, 63, 99, 24, 45, 78];
  const rocks = [35, 32, 45, 98, 6, 1, 25];
  const additionalRocks = 17;
  const result = maximumBags(capacity, rocks, additionalRocks);
  expect(result).toEqual(1);
});
