export function intToRoman(num: number): string {
  const numToRoman = [
    { num: 1000, roman: "M" },
    { num: 900, roman: "CM" },
    { num: 500, roman: "D" },
    { num: 400, roman: "CD" },
    { num: 100, roman: "C" },
    { num: 90, roman: "XC" },
    { num: 50, roman: "L" },
    { num: 40, roman: "XL" },
    { num: 10, roman: "X" },
    { num: 9, roman: "IX" },
    { num: 5, roman: "V" },
    { num: 4, roman: "IV" },
    { num: 1, roman: "I" },
  ];
  let result = "";
  let romanIdx = 0;
  while (num > 0) {
    while (Math.trunc(num / numToRoman[romanIdx].num) > 0) {
      result += numToRoman[romanIdx].roman;
      num -= numToRoman[romanIdx].num;
    }
    romanIdx++;
  }
  return result;
}
