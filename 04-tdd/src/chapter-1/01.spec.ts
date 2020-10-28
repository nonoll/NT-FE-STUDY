import { Dollar } from './01';

test('$5 x 2 = $10', () => {
  const amount = 5;
  const times = 2;
  const toResult = amount * times;

  const five = new Dollar(amount);
  five.times(times);
  expect(five.amount).toEqual(toResult);
});
