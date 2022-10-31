const axios = {
  get: jest.fn((link) => {
    if (link === "https://www.google.com/") {
      return Promise.resolve({ status: 200 });
    } else if (link === "noexiste.com") {
      return Promise.reject({});
    }
  }),
};

axios.defaults = {
  timeout: 20000,
};
module.exports = axios;
