import { solution } from "./solution";

it("solution should return 5 for n = 5, bad = 5", () => {
  const n = 5,
    bad = 5;
  const result = solution((item: number) => (item === bad ? true : false))(n);
  expect(result).toBe(bad);
});

it("solution should return 4 for n = 5, bad = 4", () => {
  const n = 5,
    bad = 4;
  const result = solution((item: number) => (item === bad ? true : false))(n);
  expect(result).toBe(bad);
});

// it("solution should return 1 for n = 5, bad = 1", () => {
//   const n = 5,
//     bad = 1;
//   const result = solution((item: number) => (item === bad ? true : false))(n);
//   expect(result).toBe(bad);
// });

// it("solution should return 4 for n = 4, bad = 4", () => {
//   const n = 4,
//     bad = 4;
//   const result = solution((item: number) => (item === bad ? true : false))(n);
//   expect(result).toBe(bad);
// });

// it("solution should return 3 for n = 4, bad = 3", () => {
//   const n = 4,
//     bad = 3;
//   const result = solution((item: number) => (item === bad ? true : false))(n);
//   expect(result).toBe(bad);
// });

// it("solution should return 1 for n = 4, bad = 1", () => {
//   const n = 4,
//     bad = 1;
//   const result = solution((item: number) => (item === bad ? true : false))(n);
//   expect(result).toBe(bad);
// });

// it("solution should return 1 for n = 1, bad = 1", () => {
//   const n = 1,
//     bad = 1;
//   const result = solution((item: number) => (item === bad ? true : false))(n);
//   expect(result).toBe(bad);
// });
