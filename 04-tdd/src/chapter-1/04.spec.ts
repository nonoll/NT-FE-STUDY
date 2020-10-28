import { Dollar } from './04';

test('amount를 private로 만들기', () => {
  const amount = 5;
  const five = new Dollar(amount);
  const testCode = (times: number) => {
    expect(new Dollar(amount * times)).toEqual(five.times(times));
  }

  testCode(2);
  testCode(3);
});
