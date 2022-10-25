const foundFile = require("./lib/foundFile.js");
let dir = process.argv[2];
const options = { validate: process.argv[3], stats: process.argv[4] };
const validate = require("./lib/validate.js");
const stats = require("./lib/stats.js");
function mdLinks() {
  if (options.validate === "--validate" && options.stats === undefined) {
    const promises = validate(dir, options);
    Promise.all(promises)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (options.validate === "--stats") {
    stats(dir, options);
  } else if (options.validate === "--validate" && options.stats === "--stats") {
    const promises = validate(dir, options);
    let broken = 0;
    Promise.all(promises)
      .then((data) => {
        stats(dir, options);
        data.forEach((link) => {
          if (link.ok === "fail") broken++;
        });

        console.log("Broken: ", broken);
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

mdLinks();
