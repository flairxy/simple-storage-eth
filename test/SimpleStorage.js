const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("Should set the value of the data variable", async () => {
    const simpleStorage = await SimpleStorage.deployed();
    await simpleStorage.set("Flair");
    const result = await simpleStorage.get();
    assert(result === "Flair");
  });
});
