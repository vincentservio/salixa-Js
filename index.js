index = document.getElementById("index");
const loadIndex = () => {
  loadNav();
  loadHeader();
  loadInfo();
};
document.addEventListener("DOMContentLoaded", loadIndex);

const loadNav = () => {
  nav = document.getElementById("Nav");
  nav.innerHTML = `       <a href="#" id="homeTab">Inicio</a>
        <a href="#" id="commentsTab">Opiniones</a>
        <a href="#" id="galleryTab">Galeria</a>
        <a href="#" id="reserveTab">Mis Reservas</a>`;
  clickLinks();
};

const loadHeader = () => {
  const header = document.getElementById("Header");
  header.innerHTML = `
     
    <img
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*"
      alt="header"
    />
    <img />
  `;
};

const loadInfo = () => {
  clearClicks();
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
  clickLinks();
};
