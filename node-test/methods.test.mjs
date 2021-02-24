import ReactCJSDev from "react/cjs/react.development.js";
import * as ReactESMDev from "../esm/react.development.js";
import ReactCJSProd from "react/cjs/react.production.min.js";
import * as ReactESMProd from "../esm/react.production.min.js";

describe(`All methods exist`, () => {
  it("Dev version has all the same methods as CJS version", () => {
    // make sure that everything in the CJS bundle also exists in the ESM bundle
    Object.entries(ReactCJSDev).forEach(([key, value]) => {
      expect(ReactESMDev[key]).to.be.ok;
      expect(ReactCJSDev[key]).to.be.ok;
      expect(typeof value).to.equal(typeof ReactESMDev[key]);
    });
  });
  it("Prod version has all the same methods as CJS version", () => {
    // make sure that everything in the CJS bundle also exists in the ESM bundle
    Object.entries(ReactCJSProd).forEach(([key, value]) => {
      expect(ReactESMProd[key]).to.be.ok;
      expect(ReactCJSProd[key]).to.be.ok;
      expect(typeof value).to.equal(typeof ReactESMProd[key]);
    });
  });
});
