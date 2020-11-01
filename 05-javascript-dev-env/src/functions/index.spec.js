import {sum} from './';

describe('# jest 기능 테스트', () => {
  test('sum(a, b)값을 넘기면, a + b 값을 반환한다', () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(3, 4)).toEqual(7);
  });
});
