import { Dollar } from './02';

test('Dollar 부작용?', () => {
  const amount = 5;
  const five = new Dollar(amount);
  const testCase = (product: Dollar, times: number) => {
    expect(product.amount).toEqual(amount * times);
  }

  let times = 2;
  let product = five.times(times);
  testCase(product, times);

  times = 3;
  product = five.times(times);
  testCase(product, times);
});
