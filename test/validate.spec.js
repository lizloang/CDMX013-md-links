const validate = require("../lib/validate.js");
const axios = require("../__mocks__/axios.js");
const { infoLinkMock, resultsValidate } = require("./mockdata.js");

describe("validate", () => {
  test("Component is a function", () => {
    expect(typeof validate).toBe("function");
  });

  test("return array of promisses", () => {
    Promise.all(validate(infoLinkMock.dir, infoLinkMock.options)).then(
      (result) => {
        expect(result).toEqual(resultsValidate);
      }
    );
  });
});
