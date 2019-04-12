import {showuser} from './../js/auth.js'

import{logOut} from './../js/auth.js';

export const templateProfile =()=>{
    showuser();
    const containerLogo = document.getElementById('logo2');
    const contentLogo= `<img src="./img/LogoChile.png" class="logo2" />
                        <div id="nameuser">${name}</div>
                        <p>Desloguearse</p>     
                        <button class="btn" id="logOut">Desloguearse</button>`
    containerLogo.innerHTML=contentLogo;
    const btn=containerLogo.querySelector('#logOut');
    btn.addEventListener('click',()=>{
                logOut();window.location.hash='#/home';
                    
        })
     
}
export const templateWall =()=>{
    templateProfile();
    // creamos div que contendrá la plantilla
        const containerWall = document.createElement('div');
        
        const contentWall=`<div id= postwall class="boxPost">
                            <input type="checkbox" id="cbox1" value="first_checkbox">Solicitar Recomendación</input><br>
                            <input type="checkbox" id="cbox2" value="second_checkbox">Publicar una Recomendación</input>

//                             </div><div class="input"> <input id="post" type="text" placeholder="Escribe tu post"> </div>
                            
                            <select id="regiones">
                            <option value="I">I Tarapacá</option>
                            <option value="II">II Antofagasta</option>
                            <option value="III">III Atacama</option>
                            <option value="IV">IV Coquimbo</option>
                            <option value="V">V Valparaiso</option>
                            <option value="VI">VI O'Higgins</option>
                            <option value="VII">VII Del Maule</option>
                            <option value="VIII">VIII del BíoBío</option>
                            <option value="IX">IX La Araucanía</option>
                            <option value="X">X Los Lagos</option>
                            <option value="XI">XI Aysen</option>
                            <option value="XII">XII Magallanes</option>
                            <option value="XIII">XIII R.Metropolitana</option>
                            <option value="XIV">XIV de Los Ríos</option>
                            <option value="XV">XV de Arica P.</option>
                            <option value="XVI">XVI de Ñuble</option>
                            </select>
                            <button class="btnpost" id="post">Postear</button>
                            </div>`
            containerWall.innerHTML=contentWall;
            return containerWall;
}
