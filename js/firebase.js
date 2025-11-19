// CONFIGURAÇÃO DO FIREBASE
  const firebaseConfig = {
    apiKey: "AIzaSyBYR4Y49OKTX3JKqTUHvXvspGAXxjzLPNs",
    authDomain: "blogedu-prof.firebaseapp.com",
    projectId: "blogedu-prof",
    storageBucket: "blogedu-prof.firebasestorage.app",
    messagingSenderId: "81468056052",
    appId: "1:81468056052:web:d2f186810395e2bed659a1"
  };

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Serviços
const auth = firebase.auth();
const db = firebase.firestore();
