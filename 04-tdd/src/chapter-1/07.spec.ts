import { Money, Dollar, Franc } from './07';

test('Dollar/Franc 중복', () => {
  const amount = 5;
  let five: Money = Money.dollar(amount);

  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));

  expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
  expect(new Franc(5).equals(new Franc(5))).toEqual(true);
  expect(new Franc(5).equals(new Franc(6))).toEqual(false);
  expect(new Franc(5).equals(Money.dollar(5))).toEqual(false);

  five = Money.franc(amount);
  expect(Money.franc(10)).toEqual(five.times(2));
  expect(Money.franc(15)).toEqual(five.times(3));
});
