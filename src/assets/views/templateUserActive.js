import{userActive} from './../js/auth.js';

/*
2- Crear la plantilla estructural del html que representa al login
Debemos importar la funcion login google
*/

//import {loginGoogle} from './../js/auth.js'

export const templateUserActive =()=>{
// creamos div que contendrá la plantilla
    const containerUserActive = document.createElement('div');
    // creamos el contenido del login
    const contentUserActive = `<p>Ingresar</p>
                            <input id="user" type="user" placeholder="ingresa usuario">
                            <input id="pass" type="pass" placeholder="ingresar contraseña">
                            <button id="userActive">Ingresar</button>`
//pasar el contenido al div
    containerUserActive.innerHTML=contentUserActive;
//le pido que busque el id del bton dentro del div creado
    const btn=containerUserActive.querySelector('#userActive');
//evento del boton que llama a la autentificacion de google

    btn.addEventListener('click',()=>{
       console.log('prueba')
        //userActive();
    })
    return containerUserActive;

    
}