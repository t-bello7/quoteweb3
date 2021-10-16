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
            <span role="img">👋 </span>   Hey there, send a quote and probably win a fake ethereum
        </div>
        <div className="social-link">
        lets connect on socials:
        <a href="http://www.twitter.com/__tbello"> Twitter</a>
        <a href="http://www.github.com/t-bello7">Github</a>
        <a href="https://www.linkedin.com/in/tbello7">Linkedin</a>
      </div>
      </div>
        <Connect />
        <QuoteForm />
        <QuoteSection />  
   
    </div>
  );
  }