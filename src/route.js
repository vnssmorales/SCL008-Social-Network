import {templateLogin} from './assets/views/templateLogin.js'
import {templateCreate} from './assets/views/templateCreate.js'
import {templateHome} from './assets/views/templateHome.js'
import {templateAbout} from './assets/views/templateAbout.js'
import {templateWall} from './assets/views/templateWall.js'


/*
crear una funcion que reciba el hast y segun el match retorne otra funcion que va a imprimir el template en el html
*/

const changeRouter = (hash) =>{
    if (hash==='#/home'){
        return showTemplate(hash);
    }
    if (hash==='#/login'){
        return showTemplate(hash);
    }
    if (hash==='#/create'){
        return showTemplate(hash);
    }
    if (hash==='#/wall'){
        return showTemplate(hash);
    }
    if (hash==='#/about'){
        return showTemplate(hash);
    }
}
//imprimira el template en el html
const showTemplate = (hash) =>{
const router=hash.substring(2); //para que saque el # y tome solo login no #login
let containterRoot = document.getElementById("root");
containterRoot.innerHTML='';

//hacemos el match del hash utilizado y el template que quiero mostrar

switch(router){
case 'home':
containterRoot.appendChild(templateHome());
break;
case 'login':
containterRoot.appendChild(templateLogin());
break;
case 'create':
containterRoot.appendChild(templateCreate());
break;
case 'wall':
containterRoot.appendChild(templateWall());
break;
case 'about':
containterRoot.appendChild(templateAbout());
break;
default:
containterRoot.innerHTML = `<p>Error 408</p>`
}
}

//inicializar las rutas para que se ejecute changeRoute() ye en su defecto showTemplate()

export const initRouter=()=>{

    window.addEventListener('load',changeRouter(window.location.hash));

    //reconoce un cambio en el hash y le pasa el nuevo hash a changRouter

    if('onhashchange'in window){
        window.onhashchange=()=>{
            changeRouter(window.location.hash);
        }
    }

}
