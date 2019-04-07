//inicializacion de firebase
//llamado a las rutas
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAHGUb-hhejq92Rmf3TwkuU0rgtPLeTZs",
    authDomain: "viajeros-chile.firebaseapp.com",
    databaseURL: "https://viajeros-chile.firebaseio.com",
    projectId: "viajeros-chile",
    storageBucket: "viajeros-chile.appspot.com",
    messagingSenderId: "1071346395262"
  };
  firebase.initializeApp(config);

 //Get a reference to the database service
 var database = firebase.database();

import {initRouter} from './route.js';

const init =()=>{
    initRouter();
}
window.addEventListener('load', init);




