import ReactCJSDev from "react/cjs/react.development.js";
import * as ReactESMDev from "../esm/react.development.js";
import ReactCJSProd from "react/cjs/react.production.min.js";
import * as ReactESMProd from "../esm/react.production.min.js";

describe(`All methods exist`, () => {
  it("Dev version has all the same methods as CJS version", () => {
    // make sure that everything in the ESM bundle also exists in the CJS bundle
    Object.entries(ReactESMDev, ([key, value]) => {
      expect(ReactESMDev[key]).to.be.ok;
      expect(ReactCJSDev[key]).to.be.ok;
      expect(typeof value).toBe(typeof ReactCJSDev[key]);
    });
    // make sure that everything in the CJS bundle also exists in the ESM bundle
    Object.entries(ReactCJSDev, ([key, value]) => {
      expect(ReactESMDev[key]).to.be.ok;
      expect(ReactCJSDev[key]).to.be.ok;
      expect(typeof value).toBe(typeof ReactESMDev[key]);
    });
  });
  it("Prod version has all the same methods as CJS version", () => {
    // make sure that everything in the ESM bundle also exists in the CJS bundle
    Object.entries(ReactESMProd, ([key, value]) => {
      expect(ReactESMProd[key]).to.be.ok;
      expect(ReactCJSProd[key]).to.be.ok;
      expect(typeof value).toBe(typeof ReactCJSProd[key]);
    });
    // make sure that everything in the CJS bundle also exists in the ESM bundle
    Object.entries(ReactCJSProd, ([key, value]) => {
      expect(ReactESMProd[key]).to.be.ok;
      expect(ReactCJSProd[key]).to.be.ok;
      expect(typeof value).toBe(typeof ReactESMProd[key]);
    });
  });
});
