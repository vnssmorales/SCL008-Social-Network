import {templateLogin} from './assets/views/templateLogin.js'
import {templateCreate} from './assets/views/templateCreate.js'
import {templateCreatePost} from './assets/views/templateCreatePost.js'
import {templateUserActive} from './assets/views/templateUserActive.js'
import {templateLogOut} from './assets/views/templateLogOut.js'

/*
crear una funcion que reciba el hast y segun el match retorne otra funcion que va a imprimir el template en el html
*/

const changeRouter = (hash) =>{
    if (hash==='#/login'){
        return showTemplate(hash);
    }
    if (hash==='#/create'){
        return showTemplate(hash);
    }
    if (hash==='#/userActive'){
        return showTemplate(hash);
    }
    if (hash==='#/createPost'){
        return showTemplate(hash);
    }
    if (hash==='#/logOut'){
        return showTemplate(hash);
    }
}
//imprimira el template en el html
const showTemplate = (hash) =>{
const router=hash.substring(2);
let containterRoot = document.getElementById("root");
containterRoot.innerHTML='';

//hacemos el match del hash utilizado y el template que quiero mostrar

switch(router){
case 'login':
containterRoot.appendChild(templateLogin());
break;
case 'create':
containterRoot.appendChild(templateCreate());
break;
case 'userActive':
containterRoot.appendChild(templateUserActive());
break;
case 'createPost':
containterRoot.appendChild(templateCreatePost());
break;
case 'logOut':
containterRoot.appendChild(templateLogOut());
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
