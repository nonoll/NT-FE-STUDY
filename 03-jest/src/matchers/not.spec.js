test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('object assignment is not toEqual', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).not.toEqual({one: 1, two: 3});
});
