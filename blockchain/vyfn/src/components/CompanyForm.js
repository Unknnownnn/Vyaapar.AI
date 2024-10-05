import React, { useState, useEffect } from 'react';
import './CompanyForm.css'; // Import the CSS file


function CompanyForm({ contract, account }) {
  const [name, setName] = useState('');
  const [valuation, setValuation] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const [newValuation, setNewValuation] = useState(0);
  const [companyDetails, setCompanyDetails] = useState(null);

  const mintCompany = async () => {
    try {
      const tx = await contract.mintCompany(name, valuation);
      await tx.wait();
      alert(`Company minted successfully: ${name}`);
    } catch (error) {
      console.error('Mint Error: ', error);
      alert('Failed to mint company. Check console for more information.');
    }
  };

  const updateValuation = async () => {
    try {
      const parsedTokenId = parseInt(tokenId);
      if (isNaN(parsedTokenId)) {
        alert('Invalid Token ID');
        return;
      }

      const tx = await contract.updateValuation(parsedTokenId, newValuation);
      await tx.wait();
      alert(`Valuation updated successfully for Token ID: ${tokenId}`);
    } catch (error) {
      console.error('Update Valuation Error: ', error);
      alert('Failed to update valuation. Check console for more information.');
    }
  };

  const completeMilestone = async () => {
    try {
      const parsedTokenId = parseInt(tokenId);
      if (isNaN(parsedTokenId)) {
        alert('Invalid Token ID');
        return;
      }

      const tx = await contract.completeMilestone(parsedTokenId);
      await tx.wait();
      alert(`Milestone completed for Token ID: ${tokenId}`);
    } catch (error) {
      console.error('Complete Milestone Error: ', error);
      alert('Failed to complete milestone. Check console for more information.');
    }
  };

  // Fetch company details by token ID
  const fetchCompanyDetails = async (tokenId) => {
    try {
      const parsedTokenId = parseInt(tokenId);
      if (isNaN(parsedTokenId)) {
        alert('Invalid Token ID');
        return;
      }

      const details = await contract.getCompanyDetails(parsedTokenId);
      setCompanyDetails({
        name: details[0],
        valuation: details[1].toString(),
        milestonesCompleted: details[2].toString(),
      });
    } catch (error) {
      console.error('Fetch Company Details Error: ', error);
      alert('Failed to fetch company details. Check console for more information.');
    }
  };

  return (
    <div>
      <h2>Mint Company</h2>
      <div className="maindiv">
        <input
          className='inputs'
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className='inputs'
          type="number"
          placeholder="Initial Valuation"
          value={valuation}
          onChange={e => setValuation(Number(e.target.value))}
        />
        <button onClick={mintCompany}>Mint Company</button>
      </div>

      <h2>Update Valuation / Complete Milestone</h2>
      <div className="maindiv">
        <input
          className='inputs'
          type="number"
          placeholder="Token ID"
          value={tokenId}
          onChange={e => setTokenId(e.target.value)}
        />
        <input
          className='inputs'
          type="number"
          placeholder="New Valuation"
          value={newValuation}
          onChange={e => setNewValuation(Number(e.target.value))}
        />
        <br />
        <br />
        <button onClick={updateValuation}>Update Valuation</button>
        <button onClick={completeMilestone}>Complete Milestone</button>
      </div>

      <h2>Fetch Company Details by Token ID</h2>
      <div className="maindiv">
        <input
          className='inputs'
          type="number"
          placeholder="Enter Token ID to Get Company Details"
          value={tokenId}
          onChange={e => setTokenId(e.target.value)}
        />
        <button onClick={() => fetchCompanyDetails(tokenId)}>Get Company</button>
      </div>

      {/* Display Company Details */}
      <div className='sidediv'>
        {companyDetails && (
          <div>
            <p className="item">Name: {companyDetails.name}</p>
            <p className="item">Valuation: {companyDetails.valuation}</p>
            <p className="item">Milestones Completed: {companyDetails.milestonesCompleted}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyForm;
