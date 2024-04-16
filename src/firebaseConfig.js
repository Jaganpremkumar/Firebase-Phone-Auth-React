
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAKsazNR7QtBMT_ixuEO0vbdjkzdvPCjLM",
  authDomain: "phone-auth-af036.firebaseapp.com",
  projectId: "phone-auth-af036",
  storageBucket: "phone-auth-af036.appspot.com",
  messagingSenderId: "498808258128",
  appId: "1:498808258128:web:30f7d416baa54ea4175b55",
  appVerificationDisabledForTesting: true,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export default app;