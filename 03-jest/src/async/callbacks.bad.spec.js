const fetchData = (cb) => {
  setTimeout(() => {
    console.log("wait 3.5 sec.");
    cb('peanut butter');
  }, 3500);
};

// Bad Case
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter1');
  }

  fetchData(callback);
});
