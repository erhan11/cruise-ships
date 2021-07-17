//const { it } = require("jest-circus");
//const { describe } = require("yargs");
const Ship = require("../cruise-ships");
//const Port = require("../port.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toBe("Dover");
  });
  it("can sail", () => {
    const ship = new Ship("Dover");
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
});
});

describe("Port"), () => {
    it("has a starting port", () => {
        const ship = new Ship("Dover");
        const port = new Port("Dover");
        const ship = new Ship("port");
        expect(ship.currentPort).toBe("Dover");
        expect(port.currentPort).toBe("port")
    }
    )

