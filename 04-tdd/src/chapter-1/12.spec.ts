import { Expression, Bank, Money, Franc } from './12';

describe('# 드디어, 더하기', () => {
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
    expect(Money.dollar(10)).toEqual(sum);

    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  });
});
