export const templateHome =()=>{

    const containerHome = document.createElement('div');

    const contentHome = `<main>
    <div class="container" id="infofoto">
    <div class="row ">
    
    <h4>Te invitamos a usar la nueva aplicación para saber todo sobre lugares de Chile, actividades, hospedaje, y
        tips para preparar tu viaje.
        Si es primera vez que viajas, inicia una nueva conversación dónde puedes pedir recomendaciones para tu
        primer viaje.
        Si ya eres viajero frecuente, comparte tus historias y datos imperdibles!</h4>
    <div class="foto col-xs-3">
        <img src="./img/ViajaxChile.jpg" alt="imagen chile">
        </div>
    </div>
    </div>
    </main>` 
    containerHome.innerHTML=contentHome;

        return containerHome;  
    }