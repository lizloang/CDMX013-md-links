const { marked } = require("marked");
const cheerio = require("cheerio");
const statusLink = require("./statusLink.js");

module.exports = (line, dir, options) => {
  const html = marked.parseInline(line);
  const $ = cheerio.load(html);
  const regex = /^http/;

  if (options.validate === "--validate" || options.stats === "--validate") {
    $.prototype.logHtml = function () {
      if (this.html() !== null && regex.test($("a").prop("href"))) {
        const linkText = this.html();
        return {
          text: linkText.substr(0, 50),
          href: $("a").prop("href"),
          file: dir,
          status: statusLink($("a").prop("href"))
            .then((result) => {
              if (
                typeof result == "number" ||
                result === "error request" ||
                result === "error"
              ) {
                return result;
              } else {
                return result.status;
              }
            })
            .catch((error) => {
              console.log(error);
              return error.response.status;
            }),
          ok: "ok or fail",
        };
      }
    };
  } else {
    $.prototype.logHtml = function () {
      const linkText = this.html();
      if (this.html() !== null && regex.test($("a").prop("href")))
        return {
          text: linkText.substr(0, 50),
          href: $("a").prop("href"),
          file: dir,
        };
    };
  }

  return $("a").logHtml();
};
