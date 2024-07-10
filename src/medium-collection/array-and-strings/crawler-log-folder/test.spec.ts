import { minOperations } from "./solution";

describe("Crawler Log Folder", () => {
  it('minOperations should return 2 for logs = ["d1/","d2/","../","d21/","./"]', () => {
    const logs = ["d1/", "d2/", "../", "d21/", "./"];
    const result = minOperations(logs);
    expect(result).toEqual(2);
  });

  it('minOperations should return 3 for logs = ["d1/","d2/","./","d3/","../","d31/"]', () => {
    const logs = ["d1/", "d2/", "./", "d3/", "../", "d31/"];
    const result = minOperations(logs);
    expect(result).toEqual(3);
  });

  it('minOperations should return 0 for logs = ["d1/","../","../","../"]', () => {
    const logs = ["d1/", "../", "../", "../"];
    const result = minOperations(logs);
    expect(result).toEqual(0);
  });
});
