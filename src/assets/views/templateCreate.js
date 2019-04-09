import {validate} from './../js/validation.js'

export const templateCreate =()=>{

    const containerCreate = document.createElement('div');

    const contentCreate = `<p>Crear Cuenta</p>
                            <div class = "container">
                            <div class="input">  <input id="name" type="name" placeholder="Nombre y Apellido"> </div>
                            <div class="input">  <input id="email" type="email" placeholder="ingresar email"> </div>
                            <div class="input">  <input id="password" type="password" placeholder="ingresar contraseña"> </div>
                            <div class="btn-create"> <button class="btn" id="create">Crear tu cuenta en Walk Chile</button> </div>
                            </div>`
                            

    containerCreate.innerHTML=contentCreate;

    const btn=containerCreate.querySelector('#create');


    btn.addEventListener('click',()=>{
    let userName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    validate(userName,email,password);
    })
    return containerCreate;  
}