const readFile = require("../lib/readFile.js");
const axios = require("../__mocks__/axios.js");
const { infoLinkMock, filteredArray } = require("./mockdata.js");

describe("readFile", () => {
  test("Component is a function", () => {
    expect(typeof readFile).toBe("function");
  });

  test("return a filtered array", () => {
    return expect(readFile(infoLinkMock.dir, infoLinkMock.options)).toEqual(
      filteredArray
    );
  });
});
