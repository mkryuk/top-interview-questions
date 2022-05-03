export function mySqrt(x: number): number {
  let exp = 0;
  while (exp * exp < x) {
    exp++;
  }
  return exp * exp > x ? exp - 1 : exp;
}
