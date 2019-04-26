import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/_main.scss';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyDxUWwq9qoxe8kJSwzcYGJoCXUkAa-tIRU",
    authDomain: "charles-13af0.firebaseapp.com",
    databaseURL: "https://charles-13af0.firebaseio.com",
    projectId: "charles-13af0",
    storageBucket: "charles-13af0.appspot.com",
    messagingSenderId: "76910710690"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));



axios.defaults.baseURL = 'https://charles-13af0.firebaseio.com/';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request Interceptor', config);
    return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
    console.log('response Interceptor', res);
    return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
