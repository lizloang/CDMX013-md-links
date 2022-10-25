const fs = require("fs");
const getLinks = require("./getLinks");

module.exports = (dir, options) => {
  const links = [];
  const regex = /\[.*\]/;
  const allFileContents = fs.readFileSync(dir, "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    if (regex.test(line)) links.push(getLinks(line, dir, options));
  });

  const filteredLinks = links.filter((link) => link !== undefined);
  return filteredLinks;
};
