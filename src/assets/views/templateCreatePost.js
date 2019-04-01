import{createPost} from './../js/auth.js';

export const templateCreatePost =() => {
  
    const containerCreatePost = document.createElement('div');

    const contentCreatePost = `<p>Crear Post</p>
                                <button id="createPost">CreatePost</button>`

    containerCreatePost.innerHTML = contentCreatePost;
    const btn=containerCreatePost.querySelector('#createPost');

    btn.addEventListener('click',()=>{
        console.log(createPost());
})

return containerCreatePost;
}