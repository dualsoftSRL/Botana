<template>
  <section class="sectionBody" id="body">
    <div class="containerTexts">
      <h1 class="h1Body">Rápido, Confiable y Delicioso</h1>
      <p class="pBody">Tu tiempo vale, tu sabor<br />también.</p>
    </div>
    <div class="containerArticle">
      <article class="article">
        <img class="imgsBody" src="../assets/img/Order.webp" />
        <div class="divTexts">
          <h1 class="h1Title">
            <i class="fa-solid fa-mobile-screen"></i>Pedido en linea
          </h1>
          <p class="p2Body">
            Haz tu pedido en segundos y disfruta tus empanadas sin salir de
            casa.
          </p>
        </div>
      </article>
      <article class="article">
        <img class="imgsBody" src="../assets/img/Delivery.webp" />
        <div class="divTexts">
          <h1 class="h1Title">
            <i class="fa-solid fa-motorcycle"></i>Entrega rápida
          </h1>
          <p class="p2Body">
            Un servicio que siempre llega a tiempo y con calidad.
          </p>
        </div>
      </article>
      <article class="article">
        <img class="imgsBody" src="../assets/img/Spot.webp" />
        <div class="divTexts">
          <h1 class="h1Title">
            <i class="fa-solid fa-handshake"></i>Atención en el local
          </h1>
          <p class="p2Body">
            En Botana siempre te recibimos con una sonrisa y el mejor servicio.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.sectionBody {
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.containerTexts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.h1Body {
  font-size: 32px;
  font-family: "Baloo 2", system-ui;
  color: #000;
}

.pBody {
  font-size: 18px;
  color: #c00310;
  font-family: "Poppins", system-ui;
  font-weight: bold;
}

.p2Body {
  font-family: "Poppins", system-ui;
  width: 270px;
  text-align: center;
}

.containerArticle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
}

.imgsBody {
  width: 250px;
}

.h1Title {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: "Baloo 2", system-ui;
  font-size: 20px;
}

.h1Title i {
  color: #fcb100;
}

.divTexts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@media (max-width: 767px) {
  .availableSec {
    padding-block: 20px;
  }

  .sectionBody {
    height: auto;
  }

  .containerArticle {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .availableArticleContainer {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .imgsBody {
    width: 200px;
  }

  .containerArticle {
    gap: 10px;
  }

  .p2Body {
    width: 240px;
  }
}
</style>
