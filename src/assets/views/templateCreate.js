import{createAccount} from './../js/auth.js';

export const templateCreate =()=>{
// creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    // creamos el contenido del login
    const contentCreate = `<p>Crear Cuenta</p>
                            <input id="name" type="name" placeholder="ingresar nombre">
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
        createAccount();
    })
    return containerCreate;  
}

