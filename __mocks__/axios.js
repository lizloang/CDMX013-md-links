const axios = {
  get: jest.fn((link) => {
    if (
      link === "https://www.google.com/" ||
      link === "https://es.wikipedia.org/wiki/Markdown"
    ) {
      return Promise.resolve({ status: 200 });
    } else if (link === "linkerror.com") {
      return Promise.reject({});
    } else if (link === "https://responseerror.com/") {
      return Promise.reject({
        response: {
          status: 400,
        },
      });
    } else if (link === "https://requesterror.com/") {
      return Promise.reject({
        request: {},
      });
    }
  }),
};

axios.defaults = {
  timeout: 20000,
};
module.exports = axios;
