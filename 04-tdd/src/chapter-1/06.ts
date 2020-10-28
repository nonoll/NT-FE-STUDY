function getClassName<T>(target: T) {
  return (target as unknown as Function).constructor.name;
}

export class Money {
  constructor(protected amount: number) {}

  equals(money: Money): boolean {
    return this.amount === money.amount && getClassName(this) === getClassName(money);
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
