/*
2- Crear la plantilla estructural del html que representa al login
Debemos importar la funcion login google
*/

import {loginGoogle} from '../js/auth.js'

export const templateLogin =()=>{
// creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    // creamos el contenido dellogin
    const contentLogin = `<button>Login con Google</button>
                            <button id="login">Loguealo</button>`
//pasar el contenido al div
    containerLogin.innerHTML=contentLogin;
//le pido que busque el id del bton dentro del div creado
    const btn=containerLogin.querySelector('#login');
//evento del boton que llama a la autentificacion de google

    btn.addEventListener('click',()=>{
        console.log(loginGoogle());
    })
    return containerLogin;

}