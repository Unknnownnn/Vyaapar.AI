// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./access-control/Auth.sol";

contract Box {
    uint256 private _tokenIdCounter;
    
    struct Company {
        string name;
        uint256 valuation;
        uint256 milestonesCompleted;
    }

    mapping(uint256 => Company) private companies;
    mapping(address => uint256) private _balances; // Track number of tokens per user
    mapping(string => uint256) private companyNameToTokenId; // NEW: Map company name to token ID

    // Events
    event CompanyCreated(uint256 tokenId, string name, uint256 valuation);
    event ValuationUpdated(uint256 tokenId, uint256 newValuation); // New event
    event MilestoneCompleted(uint256 tokenId, uint256 milestonesCompleted); // New event

    // Constructor (no admin initialization needed)
    constructor() {}

        function mintCompany(string memory name, uint256 initialValuation) public {
        require(bytes(name).length > 0, "Company name cannot be empty");
        require(companyNameToTokenId[name] == 0, "A company with this name already exists");

        uint256 newTokenId = _tokenIdCounter;
        companies[newTokenId] = Company(name, initialValuation, 0);
        companyNameToTokenId[name] = newTokenId; // Store name to token ID
        _tokenIdCounter++;

        // Update the user's token balance
        _balances[msg.sender] += 1;

        emit CompanyCreated(newTokenId, name, initialValuation);
    }

    // Update valuation
    function updateValuation(uint256 tokenId, uint256 newValuation) public {
        require(tokenId < _tokenIdCounter, "Token does not exist");
        companies[tokenId].valuation = newValuation;
        emit ValuationUpdated(tokenId, newValuation);
    }

    // Complete a milestone
    function completeMilestone(uint256 tokenId) public {
        require(tokenId < _tokenIdCounter, "Token does not exist");

        companies[tokenId].milestonesCompleted++;
        companies[tokenId].valuation += 5000;

        emit MilestoneCompleted(tokenId, companies[tokenId].milestonesCompleted);
    }

    // Retrieve company details by token ID
    function getCompanyDetails(uint256 tokenId) public view returns (string memory, uint256, uint256) {
        require(tokenId < _tokenIdCounter, "Token does not exist");
        Company memory company = companies[tokenId];
        return (company.name, company.valuation, company.milestonesCompleted);
    }

    // NEW: Retrieve token ID by company name
    function getTokenIdByName(string memory companyName) public view returns (uint256) {
        require(companyNameToTokenId[companyName] != 0, "Company not found");
        return companyNameToTokenId[companyName];
    }

    // Check the token balance of a specific address
    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }
}
