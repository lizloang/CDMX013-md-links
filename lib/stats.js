const foundFile = require("./foundFile.js");
module.exports = (dir, options) => {
  const links = foundFile(dir, options);
  const set = new Set();
  console.log("Total: ", links.length);
  links.forEach((link) => set.add(link.href));
  console.log("Unique: ", set.size);
};
