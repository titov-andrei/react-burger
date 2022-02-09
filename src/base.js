import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCT5QlnziLmoRJQ-2TGVb4e-M7yc0eF2gc",
  authDomain: "very-hot-burgers-768f4.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-768f4-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
