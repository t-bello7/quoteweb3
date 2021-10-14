import React from "react";
import './App.css';
import Connect from  './components/Connect';
import QuoteForm from './components/QuoteForm';
import QuoteSection from './components/QuoteSection';


export default function App() {
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
            <span role="img">👋 </span> Hey there!
        </div>
        <section>
          <QuoteForm />
        </section>
        <section>
          <QuoteSection />
        </section>
      </div>
        <section>
          <Connect />
        </section>
    </div>
  );
  }