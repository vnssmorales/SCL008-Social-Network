import{createAccount} from './../js/auth.js';

/*
2- Crear la plantilla estructural del html que representa al login
Debemos importar la funcion login google
*/

//import {loginGoogle} from './../js/auth.js'

export const templateCreate =()=>{
// creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    // creamos el contenido dellogin
    const contentCreate =`<p>Crear Cuenta</p>
                            <button id="create">Create</button>`
//pasar el contenido al div
    containerCreate.innerHTML=contentCreate;
//le pido que busque el id del bton dentro del div creado
    const btn=containerCreate.querySelector('#create');
//evento del boton que llama a la autentificacion de google

    btn.addEventListener('click',()=>{
        console.log(createAccount());
    })
    return containerCreate;

}