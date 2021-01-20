import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhVUY27OU8Fyv_i_aym6xKQ_fs1ctEIGQ',
  authDomain: 'fpf-challenge-lorem-ipsum.firebaseapp.com',
  projectId: 'fpf-challenge-lorem-ipsum',
  storageBucket: 'fpf-challenge-lorem-ipsum.appspot.com',
  messagingSenderId: '84832196080',
  appId: '1:84832196080:web:7c9fc00e9c29be054eb935',
  measurementId: 'G-LQ6FD6B2TJ'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
