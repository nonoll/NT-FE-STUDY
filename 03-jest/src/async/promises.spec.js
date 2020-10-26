const fetchData = () => {
  return new Promise(resolve => {
    return setTimeout(() => {
      console.log("wait 3.5 sec.");
      resolve('peanut butter');
    }, 3500);
  });
}

const fetchDataError = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      console.log("wait 3.5 sec.");
      reject(new Error('error reason'));
    }, 3500);
  });
}

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataError().catch(e => expect(e.message).toMatch('error'));
});

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  // return expect(fetchDataError()).rejects.toMatch('error');
  return expect(fetchDataError()).rejects.toThrow('error');
});
