import { FoodRatings } from "./solution";

describe("Design a Food Rating System:", () => {
  it("FoodRatings should pass test 1", () => {
    const foodRatings = new FoodRatings(
      ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
      ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
      [9, 12, 8, 15, 14, 7],
    );
    expect(foodRatings.highestRated("korean")).toEqual("kimchi"); // return "kimchi"
    // "kimchi" is the highest rated korean food with a rating of 9.
    expect(foodRatings.highestRated("japanese")).toEqual("ramen"); // return "ramen"
    // "ramen" is the highest rated japanese food with a rating of 14.
    foodRatings.changeRating("sushi", 16); // "sushi" now has a rating of 16.
    expect(foodRatings.highestRated("japanese")).toEqual("sushi"); // return "sushi"
    // "sushi" is the highest rated japanese food with a rating of 16.
    foodRatings.changeRating("ramen", 16); // "ramen" now has a rating of 16.
    expect(foodRatings.highestRated("japanese")).toEqual("ramen"); // return "ramen"
    // Both "sushi" and "ramen" have a rating of 16.
    // However, "ramen" is lexicographically smaller than "sushi".
  });
});
