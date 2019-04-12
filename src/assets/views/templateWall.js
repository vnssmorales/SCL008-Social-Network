
import{postUser,showPost} from './../js/auth.js';

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
        
        const contentWall=`<main>
                          <div class="container" id="postwall">
                          <div class="row row middle-xs between-xs">
                          <div class="boxPost col-xs-12 col-sm-4 center-xs">
                          <input id="posteo" type="text" placeholder="Escribe tu post"> 
                          </div>
                          <div class="boxPost col-xs-12 col-sm-4 center-xs">
                          <button class="btn" id="post">Postear</button>
                          </div>
                          </div>
                          </div>
                          </div>
                          </main>`
                            
        containerWall.innerHTML=contentWall;
            
        const btn=containerWall.querySelector('#post');
           
            btn.addEventListener('click',()=>{    
                let description = document.getElementById('posteo').value;
               postUser(description);
                showPost();
            })

        
            
        return containerWall;
        
            
}
