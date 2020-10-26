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
      reject(new Error('error'));
    }, 3500);
  });
}

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  try {
    await fetchDataError();
  } catch (e) {
    expect(e.message).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataError()).rejects.toThrow('error');
});
