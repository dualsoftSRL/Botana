<script setup>
import Nav from "../components/Nav.vue";
import Body from "../components/Body.vue";
import AvailableSec from "../components/AvailableSec.vue";
import Footer from "../components/Footer.vue";

const handleResize = addEventListener("resize", () => {});
</script>

<template>
  <Nav />
  <main class="mainContainer">
    <div class="containerHome" id="home">
      <div class="divTitles">
        <h1 class="titulo">
          Crujientes por<br />
          fuera, <span class="yellow">irresistibles</span><br />
          por <span class="yellow">dentro.</span>
        </h1>
        <p class="pTtext">
          Donde se fabrican las mejores empanadas<br />artesanales, #LasFavoritas de todos!
        </p>
      </div>
      <div class="imagenes">
        <img class="img2" src="../assets/img/Empanadas2.webp" />
        <img class="img1" src="../assets/img/Empanadas1.webp" />
      </div>
    </div>
    <Body />
    <AvailableSec />
  </main>
  <Footer />
  <a
    class="wsFloat"
    href="https://wa.me/+18095780571"
    target="_blank"
    aria-label="WhatsApp"
  >
    <img class="imgWsFloat" src="../assets/img/WhatsAppFloat.webp" />
  </a>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap");

.containerHome {
  display: flex;
  height: 360px;
  background-color: #c00310;
  padding-inline: 50px;
  padding-left: 80px;
  justify-content: space-between;
}

.imgCurva {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.imagenes {
  width: 400px;
  display: flex;
  align-items: end;
  position: relative;
}

.img1 {
  width: 350px;
  height: auto;
  padding-bottom: 20px;
}

.img2 {
  position: absolute;
  right: 280px;
  width: 370px;
  height: auto;
}

.titulo {
  padding-top: 25px;
  width: auto;
  font-size: 48px;
  color: #fff;
  font-family: "Baloo 2", sans-serif;
  line-height: 1.5;
}

.divTitles {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.yellow {
  color: #ffb304;
}

.pTtext {
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", system-ui;
}

#home {
  scroll-margin-top: 80px;
}

.wsFloat {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;
}

.wsFloat:hover {
  transform: scale(1.1);
}

.imgWsFloat {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .containerHome {
    height: auto;
    padding-inline: 30px;
    padding-bottom: 10px;
    flex-direction: column;
    align-items: center;
  }

  .titulo {
    font-size: 36px;
  }

  .imagenes {
    width: 300px;
    height: 200px;
    display: flex;
    align-items: end;
    justify-content: center;
    position: relative;
  }

  .pTtext {
    width: 400px;
  }

  .divTitles {
    text-align: center;
    align-items: center;
    width: 400px;
  }

  .img1 {
    width: 150px;
    position: absolute;
    right: 30px;
  }

  .img2 {
    z-index: 200;
    right: 120px;
    width: 180px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .imagenes {
    width: 300px;
    height: 300px;
  }

  .pTtext {
    width: 350px;
  }

  .containerHome {
    padding-inline: 30px;
    height: auto;
  }

  .titulo {
    font-size: 37px;
  }

  .img1 {
    width: 240px;
    right: -20px;
    position: absolute;
  }

  .img2 {
    right: 120px;
    position: absolute;
    width: 270px;
  }
}
</style>
