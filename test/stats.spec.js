const stats = require("../lib/stats.js");
const axios = require("../__mocks__/axios.js");
const { infoLinkMock, resultsValidate } = require("./mockdata.js");

describe("stats", () => {
  test("Component is a function", () => {
    expect(typeof stats).toBe("function");
  });

  test('console.log the stats"', () => {
    const logSpy = jest.spyOn(console, "log");

    stats(infoLinkMock.dir, infoLinkMock.options);
    expect(logSpy).toHaveBeenCalledWith("Total: ", 2);
    expect(logSpy).toHaveBeenCalledWith("Unique: ", 2);
  });
});
