export class Bank {
  private balances: number[];

  constructor(balance: number[]) {
    this.balances = balance.slice();
  }

  public transfer(account1: number, account2: number, money: number): boolean {
    if (!this.isValidAccount(account1) || !this.isValidAccount(account2)) {
      return false;
    }
    if (!this.hasSufficientFunds(account1, money)) {
      return false;
    }

    this.debit(account1, money);
    this.credit(account2, money);
    return true;
  }

  public deposit(account: number, money: number): boolean {
    if (!this.isValidAccount(account)) {
      return false;
    }
    this.credit(account, money);
    return true;
  }

  public withdraw(account: number, money: number): boolean {
    if (!this.isValidAccount(account)) {
      return false;
    }
    if (!this.hasSufficientFunds(account, money)) {
      return false;
    }
    this.debit(account, money);
    return true;
  }

  private isValidAccount(account: number): boolean {
    if (account < 1) {
      return false;
    }
    if (account > this.balances.length) {
      return false;
    }
    return true;
  }

  // converts 1-based account to 0-based index
  private idx(account: number): number {
    return account - 1;
  }

  private hasSufficientFunds(account: number, money: number): boolean {
    if (money < 0) {
      return false;
    }
    return this.balances[this.idx(account)] >= money;
  }

  private debit(account: number, money: number): void {
    this.balances[this.idx(account)] -= money;
  }

  private credit(account: number, money: number): void {
    this.balances[this.idx(account)] += money;
  }
}
