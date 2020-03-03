describe("@esm-bundle/react", () => {
  it("can load the ESM development bundle", async () => {
    const React = await import("/base/esm/react.development.js");
    React.default.createElement("button");
    React.createElement("button");
  });

  it("can load the ESM production bundle", async () => {
    const React = await import("/base/esm/react.development.js");
    React.default.createElement("button");
    React.createElement("button");
  });

  it("can load the System.register development bundle", async () => {
    const React = await System.import("/base/system/react.development.js");
    React.default.createElement("button");
    React.createElement("button");
  });

  it("can load the System.register production bundle", async () => {
    const React = await System.import("/base/system/react.development.js");
    React.default.createElement("div");
    React.createElement("div");
  });
});
