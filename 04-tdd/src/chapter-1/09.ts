function getClassName<T = unknown>(target: T) {
  return (target as unknown as Function).constructor.name;
}

export abstract class Money {
  constructor(protected amount: number, protected _currency: string) {}

  abstract times(multiplier: number): Money;

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  equals(money: Money): boolean {
    return this.amount === money.amount && getClassName<Money>(this) === getClassName<Money>(money);
  }

  currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  constructor(amount: number, _currency: string = 'USD') {
    super(amount, _currency);
  }

  times(multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number, _currency: string = 'CHF') {
    super(amount, _currency);
  }

  times(multiplier: number): Franc {
    return Money.franc(this.amount * multiplier);
  }
}
