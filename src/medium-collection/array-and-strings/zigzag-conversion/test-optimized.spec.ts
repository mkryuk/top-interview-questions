import { convert } from "./solution-optimized";

it('convert should return "PAHNAPLSIIGYIR" for s = "PAYPALISHIRING", numRows = 3', () => {
  const s = "PAYPALISHIRING";
  const numRows = 3;
  const result = convert(s, numRows);
  expect(result).toEqual("PAHNAPLSIIGYIR");
});

it('convert should return "PINALSIGYAHRPI" for s = "PAYPALISHIRING", numRows = 4', () => {
  const s = "PAYPALISHIRING";
  const numRows = 4;
  const result = convert(s, numRows);
  expect(result).toEqual("PINALSIGYAHRPI");
});

it('convert should return "A" for s = "A", numRows = 1', () => {
  const s = "A";
  const numRows = 1;
  const result = convert(s, numRows);
  expect(result).toEqual("A");
});
