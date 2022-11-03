const foundFile = require("../lib/foundFile.js");
const axios = require("../__mocks__/axios.js");
const {
  resultsNoOptios,
  infoLinkMock,
  filteredArray,
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
});
