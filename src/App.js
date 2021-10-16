import React from "react";
import './App.css';
import Connect from  './components/Connect';
import QuoteForm from './components/QuoteForm';
import QuoteSection from './components/QuoteSection';


export default function App() {

  return (
    <div className="mainContainer">
      <div className='container'>
        <div className="header">
            {/* <span role="img"></span>   Hey there, send a quote and probably win a fake ethereum */}
            👋 Hey there, I'm Tomi a software developer currently building with Python and Javascipt <br/>
            Check out my first app on web3.
        </div>
      <div className="social-link">
        connect with me on Twitter:
        <a href="http://www.twitter.com/__tbello">__tbello</a>
      </div>
      </div>
        <Connect />
        <QuoteForm />
        <QuoteSection />  
   
    </div>
  );
  }