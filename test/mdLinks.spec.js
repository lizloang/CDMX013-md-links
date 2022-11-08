const mdLinks = require("../index.js");
const axios = require("../__mocks__/axios.js");
const {
  infoLinkMock,
  resultsNoOptios,
  infoLinkBroken,
  resultsValidate,
} = require("./mockdata.js");

describe("mdLinks", () => {
  test("Component is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  test("results without options", () => {
    return expect(
      mdLinks(infoLinkMock.dir, {
        validate: undefined,
        stats: undefined,
      })
    ).toEqual(resultsNoOptios);
  });

  test("results with --stats", () => {
    const logSpy = jest.spyOn(console, "log");
    mdLinks(infoLinkMock.dir, {
      validate: "--stats",
      stats: undefined,
    });
    expect(logSpy).toHaveBeenCalledWith("Total: ", 2);
    expect(logSpy).toHaveBeenCalledWith("Unique: ", 2);
  });

  test("results with --validate", () => {
    mdLinks(infoLinkMock.dir, infoLinkMock.options).then((result) => {
      expect(result).toEqual(resultsValidate);
    });
  });

  test("results with --stats --validate", () => {
    mdLinks(infoLinkBroken.dir, infoLinkBroken.options).then((result) => {
      expect(result).toBe(1);
    });
  });
});
