#! /usr/bin/env node
const foundFile = require("./lib/foundFile.js");
const validate = require("./lib/validate.js");
const stats = require("./lib/stats.js");

function mdLinks(dir, options = {}) {
  if (options.validate === "--validate" && options.stats === undefined) {
    const promises = validate(dir, options);
    return Promise.all(promises)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (
    (options.validate === "--stats" && options.stats === undefined) ||
    (options.stats === "--stats" && options.validate === undefined)
  ) {
    stats(dir, options);
  } else if (
    (options.validate === "--validate" && options.stats === "--stats") ||
    (options.stats === "--validate" && options.validate === "--stats")
  ) {
    const promises = validate(dir, options);
    let broken = 0;
    return Promise.all(promises)
      .then((data) => {
        stats(dir, options);
        data.forEach((link) => {
          if (link.ok === "fail") broken++;
        });

        console.log("Broken: ", broken);
        return broken;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    const links = foundFile(dir, options);
    console.log(links);
    return links;
  }
}

//;
if (require.main === module) {
  mdLinks(process.argv[2], {
    validate: process.argv[3],
    stats: process.argv[4],
  });
}

module.exports = mdLinks;
