import {loginGoogle,userActive,remember} from '../js/auth.js'
import {validateUserActive} from '../js/validation.js'

export const templateLogin =()=>{
// creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    // creamos el contenido del login
    const contentLogin = ` <div class="container" id="loginreg">
                          <p>Ingresa con tu cuenta Google</p>
                          <div class="btn-login"> <button class="btn" id="login">Link a Google</button> </div>
                          <br></br>
                          <div class="input"> <input id="user" type="user" placeholder="ingresa usuario"> 
                          <p class="error" id="errorNameActive"> </div>
                          <div class="input"> <input id="pass" type="password" placeholder="ingresar contraseña">
                          <p class="error" id="errorPassActive"></p> </div>
                          <div class="btn-ingresar"> <button class="btn" id="userActive">Ingresar</button> 
                          <div class="btn-recordar"> <button class="btn" id="userremember">Recordar contraseña</button>
                          </div>`
//pasar el contenido al div
    containerLogin.innerHTML=contentLogin;
//le pido que busque el id del bton dentro del div creado
    const btn=containerLogin.querySelector('#login');
    const btn2=containerLogin.querySelector('#userActive');
    const btn3=containerLogin.querySelector('#userremember');
//evento del boton que llama a la autentificacion de google

    btn.addEventListener('click',()=>{    
        loginGoogle(); 
    })

    btn2.addEventListener('click',()=>{
        let nameActive = document.getElementById('user').value;
        let passActive = document.getElementById('pass').value;
        if (nameActive ==="") {
            document.getElementById('errorNameActive').innerHTML =`Debe ingresar un email ya registrado`
        }
        if (passActive ==="") {
            document.getElementById('errorPassActive').innerHTML = `Por favor ingrese la contraseña`
        }
        if (validateUserActive(nameActive,passActive)) {
            userActive(nameActive,passActive);
            window.location.hash='#/wall';
        }   
         
     })

    btn3.addEventListener('click',()=>{
        let email = document.getElementById('user').value;
        remember(email);
    } )

    return containerLogin;
}


