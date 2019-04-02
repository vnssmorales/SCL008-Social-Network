import{logOut} from './../js/auth.js';

export const templateLogOut =() => {
  
    const containerLogOut = document.createElement('div');

    const contentlogOut = `<p>Desloguearse</p>
                                <button id="LogOut">Desloguearse</button>`

    containerLogOut.innerHTML = contentlogOut;
    const btn=containerLogOut.querySelector('#LogOut');

    btn.addEventListener('click',()=>{
        logOut();
            
})

return containerLogOut;
}