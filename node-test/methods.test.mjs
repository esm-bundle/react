import ReactCJSDev from "react/cjs/react.development.js";
import * as ReactESMDev from "../esm/react.development.js";
import ReactCJSProd from "react/cjs/react.production.min.js";
import * as ReactESMProd from "../esm/react.production.min.js";

describe(`All methods exist`, () => {
  Object.entries(ReactCJSDev).forEach(([key, value]) => {
    it(`dev version of ESM bundle should have ${key}`, () => {
      expect(ReactESMDev[key]).to.be.ok;
      expect(ReactCJSDev[key]).to.be.ok;
      expect(typeof value).to.equal(typeof ReactESMDev[key]);
    });
  });

  Object.entries(ReactCJSProd).forEach(([key, value]) => {
    it(`Prod version of ESM bundle should have ${key}`, () => {
      expect(ReactESMProd[key]).to.be.ok;
      expect(ReactCJSProd[key]).to.be.ok;
      expect(typeof value).to.equal(typeof ReactESMProd[key]);
    });
  });
});
