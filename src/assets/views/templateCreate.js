//import{createAccount} from './../js/auth.js';
import {validate} from './../js/validation.js'

export const templateCreate =()=>{
// creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    // creamos el contenido del login
    const contentCreate = `<p>Crear Cuenta</p>
                            <input id="name" type="name" placeholder="Nombre">
                            <input id="lastname" type="lastname" placeholder="ingresar apellido">
                            <input id="email" type="email" placeholder="ingresar email">
                            <input id="password" type="password" placeholder="ingresar contraseña">
                            <button id="create">Crear cuenta</button>`
//pasar el contenido al div

    containerCreate.innerHTML=contentCreate;
//le pido que busque el id del bton dentro del div creado
    const btn=containerCreate.querySelector('#create');
//evento del boton que llama a la autentificacion de google

    btn.addEventListener('click',()=>{
    let userName = document.getElementById('name').value;
    let userLastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    validate(userName,userLastName,email,password);
    })
    return containerCreate;  
}

