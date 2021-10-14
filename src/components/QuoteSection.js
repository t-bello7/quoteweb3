import React, { useEffect, useState } from "react";
import '../App.css';
import { ethers } from "ethers";
import abi from '../utils/QuotePortal.json';



export default function QuoteSection() {
  const [allQuotes, setAllQuotes] = useState([])
    // create a variable here that holds the contract address after you deploy
  const contractAddress = '0x478de21dca4b035c517fd834FBbbE9C5dfF9a31E'

  // create a variable here that refernces the abi content!
  const contractABI = abi.abi;

  const getAllQuotes = async () => {
    try {
      const { ethereum } = window;
      
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const quotePortalContract = new ethers.Contract(contractAddress, contractABI)
      
      /**
       * Call the getAllQuotes method from yout Smart Contract 
       */

      const quotes = await quotePortalContract.getAllWaves();

      /*
      *We need only address,timestamp, and message in our UI so let's pick those out
       */

      let quotesCleaned = [];
      quotes.forEach(quote => {
        quotesCleaned.push({
          address: quote.waver,
          timestamp: new Date(quote.timestamp * 1000),
          message: quote.message
        });
      });

      /*
      * Store our data in React State
       */

      setAllQuotes(quotesCleaned);
    } else {
      console.log("Ethereum object doesn't exist!")
    } 
    }
    catch (error){
      console.log(error);
    
  }
  }
  return (
    <div className='container '>
              <div className="bio">
          Holla Devs Drop a Quote or Funny gif
        </div>
        <div className="progress-button">
          <span className="loading-text">Loading</span>
          <button className="download-button" onClick={getAllQuotes}>
            <span className="button-text">Retrieve Quotes</span>
          </button>
          <span className="percentage">0%</span>
        </div>
    </div>
  )
}