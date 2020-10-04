import React from "react";
import poster from "./poster.svg";
import "./App.css";
import OneSignal from "react-onesignal";

function App() {
  const options = {
    allowLocalhostAsSecureOrigin: true,
    requiresUserPrivacyConsent: true,
    persistNotification: true,
    autoResubscribe: true,
    autoRegister: true,
    notificationClickHandlerMatch: "string",
    notificationClickHandlerAction: "string",
    notifyButton: {
      enable: true,
      size: "large",
      position: "bottom-right",
      showCredit: true,
      prenotify: true,
      theme: "default",
      offset: {
        bottom: "hi",
        right: "hello",
        left: "hello",
      },
    },
  };
  OneSignal.initialize("2fb754f3-e6ce-4ba7-a89e-f16aa62ad3b9", options);
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
