export function countKConstraintSubstrings(s: string, k: number): number {
  const n = s.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (satisfiesConstraint(s, k, i, j)) {
        result++;
      }
    }
  }
  return result;
}

function satisfiesConstraint(s: string, k: number, start: number, end: number) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let i = start; i <= end; i++) {
    if (s[i] === "0") {
      zeroCount++;
    } else {
      oneCount++;
    }
    if (zeroCount > k && oneCount > k) {
      return false;
    }
  }
  return true;
}
