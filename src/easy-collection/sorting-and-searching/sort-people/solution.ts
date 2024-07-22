export function sortPeople(names: string[], heights: number[]): string[] {
  const people = names.map((p, i) => ({ name: names[i], height: heights[i] }));
  return people.sort((a, b) => b.height - a.height).map((p) => p.name);
}
