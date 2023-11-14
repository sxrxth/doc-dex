import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDHT_dG13FUCy4tyamszcivS_JgdZcfqHw",
  authDomain: "doccumentapp-85bcd.firebaseapp.com",
  projectId: "doccumentapp-85bcd",
  storageBucket: "doccumentapp-85bcd.appspot.com",
  messagingSenderId: "1062486532016",
  appId: "1:1062486532016:web:0be1d48e607e500861c075"
};
  
  const app = initializeApp(firebaseConfig);

 export const db = getFirestore()


 
