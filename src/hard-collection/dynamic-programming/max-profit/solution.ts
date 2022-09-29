// Let us define a state machine to model our agent. The state machine consists of three states, which we define as follows:

// state held:
// in this state, the agent holds a stock that it bought at some point before.

// state sold:
// in this state, the agent has just sold a stock right before entering this state. And the agent holds no stock at hand.

// state reset:
// first of all, one can consider this state as the starting point, where the agent holds no stock and did not sell a stock before.
// More importantly, it is also the transient state before the held and sold. Due to the cooldown rule, after the sold state,
// the agent can not immediately acquire any stock, but is forced into the reset state.
// One can consider this state as a "reset" button for the cycles of buy and sell transactions.

// According to the state machine we defined before, we can then deduce the formulas to calculate the values for the state arrays, as follows:
// sold[i]=hold[i−1]+price[i]
// held[i]=max(held[i−1],reset[i−1]−price[i])
// reset[i]=max(reset[i−1],sold[i−1])

// Here is how we interpret each formulas:
// sold[i]: the previous state of sold can only be held.
// Therefore, the maximal profits of this state is the maximal profits of the previous state plus the revenue by selling the stock at the current price.

// held[i]: the previous state of held could also be held, i.e. one does no transaction.
// Or its previous state could be reset, from which state, one can acquire a stock at the current price point.

// reset[i]reset[i]: the previous state of reset could either be reset or sold.
// Both transitions do not involve any transaction with the stock.

// Finally, the maximal profits that we can gain from this game would be max(sold[n],reset[n]),
// i.e. at the last price point, either we sell the stock or we simply do no transaction, to have the maximal profits.
// It makes no sense to acquire the stock at the last price point, which only leads to the reduction of profits.

export function maxProfit(prices: number[]): number {
  let sold = -Infinity;
  let held = -Infinity;
  let reset = 0;
  for (let i = 0; i < prices.length; i++) {
    const preSold = sold;
    sold = held + prices[i];
    held = Math.max(held, reset - prices[i]);
    reset = Math.max(reset, preSold);
  }

  return Math.max(sold, reset);
}
