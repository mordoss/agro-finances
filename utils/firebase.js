// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9hDeGX6TuI6zvIwg-vUo5gI_7yU99ros',
  authDomain: 'agro-calc-21968.firebaseapp.com',
  projectId: 'agro-calc-21968',
  storageBucket: 'agro-calc-21968.appspot.com',
  messagingSenderId: '160774304346',
  appId: '1:160774304346:web:5cc3bc4089fb1a1d805e63',
  measurementId: 'G-3QK088DZJ0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
