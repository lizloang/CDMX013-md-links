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
        // console.log($("a").prop("href"));
        return {
          text: this.html(),
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
              /*if (error.response) {
                return error.response.status;
              } else if (error.request) {
                return console.log("request error");
              } else {
                return console.log("error");
              }*/
              console.log(error);
              return error.response.status;
            }),
          ok: "ok or fail",
        };
      }
    };
  } else {
    $.prototype.logHtml = function () {
      if (this.html() !== null && regex.test($("a").prop("href")))
        return { text: this.html(), href: $("a").prop("href"), file: dir };
    };
  }

  return $("a").logHtml();
};
