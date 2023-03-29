import { numRabbits } from "./solution";

describe("Rabbits in Forest", () => {
  it("numRabbits should return 5 answers = [1,1,2]", () => {
    const answers = [1, 1, 2];
    const result = numRabbits(answers);
    expect(result).toEqual(5);
  });

  it("numRabbits should return 11 answers = [10,10,10]", () => {
    const answers = [10, 10, 10];
    const result = numRabbits(answers);
    expect(result).toEqual(11);
  });
});
