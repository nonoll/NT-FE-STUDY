function getClassName<T = unknown>(target: T) {
  return (target as unknown as Function).constructor.name;
}

export abstract class Money {
  constructor(protected amount: number) {}

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
}

export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
