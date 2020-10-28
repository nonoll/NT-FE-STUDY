import { Franc } from './05';

test('5CHF x 2 = 10CHF', () => {
  const amount = 5;
  const five = new Franc(amount);

  expect(new Franc(10)).toEqual(five.times(2));
  expect(new Franc(15)).toEqual(five.times(3));
});
