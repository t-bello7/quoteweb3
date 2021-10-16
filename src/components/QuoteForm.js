import React, { useState,useRef} from "react";
import { ethers } from "ethers";
import abi from '../utils/QuotePortal.json';
import '../App.css';


export default function QuoteForm() {
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const formInput = useRef(null);
  const form = useRef(null);
  const [quote,setQuote] = useState('');

  // create a variable here that refernces the abi content!
  const contractABI = abi.abi;
  const handleQuoteChange = (e) => {
      setQuote(e.target.value)
  }

  const enableNewline = (e) => {
    if (e.which === 13){
      e.preventDefault(); 
     }
  }

  /*
  * A function to get post on the block chain
  */
  const writeQuotes = async (e) => {
    e.preventDefault()
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const quotePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
  
        const quoteTxn = await quotePortalContract.writeQuote(quote, {gasLimit: 300000});
        console.log("Mining ...", quoteTxn);

        await quoteTxn.wait();
        console.log("Mined ---", quoteTxn);
        

        // count = await quotePortalContract.getTotalQuotes();
      } else {
        console.log("Ethereum object doesn't exit!");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <form className="quote__form" onSubmit={writeQuotes} ref={form}>
        <div className="form__field">
          <input type="textarea" name="quote" id='form__input' placeholder="Send a quote and probably win 0.0001 ethers..." ref={formInput} onKeyPressCapture={enableNewline}  autoComplete="off" onChange={handleQuoteChange}/>
        </div>
        <div className="progress-button">
          <button className="waveButton">Submit</button>
        </div>
      </form>
    </div>
  )
}