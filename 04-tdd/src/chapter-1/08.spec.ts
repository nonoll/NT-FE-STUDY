import { Money, Franc } from './08';

// 객체 만들기
describe('# 객체 만들기', () => {
  test('testMultiplication', () => {
    const amount = 5;
    const five: Money = Money.dollar(amount);

    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  test('testEquality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);

    expect(new Franc(5).equals(new Franc(5))).toEqual(true);
    expect(new Franc(5).equals(new Franc(6))).toEqual(false);

    expect(new Franc(5).equals(Money.dollar(5))).toEqual(false);
  });

  test('testFrancMultiplication', () => {
    const amount = 5;
    const five = Money.franc(amount);

    expect(Money.franc(10)).toEqual(five.times(2));
    expect(Money.franc(15)).toEqual(five.times(3));
  });
});
