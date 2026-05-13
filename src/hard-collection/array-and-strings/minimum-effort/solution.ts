export function minimumEffort(tasks: number[][]): number {
  tasks.sort(compareTasks);
  let initialEnergy = 0;
  let currentEnergy = 0;

  for (const task of tasks) {
    const actual = task[0];
    const minimum = task[1];
    if (currentEnergy < minimum) {
      const requiredExtraEnergy = minimum - currentEnergy;
      initialEnergy += requiredExtraEnergy;
      currentEnergy += requiredExtraEnergy;
    }
    currentEnergy -= actual;
  }

  return initialEnergy;
}

function compareTasks(first: number[], second: number[]): number {
  const firstBuffer = first[1] - first[0];
  const secondBuffer = second[1] - second[0];
  return secondBuffer - firstBuffer;
}
