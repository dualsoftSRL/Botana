<script setup lang="js">
import Aside from "./Aside.vue"
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<template>
  <div class="containerNav">
     <Aside :isOpen="isMenuOpen" @closeMenu="isMenuOpen = false" />

    <div class="divNav">
      <nav class="nav">
        <div class="imgDiv">
          <img class="imgLogo" src="../assets/img/LogoBotana.webp" />
        </div>
       
        <div class="divBotones">
          <ul class="ulNav">
            <li class="lis">
              <a class="navLink" href="/">
                <h1 class="navLinkTitle">Inicio</h1>
              </a>
            </li>
            <li class="lis">
              <a class="navLink" href="#menu">
                <h1 class="navLinkTitle">Menú</h1>
              </a>
            </li>
            <li class="lis">
              <a class="navLink" href="#service">
                <h1 class="navLinkTitle">Servicio</h1>
              </a>
            </li>
            <li class="lis">
              <a class="navLink" href="#location">
                <h1 class="navLinkTitle">Encuentranos</h1>
              </a>
            </li>
            <li class="lis">
              <a class="navLink" href="/aboutus">
                <h1 class="navLinkTitle">Nosotros</h1></a
              >
            </li>
            <li class="lis">
              <a class="navLink" href="#footer">
                <h1 class="navLinkTitle">Contacto</h1>
              </a>
            </li>
          </ul>
        </div>
        <i 
          class="fa-solid fa-bars menuIcon"
          @click="isMenuOpen = true">
        </i>
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
  transition: 0.2s ease;
}

.navLinkTitle:hover {
  scale: 1.1;
  color: rgb(227, 227, 227);
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
  z-index: 900;
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

.menuIcon {
  display: none;
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

  .menuIcon  {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: end;
    color: white;
  }

  .divBotones {
    width: 100%;
  }

  .ulNav {
    gap: 10px;
  }

  .navLinkTitle {
    display: none;
  }

  .lis {
    font-size: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .nav {
    gap: 30px;
  }

  .ulNav {
    gap: 25px;
  }

  .navLinkTitle {
    font-size: 18px;
  }
}
</style>
