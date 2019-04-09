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
