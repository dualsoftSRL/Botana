<script setup lang="js">
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue"


const nuestrosValores = [
  {
    title: "Calidad",
    icon: "fa-solid fa-bowl-food",
    description: "Cuidamos cada detalle, desde los ingredientes hasta el empaque final."
  },
  {
    title: "Pasión",
    icon: "fa-solid fa-leaf",
    description: "Amamos lo que hacemos, y eso se siente en cada empanada."
  },
  {
    title: "Innovación",
    icon: "fa-solid fa-lightbulb",
    description: "Mejoramos constantemente nuestros procesos y productos."
  },
  {
    title: "Compromiso",
    icon: "fa-solid fa-handshake",
    description: "Cumplimos con nuestros clientes, distribuidores y consumidores."
  },
  {
    title: "Autenticidad",
    icon: "fa-solid fa-gem",
    description: "Somos los creadores de la receta original que marcó la diferencia."
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
        <span class="spanBold">Botana</span> nació con una idea sencilla: crear
        empanadas artesanales con el sabor de casa, pero con la calidad y
        consistencia que merecen los mejores productos dominicanos.<br /><br />
        La fundadora y creadora de la receta, Yuri Henriquez, durante años de
        pruebas, esfuerzos y mucho amor perfeccionó una receta única: una masa
        dorada y seca que, aunque se fría, parezca horneada. Este detalle nos
        distingue y convierte cada empanada en una experiencia ligera, deliciosa
        y diferente.<br /><br />
        Cada <span class="spanBold">Botana</span> se elabora con materia prima
        fresca, procesos controlados y mucho amor. Detrás de cada empanada hay
        años de pruebas, sacrificios y pasión por ofrecer lo mejor.<br /><br />
        Hoy, nuestras empanadas están presentes en cafeterías, colegios,
        clínicas y puntos de venta, llevando el auténtico sabor de
        <span class="spanBold">Botana</span> a miles de dominicanos cada día.<br /><br />
        Somos más que una fábrica de empanadas: somos una familia que cree en la
        <span class="spanBold">calidad</span>, en la
        <span class="spanBold">tradición</span> y en la
        <span class="spanBold">innovación.</span> <br /><br />
        Por eso decimos con orgullo:
      </p>
      <span class="eslogan">Botana las Originales!</span>
    </header>

    <section class="missionContainer">
      <div class="divMissionVision">
        <div class="missionDiv">
          <header class="missionHeader">
            <h2 class="missionTitle">
              Nuestra mision <i class="fa-solid fa-bullseye"></i>
            </h2>
          </header>
          <p class="missionDescription">
            Ofrecer empanadas artesanales con un sabor auténtico y una calidad
            superior, elaboradas bajo procesos que combinan tradición,
            innovación y amor por los detalles, para brindar a cada cliente una
            experiencia deliciosa en cualquier momento del día.
          </p>
        </div>
        <div class="visionDiv">
          <header class="visionHeader">
            <h3 class="visionTitle">
              Nuestra Visión <i class="fa-solid fa-rocket"></i>
            </h3>
          </header>
          <p class="visionDescription">
            Ser la marca dominicana líder en productos artesanales listos para
            comer, reconocida por su sabor inconfundible, su innovación
            constante y su compromiso con la excelencia.
          </p>
        </div>
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
    <section class="sectionFounder">
      <header>
        <h1 class="founderSectionTitle">Mensaje del fundador</h1>
      </header>
      <p class="founderDescription">
        Botana nació de un sueño familiar y de muchas noches de trabajo, de
        pruebas, errores y aprendizajes. Cada empanada representa un pedacito de
        ese esfuerzo, de esa pasión por hacer algo bien hecho, con amor y
        orgullo dominicano.
        <br />
        <br />
        Hoy, ver a tantas personas disfrutar nuestras empanadas es la mayor
        recompensa. Gracias a todos los #BotanaLovers que nos han acompañado en
        este camino… ¡seguiremos trabajando para que cada bocado siga siendo una
        experiencia original!
      </p>
      <p class="foundersP">— Yuri y Francisco Jorge</p>
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
  width: 70%;
  text-align: center;
}

.spanBold {
  font-weight: bold;
}

.divMissionVision {
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.missionImg {
  width: 430px;
  height: auto;
}

.missionDiv .missionHeader {
  display: flex;
  justify-content: center;
}

.visionDiv .visionHeader {
  display: flex;
  justify-content: center;
}

.visionDiv {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.visionTitle {
  font-family: "Baloo 2", system-ui;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.eslogan {
  color: #fcb100;
  font-weight: bold;
  font-size: 20px;
}

.valoresSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.valoresDiv {
  display: flex;
  gap: 40px;
}

.valoresTitle {
  font-family: "Baloo 2", system-ui;
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.valoresArticle {
  width: 80%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
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

.fa-rocket {
  color: rgb(255, 49, 49);
}

.groupIcon {
  font-size: 30px;
}

.sectionFounder {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
}

.founderSectionTitle {
  text-align: center;
}

.founderDescription {
  width: 70%;
  text-align: center;
}

.foundersP {
  text-align: end;
  width: 100%;
  font-weight: 700;
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

  .visionDescription {
    text-align: center;
  }

  .missionDescription {
    text-align: center;
  }

  .missionImg {
    width: 330px;
  }

  .valoresDiv {
    flex-direction: column;
    align-items: center;
  }

   .founderDescription {
    width: 90%;
    text-align: center;
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
