const foundFile = require("./foundFile.js");

module.exports = (dir, options) => {
  const links = foundFile(dir, options);
  const promises = links.map((p) =>
    p.status.then((statusValue) => {
      let ok;
      if (statusValue >= 200 && statusValue < 400) {
        ok = "ok";
      } else {
        ok = "fail";
      }
      return {
        ...p,
        status: statusValue,
        ok: ok,
      };
    })
  );

  return promises;
};
