import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBMi4xKbrPj963ajAHnk4Q0h28DQTB3Iog',
  authDomain: 'demoproject-ca6ee.firebaseapp.com',
  databaseURL: 'https://demoproject-ca6ee.firebaseio.com',
  projectId: 'demoproject-ca6ee',
  storageBucket: 'demoproject-ca6ee.appspot.com',
  messagingSenderId: '503275483114',
};

const fire = firebase.initializeApp(config);

export default fire;
