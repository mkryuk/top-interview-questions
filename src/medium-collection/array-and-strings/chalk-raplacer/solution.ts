export function chalkReplacer(chalk: number[], k: number): number {
  const total = chalk.reduce((acc, val) => acc + val, 0);
  let rest = k % total;
  for (let i = 0; i < chalk.length; i++) {
    if (rest < chalk[i]) {
      return i;
    }
    rest -= chalk[i];
  }
  return -1;
}
