
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZEdsBv_8IBGSDilh6WE-BYYhNXC6rIkM",
  authDomain: "booktrade-5653c.firebaseapp.com",
  projectId: "booktrade-5653c",
  storageBucket: "booktrade-5653c.appspot.com",
  messagingSenderId: "981330904864",
  appId: "1:981330904864:web:37a1f9569d3ae260cbb945",
  measurementId: "G-L2TG74QXND"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);