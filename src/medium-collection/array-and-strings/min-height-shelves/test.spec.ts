import { minHeightShelves } from "./solution";

describe("Filling Bookcase Shelves", () => {
  it("minHeightShelves should return 6 for books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4", () => {
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

  it("minHeightShelves should return 4 for books = [[1,3],[2,4],[3,2]], shelfWidth = 6", () => {
    const books = [
      [1, 3],
      [2, 4],
      [3, 2],
    ];
    const shelfWidth = 6;
    const result = minHeightShelves(books, shelfWidth);
    expect(result).toEqual(4);
  });

  it("minHeightShelves should return 10 for books = [[2,1],[2,2],[2,3],[2,4]], shelfWidth = 3", () => {
    const books = [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ];
    const shelfWidth = 3;
    const result = minHeightShelves(books, shelfWidth);
    expect(result).toEqual(10);
  });

  it("minHeightShelves should return 8 for books = [[2,3],[2,1],[2,3],[1,4]], shelfWidth = 3", () => {
    const books = [
      [2, 3],
      [2, 1],
      [2, 3],
      [1, 4],
    ];
    const shelfWidth = 3;
    const result = minHeightShelves(books, shelfWidth);
    expect(result).toEqual(8);
  });
});
