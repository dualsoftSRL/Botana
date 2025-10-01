<script setup lang="js">
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue"


const nuestrosValores = [
  {
    title: "Casero",
    icon: "fa-solid fa-bowl-food",
    description: "Cada empanada está hecha como en casa, con el mismo cariño y dedicación de una receta familiar."
  },
  {
    title: "Fresco",
    icon: "fa-solid fa-leaf",
    description: "Usamos ingredientes seleccionados y de calidad, preparados al momento para garantizar sabor y frescura en cada bocado"
  },
  {
    title: "Auténtico",
    icon: "fa-solid fa-award",
    description: "Conservamos la esencia de la empanada tradicional, pero con nuestro propio toque especial que nos hace únicos."
  }
];
</script>

<template>
  <Nav />
  <main class="mainContainer">
    <header class="aboutUsHeader">
      <h1 class="headerTitle">
        Sobre nosotros <i class="groupIcon fa-solid fa-people-group"></i>
      </h1>
      <p class="headerDescription">
        En Botana creemos que las mejores empanadas son las que se hacen con
        amor, ingredientes frescos y un toque casero que nos distingue.
      </p>
    </header>

    <section class="missionContainer">
      <div class="missionDiv">
        <header class="missionHeader">
          <h2 class="missionTitle">
            Nuestra mision <i class="fa-solid fa-bullseye"></i>
          </h2>
        </header>
        <p class="missionDescription">
          En Botana creemos que una empanada no es solo un antojo, sino un
          momento para compartir. Nacimos con la idea de llevar a la mesa ese
          sabor casero que siempre une a la familia y a los amigos.
          <br />
          <br />
          Usamos ingredientes frescos y recetas tradicionales para preparar
          empanadas crujientes y rellenas de sabor, hechas con dedicación y
          cariño en cada bocado.
          <br />
          <br />
          Nuestro propósito es simple: que cada persona que nos visite se sienta
          como en casa y disfrute de una experiencia deliciosa y auténtica.
        </p>
      </div>
      <img class="missionImg" src="../assets/img/BotanaReunionImg.webp" />
    </section>

    <section class="valoresSection">
      <header>
        <h2 class="valoresTitle">
          Nuestros valores <i class="fa-solid fa-star starIcon"></i>
        </h2>
      </header>
      <div class="valoresDiv">
        <article class="valoresArticle" v-for="valores in nuestrosValores">
          <h3 class="valoresCardTitle">
            {{ valores.title }} <i :class="valores.icon"></i>
          </h3>
          <p class="valoresDescription">{{ valores.description }}</p>
        </article>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
:global(body) {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.mainContainer {
  width: 100vw;
  height: auto;
  padding-inline: 150px;
  padding-top: 50px;
  padding-bottom: 100px;
}

.aboutUsHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.headerTitle {
  font-family: "Baloo 2", system-ui;
  font-weight: 600;
  font-size: 36px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.headerDescription {
  width: 60%;
  text-align: center;
}

.missionContainer {
  padding-block: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.missionTitle {
  font-family: "Baloo 2", system-ui;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.missionDiv {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.missionImg {
  width: 430px;
  height: auto;
}

.missionDiv .missionHeader {
  display: flex;
  justify-content: center;
}

.valoresSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.valoresDiv {
  display: flex;
  gap: 50px;
}

.valoresTitle {
  font-family: "Baloo 2", system-ui;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.valoresArticle {
  width: 270px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.valoresCardTitle {
  font-family: "Baloo 2", system-ui;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.valoresDescription {
  text-align: center;
}

.starIcon {
  color: rgb(255, 207, 17);
}

.fa-bullseye {
  color: rgb(255, 49, 49);
}

.groupIcon {
  font-size: 30px;
}

@media (max-width: 767px) {
  .mainContainer {
    padding-inline: 20px;
  }

  .headerDescription {
    width: 90%;
  }

  .missionContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .missionDiv {
    padding-inline: 30px;
  }

  .missionDescription {
    text-align: center;
  }

  .missionImg {
    width: 330px;
  }

  .valoresDiv {
    flex-direction: column;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mainContainer {
    padding-inline: 20px;
  }

  .headerDescription {
    width: 90%;
  }

  .missionContainer {
    display: flex;

    gap: 15px;
  }

  .missionDiv {
    padding-inline: 30px;
  }

  .missionDescription {
    text-align: center;
  }

  .missionImg {
    width: 330px;
  }

  .valoresDescription {
    width: 240px;
  }

  .valoresSection {
    justify-content: center;
    align-items: center;
  }

  .valoresDiv {
    flex-direction: row;
    gap: 10px;
    width: 750px;
  }
}
</style>
