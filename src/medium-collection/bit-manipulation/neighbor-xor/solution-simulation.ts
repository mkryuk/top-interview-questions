export function doesValidArrayExist(derived: number[]): boolean {
  // check if we can generate origin starting from 0 or 1
  return isValidOrigin(0, derived) || isValidOrigin(1, derived);
}

function isValidOrigin(from: number, derived: number[]): boolean {
  const n = derived.length;
  let origin = new Array(n);
  origin[0] = from;
  for (let i = 1; i < n; i++) {
    origin[i] = origin[i - 1] ^ derived[i - 1];
  }
  return (origin[n - 1] ^ origin[0]) === derived[n - 1];
}
