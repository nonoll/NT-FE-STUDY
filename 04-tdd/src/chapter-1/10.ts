export class Money {
  constructor(protected amount: number, protected _currency: string) {}

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);;
  };

  equals(money: Money): boolean {
    return this.amount === money.amount && this.currency() === money.currency();
  }

  currency(): string {
    return this._currency;
  }

  toString(): string {
    return `${this.amount}  ${this._currency}`;
  }
}

export class Dollar extends Money {
  constructor(amount: number, _currency: string = 'USD') {
    super(amount, _currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, _currency: string = 'CHF') {
    super(amount, _currency);
  }
}
