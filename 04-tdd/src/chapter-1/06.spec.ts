import { Dollar, Franc } from './06';

test('공용 equals', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
  expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);

  expect(new Franc(5).equals(new Franc(5))).toEqual(true);
  expect(new Franc(5).equals(new Franc(6))).toEqual(false);

  expect(new Franc(5).equals(new Dollar(5))).toEqual(false);
});
