export function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
  // build a quick lookup: user -> set of known languages
  // users are 1-indexed in the problem, while arrays are 0-indexed
  const knows: Array<Set<number>> = new Array(languages.length + 1);
  for (let i = 1; i <= languages.length; i += 1) {
    // store each user's languages in a set for o(1) membership checks
    knows[i] = new Set<number>(languages[i - 1]);
  }

  // collect users who are part of friendships where no common language exists
  const badUsers = new Set<number>();
  for (const [u, v] of friendships) {
    // check if users u and v share any language
    let share = false;
    for (const lang of knows[u]) {
      if (knows[v].has(lang)) {
        share = true;
        break;
      }
    }
    if (share === false) {
      // mark both users; they are candidates to teach
      badUsers.add(u);
      badUsers.add(v);
    }
  }

  // if there are no problematic friendships, no teaching is needed
  if (badUsers.size === 0) {
    return 0;
  }

  // try teaching each language 1..n and count how many of the bad users
  // would need to learn it; pick the minimum across all languages
  let best = Number.POSITIVE_INFINITY;
  for (let lang = 1; lang <= n; lang += 1) {
    let needTeach = 0;
    for (const user of badUsers) {
      if (knows[user].has(lang) === false) {
        needTeach += 1;
      }
    }
    if (needTeach < best) {
      best = needTeach;
    }
  }

  return best;
}
