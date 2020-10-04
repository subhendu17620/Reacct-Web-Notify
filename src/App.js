import React, { useEffect } from "react";

import poster from "./poster.svg";
import firebase from "./firebase";
import "./App.css";

function App() {
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("token: ", token);
      })
      .catch((error) => {
        console.log("error ::", error);
      });
  }, []);

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
