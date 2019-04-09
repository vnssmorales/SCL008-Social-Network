import {loginGoogle,userActive} from '../js/auth.js'



export const templateLogin =()=>{
// creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    // creamos el contenido del login
    const contentLogin = `<p>Ingresa con tu cuenta Google</p>
                         <button class="btn" id="login">Link a Google</button>
                          <br></br>
                          <div class="input"> <input id="user" type="user" placeholder="ingresa usuario"> </div>
                          <div class="input"> <input id="pass" type="password" placeholder="ingresar contraseña"> </div>
                          <div class="btn-ingresar"> <button class="btn" id="userActive">Ingresar</button>`
//pasar el contenido al div
    containerLogin.innerHTML=contentLogin;
//le pido que busque el id del bton dentro del div creado
    const btn=containerLogin.querySelector('#login');
    const btn2=containerLogin.querySelector('#userActive');
//evento del boton que llama a la autentificacion de google

    btn.addEventListener('click',()=>{    
        loginGoogle();
       

    })

    btn2.addEventListener('click',()=>{
        //console.log('prueba')
         userActive();
     })

    return containerLogin;
}


