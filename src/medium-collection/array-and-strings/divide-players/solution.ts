export function dividePlayers(skill: number[]): number {
  skill.sort((a, b) => a - b);
  let left = 0;
  let right = skill.length - 1;
  const targetSkill = skill[left] + skill[right];
  let result = 0;
  while (left < right) {
    if (skill[left] + skill[right] !== targetSkill) {
      return -1;
    }
    result += skill[left++] * skill[right--];
  }
  return result;
}
