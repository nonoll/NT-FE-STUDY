import { Expression, Sum, Bank, Money, Franc } from './15';

describe('# 서로 다른 통화 더하기', () => {
  test('testMultiplication', () => {
    const amount = 5;
    const five: Money = Money.dollar(amount);

    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  test('testEquality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
  });

  test('testFrancMultiplication', () => {
    const amount = 5;
    const five = Money.franc(amount);

    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });

  test('testCurrency', () => {
    expect('USD').toEqual(Money.dollar(1).currency());
    expect('CHF').toEqual(Money.franc(1).currency());
  });

  test('testDifferentClassEquality', () => {
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF'))).toEqual(true);
  });

  test('testSimpleAddition', () => {
    const sum: Expression = Money.dollar(5).plus(Money.dollar(5));
    // expect(Money.dollar(10)).toEqual(sum);

    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  });

  test('testPlusReturnsSum', () => {
    const five = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;

    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  test('testReduceSum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');
    expect(Money.dollar(7)).toEqual(result);
  });

  test('testReduceMoney', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), 'USD');

    expect(Money.dollar(1)).toEqual(result);
  });

  test('testReduceMoneyDifferentCurrency', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const result = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1)).toEqual(result);
  });

  test('testIdentityRate', () => {
    expect(1).toEqual(new Bank().rate('USD', 'USD'));
  });

  test('testMixedAddition', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);

    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(Money.dollar(10)).toEqual(result);
  });
});
