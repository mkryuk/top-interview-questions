export function destCity(paths: string[][]): string {
  let outSet = new Set<string>();
  for (const [out] of paths) {
    outSet.add(out);
  }

  for (const [out, dest] of paths) {
    if (!outSet.has(dest)) {
      return dest;
    }
  }
  return "";
}
