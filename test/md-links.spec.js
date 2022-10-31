const statusLink = require("../lib/statusLink.js");
const axios = require("../__mocks__/axios.js");
describe("statusLink", () => {
  /*it('should...', () => {
    console.log('FIX ME!');
  });*/
  test("status valid link", () => {
    return statusLink("https://www.google.com/").then((result) => {
      expect(result.status).toBe(200);
    });
  });

  test("unvalid link", () => {
    return statusLink("noexiste.com").then((result) => {
      expect(result).toBe("error");
    });
  });
});
