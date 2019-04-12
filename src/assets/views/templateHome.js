export const templateHome =()=>{

    const containerHome = document.createElement('div');

    const contentHome = `<main>
    <div class="container" id="infofoto">
    <div class="row around-xs">
    <div class="foto col-xs-10 col-sm-8 col-md-8">
    <h4>Te invitamos a usar la nueva aplicación para saber todo sobre lugares de Chile, actividades, hospedaje, y
        tips para preparar tu viaje..
        <br>
        Si es primera vez que viajas, inicia una nueva conversación dónde puedes pedir recomendaciones para tu
        primer viaje.
        <br>
        Si ya eres viajero frecuente, comparte tus historias y datos imperdibles!</h4>
    
        <img src="./img/ViajaxChile.jpg" alt="imagen chile">
        </div>
    </div>
    </div>
    </main>` 
    containerHome.innerHTML=contentHome;

        return containerHome;  
    }