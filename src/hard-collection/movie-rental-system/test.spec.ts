import { MovieRentingSystem } from "./solution";

describe("1912. Design Movie Rental System", () => {
  it("MovieRentingSystem should pass test 1", () => {
    const movieRentingSystem = new MovieRentingSystem(3, [
      [0, 1, 5],
      [0, 2, 6],
      [0, 3, 7],
      [1, 1, 4],
      [1, 2, 7],
      [2, 1, 5],
    ]);
    expect(movieRentingSystem.search(1)).toEqual([1, 0, 2]); // return [1, 0, 2], Movies of ID 1 are unrented at shops 1, 0, and 2. Shop 1 is cheapest; shop 0 and 2 are the same price, so order by shop number.
    movieRentingSystem.rent(0, 1); // Rent movie 1 from shop 0. Unrented movies at shop 0 are now [2,3].
    movieRentingSystem.rent(1, 2); // Rent movie 2 from shop 1. Unrented movies at shop 1 are now [1].
    expect(movieRentingSystem.report()).toEqual([
      [0, 1],
      [1, 2],
    ]); // return [[0, 1], [1, 2]]. Movie 1 from shop 0 is cheapest, followed by movie 2 from shop 1.
    movieRentingSystem.drop(1, 2); // Drop off movie 2 at shop 1. Unrented movies at shop 1 are now [1,2].
    expect(movieRentingSystem.search(2)).toEqual([0, 1]); // return [0, 1]. Movies of ID 2 are unrented at shops 0 and 1. Shop 0 is cheapest, followed by shop 1.
  });
});
