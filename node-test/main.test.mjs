import DevReact, {
  useState as devUseState,
  useCallback as devUseCallback,
  createElement as devCreateElement
} from "../esm/react.development.js";
import ProdReact, {
  useState as prodUseState,
  useCallback as prodUseCallback,
  createElement as prodCreateElement
} from "../esm/react.production.min.js";

describe(`React`, () => {
  it("Can load dev version of React", () => {
    expect(DevReact).to.be.ok;
    expect(devUseState).to.be.ok;
    expect(devUseCallback).to.be.ok;
    expect(DevReact.createElement("div")).to.be.ok;
    expect(devCreateElement("div")).to.be.ok;
  });

  it("Can load prod version of React", () => {
    expect(ProdReact).to.be.ok;
    expect(prodUseState).to.be.ok;
    expect(prodUseCallback).to.be.ok;
    expect(ProdReact.createElement("div")).to.be.ok;
    expect(prodCreateElement("div")).to.be.ok;
  });
});
