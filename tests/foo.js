import * as chai from "chai";
import * as sinon from "sinon";
const expect = chai.expect;
const assert = chai.assert;
chai.use(require("sinon-chai"));

describe("pow", function() {

  it("returns pow", function() {
    assert.equal(Math.pow(2,3), 8);
  });

});
