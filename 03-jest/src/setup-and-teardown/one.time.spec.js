const initializeCityDatabase = () => {
  console.log('initializeCityDatabase');
}

const clearCityDatabase = () => {
  console.log('clearCityDatabase');
}

const isCity = () => true;

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
