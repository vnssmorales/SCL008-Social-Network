/*export const templateProfile = () => {
    //creamos div que contendrá la plantilla
    const container = document.createElement('div');
    let photoProfile;
    console.log(firebase.auth().currentUser)
    if(!firebase.auth().currentUser.photoURL){   
        photoProfile="";
    } else {
        photoProfile=firebase.auth().currentUser.photoURL;
    };
    const content =`
                    <div  class="logo">
                     <img src="./img/LogoChile.png" style="width:250px" alt=""> 
                    </div>
                   
                    <div class="container" id= "profileUser">
                    <h1 id="idPerfil">${firebase.auth().currentUser.displayName}</h1> 
                    <img src=${photoProfile} alt="" id="idPerfilImg">
                    <p id="description">Información</p> `;
                    //codigo para que se vea mi pantalla
                    //$variable, para meter una variable dentro del string
                    //creo la función auth() para que aparezca el nombre del usuario que se logueo y se creo una imagen para mostar
    
                    //pasar el contenido al div
    container.innerHTML = content;     
    //solo 1 vista, la que va a tener el boton con google
    return container; 
}

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  */