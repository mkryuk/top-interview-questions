import { reformatDate } from "./solution";

describe("Reformat Date:", () => {
  it('reformatDate should return "2052-10-20" for date = "20th Oct 2052"', () => {
    const date = "20th Oct 2052";
    const result = reformatDate(date);
    expect(result).toEqual("2052-10-20");
  });

  it('reformatDate should return "1933-06-06" for date = "6th Jun 1933"', () => {
    const date = "6th Jun 1933";
    const result = reformatDate(date);
    expect(result).toEqual("1933-06-06");
  });

  it('reformatDate should return "1960-05-26" for date = "26th May 1960"', () => {
    const date = "26th May 1960";
    const result = reformatDate(date);
    expect(result).toEqual("1960-05-26");
  });
});
