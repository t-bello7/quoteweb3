import React, {useState,useEffect} from "react";
import "./Modal.css";

export default function Modal({ closeModal }) {
  const [openModal, setOpenModal] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("")
  // const checkIfWalletIsConnected = async () => {
  //   /* 
  //   * First make sure we have access to window.ethereum
  //    */
  //   try {
  //     const { ethereum } = window;

  //     if (!ethereum) {
  //       console.log("Make sure you have metamask!");
  //       return;
  //     } else {
  //       console.log("We have the ethereum object", ethereum);
  //     }

  //     /*
  //     * Check if we're authorized to access the user's wallet
  //     */
  //     const accounts = await ethereum.request({ method: 'eth_accounts' });
  //     if (accounts.length !== 0) {
  //       const account = accounts[0]
  //       console.log("Found an authorized account:", account);
  //       setCurrentAccount(account)
  //     } else {
  //       console.log("No authorized account found")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask");
        return;
      } else {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected", accounts[0])
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error)
    }
  }

  /* This runs our function when the page loads
*/
  // useEffect(() => {
  //   checkIfWalletIsConnected();
  // }, [])
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          {/* <button
           onClick={()=>{closeModal(false)}}
          >
            X
          </button> */}
        </div>
        <div className="title">
          <h1>Connect your wallet</h1>
        </div>
        <div className="body">
          <p>Seems you have not connected your wallet </p>
        </div>
       welcome to my first app on web3! Send a nice quote and probably win 0.0001 (fake) ethereum 
        <div className="footer">
            <div>
            <p> Connect your wallet </p>
            <button className="waveButton" onClick={connectWallet}>
                   Connect Wallet
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}

