// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAx0K1u8YAOLsRGxKmfOjOxa0qFzCn6YkM",
  authDomain: "push-notify-test-ca75e.firebaseapp.com",
  databaseURL: "https://push-notify-test-ca75e.firebaseio.com",
  projectId: "push-notify-test-ca75e",
  storageBucket: "push-notify-test-ca75e.appspot.com",
  messagingSenderId: "1082798513019",
  appId: "1:1082798513019:web:30aea7f96350142c6d7bde",
  measurementId: "G-MPFLNR5BRH",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
