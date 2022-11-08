const foundFile = require("../lib/foundFile.js");
const axios = require("../__mocks__/axios.js");
const {
  resultsNoOptios,
  infoLinkMock,
  filteredArray,
  resultsDirectory,
} = require("./mockdata.js");

describe("foundFile", () => {
  test("Component is a function", () => {
    expect(typeof foundFile).toBe("function");
  });

  test("results without options", () => {
    return expect(
      foundFile(infoLinkMock.dir, {
        validate: undefined,
        stats: undefined,
      })
    ).toEqual(resultsNoOptios);
  });

  test("results with --stats", () => {
    return expect(
      foundFile(infoLinkMock.dir, {
        validate: undefined,
        stats: undefined,
      })
    ).toEqual(resultsNoOptios);
  });

  test("results with --validate", () => {
    return expect(foundFile(infoLinkMock.dir, infoLinkMock.options)).toEqual(
      filteredArray
    );
  });

  test("results with --stats --validate", () => {
    return expect(foundFile(infoLinkMock.dir, infoLinkMock.options)).toEqual(
      filteredArray
    );
  });

  test("results with a directory without options", () => {
    return expect(
      foundFile(
        "/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDirectory",
        {
          validate: undefined,
          stats: undefined,
        }
      )
    ).toEqual(resultsDirectory);
  });

  test("wrong path", () => {
    return expect(
      foundFile("/home/lizbeth/Laboratoria/CDMX013-md-links/test/testDir", {
        validate: undefined,
        stats: undefined,
      })
    ).toEqual([]);
  });
});
