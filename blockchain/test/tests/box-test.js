const { expect } = require("chai");

describe("Box", function () {
    let Box, box, owner;

    beforeEach(async function () {
        Box = await ethers.getContractFactory("Box");
        [owner] = await ethers.getSigners();

        box = await Box.deploy();
        await box.deployed();
    });

    it("Should mint a new company token", async function () {
        await box.mintCompany("TechStartup", 100000);
        const companyDetails = await box.getCompanyDetails(0);

        expect(companyDetails[0]).to.equal("TechStartup");
        expect(companyDetails[1]).to.equal(100000);
    });

    it("Should update company valuation", async function () {
        await box.mintCompany("TechStartup", 100000);
        await box.updateValuation(0, 200000);

        const companyDetails = await box.getCompanyDetails(0);
        expect(companyDetails[1]).to.equal(200000);
    });

    it("Should complete milestone and increase valuation", async function () {
        await box.mintCompany("TechStartup", 100000);
        await box.completeMilestone(0);

        const companyDetails = await box.getCompanyDetails(0);
        expect(companyDetails[2]).to.equal(1);  // 1 milestone completed
        expect(companyDetails[1]).to.equal(105000);  // Valuation increased by 5000
    });
});
