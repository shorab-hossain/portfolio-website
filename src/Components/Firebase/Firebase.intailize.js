import { initializeApp } from "firebase/app";
import firebaseConfig from './FirebaseConfig';

const intailizeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default intailizeAuthentication;