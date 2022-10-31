const statusLink = require("../lib/statusLink.js");
const axios = require("../__mocks__/axios.js");

describe("statusLink", () => {
  test("Component is a function", () => {
    expect(typeof statusLink).toBe("function");
  });

  test("status valid link", () => {
    return statusLink("https://www.google.com/").then((result) => {
      expect(result.status).toBe(200);
    });
  });

  test("error unvalid link", () => {
    return statusLink("linkerror.com").then((result) => {
      expect(result).toBe("error");
    });
  });

  test("error response link", () => {
    return statusLink("https://responseerror.com/").then((result) => {
      expect(result).toBe(400);
    });
  });

  test("error request link", () => {
    return statusLink("https://requesterror.com/").then((result) => {
      expect(result).toBe("error request");
    });
  });
});
