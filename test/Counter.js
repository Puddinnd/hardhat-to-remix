const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  
  async function deploy() {
    /// Get accounts
    const [owner, otherAccount] = await ethers.getSigners();

    /// Deploy testing contracts
    const Counter = await ethers.getContractFactory("Counter");
    const requiredAmount = ethers.utils.parseEther("0.1");
    const answer = 7;
    const counter = await Counter.connect(owner).deploy(answer, { value: requiredAmount});

    return { counter, owner, otherAccount };
  }

  describe("Deployment", () => {
    it("Deploy Counter Contract", async () => {
      const { counter, owner } = await deploy();
      console.log("owner:", owner);
      expect(counter.owner() == owner);
    });
  });

});
