//import{validate} from './../js/validation.js';

// Crearemos dos funciones que simularan el login con google y la creacion de la cuenta

export const loginGoogle = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}
export const logOut = () =>{
    firebase.auth().signOut().then(function() {
        console.log('Sign-out successful.')
      }).catch(function(error) {
        // An error happened.
      });
    }

export const createAccount = (email,password) => {
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('La contraseña es muy debil');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
  
    return 'cuenta creada ok'
}

export const userActive = () =>{
    let userRegistered = document.getElementById('user').value;
    let key = document.getElementById('pass').value;
    
// [START authwithemail]
firebase.auth().signInWithEmailAndPassword(userRegistered, key).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Error de password');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });
  // [END authwithemail]

    return 'Login con usuario y contraseña ok'

}

export const createPost = () => {

    return 'escribe tu post'
}
