<template>
  <footer class="Footer" id="footer">
    <div class="footer1">
      <img class="imgLogoFooter" src="../assets/img/LogoBotana.webp" />
      <p class="pFooter1">
        ¡Haz tu pedido ahora y disfruta el sabor de nuestras empanadas
        calientes! 🥟
      </p>
    </div>
    <div class="footer2">
      <h1 class="h1Footer">Visitanos en nuestras redes!</h1>
      <div class="divFooterLogos">
        <a
          href="https://www.instagram.com/botana_rd?utm_source=ig_web_button_share_sheet&igsh=dmpxM2w5MTdoazR4"
        >
          <img class="imgsLogos" src="../assets/svg/instagramWhite.svg" />
        </a>
        <a
          href="https://www.facebook.com/BotanaRD/?ref=pl_edit_xav_ig_profile_page_web#"
        >
          <img class="imgsLogos" src="../assets/svg/FacebookWhite.svg" />
        </a>
        <a href="https://wa.me/8295191646">
          <img class="imgsLogos" src="../assets/svg/whatsappWhite.svg" />
        </a>
        <img class="imgsLogos" src="../assets/svg/PedidosYaLogo.svg" />
      </div>
      <p class="pFooter2">©Botana. Sin derecho de autor</p>
    </div>
    <div class="footer3">
      <h1 class="h1Footer2">Mapa del sitio</h1>
      <ul class="ulFooter">
        <li class="liFooter"><a class="navLink" href="/">Inicio</a></li>
        <li class="liFooter"><a class="navLink" href="#menu">Menú</a></li>
        <li class="liFooter"><a class="navLink" href="#service">Servicio</a></li>
         <li class="liFooter"><a class="navLink" href="#location">Encuentranos</a></li>
        <li class="liFooter"><a class="navLink" href="/aboutus">Nosotros</a></li>
        <li class="liFooter"><a class="navLink" href="#footer">Contacto</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.Footer {
  background-color: #c00310;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding-inline: 10vw;
  padding-top: 20px;
  padding-bottom: 30px;
}

.navLink {
  text-decoration: none;
  color: white;
}

.footer1 {
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imgLogoFooter {
  width: 100px;
}

.pFooter1 {
  color: #fff;
  font-family: "Poppins", system-ui;
  width: 200px;
}

.footer2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
}

.h1Footer {
  color: #fff;
  font-family: "Poppins", system-ui;
  font-size: 24px;
  text-align: center;
}

.divFooterLogos {
  display: flex;
  gap: 18px;
}

.imgsLogos {
  width: 30px;
  cursor: pointer;
}

.pFooter2 {
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  width: 100%;
  font-weight: 700;
  text-align: center;
}

.footer3 {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.h1Footer2 {
  color: #fff;
  font-family: "Poppins", system-ui;
  font-size: 24px;
}

.ulFooter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  color: #fff;
  font-family: "Poppins", system-ui;
}

@media (max-width: 767px) {
  .Footer {
    padding: 20px;
    padding-block: 30px;
    flex-direction: column;
    gap: 40px;
  }

  .footer1 {
    gap: 15px;
    flex-direction: row;
    width: 300px;
  }

  .pFooter1 {
    width: 300px;
    text-align: center;
    font-weight: 500;
  }

  .footer3 {
    align-items: center;
    gap: 20px;
  }

  .ulFooter {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .liFooter {
    font-size: 18px;
    font-weight: 500;
  }
}

@media ((min-width: 767px) and (max-width: 1024px)) {
  .Footer {
    padding-inline: 5vw;
  }
}
</style>
