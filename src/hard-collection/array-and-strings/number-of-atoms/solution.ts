export function countOfAtoms(formula: string): string {
  // helper function to parse a number starting from the given index
  function parseNumber(s: string, index: number): [number, number] {
    let num = 0;
    while (index < s.length && s[index] >= "0" && s[index] <= "9") {
      num = num * 10 + (s[index].charCodeAt(0) - "0".charCodeAt(0));
      index++;
    }
    return [num || 1, index];
  }

  // helper function to parse an atom starting from the given index
  function parseAtom(s: string, index: number): [string, number] {
    let atom = s[index++];
    while (index < s.length && s[index] >= "a" && s[index] <= "z") {
      atom += s[index++];
    }
    return [atom, index];
  }

  // helper function to parse the formula recursively
  function parseFormula(s: string, index: number): [{ [key: string]: number }, number] {
    const countMap: { [key: string]: number } = {};

    while (index < s.length && s[index] !== ")") {
      if (s[index] === "(") {
        // start a new nested formula
        const [subCountMap, nextIndex] = parseFormula(s, index + 1);
        index = nextIndex;
        const [multiplier, newIndex] = parseNumber(s, index);
        index = newIndex;

        // multiply counts in the sub-formula and add them to the current count map
        for (const [atom, count] of Object.entries(subCountMap)) {
          countMap[atom] = (countMap[atom] || 0) + count * multiplier;
        }
      } else {
        // parse an atom and its count
        const [atom, nextIndex] = parseAtom(s, index);
        index = nextIndex;
        const [count, newIndex] = parseNumber(s, index);
        index = newIndex;

        countMap[atom] = (countMap[atom] || 0) + count;
      }
    }

    return [countMap, index + 1];
  }

  // parse the entire formula
  const [atomCounts] = parseFormula(formula, 0);

  // create the result string
  const sortedAtoms = Object.keys(atomCounts).sort();
  let result = "";
  for (const atom of sortedAtoms) {
    result += atom;
    if (atomCounts[atom] > 1) {
      result += atomCounts[atom];
    }
  }

  return result;
}
