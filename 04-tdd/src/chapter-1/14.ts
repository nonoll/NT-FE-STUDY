export interface Expression {
  reduce(bank: Bank, to: string): Money;
}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(bank: Bank, to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

export class Pair {
  constructor(private from: string, private to: string) {}

  key() {
    return `${this.from}_${this.to}`;
  }

  equals(object: Object) {
    const pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }

  hashCode() {
    return 0;
  }
}

export class Bank {
  private rates = new Map<string, number>();

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).key(), rate);
  }

  rate(from: string, to: string) {
    if (from === to) {
      return 1;
    }

    const rate = this.rates.get(new Pair(from, to).key());

    return rate || 1;
    // return from === 'CHF' && to === 'USD' ? 2 : 1;
  }

  reduce(source: Expression, to: string): Money {
    // if (source instanceof Money) {
    //   return source;
    // }
    // return (source as Sum).reduce(to);
    return source.reduce(this, to);
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

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency(), to);
    return new Money(this.amount / rate, to);
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
