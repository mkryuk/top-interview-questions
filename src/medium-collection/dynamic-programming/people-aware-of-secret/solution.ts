export function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
  // all comments in lower-case per user preference
  const MOD = 1e9 + 7;

  // dp[day] = number of new people who learn the secret on 'day'
  const dp = new Array<number>(n + 2).fill(0);

  // add[day] and sub[day] maintain a difference-array for "current sharers"
  const add = new Array<number>(n + 2).fill(0);
  const sub = new Array<number>(n + 2).fill(0);

  // day 1: one initial person knows the secret
  dp[1] = 1;

  // schedule when this initial person starts and stops sharing
  const start1 = 1 + delay;
  const stop1 = 1 + forget; // cannot share on 'stop1' and onwards
  if (start1 <= n) {
    add[start1] = (add[start1] + dp[1]) % MOD;
  }
  if (stop1 <= n) {
    sub[stop1] = (sub[stop1] + dp[1]) % MOD;
  }

  // currentSharers tracks how many can share on the current day
  let currentSharers = 0;

  // fill dp for days 2..n
  for (let day = 2; day <= n; day++) {
    // update the number of sharers who are active today via difference-array sweep
    currentSharers = (currentSharers + add[day]) % MOD;
    currentSharers = (currentSharers - sub[day]) % MOD;
    if (currentSharers < 0) {
      currentSharers += MOD;
    }

    // the people who can share today create exactly that many new people today
    dp[day] = currentSharers;

    // schedule when today's new people start and stop sharing
    const start = day + delay;
    const stop = day + forget; // they forget at 'stop', cannot share that day
    if (start <= n) {
      add[start] = (add[start] + dp[day]) % MOD;
    }
    if (stop <= n) {
      sub[stop] = (sub[stop] + dp[day]) % MOD;
    }
  }

  // the answer is those who still remember at the end of day n
  // they are exactly the people who learned on days t in [n - forget + 1, n]
  let result = 0;
  const firstRememberDay = Math.max(1, n - forget + 1);
  for (let t = firstRememberDay; t <= n; t++) {
    result = (result + dp[t]) % MOD;
  }

  return result;
}
