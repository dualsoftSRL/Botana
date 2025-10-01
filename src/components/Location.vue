<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const locations = [
  {
    id: 1,
    lugar: "Principal",
    direccion: "Calle Duarte, Frente al Club Amigos de la Duarte, Moca",
    image: "/imgs/Cart.webp",
    maps: "https://maps.app.goo.gl/HkyjM3zmUDKqwB1F9",
  },
  {
    id: 2,
    lugar: "La Baristeria",
    direccion: "Calle Salcedo #117, Moca",
    image: "/imgs/Cart.webp",
    maps: "https://maps.app.goo.gl/S6ccTcDmCzWT7NhGA",
  },
  {
    id: 3,
    lugar: "El Cafe de Luz",
    direccion: "Plaza Soho, C/Rosario esquina Doct. Alfonseca , Moca",
    image: "/imgs/Cart.webp",
    maps: "https://maps.app.goo.gl/guYbNSQniPou2XB78",
  },
  {
    id: 4,
    lugar: "Recreativo Sport Bar & Tapas",
    direccion: "Calle Duarte #51 Moca",
    image: "/imgs/Cart.webp",
    maps: "https://maps.app.goo.gl/dTJym95xvPCX9RmUA",
  },
  {
    id: 5,
    lugar: "Cafeteria Miky",
    direccion: "Moca, Espaillat 56000",
    image: "/imgs/Cart.webp",
    maps: "https://maps.app.goo.gl/2S4GZcZZyb54vCV58",
  },
  {
    id: 6,
    lugar: "Parque Cayetano Germosen",
    direccion: "Calle Hermanas Mirabal, Cayetano Germosén, Provincia Espaillat",
    image: "/imgs/Cart.webp",
    maps: "https://maps.app.goo.gl/uGwkJioV47TCcFU16",
  },
];
</script>

<template>
  <section class="locationGeneral" id="location">
    <h1 class="h1Location">
      Nuestros Puntos
      <i class="fa-solid fa-map-pin pinLocation"></i>
    </h1>

    <Swiper
      :modules="[Navigation]"
      navigation
      :centered-slides="false"
      :breakpoints="{
        0: { slidesPerView: 1 },       // 📱 móviles
        768: { slidesPerView: 2 },     // 📲 tablets
        1024: { slidesPerView: 3 }     // 💻 desktop
      }"
    >
      <SwiperSlide v-for="loc in locations" :key="loc.id">
        <div class="card">
          <div class="cardInfoContainer">
            <i class="fa-solid fa-location-dot fa-2xl iconLocation"></i>
            <div class="cardInfoDiv">
              <h1 class="place">{{ loc.lugar }}</h1>
              <p class="location">{{ loc.direccion }}</p>
            </div>
            <img
              v-if="loc.image"
              :src="loc.image"
              :alt="loc.lugar"
              class="imageLocal"
            />
          </div>
          <a :href="loc.maps" target="_blank" class="btonMaps">
            Ver en Google Maps
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.locationGeneral {
  padding-block: 30px;
}

.swiper.swiper-initialized.swiper-horizontal {
  margin-inline: 100px !important;
}

:deep(.swiper-button-next) {
  padding-left: 35px;
  min-width: 50px;
}

:deep(.swiper-button-prev) {
  padding-right: 35px;
  min-width: 50px;
}

.swiper-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.h1Location {
  font-family: "Baloo 2", system-ui;
  text-align: center;
  padding-block: 20px;
}

.pinLocation {
  color: #c00310;
}

.card {
  padding-top: 30px;
  padding-bottom: 20px;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 8px;
  gap: 10px;
}

.cardInfoContainer {
  display: flex;
  height: 100%;
  padding-block: 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.cardInfoDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.imageLocal {
  width: 130px;
  border-radius: 100%;
}

.iconLocation {
  font-size: 20px;
  color: #c00310;
}

.place {
  font-family: "Poppins", system-ui;
  font-size: 20px;
}

.location {
  font-family: "Poppins", system-ui;
  width: 250px;
  text-align: center;
}

.btonMaps {
  background-color: #c00310;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-family: "Poppins", system-ui;
  transition: transform 0.2s ease;
}

.btonMaps:hover {
  transform: translateY(-2px);
}

/* 📱 móviles */
@media (max-width: 767px) {
  .swiper.swiper-initialized.swiper-horizontal {
    margin-inline: 10px !important;
  }
}

/* 📲 tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  .swiper.swiper-initialized.swiper-horizontal {
    margin-inline: 40px !important;
  }
}
</style>
