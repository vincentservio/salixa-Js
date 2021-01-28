index = document.getElementById("index");
const loadIndex = () => {
  loadNav();
  loadInfo();
};
document.addEventListener("DOMContentLoaded", loadIndex);

const loadNav = () => {
  nav = document.getElementById("Nav");
  nav.innerHTML = `       <a href="#">Inicio</a>
        <a href="#">Opiniones</a>
        <a href="#">Galeria</a>
        <a href="#">Mis Reservas</a>`;
};

const loadInfo = () => {
  info = document.getElementById("Info");
  info.innerHTML = `    
      
  <div class="grid-container">
  <div class="grid-item">
        Horas de Apertura
        <br />
        LUN 09:00 AM - 06:00 PM <br />
        MAR 09:00 AM - 07:10 PM <br />
        MIÉ 09:00 AM - 07:20 PM <br />
        JUE 09:00 AM - 07:35 PM <br />
        VIE 09:00 AM - 12:30 PM <br />
        SÁB Cerrado DOM Cerrado
    
      </div>

  
      <div class="grid-item">
        Contactar con nosotros
        <br />
        +18099727214
        <br />
        saelixa@gmail.com
        <br />
        Calle 47-A, , Santiago de los Caballeros, DO
        <br />
        httpswwwinstagramcomsalixamakeup.simplybook.me
      </div>
      

      
    
        <div class="grid-item">
             Salixa Makeup
         <br />• Maquillajes • Peinados • Cejas • Pestañas • Depilación
      </div>
      
      </div>



    `;
};
