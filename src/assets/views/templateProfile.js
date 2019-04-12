
export const templateProfile =()=>{

    const containerProfile = document.createElement('div');
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
      //photoUrl = user.photoURL;
      //emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
    }
    const contentProfile = `<div>
    <p>${user.uid}</p>
    <p>${name}</p>
    <p>${email}</p>
    </div>`
    containerProfile.innerHTML=contentProfile;

        return containerProfile;  
    }
