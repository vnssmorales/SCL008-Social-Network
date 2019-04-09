import{createAccount} from './../js/auth.js'
//import{writeUserData} from './../js/auth.js'
export const validate = (userName,email,password) =>{
    if (userName ===""||email===""||password===""){
      
        return false;
    }
    else {
        createAccount(userName,email,password);
        return true;
    }
}

export const validateEmail = (email) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }
