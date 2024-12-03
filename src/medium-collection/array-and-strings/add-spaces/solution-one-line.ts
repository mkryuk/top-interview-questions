export function addSpaces(s: string, spaces: number[]): string {
  return ((spaceIndex) =>
    s
      .split("")
      .map((v, i) => {
        if (i === spaces[spaceIndex]) {
          spaceIndex++;
          return ` ${v}`;
        } else {
          return v;
        }
      })
      .join(""))(0);
}
