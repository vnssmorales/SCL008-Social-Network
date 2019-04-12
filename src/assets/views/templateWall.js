
import{postUser} from './../js/auth.js';

export const templateWall =()=>{
    // let userName = showuser();
    // console.log(showuser());
    // const containerLogo = document.getElementById('logo2');

    // containerLogo.innerHTML=contentLogo;
    // const btn=containerLogo.querySelector('#logOut');
    // btn.addEventListener('click',()=>{
    // logOut();
    // window.location.hash='#/home';
       // })
    // creamos div que contendrá la plantilla
        const containerWall = document.createElement('div');
        
        const contentWall=`<div id="postwall" class="boxPost">
         <input id="posteo" type="text" placeholder="Escribe tu post"> </div>
                     <div><button class="btnpost" id="post">Postear</button>
                            </div>`
            containerWall.innerHTML=contentWall;
            
            const btn=containerWall.querySelector('#post');
           
            btn.addEventListener('click',()=>{    
                let description = document.getElementById('posteo').value;
               postUser(description);
            })
            return containerWall;
        
            
}
