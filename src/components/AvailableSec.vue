<template>
  <section class="availableSec">
    <header class="headerSec">
      <h1 class="h1TitleSec">Tus empanadas a domicilio <i class="fa-solid fa-box"></i></h1>
    </header>
    <div class="avArticleContainer">
      <article class="articleSec2">
        <div class="divGeneral2">
          <h1 class="h1Sec">
            PedidosYa
            <i class="fa-solid fa-basket-shopping"></i>
          </h1>
          <p class="pSec1">
            Tambien nos encontramos en PedidosYa, donde puedes pedir tus
            empandas comodamente desde tu hogar
          </p>
          <p class="pSec2">
            Tus empanadas favoritas a un solo click, rápido, fácil y
            <span class="yellow2">económico</span>, qué esperas!
          </p>
          <button class="button">
            PedidosYa
            <img class="lgPedidosYa" src="../assets/img/PedidosYaLogo.webp" />
          </button>
          <p class="pSec3">Las favoritas de todos!</p>
        </div>
        <div class="imgsPedidos">
          <img class="phonePedidos" src="../assets/img/Phone.webp" />
          <img class="figure" src="../assets/img/Ellipse.webp" />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.availableSec {
  display: flex;
  flex-direction: column;
  padding-block: 30px;
  gap: 10px;
}

.headerSec {
  display: flex;
  justify-content: center;
  align-items: center;
}

.h1TitleSec {
  font-family: "Baloo 2", system-ui;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.articleSec {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
}

.articleSec2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
}

.imgCart {
  width: 550px;
}

.divCartImg {
  background-color: #f3f3f3;
  width: auto;
  border-radius: 20px;
}

.divCartGeneral {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.h1Sec {
  font-size: 30px;
  font-family: "Poppins", system-ui;
  color: #c00310;
}

.ubicationDiv {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.p1 {
  color: #000;
  font-size: 22px;
  font-weight: 700;
  font-family: "Poppins", system-ui;
  width: 300px;
  text-align: center;
}

.fa-box {
  color: rgb(255, 196, 0);
  font-size: 26px;
}

.p2 {
  width: 350px;
  font-family: "Poppins", system-ui;
  text-align: center;
}

.yellow2 {
  color: #fcb100;
  font-weight: 700;
}

.h1Sec {
  color: #c00310;
  font-size: 36px;
}

.divGeneral2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.pSec1 {
  font-family: "Poppins", system-ui;
  font-weight: 600;
  width: 330px;
  line-height: 1.7;
  font-size: 20px;
}

.pSec2 {
  font-family: "Poppins", system-ui;
  width: 330px;
  line-height: 1.5;
  font-size: 18px;
}

.button {
  width: 145px;
  height: 35px;
  border-radius: 20px;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #fa2121;
  font-family: "Poppins", system-ui;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button:hover {
  transform: scale(1.1);
}

.lgPedidosYa {
  width: 22px;
}

.pSec3 {
  font-family: "Baloo 2", system-ui;
  color: #fcb100;
  font-weight: bold;
  font-size: 42px;
}

.figure {
  width: 390px;
  height: auto;
}

.phonePedidos {
  position: absolute;
  right: 40px;
  width: 330px;
  top: 80px;
  height: auto;
  padding-bottom: 20px;
}

.imgsPedidos {
  display: flex;
  justify-content: center;
  position: relative;
}

@media (max-width: 767px) {
  .availableSec {
    display: flex;
    flex-direction: column;
  }

  .articleSec {
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
  }

  .articleSec2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .avArticleContainer {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .h1TitleSec {
    font-size: 26px;
  }

  .pSec3 {
    text-align: center;
  }

  .figure {
    width: 250px;
  }

  .phonePedidos {
    width: 200px;
    padding-left: 30px;
    padding-bottom: 0;
  }

  .imgCart {
    width: 400px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .imgCart {
    width: 400px;
  }

  .articleSec {
    gap: 5px;
  }

  .avArticleContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .figure {
    width: 325px;
  }

  .phonePedidos {
    width: 250px;
  }

  .articleSec2 {
    gap: 25px;
  }

  .pSec3 {
    font-size: 33px;
  }
}
</style>
