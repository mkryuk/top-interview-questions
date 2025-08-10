export function reorderedPowerOf2(n: number): boolean {
  const target = signature(n);
  for (let i = 0; i < 30; i++) {
    if (signature(1 << i) === target) {
      return true;
    }
  }
  return false;
}

function signature(n: number): string {
  return n.toString().split("").sort().join("");
}
