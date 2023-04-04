export function numRescueBoats(people: number[], limit: number): number {
  let boats = 0;
  people.sort((a, b) => b - a);
  let heaviest = 0;
  let lightest = people.length - 1;
  while (heaviest <= lightest) {
    if (people[heaviest] + people[lightest] <= limit) {
      lightest--;
    }
    heaviest++;
    boats++;
  }
  return boats;
}
