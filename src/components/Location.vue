<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase.js";

const locations = ref([]);

const cargarUbicaciones = async () => {
  try {
    const q = query(
      collection(db, "ubicaciones"),
      orderBy("timestamp", "asc")
    );
    const querySnapshot = await getDocs(q);

    locations.value = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      lugar: docSnap.data().titulo,
      direccion: docSnap.data().ubicacion,
      descripcion: docSnap.data().descripcion,
      image: "/imgs/Cart.webp",
    }));
  } catch (e) {
    console.error("Error al cargar ubicaciones:", e);
  }
};

onMounted(() => {
  cargarUbicaciones();
});
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
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
    >
      <SwiperSlide v-for="loc in locations" :key="loc.id">
        <div class="card">
          <div class="cardInfoContainer">
            <i class="fa-solid fa-location-dot fa-2xl iconLocation"></i>
            <div class="cardInfoDiv">
              <h1 class="place">{{ loc.lugar }}</h1>
              <p class="location">{{ loc.descripcion }}</p>
            </div>
            <img
              v-if="loc.image"
              :src="loc.image"
              :alt="loc.lugar"
              class="imageLocal"
            />
          </div>
          <a :href="loc.direccion" target="_blank" class="btonMaps">
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
  cursor: pointer;
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
