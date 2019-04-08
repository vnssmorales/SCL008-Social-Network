
export const templateAbout =()=>{

    const containerAbout = document.createElement('div');

    const contentAbout = `<div class="container" id="infofoto">
    <p>En Mantenciòn xD</p>
        <img src="./img/mano-desierto.jpg" alt="mano-desierto">
    </div>`
    containerAbout.innerHTML=contentAbout;

        return containerAbout;  
    }
