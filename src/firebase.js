import * as firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyAx0K1u8YAOLsRGxKmfOjOxa0qFzCn6YkM",
  authDomain: "push-notify-test-ca75e.firebaseapp.com",
  databaseURL: "https://push-notify-test-ca75e.firebaseio.com",
  projectId: "push-notify-test-ca75e",
  storageBucket: "push-notify-test-ca75e.appspot.com",
  messagingSenderId: "1082798513019",
  appId: "1:1082798513019:web:30aea7f96350142c6d7bde",
  measurementId: "G-MPFLNR5BRH",
};
firebase.initializeApp(config);
export default firebase;
