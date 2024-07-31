import { minHeightShelves } from "./solution";

describe("Filling Bookcase Shelves", () => {
  it("minHeightShelves should return 6 books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4", () => {
    const books = [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2],
    ];
    const shelfWidth = 4;
    const result = minHeightShelves(books, shelfWidth);
    expect(result).toEqual(6);
  });

  it("minHeightShelves should return 4 books = [[1,3],[2,4],[3,2]], shelfWidth = 6", () => {
    const books = [
        [1, 3],
        [2, 4],
        [3, 2],
      ],
      shelfWidth = 6;
    const result = minHeightShelves(books, shelfWidth);
    expect(result).toEqual(4);
  });
});
