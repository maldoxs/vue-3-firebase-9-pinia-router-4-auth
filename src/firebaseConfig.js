// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //inicializamos la app
import { getAuth } from "firebase/auth"; //Autenticacion

// configuracion para asociar nuestro proyecto del front-end con el back
const firebaseConfig = {
    apiKey: "AIzaSyCNrLdWFAJHr4_xiMQZ7K6xqrvY70ejhv0",
    authDomain: "vue-3-2023-418a5.firebaseapp.com",
    projectId: "vue-3-2023-418a5",
    storageBucket: "vue-3-2023-418a5.appspot.com",
    messagingSenderId: "126349320447",
    appId: "1:126349320447:web:f00f4264244222ae79acca",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth(); //guardamos el metodo getAuth() en la constante auth

export { auth };
