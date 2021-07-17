const { it } = require("jest-circus");
const { default: expectationResultFactory } = require("jest-jasmine2/build/expectationResultFactory");
const { object } = require("webidl-conversions");
const { describe } = require("yargs");
//const Port = require("../cruise-ships");
const Port = require("../port")

describe("Port", () => {
it("can be intantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
});
});

