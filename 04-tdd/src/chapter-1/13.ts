export interface Expression {
  reduce(to: string): Money;
}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

export class Bank {
  reduce(source: Expression, to: string): Money {
    // if (source instanceof Money) {
    //   return source;
    // }
    // return (source as Sum).reduce(to);
    return source.reduce(to);
  }
}

export class Money implements Expression {
  constructor(public amount: number, protected _currency: string) {}

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

  plus(addend: Money): Expression {
    // return new Money(this.amount + addend.amount, this._currency);
    return new Sum(this, addend);
  }

  reduce(to: string): Money {
    return this;
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
