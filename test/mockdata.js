const infoLinkMock = {
  line: "[Google](https://www.google.com/)",
  dir: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
  options: { validate: "--validate", stats: undefined },
};

const infoLinkBroken = {
  dir: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testBroken.md",
  options: { validate: "--validate", stats: "--stats" },
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

const resultsValidate = [
  {
    text: "Google",
    href: "https://www.google.com/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
    status: 200,
    ok: "ok",
  },
  {
    text: "Markdown",
    href: "https://es.wikipedia.org/wiki/Markdown",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/test.md",
    status: 200,
    ok: "ok",
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

const resultsDirectory = [
  {
    text: "Markdown",
    href: "https://es.wikipedia.org/wiki/Markdown",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/anotherDirectory/hello.md",
  },
  {
    text: "error",
    href: "https://otra-cosa.net/algun-doc.html",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/anotherDirectory/hello.md",
  },
  {
    text: "node",
    href: "https://nodejs.org/es/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/anotherDirectory/hello.md",
  },
  {
    text: "duplica de node",
    href: "https://nodejs.org/es/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/anotherDirectory/hello.md",
  },
  {
    text: "Manual Mocks con Jest - Documentación oficial",
    href: "https://jestjs.io/docs/es-ES/manual-mocks",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/anotherDirectory/hello.md",
  },
  {
    text: "Google",
    href: "https://www.google.com/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/test.md",
  },
  {
    text: "Markdown",
    href: "https://es.wikipedia.org/wiki/Markdown",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/test.md",
  },
  {
    text: "Error",
    href: "https://responseerror.com/",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/testBroken.md",
  },
  {
    text: "Markdown",
    href: "https://es.wikipedia.org/wiki/Markdown",
    file: "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory/testBroken.md",
  },
];

module.exports = {
  infoLinkMock,
  validateResultSuccess,
  statsResultSuccess,
  filteredArray,
  resultsNoOptios,
  resultsValidate,
  infoLinkBroken,
  resultsDirectory,
};
