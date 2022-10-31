const getLinks = require("../lib/getLinks.js");
const {
  infoLinkMock,
  validateResultSuccess,
  statsResultSuccess,
} = require("./mockdata.js");
const axios = require("../__mocks__/axios.js");

describe("statusLink", () => {
  test("Component is a function", () => {
    expect(typeof getLinks).toBe("function");
  });

  test("--validate", () => {
    return expect(
      getLinks(infoLinkMock.line, infoLinkMock.dir, infoLinkMock.options)
    ).toEqual(validateResultSuccess);
  });

  test("--stats", () => {
    return expect(
      getLinks(
        infoLinkMock.line,
        infoLinkMock.dir,
        (infoLinkMock.options.validate = "--stats")
      )
    ).toEqual(statsResultSuccess);
  });

  test("--stats --validate", () => {
    return expect(
      getLinks(infoLinkMock.line, infoLinkMock.dir, {
        validate: "--validate",
        stats: "--stats",
      })
    ).toEqual(validateResultSuccess);
  });

  test("without options", () => {
    return expect(
      getLinks(infoLinkMock.line, infoLinkMock.dir, {
        validate: undefined,
        stats: undefined,
      })
    ).toEqual(statsResultSuccess);
  });
});
