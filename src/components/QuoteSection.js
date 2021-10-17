import React, {  useState, useEffect, useCallback} from "react";
import '../App.css';
import { ethers } from "ethers";
import abi from '../utils/QuotePortal.json';
import _ from 'lodash';



export default function QuoteSection() {
  const [allQuotes, setAllQuotes] = useState([])
    // create a variable here that holds the contract address after you deploy
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

  // create a variable here that refernces the abi content!
  const contractABI = abi.abi;



  const getAllQuotes = useCallback(async () => {
    try {
      const { ethereum } = window;
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const quotePortalContract = new ethers.Contract(contractAddress, contractABI,signer)
      /**
       * Call the getAllQuotes method from yout Smart Contract 
       */
      const quotes = await quotePortalContract.getAllQuotes();

      /*
      *We need only address,timestamp, and message in our UI so let's pick those out
       */

              // breaking the code because i was putting the wrong address
        // let count = await quotePortalContract.getTotalQuotes();
        // console.log(" Retrieved total quote count ...  ", count.toNumber());

      let quotesCleaned = [];
      quotes.forEach(quote => {
        quotesCleaned.push({
          id: _.uniqueId(),
          address: quote.waver,
          timestamp: new Date(quote.timestamp * 1000),
          message: quote.message
        });
      });

      /*
      * Store our data in React State
       */

      setAllQuotes(quotesCleaned);

      /*
      * listen in for emitter events!
       */
      quotePortalContract.on("NewQuote", (from, timestamp, message)=>{
        console.log("NewMessage", from, timestamp, message);

        setAllQuotes( prevState => [...prevState,{
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message
        }]);
      });  

    } else {
      console.log("Ethereum object doesn't exist!")
    } 
    }
    catch (error){
      console.log(error);   
    }
  },[contractABI, contractAddress])
  useEffect(() =>{
    getAllQuotes();  
  },[getAllQuotes]);


  return (
    <div className='container' onLoad={getAllQuotes}>
      <div>
        {/* <button className="waveButton left" onClick={getAllQuotes}>
              Read Quotes
        </button> */}
        <div className='allquotes' >
            {allQuotes.map((quote)=> {
              return( 
                <div className='quotes' key={quote.id}>
                  <div> {quote.message}</div>
                 <div>  written by: {quote.address}</div>
                </div>
              )
            }
            )}
        </div>
      </div>
    </div>
  )
}