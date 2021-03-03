import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyDgEBKPRjHtSHUWLUNdCA1sb94V-SUZyGI",
  authDomain: "netflix-clone-1b9c9.firebaseapp.com",
  databaseURL: "https://netflix-clone-1b9c9.firebaseio.com",
  projectId: "netflix-clone-1b9c9",
  storageBucket: "netflix-clone-1b9c9.appspot.com",
  messagingSenderId: "247863409198",
  appId: "1:247863409198:web:51d331a295d5e3cd413dbf"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);

