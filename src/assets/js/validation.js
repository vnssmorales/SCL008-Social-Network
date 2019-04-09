import{createAccount} from './../js/auth.js'
//import{writeUserData} from './../js/auth.js'
export const validate = (userName,email,password) =>{
    if (userName ===""||email===""||password===""){
        alert('debe completar los datos');
    }
    else {
        createAccount(userName,email,password);
        //writeUserData(userName,userLastName,email)
    }
}    
