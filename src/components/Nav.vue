<template>
  <div class="containerNav">
    <div class="divNav">
      <nav class="nav">
        <div class="imgDiv">
          <img class="imgLogo" src="../assets/img/LogoBotana.webp" />
        </div>
        <div class="divBotones">
          <ul class="ulNav">
            <li class="lis">
              <a class="navLink" href="#home">
                <i class="fa-solid fa-home"></i>
                <h2 class="navLinkTitle">Inicio</h2>
              </a>
            </li>
            <li class="lis">
              <a class="navLink" href="#body">
                <i class="fa-solid fa-users"></i>
                <h2 class="navLinkTitle">Nosotros</h2></a
              >
            </li>
            <li class="lis">
              <a class="navLink" href="#footer">
                <i class="fa-solid fa-phone"></i>
                <h2 class="navLinkTitle">Contacto</h2></a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.containerNav {
  height: 90px;
  width: 100%;
}

.navLinkTitle {
  font-size: 20px;
}

.navLink {
  display: flex;
  gap: 10px;
  align-items: center;
}

.divNav {
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.nav {
  background-color: #c00310;
  display: flex;
  justify-content: center;
  height: 100%;
  justify-content: start;
  padding-inline: 40px;
  padding-left: 70px;
}

.divBotones {
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgDiv {
  display: flex;
  align-items: center;
}

.imgLogo {
  width: 90px;
}

.ulNav {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 70px;
  padding-left: 70px;
  font-weight: bold;
  font-family: "Poppins", system-ui;
  padding: 0;
  margin: 0;
}

.lis a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  font-family: "Poppins", system-ui;
}

.lis {
  color: #fff;
  display: flex;
  gap: 10px;
  align-items: center;
}

@media (max-width: 767px) {
  .nav {
    padding-inline: 20px;
  }

  .divBotones {
    width: 100%;
  }

  .ulNav {
    gap: 40px;
  }

  .navLinkTitle {
    display: none;
  }

  .lis {
    font-size: 20px;
  }
}
</style>
