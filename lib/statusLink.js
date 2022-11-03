const axios = require("axios");
axios.defaults.timeout = 20000;
module.exports = (link) => {
  const request = axios.get(link, {
    maxRedirects: 0,
  });

  return request
    .then((result) => {
      return result;
    })
    .catch((error) => {
      if (error?.response) {
        return error.response.status;
      } else if (error?.request) {
        return "error request";
      } else {
        return "error";
      }
    });
};
