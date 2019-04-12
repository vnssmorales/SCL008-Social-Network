import{createPost} from './../js/auth.js';

export const templateCreatePost =() => {
  
    const containerCreatePost = document.createElement('div');

    const contentCreatePost = `<main>
                               <p>Crear Post</p>
                               <button class="btn" id="createPost">CreatePost</button>
                               </main>`

    containerCreatePost.innerHTML = contentCreatePost;
    const btn=containerCreatePost.querySelector('#createPost');

    btn.addEventListener('click',()=>{
        console.log(createPost());
})

return containerCreatePost;
}