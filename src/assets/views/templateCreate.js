import {validate, validateEmail} from './../js/validation.js'
import{createAccount} from './../js/auth.js'
export const templateCreate =()=>{

    const containerCreate = document.createElement('div');

    const contentCreate = ` <main>
                        <div class = "createAccount">
                        <h3>Crear Cuenta</h3>
                         <div class = "container" id="registry">
                         <div class="row middle-xs between-xs">
                         <div class="accountCreate col-xs-12 col-sm-8 center-xs">
                            <div class="input">  <input id="name" type="name" placeholder="Nombre y Apellido"> 
                            <p class="error" id="errorname"></p>
                            </div>
                            <div class="input">  <input id="email" type="email" placeholder="ingresar email"> 
                            <p class="error" id="erroremail"></p>
                            </div>
                            <div class="input">  <input id="password" type="password" placeholder="ingresar contraseña">
                            <p class="error" id="errorpass"></p>
                            </div>
                            </div>
                            <div class="accountCreate col-xs-12 col-sm-4 center-xs">
                            <div class="btn-create"> <button class="btn" id="create">Crear tu cuenta en Walk Chile</button> </div>
                           
                            </div>
                          </div>
                         </div>
                        </div>
                            </main>`
                            

    containerCreate.innerHTML=contentCreate;

    const btn=containerCreate.querySelector('#create');


    btn.addEventListener('click',()=>{
    let userName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(userName ===""){
        document.getElementById('errorname').innerHTML=`debe ingresar nombre`;
    }
    if(email ===""||!validateEmail(email)){
        document.getElementById('erroremail').innerHTML=`debe ingresar email valido`;
    }
    if(password ===""){
        document.getElementById('errorpass').innerHTML=`debe ingresar constraseña`;
    }
    if(validate(userName,email,password)){
    createAccount(userName,email,password);
}
    })


    return containerCreate;  
}