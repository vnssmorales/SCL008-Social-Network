export const loginGoogle = () =>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //console.log(user.uid);
    firebase.database().ref('users/'+ user.uid).set({
      displayName: user.displayName,
      email: user.email,
    });
  } else {
    // No user is signed in.
  }
});
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

export const createAccount = (userName,email,password) => {

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

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        //console.log(user.uid);
        firebase.database().ref('users/'+ user.uid).set({
          displayName: userName,
          email: user.email,
        });
      } else {
        // No user is signed in.
      }
    
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

//recodar contraseña
export const remember = (email) => {
var auth = firebase.auth();
auth.sendPasswordResetEmail(email).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
}
