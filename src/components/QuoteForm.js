import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from '../utils/QuotePortal.json';
import '../App.css';


export default function QuoteForm() {
  const contractAddress = '0x478de21dca4b035c517fd834FBbbE9C5dfF9a31E'

  // create a variable here that refernces the abi content!
  const contractABI = abi.abi;



      /*
  * A function to get post on the block chain
  */
  const quotes = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const quotePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await quotePortalContract.getTotalQuotes();
        console.log(" Retrieved total quote count ...  ", count.toNumber());

        const quoteTxn = await quotePortalContract.writeQuote();
        
        console.log("Mining ...", quoteTxn);

        await quoteTxn.wait();
        console.log("Mined ---", quoteTxn);
        

        count = await quotePortalContract.getTotalQuotes();
      } else {
        console.log("Ethereum object doesn't exit!");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
        <div className="bio">
          <input type="textarea"/>
        </div>
        <div className="progress-button">
          <input type="submit"/>
        </div>
    </div>
  )
}