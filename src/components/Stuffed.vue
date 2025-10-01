<script setup lang="js">
const stuffed = [
  {
    nombre: "Relleno de",
    textColor1: "Tomate",
    textColor2: "Queso",
    colorClass1: "textRed",
    colorClass2: "textYellow",
    image: "/imgs/EmpanadaTomateQueso.webp",
  },
  {
    nombre: "Relleno de",
    textColor: "Pizza",
    colorClass: "textRed",
    image: "/imgs/EmpanadaPizza.webp",
  },
  {
    nombre: "Relleno de",
    textColor: "Puerro",
    colorClass: "textGreen",
    image: "/imgs/EmpanadaPuerro.webp",
  },
  {
    nombre: "Relleno de",
    textColor: "Queso",
    colorClass: "textYellow",
    image: "/imgs/EmpanadaQueso.webp",
  },
  {
    nombre: "Relleno de",
    textColor: "Cerdo",
    colorClass: "textBlue",
    image: "/imgs/EmpanadasCerdo.webp",
  },
  {
    nombre: "Relleno de",
    textColor: "Pollo crema",
    colorClass: "textOrange",
    image: "/imgs/EmpanadaPolloCrema.webp",
  },
  {
    nombre: "Relleno de",
    textColor: "Maiz",
    colorClass: "textYellow",
    image: "/imgs/EmpanadaMatiz.webp",
  },
];
</script>

<template>
  <section class="stuffedSection" id="menu">
    <header>
      <h1 class="stuffedTitleSection">
        Elige tu <span class="titleTextRed">favorito!</span>
      </h1>
    </header>
    <p class="stuffedDescription">
      ¡No te quedes con el antojo! Aquí te esperamos con las mejores empanadas
      de la zona.
    </p>
    <div class="articleContainer">
      <article
        class="articleStuffed"
        v-for="(empanada, index) in stuffed"
        :key="index"
      >
        <img class="stuffedImg" :src="empanada.image" />
        <h2 class="stuffedTitle">
          {{ empanada.nombre }}
          <span v-if="empanada.textColor1" :class="empanada.colorClass1">
            {{ empanada.textColor1 }}
          </span>
          <span v-if="empanada.textColor2"> y </span>
          <span v-if="empanada.textColor2" :class="empanada.colorClass2">
            {{ empanada.textColor2 }}
          </span>
          <span v-else :class="empanada.colorClass">{{
            empanada.textColor
          }}</span>
        </h2>
      </article>
    </div>
  </section>
</template>

<style scoped>
.stuffedSection {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-top: 40px;
  padding-bottom: 30px;
}

.articleContainer {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.stuffedTitleSection {
  font-size: 32px;
  font-weight: 600;
  font-family: "Baloo 2", system-ui;
}

.articleStuffed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stuffedImg {
  width: 140px;
}

.stuffedTitle {
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  font-family: "Baloo 2", system-ui;
}

/* Colores */
.textRed {
  color: #c00310;
  font-weight: 600;
}
.textYellow {
  color: #f4c20d;
  font-weight: 600;
}
.textBlue {
  color: #0057e7;
  font-weight: 600;
}
.textGreen {
  color: #2e7d32;
  font-weight: 600;
}
.textOrange {
  color: #ef6c00;
  font-weight: 600;
}

@media (max-width: 768px) {

  .stuffedSection {
    padding-inline: 10px;
  }

  .articleContainer {
    width: 100%;
  }

  .stuffedDescription {
    text-align: center;
  }
}
</style>
