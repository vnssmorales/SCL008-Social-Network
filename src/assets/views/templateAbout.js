
export const templateAbout =()=>{

    const containerAbout = document.createElement('div');

    const contentAbout = ` <main>
    <div class="container" id="infofoto">
    <div class="row around-xs">
    <div class="foto col-xs-10 col-sm-8 col-md-8">
    <p>En Mantenciòn xD</p>
        <img src="./img/mano-desierto.jpg" alt="mano-desierto">
        </div>
        </div>
    </div>
    </main>`
    containerAbout.innerHTML=contentAbout;

        return containerAbout;  
    }
