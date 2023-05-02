import firebase from "firebase/app";
import "firebase/auth";


export const auth  = firebase.initializeApp( {
    apiKey: "AIzaSyCFC6cmmLPAsVJO-VphhPv_fvDsV4nTMAY",
    authDomain: "xenochat-4e1a4.firebaseapp.com",
    projectId: "xenochat-4e1a4",
    storageBucket: "xenochat-4e1a4.appspot.com",
    messagingSenderId: "494058519063",
    appId:"1:494058519063:web:c106f9aa1df6b39039fa52"
  }).auth();