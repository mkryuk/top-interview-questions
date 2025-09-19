import { Spreadsheet } from "./solution";

describe("3484. Design Spreadsheet", () => {
  it("Spreadsheet should pass test 1", () => {
    let spreadsheet = new Spreadsheet(3); // Initializes a spreadsheet with 3 rows and 26 columns
    expect(spreadsheet.getValue("=5+7")).toEqual(12); // returns 12 (5+7)
    spreadsheet.setCell("A1", 10); // sets A1 to 10
    expect(spreadsheet.getValue("=A1+6")).toEqual(16); // returns 16 (10+6)
    spreadsheet.setCell("B2", 15); // sets B2 to 15
    expect(spreadsheet.getValue("=A1+B2")).toEqual(25); // returns 25 (10+15)
    spreadsheet.resetCell("A1"); // resets A1 to 0
    expect(spreadsheet.getValue("=A1+B2")).toEqual(15); // returns 15 (0+15)
  });
});
