const infoLinkMock = {
  line: "[Google](https://www.google.com/)",
  dir: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
  options: { validate: "--validate", stats: undefined },
};

const validateResultSuccess = {
  text: "Google",
  href: "https://www.google.com/",
  file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
  status: Promise.resolve({ status: 200 }),
  ok: "ok or fail",
};

const statsResultSuccess = {
  text: "Google",
  href: "https://www.google.com/",
  file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
};

const filteredArray = [
  {
    text: "Google",
    href: "https://www.google.com/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
    status: Promise.resolve({ status: 200 }),
    ok: "ok or fail",
  },
  {
    text: "Markdown",
    href: "https://es.wikipedia.org/wiki/Markdown",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
    status: Promise.resolve({ status: 200 }),
    ok: "ok or fail",
  },
];

const resultsNoOptios = [
  {
    text: "Google",
    href: "https://www.google.com/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
  },
  {
    text: "Markdown",
    href: "https://es.wikipedia.org/wiki/Markdown",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
  },
];

module.exports = {
  infoLinkMock,
  validateResultSuccess,
  statsResultSuccess,
  filteredArray,
  resultsNoOptios,
};
