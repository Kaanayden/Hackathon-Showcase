import React from 'react';
import Hackathons from './components/Hackathons/Hackathons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hackathons
        name = "hackFS"
        submissionDate = {new Date()}
        website = "https://hackfs.com/"
        image = "https://ethglobal.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fethglobal-api-production%2Fevents%252F7w4m1%252Fbanner%252F1653563846403_HackFS.png&w=640&q=75"
        description = "The future is web3: a digital world that is censorship-resistant, decentralized, and trustless. A web where users control their own data and identity.


        HackFS is an ETHGlobal hackathon focused on building the foundation for that world. We've partnered with Protocol Labs - the organization building Filecoin and IPFS - to run an event centered on dapps, web3, decentralized storage, and everything in between.
        
        
        We're also working with partners across the Ethereum and Filecoin ecosystems to ensure that hackers have a wide variety of composable technologies to use to build their hacks."
        organizator = "EthGlobal"
        prize = "200k"    
      />
      <Hackathons
        name = "hackFS"
        submissionDate = {new Date()}
        website = "https://hackfs.com/"
        image = "https://ethglobal.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fethglobal-api-production%2Fevents%252F7w4m1%252Fbanner%252F1653563846403_HackFS.png&w=640&q=75"
        description = "The future is web3: a digital world that is censorship-resistant, decentralized, and trustless. A web where users control their own data and identity.


        HackFS is an ETHGlobal hackathon focused on building the foundation for that world. We've partnered with Protocol Labs - the organization building Filecoin and IPFS - to run an event centered on dapps, web3, decentralized storage, and everything in between.
        
        
        We're also working with partners across the Ethereum and Filecoin ecosystems to ensure that hackers have a wide variety of composable technologies to use to build their hacks."
        organizator = "EthGlobal"
        prize = "200k"    
      />
    </div>
  );
}

export default App;
