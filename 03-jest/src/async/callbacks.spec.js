const fetchData = (cb) => {
  setTimeout(() => {
    console.log("wait 3.5 sec.");
    cb('peanut butter');
  }, 3500);
};

// Good Case
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
