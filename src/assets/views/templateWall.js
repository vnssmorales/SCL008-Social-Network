import{logOut} from './../js/auth.js';
export const templateLogOut =() => {
    const containerLogOut = document.createElement('div');
    const contentlogOut = `<p>Desloguearse</p>
                                <button id="logOut">Desloguearse</button>`
    containerLogOut.innerHTML = contentlogOut;
    const btn=containerLogOut.querySelector('#logOut');
    btn.addEventListener('click',()=>{
        logOut();
            
})
//hacer q returne al HOme¿?
//return containerLogOut;
}


export const templateProfile =()=>{
    const containerProfile = document.createElement('div');
    //aqui poner el nombre y foto del perfil de usuario
    //const contentProfile = ``
    containerProfile.innerHTML=contentProfile;

    return containerProfile;  
}

