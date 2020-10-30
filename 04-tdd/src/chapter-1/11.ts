export class Money {
  constructor(protected amount: number, protected _currency: string) {}

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
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
