export const validate = (userName,email,password) =>{
    if (userName ===""||email===""||password===""){
        return false;
    }
    else {
        return true;
    }
}

export const validateEmail = (email) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }
  
export const validateUserActive = (nameActive,passActive) =>{
    if (nameActive===""||passActive===""){
        return false;
    }
    else {
        return true;
    }
}
