//para auntentificar desde firebase

// Crearemos dos funciones que simularan el login con google y la creacion de la cuenta

export const loginGoogle = () =>{

    return 'Login con Google ok'

}

export const createAccount = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
      });
      // [END authwithemail]
    
    document.getElementById('quickstart-sign-in').disabled = true;
  
    return 'cuenta creada ok'
}

export const userActive = () =>{

    return 'Login con usuario y contraseña ok'

}

export const createPost = () => {

    return 'escribe tu post'
}
