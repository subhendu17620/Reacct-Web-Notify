import React from "react";
import poster from "./poster.svg";
import "./App.css";
// import OneSignal from "react-onesignal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={poster} className="App-logo" alt="logo" />
        <h1>Hi, </h1>
        <p> This is a testing App for One Signal Web Push Notification.</p>
      </header>
    </div>
  );
}

export default App;
