//import{logOut} from './../js/auth.js';
//import{wall} from './../js/auth.js';
//export const templateLogOut =() => {
 //   const containerLogOut = document.createElement('div');
 // const contentlogOut = `<p>Desloguearse</p>
  //                         <button class="btn" id="logOut">Desloguearse</button>`
 //   containerLogOut.innerHTML = contentlogOut;
 //   const btn=containerLogOut.querySelector('#logOut');
 //   btn.addEventListener('click',()=>{
//        logOut();
            
//})
//hacer q returne al HOme¿?
//return containerLogOut;
//}


//export const templateProfile =()=>{
//    const containerProfile = document.createElement('div');
    //aqui poner el nombre y foto del perfil de usuario
    //const contentProfile = ``
 //   containerProfile.innerHTML=contentProfile;

 //   return containerProfile;  
//}
export const templateWall =()=>{
    // creamos div que contendrá la plantilla
        const containerWall = document.createElement('div');
        
        const contentWall=`<div id= postwall class="boxPost">
                            <input type="checkbox" id="cbox1" value="first_checkbox">Solicitar Recomendación</input><br>
                            <input type="checkbox" id="cbox2" value="second_checkbox">Publicar una Recomendación</input>

                            </div><div class="input"> <input id="post" type="text" placeholder="Escribe tu post"> </div>
                            
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
