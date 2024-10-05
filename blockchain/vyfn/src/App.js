import { BrowserProvider, Contract } from 'ethers'; // Use BrowserProvider instead of Web3Provider in ethers v6.x
import React, { useEffect, useState } from 'react';
import CompanyForm from './components/CompanyForm';
import BoxABI from './Box.json'; // Contract ABI
import './App.css';

const contractAddress = 'YOUR_DEPLOYED_ADDRESS';

function App() {
    const [account, setAccount] = useState(null);
    const [boxContract, setBoxContract] = useState(null);
    const [provider, setProvider] = useState(null);
    
  
    useEffect(() => {
      const connectWallet = async () => {
        if (window.ethereum) {
          // Create the provider from MetaMask's injected provider
          const provider = new BrowserProvider(window.ethereum);
          setProvider(provider);
  
          // Request user's MetaMask account
          const accounts = await provider.send('eth_requestAccounts', []);
          setAccount(accounts[0]);
  
          // Create a signer
          const signer = await provider.getSigner();
  
          // Initialize the contract with the signer
          const contract = new Contract(contractAddress, BoxABI.abi, signer);
          setBoxContract(contract);
        } else {
          alert('MetaMask not detected!');
        }
      };
  
      connectWallet();
    }, []);
  
    if (!account) {
      return <div>Please connect your MetaMask wallet!</div>;
    }
  
    return (
      <div>
        <h1>Company dApp</h1>
        <p>Connected Account: {account}</p>
        <CompanyForm contract={boxContract} />
      </div>
    );
  }
  
  export default App;