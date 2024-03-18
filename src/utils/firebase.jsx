import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyABhKPoxYQCPbLP3h0J3qB-7-hpJRIibp4",
    authDomain: "hao---portfolio-personal-web.firebaseapp.com",
    projectId: "hao---portfolio-personal-web",
    storageBucket: "hao---portfolio-personal-web.appspot.com",
    messagingSenderId: "239868172522",
    appId: "1:239868172522:web:001fc75bcd7b33502ddf93"
};

firebase.initializeApp(firebaseConfig)

export default firebase;