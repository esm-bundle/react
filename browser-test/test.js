describe("@esm-bundle/react", () => {
  it("can load the ESM development bundle", () => {
    return import("/base/esm/react.development.js");
  });

  it("can load the ESM production bundle", () => {
    return import("/base/esm/react.production.min.js");
  });

  it("can load the System.register development bundle", () => {
    return System.import("/base/system/react.development.js");
  });

  it("can load the System.register production bundle", () => {
    return System.import("/base/system/react.production.min.js");
  });
});
