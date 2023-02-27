import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
  apiKey: "AIzaSyCy4lok0ULQsGdD2Ie2IGvxUxlO5lDksAs",
  authDomain: "projeto-78-1351c.firebaseapp.com",
  projectId: "projeto-78-1351c",
  storageBucket: "projeto-78-1351c.appspot.com",
  messagingSenderId: "716022343526",
  appId: "1:716022343526:web:e922b37a9c03762a324aa7"
};

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
